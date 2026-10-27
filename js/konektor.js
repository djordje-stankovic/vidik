/* ===========================================================================
   Konektor — „Put jednog broja" (uz css/konektor.css)

   Sedam koraka u krug: konektor se javi → pitanje sa telefona → kroz
   otvorenu vezu → provera i dnevnik → baza → odgovor nazad → pokušaj spolja.
   Koraci se biraju i klikom (tada samohod staje). Ništa se ne vrti dok scena
   nije na ekranu ili je kartica u pozadini; uz prefers-reduced-motion nema
   samohoda ni leta — klik samo postavi stanje koraka.
   =========================================================================== */
(function () {
  'use strict';
  var koren = document.querySelector('.put');
  if (!koren) return;
  var scena = koren.querySelector('.put-scena');
  var mirno = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  koren.classList.add('put-js');

  var S = {};
  ['telefon', 'servis', 'konektor', 'baza'].forEach(function (k) {
    var el = scena.querySelector('[data-s="' + k + '"]');
    S[k] = { el: el, stanje: el.querySelector('.put-stanje') };
  });
  var zona = scena.querySelector('.put-zona');
  var ekran = scena.querySelector('.put-ekran');
  var znacke = scena.querySelectorAll('.put-znacka');
  var svg = scena.querySelector('.put-linije');
  var dugmad = koren.querySelectorAll('.put-koraci button');
  var opisBr = koren.querySelector('.put-opis .br');
  var opisH = koren.querySelector('.put-opis h3');
  var opisP = koren.querySelector('.put-opis p');
  var opisOmot = koren.querySelector('.put-opis .put-tekst');
  var pauza = koren.querySelector('.put-dugme');
  var paket = function (ime) { return scena.querySelector('.put-paket.' + ime); };

  /* --- geometrija: centri stanica u pikselima scene ---------------------- */
  var centar = function (el) {
    var a = scena.getBoundingClientRect(), b = el.getBoundingClientRect();
    return { x: b.left - a.left + b.width / 2, y: b.top - a.top + b.height / 2 };
  };
  function crtaj() {
    var t = centar(S.telefon.el), s = centar(S.servis.el), k = centar(S.konektor.el), d = centar(S.baza.el);
    var p = function (a, b) { return 'M' + a.x + ' ' + a.y + ' L' + b.x + ' ' + b.y; };
    svg.querySelector('.l-1').setAttribute('d', p(t, s));
    svg.querySelector('.l-2').setAttribute('d', p(s, k));
    svg.querySelector('.l-3').setAttribute('d', p(k, d));
    svg.querySelector('.l-tunel').setAttribute('d', p(k, s));
    svg.querySelector('.l-tunel-sjaj').setAttribute('d', p(k, s));
  }
  crtaj();
  window.addEventListener('resize', crtaj);

  /* --- pokret ------------------------------------------------------------ */
  var gen = 0, zivi = [];
  var spava = function (ms, g) {
    return new Promise(function (r, odbij) { setTimeout(function () { g === gen ? r() : odbij(); }, ms); });
  };
  var poz = function (c) { return 'translate(' + c.x + 'px,' + c.y + 'px) translate(-50%,-50%)'; };
  /* paket od stanice do stanice; `put` je niz stanica, ostaje vidljiv ako `ostani` */
  function leti(el, put, ms, ostani, g) {
    var tacke = put.map(function (x) { return centar(x.el || x); });
    var kadrovi = tacke.map(function (c, i) {
      return { transform: poz(c), opacity: (i === 0 || (i === tacke.length - 1 && !ostani)) ? 0 : 1, offset: i / (tacke.length - 1) };
    });
    if (tacke.length === 2) {
      kadrovi = [
        { transform: poz(tacke[0]), opacity: 0, offset: 0 },
        { transform: poz(tacke[0]), opacity: 1, offset: .08 },
        { transform: poz(tacke[1]), opacity: 1, offset: ostani ? 1 : .9 }
      ];
      if (!ostani) kadrovi.push({ transform: poz(tacke[1]), opacity: 0, offset: 1 });
    }
    var a = el.animate(kadrovi, { duration: ms, easing: 'cubic-bezier(.45,.05,.35,1)', fill: 'forwards' });
    zivi.push(a);
    return a.finished.then(function () { if (g !== gen) throw 0; });
  }
  /* uljez: krene spolja, udari u zid zone i odbije se */
  function odbijSe(el, ms, g) {
    var a = scena.getBoundingClientRect(), z = zona.getBoundingClientRect();
    var usko = window.innerWidth <= 820;
    var start = usko ? { x: z.left - a.left + z.width * .7, y: z.top - a.top - 120 }
                     : { x: z.left - a.left - 150, y: z.top - a.top - 34 };
    var zid = usko ? { x: start.x, y: z.top - a.top - 4 } : { x: z.left - a.left - 4, y: z.top - a.top + z.height * .3 };
    var nazad = { x: start.x + (zid.x - start.x) * .45, y: start.y + (zid.y - start.y) * .45 };
    var an = el.animate([
      { transform: poz(start), opacity: 0, offset: 0 },
      { transform: poz(start), opacity: 1, offset: .1 },
      { transform: poz(zid), opacity: 1, offset: .5, easing: 'cubic-bezier(.2,.8,.3,1)' },
      { transform: poz(nazad), opacity: 1, offset: .78 },
      { transform: poz(nazad), opacity: 0, offset: 1 }
    ], { duration: ms, easing: 'cubic-bezier(.5,0,.75,0)', fill: 'forwards' });
    zivi.push(an);
    setTimeout(function () { if (g === gen) { zona.classList.add('udar'); } }, ms * .5);
    setTimeout(function () { zona.classList.remove('udar'); }, ms * .5 + 700);
    return an.finished.then(function () { if (g !== gen) throw 0; });
  }

  /* --- stanje posle koraka k (ono što ostaje kad korak prođe) ------------ */
  function postavi(k) {
    var h = function (s, t) { S[s].stanje.innerHTML = t; };
    scena.classList.toggle('veza', k >= 0);
    h('servis', k >= 0 ? '<span class="ok">● konektor na vezi</span>' : 'čeka konektor');
    h('konektor', k >= 0 ? 'otvorio vezu <b>ka servisu</b>' : 'pokreće se…');
    h('telefon', k >= 1 ? 'pita: <b>ko nam duguje?</b>' : 'čeka vas');
    h('baza', k >= 4 ? '<span class="ok">odgovorila</span> · 0,3 s' : 'radi kao i uvek');
    if (k >= 5) h('servis', 'sačuvano: <b>ništa</b>');
    if (k >= 6) { h('konektor', 'odbijeno upisa: <b class="ne">1</b>'); h('baza', 'nije ni videla'); }
    znacke[0].classList.toggle('vidi', k >= 3);
    znacke[1].classList.toggle('vidi', k >= 3);
    znacke[2].classList.toggle('vidi', k >= 6);
    ekran.querySelector('b').textContent = k >= 5 ? '3,1 mil' : '—';
    ekran.classList.toggle('svez', k === 5);
    ['telefon', 'servis', 'konektor', 'baza'].forEach(function (s) { S[s].el.classList.remove('tu'); });
  }
  var tu = function (s) { S[s].el.classList.add('tu'); };
  var nijeTu = function (s) { S[s].el.classList.remove('tu'); };

  /* --- koraci ------------------------------------------------------------ */
  var KORACI = [
    { ms: 4200, igraj: function (g) {
        postavi(-1); tu('konektor');
        return spava(500, g).then(function () { return leti(paket('mali'), [S.konektor, S.servis], 1700, false, g); })
          .then(function () { postavi(0); tu('servis'); });
      } },
    { ms: 4000, igraj: function (g) {
        postavi(0); tu('telefon');
        return leti(paket('pitanje'), [S.telefon, S.servis], 1600, true, g).then(function () { nijeTu('telefon'); tu('servis'); });
      } },
    { ms: 4000, igraj: function (g) {
        postavi(1); tu('servis');
        return leti(paket('pitanje'), [S.servis, S.konektor], 1700, true, g).then(function () { nijeTu('servis'); tu('konektor'); });
      } },
    { ms: 4200, igraj: function (g) {
        postavi(2); tu('konektor');
        var p = paket('pitanje'); p.animate([{ transform: poz(centar(S.konektor.el)), opacity: 1 }], { duration: 1, fill: 'forwards' });
        return spava(450, g).then(function () { znacke[0].classList.add('vidi'); return spava(650, g); })
          .then(function () { znacke[1].classList.add('vidi'); });
      } },
    { ms: 4200, igraj: function (g) {
        postavi(3); tu('konektor');
        return leti(paket('pitanje'), [S.konektor, S.baza], 1200, false, g)
          .then(function () { nijeTu('konektor'); tu('baza'); return spava(350, g); })
          .then(function () { S.baza.stanje.innerHTML = '<span class="ok">odgovorila</span> · 0,3 s'; return leti(paket('odgovor'), [S.baza, S.konektor], 1100, true, g); })
          .then(function () { nijeTu('baza'); tu('konektor'); });
      } },
    { ms: 4800, igraj: function (g) {
        postavi(4); tu('konektor');
        return leti(paket('odgovor'), [S.konektor, S.servis, S.telefon], 2600, false, g)
          .then(function () { postavi(5); tu('telefon'); });
      } },
    { ms: 5400, igraj: function (g) {
        postavi(5);
        return odbijSe(paket('uljez'), 2200, g)
          .then(function () { tu('servis'); return leti(paket('upis'), [S.servis, S.konektor], 1400, true, g); })
          .then(function () {
            nijeTu('servis'); tu('konektor');
            znacke[2].classList.add('vidi');
            S.konektor.stanje.innerHTML = 'odbijeno upisa: <b class="ne">1</b>';
            S.baza.stanje.innerHTML = 'nije ni videla';
            var p = paket('upis');
            var a = p.animate([{ opacity: 1, transform: poz(centar(S.konektor.el)) }, { opacity: 0, transform: poz(centar(S.konektor.el)) + ' scale(.6)' }], { duration: 500, delay: 500, fill: 'forwards' });
            zivi.push(a);
          });
      } }
  ];

  /* --- upravljanje ------------------------------------------------------- */
  var tekuci = -1, tajmer = null, ide = !mirno, naEkranu = false, ruka = false;

  function opisi(k) {
    var li = dugmad[k].parentNode;
    opisOmot.classList.add('menja');
    setTimeout(function () {
      opisBr.textContent = 'korak ' + (k + 1) + ' od ' + dugmad.length;
      opisH.textContent = dugmad[k].textContent.trim();
      opisP.innerHTML = li.querySelector('p').innerHTML;
      opisOmot.classList.remove('menja');
    }, mirno ? 0 : 180);
  }

  function idi(k) {
    gen++;
    var g = gen;
    zivi.forEach(function (a) { try { a.cancel(); } catch (e) {} });
    zivi = [];
    clearTimeout(tajmer);
    zona.classList.remove('udar');
    tekuci = k;
    dugmad.forEach(function (b, i) {
      b.classList.toggle('tu', i === k);
      b.classList.toggle('bio', i < k);
      b.setAttribute('aria-current', i === k ? 'step' : 'false');
      var t = b.querySelector('.tok');
      t.classList.remove('tece'); void t.offsetWidth;
      if (i === k && ide) { b.style.setProperty('--trajanje', KORACI[k].ms + 'ms'); t.classList.add('tece'); }
    });
    opisi(k);
    if (mirno) { postavi(k); return; }
    KORACI[k].igraj(g).catch(function () {});
    if (ide) tajmer = setTimeout(function () { if (g === gen) idi((k + 1) % KORACI.length); }, KORACI[k].ms);
  }

  function natpis() {
    pauza.innerHTML = ide
      ? '<svg viewBox="0 0 16 16" fill="currentColor"><rect x="3" y="2" width="3.5" height="12" rx="1"/><rect x="9.5" y="2" width="3.5" height="12" rx="1"/></svg>Zaustavi'
      : '<svg viewBox="0 0 16 16" fill="currentColor"><path d="M4 2.5v11a.6.6 0 0 0 .9.5l8.6-5.5a.6.6 0 0 0 0-1L4.9 2a.6.6 0 0 0-.9.5z"/></svg>' + (ruka ? 'Nastavi' : 'Pusti');
  }

  dugmad.forEach(function (b, i) {
    b.addEventListener('click', function () { ide = false; ruka = true; natpis(); idi(i); });
  });
  pauza.addEventListener('click', function () {
    ide = !ide; natpis();
    if (ide) idi(tekuci < 0 ? 0 : (ruka ? tekuci : (tekuci + 1) % KORACI.length));
    else { clearTimeout(tajmer); gen++; dugmad.forEach(function (b) { b.querySelector('.tok').classList.remove('tece'); }); postavi(tekuci); }
  });
  natpis();

  /* kreće tek kad se vidi; staje kad ode sa ekrana ili kartica u pozadinu */
  var kreni = function () {
    if (!naEkranu || document.hidden || !ide) return;
    idi(tekuci < 0 ? 0 : tekuci);
  };
  var stani = function () { clearTimeout(tajmer); gen++; zivi.forEach(function (a) { try { a.cancel(); } catch (e) {} }); if (tekuci >= 0) postavi(tekuci); };

  if (mirno) { idi(5); return; }
  postavi(-1);
  opisi(0);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (u) {
      u.forEach(function (x) { naEkranu = x.isIntersecting; naEkranu ? kreni() : stani(); });
    }, { threshold: .35 }).observe(scena);
  } else { naEkranu = true; kreni(); }
  document.addEventListener('visibilitychange', function () { document.hidden ? stani() : kreni(); });
})();

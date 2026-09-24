/* ===========================================================================
   VIDIK — ponašanje stranice

   Sve je vezano za IntersectionObserver: ništa se ne animira dok se ne vidi,
   i sve poštuje `prefers-reduced-motion`. Bez ijedne biblioteke — sajt mora
   da se otvori i sa USB-a, kod klijenta bez interneta.
   =========================================================================== */
(function () {
  'use strict';

  var mirno = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- navigacija: senka na skrol + meni na telefonu ---------- */
  var nav = document.querySelector('.nav');
  if (nav) {
    var senka = function () { nav.classList.toggle('zalepljen', window.scrollY > 8); };
    senka();
    window.addEventListener('scroll', senka, { passive: true });
  }

  var meniDugme = document.querySelector('.meni-dugme');
  var veze = document.querySelector('.nav-veze');
  if (meniDugme && veze) {
    meniDugme.onclick = function () {
      var otvoren = veze.classList.toggle('otvoren');
      meniDugme.setAttribute('aria-expanded', otvoren ? 'true' : 'false');
    };
    veze.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') veze.classList.remove('otvoren');
    });
  }

  /* ---------- pojavljivanje na skrol ---------- */
  var zaPojavu = document.querySelectorAll('.pojava');
  if (mirno) {
    zaPojavu.forEach(function (el) { el.classList.add('vidljiv'); });
  } else if ('IntersectionObserver' in window) {
    var oko = new IntersectionObserver(function (ulazi) {
      ulazi.forEach(function (u) {
        if (u.isIntersecting) { u.target.classList.add('vidljiv'); oko.unobserve(u.target); }
      });
    }, { threshold: .12, rootMargin: '0px 0px -60px' });
    zaPojavu.forEach(function (el) { oko.observe(el); });
  } else {
    zaPojavu.forEach(function (el) { el.classList.add('vidljiv'); });
  }

  /* ---------- crtanje SVG linije u mokapu ---------- */
  var linije = document.querySelectorAll('.crtaj');
  linije.forEach(function (put) {
    var duz = put.getTotalLength ? put.getTotalLength() : 0;
    if (!duz || mirno) return;
    put.style.strokeDasharray = duz;
    put.style.strokeDashoffset = duz;
  });

  if ('IntersectionObserver' in window && !mirno) {
    var okoSvg = new IntersectionObserver(function (ulazi) {
      ulazi.forEach(function (u) {
        if (!u.isIntersecting) return;
        var put = u.target;
        put.style.transition = 'stroke-dashoffset 1.6s cubic-bezier(.22,.61,.36,1)';
        put.style.strokeDashoffset = '0';
        okoSvg.unobserve(put);
      });
    }, { threshold: .3 });
    linije.forEach(function (p) { okoSvg.observe(p); });
  }

  /* ---------- stubići u mokapu rastu iz dna ---------- */
  var stubici = document.querySelectorAll('.stub');
  if ('IntersectionObserver' in window && !mirno) {
    var okoSt = new IntersectionObserver(function (ulazi) {
      ulazi.forEach(function (u) {
        if (!u.isIntersecting) return;
        var g = u.target;
        var visina = g.dataset.v;
        g.style.transition = 'height .9s cubic-bezier(.22,.61,.36,1) ' + (g.dataset.k || 0) + 's';
        g.style.height = visina + '%';
        okoSt.unobserve(g);
      });
    }, { threshold: .3 });
    stubici.forEach(function (g) { g.style.height = '0%'; okoSt.observe(g); });
  } else {
    stubici.forEach(function (g) { g.style.height = g.dataset.v + '%'; });
  }

  /* ---------- forma: bez servera, samo potvrda ---------- */
  var forma = document.querySelector('#forma');
  if (forma) {
    forma.addEventListener('submit', function (e) {
      e.preventDefault();
      var poruka = document.querySelector('#formaPoruka');
      var ime = (forma.querySelector('[name=ime]') || {}).value || '';
      poruka.hidden = false;
      poruka.innerHTML = '<b>Hvala' + (ime ? ', ' + ime.split(' ')[0] : '') + '.</b> ' +
        'Javljamo se u toku istog radnog dana — obično u roku od dva sata.';
      forma.reset();
      poruka.scrollIntoView({ behavior: mirno ? 'auto' : 'smooth', block: 'center' });
    });
  }

  /* ---------- godina u podnožju ---------- */
  var god = document.querySelector('#godina');
  if (god) god.textContent = new Date().getFullYear();
})();

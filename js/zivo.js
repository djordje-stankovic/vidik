/* ===========================================================================
   VIDIK — živi delovi početne strane (uz css/zivo.css)

   1. hero panel smenjuje tri ekrana: pregled → kontrola PDV → novac
   2. trka: stoperica 40 minuta naspram 8 sekundi
   3. konektor: pronađe bazu, napravi ključ, upari se

   Ništa ne radi dok se ne vidi i dok je kartica u pozadini, i sve staje na
   krajnjem stanju uz prefers-reduced-motion.
   =========================================================================== */
(function () {
  'use strict';
  var mirno = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var vidi = function (el, prag, fn) {
    if (!el) return;
    if (!('IntersectionObserver' in window)) { fn(true); return; }
    new IntersectionObserver(function (u) { u.forEach(function (x) { fn(x.isIntersecting); }); }, { threshold: prag }).observe(el);
  };

  /* ---------- 1. hero scene ---------- */
  var panel = document.querySelector('.panel-zivi');
  if (panel) {
    var scene = panel.querySelectorAll('.scena');
    var tabovi = panel.querySelectorAll('.scena-tabovi button');
    var traka = panel.querySelector('.scena-traka');
    var ime = panel.querySelector('.scena-ime');
    var TRAJANJE = 6500, tekuca = 0, tajmer = null, naEkranu = false, misNad = false;

    /* vidik.js crta ovu liniju jednom, preko inline stila; ovde se crta pri
       svakom ulasku scene, pa inline stil mora da ode */
    var linija = panel.querySelector('.graf-okvir path');
    if (linija) { linija.style.strokeDasharray = ''; linija.style.strokeDashoffset = ''; linija.style.transition = ''; }

    var postaviTraku = function () {
      var t = tabovi[tekuca];
      traka.style.left = t.offsetLeft + 'px';
      traka.style.width = t.offsetWidth + 'px';
      traka.classList.remove('tece'); void traka.offsetWidth;
      if (!mirno && naEkranu && !misNad) { traka.style.setProperty('--trajanje', TRAJANJE + 'ms'); traka.classList.add('tece'); }
    };
    var pokazi = function (i) {
      tekuca = (i + scene.length) % scene.length;
      scene.forEach(function (s, k) { s.classList.toggle('aktivna', k === tekuca); });
      tabovi.forEach(function (t, k) { t.classList.toggle('tu', k === tekuca); });
      ime.style.opacity = 0;
      setTimeout(function () { ime.textContent = scene[tekuca].dataset.ime; ime.style.opacity = 1; }, 180);
      postaviTraku();
      zakazi();
    };
    var zakazi = function () {
      clearTimeout(tajmer);
      if (mirno || !naEkranu || misNad || document.hidden) return;
      tajmer = setTimeout(function () { pokazi(tekuca + 1); }, TRAJANJE);
    };
    tabovi.forEach(function (t, k) { t.addEventListener('click', function () { pokazi(k); }); });
    panel.addEventListener('mouseenter', function () { misNad = true; clearTimeout(tajmer); traka.classList.remove('tece'); });
    panel.addEventListener('mouseleave', function () { misNad = false; postaviTraku(); zakazi(); });
    document.addEventListener('visibilitychange', zakazi);
    window.addEventListener('resize', postaviTraku);
    vidi(panel, 0.35, function (da) { naEkranu = da; postaviTraku(); zakazi(); });
    postaviTraku();
  }

  /* ---------- 2. trka ---------- */
  var trka = document.querySelector('.trka');
  if (trka) {
    var mmss = function (s) { s = Math.round(s); return ('0' + Math.floor(s / 60)).slice(-2) + ':' + ('0' + s % 60).slice(-2); };
    var pokreni = function () {
      trka.querySelectorAll('.strana').forEach(function (strana) {
        var sat = strana.querySelector('.stoperica-vreme');
        if (!sat) return;
        var cilj = +sat.dataset.do, traje = mirno ? 0 : +sat.dataset.trajanje;
        var koraci = strana.querySelectorAll('.korak');
        var t0 = performance.now();
        var kadrira = function (t) {
          var p = traje ? Math.min(1, (t - t0) / traje) : 1;
          /* leva strana ide ravnomerno kao stvaran posao; desna se zaleti pa stane */
          var q = strana.classList.contains('strana-lose') ? p : 1 - Math.pow(1 - p, 2);
          sat.textContent = mmss(cilj * q);
          koraci.forEach(function (k, i) { k.classList.toggle('prosao', q >= (i + 0.35) / koraci.length); });
          if (p < 1) requestAnimationFrame(kadrira);
          else if (!strana.classList.contains('strana-lose')) strana.classList.add('zavrsio');
        };
        requestAnimationFrame(kadrira);
      });
    };
    var krenula = false;
    vidi(trka, 0.4, function (da) { if (da && !krenula) { krenula = true; pokreni(); } });
  }

  /* ---------- 3. konektor ---------- */
  var kon = document.querySelector('.konektor-telo');
  if (kon) {
    var redovi = kon.querySelectorAll('.k-red');
    var kljuc = kon.querySelector('.k-kljuc-tekst');
    var status = kon.querySelector('.k-status'), stTekst = kon.querySelector('.k-status-tekst');
    /* primer oblika ključa — pravi ključ pravi server klijenta */
    var KLJUC = 'VDK-7Q4M-X2PA-9FJD';
    var radi = false, vidljiv = false, koraci = [];
    var posle = function (ms, fn) { koraci.push(setTimeout(fn, mirno ? 0 : ms)); };
    var reset = function () {
      koraci.forEach(clearTimeout); koraci = [];
      redovi.forEach(function (r) { r.classList.remove('radi', 'gotov'); });
      kljuc.textContent = ' '; kljuc.classList.remove('kuca');
      status.classList.remove('upareno'); stTekst.textContent = 'čeka uparivanje…';
    };
    var krug = function () {
      reset(); radi = true;
      var t = 300;
      redovi.forEach(function (r) {
        posle(t, function () { r.classList.add('radi'); });
        t += 850;
        posle(t, function () { r.classList.remove('radi'); r.classList.add('gotov'); });
      });
      t += 300;
      posle(t, function () { kljuc.textContent = ''; kljuc.classList.add('kuca'); });
      KLJUC.split('').forEach(function (z, i) { posle(t + 60 + i * 55, function () { kljuc.textContent += z; }); });
      t += 60 + KLJUC.length * 55 + 1400;
      posle(t, function () { kljuc.classList.remove('kuca'); status.classList.add('upareno'); stTekst.textContent = 'upareno — podaci stižu u Vidik'; });
      posle(t + 5000, function () { radi = false; if (vidljiv && !mirno) krug(); });
    };
    vidi(kon, 0.4, function (da) {
      vidljiv = da;
      if (da && !radi) krug();
    });
  }
})();

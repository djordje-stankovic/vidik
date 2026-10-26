/* ===========================================================================
   pocetna.js — početna kuće SajtPro (26.10.2026). Pokreće je `node napravi.js`.

   Kuća ima tri proizvoda nad PANTHEON-om i jedan konektor za sva tri. Ovde
   se ne prodaje nijedan od njih posebno — svaki ima svoju stranu
   (vidik.html, prodavnica.html, fioka.html); početna kaže šta je koji i da se
   kod klijenta instalira jedan program.
   =========================================================================== */
const { napravi } = require('./napravi.js');

const ZNAK = {
  vidik: '<svg viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="8" fill="#c0522c"/><path d="M5.5 11.5 16 24.5 26.5 11.5" fill="none" stroke="#fbf3e8" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="16" cy="10.6" r="3.3" fill="#fbf3e8"/></svg>',
  izlog: '<svg viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="8" fill="#2f4858"/><path d="M6.5 7.5h19v3.4a2.375 2.375 0 0 1-4.75 0 2.375 2.375 0 0 1-4.75 0 2.375 2.375 0 0 1-4.75 0 2.375 2.375 0 0 1-4.75 0z" fill="#fbf3e8"/><rect x="8.4" y="16.2" width="15.2" height="9.6" rx="2.4" fill="none" stroke="#fbf3e8" stroke-width="2.4"/><circle cx="16" cy="21" r="2.3" fill="#fbf3e8"/></svg>',
  fioka: '<svg viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="8" fill="#1f6f5c"/><rect x="6" y="8.5" width="20" height="16" rx="3" fill="none" stroke="#fbf3e8" stroke-width="2.4"/><path d="M6 15.5h20" stroke="#fbf3e8" stroke-width="2.4"/><rect x="12.5" y="18.6" width="7" height="2.4" rx="1.2" fill="#fbf3e8"/></svg>'
};

const proizvod = (klasa, k, ime, podnaslov, uvod, tacke, strana, vise, demo) => `
      <article class="proizvod ${klasa} pojava ${k}">
        <div class="proizvod-vrh"><span class="proizvod-znak">${ZNAK[klasa]}</span>
          <div><h3>${ime}</h3><span class="proizvod-pod">${podnaslov}</span></div></div>
        <p>${uvod}</p>
        <ul class="spisak">
${tacke.map(t => `          <li>${t}</li>`).join('\n')}
        </ul>
        <div class="proizvod-akcije">
          <a href="${strana}" class="dugme dugme-glavni dugme-mali">${vise}</a>
          ${demo}
        </div>
      </article>`;

napravi('index.html',
  'SajtPro — alati za firme koje rade u PANTHEON-u',
  'Tri alata nad PANTHEON bazom: Vidik (brojevi i kontrole na telefonu), Izlog (online prodavnica iz PANTHEON-a) i Fioka (računi sa telefona u PANTHEON). Kod vas se instalira jedan konektor za sva tri.',
  `

<!-- ============================== HERO ============================== -->
<section class="hero kuca-hero">
  <div class="aureola aureola-1"></div>
  <div class="aureola aureola-2"></div>
  <div class="omot hero-mreza">
    <div class="pojava vidljiv">
      <span class="nadnaslov">SajtPro · alati za PANTHEON</span>
      <h1>PANTHEON vodi knjige. <em>Mi pravimo ono oko njih.</em></h1>
      <p class="uvod">
        Tri alata nad bazom koju već imate: <b>Vidik</b> iznosi brojeve na telefon,
        <b>Izlog</b> stavlja artikle na sajt, <b>Fioka</b> unosi račune sa telefona.
        Kod vas se instalira samo jedan konektor &mdash; za sva tri.
      </p>
      <div class="hero-akcije">
        <a href="#proizvodi" class="dugme dugme-glavni">Pogledajte proizvode</a>
        <a href="kako-radi.html" class="dugme dugme-tihi">Kako radi konektor</a>
      </div>
    </div>

    <!-- sema: baza -> jedan konektor -> tri proizvoda. HTML, ne slika. -->
    <div class="sema pojava vidljiv k1" aria-label="Jedna baza, jedan konektor, tri proizvoda">
      <div class="sema-baza">
        <small>vaš server</small>
        <b>PANTHEON baza</b>
        <span>ostaje kod vas, ništa se ne seli</span>
      </div>
      <div class="sema-veza"><i></i></div>
      <div class="sema-konektor">
        <b>konektor</b>
        <span>jedan program &middot; odlazna veza 443 &middot; bez otvorenih portova</span>
      </div>
      <div class="sema-grane"><i></i><i></i><i></i></div>
      <div class="sema-proizvodi">
        <a class="sema-p vidik" href="vidik.html">${ZNAK.vidik}<b>Vidik</b><small>čita brojeve</small></a>
        <a class="sema-p izlog" href="prodavnica.html">${ZNAK.izlog}<b>Izlog</b><small>prodaje na sajtu</small></a>
        <a class="sema-p fioka" href="fioka.html">${ZNAK.fioka}<b>Fioka</b><small>unosi račune</small></a>
      </div>
    </div>
  </div>
</section>

<!-- =========================== PROIZVODI ============================ -->
<section class="blok" id="proizvodi">
  <div class="omot">
    <div class="pojava" style="max-width:760px">
      <span class="nadnaslov">Tri proizvoda</span>
      <h2>Uzmite jedan, ili sva tri</h2>
      <p class="uvod" style="margin-top:14px">Svaki odgovara na drugo pitanje. Sledeći se dodaje
        bez nove instalacije i bez druge konektor licence.</p>
    </div>
    <div class="proizvodi">
${proizvod('vidik', '', 'Vidik', 'brojevi i kontrole',
  'Za direktora i računovodstvo: ono što PANTHEON zna, na jednom ekranu i na telefonu &mdash; i javi kad nešto ne štima.',
  ['Novac za 30 dana, ko duguje i ko kasni',
   'Knjiga računa naspram POPDV-a, sa razlogom svake razlike',
   'Klik na bilo koji broj vodi do dokumenta iza njega',
   'Samo čita &mdash; ne upisuje ništa'],
  'vidik.html', 'Više o Vidiku',
  '<a href="kontakt.html" class="dugme dugme-tihi dugme-mali" data-vidik="demo" data-tekst="Demo">Zakažite prikaz</a>')}
${proizvod('izlog', 'k1', 'Izlog', 'online prodavnica',
  'Prodavnica koja je već popunjena: artikli, slike, cene i zalihe dolaze pravo iz PANTHEON-a.',
  ['Napravi se za pola sata, bez prepisivanja kataloga',
   'Zaliha i cena uvek kao u PANTHEON-u',
   'Narudžbina ulazi u PANTHEON kao narudžbina kupca, sa rezervacijom robe',
   'Fiskalizacija ostaje tamo gde je i sada'],
  'prodavnica.html', 'Više o Izlogu',
  '<a href="kontakt.html" class="dugme dugme-tihi dugme-mali" data-shop="demo" data-tekst="Demo prodavnica">Zakažite prikaz</a>')}
${proizvod('fioka', 'k2', 'Fioka', 'računi sa telefona',
  'Račun iz džepa, u PANTHEON-u za minut: zaposleni skenira QR, ostalo se popuni samo.',
  ['Poreska daje stavke i PDV, APR podatke dobavljača',
   'U PANTHEON ide ulazni račun troška &mdash; i dobavljač, ako ga nema',
   'Artikal po vrsti troška ili po vašem pravilu',
   'Isti račun ne može da uđe dvaput'],
  'fioka.html', 'Više o Fioki',
  '<a href="kontakt.html" class="dugme dugme-tihi dugme-mali" data-fioka="otvori" data-tekst="Otvorite Fioku">Zakažite prikaz</a>')}
    </div>
  </div>
</section>

<!-- ============================ KONEKTOR ============================ -->
<section class="blok mrak" id="konektor">
  <div class="omot">
    <div class="mreza m-2" style="gap:60px;align-items:center">
      <div class="pojava">
        <span class="nadnaslov">Jedan konektor</span>
        <h2>Instalira se jednom, na serveru gde je baza</h2>
        <p class="uvod" style="margin:16px 0 30px">Jedan <span class="mono">.exe</span>, veza ide samo napolje.
          Kod vas se ne otvara nijedan port, nema VPN-a ni javne adrese.</p>
        <ol class="put">
          <li><b>Pustite konektor na server</b><span>Sam nađe SQL instance i PANTHEON baze. Vi štiklirate koje delite.</span></li>
          <li><b>Nalepite ključ</b><span>U Vidik, Izlog ili Fioku. Ključ pravi vaš server, ne mi.</span></li>
          <li><b>Uključite šta vam treba</b><span>Vidik samo čita. Upis narudžbine (Izlog) i računa (Fioka) radi tek kad ga uključite u panelu konektora.</span></li>
        </ol>
        <a href="kako-radi.html" class="put-veza" style="margin-top:6px">Bezbednost, licenca i pitanja IT službe &rarr;</a>
      </div>

      <div class="pojava k1">
        <div class="panel konektor-prozor" style="background:var(--ugalj2);border-color:rgba(240,231,218,.12)">
          <div class="panel-traka" style="background:rgba(240,231,218,.05);border-color:rgba(240,231,218,.1)">
            <span class="tacka"></span><span class="tacka"></span><span class="tacka"></span>
            <span class="panel-naslov">konektor</span>
          </div>
          <div class="panel-telo konektor-telo">
            <div class="k-red" data-k="0"><i></i>Tražim SQL instance na ovoj mašini…<b class="k-ok">nađena</b></div>
            <div class="k-red" data-k="1"><i></i>PANTHEON baze<b class="k-ok">prepoznate</b></div>
            <div class="k-red" data-k="2"><i></i>Nalog<b class="k-ok">samo čitanje</b></div>
            <div class="k-red" data-k="3"><i></i>Veza napolje, 443/TLS<b class="k-ok">aktivna</b></div>
            <div class="k-kljuc"><small>Vaš ključ — nalepite ga u Vidik, Izlog ili Fioku</small><code class="k-kljuc-tekst">&nbsp;</code></div>
            <div class="k-status"><span class="k-tacka"></span><span class="k-status-tekst">čeka uparivanje…</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ============================= KO SMO ============================= -->
<section class="blok-tanak" style="background:var(--papir2);border-bottom:1px solid var(--linija)">
  <div class="omot">
    <div class="mreza m-2" style="gap:54px">
      <div class="pojava">
        <span class="nadnaslov">Ko to pravi</span>
        <h2>Iz poziva koje smo godinama primali</h2>
      </div>
      <div class="pojava k1">
        <p class="uvod" style="margin-top:0">Radimo sa PANTHEON-om godinama &mdash; kao programeri i podrška kod
          klijenata. Sva tri alata su nastala iz istih pitanja: „zašto se ovo ne slaže",
          „kad će ovo biti na sajtu", „ko će ovo da prekuca".</p>
        <p>Ne zamenjujemo PANTHEON i ne diramo njegova podešavanja. Sve što pravimo radi
          pored njega, nad istom bazom, i prestaje da postoji kad se konektor ugasi.</p>
      </div>
    </div>
  </div>
</section>

<!-- ============================== CTA =============================== -->
<section class="blok">
  <div class="omot cta pojava">
    <span class="nadnaslov" style="justify-content:center">Sledeći korak</span>
    <h2>Pogledajte na svojim podacima</h2>
    <p class="uvod">Prikaz traje dvadeset minuta i radi se na vašoj bazi. Recite koji vas
      proizvod zanima &mdash; ili sva tri.</p>
    <div class="cta-akcije">
      <a href="kontakt.html" class="dugme dugme-glavni">Zakažite prikaz</a>
      <a href="cene.html" class="dugme dugme-tihi">Pogledajte cene</a>
    </div>
  </div>
</section>`,
  { css: '\n<link rel="stylesheet" href="css/zivo.css">\n<link rel="stylesheet" href="css/kuca.css">', skripte: '\n<script src="js/zivo.js"></script>' });

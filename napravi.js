/* ===========================================================================
   napravi.js — sastavlja podstranice sajta.

   Zaglavlje i podnožje su ovde na jednom mestu da se navigacija ne bi
   razišla po stranicama. Pokreće se ručno: `node napravi.js`.

   Od 26.10.2026 sajt je SajtPro — kuća sa tri proizvoda nad PANTHEON-om
   (Vidik, Izlog, Fioka) i jednim konektorom za sva tri. Početna je kuća;
   dosadašnja početna Vidika je `vidik.html`.

   Ručno pisane strane (vidik, kontakt) generator ne prepisuje, ali im
   ZAMENI zaglavlje i podnožje (`prepraviRucne`) — inače bi se meni na njima
   razišao sa ostatkom čim se doda proizvod.
   =========================================================================== */
const fs = require('fs');

/* Adresa kokpita NIJE ovde nego u `js/vidik.js` (promenljiva `KOKPIT`).

   Ranije je stajala ovde i pri nepostavljenoj vrednosti upisivala doslovan
   `DEMO_ADRESA` u HTML — što je i otišlo u objavu i stajalo na živom sajtu kao
   pokvareno dugme. Sada dugmad u HTML-u vode na `kontakt.html` i nose
   `data-vidik`; skripta im promeni adresu i natpis tek kad kokpit dobije
   domen. Nepodešen sajt tako nema nijedan mrtav link. */

const DOMEN = 'https://sajtpro.rs';

/* Meni: kuća, pa tri proizvoda, pa ono što je zajedničko. Podstrane Vidika
   (mogućnosti, kontrole) pale „Vidik" u meniju. */
const STRANE = [
  ['index.html', 'Početna'],
  ['vidik.html', 'Vidik', ['mogucnosti.html', 'kontrole.html']],
  ['prodavnica.html', 'Izlog'],
  ['fioka.html', 'Fioka'],
  ['kako-radi.html', 'Konektor'],
  ['cene.html', 'Cene']
];

/* Znak kuće: tri trake u bojama tri proizvoda (Vidik terakota, Izlog
   škriljac, Fioka zelena) na ugljenoj pločici. Isti crtež je favicon. */
const ZNAK_SVG = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='8' fill='%23171310'/><rect x='7' y='13' width='4.6' height='12' rx='2.3' fill='%23c0522c'/><rect x='13.7' y='9' width='4.6' height='16' rx='2.3' fill='%235b8aa6'/><rect x='20.4' y='6' width='4.6' height='19' rx='2.3' fill='%233f9a80'/></svg>`;

const glava = (naslov, opis, dodatak = '') => `<!doctype html>
<html lang="sr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${naslov}</title>
<meta name="description" content="${opis}">
<meta property="og:title" content="${naslov}">
<meta property="og:description" content="${opis}">
<meta property="og:image" content="${DOMEN}/og.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/stil.css">${dodatak}
<link rel="icon" href="data:image/svg+xml,${ZNAK_SVG}">
</head>
<body>`;

const nav = tekuca => `<header class="nav">
  <div class="omot nav-red">
    <a class="znak" href="index.html" aria-label="SajtPro — početna">
      <span class="znak-ikona znak-kuca"></span>
      <span class="znak-ime">Sajt<span>Pro</span></span>
    </a>
    <button class="meni-dugme" aria-label="Meni" aria-expanded="false"><span></span><span></span><span></span></button>
    <nav class="nav-veze">
${STRANE.map(([f, i, pod]) => `      <a href="${f}"${f === tekuca || (pod || []).includes(tekuca) ? ' class="tu"' : ''}>${i}</a>`).join('\n')}
      <a href="kontakt.html" class="dugme dugme-glavni dugme-mali">Kontakt</a>
    </nav>
  </div>
</header>`;

const cta = (naslov, tekst) => `
<section class="blok">
  <div class="omot cta pojava">
    <span class="nadnaslov" style="justify-content:center">Sledeći korak</span>
    <h2>${naslov}</h2>
    <p class="uvod">${tekst}</p>
    <div class="cta-akcije">
      <a href="kontakt.html" class="dugme dugme-glavni"
         data-vidik="demo" data-tekst="Uđite u demo">Zakažite prikaz</a>
      <a href="cene.html" class="dugme dugme-tihi">Pogledajte cene</a>
    </div>
  </div>
</section>`;

const podnozje = `<footer class="podnozje">
  <div class="omot">
    <div class="podnozje-mreza">
      <div>
        <a class="znak" href="index.html" style="text-decoration:none">
          <span class="znak-ikona znak-kuca"></span>
          <span class="znak-ime" style="color:#fdfaf5">Sajt<span style="color:#e08a5f">Pro</span></span>
        </a>
        <p class="podnozje-o">
          Alati za firme koje rade u PANTHEON-u. Pravimo ih ljudi koji su
          godinama održavali te iste baze kod klijenata.
        </p>
      </div>
      <div>
        <h4>Proizvodi</h4>
        <a href="vidik.html">Vidik — brojevi i kontrole</a>
        <a href="prodavnica.html">Izlog — online prodavnica</a>
        <a href="fioka.html">Fioka — računi sa telefona</a>
        <a href="kako-radi.html">Konektor — jedan za sva tri</a>
        <a href="cene.html">Cene</a>
        <a href="kako-radi.html" data-vidik="preuzmi" data-tekst="Preuzmi konektor" hidden>Preuzmi konektor</a>
      </div>
      <div>
        <h4>Vidik</h4>
        <a href="mogucnosti.html#direktor">Za direktora</a>
        <a href="mogucnosti.html#knjigovodstvo">Za računovodstvo</a>
        <a href="kontrole.html">Kontrole</a>
        <a href="cene.html#agencije">Knjigovodstvene agencije</a>
        <a href="kako-radi.html#it">IT službe</a>
      </div>
      <div>
        <h4>Kontakt</h4>
        <a href="kontakt.html">Zakaži prikaz</a>
        <a href="mailto:info@sajtpro.rs">info@sajtpro.rs</a>
        <a href="tel:+381621025376">062 102 5376</a>
      </div>
    </div>
    <div class="podnozje-dno">
      <span>&copy; <span id="godina">2026</span> SajtPro. Sva prava zadržana.</span>
      <span>PANTHEON je zaštićeni znak kompanije Datalab. SajtPro je nezavisan proizvođač.</span>
    </div>
  </div>
</footer>`;

const kraj = (skripte = '') => `

<script src="js/vidik.js"></script>${skripte}
</body>
</html>`;

const vrh = (nadnaslov, naslov, uvod) => `
<section class="strana-vrh">
  <div class="aureola aureola-1"></div>
  <div class="omot">
    <span class="nadnaslov">${nadnaslov}</span>
    <h1>${naslov}</h1>
    <p class="uvod">${uvod}</p>
  </div>
</section>`;

function napravi(fajl, naslovSajta, opis, telo, { css = '', skripte = '' } = {}) {
  fs.writeFileSync(fajl, glava(naslovSajta, opis, css) + '\n' + nav(fajl) + telo + '\n\n' + podnozje + kraj(skripte) + '\n');
  console.log('  ' + fajl);
}

/* Ručno pisane strane: zameni zaglavlje, podnožje, og:image i favicon. */
function prepraviRucne(fajlovi) {
  for (const f of fajlovi) {
    if (!fs.existsSync(f)) continue;
    let s = fs.readFileSync(f, 'utf8');
    s = s.replace(/<header class="nav">[\s\S]*?<\/header>/, nav(f))
         .replace(/<footer class="podnozje">[\s\S]*?<\/footer>/, podnozje)
         .replace(/<meta property="og:image" content="[^"]*">/, `<meta property="og:image" content="${DOMEN}/og.png">`)
         .replace(/<link rel="icon" href="[^"]*">/, `<link rel="icon" href="data:image/svg+xml,${ZNAK_SVG}">`);
    fs.writeFileSync(f, s);
    console.log('  ' + f + ' (zaglavlje i podnožje)');
  }
}

module.exports = { napravi, vrh, cta, STRANE, prepraviRucne };

if (require.main === module) {
  require('./pocetna.js');
  require('./strane.js');
  prepraviRucne(['vidik.html', 'kontakt.html']);
}

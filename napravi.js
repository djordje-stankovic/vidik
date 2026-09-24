/* ===========================================================================
   napravi.js — sastavlja podstranice sajta.

   Zaglavlje i podnožje su ovde na jednom mestu da se navigacija ne bi
   razišla po stranicama. Pokreće se ručno: `node napravi.js`.
   Početna (index.html) je pisana zasebno i ovaj skript je ne dira.
   =========================================================================== */
const fs = require('fs');

/* Adresa kokpita NIJE ovde nego u `js/vidik.js` (promenljiva `KOKPIT`).

   Ranije je stajala ovde i pri nepostavljenoj vrednosti upisivala doslovan
   `DEMO_ADRESA` u HTML — što je i otišlo u objavu i stajalo na živom sajtu kao
   pokvareno dugme. Sada dugmad u HTML-u vode na `kontakt.html` i nose
   `data-vidik`; skripta im promeni adresu i natpis tek kad kokpit dobije
   domen. Nepodešen sajt tako nema nijedan mrtav link. */

const STRANE = [
  ['index.html', 'Početna'],
  ['mogucnosti.html', 'Mogućnosti'],
  ['kontrole.html', 'Kontrole'],
  ['kako-radi.html', 'Kako radi'],
  ['cene.html', 'Cene']
];

const glava = (naslov, opis) => `<!doctype html>
<html lang="sr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${naslov}</title>
<meta name="description" content="${opis}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/stil.css">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='8' fill='%23c0522c'/><g fill='white'><rect x='7' y='18' width='4' height='7' rx='1'/><rect x='14' y='13' width='4' height='12' rx='1'/><rect x='21' y='8' width='4' height='17' rx='1'/></g></svg>">
</head>
<body>`;

const nav = tekuca => `
<header class="nav">
  <div class="omot nav-red">
    <a class="znak" href="index.html">
      <span class="znak-ikona"></span>
      <span class="znak-ime">Vid<span>ik</span></span>
    </a>
    <button class="meni-dugme" aria-label="Meni" aria-expanded="false"><span></span><span></span><span></span></button>
    <nav class="nav-veze">
${STRANE.map(([f, i]) => `      <a href="${f}"${f === tekuca ? ' class="tu"' : ''}>${i}</a>`).join('\n')}
      <a href="kontakt.html" data-vidik="demo" data-tekst="Demo" hidden>Demo</a>
      <a href="kontakt.html" class="dugme dugme-glavni dugme-mali">Zakaži prikaz</a>
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

const podnozje = `
<footer class="podnozje">
  <div class="omot">
    <div class="podnozje-mreza">
      <div>
        <a class="znak" href="index.html" style="text-decoration:none">
          <span class="znak-ikona"></span>
          <span class="znak-ime" style="color:#fdfaf5">Vid<span style="color:#e08a5f">ik</span></span>
        </a>
        <p class="podnozje-o">
          Upravljački kokpit nad ERP bazom. Pravimo ga ljudi koji su godinama
          održavali te iste baze kod klijenata.
        </p>
      </div>
      <div>
        <h4>Proizvod</h4>
        <a href="mogucnosti.html">Mogućnosti</a>
        <a href="kontrole.html">Kontrole</a>
        <a href="kako-radi.html">Kako radi</a>
        <a href="cene.html">Cene</a>
      </div>
      <div>
        <h4>Za koga</h4>
        <a href="mogucnosti.html#direktor">Direktore</a>
        <a href="mogucnosti.html#knjigovodstvo">Računovodstvo</a>
        <a href="cene.html#agencije">Knjigovodstvene agencije</a>
        <a href="kako-radi.html#it">IT službe</a>
      </div>
      <div>
        <h4>Kontakt</h4>
        <a href="kontakt.html">Zakaži prikaz</a>
        <a href="mailto:zdravo@vidik.rs">zdravo@vidik.rs</a>
        <a href="tel:+381113456789">011 345 6789</a>
      </div>
    </div>
    <div class="podnozje-dno">
      <span>&copy; <span id="godina">2026</span> Vidik. Sva prava zadržana.</span>
      <span>PANTHEON je zaštićeni znak kompanije Datalab. Vidik je nezavisan proizvod.</span>
    </div>
  </div>
</footer>

<script src="js/vidik.js"></script>
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

function napravi(fajl, naslovSajta, opis, telo) {
  fs.writeFileSync(fajl, glava(naslovSajta, opis) + nav(fajl) + telo + podnozje + '\n');
  console.log('  ' + fajl);
}

module.exports = { napravi, vrh, cta, STRANE };

if (require.main === module) require('./strane.js');

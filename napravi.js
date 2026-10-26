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

/* ---------------------------------------------------------------- SEO ----
   Jedno mesto za naslov, opis, prioritet u sitemap-u i strukturisane podatke
   svake strane (26.10.2026). Naslov do ~60 znakova, opis 120–160 — duže
   Google seče. `indeks: false` = ne ide u sitemap i nosi noindex (404).
   Cene u `ld` moraju da prate cene.html (strane.js).                      */
const ORG = { '@type': 'Organization', '@id': DOMEN + '/#org', name: 'SajtPro', url: DOMEN + '/',
  logo: DOMEN + '/logo.png', email: 'info@sajtpro.rs' };
const softver = (ime, opis, fajl, cena) => ({ '@type': 'SoftwareApplication', name: ime, description: opis,
  url: DOMEN + '/' + fajl, applicationCategory: 'BusinessApplication', operatingSystem: 'Web, Windows',
  offers: { '@type': 'Offer', price: cena, priceCurrency: 'EUR' }, publisher: { '@id': ORG['@id'] } });

const SEO = {
  'index.html': { prioritet: '1.0',
    naslov: 'SajtPro — Vidik, Izlog i Fioka: alati za PANTHEON',
    opis: 'Tri alata nad PANTHEON bazom: Vidik za brojeve i kontrole, Izlog za online prodaju, Fioka za račune sa telefona. Jedan konektor za sva tri.' },
  'vidik.html': { prioritet: '0.9', roditelj: null,
    naslov: 'Vidik — upravljački kokpit nad PANTHEON bazom | SajtPro',
    opis: 'Naplata, marža, zalihe i PDV iz PANTHEON baze na jednom ekranu i na telefonu. Kontrole koje same nađu grešku, klik do dokumenta. Samo čita.',
    proizvod: ['Vidik', 59] },
  'mogucnosti.html': { prioritet: '0.7', roditelj: ['Vidik', 'vidik.html'],
    naslov: 'Vidik: naplata, zalihe i PDV iz PANTHEON-a | SajtPro',
    opis: 'Sedam ekrana koji pokrivaju naplatu, prodaju, zalihe, rizike, blokade računa i ispise po meri — nad podacima koji već postoje u PANTHEON-u.' },
  'kontrole.html': { prioritet: '0.7', roditelj: ['Vidik', 'vidik.html'],
    naslov: 'Kontrola PDV-a i POPDV-a u PANTHEON-u — Vidik | SajtPro',
    opis: 'Knjiga računa naspram POPDV-a, konta naspram bilansnih obrazaca, moduli naspram glavne knjige — i uvek razlog razlike, do dokumenta.' },
  'prodavnica.html': { prioritet: '0.9',
    naslov: 'Izlog — online prodavnica iz PANTHEON-a | SajtPro',
    opis: 'Artikli, slike, cene i zalihe iz PANTHEON-a na sajtu, a narudžbina ulazi u PANTHEON kao narudžbina kupca. Prodavnica za pola sata.',
    proizvod: ['Izlog', 39] },
  'fioka.html': { prioritet: '0.9',
    naslov: 'Fioka — fiskalni računi sa telefona u PANTHEON | SajtPro',
    opis: 'Zaposleni skenira QR sa fiskalnog računa, a Fioka u PANTHEON-u napravi ulazni račun troška — sa stavkama, PDV-om i dobavljačem iz APR-a.',
    proizvod: ['Fioka', 29] },
  'kako-radi.html': { prioritet: '0.8',
    naslov: 'Konektor za PANTHEON — bezbednost i postavljanje | SajtPro',
    opis: 'Jedan konektor za Vidik, Izlog i Fioku: odlazna veza na 443, bez otvaranja portova, nalog samo za čitanje i dnevnik svakog upita.' },
  'cene.html': { prioritet: '0.8',
    naslov: 'Cene — Vidik, Izlog, Fioka i paketi | SajtPro',
    opis: 'Vidik 59, Izlog 39, Fioka 29 EUR mesečno po firmi, bez naplate po korisniku. Paket dva proizvoda −15%, sva tri 99 EUR. Prvi mesec Vidika besplatno.' },
  'kontakt.html': { prioritet: '0.6',
    naslov: 'Kontakt i prikaz na vašoj bazi | SajtPro',
    opis: 'Zakažite prikaz Vidika, Izloga ili Fioke na vašoj PANTHEON bazi — dvadeset minuta, bez pripreme. Pišite nam na info@sajtpro.rs.' },
  '404.html': { indeks: false, naslov: 'Strana ne postoji | SajtPro', opis: 'Ova strana ne postoji ili je premeštena.' }
};

const adresa = f => DOMEN + '/' + (f === 'index.html' ? '' : f);

function strukturisano(fajl, s) {
  const grafik = [ORG];
  if (fajl === 'index.html') grafik.push({ '@type': 'WebSite', '@id': DOMEN + '/#sajt', url: DOMEN + '/', name: 'SajtPro',
    inLanguage: 'sr', publisher: { '@id': ORG['@id'] } });
  if (s.proizvod) grafik.push(softver(s.proizvod[0], s.opis, fajl, s.proizvod[1]));
  if (fajl !== 'index.html') {
    const put = [['Početna', 'index.html'], ...(s.roditelj ? [s.roditelj] : []), [s.naslov.split(/ [—|:] /)[0], fajl]];
    grafik.push({ '@type': 'BreadcrumbList', itemListElement: put.map(([ime, f], i) => ({ '@type': 'ListItem', position: i + 1, name: ime, item: adresa(f) })) });
  }
  return `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': grafik })}</script>`;
}

const glava = (fajl, naslov, opis, dodatak = '') => {
  const s = SEO[fajl] || {};
  naslov = s.naslov || naslov; opis = s.opis || opis;
  const indeks = s.indeks !== false;
  return `<!doctype html>
<html lang="sr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${naslov}</title>
<meta name="description" content="${opis}">
${indeks ? `<link rel="canonical" href="${adresa(fajl)}">` : '<meta name="robots" content="noindex">'}
<meta property="og:type" content="website">
<meta property="og:site_name" content="SajtPro">
<meta property="og:locale" content="sr_RS">
<meta property="og:title" content="${naslov}">
<meta property="og:description" content="${opis}">
${indeks ? `<meta property="og:url" content="${adresa(fajl)}">\n` : ''}<meta property="og:image" content="${DOMEN}/og.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#faf6f0">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/stil.css">${dodatak}
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/favicon-48.png" sizes="48x48" type="image/png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
${indeks ? strukturisano(fajl, { ...s, naslov, opis }) + '\n' : ''}</head>
<body>`;
};

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
      </div>
    </div>
    <div class="podnozje-dno">
      <span>&copy; <span id="godina">2026</span> SajtPro. Sva prava zadržana.</span>
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
  fs.writeFileSync(fajl, glava(fajl, naslovSajta, opis, css) + '\n' + nav(fajl) + telo + '\n\n' + podnozje + kraj(skripte) + '\n');
  console.log('  ' + fajl);
}

/* Ručno pisane strane: ceo <head> (iz SEO, uz njihove dodatne stilove),
   zaglavlje i podnožje. Telo strane se ne dira. */
function prepraviRucne(fajlovi) {
  for (const f of fajlovi) {
    if (!fs.existsSync(f)) continue;
    let s = fs.readFileSync(f, 'utf8');
    const stara = (s.match(/<head>[\s\S]*?<\/head>/) || [''])[0];
    const naslov = (stara.match(/<title>([^<]*)/) || [])[1] || 'SajtPro';
    const opis = (stara.match(/name="description" content="([^"]*)/) || [])[1] || '';
    const dodatni = (stara.match(/<link rel="stylesheet" href="css\/(?!stil\.css)[^"]+">/g) || []).map(x => '\n' + x).join('');
    const novaGlava = glava(f, naslov, opis, dodatni);
    s = novaGlava + s.slice(s.indexOf('</head>') + '</head>\n<body>'.length)
      .replace(/<header class="nav">[\s\S]*?<\/header>/, nav(f))
      .replace(/<footer class="podnozje">[\s\S]*?<\/footer>/, podnozje);
    fs.writeFileSync(f, s);
    console.log('  ' + f + ' (glava, zaglavlje i podnožje)');
  }
}

/* Stari sajt na ovom domenu (izrada sajtova, do 26.10.2026): opšte strane
   vode na najbližu novu; ostale (izrada-sajtova-*, blog, /en/) namerno daju
   404 — drugi posao, preusmerenje na alate za PANTHEON bi Google video kao
   lažno („soft 404"). GitHub Pages nema 301, pa: meta refresh + canonical. */
const PREUSMERENJA = { 'o-nama.html': 'index.html', 'cenovnik.html': 'cene.html', 'kako-radimo.html': 'kako-radi.html' };

function pomocni() {
  /* 404: <base> jer GitHub Pages istu stranu daje i za /en/about.html */
  const n = fs.readFileSync('404.html', 'utf8').replace('<meta charset="utf-8">', '<meta charset="utf-8">\n<base href="/">');
  fs.writeFileSync('404.html', n);
  for (const [stara, nova] of Object.entries(PREUSMERENJA)) {
    fs.writeFileSync(stara, `<!doctype html>
<html lang="sr"><head><meta charset="utf-8">
<title>Premešteno — SajtPro</title>
<link rel="canonical" href="${adresa(nova)}">
<meta http-equiv="refresh" content="0; url=${nova === 'index.html' ? '/' : '/' + nova}">
</head><body><p>Premešteno: <a href="${adresa(nova)}">${adresa(nova)}</a></p></body></html>
`);
  }
  const danas = new Date().toISOString().slice(0, 10);
  const strane = Object.entries(SEO).filter(([, s]) => s.indeks !== false);
  fs.writeFileSync('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${strane.map(([f, s]) => `  <url><loc>${adresa(f)}</loc><lastmod>${danas}</lastmod><priority>${s.prioritet}</priority></url>`).join('\n')}
</urlset>
`);
  fs.writeFileSync('robots.txt', `User-agent: *\nAllow: /\nDisallow: /og/\n\nSitemap: ${DOMEN}/sitemap.xml\n`);
  console.log('  404.html, ' + Object.keys(PREUSMERENJA).join(', ') + ', sitemap.xml (' + strane.length + '), robots.txt');
}

module.exports = { napravi, vrh, cta, STRANE, prepraviRucne, SEO, DOMEN, adresa };

if (require.main === module) {
  require('./pocetna.js');
  require('./strane.js');
  prepraviRucne(['vidik.html', 'kontakt.html']);
  napravi('404.html', 'Strana ne postoji | SajtPro', '', `
<section class="strana-vrh">
  <div class="aureola aureola-1"></div>
  <div class="omot">
    <span class="nadnaslov">404</span>
    <h1>Ova strana ne postoji</h1>
    <p class="uvod">Možda je premeštena kad je sajt dobio nov izgled. Evo gde je sada sve.</p>
    <div class="cta-akcije" style="justify-content:flex-start;margin-top:26px">
      <a href="index.html" class="dugme dugme-glavni">Na početnu</a>
      <a href="vidik.html" class="dugme dugme-tihi">Vidik</a>
      <a href="prodavnica.html" class="dugme dugme-tihi">Izlog</a>
      <a href="fioka.html" class="dugme dugme-tihi">Fioka</a>
    </div>
  </div>
</section>`);
  pomocni();
}

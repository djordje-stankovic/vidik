/* ===========================================================================
   strane.js — sadržaj podstranica. Pokreni `node napravi.js`.
   =========================================================================== */
const { napravi, vrh, cta } = require('./napravi.js');

/* ===========================  MOGUĆNOSTI  ============================== */
napravi('mogucnosti.html',
  'Mogućnosti — Vidik · SajtPro',
  'Sedam ekrana koji pokrivaju naplatu, prodaju, zalihe, rizike, blokade računa i ispise po meri — nad podacima koji već postoje u ERP-u.',
  vrh('Mogućnosti',
      'Sve što se pita svaki dan, na jednom mestu',
      'Nijedan ekran ne traži novi unos. Sve što vidite već postoji u vašoj bazi — Vidik samo prestaje da to krije iza stabla izveštaja.') + `

<section class="blok-tanak" id="direktor">
  <div class="omot">
    <div class="mreza m-2" style="gap:54px;align-items:center">
      <div class="pojava">
        <span class="nadnaslov">Za direktora</span>
        <h2>Pregled koji staje na telefon</h2>
        <p class="uvod" style="margin:16px 0 22px">
          Projekcija priliva i odliva po stvarnim datumima dospeća, a ne po proseku.
          Starost potraživanja u četiri koraka. Promet po mesecima sa maržom.
          Otvori se za dve sekunde, iz taksija.
        </p>
        <ul class="spisak">
          <li>Koliko novca stiže ove i sledeće nedelje</li>
          <li>Ko duguje najviše i koliko dugo</li>
          <li>Da li marža pada, i na kojim artiklima</li>
          <li>Klik na bilo koji broj vodi do dokumenta iza njega</li>
        </ul>
      </div>
      <div class="pojava k1">
        <div class="panel">
          <div class="panel-traka">
            <span class="tacka"></span><span class="tacka"></span><span class="tacka"></span>
            <span class="panel-naslov">vidik &middot; novac</span>
          </div>
          <div class="panel-telo">
            <div class="graf-okvir" style="margin-bottom:12px">
              <div class="graf-vrh"><b>Starost potraživanja</b><span>otvorene stavke</span></div>
              <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:9px;align-items:end;height:104px">
                <div style="display:flex;flex-direction:column;justify-content:flex-end;height:100%">
                  <div style="font-size:11px;text-align:center;margin-bottom:5px;color:#6f6358">1,2M</div>
                  <div class="stub" data-v="34" data-k="0" style="background:#e7c9b6;border-radius:5px 5px 0 0"></div>
                  <div style="font-size:10px;color:#9a8d7f;text-align:center;margin-top:5px">u roku</div>
                </div>
                <div style="display:flex;flex-direction:column;justify-content:flex-end;height:100%">
                  <div style="font-size:11px;text-align:center;margin-bottom:5px;color:#6f6358">0,9M</div>
                  <div class="stub" data-v="26" data-k=".08" style="background:#dda98c;border-radius:5px 5px 0 0"></div>
                  <div style="font-size:10px;color:#9a8d7f;text-align:center;margin-top:5px">1–30</div>
                </div>
                <div style="display:flex;flex-direction:column;justify-content:flex-end;height:100%">
                  <div style="font-size:11px;text-align:center;margin-bottom:5px;color:#6f6358">1,8M</div>
                  <div class="stub" data-v="52" data-k=".16" style="background:#cf8259;border-radius:5px 5px 0 0"></div>
                  <div style="font-size:10px;color:#9a8d7f;text-align:center;margin-top:5px">31–90</div>
                </div>
                <div style="display:flex;flex-direction:column;justify-content:flex-end;height:100%">
                  <div style="font-size:11px;text-align:center;margin-bottom:5px;color:#c0522c;font-weight:700">3,1M</div>
                  <div class="stub" data-v="88" data-k=".24" style="background:#c0522c;border-radius:5px 5px 0 0"></div>
                  <div style="font-size:10px;color:#9a8d7f;text-align:center;margin-top:5px">90+</div>
                </div>
              </div>
            </div>
            <table class="tab-kontrola">
              <thead><tr><th>Kupac</th><th class="desno">Duguje</th><th class="desno">Kasni</th></tr></thead>
              <tbody>
                <tr><td>Vrelo Trade ad</td><td class="desno">842.300,00</td><td class="desno" style="color:#c0522c">124 dana</td></tr>
                <tr><td>Morava Logistika szr</td><td class="desno">511.480,00</td><td class="desno" style="color:#c0522c">96 dana</td></tr>
                <tr><td>Dunav Trade doo</td><td class="desno">318.900,00</td><td class="desno">41 dan</td></tr>
                <tr><td>Lipa Grupa szr</td><td class="desno">205.140,00</td><td class="desno" style="color:#4e7c34">u roku</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="blok" style="background:var(--papir2);border-top:1px solid var(--linija);border-bottom:1px solid var(--linija)">
  <div class="omot">
    <div class="usko pojava" style="margin-bottom:44px">
      <span class="nadnaslov">Ekrani</span>
      <h2>Sedam kartica, bez preklapanja</h2>
      <p class="uvod" style="margin-top:14px">
        Svaka odgovara na pitanje koje neko u firmi već postavlja. Ako ekran ne odgovara
        ni na jedno takvo pitanje, nema ga.
      </p>
    </div>

    <div class="mreza m-2">
      <div class="kartica pojava">
        <h3>Pregled</h3>
        <p>Projekcija likvidnosti, starost duga, promet po mesecima. Ono što se gleda ujutru
           uz kafu, pre nego što se otvori mejl.</p>
      </div>
      <div class="kartica pojava k1">
        <h3>Novac</h3>
        <p>Dužnici i obaveze, sve otvorene stavke, prihodi naspram troškova po godinama.
           Klik na kupca otvara njegove račune, karton i proveru blokade.</p>
      </div>
      <div class="kartica pojava">
        <h3>Prodaja</h3>
        <p>Promet i marža kroz 24 meseca, najbolji kupci uz poređenje sa prethodnom godinom,
           struktura po tipu dokumenta, najprodavaniji artikli.</p>
      </div>
      <div class="kartica pojava k1">
        <h3>Zalihe</h3>
        <p>Negativna stanja (koja su uvek greška u knjiženju), artikli ispod minimuma i roba
           bez prometa duže od pola godine.</p>
      </div>
      <div class="kartica pojava">
        <h3>Rizik i prilike</h3>
        <p>Kupci koji su kupovali pa utihnuli, i oni koji duguju a odavno ništa nisu uzeli.
           Dve liste koje se inače nikad ne naprave.</p>
      </div>
      <div class="kartica pojava k1">
        <h3>Blokada računa</h3>
        <p>Uz svakog dužnika stoji da li mu je račun u prinudnoj naplati i koliko dugo &mdash;
           provereno kod NBS-a. Tamo gde piše „blokiran 54 dana" telefonski poziv ne pomaže,
           i bolje je da se to zna pre nego posle.</p>
      </div>
    </div>
  </div>
</section>

<section class="blok" id="knjigovodstvo">
  <div class="omot">
    <div class="mreza m-2" style="gap:54px;align-items:center">
      <div class="pojava k1" style="order:2">
        <span class="nadnaslov">Za računovodstvo</span>
        <h2>Ispis koji sklopite sami, za dva minuta</h2>
        <p class="uvod" style="margin:16px 0 22px">
          U ERP-u je svaki ispis zaseban objekat: kad treba jedno polje iz ispisa A u
          ispisu B, zove se programer. Ovde je obrnuto — po oblasti postoji jedan širok
          izvor sa svim poljima, a ispis je samo izbor kolona, filtera i grupisanja.
        </p>
        <ul class="spisak">
          <li>Devet gotovih ispisa odmah: naplata, starost duga, obaveze, promet, prodaja, zalihe</li>
          <li>Svaki se može podesiti i sačuvati pod svojim imenom — i odmah ga vide kolege</li>
          <li>Kolone se prevlače, sortiraju i šire; širine se pamte i prelaze na papir</li>
          <li>Štampa, PDF, CSV i slanje na mejl, sa zaglavljem firme iz baze</li>
        </ul>
      </div>
      <div class="pojava" style="order:1">
        <div class="panel">
          <div class="panel-traka">
            <span class="tacka"></span><span class="tacka"></span><span class="tacka"></span>
            <span class="panel-naslov">vidik &middot; ispisi</span>
          </div>
          <div class="panel-telo">
            <div style="display:flex;gap:7px;flex-wrap:wrap;margin-bottom:14px">
              <span style="font-size:11.5px;padding:5px 11px;border-radius:99px;background:#c0522c;color:#fff;font-weight:600">Naplata</span>
              <span style="font-size:11.5px;padding:5px 11px;border-radius:99px;background:#f2ebe1;color:#6f6358">Starost duga</span>
              <span style="font-size:11.5px;padding:5px 11px;border-radius:99px;background:#f2ebe1;color:#6f6358">Promet po kupcima</span>
              <span style="font-size:11.5px;padding:5px 11px;border-radius:99px;background:#f2ebe1;color:#6f6358">Mrtve zalihe</span>
              <span style="font-size:11.5px;padding:5px 11px;border-radius:99px;background:#f2ebe1;color:#6f6358">+ tvoj</span>
            </div>
            <table class="tab-kontrola">
              <thead><tr><th>Partner</th><th>Dokument</th><th class="desno">Iznos</th><th class="desno">Dani</th></tr></thead>
              <tbody>
                <tr><td>Vrelo Trade ad</td><td class="kljuc">24-3000-001204</td><td class="desno">318.400,00</td><td class="desno">124</td></tr>
                <tr><td>Morava Logistika szr</td><td class="kljuc">24-3000-001188</td><td class="desno">204.900,00</td><td class="desno">96</td></tr>
                <tr><td>Dunav Trade doo</td><td class="kljuc">24-3000-001301</td><td class="desno">188.220,00</td><td class="desno">41</td></tr>
                <tr><td>Aman doo</td><td class="kljuc">24-3000-001355</td><td class="desno">96.110,00</td><td class="desno">12</td></tr>
                <tr style="font-weight:700;background:#f2ebe1"><td colspan="2">Ukupno — 4 dokumenta</td><td class="desno">807.630,00</td><td></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
` + cta('Najbrže je da vidite na svojim podacima',
        'Prikaz traje dvadeset minuta i radi se na vašoj bazi. Sve što vidite je vaše — ništa nije demo.'));

/* =============================  KONTROLE  ============================== */
napravi('kontrole.html',
  'Kontrole — Vidik · SajtPro',
  'Kontrole koje porede knjigu računa sa POPDV-om, konta sa bilansnim obrascima i module sa glavnom knjigom — i uvek kažu razlog razlike.',
  vrh('Kontrole',
      'Ne pokazuje samo <em style="font-style:normal;color:var(--terra)">šta</em> ne štima, nego i zašto',
      'Ovo je deo koji ne postoji ni u jednom ERP ispisu. Kontrole ne prepisuju izveštaje — one ih porede međusobno i sa stvarnim dokumentima, pa razliku objasne i predlože popravku.') + `

<section class="blok-tanak">
  <div class="omot">
    <div class="mreza m-2" style="gap:50px;align-items:start">
      <div class="pojava">
        <h2 style="margin-bottom:18px">Kontrola PDV-a</h2>
        <p class="uvod" style="margin-bottom:20px">
          Knjiga računa i POPDV nisu živi upit — oba su <b>snimljen rezultat obračuna</b>.
          Kad se jedan obračun ponovi a drugi ne, ispisi se raziđu, i razlika se do sada
          tražila izvozom oba u Excel.
        </p>
        <p class="uvod" style="margin-bottom:22px">
          Vidik spaja tri izvora po ključu dokumenta — dokument u bazi, knjigu računa i
          POPDV — i za svaki koji nije u sva tri daje razlog.
        </p>
        <ul class="spisak">
          <li><b>Tip dokumenta nije mapiran</b> u POPDV — popravka je u podešavanjima, ne u obračunu</li>
          <li><b>Nema pravila za tu vrstu artikla</b> — tip jeste mapiran, ali ne i ta kombinacija</li>
          <li><b>Unet posle obračuna</b> — dokument je noviji od obračuna koji ga ne vidi</li>
          <li><b>Obračun nije ni pokrenut</b> — nema šta da se poredi, i to se kaže odmah</li>
          <li><b>Sistemski</b> — ceo tip se tako ponaša (npr. maloprodaja), pa se ne prijavljuje kao greška</li>
        </ul>
      </div>

      <div class="pojava k1">
        <div class="panel">
          <div class="panel-traka">
            <span class="tacka"></span><span class="tacka"></span><span class="tacka"></span>
            <span class="panel-naslov">kontrola pdv &middot; 2023-12</span>
          </div>
          <div class="panel-telo">
            <div class="vaga">
              <div class="tas">
                <div class="tas-ime">Knjiga računa</div>
                <div class="tas-broj">250</div>
                <div class="tas-sub">dokumenata</div>
                <div class="tas-datum">obračunato 20.02.2024.</div>
              </div>
              <div class="vaga-razlika"><b>−20</b><span>razlika</span></div>
              <div class="tas star">
                <div class="tas-ime">POPDV</div>
                <div class="tas-broj">270</div>
                <div class="tas-sub">dokumenata</div>
                <div class="tas-datum">obračunato 23.01.2024.<span class="znak-star">stariji</span></div>
              </div>
            </div>
            <div style="padding:10px 13px;border-radius:9px;background:rgba(192,82,44,.1);border:1px solid rgba(192,82,44,.25);font-size:12.5px;margin-bottom:12px">
              <b>POPDV je stariji 28 dana.</b> Sve što je uneto ili menjano u međuvremenu
              vidi samo onaj drugi obračun.
            </div>
            <div class="nalaz">
              <b>28.480,00</b>
              <span>PDV-a na 10 dokumenata koji ne ulaze u oba obračuna</span>
            </div>
            <div style="margin-top:14px;padding:9px 12px;border-radius:9px;background:var(--papir2);font-size:12.5px">
              <b>Šta uraditi:</b> ponovi obračun POPDV
            </div>
            <div class="tab-okvir">
              <table class="tab-kontrola">
                <thead><tr><th>Dokument</th><th>baza knj popdv</th><th>Tip</th><th class="desno">PDV</th></tr></thead>
                <tbody>
                  <tr><td class="kljuc">23-1200-000418</td><td><span class="mat"><span class="c ima">✓</span><span class="c ima">✓</span><span class="c nema">✗</span></span></td><td>Računi troškova</td><td class="desno">34.200,00</td></tr>
                  <tr><td class="kljuc">23-1200-000415</td><td><span class="mat"><span class="c ima">✓</span><span class="c ima">✓</span><span class="c nema">✗</span></span></td><td>Računi troškova</td><td class="desno">−12.360,00</td></tr>
                  <tr><td class="kljuc">23-1200-000417</td><td><span class="mat"><span class="c ima">✓</span><span class="c ima">✓</span><span class="c nema">✗</span></span></td><td>Računi troškova</td><td class="desno">2.180,00</td></tr>
                  <tr><td class="kljuc">23-1000-000402</td><td><span class="mat"><span class="c ima">✓</span><span class="c ima">✓</span><span class="c nema">✗</span></span></td><td>Kupovina robe</td><td class="desno">840,00</td></tr>
                  <tr style="font-weight:700;background:var(--papir2)"><td colspan="3">Ukupno — 10 dokumenata</td><td class="desno">28.480,00</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="blok mrak">
  <div class="omot">
    <div class="usko pojava" style="margin-bottom:44px">
      <span class="nadnaslov">Ostale kontrole</span>
      <h2>Iste pare, druga mesta</h2>
      <p class="uvod" style="margin-top:14px">
        Isti pristup primenjen na ostale tačke gde se dva pogleda na istu stvar
        razilaze — a razlika košta.
      </p>
    </div>

    <div class="mreza m-2">
      <div class="kartica pojava">
        <h3>Završni račun</h3>
        <p style="margin-bottom:14px">Bilans stanja i uspeha nisu zbir knjiženja nego zbir formula nad kontima.
           Ako konto ima promet a nijedna formula ga ne hvata, iznos tiho nestane iz obrasca.</p>
        <ul class="spisak" style="gap:9px">
          <li>Konta sa prometom koja ne ulaze ni u jedan obrazac</li>
          <li>Konta obuhvaćena dvaput — pa sabrana dvaput</li>
          <li>Nalozi koji nisu u ravnoteži, uključujući zaključna knjiženja</li>
          <li>Aktiva naspram pasive i rezultat iz bilansa uspeha naspram bilansa stanja</li>
        </ul>
      </div>
      <div class="kartica pojava k1">
        <h3>Moduli naspram glavne knjige</h3>
        <p style="margin-bottom:14px">Saldakonti kupaca i konto glavne knjige moraju da daju isti broj.
           Kad ne daju, razlika se traži danima — jer niko ne zna ni na kom je partneru.</p>
        <ul class="spisak" style="gap:9px">
          <li>Kupci i dobavljači naspram svojih konta</li>
          <li>Zalihe naspram klase 1, po skladištu</li>
          <li>Blagajna i izvodi naspram knjiženja</li>
          <li>Razlika razložena do partnera i dokumenta</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="blok">
  <div class="omot usko">
    <div class="pojava" style="margin-bottom:34px">
      <span class="nadnaslov">Pošteno</span>
      <h2>Šta kontrole ne rade</h2>
    </div>
    <div class="pojava">
      <ul class="spisak" style="gap:16px">
        <li><b style="color:var(--tekst)">Ne popravljaju same.</b>&nbsp; Vidik u vašu bazu ne upisuje ništa, nikad.
            Obračun se i dalje pokreće u ERP-u — samo sada znate koji i zašto.</li>
        <li><b style="color:var(--tekst)">Ne pogađaju uvek razlog.</b>&nbsp; Kad uzrok nije očigledan,
            piše „razlika bez očiglednog uzroka" umesto izmišljenog objašnjenja. Tu i dalje
            treba čovek.</li>
        <li><b style="color:var(--tekst)">Ne zamenjuju računovođu.</b>&nbsp; Skraćuju traženje sa pola sata
            na nekoliko sekundi, ali odluku šta je ispravno i dalje donosi onaj ko potpisuje.</li>
      </ul>
    </div>
  </div>
</section>
` + cta('Pustite kontrole na svoj mesec koji ne štima',
        'Donesite period koji vam trenutno ne zatvara. Ako Vidik nađe ono što ste već našli ručno — znate da radi.'));

/* =============================  KAKO RADI  ============================= */
napravi('kako-radi.html',
  'Konektor — jedan za Vidik, Izlog i Fioku · SajtPro',
  'Jedan konektor kod klijenta za sva tri proizvoda, odlazna veza na 443, bez otvaranja portova. Nalog samo za čitanje, i dnevnik u kom vidite svaki izvršeni upit.',
  vrh('Konektor · zajednički za sva tri proizvoda',
      'Ne morate nam verovati na reč',
      'Vidik, Izlog i Fioka do vaše baze idu kroz isti program &mdash; instalira se jednom, a svaki sledeći proizvod se samo uključi. Najčešće pitanje nije „šta ume" nego „gde su nam podaci". Odgovor nije obećanje nego tri stvari koje možete da proverite sami: nalog koji ne sme da piše, program koji odbija svaki upis, i dnevnik u kom stoji svaki upit koji je izvršen.') + `

<section class="blok-tanak konektor-kartice" id="it">
  <div class="omot">
    <div class="pojava" style="max-width:720px;margin-bottom:clamp(30px,4vw,44px)">
      <span class="nadnaslov">Šta konektor radi</span>
      <h2>Šest stvari koje treba da znate</h2>
      <p class="uvod" style="margin-top:16px">Svaka kartica ima objašnjenje za vlasnika i jedan red za vašeg IT čoveka.
        Ispod je animacija koja sve to pokaže na jednom pitanju.</p>
    </div>
    <div class="mreza m-3">
      <div class="kartica pojava">
        <div class="kartica-ikona">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
        </div>
        <span class="kk-br">01</span>
        <h3>Mali program kod vas</h3>
        <p>Jedan fajl koji pokrenete na serveru gde je PANTHEON baza. Ne instalira se ništa
           uz njega, ne dira se PANTHEON i ne menja se način rada. Može da radi kao Windows
           servis, pa se sam podigne posle restarta servera.</p>
        <p class="kk-teh">IT: jedan <code>.exe</code>, Node ugrađen; podešavanja u panelu na <code>localhost</code></p>
      </div>
      <div class="kartica pojava k1">
        <div class="kartica-ikona">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
        </div>
        <span class="kk-br">02</span>
        <h3>On zove nas, ne mi njega</h3>
        <p>Konektor sam otvori vezu ka našem servisu i drži je otvorenu. Ka vašoj mreži se
           ne otvara nijedan port, nema VPN-a ni prosleđivanja na ruteru. Ako veza padne,
           sam se ponovo javi čim se internet vrati.</p>
        <p class="kk-teh">IT: samo odlazna veza, 443/TLS (WebSocket), ping na 30 s</p>
      </div>
      <div class="kartica pojava k2">
        <div class="kartica-ikona">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="15" r="4"/><path d="M10.8 12.2 20 3M16 7l3 3M14 9l2 2"/></svg>
        </div>
        <span class="kk-br">03</span>
        <h3>Ključ pravi vaš server</h3>
        <p>Konektor vam pokaže ključ, vi ga nalepite u Vidik, Izlog ili Fioku i time ih
           povežete. Ključ nastaje kod vas, ne kod nas. Lozinka za bazu ostaje na vašem
           serveru, zaključana tako da na drugom računaru ne vredi ništa.</p>
        <p class="kk-teh">IT: lozinka u <code>konektor.json</code>, zaštićena Windows DPAPI-jem</p>
      </div>
      <div class="kartica pojava">
        <div class="kartica-ikona">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5.5" rx="7" ry="2.8"/><path d="M5 5.5v13c0 1.55 3.13 2.8 7 2.8s7-1.25 7-2.8v-13"/><path d="M9 12.5l2 2 4-4"/></svg>
        </div>
        <span class="kk-br">04</span>
        <h3>Vi birate šta delite</h3>
        <p>Konektor sam pronađe SQL Server i PANTHEON baze na mašini. Vi štiklirate koje
           firme delite. Za ostale baze naš servis ne zna ni da postoje, pa nema ni kako da
           ih pita.</p>
        <p class="kk-teh">IT: spisak dozvoljenih baza proverava konektor, ne servis</p>
      </div>
      <div class="kartica pojava k1">
        <div class="kartica-ikona">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>
        </div>
        <span class="kk-br">05</span>
        <h3>Dve brave protiv upisa</h3>
        <p>Prva brava je nalog u bazi koji sme samo da čita. To sprovodi vaš SQL Server,
           ne mi. Druga je sam konektor: odbije svako pitanje koje bi da menja podatke,
           pre nego što stigne do baze. Upis narudžbine iz Izloga i računa iz Fioke radi
           samo ako ga vi uključite u panelu.</p>
        <p class="kk-teh">IT: preporuka <code>db_datareader</code>; upisi su imenovane operacije, podrazumevano isključene</p>
      </div>
      <div class="kartica pojava k2">
        <div class="kartica-ikona">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M8 13h8M8 17h5"/></svg>
        </div>
        <span class="kk-br">06</span>
        <h3>Sve piše u dnevniku</h3>
        <p>Svako pitanje koje je konektor postavio bazi stoji u dnevniku, u panelu na vašem
           serveru. Kad niko ne gleda, konektor posle deset minuta pusti bazu. Dugme
           „Prekini pristup" gasi vezu odmah, bez nas.</p>
        <p class="kk-teh">IT: najviše 4 SQL konekcije po bazi, zatvaraju se posle 10 min mirovanja</p>
      </div>
    </div>
  </div>
</section>

<section class="blok mrak put" id="put">
  <div class="omot">
    <div class="put-vrh pojava">
      <span class="nadnaslov">Kako radi, bez žargona</span>
      <h2>Put jednog broja</h2>
      <p class="uvod">Direktor na telefonu pita koliko kupci duguju. Evo šta se dešava za tu
        sekundu dok broj ne stigne &mdash; korak po korak, sa svim proverama usput.</p>
    </div>

    <div class="put-scena pojava k1" aria-hidden="true">
      <svg class="put-linije">
        <path class="l-osnova l-1"/><path class="l-osnova l-2"/><path class="l-osnova l-3"/>
        <path class="l-tunel-sjaj"/><path class="l-tunel"/>
      </svg>

      <div class="put-stanica" data-s="telefon">
        <div class="put-ikona"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="2.5" width="12" height="19" rx="2.5"/><path d="M10.5 18.5h3"/></svg></div>
        <div>
          <div class="put-ime">Vaš telefon</div>
          <div class="put-gde">Vidik, Izlog ili Fioka &middot; bilo gde</div>
          <div class="put-stanje">čeka vas</div>
          <div class="put-ekran">Duguju kupci, 90+ dana<b>&mdash;</b></div>
        </div>
      </div>

      <div class="put-stanica" data-s="servis">
        <div class="put-ikona"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18.5h10a4.5 4.5 0 0 0 .6-8.96A6 6 0 0 0 6.1 9.6 4.5 4.5 0 0 0 7 18.5z"/></svg></div>
        <div>
          <div class="put-ime">Naš servis</div>
          <div class="put-gde">na internetu &middot; prosleđuje, ne čuva</div>
          <div class="put-stanje">čeka konektor</div>
        </div>
      </div>

      <div class="put-zona">
        <span class="put-zona-ime">Vaša firma</span>
        <span class="put-zid"><i></i>ulaz spolja zatvoren</span>

        <div class="put-stanica" data-s="konektor">
          <div class="put-ikona"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3v4M15 3v4"/><path d="M7 7h10v3a5 5 0 0 1-10 0z"/><path d="M12 15v6"/></svg></div>
          <div>
            <div class="put-ime">Konektor</div>
            <div class="put-gde">mali program na vašem serveru</div>
            <div class="put-stanje">pokreće se…</div>
            <div class="put-znacke">
              <span class="put-znacka">✓ samo čita</span>
              <span class="put-znacka">✓ u dnevniku</span>
              <span class="put-znacka ne">✕ upis odbijen</span>
            </div>
          </div>
        </div>

        <div class="put-stanica" data-s="baza">
          <div class="put-ikona"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5.5" rx="7" ry="2.8"/><path d="M5 5.5v13c0 1.55 3.13 2.8 7 2.8s7-1.25 7-2.8v-13"/><path d="M5 12c0 1.55 3.13 2.8 7 2.8s7-1.25 7-2.8"/></svg></div>
          <div>
            <div class="put-ime">PANTHEON baza</div>
            <div class="put-gde">tamo gde je i sada</div>
            <div class="put-stanje">radi kao i uvek</div>
          </div>
        </div>
      </div>

      <span class="put-paket mali">konektor: tu sam</span>
      <span class="put-paket pitanje">Ko nam duguje?</span>
      <span class="put-paket odgovor">3,1 mil</span>
      <span class="put-paket uljez">✕ ulaz spolja</span>
      <span class="put-paket upis">UPDATE …</span>
    </div>

    <div class="put-dno">
      <div class="put-opis pojava" aria-live="polite">
        <div class="put-tekst">
          <span class="br">korak 1 od 7</span>
          <h3>Konektor se sam javi</h3>
          <p></p>
        </div>
      </div>
      <div class="pojava k1">
        <ol class="put-koraci">
          <li><button type="button">Konektor se sam javi<span class="tok"></span></button>
            <p>Konektor pokrenete jednom, na svom serveru. On <b>sam</b> pozove naš servis i drži
            tu vezu otvorenu &mdash; kao telefonski razgovor u kom slušalicu niko ne spušta.
            Vi zovete nas; mi vas ne možemo pozvati.</p></li>
          <li><button type="button">Pitate sa telefona<span class="tok"></span></button>
            <p>Otvorite Vidik na telefonu, iz kancelarije ili iz automobila. Pitanje „ko nam
            duguje" ode na naš servis, isto kao kad otvorite bilo koju veb stranicu.</p></li>
          <li><button type="button">Pitanje ide kroz otvorenu vezu<span class="tok"></span></button>
            <p>Naš servis ne može sam da uđe u vašu firmu &mdash; nema kroz šta. Pitanje vrati
            nazad kroz onu istu vezu koju je konektor otvorio u prvom koraku.</p></li>
          <li><button type="button">Konektor proveri i zapiše<span class="tok"></span></button>
            <p>Pre nego što išta pita bazu, konektor proveri da pitanje <b>samo čita</b> i
            zapiše ga u dnevnik. Taj dnevnik vidite vi, na svom serveru, a ne mi.</p></li>
          <li><button type="button">Baza odgovori<span class="tok"></span></button>
            <p>Baza odgovori kao da je pitao bilo koji program u firmi. PANTHEON za to vreme
            radi normalno &mdash; niko ništa nije zaključao ni promenio.</p></li>
          <li><button type="button">Broj stiže na telefon<span class="tok"></span></button>
            <p>Odgovor se vrati istim putem i pojavi na telefonu. Kroz naš servis je samo
            prošao: kod nas ne ostaje ni kopija, ni red, ni izveštaj.</p></li>
          <li><button type="button">A ako neko pokuša spolja?<span class="tok"></span></button>
            <p>Ka vašoj mreži nije otvoren nijedan ulaz, pa neko spolja nema ni na šta da
            pokuca. A pitanje koje bi da <b>menja</b> podatke konektor odbije pre nego što
            stigne do baze.</p></li>
        </ol>
        <div class="put-kontrole">
          <button type="button" class="put-dugme">Zaustavi</button>
          <span>ili kliknite na korak</span>
        </div>
      </div>
    </div>

    <div class="put-poredjenje pojava">
      <div class="put-ikona"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg></div>
      <div>
        <h3>Ako treba da objasnite kolegi u jednoj rečenici</h3>
        <p>Konektor je kao zaposleni koji ujutru sam pozove naš broj i ostane na vezi.
          Mi mu kroz tu vezu postavljamo pitanja, a on odgovara samo na ona koja smeju
          da se pitaju &mdash; i svako zapiše u svesku.</p>
        <p>Nas niko ne pušta u zgradu, jer nam za to i ne treba ključ: vrata ostaju
          zaključana, a razgovor ide preko telefona koji je on podigao.</p>
      </div>
    </div>
  </div>
</section>

<section class="blok sig" id="sigurnost">
  <div class="omot">
    <div class="sig-vrh pojava">
      <span class="nadnaslov">Sigurnost</span>
      <h2>Najveća briga, pa i najduži odgovor</h2>
      <p class="uvod">Ne tražimo da nam verujete. Zato je konektor napravljen tako da i u
        najgorem slučaju ostane malo toga što bi neko mogao da uradi. Evo pitanja koja
        bismo i mi postavili na vašem mestu.</p>
    </div>

    <div class="sig-nikad pojava k1">
      <div class="sig-nikad-naslov">Kod nas nikad ne postoji</div>
      <ul>
        <li><b>Lozinka vaše baze</b><span>ostaje na vašem serveru, zaključana za tu mašinu</span></li>
        <li><b>Kopija vaše baze</b><span>nema noćnog prepisivanja ni skladišta izveštaja</span></li>
        <li><b>Ulaz u vašu mrežu</b><span>nijedan otvoren port, nijedan VPN</span></li>
        <li><b>Lozinka za Vidik kao tekst</b><span>čuva se samo njen otisak (scrypt), iz kog se ne može vratiti</span></li>
      </ul>
    </div>

    <div class="sig-lista">
      <details class="sig-red pojava" open>
        <summary><span class="sig-pit">Šta ako neko provali vaš servis?</span><span class="sig-kratko">Dobio bi samo ono što konektor dozvoli</span></summary>
        <div class="sig-telo">
          <p>Naš servis do vaše baze ne ide sam: može samo da pita konektor, a konektor
          odgovara samo na pitanja koja <b>čitaju</b>, samo za baze koje ste <b>vi
          štiklirali</b>, i svako zapiše u dnevnik na vašem serveru. Lozinku vaše baze
          servis nema, pa ne može da se poveže mimo konektora. Vi prekinete vezu jednim
          klikom, bez nas.</p>
          <p class="sig-teh">Granice postavljaju vaš SQL Server (<code>db_datareader</code>) i konektor kod vas &mdash; ne naš kod.</p>
        </div>
      </details>
      <details class="sig-red pojava">
        <summary><span class="sig-pit">Može li neko da upadne u našu mrežu preko konektora?</span><span class="sig-kratko">Nema na šta da pokuca</span></summary>
        <div class="sig-telo">
          <p>Konektor ne sluša spolja. On sam zove nas, kao kad otvorite veb stranicu, i
          kroz tu vezu prima samo pitanja za bazu. Na ruteru se ništa ne otvara i ništa
          ne prosleđuje. Za firewall je to isti saobraćaj kao kad neko u firmi čita mejl.</p>
          <p class="sig-teh">Samo odlazna veza na 443, šifrovana (TLS). Dolaznih portova: 0.</p>
        </div>
      </details>
      <details class="sig-red pojava">
        <summary><span class="sig-pit">Može li neko nešto da obriše ili promeni?</span><span class="sig-kratko">Ne &mdash; čuvaju ga dve nezavisne brave</span></summary>
        <div class="sig-telo">
          <p>Prva brava je nalog u bazi koji sme samo da čita. To sprovodi Microsoftov SQL
          Server, pa važi čak i kad bi naš program pogrešio. Druga brava je konektor:
          pitanje koje bi da menja podatke odbije pre nego što ga pošalje bazi.</p>
          <p>Jedini upisi koji postoje su narudžbina iz Izloga i ulazni račun iz Fioke. To
          nisu pitanja koja stižu spolja, nego tačno opisane radnje ugrađene u konektor, i
          rade tek kad ih vi uključite. Sa nalogom koji samo čita ne rade uopšte.</p>
        </div>
      </details>
      <details class="sig-red pojava">
        <summary><span class="sig-pit">Šta ako neko ukrade direktoru telefon?</span><span class="sig-kratko">Promena lozinke ga izbaci sa svih uređaja</span></summary>
        <div class="sig-telo">
          <p>Kad promenite lozinku, sve prijave na svim uređajima padaju odmah. Nalog uz
          to radi na najviše tri uređaja; četvrta prijava izbaci najstariju. Telefon sam
          ne čuva podatke, samo prijavu.</p>
          <p class="sig-teh">Prijave se kod nas čuvaju kao otisak (SHA-256); u pregledaču je samo slučajan niz.</p>
        </div>
      </details>
      <details class="sig-red pojava">
        <summary><span class="sig-pit">Šta ako neko dođe do ključa konektora?</span><span class="sig-kratko">Ključ ne otvara bazu</span></summary>
        <div class="sig-telo">
          <p>Ključ samo povezuje vaš konektor sa vašim nalogom. Sam po sebi ne daje pristup
          bazi, jer lozinka baze i dalje stoji na vašem serveru. Ako se isti ključ pojavi
          na drugom mestu, servis zatvori jednu od veza, a vi u panelu napravite nov ključ.</p>
        </div>
      </details>
      <details class="sig-red pojava">
        <summary><span class="sig-pit">Da li vi vidite naše podatke?</span><span class="sig-kratko">Prolaze kroz servis, ali se ne čuvaju</span></summary>
        <div class="sig-telo">
          <p>Red koji vidite na telefonu prođe kroz naš servis &mdash; drugačije se sa
          telefona ne može videti ništa. Ali kod nas ne ostaje: nema kopije baze, nema
          arhive ekrana, nema sačuvanih izveštaja. Svako pitanje koje je ikad postavljeno
          vašoj bazi stoji u dnevniku <b>kod vas</b>, pa možete da proverite šta je pitano
          i kada.</p>
        </div>
      </details>
    </div>

    <div class="sig-posteno pojava">
      <h3>Šta ne tvrdimo</h3>
      <ul class="spisak">
        <li>Program još nije potpisan sertifikatom, pa Windows prvi put pita „Ipak pokreni". Kažemo to unapred.</li>
        <li>Nismo prošli spoljnu bezbednosnu sertifikaciju. Zato je sve iznad napravljeno tako da možete da proverite sami: nalog u bazi, dnevnik i prekidač su kod vas.</li>
        <li>Ako vaš IT ima pitanje na koje ovde nema odgovora, dovedite ga na prikaz. To su nam najdraži razgovori.</li>
      </ul>
    </div>
  </div>
</section>

<section class="blok" style="background:var(--papir2);border-top:1px solid var(--linija);border-bottom:1px solid var(--linija)">
  <div class="omot">
    <div class="mreza m-2" style="gap:54px;align-items:center">
      <div class="pojava">
        <span class="nadnaslov">Postavljanje</span>
        <h2>Radi isto popodne</h2>
        <p class="uvod" style="margin:16px 0 22px">
          Nema migracije, nema promene u načinu rada, nema dodatnog unosa. Sva tri proizvoda
          rade nad onim što vaši ljudi ionako unose svakog dana.
        </p>
        <ul class="spisak">
          <li>Jedan <code>.exe</code> &mdash; nema instalacije Node-a, baze ni servera</li>
          <li>Sam pronalazi SQL instance na mašini i prepoznaje PANTHEON baze</li>
          <li>Vi štiklirate koje baze delite; ostale ne postoje za nas</li>
          <li>Konektor vam pokaže ključ, vi ga nalepite u Vidik, Izlog ili Fioku &mdash; i to je sve.
              Ključ pravi vaš server, ne mi</li>
          <li>Razlike među klijentima (druga konta, drugi tipovi dokumenata) rešavaju se
              podešavanjem, ne izmenom programa</li>
        </ul>
        <div style="margin-top:26px;display:flex;gap:12px;flex-wrap:wrap;align-items:center">
          <a href="kontakt.html" class="dugme dugme-svetli"
             data-vidik="preuzmi" data-tekst="Preuzmite konektor">Zatražite konektor</a>
          <span style="font-size:13px;color:var(--tise)">
            Windows &middot; jedan fajl &middot; bez instalacije
          </span>
        </div>
        <p style="margin-top:14px;font-size:13px;color:var(--tise)">
          Program nije potpisan sertifikatom, pa će Windows prvi put pitati
          „Ipak pokreni". Kažemo to unapred da ne bude iznenađenje na serveru.
        </p>
      </div>
      <div class="pojava k1">
        <div class="panel">
          <div class="panel-traka">
            <span class="tacka"></span><span class="tacka"></span><span class="tacka"></span>
            <span class="panel-naslov">konektor &middot; status</span>
          </div>
          <div class="panel-telo" style="font-family:'JetBrains Mono',ui-monospace,Consolas,monospace;font-size:12.5px;line-height:1.95">
            <div><span style="color:#4e7c34">●</span> veza sa servisom &nbsp;<span style="color:#9a8d7f">aktivna, 443/TLS</span></div>
            <div><span style="color:#4e7c34">●</span> baze pronađene &nbsp;&nbsp;&nbsp;<span style="color:#9a8d7f">48</span></div>
            <div><span style="color:#4e7c34">●</span> nalog &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9a8d7f">samo čitanje</span></div>
            <div><span style="color:#4e7c34">●</span> dolazni portovi &nbsp;&nbsp;&nbsp;<span style="color:#9a8d7f">nijedan</span></div>
            <div><span style="color:#c99a2e">●</span> poslednji prenos &nbsp;<span style="color:#9a8d7f">pre 40 s &middot; 3,1 kB</span></div>
            <div style="margin-top:12px;padding-top:12px;border-top:1px solid var(--linija);color:#6f6358">
              <div style="margin-bottom:6px;color:#221d18"><b>dnevnik upita</b> &nbsp;<span style="color:#9a8d7f">poslednja 3</span></div>
              <div>14:22:07 &nbsp;<span style="color:#9a8d7f">pregled</span> &nbsp;SELECT &hellip; tHE_AcctTransItem</div>
              <div>14:22:07 &nbsp;<span style="color:#9a8d7f">pregled</span> &nbsp;SELECT &hellip; tHE_Move</div>
              <div>14:19:41 &nbsp;<span style="color:#9a8d7f">ispis</span> &nbsp;&nbsp;&nbsp;SELECT &hellip; tHE_Stock</div>
              <div style="margin-top:8px"><span style="color:#b03c2c">●</span> odbijeno upisa: <b style="color:#221d18">0</b> &nbsp;<span style="color:#9a8d7f">(sve što piše se odbija)</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="blok">
  <div class="omot usko">
    <div class="pojava" style="margin-bottom:30px">
      <span class="nadnaslov">Pitanja koja uvek stignu</span>
      <h2>Bez zaobilaženja</h2>
    </div>
    <div class="pojava">
      <details class="pitanje" open>
        <summary>Da li nešto upisujete u našu bazu?</summary>
        <div class="pitanje-telo">
          <p>Ne. Nijedan ekran, kontrola ni ispis ne piše po vašoj bazi &mdash; Vidik je
          čist čitač. Zato i preporučujemo nalog <code>db_datareader</code>: da to ne
          bude naše obećanje nego pravilo koje sprovodi vaš SQL Server.</p>
          <p>Uz to, i sam konektor odbija svaki upit koji pokušava da piše, pre nego što
          ga uopšte pošalje bazi. Dve brave, nezavisne jedna od druge.</p>
          <p>Dva izuzetka, i oba su vaša odluka: <a href="prodavnica.html">online
          prodavnica</a> ume da upiše narudžbinu kupca, a <a href="fioka.html">Fioka</a>
          ulazni račun troška (i novog dobavljača, sa podacima iz APR-a). Ti upisi nisu
          SQL koji stiže spolja nego operacije zapisane u samom konektoru, i rade tek
          kad ih u panelu uključite („Primaj narudžbine sa sajta", „Primaj račune iz
          Fioke") &mdash; podrazumevano su isključeni. Za njih nalog mora da sme da
          piše, pa uz <code>db_datareader</code> ostaju isključeni sami od sebe.</p>
        </div>
      </details>
      <details class="pitanje">
        <summary>Idu li naši podaci kroz vaš server?</summary>
        <div class="pitanje-telo">
          <p>Da, i red je da to kažemo otvoreno: kad otvorite ekran, red koji vidite
          putuje iz vaše baze kroz naš servis do vašeg pregledača. Drugačije se sa
          telefona ne može videti ništa.</p>
          <p>Ono što se <b>ne</b> dešava: ništa od toga se ne čuva. Nema kopije vaše
          baze kod nas, nema noćnog prepisivanja, nema skladišta izveštaja. Kad
          zatvorite ekran, kod nas ne ostaje ni jedan red.</p>
        </div>
      </details>
      <details class="pitanje">
        <summary>Šta ako nam pukne internet?</summary>
        <div class="pitanje-telo">
          <p>Vidik je veb aplikacija i bez veze ne radi &mdash; isto kao mejl ili
          e-faktura. To je svesna odluka: poenta je da direktor vidi brojke sa telefona,
          iz automobila, bez ulaska u firmu.</p>
          <p>Ako veza padne, ne gubi se ništa: konektor se sam javi čim se vrati, a u
          međuvremenu vaš ERP radi kao i pre. Vidik ništa ne drži i ništa ne zaključava.</p>
        </div>
      </details>
      <details class="pitanje">
        <summary>Ko sme šta da vidi?</summary>
        <div class="pitanje-telo">
          <p>Svako ko ima nalog u vašoj firmi vidi sve ekrane. Naplata je po firmi, ne po
          korisniku, pa nema razloga da ljudi dele lozinke &mdash; a baš to deljenje kvari
          svaku podelu prava.</p>
          <p>Ako vam treba da komercijalista vidi samo svoje kupce, recite nam &mdash;
          to je odluka koju donosimo prema tome koliko firmi je traži, a ne unapred.</p>
        </div>
      </details>
      <details class="pitanje">
        <summary>Da li usporava bazu?</summary>
        <div class="pitanje-telo">
          <p>Upiti idu nad indeksiranim kolonama, a konektor drži najviše četiri konekcije
          po bazi i zatvara ih posle deset minuta mirovanja. U praksi je opterećenje manje nego
          kad jedan korisnik otvori veći ispis u samom ERP-u.</p>
          <p>Ako želite, konektor se pusti na repliku umesto na produkciju.</p>
        </div>
      </details>
      <details class="pitanje">
        <summary>PANTHEON prijavljuje spoljnu vezu na bazu. Šta s tim?</summary>
        <div class="pitanje-telo">
          <p>Tačno, i to nećemo da zaobilazimo. PANTHEON prepoznaje svaku spoljnu vezu i
          traži Konektor licencu. Prikrivanje te veze bi vas stavilo u prekršaj ugovora
          sa DataLab-om &mdash; a to bi se videlo prvog dana kad partner dođe na
          održavanje.</p>
          <p>Ono što radimo umesto toga jeste da veza bude <b>jedna</b>: PANTHEON broji
          programe povezane na bazu, a konektor je jedan program &mdash; bez obzira koliko
          ljudi gleda Vidik sa telefona i koliko proizvoda koristite. Kad niko ne gleda,
          konektor posle deset minuta pusti bazu i PANTHEON ga tada ni ne vidi. Trošak licence
          ulazi u ponudu otvoreno i dogovara se sa vašim PANTHEON partnerom.</p>
        </div>
      </details>
      <details class="pitanje">
        <summary>Šta ako se predomislimo?</summary>
        <div class="pitanje-telo">
          <p>Konektor se deinstalira i nema više ničega. Ništa nije promenjeno u bazi, pa
          nema šta da se vraća. Ugovor je mesečni — bez odustanice i bez obaveze na godinu.</p>
        </div>
      </details>
    </div>
  </div>
</section>
` + cta('Pozovite i svog IT čoveka na prikaz',
        'Volimo ta pitanja — arhitektura je i pravljena tako da na njih postoji kratak odgovor.'),
  { css: '\n<link rel="stylesheet" href="css/konektor.css">', skripte: '\n<script src="js/konektor.js"></script>' });

/* ===============================  CENE  ================================ */
napravi('cene.html',
  'Cene — SajtPro',
  'Mesečna pretplata po firmi, bez naplate po korisniku. Prvi mesec Vidika je besplatan i služi da se vidi šta nađe u vašim podacima.',
  vrh('Cene',
      'Po firmi, ne po glavi',
      'Naplata po korisniku tera firme da štede na pristupu podacima — a to je tačno suprotno od onoga zbog čega se ovakav alat uvodi. Zato: jedna cena, svi zaposleni unutra.') + `

<!-- Cene 26.10.2026: svaki proizvod posebno + paket 2 i 3. Iznosi su predlog,
     nisu potvrdjeni sa klijentima (vidi INTERNO.md). -->
<section class="blok-tanak">
  <div class="omot">
    <div class="pojava" style="max-width:720px;margin-bottom:30px">
      <span class="nadnaslov">Svaki proizvod posebno</span>
      <h2>Uzmite samo ono što vam treba</h2>
    </div>
    <div class="cene">
      <div class="cena pojava ">
        <div class="cena-ime">Vidik</div>
        <div class="cena-opis">Brojevi i kontrole &mdash; za direktora i računovodstvo.</div>
        <div class="cena-iznos"><b>59</b><span>EUR / mesec</span></div>
        <div class="cena-nota">jedna firma &middot; neograničeno korisnika</div>
        <ul class="spisak">
          <li>Svi ekrani: novac, dugovanja, prodaja, zalihe</li>
          <li><b>Kontrola PDV-a</b> — knjiga računa naspram POPDV-a</li>
          <li><b>Kontrola završnog računa</b> i moduli naspram knjige</li>
          <li>Ispisi po meri, izvoz i štampa</li>
          <li>Prvi mesec besplatno</li>
        </ul>
        <a href="kontakt.html" class="dugme dugme-tihi" style="width:100%">Zakaži prikaz</a>
      </div>
      <div class="cena pojava ">
        <div class="cena-ime">Izlog</div>
        <div class="cena-opis">Online prodavnica koja je već popunjena iz PANTHEON-a.</div>
        <div class="cena-iznos"><b>39</b><span>EUR / mesec</span></div>
        <div class="cena-nota">jedna prodavnica &middot; neograničeno artikala</div>
        <ul class="spisak">
          <li>Artikli, slike, cene i zalihe iz PANTHEON-a</li>
          <li>Narudžbina ulazi kao narudžbina kupca</li>
          <li>Teme i podešavanja bez programera</li>
          <li>Vaš naziv i vaš domen</li>
        </ul>
        <a href="kontakt.html" class="dugme dugme-tihi" style="width:100%">Zakaži prikaz</a>
      </div>
      <div class="cena pojava ">
        <div class="cena-ime">Fioka</div>
        <div class="cena-opis">Računi sa telefona pravo u PANTHEON.</div>
        <div class="cena-iznos"><b>29</b><span>EUR / mesec</span></div>
        <div class="cena-nota">jedna firma &middot; neograničeno zaposlenih</div>
        <ul class="spisak">
          <li>Neograničeno računa</li>
          <li>Stavke i PDV od Poreske, dobavljač iz APR-a</li>
          <li>Ulazni račun troška u PANTHEON-u</li>
          <li>Pravila za artikal po stavci</li>
        </ul>
        <a href="kontakt.html" class="dugme dugme-tihi" style="width:100%">Zakaži prikaz</a>
      </div>
    </div>
  </div>
</section>

<section class="blok-tanak" style="background:var(--papir2);border-top:1px solid var(--linija);border-bottom:1px solid var(--linija)">
  <div class="omot">
    <div class="pojava" style="max-width:720px;margin-bottom:30px">
      <span class="nadnaslov">Paketi</span>
      <h2>Dva ili sva tri &mdash; jeftinije</h2>
      <p class="uvod" style="margin-top:14px">Isti konektor nosi sve, pa drugi i treći proizvod ne traže novu
        instalaciju ni drugu PANTHEON konektor licencu. Zato ih i dajemo jeftinije.</p>
    </div>
    <div class="cene cene-2">
      <div class="cena pojava ">
        <div class="cena-ime">Dva proizvoda</div>
        <div class="cena-opis">Bilo koja dva &mdash; npr. Vidik i Fioka, ili Izlog i Fioka.</div>
        <div class="cena-iznos"><b>&minus;15%</b><span>popusta</span></div>
        <div class="cena-nota">na zbir dve cene &middot; Vidik + Fioka = 75 umesto 88</div>
        <ul class="spisak">
          <li>Oba proizvoda u punom obimu</li>
          <li>Jedan konektor, jedan ključ</li>
          <li>Treći se dodaje kad god poželite</li>
        </ul>
        <a href="kontakt.html" class="dugme dugme-tihi" style="width:100%">Zakaži prikaz</a>
      </div>
      <div class="cena pojava istaknuta">
        <span class="cena-znacka">Najviše za cenu</span>
        <div class="cena-ime">Sva tri</div>
        <div class="cena-opis">Vidik, Izlog i Fioka &mdash; ceo SajtPro nad jednom firmom.</div>
        <div class="cena-iznos"><b>99</b><span>EUR / mesec</span></div>
        <div class="cena-nota">umesto 127 &middot; jedna firma</div>
        <ul class="spisak">
          <li>Vidik sa svim kontrolama</li>
          <li>Izlog sa narudžbinama u PANTHEON</li>
          <li>Fioka sa upisom računa</li>
          <li>Jedan konektor, jedna licenca, jedan račun</li>
        </ul>
        <a href="kontakt.html" class="dugme dugme-glavni" style="width:100%">Zakaži prikaz</a>
      </div>
    </div>
    <div class="kartica pojava" id="agencije" style="margin-top:22px">
      <h3>Knjigovodstvene agencije</h3>
      <p>Vidik za agencije koje vode desetine firmi: <b>19 EUR po bazi</b>, od 10 baza naviše &mdash;
         sve baze u jednom spisku, kontrole preko svih klijenata odjednom, vaš logo na ispisima.
         <a href="kontakt.html">Tražite ponudu</a>.</p>
    </div>
    <p style="text-align:center;margin-top:26px;color:var(--tise);font-size:14px" class="pojava">
      Cene su bez PDV-a, po firmi (PANTHEON bazi). Postavljanje konektora se ne naplaćuje. Ugovor je mesečni — otkazuje se kad god.
    </p>
  </div>
</section>

<section class="blok mrak">
  <div class="omot">
    <div class="mreza m-2" style="gap:54px;align-items:center">
      <div class="pojava">
        <span class="nadnaslov">Prvi mesec</span>
        <h2>Prvi mesec ne plaćate</h2>
        <p class="uvod" style="margin:16px 0 22px">
          Ne zato što je to lep marketinški potez, nego zato što je to jedini pošten način
          da se proveri da li Vidik vredi baš u vašim podacima. Kontrole ili nađu nešto ili ne.
        </p>
        <ul class="spisak">
          <li>Pun pristup, bez ograničenja</li>
          <li>Na vašoj bazi, ne na demou</li>
          <li>Bez kartice i bez automatskog produžetka</li>
          <li>Ako ne nastavite, konektor se skida i nema traga</li>
        </ul>
      </div>
      <div class="pojava k1">
        <div class="kartica" style="padding:34px">
          <!-- Brojevi su iz demo baze, ne sa tuđe produkcije. Svako može da
               otvori demo i vidi ih — zato i stoje ovde. -->
          <h3 style="margin-bottom:16px">Šta Vidik nađe u demo bazi</h3>
          <div style="display:grid;gap:15px;font-size:14.6px">
            <div style="display:flex;justify-content:space-between;gap:16px;padding-bottom:13px;border-bottom:1px solid rgba(240,231,218,.12)">
              <span>Dospelo preko 90 dana</span><b style="color:#e08a5f;white-space:nowrap">135,9 mil</b>
            </div>
            <div style="display:flex;justify-content:space-between;gap:16px;padding-bottom:13px;border-bottom:1px solid rgba(240,231,218,.12)">
              <span>Prosečna naplata (DSO)</span><b style="color:#e08a5f;white-space:nowrap">980 dana</b>
            </div>
            <div style="display:flex;justify-content:space-between;gap:16px;padding-bottom:13px;border-bottom:1px solid rgba(240,231,218,.12)">
              <span>Perioda u kojima se PDV ne slaže</span><b style="color:#e08a5f;white-space:nowrap">16 od 18</b>
            </div>
            <div style="display:flex;justify-content:space-between;gap:16px">
              <span>Vreme do nalaza</span><b style="color:#e08a5f;white-space:nowrap">ispod sekunde</b>
            </div>
          </div>
          <p style="margin-top:16px;font-size:13px;color:#9a8d7f">
            Demo je prava PANTHEON baza sa izmišljenim imenima: iznosi i datumi su
            stvarni, partneri i artikli nisu.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="blok">
  <div class="omot usko">
    <div class="pojava" style="margin-bottom:30px">
      <span class="nadnaslov">Oko cene</span>
      <h2>Ono što se obično pita</h2>
    </div>
    <div class="pojava">
      <details class="pitanje" open>
        <summary>Zaista nema naplate po korisniku?</summary>
        <div class="pitanje-telo">
          <p>Nema. Cena je po bazi. Ako sutra dodate petnaest ljudi u magacin, cena je ista —
          inače biste morali da birate ko sme da vidi podatke, a to ruši ceo smisao.</p>
        </div>
      </details>
      <details class="pitanje">
        <summary>Imamo više firmi u grupi. Kako se to računa?</summary>
        <div class="pitanje-telo">
          <p>Svaka baza je jedna stavka. Od deset baza naviše automatski važi cena iz paketa
          Agencija, bez obzira na to da li ste agencija ili grupa povezanih firmi.</p>
        </div>
      </details>
      <details class="pitanje">
        <summary>Šta ako nam treba ekran koji ne postoji?</summary>
        <div class="pitanje-telo">
          <p>Ako je nešto korisno i drugima, napravimo i uđe u proizvod — bez naplate.
          Ako je specifično samo za vas, dogovaramo se posebno. Većina zahteva se ionako
          reši kroz ispise po meri, bez ijedne linije koda.</p>
        </div>
      </details>
      <details class="pitanje">
        <summary>Koliko traje ugovor?</summary>
        <div class="pitanje-telo">
          <p>Mesec dana, pa se produžava sam. Nema godišnje obaveze i nema odustanice.
          Ako prestane da vredi, prestanete da plaćate.</p>
        </div>
      </details>
    </div>
  </div>
</section>
` + cta('Počnite od besplatnog meseca',
        'Bez kartice i bez obaveze. Dogovorimo prikaz, pustimo konektor i vidimo šta nađe.'));


/* ===========================  PRODAVNICA (shop)  ======================== */
const shopDugmad = (glavni) => `
      <div class="cta-akcije" style="justify-content:${glavni ? 'center' : 'flex-start'}">
        <a href="kontakt.html" class="dugme dugme-glavni" data-shop="demo" data-tekst="Pogledajte demo prodavnicu">Zakažite prikaz</a>
        <a href="kontakt.html" class="dugme dugme-tihi" data-shop="napravi" data-tekst="Napravite svoju" hidden>Napravite svoju</a>
      </div>`;

napravi('prodavnica.html',
  'Izlog — online prodavnica nad PANTHEON-om · SajtPro',
  'Artikli, slike, cene i zalihe iz PANTHEON-a na sajtu; narudžbina sa sajta ulazi u PANTHEON kao narudžbina kupca. Napravite je sami za pola sata, preko istog konektora kao Vidik i Fioka.',
  vrh('<svg class="znak-izlog" width="22" height="22" viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="8" fill="#2f4858"/><path d="M6.5 7.5h19v3.4a2.375 2.375 0 0 1-4.75 0 2.375 2.375 0 0 1-4.75 0 2.375 2.375 0 0 1-4.75 0 2.375 2.375 0 0 1-4.75 0z" fill="#fbf3e8"/><rect x="8.4" y="16.2" width="15.2" height="9.6" rx="2.4" fill="none" stroke="#fbf3e8" stroke-width="2.4"/><circle cx="16" cy="21" r="2.3" fill="#fbf3e8"/></svg>Drugi proizvod · Izlog',
      'Online prodavnica koja je već popunjena',
      'Artikli, slike, cene i zalihe dolaze pravo iz PANTHEON-a &mdash; bez izvoza, CSV-a i prepisivanja. Narudžbina sa sajta ulazi u PANTHEON kao narudžbina kupca. Prodavnicu pravite sami, bez nas: uputstvo je ispod, korak po korak.') + `

<section class="blok-tanak">
  <div class="omot">
    ${shopDugmad(false)}
    <div class="mreza m-3" style="margin-top:40px">
      <div class="kartica pojava">
        <div class="kartica-ikona">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16l-1.5 12a2 2 0 0 1-2 1.8h-9a2 2 0 0 1-2-1.8L4 7Z"/><path d="M9 7V6a3 3 0 0 1 6 0v1"/></svg>
        </div>
        <h3>Katalog se ne unosi</h3>
        <p>Šta je u šifarniku označeno „Web prodavnica", to je na sajtu &mdash; sa slikom iz
           PANTHEON-a, cenom sa PDV-om i zalihom sa skladišta koja izaberete. Promenite cenu u
           PANTHEON-u i sajt je ima za minut.</p>
      </div>
      <div class="kartica pojava k1">
        <div class="kartica-ikona">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5 9.5 17 19 7.5"/></svg>
        </div>
        <h3>Narudžbina ide u PANTHEON</h3>
        <p>Kao narudžbina kupca, kroz PANTHEON-ove procedure. Radnik je pretvara u račun ili
           maloprodaju kako je navikao &mdash; fiskalizacija i e-faktura ostaju u PANTHEON-u.</p>
      </div>
      <div class="kartica pojava k2">
        <div class="kartica-ikona">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
        </div>
        <h3>Isti konektor kao Vidik</h3>
        <p>Imate Vidik? Nalepite isti ključ i prodavnica radi &mdash; bez nove instalacije i
           bez druge konektor licence. Nemate? Konektor se postavlja jednom, za oba.</p>
      </div>
    </div>
  </div>
</section>

<section class="blok" id="napravi" style="background:var(--papir2);border-top:1px solid var(--linija);border-bottom:1px solid var(--linija)">
  <div class="omot usko">
    <span class="nadnaslov">Napravite je sami</span>
    <h2>Od preuzimanja do prve narudžbine</h2>
    <p class="uvod" style="margin:14px 0 26px">Za sve ispod vam ne trebamo mi. Ako zapne, <a href="kontakt.html">pišite nam</a> &mdash; ali ekran vam na svakom koraku kaže šta fali.</p>

    <ol class="koraci-shop">
      <li class="pojava">
        <h3>Pokrenite konektor na računaru gde je PANTHEON baza</h3>
        <p><a href="kako-radi.html" data-vidik="preuzmi" data-tekst="Preuzmite konektor">Preuzmite konektor</a> (jedan program, ništa se ne instalira uz njega) i pokrenite ga na serveru ili računaru gde radi SQL Server sa PANTHEON bazom. Otvoriće se panel u pregledaču.</p>
        <p>U panelu upišite SQL server i prijavu, pa kliknite <b>„Proveri i sačuvaj"</b>. Panel kaže na koji server se spojio, koliko baza tamo ima i koliko ih ta prijava vidi. Štiklirajte bazu firme koja prodaje.</p>
        <p class="tiho-red">Imate već Vidik? Konektor je već tu &mdash; preskočite na korak 2.</p>
      </li>
      <li class="pojava">
        <h3>Kopirajte ključ iz panela</h3>
        <p>Panel pokazuje ključ oblika <code>XXXX-XXXX-XXXX-XXXX</code>. To je veza između tog računara i vaše prodavnice &mdash; čuvajte ga kao lozinku.</p>
      </li>
      <li class="pojava">
        <h3>Napravite nalog prodavnice</h3>
        <p><a href="kontakt.html" data-shop="napravi" data-tekst="Otvorite stranicu za vlasnike">Otvorite stranicu za vlasnike</a> i upišite naziv firme, svoje ime, e-poštu i lozinku. Od naziva firme nastaje adresa prodavnice, npr. <code>/s/vasa-firma</code> &mdash; vidi se dok kucate.</p>
      </li>
      <li class="pojava">
        <h3>Nalepite ključ i izaberite bazu</h3>
        <p>Posle ovog koraka izlog je <b>već živ</b>: vaša roba, slike, logo i boja firme iz PANTHEON-a. Dok ne podesite ništa drugo, prikazuju se artikli označeni za web (ili, ako nijedan nije označen, svi sa cenom i zalihom).</p>
      </li>
      <li class="pojava">
        <h3>Podesite katalog i narudžbine</h3>
        <p>Sve se bira sa spiska iz vašeg PANTHEON-a, ništa se ne kuca napamet:</p>
        <ul class="spisak">
          <li><b>Katalog</b> &mdash; „označeni za web shop" (preporučeno) ili „svi sa cenom i zalihom"</li>
          <li><b>Skladišta</b> &mdash; jedno ili više; na sajtu je zbir zaliha sa izabranih</li>
          <li><b>Tip narudžbine</b> &mdash; npr. 0100 narudžbina kupca</li>
          <li><b>U šta se pretvara</b> &mdash; npr. 3200 maloprodaja; uputstvo radniku</li>
          <li><b>Kupac za web</b> &mdash; subjekat pod kojim ulaze narudžbine sa sajta, npr. „Web kupac"</li>
          <li><b>PANTHEON korisnik</b> &mdash; upisuje se kao autor narudžbine</li>
          <li><b>E-pošta firme</b> &mdash; gde stiže „nova narudžbina iz prodavnice"</li>
        </ul>
        <p>Na vrhu ekrana je krug sa proverama &mdash; kad su sve zelene, prodavnica je spremna.</p>
      </li>
      <li class="pojava">
        <h3>Izaberite izgled</h3>
        <p>U kartici <b>„Izgled"</b> birate jednu od pet tema i odmah je vidite nad svojim artiklima, na računaru i na telefonu. Kupci vide promenu tek kad kliknete „Postavi ovu temu".</p>
      </li>
      <li class="pojava">
        <h3>Uključite prijem narudžbina u konektoru</h3>
        <p>U panelu konektora uključite <b>„Primaj narudžbine sa sajta"</b>. Dok je isključeno, izlog radi, ali narudžbina ne ulazi u PANTHEON &mdash; čuva se u prodavnici i firma dobija mejl da je treba uneti. To je jedino mesto gde konektor piše u bazu; Vidik i dalje samo čita.</p>
      </li>
      <li class="pojava">
        <h3>Pošaljite adresu kupcima</h3>
        <p>Stavite link <code>/s/vasa-firma</code> na svoj sajt, u potpis mejla, na Instagram. To je sve.</p>
      </li>
    </ol>
  </div>
</section>

<section class="blok">
  <div class="omot">
    <div class="mreza m-2" style="gap:54px;align-items:start">
      <div class="pojava">
        <span class="nadnaslov">Priprema u PANTHEON-u</span>
        <h2>Šta artikal treba da ima</h2>
        <ul class="spisak" style="margin-top:20px">
          <li><b>Štiklirano „Web prodavnica"</b> u šifarniku artikala</li>
          <li><b>Maloprodajnu cenu</b> &mdash; artikal bez cene se <b>ne prikazuje</b>, jer narudžbina bez cene u PANTHEON-u ne može da nastane</li>
          <li><b>Aktivan</b> &mdash; neaktivan artikal nije na sajtu</li>
          <li><b>Sliku</b> u šifarniku &mdash; nije obavezna; bez nje sajt pokaže uredno polje sa nazivom</li>
          <li><b>Primarnu klasifikaciju</b> &mdash; od nje nastaju kategorije na sajtu</li>
          <li><b>Opis</b> &mdash; po želji, vidi se kad kupac otvori proizvod</li>
        </ul>
        <p style="margin-top:18px;font-size:14px;color:var(--tise)">
          Ne vidite neki artikal? U podešavanjima kataloga piše koliko je označeno, koliko se vidi,
          i koji se ne vide &mdash; sa razlogom (nema cenu, nije aktivan).
        </p>
      </div>
      <div class="pojava k1">
        <span class="nadnaslov">Skladišta</span>
        <h2>Jedno ili više</h2>
        <p class="uvod" style="margin:16px 0 18px">Na sajtu je zbir zaliha sa skladišta koja štiklirate &mdash; npr. pet od deset.</p>
        <ul class="spisak">
          <li><b>Jedno skladište</b> &mdash; roba se rezerviše čim kupac poruči; ako je nema dovoljno, kupac to vidi odmah</li>
          <li><b>Više skladišta</b> &mdash; narudžbina se otvara na glavnom, bez rezervacije, a u napomeni stoji koliko čega ima na kom skladištu. Radnik bira odakle šalje</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="blok" style="background:var(--papir2);border-top:1px solid var(--linija);border-bottom:1px solid var(--linija)">
  <div class="omot">
    <span class="nadnaslov">Izgled</span>
    <h2>Pet tema, različitih po načinu kupovine</h2>
    <p class="uvod" style="margin:14px 0 30px;max-width:720px">Ne samo druga boja &mdash; drugi raspored. Boja firme se sama uzme iz logotipa u PANTHEON-u.</p>
    <div class="mreza m-3">
      <div class="kartica pojava"><h3>Vitrina</h3><p>Opšta prodaja. Istaknuti proizvodi na vrhu, kategorije kao pločice sa slikom, kartice sa brzim dodavanjem.</p></div>
      <div class="kartica pojava k1"><h3>Katalog</h3><p>Delovi, tehnika, veliki asortiman. Spisak sa šifrom, stanjem i cenom; količina se kuca u redu. Radi i bez ijedne slike.</p></div>
      <div class="kartica pojava k2"><h3>Butik</h3><p>Kozmetika, moda, pokloni. Krupne fotografije, klasičan serif, puno vazduha.</p></div>
      <div class="kartica pojava"><h3>Pijaca</h3><p>Pekara, hrana, piće. „Dodaj" na svakoj kartici i korpa kao traka na dnu ekrana &mdash; kao aplikacije za dostavu.</p></div>
      <div class="kartica pojava k1"><h3>Klasik</h3><p>Ozbiljna firma, oprezni kupci. Adresa i PIB na vrhu, meni u boji firme, krupnije slovo.</p></div>
      <div class="kartica pojava k2"><h3>Po meri</h3><p>Nijedna ne odgovara? Napravićemo izgled vaše firme &mdash; nad istim katalogom i istim narudžbinama. <a href="kontakt.html">Pišite nam.</a></p></div>
    </div>
  </div>
</section>

<section class="blok">
  <div class="omot">
    <div class="mreza m-2" style="gap:54px;align-items:center">
      <div class="pojava">
        <span class="nadnaslov">Kad kupac poruči</span>
        <h2>Šta se dešava, redom</h2>
        <ul class="spisak" style="margin-top:20px">
          <li>Cena i PDV se uvek računaju u PANTHEON-u &mdash; sajt ih nikad ne određuje</li>
          <li>Ime, telefon, e-pošta i adresa kupca upisuju se u napomenu narudžbine</li>
          <li>Kupac dobija potvrdu mejlom, firma obaveštenje sa stavkama i brojem u PANTHEON-u</li>
          <li>Kupac u „Moje narudžbine" vidi svaku svoju narudžbinu</li>
        </ul>
      </div>
      <div class="pojava k1">
        <div class="panel">
          <div class="panel-traka">
            <span class="tacka"></span><span class="tacka"></span><span class="tacka"></span>
            <span class="panel-naslov">narudžbina sa sajta &rarr; PANTHEON</span>
          </div>
          <div class="panel-telo" style="font-family:'JetBrains Mono',ui-monospace,Consolas,monospace;font-size:12.5px;line-height:1.95">
            <div><span style="color:#4e7c34">●</span> kupac poručio &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9a8d7f">WEB 683551397 &middot; 3 stavke</span></div>
            <div><span style="color:#4e7c34">●</span> zaliha proverena &nbsp;<span style="color:#9a8d7f">skladište VP</span></div>
            <div><span style="color:#4e7c34">●</span> narudžbina kupca &nbsp;<span style="color:#9a8d7f">26-0100-000024</span></div>
            <div><span style="color:#4e7c34">●</span> roba rezervisana &nbsp;<span style="color:#9a8d7f">2 + 3 kom</span></div>
            <div><span style="color:#c99a2e">●</span> mejl kupcu i firmi <span style="color:#9a8d7f">poslat</span></div>
            <div style="margin-top:12px;padding-top:12px;border-top:1px solid var(--linija);color:#6f6358">
              Račun i fiskalizacija &mdash; u PANTHEON-u, kao i do sada.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="blok" style="padding-top:0">
  <div class="omot usko">
    <span class="nadnaslov">Pitanja</span>
    <h2>Šta se pita pre nego što se uključi</h2>
    <div class="mreza m-2" style="margin-top:28px;gap:26px">
      <div><h3>Da li kupac mora da se registruje?</h3>
        <p>Ne mora. Poruči kao gost: ime, telefon, e-pošta i adresa za dostavu, po želji firma
           i PIB za račun na firmu. Posle narudžbine mu se ponudi nalog sa već upisanim podacima &mdash;
           samo doda lozinku, i sledeći put vidi svoje narudžbine i poručuje jednim klikom.</p></div>
      <div><h3>Kako se plaća?</h3>
        <p>Pouzećem ili uplatnicom. Kartično plaćanje za sada ne postoji.</p></div>
      <div><h3>Označio sam artikal, a nema ga na sajtu.</h3>
        <p>Skoro uvek nema maloprodajnu cenu ili nije aktivan. U podešavanjima kataloga piše tačno
           koji artikal i zašto. Kad upišete cenu, pojavi se za minut.</p></div>
      <div><h3>Šta ako konektor ne radi?</h3>
        <p>Prodavnica javi da trenutno nema podataka. Narudžbina koja ne može u PANTHEON
           ne propada &mdash; čuva se u prodavnici, a firma dobija mejl da je treba uneti.</p></div>
      <div><h3>Imam već sajt.</h3>
        <p>Prodavnica ima svoju adresu i stoji uz postojeći sajt kao link „Prodavnica".
           Kupac klikne i nastavlja kod vas, sa vašim logom i bojom.</p></div>
      <div><h3>Mogu li da promenim izgled kasnije?</h3>
        <p>Kad god hoćete, u kartici „Izgled". Narudžbine, kupci i podešavanja ostaju kakvi su.</p></div>
    </div>
  </div>
</section>

<section class="blok">
  <div class="omot cta pojava">
    <span class="nadnaslov" style="justify-content:center">Sledeći korak</span>
    <h2>Pogledajte kako izgleda na pravoj bazi</h2>
    <p class="uvod">Demo prodavnica radi nad istom demo bazom kao Vidik demo &mdash; prava roba, slike i zalihe. Narudžbine se u demou ne šalju nikome.</p>
    ${shopDugmad(true)}
  </div>
</section>
`);

/* ===========================  FIOKA (racuni)  ========================== */
const fiokaDugmad = (sredina) => `
      <div class="cta-akcije" style="justify-content:${sredina ? 'center' : 'flex-start'}">
        <a href="kontakt.html" class="dugme dugme-glavni" data-fioka="otvori" data-tekst="Otvorite Fioku">Zakažite prikaz</a>
        <a href="kako-radi.html" class="dugme dugme-tihi" data-vidik="preuzmi" data-tekst="Preuzmite konektor">Kako radi konektor</a>
      </div>`;

napravi('fioka.html',
  'Fioka — računi sa telefona pravo u PANTHEON · SajtPro',
  'Zaposleni skenira QR sa fiskalnog računa, Poreska daje ceo račun, a Fioka u PANTHEON-u napravi ulazni račun troška — i dobavljača iz APR-a ako ga nema. Bez prekucavanja.',
  vrh('<svg class="znak-izlog" width="22" height="22" viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="8" fill="#1f6f5c"/><rect x="6" y="8.5" width="20" height="16" rx="3" fill="none" stroke="#fbf3e8" stroke-width="2.4"/><path d="M6 15.5h20" stroke="#fbf3e8" stroke-width="2.4"/><rect x="12.5" y="18.6" width="7" height="2.4" rx="1.2" fill="#fbf3e8"/></svg>Treći proizvod · Fioka',
      'Račun iz džepa, u PANTHEON-u za minut',
      'Gorivo, parking, prevoz, sitna nabavka &mdash; računi koje zaposleni plaćaju za firmu. Skeniraju QR telefonom, a podatke daje Poreska uprava: prodavac, PIB, stavke i PDV po stopama. Knjigovođa dobije račun razvrstan, a Fioka ga jednim klikom upiše u PANTHEON.') + `

<section class="blok-tanak">
  <div class="omot">
    ${fiokaDugmad(false)}
    <div class="mreza m-3" style="margin-top:40px">
      <div class="kartica pojava">
        <div class="kartica-ikona">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 14h3v3M21 14v7h-7"/></svg>
        </div>
        <h3>Ništa se ne prekucava</h3>
        <p>QR na fiskalnom računu vodi do Poreske uprave, a tamo je ceo račun. Fioka uzme
           odatle prodavca, PIB, broj, vreme, stavke i PDV po stopama &mdash; isto što piše
           na papiru, samo bez greške u kucanju.</p>
      </div>
      <div class="kartica pojava k1">
        <div class="kartica-ikona">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5 9.5 17 19 7.5"/></svg>
        </div>
        <h3>Račun troška u PANTHEON-u</h3>
        <p>Ulazni račun sa svakom stavkom posebno i PDV-om po stopi, na tip dokumenta i
           skladište koje firma već koristi. Dobavljača koga nema u šifarniku Fioka doda sama
           &mdash; pun naziv i matični broj iz APR-a.</p>
      </div>
      <div class="kartica pojava k2">
        <div class="kartica-ikona">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></svg>
        </div>
        <h3>Zaposleni bez lozinke</h3>
        <p>Vlasnik pošalje link, zaposleni ga otvori na telefonu, upiše ime &mdash; i skenira.
           Vidi samo svoje račune. Isti konektor kao Vidik i Izlog, bez nove instalacije.</p>
      </div>
    </div>
  </div>
</section>

<section class="blok" style="background:var(--papir2);border-top:1px solid var(--linija);border-bottom:1px solid var(--linija)">
  <div class="omot usko">
    <span class="nadnaslov">Kako ide</span>
    <h2>Od papira do knjige</h2>
    <ol class="koraci-shop" style="margin-top:26px">
      <li class="pojava">
        <h3>Zaposleni skenira</h3>
        <p>Uperi telefon u QR na dnu računa i Fioka ga pročita sama, ili slika račun pa
           pročita sa slike. Ima i mesto za sliku iz galerije, a na računaru prevuci sliku u prozor.
           Kad ga ništa ne uhvati, skeniraj QR kamerom telefona i nalepi link.</p>
      </li>
      <li class="pojava">
        <h3>Izabere šta je to</h3>
        <p>Gorivo, prevoz, parking, reprezentacija &mdash; jedno dugme. Za prodavca kog je već
           unosio, Fioka zapamti vrstu i odeljenje i sledeći put su već izabrani.</p>
      </li>
      <li class="pojava">
        <h3>Knjigovođa preuzme</h3>
        <p>Na jednom mestu vidi sve račune firme, ko ih je doneo i gde idu. Vrati račun uz
           razlog kad nešto nije u redu, ili ga preuzme &mdash; kao CSV za Excel ili pravo u PANTHEON.</p>
      </li>
      <li class="pojava">
        <h3>Fioka napravi dokument u PANTHEON-u</h3>
        <p>Ulazni račun troška, kroz PANTHEON-ove procedure. „Probaj bez upisa" prođe ceo put
           pa sve poništi &mdash; da vidite šta bi nastalo pre nego što bilo šta ostane u bazi.</p>
      </li>
    </ol>
  </div>
</section>

<section class="blok">
  <div class="omot">
    <div class="mreza m-2" style="gap:54px;align-items:center">
      <div class="pojava">
        <span class="nadnaslov">Šta ide u PANTHEON</span>
        <h2>Kao da ga je knjigovođa uneo</h2>
        <ul class="spisak" style="margin-top:20px">
          <li><b>Tip dokumenta, skladište, PDV šifre</b> &mdash; predlog iz onoga što firma već koristi na računima troškova; vi potvrdite jednom</li>
          <li><b>Svaka stavka posebno</b> &mdash; naziv, količina, cena i stopa sa računa. Artikal po vrsti troška, ili po vašem pravilu (sve sa „BMB 95&rdquo; ide na gorivo) &mdash; pravilo se pravi jednim klikom na samom računu</li>
          <li><b>Broj računa</b> &mdash; PFR broj, pa isti račun ne može da uđe dvaput</li>
          <li><b>Novi dobavljač</b> &mdash; naziv, adresa, PIB i matični iz APR-a, šifra po pravilu vaše baze</li>
        </ul>
      </div>
      <div class="pojava k1">
        <div class="panel">
          <div class="panel-traka">
            <span class="tacka"></span><span class="tacka"></span><span class="tacka"></span>
            <span class="panel-naslov">račun sa telefona &rarr; PANTHEON</span>
          </div>
          <div class="panel-telo" style="font-family:'JetBrains Mono',ui-monospace,Consolas,monospace;font-size:12.5px;line-height:1.95">
            <div><span style="color:#4e7c34">●</span> QR pročitan &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9a8d7f">gradski prevoz &middot; 100,00</span></div>
            <div><span style="color:#4e7c34">●</span> Poreska uprava &nbsp;&nbsp;<span style="color:#9a8d7f">1 stavka &middot; PDV 10%</span></div>
            <div><span style="color:#c99a2e">●</span> dobavljač &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9a8d7f">nov &mdash; podaci iz APR-a</span></div>
            <div><span style="color:#4e7c34">●</span> račun troška &nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#9a8d7f">90,91 + PDV 9,09</span></div>
            <div style="margin-top:12px;padding-top:12px;border-top:1px solid var(--linija);color:#6f6358">
              Knjiženje i plaćanje &mdash; u PANTHEON-u, kao i do sada.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="blok" style="padding-top:0">
  <div class="omot usko">
    <span class="nadnaslov">Pitanja</span>
    <h2>Šta se pita pre nego što se uključi</h2>
    <div class="mreza m-2" style="margin-top:28px;gap:26px">
      <div><h3>Treba li aplikacija iz prodavnice?</h3>
        <p>Ne. Fioka se otvara u pregledaču na telefonu i može da se doda na početni ekran
           kao aplikacija. Ništa se ne instalira i ne ažurira ručno.</p></div>
      <div><h3>A račun bez QR-a?</h3>
        <p>Svaki fiskalni račun od 2022. ima QR. Ako ga Fioka ne čita, a kamera telefona ili druga
           aplikacija čita &mdash; kopirajte link i nalepite ga u Fioku. Kad je papir toliko oštećen da
           QR ne čita ništa, takav račun za sada unosite u PANTHEON kao i do sada.</p></div>
      <div><h3>Prodavac još nije poslao stavke Poreskoj?</h3>
        <p>Dešava se kad kasa radi bez veze sa Poreskom. Fioka uzme zaglavlje i iznos, a stopu
           PDV-a birate sami. Posle sama proverava svaki dan i javi samo ako se PDV ne slaže.</p></div>
      <div><h3>Ko sme da upiše u PANTHEON?</h3>
        <p>Samo vlasnik i onaj kome on da „vidi sve" &mdash; najčešće knjigovođa. I samo kad je
           u panelu konektora uključeno „Primaj račune iz Fioke"; podrazumevano je isključeno.</p></div>
      <div><h3>Da li zaposleni vidi tuđe račune?</h3>
        <p>Ne. Vidi samo ono što je sam doneo. Vlasnik može da ga isključi jednim klikom i pristup
           prestaje odmah.</p></div>
      <div><h3>Mogu li bez PANTHEON upisa?</h3>
        <p>Mogu. Fioka radi i kao sanduče računa: razvrstavanje, odobravanje i CSV za Excel.
           Upis se uključuje kad budete spremni.</p></div>
    </div>
  </div>
</section>

<section class="blok">
  <div class="omot cta pojava">
    <span class="nadnaslov" style="justify-content:center">Sledeći korak</span>
    <h2>Probajte na jednom računu</h2>
    <p class="uvod">Napravite fioku firme, skenirajte prvi račun i pogledajte šta Poreska vrati. Za upis u PANTHEON treba isti konektor kao za Vidik.</p>
    ${fiokaDugmad(true)}
  </div>
</section>
`);

console.log('\\n  Gotovo.\\n');

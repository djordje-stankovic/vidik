/* ===========================================================================
   strane.js — sadržaj podstranica. Pokreni `node napravi.js`.
   =========================================================================== */
const { napravi, vrh, cta, DEMO, PREUZMI } = require('./napravi.js');

/* ===========================  MOGUĆNOSTI  ============================== */
napravi('mogucnosti.html',
  'Mogućnosti — Vidik',
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
  'Kontrole — Vidik',
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
  'Kako radi — Vidik',
  'Konektor kod klijenta, odlazna veza na 443, bez otvaranja portova. Nalog samo za čitanje, i dnevnik u kom vidite svaki izvršeni upit.',
  vrh('Kako radi',
      'Ne morate nam verovati na reč',
      'Najčešće pitanje nije „šta ume" nego „gde su nam podaci". Odgovor nije obećanje nego tri stvari koje možete da proverite sami: nalog koji ne sme da piše, program koji odbija svaki upis, i dnevnik u kom stoji svaki upit koji je izvršen.') + `

<section class="blok-tanak" id="it">
  <div class="omot">
    <div class="mreza m-3">
      <div class="kartica pojava">
        <div class="kartica-ikona">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
        </div>
        <h3>1. Konektor kod vas</h3>
        <p>Jedan program na serveru gde je već baza &mdash; jedini koji je uopšte
           dodiruje. Preporučeni nalog je <code>db_datareader</code>: pravo čitanja
           i ništa više. To sprovodi sam SQL Server, pa važi i ako nama nešto pukne.</p>
      </div>
      <div class="kartica pojava k1">
        <div class="kartica-ikona">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
        </div>
        <h3>2. Veza ide napolje</h3>
        <p>Konektor sam otvara odlaznu vezu na portu 443. Ka vašoj mreži se ne otvara
           nijedan port, nema VPN-a ni probijanja zaštite.</p>
      </div>
      <div class="kartica pojava k2">
        <div class="kartica-ikona">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l6-6 4 4 7-8"/></svg>
        </div>
        <h3>3. Svaki upit stoji u dnevniku</h3>
        <p>Konektor zapisuje svaki upit koji je izvršio &mdash; vidite ga u svom panelu,
           na svom serveru. Odbija sve što pokušava da piše. Kad hoćete da prestane,
           „Prekini pristup" gasi vezu odmah, bez nas.</p>
      </div>
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
          Nema migracije, nema promene u načinu rada, nema dodatnog unosa. Vidik čita
          ono što vaši ljudi ionako unose svakog dana.
        </p>
        <ul class="spisak">
          <li>Jedan <code>.exe</code> &mdash; nema instalacije Node-a, baze ni servera</li>
          <li>Sam pronalazi SQL instance na mašini i prepoznaje PANTHEON baze</li>
          <li>Vi štiklirate koje baze delite; ostale ne postoje za nas</li>
          <li>Konektor vam pokaže ključ, vi ga nalepite u Vidik &mdash; i to je sve.
              Ključ pravi vaš server, ne mi</li>
          <li>Razlike među klijentima (druga konta, drugi tipovi dokumenata) rešavaju se
              podešavanjem, ne izmenom programa</li>
        </ul>
        <div style="margin-top:26px;display:flex;gap:12px;flex-wrap:wrap;align-items:center">
          <a href="${PREUZMI}" class="dugme dugme-svetli">Preuzmite konektor</a>
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
          <p>Upiti idu nad indeksiranim kolonama, a konektor drži najviše dve konekcije
          i zatvara ih posle deset minuta mirovanja. U praksi je opterećenje manje nego
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
          <p>Ono što radimo umesto toga jeste da veza bude <b>jedna</b>: jedan konektor
          po firmi, bez obzira koliko ljudi gleda Vidik sa telefona. Trošak licence
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
        'Volimo ta pitanja — arhitektura je i pravljena tako da na njih postoji kratak odgovor.'));

/* ===============================  CENE  ================================ */
napravi('cene.html',
  'Cene — Vidik',
  'Mesečna pretplata po firmi, bez naplate po korisniku. Prvi mesec je besplatan i služi da se vidi šta Vidik nađe u vašim podacima.',
  vrh('Cene',
      'Po firmi, ne po glavi',
      'Naplata po korisniku tera firme da štede na pristupu podacima — a to je tačno suprotno od onoga zbog čega se ovakav alat uvodi. Zato: jedna cena, svi zaposleni unutra.') + `

<section class="blok-tanak">
  <div class="omot">
    <div class="cene">
      <div class="cena pojava">
        <div class="cena-ime">Uvid</div>
        <div class="cena-opis">Za firme koje hoće da vide brojeve bez otvaranja ERP-a.</div>
        <div class="cena-iznos"><b>49</b><span>EUR / mesec</span></div>
        <div class="cena-nota">jedna baza &middot; neograničeno korisnika</div>
        <ul class="spisak">
          <li>Svih sedam ekrana</li>
          <li>Neograničen broj korisnika</li>
          <li>Ispisi po meri i izvoz</li>
          <li>Zadaci nazad u ERP</li>
          <li>Podrška mejlom</li>
        </ul>
        <a href="kontakt.html" class="dugme dugme-tihi" style="width:100%">Zakaži prikaz</a>
      </div>

      <div class="cena istaknuta pojava k1">
        <span class="cena-znacka">Najčešći izbor</span>
        <div class="cena-ime">Kontrola</div>
        <div class="cena-opis">Kad vas mesečno zatvaranje i završni račun koštaju previše sati.</div>
        <div class="cena-iznos"><b>89</b><span>EUR / mesec</span></div>
        <div class="cena-nota">jedna baza &middot; neograničeno korisnika</div>
        <ul class="spisak">
          <li>Sve iz paketa Uvid</li>
          <li><b>Kontrola PDV-a</b> — knjiga računa naspram POPDV-a</li>
          <li><b>Kontrola završnog računa</b> — konta van obrazaca</li>
          <li>Moduli naspram glavne knjige</li>
          <li>Mesečni izveštaj šta je nađeno</li>
          <li>Podrška telefonom</li>
        </ul>
        <a href="kontakt.html" class="dugme dugme-glavni" style="width:100%">Zakaži prikaz</a>
      </div>

      <div class="cena pojava k2" id="agencije">
        <div class="cena-ime">Agencija</div>
        <div class="cena-opis">Za knjigovodstvene agencije koje vode desetine firmi.</div>
        <div class="cena-iznos"><b>19</b><span>EUR / baza</span></div>
        <div class="cena-nota">od 10 baza naviše &middot; jedan nalog za sve</div>
        <ul class="spisak">
          <li>Sve iz paketa Kontrola</li>
          <li>Sve baze u jednom spisku</li>
          <li>Prebacivanje između firmi jednim klikom</li>
          <li>Kontrole preko svih klijenata odjednom</li>
          <li>Vaš logo na ispisima</li>
          <li>Namenski kontakt za podršku</li>
        </ul>
        <a href="kontakt.html" class="dugme dugme-tihi" style="width:100%">Tražite ponudu</a>
      </div>
    </div>

    <p style="text-align:center;margin-top:30px;color:var(--tise);font-size:14px" class="pojava">
      Cene su bez PDV-a. Postavljanje konektora se ne naplaćuje. Ugovor je mesečni — otkazuje se kad god.
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

console.log('\\n  Gotovo.\\n');

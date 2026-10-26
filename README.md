# SajtPro — prezentacioni sajt (sajtpro.rs)

Statičan sajt: bez biblioteka, bez build koraka, bez servera. Otvara se duplim
klikom na `index.html`.

SajtPro pravi tri alata nad PANTHEON bazom — **Vidik** (brojevi i kontrole),
**Izlog** (online prodavnica) i **Fioka** (računi sa telefona) — i jedan konektor
za sva tri. Ovaj repo je samo prezentacioni sajt; aplikacije su odvojene.
Do 26.10.2026 sajt je bio samo Vidikov (zato se repo i dalje zove `vidik`).

## Stranice

| Fajl | Šta je |
|---|---|
| `index.html` | početna kuće: tri proizvoda, jedan konektor (izvor `pocetna.js`) |
| `vidik.html` | Vidik — dosadašnja početna, pisana ručno |
| `mogucnosti.html` | ekrani, razdvojeno na „za direktora" i „za računovodstvo" |
| `kontrole.html` | kontrola PDV-a, završni račun, moduli naspram glavne knjige |
| `kako-radi.html` | konektor (zajednički za sva tri), bezbednost, licenca, pitanja IT službe |
| `prodavnica.html` | Izlog — online prodavnica (drugi proizvod) |
| `fioka.html` | Fioka — računi sa telefona u PANTHEON (treći proizvod) |
| `cene.html` | paketi i pitanja oko cene |
| `kontakt.html` | forma |

## Fajlovi

| Fajl | Šta radi |
|---|---|
| `css/stil.css` | ceo izgled; paleta je u prvih 30 linija (`:root`) |
| `js/vidik.js` | pojavljivanje na skrol, meni na telefonu, grafikoni, forma |
| `napravi.js` + `pocetna.js` + `strane.js` | **generator strana** — zaglavlje i podnožje na jednom mestu; ručnim stranama (`vidik.html`, `kontakt.html`) samo ih zameni |
| `css/kuca.css` | šema i kartice proizvoda na početnoj |
| `og/kuca.html` | izvor za `og.png` (komanda je u fajlu) |
| `pregled.js` | lokalni server za pregled: `node pregled.js` → http://localhost:8090 |

## Kad menjaš sadržaj

`vidik.html` i `kontakt.html` se uređuju direktno (zaglavlje i podnožje im prepiše generator).

Ostale četiri se **generišu** — menja se `strane.js`, pa:

```bash
node napravi.js
```

Ako menjaš `mogucnosti.html` ručno, sledeće pokretanje generatora će to
pregaziti.

## Adrese demoa i preuzimanja

Na svakoj stranici stoji dugme za demo i za preuzimanje konektora. Adrese su na
jednom mestu, u `napravi.js`:

```bash
VIDIK_DEMO=https://kokpit.example.rs \
VIDIK_PREUZMI=https://kokpit.example.rs/preuzmi/konektor.exe \
node napravi.js
```

Bez tih promenljivih upisuje se `DEMO_ADRESA` — namerno ružno, da se vidi golim
okom ako slučajno ode u objavu. `index.html` i `kontakt.html` se ne generišu, pa
se u njima menja ručno (traži `DEMO_ADRESA`).

## Fontovi

Naslovi su Fraunces, tekst Inter, brojevi JetBrains Mono — sa Google Fonts. Ako
font ne stigne, pada na Georgia / sistemski sans i sajt i dalje izgleda
pristojno.

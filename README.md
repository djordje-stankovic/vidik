# Vidik — prezentacioni sajt

Statičan sajt: bez biblioteka, bez build koraka, bez servera. Otvara se duplim
klikom na `index.html`.

Vidik je upravljački kokpit nad PANTHEON bazom. Ovaj repo je samo prezentacioni
sajt — sama aplikacija je odvojena.

## Stranice

| Fajl | Šta je |
|---|---|
| `index.html` | početna |
| `mogucnosti.html` | ekrani, razdvojeno na „za direktora" i „za računovodstvo" |
| `kontrole.html` | kontrola PDV-a, završni račun, moduli naspram glavne knjige |
| `kako-radi.html` | konektor, bezbednost, postavljanje, pitanja IT službe |
| `cene.html` | paketi i pitanja oko cene |
| `kontakt.html` | forma |

## Fajlovi

| Fajl | Šta radi |
|---|---|
| `css/stil.css` | ceo izgled; paleta je u prvih 30 linija (`:root`) |
| `js/vidik.js` | pojavljivanje na skrol, meni na telefonu, grafikoni, forma |
| `napravi.js` + `strane.js` | **generator podstranica** — zaglavlje i podnožje na jednom mestu |
| `pregled.js` | lokalni server za pregled: `node pregled.js` → http://localhost:8090 |

## Kad menjaš sadržaj

`index.html` i `kontakt.html` se uređuju direktno.

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

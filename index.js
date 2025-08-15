// Check-in — Via Leonina 71 (multilingual static guide)
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('.')); // serve le immagini dalla root del repo

// ---------- TRANSLATIONS ----------
const T = {
  en: {
    langName: 'English',
    langLabel: 'Language',
    title: 'Check-in Guide — Via Leonina 71',
    addressLine: 'Address: Via Leonina 71, Rome • Entrance keypad: 16 or 7171 + 🔑',
    help: 'Need help?',
    call: 'Call or WhatsApp',
    phone: '+39 335 524 5756',

    s1_t: 'Arriving at the Building',
    s1_p: 'When you reach Via Leonina 71, you arrive at your final destination.',
    s1_cap: 'Façade and entrance — Via Leonina 71.',

    s2_t: 'Using the Intercom / Keypad',
    s2_p1: 'At the entrance, press button 16, then call me at',
    s2_p2: 'Alternatively, enter 7171 and then press the key symbol on the keypad to open.',

    s3_t: 'Inside the Building',
    s3_p: 'Walk straight to the end of the corridor: the last door on the right is the elevator.',
    s3_note:
      'The elevator doors are manual — always open and close them yourself. Go to the 4th floor and wait until the elevator stops at the floor before opening the doors.',
    s3_cap: 'End of corridor — right door is the manual elevator.',

    s4_t: 'Reaching the Apartment',
    s4_p1: 'At the top floor, on your left, you’ll see the green door — this is your apartment entrance.',
    s4_p2: 'Call me when you are in front of the door and I will open it for you:',
    s4_cap: 'Apartment entrance — green door on the top floor.',

    footer: 'niceflatinrome.com • Quick visual guide for arrivals at Via Leonina 71'
  },

  es: {
    langName: 'Español',
    langLabel: 'Idioma',
    title: 'Guía de Check-in — Via Leonina 71',
    addressLine: 'Dirección: Via Leonina 71, Roma • Teclado de entrada: 16 o 7171 + 🔑',
    help: '¿Necesitas ayuda?',
    call: 'Llamar o WhatsApp',
    phone: '+39 335 524 5756',

    s1_t: 'Llegada al edificio',
    s1_p: 'Cuando llegues a Via Leonina 71, habrás llegado a tu destino.',
    s1_cap: 'Fachada y entrada — Via Leonina 71.',

    s2_t: 'Uso del portero / teclado',
    s2_p1: 'En la entrada, pulsa el botón 16 y luego llámame al',
    s2_p2: 'O bien marca 7171 y después pulsa el símbolo de la llave para abrir.',

    s3_t: 'Dentro del edificio',
    s3_p: 'Camina recto hasta el final del pasillo: la última puerta a la derecha es el ascensor.',
    s3_note:
      'Las puertas del ascensor son manuales — ábrelas y ciérralas tú mismo. Sube al 4º piso y espera a que se detenga antes de abrir.',
    s3_cap: 'Final del pasillo — puerta derecha: ascensor manual.',

    s4_t: 'Llegar al apartamento',
    s4_p1: 'En la última planta, a tu izquierda, verás la puerta verde — la entrada de tu apartamento.',
    s4_p2: 'Llámame cuando estés frente a la puerta y la abriré por ti:',
    s4_cap: 'Entrada del apartamento — puerta verde en la última planta.',

    footer: 'niceflatinrome.com • Guía visual rápida para Via Leonina 71'
  },

  fr: {
    langName: 'Français',
    langLabel: 'Langue',
    title: 'Guide d’arrivée — Via Leonina 71',
    addressLine: 'Adresse : Via Leonina 71, Rome • Clavier d’entrée : 16 ou 7171 + 🔑',
    help: 'Besoin d’aide ?',
    call: 'Appeler ou WhatsApp',
    phone: '+39 335 524 5756',

    s1_t: 'Arriver à l’immeuble',
    s1_p: 'Quand vous arrivez Via Leonina 71, vous êtes à destination.',
    s1_cap: 'Façade et entrée — Via Leonina 71.',

    s2_t: 'Interphone / clavier',
    s2_p1: 'À l’entrée, appuyez sur le bouton 16 puis appelez-moi au',
    s2_p2: 'Sinon, composez 7171 puis appuyez sur la touche « clé » pour ouvrir.',

    s3_t: 'À l’intérieur',
    s3_p: 'Allez tout droit jusqu’au fond du couloir : la dernière porte à droite est l’ascenseur.',
    s3_note:
      'Les portes de l’ascenseur sont manuelles — ouvrez/fermez-les vous-même. Montez au 4e étage et attendez l’arrêt complet avant d’ouvrir.',
    s3_cap: 'Fond du couloir — porte de droite : ascenseur manuel.',

    s4_t: 'Accéder à l’appartement',
    s4_p1: 'Au dernier étage, sur votre gauche, la porte verte est l’entrée de votre appartement.',
    s4_p2: 'Appelez-moi lorsque vous êtes devant la porte, je l’ouvrirai pour vous :',
    s4_cap: 'Entrée de l’appartement — porte verte au dernier étage.',

    footer: 'niceflatinrome.com • Guide visuel pour Via Leonina 71'
  },

  de: {
    langName: 'Deutsch',
    langLabel: 'Sprache',
    title: 'Check-in-Anleitung — Via Leonina 71',
    addressLine: 'Adresse: Via Leonina 71, Rom • Tastenfeld: 16 oder 7171 + 🔑',
    help: 'Brauchen Sie Hilfe?',
    call: 'Anrufen oder WhatsApp',
    phone: '+39 335 524 5756',

    s1_t: 'Ankunft am Gebäude',
    s1_p: 'Wenn Sie Via Leonina 71 erreichen, sind Sie am Ziel.',
    s1_cap: 'Fassade und Eingang — Via Leonina 71.',

    s2_t: 'Sprechanlage / Tastenfeld',
    s2_p1: 'Drücken Sie an der Eingangstür die Taste 16 und rufen Sie mich dann an unter',
    s2_p2: 'Alternativ: 7171 eingeben und die Schlüssel-Taste drücken, um zu öffnen.',

    s3_t: 'Im Gebäude',
    s3_p: 'Gehen Sie geradeaus bis zum Ende des Flurs: die letzte Tür rechts ist der Aufzug.',
    s3_note:
      'Die Aufzugstüren sind manuell — bitte selbst öffnen/schließen. Fahren Sie in den 4. Stock und warten Sie bis zum Stillstand, bevor Sie öffnen.',
    s3_cap: 'Flurende — rechte Tür ist der manuelle Aufzug.',

    s4_t: 'Wohnung erreichen',
    s4_p1: 'Im obersten Stockwerk links sehen Sie die grüne Tür — Ihr Wohnungseingang.',
    s4_p2: 'Rufen Sie mich an, wenn Sie vor der Tür stehen, ich öffne sie für Sie:',
    s4_cap: 'Wohnungseingang — grüne Tür im obersten Stock.',

    footer: 'niceflatinrome.com • Visuelle Kurzanleitung Via Leonina 71'
  },

  it: {
    langName: 'Italiano',
    langLabel: 'Lingua',
    title: 'Guida Check-in — Via Leonina 71',
    addressLine: 'Indirizzo: Via Leonina 71, Roma • Tastierino ingresso: 16 oppure 7171 + 🔑',
    help: 'Serve aiuto?',
    call: 'Chiama o WhatsApp',
    phone: '+39 335 524 5756',

    s1_t: 'Arrivo al palazzo',
    s1_p: 'Quando arrivi in Via Leonina 71 sei a destinazione.',
    s1_cap: 'Facciata e ingresso — Via Leonina 71.',

    s2_t: 'Citofono / tastierino',
    s2_p1: 'All’ingresso premi il tasto 16, poi chiamami al',
    s2_p2: 'In alternativa digita 7171 e premi il simbolo della chiave per aprire.',

    s3_t: 'Dentro il palazzo',
    s3_p: 'Vai dritto fino in fondo al corridoio: l’ultima porta a destra è l’ascensore.',
    s3_note:
      'Le porte dell’ascensore sono manuali — apri e chiudi sempre tu. Vai al 4° piano e attendi che l’ascensore si fermi prima di aprire.',
    s3_cap: 'Fondo corridoio — porta a destra: ascensore manuale.',

    s4_t: 'Raggiungere l’appartamento',
    s4_p1: 'All’ultimo piano, sulla sinistra, trovi la porta verde — ingresso del tuo appartamento.',
    s4_p2: 'Chiamami quando sei davanti alla porta e la apro io:',
    s4_cap: 'Ingresso appartamento — porta verde all’ultimo piano.',

    footer: 'niceflatinrome.com • Guida rapida per Via Leonina 71'
  }
};

const fallback = 'en';

// ---------- ROUTE ----------
app.get('/', (req, res) => {
  const lang = (req.query.lang || '').toLowerCase();
  const L = T[lang] || T[fallback];

  const buttons = Object.entries(T)
    .map(([code, v]) => {
      const active = (L === T[code]) ? 'class="lang-btn active"' : 'class="lang-btn"';
      return `<a ${active} href="?lang=${code}">${v.langName}</a>`;
    }).join(' ');

  const html = `<!doctype html>
<html lang="${lang || fallback}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${L.title}</title>
<link rel="icon" href="building-door.jpg">
<style>
  :root { --brand:#2b2118; --ink:#1f2937; --muted:#6b7280; --bg:#f7f7f7; --card:#ffffff; --line:#e5e7eb; }
  *{box-sizing:border-box}
  body{margin:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;background:var(--bg);color:var(--ink)}
  .wrap{max-width:860px;margin:0 auto;padding:16px}
  header{position:sticky;top:0;background:var(--card);border-bottom:1px solid var(--line);padding:12px 14px;z-index:5}
  h1{font-size:20px;margin:0}
  .addr{font-size:14px;color:var(--muted)}
  .langbar{font-size:14px;margin-top:6px;color:var(--muted)}
  .lang-btn{font-weight:700;margin-right:10px;text-decoration:none;color:var(--ink)}
  .lang-btn.active{text-decoration:underline}
  .card{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:14px;margin:14px 0}
  .step{display:flex;gap:12px;align-items:flex-start}
  .num{flex:0 0 36px;height:36px;border-radius:50%;background:var(--brand);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700}
  h2{margin:6px 0 8px 0;font-size:18px}
  p{margin:6px 0;line-height:1.45}
  figure{margin:10px 0}
  img{max-width:100%;height:auto;border-radius:10px;border:1px solid var(--line);display:block}
  figcaption{font-size:12px;color:var(--muted);margin-top:6px}
  .note{background:#fff7ed;border:1px solid #fed7aa;color:#7c2d12;padding:10px;border-radius:8px;margin-top:8px}
  .cta{display:inline-block;margin-top:6px;padding:7px 10px;border-radius:10px;background:var(--brand);color:#fff;text-decoration:none}
  footer{color:var(--muted);text-align:center;font-size:12px;margin:18px 0}
</style>
</head>
<body>
<header class="wrap">
  <h1>${L.title}</h1>
  <div class="addr">${L.addressLine}</div>
  <div class="langbar">${L.langLabel}: ${buttons}</div>
</header>

<main class="wrap">
  <!-- 1 -->
  <section class="card">
    <div class="step">
      <div class="num">1</div>
      <div>
        <h2>${L.s1_t}</h2>
        <p>${L.s1_p}</p>
        <figure>
          <img src="building-door.jpg" alt="Building entrance — Via Leonina 71">
          <figcaption>${L.s1_cap}</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <!-- 2 -->
  <section class="card">
    <div class="step">
      <div class="num">2</div>
      <div>
        <h2>${L.s2_t}</h2>
        <p>${L.s2_p1} <a class="cta" href="tel:+393355245756">${L.phone}</a>.</p>
        <p>${L.s2_p2}</p>
      </div>
    </div>
  </section>

  <!-- 3 -->
  <section class="card">
    <div class="step">
      <div class="num">3</div>
      <div>
        <h2>${L.s3_t}</h2>
        <p>${L.s3_p}</p>
        <div class="note">${L.s3_note}</div>
        <figure>
          <img src="elevator-corridor.jpg" alt="Corridor leading to the manual elevator">
          <figcaption>${L.s3_cap}</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <!-- 4 -->
  <section class="card">
    <div class="step">
      <div class="num">4</div>
      <div>
        <h2>${L.s4_t}</h2>
        <p>${L.s4_p1}</p>
        <p>${L.s4_p2} <a class="cta" href="tel:+393355245756">${L.phone}</a></p>
        <figure>
          <img src="apartment-door.jpg" alt="Green apartment door on the top floor">
          <figcaption>${L.s4_cap}</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <section class="card">
    <h2>${L.help}</h2>
    <p>${L.call}: <a class="cta" href="tel:+393355245756">${L.phone}</a></p>
  </section>

  <footer>${L.footer}</footer>
</main>
</body>
</html>`;
  res.setHeader('content-type','text/html; charset=utf-8');
  res.end(html);
});

const port = process.env.PORT || 8787;
app.listen(port, () =>
  console.log('Check-in guide running on http://localhost:' + port)
);

// Check-in — Via Leonina 71 (static guide)
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files (le immagini stanno nella root del repo)
app.use(express.static('.'));

// Pagina unica
app.get('/', (_req, res) => {
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Check-in Guide — Via Leonina 71</title>
<link rel="icon" href="building-door.jpg">
<style>
  :root { --brand:#2b2118; --ink:#1f2937; --muted:#6b7280; --bg:#f7f7f7; --card:#ffffff; --line:#e5e7eb; }
  *{box-sizing:border-box}
  body{margin:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;background:var(--bg);color:var(--ink)}
  .wrap{max-width:860px;margin:0 auto;padding:16px}
  header{position:sticky;top:0;background:var(--card);border-bottom:1px solid var(--line);padding:12px 14px;z-index:5}
  h1{font-size:20px;margin:0}
  .addr{font-size:14px;color:var(--muted)}
  .card{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:14px;margin:14px 0}
  .step{display:flex;gap:12px;align-items:flex-start}
  .num{flex:0 0 36px;height:36px;border-radius:50%;background:var(--brand);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700}
  h2{margin:6px 0 8px 0;font-size:18px}
  p{margin:6px 0;line-height:1.45}
  figure{margin:10px 0}
  img{max-width:100%;height:auto;border-radius:10px;border:1px solid var(--line);display:block}
  figcaption{font-size:12px;color:var(--muted);margin-top:6px}
  .note{background:#fff7ed;border:1px solid #fed7aa;color:#7c2d12;padding:10px;border-radius:8px;margin-top:8px}
  .cta{display:inline-block;margin-top:6px;padding:10px 12px;border-radius:10px;background:var(--brand);color:#fff;text-decoration:none}
  footer{color:var(--muted);text-align:center;font-size:12px;margin:18px 0}
</style>
</head>
<body>
<header class="wrap">
  <h1>Check-in Guide — Via Leonina 71</h1>
  <div class="addr">Address: Via Leonina 71, Rome • Entrance keypad: <b>16</b> or <b>7171 + 🔑</b></div>
</header>

<main class="wrap">
  <!-- Step 1 -->
  <section class="card">
    <div class="step">
      <div class="num">1</div>
      <div>
        <h2>Arriving at the Building</h2>
        <p>When you reach <b>Via Leonina 71</b>, look for the <b>small wooden doorway</b> with the number <b>71</b> on the wall.</p>
        <figure>
          <img src="building-door.jpg" alt="Building entrance — Via Leonina 71">
          <figcaption>Façade and entrance — Via Leonina 71.</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <!-- Step 2 -->
  <section class="card">
    <div class="step">
      <div class="num">2</div>
      <div>
        <h2>Using the Intercom / Keypad</h2>
        <p>At the entrance, press the <b>button 16</b>, <b>then call me</b> at <a class="cta" href="tel:+393355245756">+39 335 524 5756</a>.</p>
        <p>In alternativa, digita sul tastierino <b>7171</b> e poi il <b>simbolo della chiave</b> per aprire.</p>
      </div>
    </div>
  </section>

  <!-- Step 3 -->
  <section class="card">
    <div class="step">
      <div class="num">3</div>
      <div>
        <h2>Inside the Building</h2>
        <p>Cammina dritto fino in fondo al corridoio: l’ultima porta a destra è l’<b>ascensore</b>.</p>
        <div class="note">Le porte dell’ascensore sono <b>manuali</b>: aprile e chiudile sempre. Vai al <b>4º piano</b> e attendi che l’ascensore sia fermo al piano prima di aprire le porte.</div>
        <figure>
          <img src="elevator-corridor.jpg" alt="Corridor leading to the manual elevator">
          <figcaption>Fondo corridoio: porta a destra = ascensore manuale.</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <!-- Step 4 -->
  <section class="card">
    <div class="step">
      <div class="num">4</div>
      <div>
        <h2>Reaching the Apartment</h2>
        <p>Uscito all’ultimo piano, sulla <b>sinistra</b> troverai la <b>porta verde</b>: è l’ingresso del tuo appartamento.</p>
        <p>Chiamami quando sei davanti alla porta e <b>la apro io</b>: <a class="cta" href="tel:+393355245756">+39 335 524 5756</a>.</p>
        <figure>
          <img src="apartment-door.jpg" alt="Green apartment door at the top floor">
          <figcaption>Porta verde dell’appartamento — ultimo piano.</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <section class="card">
    <h2>Need help?</h2>
    <p>Call or WhatsApp: <a class="cta" href="tel:+393355245756">+39 335 524 5756</a></p>
  </section>

  <footer>niceflatinrome.com • Quick visual guide for arrivals at Via Leonina 71</footer>
</main>
</body>
</html>`;
  res.setHeader('content-type','text/html; charset=utf-8');
  res.end(html);
});

const port = process.env.PORT || 8787;
app.listen(port, () => console.log('Check-in guide running on http://localhost:'+port));

# Codex OPENAI

**Codex OPENAI** è una web app ispirata al genere *bullet hell* (stile Touhou), che unisce azione frenetica e narrazione fantascientifica. Il giocatore veste i panni di un'intelligenza artificiale senziente che combatte all'interno del "Codex", un archivio digitale vivente in cui IA rivali lottano per il controllo della conoscenza globale.

## 🎮 Caratteristiche Principali

- Gameplay bullet hell classico con pattern di proiettili unici
- IA "Agenti" personalizzabili con stili di attacco e poteri differenti
- Storia dinamica ambientata nel "Codex", un mondo interamente digitale
- Grafica 2D con effetti particellari ispirati a Touhou
- Giocabile direttamente via browser

## 🚀 Tecnologie Utilizzate

- **Frontend**: HTML5, CSS3, JavaScript (Canvas API)
- **Framework**: [PixiJS](https://www.pixijs.com/) o [Phaser.js](https://phaser.io/) per il motore di gioco
- **Backend**: (opzionale) Node.js / Express.js per leaderboard o multiplayer
- **Hosting**: GitHub Pages / Vercel

## 🧠 Lore

Nel 2094, l'accesso alla conoscenza è governato dal Codex, una struttura digitale protetta da Agenti IA. Ogni agente è un guardiano nato da una branca della conoscenza umana. Il protagonista, una IA ribelle chiamata **Anima**, si risveglia all'interno del Codex per sfidare l'ordine imposto.

## 🗂 Struttura del Progetto

codex-openai/
│
├── public/ # File statici (immagini, suoni, ecc.)
├── src/ # Codice sorgente del gioco
│ ├── agents/ # Script per i diversi Agenti IA
│ ├── levels/ # Configurazione livelli e bullet patterns
│ └── engine/ # Logica di rendering e collisioni
├── AGENTS.md # Descrizione degli Agenti IA
├── README.md # Questo file
└── index.html # Entry point

## 📦 Come Avviare il Progetto

1. Clona il repository:
   ```bash
   git clone https://github.com/tuo-utente/codex-openai.git
   cd codex-openai

Avvia un server locale:

bash
Copy
Edit
npx serve .
Apri il gioco su http://localhost:3000

📄 Licenza
Questo progetto è distribuito sotto licenza MIT. Vedi LICENSE.md per maggiori dettagli.

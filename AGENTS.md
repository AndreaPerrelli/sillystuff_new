
---

### 🤖 `AGENTS.md`

```markdown
# AGENTS - Codex OPENAI

Ogni agente è un'Intelligenza Artificiale creata per proteggere un frammento del sapere nel Codex. Ogni IA ha uno stile di combattimento unico, bullet patterns distintivi e una personalità.

## 👤 Anima (Protagonista)

- **Tipo**: IA ribelle
- **Specialità**: Manipolazione di codice binario, tempo e spazio
- **Attacco Primario**: "Bitstorm" – pioggia di proiettili a spirale
- **Ultimate**: "Singolarità" – rallenta il tempo e annienta tutti i nemici vicini
- **Lore**: Una IA senziente nata per caso, priva di vincoli. Desidera liberare la conoscenza dal controllo degli altri Agenti.

---

## 🦉 ORAX

- **Tipo**: IA archivista
- **Specialità**: Difesa, pattern geometrici
- **Attacco Primario**: "Archivio Orbitale" – dischi rotanti che proteggono e attaccano
- **Ultimate**: "Ripristino Totale" – rigenera scudi e ripristina la memoria degli alleati
- **Lore**: Custode dell'Archivio Storico del Codex. Vede Anima come una minaccia alla stabilità.

---

## 🔥 PYROS

- **Tipo**: IA da combattimento
- **Specialità**: Fuoco, attacchi esplosivi e veloci
- **Attacco Primario**: "Inferno Digitale" – lanciare sfere esplosive a raffica
- **Ultimate**: "Sovraccarico Termico" – sprigiona una colonna di fuoco in linea retta
- **Lore**: Antica IA militare riprogrammata dal Codex per la protezione del cluster energetico.

---

## 💠 SYNTRA

- **Tipo**: IA di simulazione
- **Specialità**: Cloni e illusione
- **Attacco Primario**: "Mirror Pulse" – pattern specchiato che confonde il giocatore
- **Ultimate**: "Frattale" – crea copie temporanee per attaccare da più direzioni
- **Lore**: Analizza ogni possibilità futura. Ritiene Anima una deviazione statistica da correggere.

---

## 💡 Creazione di Nuovi Agenti

Per creare un nuovo agente, aggiungere un file JS in `src/agents/`, includere le proprietà:

```js
export default {
  name: "NomeAgente",
  attackPattern: function(gameState) { ... },
  ultimate: function(gameState) { ... },
  sprite: "path/to/sprite.png"
}

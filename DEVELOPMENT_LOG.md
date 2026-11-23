# Development Log - Wedding Website
**Sito matrimonio Luca & Eugenia**
**Data matrimonio**: 20 Giugno 2026
**Dominio**: www.avogadotravel.it

---

## 📋 Informazioni Matrimonio

### Dettagli Evento
- **Data**: Sabato 20 Giugno 2026
- **Cerimonia**: Pieve San Giovanni Battista, Ponte allo Spino, Sovicille (SI)
  - Orario arrivo: 14:30
  - Inizio cerimonia: 15:00
- **Ricevimento**: Borgo di Recenza, Fattoria Cerreto a Merse, Sovicille (SI)
  - Aperitivo: 16:00
  - Cena: 19:30
  - Festa: 23:00
- **RSVP Deadline**: 1 Marzo 2026
- **Dress Code**: Elegante / Semi-formale

### Specifiche Design
- **Tagline**: "Avogado Travel"
- **Font Logo**: Edwardian Script ITC per monogramma "L & E"
- **Lingua**: Solo Italiano (no English)
- **No lista nozze**
- **No analytics/tracking**

---

## 🎨 Decisioni Tecniche

### Stack Tecnologico
- **Framework**: SvelteKit 2.12.2 + Svelte 5.14.4 (Runes API)
- **Styling**: Tailwind CSS 3.4.17
- **Animazioni**:
  - GSAP 3.13.0 (con ScrollTrigger)
  - Lenis 1.3.13 (smooth scrolling)
  - Rough Notation 0.5.1 (per effetti hand-drawn)
- **Date Management**: dayjs 1.11.19
- **Form**: Tally.so (servizio esterno, free tier)
- **Deployment**: Vercel (pianificato)

### Palette Colori Wedding
```javascript
colors: {
  cream: { DEFAULT: '#F5F1E8', light: '#FAF8F3', dark: '#EBE5D8' },
  beige: { DEFAULT: '#E8DCC4', light: '#F0E6D6', dark: '#D4C5A9' },
  sand: { DEFAULT: '#D4C5A9', light: '#E0D4BE', dark: '#C4B299' },
  sage: { DEFAULT: '#8B9D83', light: '#A5B59D', dark: '#738A6A' },
  forest: { DEFAULT: '#4A5D4E', light: '#5D7263', dark: '#3A4A3F' },
  sky: { DEFAULT: '#A4C3D2', light: '#BAD3DF', dark: '#8FB0C0' },
  gold: { DEFAULT: '#C9A961', light: '#D9BE81', dark: '#B89447' },
  charcoal: { DEFAULT: '#2C2C2C', light: '#3D3D3D', dark: '#1A1A1A' },
}
```

### Font Families
- **Serif** (titoli): Playfair Display
- **Sans** (body): Inter
- **Script** (accenti): Caveat
- **Display** (monogramma): Edwardian Script ITC

---

## ✅ Sprint Completati

### Sprint 1: Foundation (Completato)
**File modificati**:
- `packages/tailwind-config/tailwind.config.cjs` - Aggiunta palette wedding e fonts
- `packages/fe/src/app.html` - Integrato Google Fonts
- `packages/fe/package.json` - Installate dipendenze (gsap, lenis, rough-notation, dayjs)

**Risultati**:
- ✅ Tailwind configurato con 8 color families personalizzate
- ✅ Google Fonts integrato (Playfair Display, Inter, Caveat)
- ✅ Tutte le dipendenze installate con successo
- ✅ Monorepo Yarn workspace funzionante

### Sprint 2: Homepage Hero + Countdown (Completato)
**File creati/modificati**:
- `packages/fe/src/routes/+layout.svelte` - Navigation fissa responsive + Footer
- `packages/fe/src/routes/+page.svelte` - Homepage con hero e countdown

**Features implementate**:
- ✅ Navigation bar fissa con logo "L & E" in Edwardian Script
- ✅ Menu hamburger mobile responsive
- ✅ Hero section con monogramma animato
- ✅ Countdown timer live (giorni/ore/minuti/secondi) usando dayjs
- ✅ 3 CTA buttons (La Nostra Storia, Informazioni, Conferma Presenza)
- ✅ Footer con dettagli matrimonio e tagline
- ✅ Scroll indicator animato

**Componenti**:
```svelte
// Navigation: Fixed top con mobile menu
// Hero: Monogramma L & E + nomi + data
// Countdown: 4 card con timer live
// CTAs: 3 buttons con link alle sezioni
```

### Sprint 3: Timeline Structure (Completato)
**File modificati**:
- `packages/fe/src/routes/our-story/+page.svelte` - Timeline completa

**Features implementate**:
- ✅ Struttura dati TypeScript per milestones
- ✅ Layout desktop: timeline verticale alternata (left/right)
- ✅ Layout mobile: stack verticale con cerchi laterali
- ✅ 5 milestones placeholder pronti da personalizzare
- ✅ Supporto per immagini opzionali in ogni milestone
- ✅ Cerchi numerati dorati con numeri progressivi
- ✅ Card hover effect con shadow
- ✅ Linea verticale centrale (desktop)
- ✅ Bottom CTA verso wedding-info page

**Data Structure**:
```typescript
interface TimelineMilestone {
  id: number;
  date: string;  // es. "Settembre 2006"
  title: string; // es. "Il Primo Incontro"
  description: string;
  image?: string;
  side: 'left' | 'right';
}
```

**Milestones Placeholder** (da personalizzare):
1. Settembre 2006 - Il Primo Incontro
2. Estate 2010 - La Prima Vacanza Insieme
3. Dicembre 2015 - Un Momento Speciale
4. Primavera 2024 - La Proposta
5. 20 Giugno 2026 - Il Nostro Matrimonio

### Sprint 4: Animations (Completato)
**File modificati**:
- `packages/fe/src/routes/our-story/+page.svelte` - Aggiunto GSAP ScrollTrigger
- `packages/fe/src/routes/+layout.svelte` - Integrato Lenis smooth scroll

**Animazioni implementate**:
- ✅ **Lenis smooth scrolling** su tutta l'app (duration: 1.2s)
- ✅ **Header fade-in** al caricamento pagina
- ✅ **Timeline items slide-in**: da sinistra per left, da destra per right
  - Trigger: quando item entra al 85% viewport
  - Duration: 0.8s con ease power2.out
- ✅ **Cerchi scale animation**: bounce effect (scale 0 → 1)
  - Delay: 0.3s dopo slide-in
  - Ease: back.out(1.7) per effetto elastico
- ✅ **Vertical line reveal**: scaleY animato durante scroll
  - Scrub: 1 (legato allo scroll)
- ✅ **Bottom CTA fade-in**: opacity + translateY
- ✅ **Cleanup** ScrollTrigger in onDestroy per performance

**Configurazione GSAP**:
```javascript
gsap.registerPlugin(ScrollTrigger);

// Timeline items animation
gsap.from(item, {
  scrollTrigger: {
    trigger: item,
    start: 'top 85%',
    end: 'top 50%',
    toggleActions: 'play none none reverse',
  },
  opacity: 0,
  x: isLeft ? -100 : 100,
  duration: 0.8,
  ease: 'power2.out'
});
```

---

## 📄 Pagine Create

### 1. Homepage (/)
**File**: `packages/fe/src/routes/+page.svelte`
- Hero con monogramma L & E
- Countdown timer live
- 3 CTA buttons
- Sezione preview info

### 2. La Nostra Storia (/our-story)
**File**: `packages/fe/src/routes/our-story/+page.svelte`
- Timeline interattiva animata
- 5 milestones pronti da personalizzare
- Responsive desktop/mobile
- GSAP ScrollTrigger animations

### 3. Informazioni (/wedding-info)
**File**: `packages/fe/src/routes/wedding-info/+page.svelte`
- Sezione "Quando" con orari dettagliati
- Sezione "Dove" con location cerimonia/ricevimento
- Dress code
- CTA RSVP con deadline

### 4. RSVP (/rsvp)
**File**: `packages/fe/src/routes/rsvp/+page.svelte`
- Placeholder per Tally.so form embed
- Reminder deadline: 1 Marzo 2026

### 5. Layout Globale
**File**: `packages/fe/src/routes/+layout.svelte`
- Navigation fixed responsive
- Lenis smooth scroll
- Footer con info matrimonio

---

## 🔧 Issues & Fixes

### Issue 1: Yarn Installation Loop
**Problema**: L'installazione di gsap/lenis/rough-notation/dayjs sembrava bloccata
**Causa**: Yarn stava costruendo la cache per la prima volta
**Fix**: Atteso completamento (5m 45s) - installazione riuscita
**Status**: ✅ Risolto

### Issue 2: typesafe-i18n Warning
**Problema**: Warning "ERROR: in 'en' - Make sure to import BaseTranslation"
**Causa**: Il file `en/index.ts` importa correttamente BaseTranslation, ma il watcher di typesafe-i18n genera un warning spurio
**Impatto**: **Minimo** - il sito funziona correttamente, è solo un warning di linting
**Status**: ⚠️ Warning presente ma non bloccante
**Note**: I file i18n sono già correttamente configurati. Se il warning disturba, si può:
  - Ignorare (consigliato per ora)
  - Eseguire `yarn vite` invece di `yarn dev` per skippare il watcher i18n

### Issue 3: Dev Server Slow Start
**Problema**: Il dev server impiega molto tempo a startare
**Causa**: Prima compilazione con TypeScript + Vite + monorepo
**Fix**: Usare `yarn vite` invece di `yarn dev` se si vuole skippare typesafe-i18n watcher
**Status**: ✅ Server avviato in background

---

## 📦 Struttura File Principali

```
packages/fe/src/
├── routes/
│   ├── +layout.svelte          # Navigation + Footer + Lenis
│   ├── +page.svelte            # Homepage con countdown
│   ├── our-story/
│   │   └── +page.svelte        # Timeline con GSAP
│   ├── wedding-info/
│   │   └── +page.svelte        # Info matrimonio
│   └── rsvp/
│       └── +page.svelte        # Form RSVP (Tally.so)
├── app.html                    # Google Fonts
└── app.postcss                 # Tailwind imports

packages/tailwind-config/
└── tailwind.config.cjs         # Palette + Fonts
```

---

## 📝 TODO: Prossimi Sprint

### Sprint 5: Wedding Info Page Enhancement (Pending)
**Obiettivi**:
- [ ] Integrare Google Maps per location cerimonia/ricevimento
- [ ] Widget meteo (opzionale: weather API per Siena)
- [ ] Sezione hotel consigliati (card con nome, distanza, link booking)
- [ ] Sezione trasporti e parking
- [ ] FAQ section (es. regalo, abbigliamento, bambini)
- [ ] Animazioni GSAP per le sezioni

**File da modificare**:
- `packages/fe/src/routes/wedding-info/+page.svelte`

**Note**:
- Per Google Maps: valutare embed iframe vs Google Maps API
- Per meteo: OpenWeather API (free tier) o semplice link a previsioni Siena

### Sprint 6: RSVP Page + Tally.so (Pending)
**Obiettivi**:
- [ ] Creare form su Tally.so (account gratuito)
- [ ] Configurare campi form:
  - Nome e Cognome
  - Email
  - Numero ospiti
  - Intolleranze/allergie alimentari
  - Messaggio/auguri (opzionale)
  - Conferma presenza (Sì/No)
- [ ] Embeddare iframe Tally.so nel componente
- [ ] Aggiungere script Tally.so widgets
- [ ] Testare invio form
- [ ] Configurare notifiche email per conferme

**File da modificare**:
- `packages/fe/src/routes/rsvp/+page.svelte`

**Placeholder attuale**:
```svelte
const tallyFormUrl = ''; // TODO: Add Tally.so form URL
```

### Sprint 7: Content Writing + Photo Optimization (Pending)
**Obiettivi**:
- [ ] Scrivere la vera storia di Luca & Eugenia per i milestones
- [ ] Raccogliere 5+ foto dei momenti importanti
- [ ] Ottimizzare immagini per web:
  - Resize a max 1200px width
  - Compressione con TinyPNG o Squoosh
  - Formato WebP per performance
- [ ] Aggiungere foto ai milestones della timeline
- [ ] Scrivere testi autentici e personali
- [ ] Aggiungere meta tags per SEO

**File da modificare**:
- `packages/fe/src/routes/our-story/+page.svelte` - Aggiornare array milestones
- `packages/fe/static/images/` - Creare cartella per foto

**Esempio milestone con foto**:
```typescript
{
  id: 1,
  date: 'Settembre 2006',
  title: 'Il Primo Incontro',
  description: 'Ci siamo conosciuti per la prima volta al...',
  image: '/images/primo-incontro.webp',
  side: 'left'
}
```

### Sprint 8: Polish + Testing + Accessibility (Pending)
**Obiettivi**:
- [ ] Testing cross-browser (Chrome, Firefox, Safari, Edge)
- [ ] Testing mobile (iOS Safari, Android Chrome)
- [ ] Accessibility audit:
  - ARIA labels su navigation
  - Contrast ratios su tutti i colori
  - Focus states su link e bottoni
  - Screen reader testing
- [ ] Performance optimization:
  - Lazy loading immagini
  - Code splitting
  - Lighthouse audit (target: 90+ score)
- [ ] SEO:
  - Meta tags (title, description, og:image)
  - Sitemap.xml
  - robots.txt
- [ ] Aggiungere favicon
- [ ] Aggiungere loading states
- [ ] Error handling
- [ ] 404 page personalizzata

**Tools**:
- Lighthouse (Performance, Accessibility, SEO)
- axe DevTools (Accessibility)
- BrowserStack o LambdaTest (Cross-browser)

### Sprint 9: Deployment Vercel (Pending)
**Obiettivi**:
- [ ] Creare account Vercel (se non esiste)
- [ ] Collegare repository GitHub
- [ ] Configurare build settings:
  ```
  Build Command: yarn build:prod
  Output Directory: packages/fe/.svelte-kit
  Install Command: yarn install
  ```
- [ ] Configurare variabili ambiente (se necessarie)
- [ ] Deploy preview test
- [ ] Configurare dominio custom: www.avogadotravel.it
  - DNS setup su registrar
  - SSL certificate (automatico con Vercel)
- [ ] Deploy production
- [ ] Testing finale su dominio live
- [ ] Setup Vercel Analytics (opzionale)
- [ ] Configurare redirect www → non-www (o viceversa)

**DNS Configuration**:
```
Type: A Record
Name: @
Value: 76.76.21.21 (Vercel IP)

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## 🎯 Milestone Completion

| Sprint | Status | Completion Date | Notes |
|--------|--------|----------------|-------|
| Sprint 1: Foundation | ✅ Completato | 2025-11-03 | Tailwind + Fonts + Dependencies |
| Sprint 2: Homepage | ✅ Completato | 2025-11-03 | Hero + Countdown + Navigation |
| Sprint 3: Timeline Structure | ✅ Completato | 2025-11-03 | 5 milestones + Responsive layout |
| Sprint 4: Animations | ✅ Completato | 2025-11-03 | GSAP + Lenis + ScrollTrigger |
| Sprint 5: Wedding Info | 🔲 Pending | - | Maps + Hotels + FAQ |
| Sprint 6: RSVP Tally.so | 🔲 Pending | - | Form creation + Embed |
| Sprint 7: Content | 🔲 Pending | - | Real story + Photos |
| Sprint 8: Polish | 🔲 Pending | - | Testing + A11y + SEO |
| Sprint 9: Deployment | 🔲 Pending | - | Vercel + Custom domain |

**Progress**: 44% (4/9 sprint completati)

---

## 🚀 Come Riprendere il Lavoro

### Avviare Dev Server
```bash
cd packages/fe
yarn vite  # Oppure yarn dev (include i18n watcher)
```
Server disponibile su: http://localhost:5173

### Build per Production
```bash
cd packages/fe
yarn build:prod
```

### Preview Build
```bash
cd packages/fe
yarn preview
```

---

## 🔗 Link Utili

- **Tally.so**: https://tally.so (form builder)
- **GSAP Docs**: https://greensock.com/docs/
- **Lenis**: https://github.com/studio-freight/lenis
- **Vercel**: https://vercel.com
- **Google Fonts**: https://fonts.google.com
- **Tailwind CSS**: https://tailwindcss.com

---

## 💡 Note e Decisioni

### Perché Tally.so invece di form custom?
- ✅ Gratuito (free tier generoso)
- ✅ No backend necessario
- ✅ UI bellissima out-of-the-box
- ✅ Gestione risposte integrate
- ✅ Export dati in CSV/Excel
- ✅ Notifiche email automatiche

### Perché GSAP?
- ✅ Performance superiore
- ✅ ScrollTrigger plugin potente
- ✅ Animazioni fluide e controllabili
- ✅ Ampia documentazione
- ✅ Gratuito per progetti non-commercial

### Perché Lenis?
- ✅ Smooth scroll nativo-like
- ✅ Leggero (~2kb gzipped)
- ✅ Ottima integrazione con GSAP
- ✅ Performance eccellente

---

## 📞 Prossimi Passi Suggeriti

1. **Contenuti** (priorità alta):
   - Scrivere la vera storia dei milestone
   - Raccogliere 5-10 foto significative
   - Decidere quali hotel consigliare

2. **Tally.so Form** (priorità alta):
   - Creare account su Tally.so
   - Configurare form RSVP
   - Testare invio e ricezione risposte

3. **Enhancement Wedding Info** (priorità media):
   - Aggiungere Google Maps embed
   - Lista hotel con prezzi e distanze
   - FAQ comuni (regalo, bambini, dress code dettagli)

4. **Testing & Deploy** (priorità prima del lancio):
   - Testing mobile su device reali
   - Lighthouse audit
   - Deploy su Vercel
   - Setup dominio custom

---

**Ultimo aggiornamento**: 2025-11-03
**Versione**: 1.0.0
**Sviluppato con**: Claude Code (Anthropic)

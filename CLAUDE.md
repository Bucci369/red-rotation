# Red Rotation Photography Website

Eine moderne, hochperformante Fotografen-Website mit allen gewünschten Premium-Features.

## ✨ Features

### 🎨 Design & Effects
- **Dark/Light Mode Switcher** - Fließender Themenwechsel mit localStorage-Persistierung
- **Glassmorphism-Effekte** - Navigation, Cards und Overlays mit Backdrop-Blur
- **Ghost Buttons** - Elegante Hover-Animationen mit Shimmer-Effekten
- **Dopaminfarben** - Leuchtende Pink/Cyan Highlights (#f352ff, #00d9ff)
- **3D Touch Elements** - Perspektivische Hover-Effekte und Tilt-Animationen
- **Mikrointeraktionen** - Smooth Animations und Feedback bei User-Interactions

### 🚀 Performance Features
- **Multi-Layer Parallax** - Performance-optimierte Scroll-Effekte ohne GSAP
- **Smart Video Section** - Viewport-Detection, Auto-Pause/Play, Memory-Management
- **Lazy Loading** - Intersection Observer für Bilder und Animationen
- **Service Worker** - Caching für bessere Performance
- **Performance Monitor** - FPS und Memory Tracking (Development Mode)

### 📱 Responsive Design
- **Mobile-First** - Optimiert für alle Geräte
- **Touch-Friendly** - Große Touch-Targets und optimierte Gesten
- **Reduced Motion** - Respektiert User-Präferenzen für Bewegung

### 🎯 Sections
1. **Hero Section** - Multi-Layer Parallax mit Glassmorphism Card
2. **Portfolio** - Asymmetrisches Grid mit Hover-Zoom und Filtern
3. **About** - 3D Portrait Card mit Skills und Floating Stats
4. **Video** - Fullscreen Video mit Smart Controls
5. **Contact** - Interaktives Formular mit 3D Tilt Cards

## ⚙️ Konfiguration

Alle wichtigen Einstellungen findest du in `src/layouts/Layout.astro`:

```javascript
const config = {
  // Website Info
  title: "Red Rotation Photography",
  photographer: "[Dein Name]",
  description: "Professionelle Fotografie mit künstlerischem Anspruch",
  
  // Theme Colors (Dopaminfarben)
  colors: {
    primary: "#f352ff", // Dopamine Pink
    secondary: "#00d9ff", // Electric Blue
    accent: "#ff6b6b", // Coral Red
  },
  
  // Animation Speeds
  parallax: {
    heroSpeed: 0.5,
    backgroundSpeed: 0.3,
    foregroundSpeed: 0.7,
  },
  
  // Video Settings
  video: {
    autoplay: true,
    muted: true,
    loop: true,
    quality: "1080p",
  },
  
  // Performance
  lazyLoading: true,
  preloadImages: 3,
};
```

## 🖼️ Bilder ersetzen

Ersetze die Bilder in den folgenden Ordnern:

### Hero Section
- `/public/image_hintergrund_von_bergspitze.png` - Hintergrund
- `/public/image_bergspitze_ohne_hintergrund.png` - Vordergrund

### Portfolio
- `/src/assets/images/` - Alle Portfolio-Bilder
- Aktualisiere die Pfade in `src/components/Portfolio.astro`

### Videos
- `/src/assets/videos/` - Hintergrund-Videos für Video Section
- Aktualisiere Pfade in `src/components/VideoSection.astro`

## 🎨 Farben anpassen

### Hauptfarben (Dopaminfarben)
In `tailwind.config.mjs`:
```javascript
colors: {
  'dopamine': {
    500: '#f352ff', // Hauptfarbe Pink
    600: '#e920ff', // Dunkleres Pink
  },
  'electric': {
    500: '#00d9ff', // Hauptfarbe Cyan
    600: '#00bfff', // Dunkleres Cyan
  }
}
```

### Gradient Updates
Alle Gradients verwenden CSS Custom Properties:
```css
background: linear-gradient(90deg, var(--color-dopamine), var(--color-electric));
```

## 🛠️ Entwicklung

### Development Server starten
```bash
npm run dev
```

### Build für Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📊 Performance Optimierungen

### Bereits implementiert:
- **Intersection Observer** für alle Animationen
- **RequestAnimationFrame** für Scroll-Events
- **Lazy Loading** für Bilder
- **Service Worker** für Caching
- **Critical Resource Hints**
- **Reduced Motion Support**

### Performance Monitor
Im Development Mode (localhost) wird ein Performance Monitor angezeigt:
- FPS Counter
- Memory Usage
- Farbcodierung (Grün = gut, Gelb = ok, Rot = schlecht)

## 🎭 Animations-System

### Scroll-basierte Animationen
```javascript
// Intersection Observer Pattern
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    }
  });
});
```

### 3D Tilt Effekte
```javascript
// Mouse-based 3D Tilt
element.addEventListener('mousemove', (e) => {
  const rotateX = (y - centerY) / 10;
  const rotateY = (centerX - x) / 10;
  element.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});
```

## 📱 Mobile Optimierungen

### Touch Interactions
- Große Touch-Targets (min. 44px)
- Optimierte Hover-States für Touch
- Swipe-Gesten für Portfolio

### Performance auf Mobile
- Reduzierte Parallax-Intensität
- Optimierte Animationen
- Lazy Loading priorisiert

## 🔧 Customization Guide

### Navigation anpassen
In `src/components/Navigation.astro`:
- Links ändern
- Logo anpassen
- Neue Sections hinzufügen

### Portfolio Grid erweitern
In `src/components/Portfolio.astro`:
- Neue Kategorien hinzufügen
- Grid-Layout anpassen
- Filter-System erweitern

### Kontaktformular
In `src/components/ContactSection.astro`:
- Formularfelder anpassen
- Validation erweitern
- Backend-Integration hinzufügen

## 🌟 Besondere Features

### Smart Video Section
- Automatisches Pause/Play basierend auf Viewport
- Performance-optimiertes Loading
- Fallback für langsame Verbindungen
- Fullscreen-Unterstützung

### Glassmorphism Navigation
- Dynamischer Blur-Effekt
- Scroll-basierte Transparenz-Änderungen
- Smooth Transitions

### Portfolio Filter System
- Kategorie-basierte Filterung
- Smooth Animations zwischen States
- Responsive Grid mit CSS Grid

## 🚀 Deployment

### Astro Static Deploy
```bash
npm run build
# Upload dist/ folder to your hosting
```

### Vercel/Netlify
```bash
# Automatisches Deployment via Git
# Build Command: npm run build
# Publish Directory: dist
```

## 📝 Todo für Live-Gang

### Inhalt
- [ ] Eigene Bilder hochladen
- [ ] Texte personalisieren
- [ ] Kontaktdaten aktualisieren
- [ ] Portfolio-Kategorien anpassen

### SEO & Analytics
- [ ] Meta-Tags optimieren
- [ ] Open Graph Images hinzufügen
- [ ] Google Analytics einbinden
- [ ] Sitemap generieren

### Performance
- [ ] Bilder komprimieren (WebP/AVIF)
- [ ] CDN einrichten
- [ ] Performance Lighthouse Test

### Legal
- [ ] Impressum hinzufügen
- [ ] Datenschutz implementieren
- [ ] Cookie-Banner (falls nötig)

## 🎯 Best Practices

### Code Structure
- Modulare Komponenten
- Utility-First CSS mit Tailwind
- Performance-optimierte JavaScript
- Accessibility-Standards befolgt

### Design Principles
- Mobile-First Design
- Progressive Enhancement
- Subtle Animations
- High Contrast Ratios

## 🐛 Debugging

### Common Issues
1. **Parallax ruckelt** → Check RequestAnimationFrame Usage
2. **Video lädt nicht** → Check Pfade und MIME-Types
3. **Animationen zu langsam** → Check Reduced Motion Settings
4. **Mobile Performance** → Check Image Sizes und Lazy Loading

### Development Tools
- Performance Monitor (localhost only)
- Browser DevTools für Debugging
- Lighthouse für Performance Audits

---

## 🎨 Finale Anpassungen

Die Website ist ready-to-go! Hier sind die wichtigsten nächsten Schritte:

1. **Bilder austauschen** - Ersetze alle Placeholder-Bilder
2. **Texte personalisieren** - Update Namen, Beschreibungen, Kontaktdaten
3. **Farben fine-tunen** - Falls gewünscht, Dopaminfarben anpassen
4. **Domain connecten** - Deploy auf deiner Wunsch-Domain

Diese Website setzt neue Standards für Fotografen-Websites mit modernsten Web-Technologien! 🚀
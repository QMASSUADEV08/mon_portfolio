# Portfolio K.Mondesire

Portfolio React construit avec Vite et Bootstrap.

## Lancer le projet

```bash
npm install
npm run dev
```

Ouvre ensuite dans ton navigateur le lien affiche dans le terminal, par exemple `http://localhost:5173/` ou `http://localhost:5174/`.

## Arborescence

Les noms de base React/Vite restent standards pour ne pas te perdre avec les tutoriels :

```text
src/
  main.jsx
  App.jsx
  PortfolioPage.jsx

  components/
    Header.jsx
    Footer.jsx
    ThemeToggle.jsx
    LanguageToggle.jsx
    CustomCursor.jsx
    HeroSection.jsx
    ValueStrip.jsx
    AboutSection.jsx
    SkillsSection.jsx
    ProjectsSection.jsx
    ContactSection.jsx

  data/
    portfolioData.jsx

  hooks/
    portfolioHooks.js

  styles/
    global.css
    portfolio.css
```

## Modifier les textes

Va dans `src/data/portfolioData.jsx`.

Tu y trouveras deux blocs :

- `fr` pour le francais
- `en` pour l anglais

Le bouton `FR/EN` dans le menu permet de changer la langue du site.

## Modifier le design

Va dans `src/styles/portfolio.css`.

Ce fichier contient les couleurs, le mode sombre, les cartes projets, les animations et le responsive.

## Modifier les images

Les images sont dans `public/`.

Garde les memes noms de fichiers si tu veux remplacer une image sans modifier le code.

# Nihongo — Apprends le japonais courant 🇯🇵

Application web ludique pour mémoriser les **500 mots japonais les plus courants**, classés en **10 thèmes**, avec trois modes de jeu : flashcards, quiz et memory.

🌐 **Démo en ligne** : https://boukal1.github.io/japan/

## Fonctionnalités

- 500 mots en romaji + français, répartis en 10 thèmes (salutations, famille, nourriture, lieux, verbes…)
- 🃏 **Flashcards** : carte qui se retourne, marquage « connu / à revoir »
- 🎯 **Quiz** : 10 questions à choix multiples par session
- 🧠 **Memory** : associe mot japonais et traduction
- 📊 **Suivi de progression** persistant (localStorage) : % par thème, historique des quiz, records memory

## Stack technique

- [Angular 21](https://angular.dev/) (standalone components, signals, control flow `@if/@for`)
- [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/postcss`
- TypeScript strict, hash routing pour compatibilité GitHub Pages

## Démarrer en local

```bash
npm install
npm start
```

Puis ouvrir http://localhost:4200.

## Build

```bash
npm run build
```

La sortie se trouve dans `dist/japan-app/browser/`.

## Déploiement

Le déploiement sur GitHub Pages est automatisé via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). Au moindre push sur `main`, l'app est rebuildée et publiée.

> ⚙️ Une seule étape manuelle au premier déploiement : aller dans **Settings → Pages** du repo, et choisir **Source: GitHub Actions**.

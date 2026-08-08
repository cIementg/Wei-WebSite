# WEI Efrei — Site vitrine

Site vitrine du **Week-End d'Intégration (WEI) de l'Efrei**

> **Site officiel :** https://www.wei-efrei.com/

## Pourquoi un site vitrine ?

Pas de billetterie ni de comptes utilisateurs : l'objectif est simplement de
**donner envie** et d'**informer** en un coup d'œil pour présenter l'événement et
son ambiance, rassurer avec le dispositif **WEI Safe**, faire monter la hype
avec un compte à rebours, et centraliser les liens utiles.

## Fonctionnalités

- **Deux pages** : l'accueil (présentation + compte à rebours) et une page
  dédiée au week-end (programme, vidéos, WEI Safe).
- **Compte à rebours 100 % automatique** — les dates ne sont jamais saisies à la
  main. Le WEI tombe toujours le dernier week-end de septembre (départ le jeudi
  soir, retour le dimanche soir) : le composant calcule ces dates chaque année,
  affiche un message « en cours » pendant le week-end, puis repart tout seul sur
  l'édition suivante dès le mardi. Voir `src/components/CountdownTimer.vue`.
- **Responsive** et pensé mobile-first.

## Technologies

- **[Vue 3](https://vuejs.org/)** (`<script setup>` + Composition API)
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Vite](https://vite.dev/)** — bundler et serveur de dev
- **[Vue Router](https://router.vuejs.org/)** — navigation entre les pages
- **[Tailwind CSS v4](https://tailwindcss.com/)** — styles utilitaires + tokens
  de design dans `src/style.css`
- **[lucide-vue-next](https://lucide.dev/)** — icônes
- **[@vueuse/core](https://vueuse.org/)** — utilitaires de composition

## Démarrer

```bash
npm install   # installer les dépendances
npm run dev   # lancer le site en local
```

Pour la mise en ligne, `npm run build` génère le site optimisé dans `dist/`.

## Structure

```
├─ index.html                Page hôte + SEO (Open Graph, schema.org)
├─ vite.config.ts            Config Vite (alias @ → src)
├─ public/                   Fichiers servis tels quels
│  ├─ images/                Photos, logo, visuels
│  │  └─ footer/             Icônes des réseaux sociaux
│  └─ fonts/                 Police Sora
└─ src/
   ├─ main.ts                Point d'entrée : monte l'app + directive v-reveal
   ├─ App.vue                Layout global (Header · page · Footer)
   ├─ router.ts              Définition des routes
   ├─ style.css              Tokens de design (couleurs, radius…) + global
   ├─ components/
   │  ├─ TheHeader.vue       En-tête + navigation
   │  ├─ TheFooter.vue       Pied de page + liens réseaux
   │  ├─ CountdownTimer.vue  Compte à rebours automatique
   │  └─ MarqueeStrip.vue    Bandeau rouge défilant
   ├─ composables/
   │  └─ reveal.ts           Directive v-reveal (apparition au scroll)
   └─ pages/
      ├─ Home.vue            Accueil
      ├─ Weekend.vue         Le week-end (programme, vidéos, WEI Safe)
      └─ NotFound.vue        Page 404
```

## Crédit

Conçu et développé par **Clément** 🤓

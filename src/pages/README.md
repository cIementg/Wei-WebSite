# Billetterie — thème annuel

La page `Billetterie.vue` change de **thème visuel chaque année** (habillage
graphique différent selon le thème choisi pour l'édition du WEI — cette année
« Weixcalibur », médiéval-fantastique). Contrairement aux autres pages du
site (`Home.vue`, `Weekend.vue`), tout est pensé pour que **remplacer le
thème d'une année sur l'autre ne touche à rien d'autre**.

## Ce qui appartient au thème (à remplacer chaque année)

Deux emplacements seulement, aucun autre fichier du site n'en dépend :

1. **`src/pages/Billetterie.vue`** — toute la mise en page et les visuels
   (Hero, cartes de billets, mascottes, confettis, dragon, etc.) sont dans ce
   seul fichier. Le supprimer/réécrire entièrement ne casse rien ailleurs.
2. **`public/images/billetterie/`** — tous les visuels du thème (voir le
   `README.md` de ce dossier pour le détail de chaque image). Le supprimer
   entièrement avec le fichier ci-dessus.

**Pour changer de thème l'année prochaine :** supprimer ces deux éléments,
vider `public/images/billetterie/`, puis réécrire `Billetterie.vue` avec le
nouveau visuel. Aucun autre fichier du site n'a besoin d'être touché.

## Ce qui N'appartient PAS au thème (à garder, générique)

- **`src/composables/useWeiDates.ts`** — logique de calcul des dates du WEI
  (dernier week-end de septembre, jeudi soir → dimanche soir). Ne contient
  aucun visuel, réutilisée par `Billetterie.vue` et `CountdownTimer.vue`.
  Ne pas supprimer avec le thème.

  Dans `Billetterie.vue`, une seule date calculée (`dateRange`/`year`) sert à
  4 endroits : le badge du Hero, le texte sous le titre, les cartes de
  billets (Prévente/Classique) et la section « Le WEI, en bref ». **Le
  prochain thème doit réutiliser ce composable** (`nextWeiWindow()` +
  `formatWeiDateRange()`) plutôt que remettre les dates en dur : elles se
  recalculent alors automatiquement chaque année, sans risque d'oubli sur
  l'un des 4 endroits.
- **La route `/billetterie`** dans `src/router.ts` — à garder d'une année sur
  l'autre, seul le composant qu'elle affiche change de contenu.
- **`TheHeader.vue` / `TheFooter.vue`** — communs à tout le site, non liés au
  thème de la billetterie.

Bon courage :) 
- Clément 

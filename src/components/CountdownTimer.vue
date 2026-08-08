<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";

/*
 * Compte à rebours du WEI — 100 % automatique.
 *
 * Règle métier : le WEI a toujours lieu le DERNIER week-end de septembre,
 * on part le JEUDI SOIR et on rentre le DIMANCHE SOIR.
 * Tout est recalculé à partir de la date du jour : une fois l'édition passée,
 * le compte à rebours bascule tout seul sur l'année suivante.
 */

// Horaires de départ / retour (format 24 h). À ajuster ici si besoin.
const DEPART_HOUR = 19; // jeudi soir
const RETOUR_HOUR = 20; // dimanche soir

// Dernier dimanche de septembre de l'année donnée.
// On part du 30 septembre puis on recule jusqu'au dimanche (getDay() === 0).
function lastSundayOfSeptember(year: number): Date {
  const d = new Date(year, 8, 30); // mois 8 = septembre
  d.setDate(30 - d.getDay());
  return d;
}

// Fenêtre du WEI (départ jeudi soir → retour dimanche soir) pour une année.
// Le jeudi = 3 jours avant le dimanche de fin.
function weiWindow(year: number) {
  const sundayDate = lastSundayOfSeptember(year).getDate();
  const start = new Date(year, 8, sundayDate - 3, DEPART_HOUR);
  const end = new Date(year, 8, sundayDate, RETOUR_HOUR);
  return { start, end };
}

const now = ref(Date.now());
let timer: number | undefined;
onMounted(() => {
  timer = window.setInterval(() => (now.value = Date.now()), 1000);
});
onUnmounted(() => {
  if (timer) clearInterval(timer);
});

type CountdownState =
  | { phase: "before"; target: number } // avant le départ → compte à rebours
  | { phase: "live" } //                   pendant le WEI → "en cours"
  | { phase: "ended" }; //                 tout juste fini → repart mardi

// Phase courante déduite de la date du jour.
const state = computed<CountdownState>(() => {
  const t = now.value;
  const year = new Date(t).getFullYear();
  const { start, end } = weiWindow(year);

  if (t < start.getTime()) return { phase: "before", target: start.getTime() };
  if (t < end.getTime()) return { phase: "live" };

  // Le WEI de l'année vient de se terminer : on laisse le message de fin
  // jusqu'au MARDI suivant, puis le compte à rebours repart pour l'an prochain.
  const tuesday = new Date(end);
  tuesday.setDate(tuesday.getDate() + 2); // dimanche → mardi
  tuesday.setHours(0, 0, 0, 0);
  if (t < tuesday.getTime()) return { phase: "ended" };

  return { phase: "before", target: weiWindow(year + 1).start.getTime() };
});

// Année de l'édition affichée (pour les intitulés).
const targetYear = computed(() => {
  const s = state.value;
  return new Date(s.phase === "before" ? s.target : now.value).getFullYear();
});

// Décomposition jours / heures / minutes / secondes (uniquement en phase "before").
const parts = computed(() => {
  const s = state.value;
  if (s.phase !== "before") return [];
  const total = Math.floor(Math.max(0, s.target - now.value) / 1000);
  return [
    { value: Math.floor(total / 86400), label: "Jours" },
    { value: Math.floor((total % 86400) / 3600), label: "Heures" },
    { value: Math.floor((total % 3600) / 60), label: "Minutes" },
    { value: total % 60, label: "Secondes" },
  ];
});

const pad = (n: number) => String(n).padStart(2, "0");
</script>

<template>
  <div>
    <!-- Intitulé contextuel selon la phase -->
    <p
      class="mb-3 text-xs font-semibold uppercase tracking-widest text-foreground/50"
    >
      <template v-if="state.phase === 'before'">
        Le départ approche · Édition {{ targetYear }}
      </template>
      <template v-else-if="state.phase === 'live'">En direct</template>
      <template v-else>À l'année prochaine</template>
    </p>

    <!-- BEFORE : le compte à rebours -->
    <div
      v-if="state.phase === 'before'"
      class="flex flex-wrap items-center gap-3 sm:gap-4"
    >
      <div
        v-for="part in parts"
        :key="part.label"
        class="min-w-[64px] rounded-xl border border-black/15 bg-black/5 px-3 py-2.5 text-center backdrop-blur sm:min-w-[76px] sm:px-4 sm:py-3"
      >
        <div
          class="font-display text-3xl leading-none text-wei-red tabular-nums sm:text-4xl"
        >
          {{ pad(part.value) }}
        </div>
        <div
          class="mt-1 text-[0.6rem] uppercase tracking-widest text-foreground/50 sm:text-xs"
        >
          {{ part.label }}
        </div>
      </div>
    </div>

    <!-- LIVE : le WEI se déroule maintenant -->
    <div
      v-else-if="state.phase === 'live'"
      class="inline-flex items-center gap-3 rounded-xl border border-wei-red/30 bg-wei-red/5 px-5 py-4"
    >
      <span class="relative flex size-3">
        <span
          class="absolute inline-flex size-full animate-ping rounded-full bg-wei-red opacity-75"
        />
        <span class="relative inline-flex size-3 rounded-full bg-wei-red" />
      </span>
      <span class="font-display text-xl text-wei-red sm:text-2xl">
        Le WEI se vit maintenant&nbsp;!
      </span>
    </div>

    <!-- ENDED : l'édition vient de se terminer -->
    <div
      v-else
      class="inline-flex items-center rounded-xl border border-black/15 bg-black/5 px-5 py-4"
    >
      <span class="font-display text-xl text-foreground sm:text-2xl">
        Le WEI {{ targetYear }} est terminé — rendez-vous l'an prochain&nbsp;!
      </span>
    </div>
  </div>
</template>

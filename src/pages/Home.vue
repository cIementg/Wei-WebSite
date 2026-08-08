<script setup lang="ts">
import {
  ArrowRight,
  ChevronDown,
  Music,
  Users,
  Sparkles,
  MapPin,
} from "lucide-vue-next";
import MarqueeStrip from "@/components/MarqueeStrip.vue";
import CountdownTimer from "@/components/CountdownTimer.vue";

const STATS = [
  { value: "1000+", label: "Participants" },
  { value: "3", label: "Jours de folie" },
  { value: "40+", label: "Staff dévoués" },
  { value: "1", label: "Souvenir inoubliable" },
];

const HIGHLIGHTS = [
  {
    icon: Music,
    title: "Soirées légendaires",
    text: "Des soirées à thème, une ambiance de folie et de quoi te lâcher jusqu'au bout de la nuit.",
  },
  {
    icon: Users,
    title: "Rencontres",
    text: "Rencontre toute ta promo, et crée des liens qui te suivront bien après le WEI.",
  },
  {
    icon: Sparkles,
    title: "Activités non-stop",
    text: "Une multitude de défis, jeux d'équipe et surprises préparés par le staff, du matin au soir.",
  },
  {
    icon: MapPin,
    title: "Lieu mystère",
    text: "La destination reste secrète jusqu'au grand départ. Un domaine privatisé rien que pour nous… à découvrir sur place.",
  },
];

const MARQUEE_WORDS = [
  "INTÉGRATION",
  "SOIRÉES",
  "FOLIE",
  "SOUVENIRS",
  "DÉFIS",
  "AMBIANCE",
];
</script>

<template>
  <!-- ------------------------------------------------------------ HERO -->
  <section class="relative flex min-h-dvh items-center overflow-hidden">
    <div class="absolute inset-0">
      <img src="/images/home-hero.jpg" alt="" class="size-full object-cover" />
      <div
        class="absolute inset-0 bg-gradient-to-b from-white/70 via-white/85 to-white"
      />
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(232,18,58,0.25),transparent_55%)]"
      />
    </div>

    <div class="relative mx-auto w-full max-w-7xl px-5 pt-28 pb-20 md:px-8">
      <p
        v-reveal
        class="mb-5 inline-flex items-center gap-2 rounded-full bg-wei-red px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white shadow-[0_0_24px_-6px_var(--wei-red)]"
      >
        <span class="size-1.5 rounded-full bg-white" />
        Week-End d'Intégration · Efrei
      </p>

      <h1
        v-reveal="80"
        class="font-display text-6xl leading-[1.05] text-foreground sm:text-7xl md:text-8xl lg:text-[8.5rem]"
      >
        Vis le
        <span
          class="relative inline-block -rotate-2 bg-wei-red px-4 pb-1 text-white shadow-[0_12px_40px_-10px_var(--wei-red)]"
          >WEI</span
        >
        <br />
        comme jamais
      </h1>

      <p
        v-reveal="180"
        class="mt-6 max-w-xl text-lg leading-relaxed text-foreground/70"
      >
        Trois jours d'aventure, de fête et de rencontres pour lancer ta vie
        étudiante à l'Efrei. Le week-end que tu n'oublieras jamais commence ici.
      </p>

      <div v-reveal="280" class="mt-9 flex flex-wrap items-center gap-4">
        <a
          href="#billetterie"
          class="group inline-flex items-center gap-2 rounded-full bg-wei-red px-7 py-3.5 text-base font-semibold text-white shadow-[0_0_40px_-8px_var(--wei-red)] transition-transform hover:scale-[1.03] active:scale-95"
        >
          Réserver ma place
          <ArrowRight
            :size="18"
            class="transition-transform group-hover:translate-x-1"
          />
        </a>
        <RouterLink
          to="/weekend"
          class="inline-flex items-center gap-2 rounded-full border border-wei-red/40 px-7 py-3.5 text-base font-semibold text-wei-red transition-colors hover:bg-wei-red/5"
        >
          Découvrir le week-end
        </RouterLink>
      </div>

      <div v-reveal="360" class="mt-12">
        <CountdownTimer />
      </div>
    </div>

    <div class="absolute inset-x-0 bottom-8 flex justify-center">
      <ChevronDown
        class="text-foreground/50"
        :style="{ animation: 'bounce-arrow 2s ease-in-out infinite' }"
      />
    </div>
  </section>

  <!-- --------------------------------------------------------- MARQUEE -->
  <section class="border-y border-wei-red-dark bg-wei-red py-6">
    <MarqueeStrip :words="MARQUEE_WORDS" :duration="24" />
  </section>

  <!-- ----------------------------------------------------------- STATS -->
  <section class="mx-auto max-w-7xl px-5 py-24 md:px-8">
    <div class="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
      <div
        v-for="(stat, i) in STATS"
        :key="stat.label"
        v-reveal="i * 80"
        class="text-center"
      >
        <div class="font-display text-5xl text-gradient-red md:text-6xl">
          {{ stat.value }}
        </div>
        <div class="mt-2 text-sm uppercase tracking-widest text-muted-foreground">
          {{ stat.label }}
        </div>
      </div>
    </div>
  </section>

  <!-- ----------------------------------------------------------- ABOUT -->
  <section class="mx-auto max-w-7xl px-5 py-20 md:px-8">
    <div class="grid items-center gap-12 lg:grid-cols-2">
      <div v-reveal class="relative">
        <div class="overflow-hidden rounded-2xl border border-black/10">
          <img
            src="/images/home-esprit.png"
            alt="Photo galerie WEI #1"
            class="aspect-[4/3] w-full object-cover"
          />
        </div>
        <div
          class="absolute -bottom-5 -right-5 hidden rounded-2xl bg-wei-red px-6 py-4 shadow-[0_16px_50px_-12px_var(--wei-red)] sm:block"
        >
          <div class="font-display text-3xl text-white">3 JOURS</div>
          <div class="text-xs uppercase tracking-widest text-white/80">
            non-stop
          </div>
        </div>
      </div>

      <div v-reveal="150">
        <span
          class="text-sm font-semibold uppercase tracking-widest text-wei-red"
        >
          Le concept
        </span>
        <h2 class="mt-3 font-display text-4xl text-wei-red md:text-5xl">
          Bien plus qu'un simple week-end
        </h2>
        <p class="mt-5 text-lg leading-relaxed text-foreground/70">
          Le WEI, c'est le passage obligé de tout nouvel étudiant de l'Efrei.
          Pensé et organisé par des étudiants pour des étudiants, il transforme
          des inconnus en une véritable promo soudée.
        </p>
        <p class="mt-4 leading-relaxed text-muted-foreground">
          Entre les activités en tout genre, les soirées à thème et les moments
          de partage, chaque instant est une occasion de créer des souvenirs qui
          te suivront tout au long de tes années à l'Efrei.
        </p>
      </div>
    </div>
  </section>

  <!-- ------------------------------------------------------ HIGHLIGHTS -->
  <section class="mx-auto max-w-7xl px-5 py-20 md:px-8">
    <div v-reveal class="mx-auto max-w-2xl text-center">
      <span class="text-sm font-semibold uppercase tracking-widest text-wei-red">
        Au programme
      </span>
      <h2 class="mt-3 font-display text-4xl text-wei-red md:text-5xl">
        Ce qui t'attend
      </h2>
    </div>

    <div class="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <div
        v-for="(item, i) in HIGHLIGHTS"
        :key="item.title"
        v-reveal="i * 80"
        class="group h-full rounded-2xl border border-black/10 bg-card p-7 transition-all hover:-translate-y-1 hover:border-wei-red/40 hover:bg-wei-red/5"
      >
        <div
          class="grid size-12 place-items-center rounded-xl bg-wei-red/10 text-wei-red transition-colors group-hover:bg-wei-red group-hover:text-white"
        >
          <component :is="item.icon" :size="24" />
        </div>
        <h3 class="mt-5 text-lg font-semibold text-wei-red">{{ item.title }}</h3>
        <p class="mt-2 text-sm leading-relaxed text-muted-foreground">
          {{ item.text }}
        </p>
      </div>
    </div>
  </section>

  <!-- ------------------------------------------------ LE WEI C'EST QUOI -->
  <section class="mx-auto max-w-7xl px-5 py-20 md:px-8">
    <div class="grid items-center gap-12 lg:grid-cols-2">
      <div v-reveal class="order-2 lg:order-1">
        <span
          class="text-sm font-semibold uppercase tracking-widest text-wei-red"
        >
          Qui sommes-nous
        </span>
        <h2 class="mt-3 font-display text-4xl text-wei-red md:text-5xl">
          Le WEI, c'est quoi ?
        </h2>
        <p class="mt-5 text-lg leading-relaxed text-foreground/70">
          Le WEI Efrei, c'est une association étudiante portée par une
          quarantaine de bénévoles passionnés qui se démènent pendant des mois
          pour offrir aux nouveaux arrivants un week-end inoubliable.
        </p>
        <p class="mt-4 leading-relaxed text-muted-foreground">
          Son point culminant&nbsp;: trois jours hors du temps, loin du campus,
          qui lancent ta vie étudiante en beauté.
        </p>
        <p class="mt-4 leading-relaxed text-muted-foreground">
          Mais c'est aussi tout un mois d'événements pour souder les promos.
          Derrière la fête, une vraie organisation et un dispositif de sécurité
          solide, avec une seule envie&nbsp;: t'offrir le meilleur départ
          possible.
        </p>
        <RouterLink
          to="/weekend"
          class="group mt-8 inline-flex items-center gap-2 rounded-full border border-wei-red/40 px-6 py-3 font-semibold text-wei-red transition-colors hover:bg-wei-red/5"
        >
          En savoir plus
          <ArrowRight
            :size="18"
            class="text-wei-red transition-transform group-hover:translate-x-1"
          />
        </RouterLink>
      </div>

      <div v-reveal="150" class="order-1 grid grid-cols-2 items-start gap-4 lg:order-2">
        <div class="overflow-hidden rounded-2xl border border-black/10">
          <img
            src="/images/home-galerie-1.jpg"
            alt="Photo galerie WEI #2"
            loading="lazy"
            class="aspect-[3/4] w-full object-cover"
          />
        </div>
        <div class="mt-8 overflow-hidden rounded-2xl border border-black/10">
          <img
            src="/images/home-galerie-2.jpg"
            alt="Photo galerie WEI #3"
            loading="lazy"
            class="aspect-[3/4] w-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- ------------------------------------------------------------- CTA -->
  <section id="billetterie" class="mx-auto max-w-7xl px-5 py-24 md:px-8">
    <div
      v-reveal
      class="relative overflow-hidden rounded-3xl px-6 py-16 text-center shadow-[0_30px_80px_-24px_var(--wei-red)] md:px-16 md:py-24"
    >
      <div
        class="absolute inset-0 -z-10 bg-gradient-to-br from-wei-red-dark via-wei-red to-wei-red-bright opacity-90"
      />
      <div
        class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.25),transparent_50%)]"
      />
      <h2 class="font-display text-5xl text-white md:text-7xl">
        Prêt à vivre le WEI ?
      </h2>
      <p class="mx-auto mt-5 max-w-xl text-lg text-white/90">
        Les places sont limitées. Réserve la tienne dès maintenant et rejoins
        l'aventure.
      </p>
      <a
        href="mailto:bureau@wei-efrei.com?subject=Réservation%20WEI"
        class="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-wei-red transition-transform hover:scale-[1.03] active:scale-95"
      >
        Réserver ma place
        <ArrowRight :size="18" />
      </a>
      <p class="mt-5 text-sm font-medium text-white/80">
        Événement réservé aux étudiants majeurs (+18 ans).
      </p>
    </div>
  </section>
</template>

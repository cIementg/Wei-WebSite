<script setup lang="ts">
import {
  ArrowRight,
  ChevronDown,
  ShieldCheck,
  HeartPulse,
  Radio,
  Users,
  Award,
} from "lucide-vue-next";

const SAFE = [
  {
    icon: Users,
    title: "Une équipe formée",
    text: "Une quarantaine de volontaires formés à l'accueil, à l'organisation et à la diffusion des bonnes pratiques.",
  },
  {
    icon: HeartPulse,
    title: "Secours sur place",
    text: "Équipes de sécurité mobilisées en continu et Protection civile en prévention comme en cas d'urgence.",
  },
  {
    icon: ShieldCheck,
    title: "Un cadre maîtrisé",
    text: "Rien n'est laissé au hasard : chaque temps fort est encadré et sécurisé pour que la fête reste safe du début à la fin.",
  },
  {
    icon: Radio,
    title: "Pilotage en temps réel",
    text: "La plateforme Glyps rend l'événement plus sûr grâce à l'aide de leur bracelet connecté permettant une intervention rapide en cas de problème.",
  },
];

const PROGRAM = [
  {
    day: "Jour 1",
    title: "Le coup d'envoi",
    text: "Arrivée sur le domaine, installation et premières rencontres. La soirée d'ouverture lance officiellement le week-end dans l'ambiance.",
  },
  {
    day: "Jour 2",
    title: "La journée de tous les défis",
    text: "Activités par équipes, jeux géants et challenges inter-promos toute la journée. Le soir : la soirée à thème que tout le monde attend.",
  },
  {
    day: "Jour 3",
    title: "Les derniers instants",
    text: "Une dernière matinée d'activités et de fous rires, puis les ultimes moments de partage, la tête pleine de souvenirs.",
  },
];

// Vidéos d'aperçu (YouTube)
const VIDEOS = [
  { id: "9m7jqHXr7dE", title: "Aftermovie WEI Efrei" },
  { id: "8opuVJtDrPU", title: "Le WEI en images" },
];

// Reel Instagram (shortcode)
const REEL = "DPV3p1ok7hN";
</script>

<template>
  <!-- ------------------------------------------------------------ HERO -->
  <section class="relative flex min-h-[88vh] items-center overflow-hidden">
    <div class="absolute inset-0">
      <img src="/images/weekend-hero.jpg" alt="" class="size-full object-cover object-[center_25%]" />
      <!-- Voile blanc : léger jusqu'assez bas pour laisser voir l'image, puis blanc pur au ras du bord -->
      <div
        class="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0.6)_55%,rgba(255,255,255,0.8)_80%,#fff_97%)]"
      />
      <!-- Halo rouge ancré en haut, éteint avant le blanc pur du bord → aucune coupure -->
      <div
        class="absolute inset-0 bg-[radial-gradient(70%_55%_at_70%_25%,rgba(232,18,58,0.26),transparent_75%)]"
      />
    </div>

    <div class="relative mx-auto w-full max-w-7xl px-5 pt-28 pb-16 md:px-8">
      <p
        v-reveal
        class="mb-5 inline-flex items-center gap-2 rounded-full bg-wei-red px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white shadow-[0_0_24px_-6px_var(--wei-red)]"
      >
        <span class="size-1.5 rounded-full bg-white" />
        L'événement
      </p>
      <h1
        v-reveal="80"
        class="font-display text-6xl leading-[1.05] text-foreground sm:text-7xl md:text-8xl"
      >
        Le
        <span
          class="relative inline-block -rotate-2 bg-wei-red px-4 pb-1 text-white shadow-[0_12px_40px_-10px_var(--wei-red)]"
          >Week-End</span
        >
      </h1>
      <p
        v-reveal="180"
        class="mt-6 max-w-xl text-lg leading-relaxed text-foreground/70"
      >
        Tout ce que tu dois savoir sur le week-end d'intégration : le déroulé,
        l'ambiance et ce qui rend ces trois jours si spéciaux.
      </p>
    </div>

    <div class="absolute inset-x-0 bottom-8 flex justify-center">
      <ChevronDown
        class="text-foreground/50"
        :style="{ animation: 'bounce-arrow 2s ease-in-out infinite' }"
      />
    </div>
  </section>

  <!-- ----------------------------------------------------------- INTRO -->
  <section class="mx-auto max-w-3xl px-5 pt-24 pb-16 text-center md:px-8">
    <div v-reveal>
      <span class="text-sm font-semibold uppercase tracking-widest text-wei-red">
        L'esprit WEI
      </span>
      <h2 class="mt-3 font-display text-4xl text-wei-red md:text-5xl">
        Trois jours hors du temps
      </h2>
      <p class="mt-6 text-lg leading-relaxed text-foreground/70">
        Loin du campus et du quotidien, le WEI est une parenthèse où l'on se
        lâche, où l'on ose et où les vraies amitiés se forgent.
      </p>
    </div>
  </section>

  <!-- ---------------------------------------------------------- PHOTOS -->
  <section class="mx-auto max-w-7xl px-5 pb-8 md:px-8">
    <div v-reveal class="grid grid-cols-2 gap-4 md:grid-cols-3">
      <div class="overflow-hidden rounded-2xl border border-black/10">
        <img
          src="/images/weekend-galerie-1.jpg"
          alt="Photo Week-End galerie #1"
          loading="lazy"
          class="aspect-[4/5] w-full object-cover md:aspect-[4/3]"
        />
      </div>
      <div class="overflow-hidden rounded-2xl border border-black/10">
        <img
          src="/images/weekend-galerie-2.jpg"
          alt="Photo Week-End galerie #2"
          loading="lazy"
          class="aspect-[4/5] w-full object-cover md:aspect-[4/3]"
        />
      </div>
      <div
        class="col-span-2 overflow-hidden rounded-2xl border border-black/10 md:col-span-1"
      >
        <img
          src="/images/weekend-galerie-3.jpg"
          alt="Photo Week-End galerie #3"
          loading="lazy"
          class="aspect-video w-full object-cover md:aspect-[4/3]"
        />
      </div>
    </div>
  </section>

  <!-- --------------------------------------------------------- PROGRAM -->
  <section class="mx-auto max-w-4xl px-5 py-16 md:px-8">
    <div v-reveal class="mb-14 text-center">
      <span class="text-sm font-semibold uppercase tracking-widest text-wei-red">
        Le déroulé
      </span>
      <h2 class="mt-3 font-display text-4xl text-wei-red md:text-5xl">
        Jour après jour
      </h2>
    </div>

    <div class="relative">
      <div
        class="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-wei-red via-black/20 to-transparent md:left-1/2"
      />
      <div class="space-y-10">
        <div
          v-for="(item, i) in PROGRAM"
          :key="item.day"
          v-reveal="i * 100"
          class="relative pl-12 md:pl-0"
        >
          <div
            class="absolute left-2.5 top-2 size-3 rounded-full bg-wei-red ring-4 ring-ink md:left-1/2 md:-translate-x-1/2"
          />
          <div
            :class="
              i % 2 === 0
                ? 'md:w-1/2 md:pr-12 md:text-right'
                : 'md:ml-auto md:w-1/2 md:pl-12'
            "
          >
            <div class="rounded-2xl border border-black/10 bg-card p-6">
              <span
                class="text-xs font-semibold uppercase tracking-widest text-wei-red"
              >
                {{ item.day }}
              </span>
              <h3 class="mt-2 text-xl font-semibold text-wei-red">
                {{ item.title }}
              </h3>
              <p class="mt-2 text-sm leading-relaxed text-muted-foreground">
                {{ item.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ---------------------------------------------------------- VIDÉOS -->
  <section class="mx-auto max-w-7xl px-5 py-16 md:px-8">
    <div v-reveal class="mx-auto max-w-2xl text-center">
      <span class="text-sm font-semibold uppercase tracking-widest text-wei-red">
        En vidéo
      </span>
      <h2 class="mt-3 font-display text-4xl text-wei-red md:text-5xl">
        Un petit aperçu de ce qui vous attend
      </h2>
      <p class="mt-4 text-muted-foreground">
        Plonge dans l'ambiance des éditions précédentes.
      </p>
    </div>

    <div class="mt-14 grid gap-6 md:grid-cols-2">
      <div
        v-for="(video, i) in VIDEOS"
        :key="video.id"
        v-reveal="i * 120"
        class="overflow-hidden rounded-2xl border border-black/10 bg-card transition-colors hover:border-wei-red/40"
      >
        <div class="aspect-video">
          <iframe
            class="size-full"
            :src="`https://www.youtube-nocookie.com/embed/${video.id}`"
            :title="video.title"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          />
        </div>
      </div>
    </div>

    <!-- Reel Instagram -->
    <div v-reveal="120" class="mt-6 flex justify-center">
      <div
        class="w-full max-w-[360px] overflow-hidden rounded-2xl border border-black/10 bg-white"
      >
        <iframe
          class="h-[640px] w-full"
          :src="`https://www.instagram.com/reel/${REEL}/embed`"
          title="Reel Instagram WEI Efrei"
          loading="lazy"
          scrolling="no"
          allowtransparency="true"
          allowfullscreen
        />
      </div>
    </div>
  </section>

  <!-- -------------------------------------------------------- WEI SAFE -->
  <section class="mx-auto max-w-7xl px-5 py-20 md:px-8">
    <div class="grid items-center gap-12 lg:grid-cols-2">
      <div v-reveal>
        <span
          class="inline-flex items-center gap-2 rounded-full border border-wei-red/40 bg-wei-red/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-wei-red"
        >
          <Award :size="14" /> WEI Safe
        </span>
        <h2 class="mt-4 font-display text-4xl text-wei-red md:text-5xl">
          La fête, en toute sécurité
        </h2>
        <p class="mt-5 text-lg leading-relaxed text-foreground/70">
          À l'Efrei, faire la fête ne veut pas dire improviser. Notre dispositif
          <strong class="text-wei-red">WEI Safe</strong> encadre chaque édition
          avec un vrai standard d'exigence en matière de santé et de sécurité
          étudiante.
        </p>
        <p class="mt-4 leading-relaxed text-muted-foreground">
          Une démarche reconnue nationalement : le WEI de l'Efrei a décroché la
          <strong class="text-foreground/90"
            >2ᵉ place du Trophée de l'Expérience Étudiante</strong
          >
          (catégorie santé), au Salon de l'Expérience Étudiante à la Cité des
          sciences et de l'industrie.
        </p>
      </div>

      <div v-reveal="150" class="grid gap-4 sm:grid-cols-2">
        <div
          v-for="item in SAFE"
          :key="item.title"
          class="group rounded-2xl border border-black/10 bg-card p-6 transition-all hover:-translate-y-1 hover:border-wei-red/40 hover:bg-wei-red/5"
        >
          <div
            class="grid size-11 place-items-center rounded-xl bg-wei-red/10 text-wei-red"
          >
            <component :is="item.icon" :size="20" />
          </div>
          <h3 class="mt-4 font-semibold text-wei-red">{{ item.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-muted-foreground">
            {{ item.text }}
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- ------------------------------------------------------------- CTA -->
  <section class="mx-auto max-w-7xl px-5 py-24 md:px-8">
    <div
      v-reveal
      class="relative overflow-hidden rounded-3xl border border-black/10 bg-card px-6 py-16 text-center md:px-16"
    >
      <div
        class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(232,18,58,0.2),transparent_60%)]"
      />
      <h2 class="font-display text-4xl text-wei-red md:text-6xl">
        Tu veux en être ?
      </h2>
      <p class="mx-auto mt-5 max-w-xl text-lg text-foreground/70">
        Rejoins des centaines d'étudiants pour le week-end le plus fou de ton
        année.
      </p>
      <RouterLink
        to="/#billetterie"
        class="group mt-9 inline-flex items-center gap-2 rounded-full bg-wei-red px-8 py-4 text-base font-bold text-white shadow-[0_0_40px_-8px_var(--wei-red)] transition-transform hover:scale-[1.03] active:scale-95"
      >
        Réserver ma place
        <ArrowRight
          :size="18"
          class="transition-transform group-hover:translate-x-1"
        />
      </RouterLink>
    </div>
  </section>
</template>

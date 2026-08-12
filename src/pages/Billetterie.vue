<script setup lang="ts">
/*
 * Page Weixcalibur — WEI 2026.
 * Ce fichier + le dossier public/images/billetterie/ constituent tout le
 * thème annuel de la billetterie et peuvent être remplacés en bloc chaque
 * année sans toucher au reste du site. Voir src/pages/README.md.
 */
import { ref, computed } from "vue";
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Ticket,
  Bus,
  Home as HomeIcon,
  UtensilsCrossed,
  PartyPopper,
  MapPin,
} from "lucide-vue-next";
import { nextWeiWindow, formatWeiDateRange } from "@/composables/useWeiDates";

const GLYPS_URL = "https://efrei.glyps.fr/weixcalibur/weixcalibur";
const QR_URL = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&margin=8&data=${encodeURIComponent(GLYPS_URL)}`;

// -------------------------------------------------------------- Dates
const { start, end, year } = nextWeiWindow();
const dateRange = formatWeiDateRange(start, end);
const lastSpace = dateRange.lastIndexOf(" ");
const daysLabel = dateRange.slice(0, lastSpace);
const monthLabel = dateRange.slice(lastSpace + 1).toUpperCase();

// -------------------------------------------------------------- Tarifs
const today = new Date();
const isPreventeAvailable = computed(() => today.getMonth() === 7);
const isClassiqueAvailable = computed(() => {
  const m = today.getMonth();
  const d = today.getDate();
  return m === 8 && d <= 21;
});

const TICKETS = [
  {
    key: "prevente",
    label: "Prévente",
    tag: "Prévente",
    tagClass: "bg-amber-400 text-amber-950",
    price: 186,
    period: "Dès le 10 août, jusqu'à épuisement",
    available: isPreventeAvailable,
    highlight: true,
    perks: [
      { icon: HomeIcon, label: "Zone de bungalow au choix" },
      { icon: Bus, label: "Bus au choix" },
    ],
  },
  {
    key: "classique",
    label: "Tarif classique",
    tag: "Classique",
    tagClass: "bg-emerald-400 text-emerald-950",
    price: 186,
    period: "Dès le 1ᵉʳ septembre, jusqu'à épuisement",
    available: isClassiqueAvailable,
    highlight: false,
    perks: [],
  },
  {
    key: "alumni-prevente",
    label: "Alumni · Prévente",
    tag: "Alumni Prévente",
    tagClass: "bg-sky-400 text-sky-950",
    price: 200,
    period: "Dès le 10 août, jusqu'à épuisement",
    available: isPreventeAvailable,
    highlight: false,
    perks: [{ icon: HomeIcon, label: "Zone de bungalow au choix" }],
  },
  {
    key: "alumni-classique",
    label: "Alumni · Classique",
    tag: "Alumni Efrei",
    tagClass: "bg-sky-400 text-sky-950",
    price: 200,
    period: "Dès le 1ᵉʳ septembre, jusqu'à épuisement",
    available: isClassiqueAvailable,
    highlight: false,
    perks: [],
  },
];

const price = computed(() => {
  const standard = TICKETS.find(
    (t) => !t.key.startsWith("alumni") && t.available.value,
  );
  return standard ? standard.price : TICKETS[0].price;
});

function onTicketClick(ticket: (typeof TICKETS)[number], event: MouseEvent) {
  if (!ticket.available.value) {
    event.preventDefault();
  }
}

// -------------------------------------------------------- Carrousel billets
const TICKET_PAGE_SIZE = 2;
const ticketPageCount = Math.ceil(TICKETS.length / TICKET_PAGE_SIZE);
const ticketPage = ref(0);
const ticketPageItems = computed(() =>
  TICKETS.slice(
    ticketPage.value * TICKET_PAGE_SIZE,
    ticketPage.value * TICKET_PAGE_SIZE + TICKET_PAGE_SIZE,
  ),
);
function prevTicketPage() {
  ticketPage.value = (ticketPage.value - 1 + ticketPageCount) % ticketPageCount;
}
function nextTicketPage() {
  ticketPage.value = (ticketPage.value + 1) % ticketPageCount;
}

const INCLUS = [
  {
    icon: Bus,
    title: "Transport",
    text: "Trajet aller-retour en bus affrété depuis l'Efrei jusqu'au domaine, avec toute ta promo.",
  },
  {
    icon: HomeIcon,
    title: "Logement",
    text: "Hébergement sur place pour les trois jours, dans un domaine privatisé rien que pour nous.",
  },
  {
    icon: UtensilsCrossed,
    title: "Nourriture",
    text: "Tous les repas du week-end sont inclus, du jeudi soir au dimanche.",
  },
  {
    icon: PartyPopper,
    title: "Activités",
    text: "Défis par équipes, jeux géants et soirées à thème : un programme non-stop du matin au soir.",
  },
];


const MASCOT_MAGE = "/images/billetterie/p-mage.png";
const MASCOT_MONK = "/images/billetterie/p-monk.png";
const MASCOT_PAY = "/images/billetterie/p-pay.png";
const MASCOT_PRINCESS = "/images/billetterie/p-princess.png";
const MASCOT_JESTER = "/images/billetterie/p-jester.png";
const MASCOT_CHEV = "/images/billetterie/p-chev.png";

const TROMPETTE = "/images/billetterie/trompette.png";
const DRAPEAUX = "/images/billetterie/drapeaux.png";
const DRAGON = "/images/billetterie/dragon.png";
const CHATEAU = "/images/billetterie/chateau.png";
const VILLAGE_1 = "/images/billetterie/village-1.png";
const VILLAGE_2 = "/images/billetterie/village-2.png";
const FLEUR = "/images/billetterie/fleur.png";

const CONFETTI = {
  wide: { src: "/images/billetterie/Confettis-2.png", w: 1457, h: 819 },
  a: { src: "/images/billetterie/Confettis.png", w: 753, h: 650 },
  b: { src: "/images/billetterie/Confettis-1.png", w: 753, h: 627 },
};

function confettiStyle(c: (typeof CONFETTI)[keyof typeof CONFETTI]) {
  return {
    backgroundImage: `url(${c.src})`,
    backgroundRepeat: "repeat",
    backgroundSize: `${c.w * 0.55}px ${c.h * 0.55}px`,
  };
}
</script>

<template>
  <!-- ------------------------------------------------------------ HERO -->
  <section class="relative flex min-h-dvh items-center overflow-hidden">
    <div class="absolute inset-0">
      <img
        src="/images/billetterie/hero.png"
        alt=""
        class="size-full object-cover"
      />
      <div
        class="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0.45)_50%,rgba(255,255,255,0.85)_82%,#fff_97%)]"
      />
    </div>

    <div
      class="pointer-events-none absolute inset-0 overflow-hidden opacity-90"
      :style="confettiStyle(CONFETTI.wide)"
    />

    <div
      class="relative mx-auto w-full max-w-7xl px-5 pt-28 pb-20 text-center md:px-8"
    >
      <img
        v-reveal
        src="/images/billetterie/logo.png"
        alt="Weixcalibur"
        class="mx-auto h-28 w-auto cursor-pointer drop-shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-transform duration-300 ease-out hover:scale-110 hover:drop-shadow-[0_0_40px_var(--wei-red)] sm:h-36"
      />
      <p
        v-reveal="80"
        class="mx-auto mt-6 inline-flex items-center gap-2 rounded-full bg-wei-red px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white shadow-[0_0_24px_-6px_var(--wei-red)]"
      >
        <Ticket :size="14" />
        Billetterie WEI {{ year }}
      </p>
      <h1
        v-reveal="140"
        class="mt-5 font-display text-6xl leading-none text-foreground sm:text-7xl md:text-8xl"
      >
        Rejoins le <span class="text-gradient-red">royaume</span>
      </h1>
      <p
        v-reveal="220"
        class="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-foreground/70"
      >
        {{ dateRange }} réserve ta place pour le week-end d'intégration le
        plus légendaire de l'Efrei.
      </p>
      <a
        v-reveal="300"
        href="#tarifs"
        class="group mt-9 inline-flex items-center gap-2 rounded-full bg-wei-red px-8 py-4 text-base font-bold text-white shadow-[0_0_40px_-8px_var(--wei-red)] transition-transform hover:scale-[1.03] active:scale-95"
      >
        Je prends ma place
        <ArrowRight :size="18" class="transition-transform group-hover:translate-x-1" />
      </a>
    </div>

    <div class="absolute inset-x-0 bottom-8 flex justify-center">
      <ChevronDown
        class="text-foreground/50"
        :style="{ animation: 'bounce-arrow 2s ease-in-out infinite' }"
      />
    </div>
  </section>

  <!-- --------------------------------------------------------- TICKETS -->
  <section id="tarifs" class="relative mx-auto max-w-7xl px-5 py-20 md:px-8">
    <div
      class="pointer-events-none absolute inset-0 overflow-hidden opacity-100"
      :style="confettiStyle(CONFETTI.a)"
    />
    <img
      :src="MASCOT_MAGE"
      alt=""
      class="pointer-events-none absolute -right-4 top-24 hidden w-24 select-none opacity-90 lg:block"
    />

    <div v-reveal class="relative mx-auto max-w-2xl text-center">
      <img
        :src="TROMPETTE"
        alt=""
        class="pointer-events-none absolute top-1/2 right-full mr-6 hidden w-16 -translate-y-1/2 -rotate-12 select-none sm:block md:w-20 md:mr-10"
      />
      <img
        :src="TROMPETTE"
        alt=""
        class="pointer-events-none absolute top-1/2 left-full ml-6 hidden w-16 select-none sm:block md:w-20 md:ml-10"
        style="transform: translateY(-50%) rotate(12deg) scaleX(-1)"
      />
      <span class="text-sm font-semibold uppercase tracking-widest text-wei-red">
        Les places
      </span>
      <h2 class="mt-3 font-display text-4xl text-foreground md:text-5xl">
        Choisis ton tarif
      </h2>
    </div>

    <div v-reveal class="relative mx-auto mt-14 max-w-3xl" style="overflow-anchor: none">
      <button
        type="button"
        aria-label="Tarifs précédents"
        class="absolute top-1/2 -left-3 z-10 grid size-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-card text-foreground shadow-lg transition-transform hover:scale-110 sm:-left-5"
        @click="prevTicketPage"
      >
        <ChevronLeft :size="20" />
      </button>
      <button
        type="button"
        aria-label="Tarifs suivants"
        class="absolute top-1/2 -right-3 z-10 grid size-10 -translate-y-1/2 translate-x-1/2 place-items-center rounded-full bg-card text-foreground shadow-lg transition-transform hover:scale-110 sm:-right-5"
        @click="nextTicketPage"
      >
        <ChevronRight :size="20" />
      </button>

      <Transition name="ticket-fade">
        <div :key="ticketPage" class="grid gap-5 sm:grid-cols-2">
          <a
            v-for="t in ticketPageItems"
            :key="t.key"
            :href="t.available.value ? GLYPS_URL : undefined"
            :target="t.available.value ? '_blank' : undefined"
            rel="noopener"
            :aria-disabled="!t.available.value"
            :class="[
              'group relative flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-card text-left shadow-lg transition-all',
              t.available.value
                ? 'cursor-pointer hover:-translate-y-1 hover:shadow-2xl'
                : 'cursor-not-allowed opacity-60 grayscale',
            ]"
            @click="onTicketClick(t, $event)"
          >
            <!-- Corps du billet -->
            <div
              class="relative flex h-[197px] flex-col justify-center gap-3 p-5 text-white sm:h-[213px] sm:p-6"
              :class="
                t.highlight
                  ? 'bg-gradient-to-br from-wei-red-dark via-wei-red to-wei-red-bright'
                  : 'bg-gradient-to-br from-wei-red/75 via-wei-red/60 to-wei-red-bright/55'
              "
            >
              <div class="flex items-center gap-3">
                <img
                  src="/images/billetterie/logo.png"
                  alt=""
                  class="size-11 shrink-0 rounded-full object-cover ring-2 ring-white/40"
                />
                <span class="rounded-full bg-white px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-widest text-wei-red">
                  Week-end d'intégration
                </span>
              </div>

              <div class="flex items-baseline gap-2">
                <span class="font-display text-3xl leading-none sm:text-4xl">{{ daysLabel }}</span>
                <span class="text-xs font-semibold uppercase tracking-widest text-white/70">{{ monthLabel }}</span>
              </div>

              <div v-if="t.perks.length" class="flex flex-wrap gap-2">
                <span
                  v-for="perk in t.perks"
                  :key="perk.label"
                  class="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium"
                >
                  <component :is="perk.icon" :size="14" class="shrink-0" /> {{ perk.label }}
                </span>
              </div>
            </div>

            <!-- Billet -->
            <div class="relative flex items-center gap-4 border-t-2 border-dashed border-black/10 bg-card p-4 text-foreground sm:p-5">
              <span class="absolute -top-3 -left-3 size-6 rounded-full bg-background" />
              <span class="absolute -top-3 -right-3 size-6 rounded-full bg-background" />
              <span
                class="absolute left-4 -top-2.5 rounded-full px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-widest"
                :class="t.tagClass"
              >
                {{ t.tag }}
              </span>
              <img :src="QR_URL" alt="QR billetterie" class="size-14 shrink-0 rounded-lg bg-white p-1 sm:size-16" />
              <div class="flex flex-1 flex-col gap-0.5">
                <div class="flex items-baseline gap-1.5">
                  <span class="font-display text-xl text-wei-red">{{ t.price }}€</span>
                </div>
                <span class="text-[0.6rem] text-foreground/40">+ 1,80€ de frais de dépôt (caution 200€)</span>
                <span
                  class="text-[0.65rem] font-semibold uppercase tracking-widest"
                  :class="t.available.value ? 'text-wei-red' : 'text-foreground/40'"
                >
                  {{ t.available.value ? "Disponible" : "Pas encore ouvert" }}
                </span>
                <span class="text-[0.65rem] text-foreground/40">{{ t.period }}</span>
              </div>
            </div>
          </a>
        </div>
      </Transition>

      <div class="mt-6 flex justify-center gap-2">
        <button
          v-for="p in ticketPageCount"
          :key="p"
          type="button"
          :aria-label="`Voir la page de tarifs ${p}`"
          class="h-2 rounded-full transition-all"
          :class="
            p - 1 === ticketPage
              ? 'w-6 bg-wei-red'
              : 'w-2 bg-foreground/20 hover:bg-foreground/40'
          "
          @click="ticketPage = p - 1"
        />
      </div>
    </div>

    <p class="mx-auto mt-10 max-w-xl text-center text-sm text-muted-foreground">
      Boursier·ère ? Bénéficie de 47€ de réduction, écris-nous à
      <a href="mailto:contact@wei-efrei.com" class="text-wei-red underline">
        contact@wei-efrei.com
      </a>
      pour en profiter.
    </p>
  </section>

  <!-- ------------------------------------------------------------ RECAP -->
  <section class="relative mx-auto max-w-6xl px-5 pt-4 pb-20 md:px-8">
    <div
      class="pointer-events-none absolute inset-0 overflow-hidden opacity-100"
      :style="confettiStyle(CONFETTI.b)"
    />
    <img
      :src="CHATEAU"
      alt=""
      class="pointer-events-none absolute -bottom-10 -right-10 hidden w-56 select-none opacity-15 lg:block"
    />
    <img
      :src="MASCOT_MONK"
      alt=""
      class="pointer-events-none absolute -top-2 right-6 hidden w-20 select-none opacity-90 lg:block"
    />
    <div class="grid items-center gap-10 lg:grid-cols-2">
      <div v-reveal class="relative order-2 grid grid-cols-2 gap-4 lg:order-1">
        <img
          :src="FLEUR"
          alt=""
          class="pointer-events-none absolute -bottom-5 -left-5 hidden w-14 select-none opacity-90 sm:block"
        />
        <div class="overflow-hidden rounded-2xl border border-black/10">
          <img
            src="/images/billetterie/WEIx.jpg"
            alt="Ambiance du WEI"
            loading="lazy"
            class="aspect-[3/4] w-full object-cover"
          />
        </div>
        <div class="translate-y-8 overflow-hidden rounded-2xl border border-black/10">
          <img
            src="/images/billetterie/WEIx2.jpg"
            alt="Les soirées du WEI"
            loading="lazy"
            class="aspect-[3/4] w-full object-cover"
          />
        </div>
      </div>

      <div v-reveal="150" class="order-1 lg:order-2">
        <span class="text-sm font-semibold uppercase tracking-widest text-wei-red">
          Le rappel
        </span>
        <h2 class="mt-3 font-display text-4xl text-foreground md:text-5xl">
          Le WEI, en bref
        </h2>
        <p class="mt-5 text-lg leading-relaxed text-foreground/70">
          Trois jours hors du temps, loin du campus : activités par équipes,
          soirées à thème et rencontres qui lancent ta vie étudiante en
          beauté.
        </p>
        <div class="mt-6 flex flex-wrap items-center gap-4 text-sm text-foreground/60">
          <span class="inline-flex items-center gap-2">
            <MapPin :size="16" class="text-wei-red" /> Domaine privatisé
          </span>
          <span class="inline-flex items-center gap-2">
            <Ticket :size="16" class="text-wei-red" /> {{ dateRange }}
          </span>
        </div>
      </div>
    </div>
  </section>

  <!-- ---------------------------------------------------------- INCLUS -->
  <section class="relative mx-auto max-w-7xl px-5 py-20 md:px-8">
    <div
      class="pointer-events-none absolute inset-0 overflow-hidden opacity-100"
      :style="confettiStyle(CONFETTI.wide)"
    />

    <img
      :src="DRAGON"
      alt=""
      class="icon-float pointer-events-none absolute top-0 right-2 hidden w-28 select-none opacity-90 md:top-4 md:right-6 lg:block lg:w-32"
    />
    <img
      :src="MASCOT_PAY"
      alt=""
      class="pointer-events-none absolute -left-2 bottom-2 hidden w-20 select-none opacity-90 lg:block"
    />

    <div v-reveal class="mx-auto max-w-2xl text-center">
      <span class="text-sm font-semibold uppercase tracking-widest text-wei-red">
        Compris dans le prix
      </span>
      <h2 class="mt-3 font-display text-4xl text-foreground md:text-5xl">
        Qu'est-ce qui est inclus ?
      </h2>
    </div>

    <div class="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <div
        v-for="(item, i) in INCLUS"
        :key="item.title"
        v-reveal="i * 100"
        class="group rounded-2xl border border-black/10 bg-card p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      >
        <div
          class="mx-auto grid size-14 place-items-center rounded-xl bg-wei-red/10 text-wei-red transition-transform duration-300 group-hover:scale-110 group-hover:bg-wei-red group-hover:text-white"
        >
          <component :is="item.icon" :size="26" />
        </div>
        <h3 class="mt-5 text-lg font-semibold text-foreground">{{ item.title }}</h3>
        <p class="mt-2 text-sm leading-relaxed text-muted-foreground">
          {{ item.text }}
        </p>
      </div>
    </div>
  </section>

  <!-- ------------------------------------------------------------- CTA -->
  <section class="relative mx-auto max-w-7xl px-5 pt-8 md:px-8">
    <div
      class="pointer-events-none absolute inset-0 overflow-hidden opacity-100"
      :style="confettiStyle(CONFETTI.a)"
    />

    <div class="relative pb-16 md:pb-20">
      <img
        :src="MASCOT_JESTER"
        alt=""
        class="pointer-events-none absolute -left-4 bottom-4 hidden w-24 select-none opacity-90 lg:block"
      />
      <img
        :src="MASCOT_PRINCESS"
        alt=""
        class="pointer-events-none absolute -right-4 top-0 hidden w-24 select-none opacity-90 lg:block"
      />
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
        <img :src="DRAPEAUX" alt="" class="mx-auto w-24 select-none opacity-95 md:w-28" />
        <h2 class="mt-4 font-display text-4xl text-white md:text-6xl">
          {{ price }}€ — c'est parti&nbsp;!
        </h2>
        <p class="mt-2 text-sm text-white/70">+ 1,80€ de frais de dépôt (caution 200€)</p>
        <p class="mx-auto mt-5 max-w-xl text-lg text-white/90">
          Les places sont limitées. Réserve la tienne dès maintenant sur la
          billetterie officielle Glyps.
        </p>
        <a
          :href="GLYPS_URL"
          target="_blank"
          rel="noopener"
          class="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-wei-red transition-transform hover:scale-[1.03] active:scale-95"
        >
          Réserver ma place
          <ArrowRight :size="18" />
        </a>
        <p class="mt-5 text-sm font-medium text-white/80">
          Événement réservé aux étudiants majeurs (+18 ans).
        </p>
      </div>
    </div>

    <div class="relative -mx-5 flex h-28 items-end justify-center overflow-hidden md:-mx-8 md:h-40 lg:h-56">
      <img
        :src="VILLAGE_1"
        alt=""
        class="pointer-events-none absolute bottom-0 left-[6%] hidden w-40 select-none opacity-70 md:block lg:w-52"
      />
      <img
        :src="VILLAGE_2"
        alt=""
        class="pointer-events-none absolute bottom-0 right-[6%] hidden w-40 select-none opacity-70 md:block lg:w-52"
      />
      <div class="relative h-20 w-28 overflow-hidden sm:h-24 sm:w-32 lg:h-28 lg:w-40">
        <img
          v-reveal
          :src="MASCOT_CHEV"
          alt=""
          class="absolute inset-x-0 top-0 w-full select-none"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.ticket-fade-enter-active,
.ticket-fade-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}
.ticket-fade-enter-from {
  opacity: 0;
  transform: translateX(16px);
}
.ticket-fade-leave-to {
  opacity: 0;
  transform: translateX(-16px);
}
.ticket-fade-leave-active {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
</style>

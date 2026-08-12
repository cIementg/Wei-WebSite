<script setup lang="ts">
const SOCIALS = [
  { href: "https://www.instagram.com/weiefrei", icon: "/images/footer/instagram.svg", label: "Instagram" },
  { href: "https://discord.gg/hem6YyjA9m", icon: "/images/footer/discord.svg", label: "Discord" },
  { href: "https://www.linkedin.com/company/wei-efrei/", icon: "/images/footer/linkedin.svg", label: "LinkedIn" },
  { href: "mailto:contact@wei-efrei.com", icon: "/images/footer/mail.svg", label: "Email" },
];

const year = new Date().getFullYear();
</script>

<template>
  <footer class="relative overflow-hidden border-t border-white/10 bg-ink-800">
    <div class="relative mx-auto max-w-7xl px-5 py-16 md:px-8">
      <div
        class="flex flex-col gap-12 md:flex-row md:items-start md:justify-between"
      >
        <div class="max-w-sm">
          <img
            src="/images/logo-horizontal.svg"
            alt="WEI Efrei"
            class="h-9 w-auto"
          />
          <p class="mt-4 text-sm leading-relaxed text-muted-foreground">
            Le Week-End d'Intégration de l'Efrei. Trois jours pour faire tomber
            les barrières, créer des souvenirs et démarrer ta vie étudiante en
            beauté.
          </p>
          <div
            class="mt-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-3 py-1.5"
          >
            <img src="/images/plus18.png" alt="+18 ans" class="size-5" />
            <span class="text-xs font-medium text-foreground/70">
              Réservé aux étudiants majeurs (+18 ans)
            </span>
          </div>
        </div>

        <div class="flex flex-col gap-8 sm:flex-row sm:gap-16">
          <nav class="flex flex-col gap-3">
            <span
              class="text-xs font-semibold uppercase tracking-widest text-foreground/40"
            >
              Navigation
            </span>
            <RouterLink
              to="/"
              class="text-sm text-foreground/70 transition-colors hover:text-foreground"
            >
              Accueil
            </RouterLink>
            <RouterLink
              to="/weekend"
              class="text-sm text-foreground/70 transition-colors hover:text-foreground"
            >
              Le Week-End
            </RouterLink>
            <RouterLink
              to="/billetterie"
              class="text-sm text-foreground/70 transition-colors hover:text-foreground"
            >
              Billetterie
            </RouterLink>
          </nav>

          <div class="flex flex-col gap-3">
            <span
              class="text-xs font-semibold uppercase tracking-widest text-foreground/40"
            >
              Suivez-nous
            </span>
            <div class="flex flex-wrap gap-3">
              <a
                v-for="s in SOCIALS"
                :key="s.label"
                :href="s.href"
                target="_blank"
                rel="noreferrer"
                :aria-label="s.label"
                class="grid size-11 place-items-center rounded-full border border-black/10 bg-black/5 transition-all hover:border-wei-red/60 hover:bg-wei-red/10"
              >
                <img :src="s.icon" alt="" class="size-5 brightness-0" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        class="mt-14 flex flex-col items-center justify-between gap-6 border-t border-black/10 pt-8 md:flex-row"
      >
        <p class="text-xs text-foreground/40">
          © {{ year }} WEI Efrei. Tous droits réservés.
          <span class="block md:inline">
            Crédit photo : EPS
            <a
              href="https://efreipicturestudio.fr"
              target="_blank"
              rel="noreferrer"
              class="underline hover:text-foreground/70"
            >
              efreipicturestudio.fr
            </a>
          </span>
        </p>
        <a
          href="https://www.efrei.fr/"
          target="_blank"
          rel="noreferrer"
          aria-label="Site de l'Efrei"
          class="opacity-70 transition-opacity hover:opacity-100"
        >
          <img src="/images/footer/efrei_white.svg" alt="Efrei" class="h-9 w-auto brightness-0" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ArrowLeft, Home } from "lucide-vue-next";
</script>

<template>
  <section
    class="relative flex min-h-dvh items-center justify-center overflow-hidden px-5 py-32 text-center"
  >
    <div class="absolute inset-0 -z-10">
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(232,18,58,0.22),transparent_60%)]"
      />
    </div>

    <div v-reveal class="mx-auto max-w-xl">
      <p
        class="mb-4 inline-flex items-center gap-2 rounded-full border border-black/15 bg-black/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-foreground/80 backdrop-blur"
      >
        <span class="size-1.5 rounded-full bg-wei-red" />
        Erreur 404
      </p>

      <h1
        class="font-display text-7xl leading-none text-foreground sm:text-8xl md:text-9xl"
      >
        <span class="text-gradient-red">404</span>
      </h1>

      <h2 class="mt-4 font-display text-3xl text-wei-red md:text-4xl">
        Cette page s'est perdue en soirée
      </h2>
      <p class="mx-auto mt-4 max-w-md text-lg leading-relaxed text-foreground/70">
        La page que tu cherches n'existe pas. Pas de panique,
        on te ramène à la maison.
      </p>

      <div class="mt-9 flex flex-wrap items-center justify-center gap-4">
        <RouterLink
          to="/"
          class="group inline-flex items-center gap-2 rounded-full bg-wei-red px-7 py-3.5 text-base font-semibold text-white shadow-[0_0_40px_-8px_var(--wei-red)] transition-transform hover:scale-[1.03] active:scale-95"
        >
          <Home :size="18" />
          Retour à l'accueil
        </RouterLink>
        <RouterLink
          to="/weekend"
          class="group inline-flex items-center gap-2 rounded-full border border-wei-red/40 px-7 py-3.5 text-base font-semibold text-wei-red transition-colors hover:bg-wei-red/5"
        >
          <ArrowLeft
            :size="18"
            class="transition-transform group-hover:-translate-x-1"
          />
          Découvrir le week-end
        </RouterLink>
      </div>
    </div>
  </section>
</template>

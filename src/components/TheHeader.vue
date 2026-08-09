<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from "vue";
import { Menu, X } from "lucide-vue-next";

const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/weekend", label: "Le Week-End" },
];

const scrolled = ref(false);
const open = ref(false);

const onScroll = () => {
  scrolled.value = window.scrollY > 24;
};

onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});
onUnmounted(() => window.removeEventListener("scroll", onScroll));

watch(open, (v) => {
  document.body.style.overflow = v ? "hidden" : "";
});
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    :class="
      scrolled
        ? 'border-b border-black/10 bg-ink/70 backdrop-blur-xl'
        : 'border-b border-transparent bg-transparent'
    "
  >
    <div
      class="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8"
    >
      <RouterLink to="/" class="flex items-center gap-2" @click="open = false">
        <img
          src="/images/logo-horizontal.svg"
          alt="WEI Efrei"
          class="h-10 w-auto md:h-12"
        />
      </RouterLink>

      <nav class="hidden items-center gap-1 md:flex">
        <RouterLink
          v-for="item in NAV"
          :key="item.to"
          v-slot="{ href, navigate, isExactActive }"
          :to="item.to"
          custom
        >
          <a
            :href="href"
            class="relative rounded-full px-4 py-2 text-sm font-medium transition-colors"
            :class="
              isExactActive
                ? 'text-foreground'
                : 'text-foreground/60 hover:text-foreground'
            "
            @click="navigate"
          >
            {{ item.label }}
            <span
              v-if="isExactActive"
              class="absolute inset-x-4 -bottom-0.5 h-px bg-wei-red"
            />
          </a>
        </RouterLink>
        <RouterLink
          to="/billetterie"
          class="ml-2 rounded-full bg-wei-red px-5 py-2 text-sm font-semibold text-white shadow-[0_0_24px_-4px_var(--wei-red)] transition-transform hover:scale-[1.03] active:scale-95"
        >
          Billetterie
        </RouterLink>
      </nav>

      <button
        type="button"
        :aria-label="open ? 'Fermer le menu' : 'Ouvrir le menu'"
        :aria-expanded="open"
        class="grid size-10 place-items-center rounded-full border border-black/10 text-foreground md:hidden"
        @click="open = !open"
      >
        <X v-if="open" :size="20" />
        <Menu v-else :size="20" />
      </button>
    </div>

    <!-- Mobile menu -->
    <div
      class="overflow-hidden border-t border-black/10 bg-ink/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 md:hidden"
      :class="open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'"
    >
      <nav class="flex flex-col gap-1 px-5 py-4">
        <RouterLink
          v-for="item in NAV"
          :key="item.to"
          v-slot="{ href, navigate, isExactActive }"
          :to="item.to"
          custom
        >
          <a
            :href="href"
            class="rounded-xl px-4 py-3 text-base font-medium transition-colors"
            :class="
              isExactActive
                ? 'bg-black/5 text-foreground'
                : 'text-foreground/70 hover:bg-black/5 hover:text-foreground'
            "
            @click="
              navigate($event);
              open = false;
            "
          >
            {{ item.label }}
          </a>
        </RouterLink>
        <RouterLink
          to="/billetterie"
          class="mt-2 rounded-xl bg-wei-red px-4 py-3 text-center text-base font-semibold text-white"
          @click="open = false"
        >
          Billetterie
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

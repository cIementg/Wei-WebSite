<script setup lang="ts">
withDefaults(
  defineProps<{
    words: string[];
    duration?: number;
  }>(),
  { duration: 24 },
);
</script>

<template>
  <div class="marquee" :style="{ '--marquee-duration': `${duration}s` }">
    <div class="marquee__track" aria-hidden="false">
      <div v-for="word in words" :key="`a-${word}`" class="flex items-center">
        <span class="px-8 font-display text-4xl text-white md:text-5xl">
          {{ word }}
        </span>
        <span class="size-2 rounded-full bg-white" />
      </div>
    </div>
    <div class="marquee__track" aria-hidden="true">
      <div v-for="word in words" :key="`b-${word}`" class="flex items-center">
        <span class="px-8 font-display text-4xl text-white md:text-5xl">
          {{ word }}
        </span>
        <span class="size-2 rounded-full bg-white" />
      </div>
    </div>
  </div>
</template>

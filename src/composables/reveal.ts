import type { Directive } from "vue";

/**
 * v-reveal — scroll-triggered entrance animation.
 * Adds the `.reveal` class, then `.is-visible` when the element enters
 * the viewport (once). Optional binding value sets a stagger delay in ms.
 *
 * Usage:  <div v-reveal>…</div>   or   <div v-reveal="120">…</div>
 */
export const reveal: Directive<HTMLElement, number | undefined> = {
  mounted(el, binding) {
    el.classList.add("reveal");
    if (binding.value) {
      el.style.setProperty("--reveal-delay", `${binding.value}ms`);
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" },
    );

    observer.observe(el);
  },
};

<script setup lang="ts">
import { principleLayout } from '~/data/principles'

const { t, tm, rt } = useI18n()

const principles = computed(() => (tm('principles.items') as unknown[]).map((item) => rt(item)))

const sectionRef = ref<HTMLElement | null>(null)

function formatIndex(index: number) {
  return String(index + 1).padStart(2, '0')
}

onMounted(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const root = sectionRef.value
  if (!root) return

  const items = root.querySelectorAll<HTMLElement>('.principles__item')

  if (reduceMotion) {
    items.forEach((el) => el.classList.add('principles__item--visible'))
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('principles__item--visible')
          observer.unobserve(entry.target)
        }
      }
    },
    { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
  )

  items.forEach((el) => observer.observe(el))
  onUnmounted(() => observer.disconnect())
})
</script>

<template>
  <section id="principles" ref="sectionRef" class="section principles">
    <div class="principles__bg" aria-hidden="true" />
    <div class="container">
      <SectionHeading index="03" :title="t('principles.title')" :subtitle="t('principles.subtitle')" />

      <ol class="principles__bento">
        <li
          v-for="(principle, index) in principles"
          :key="index"
          class="principles__item"
          :class="{ 'principles__item--wide': principleLayout[index]?.span === 'wide' }"
          :style="{ '--stagger': index }"
        >
          <article class="principles__card">
            <span class="principles__index" aria-hidden="true">{{ formatIndex(index) }}</span>
            <p class="principles__text">{{ principle }}</p>
          </article>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.principles {
  position: relative;
  overflow: hidden;
}

.principles__bg {
  position: absolute;
  inset: -10% 0;
  background-image:
    linear-gradient(to right, var(--grid-line) 1px, transparent 1px),
    linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse 70% 55% at 80% 40%, black, transparent 72%);
  pointer-events: none;
}

.principles__bento {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-3);
  list-style: none;
  margin: 0;
  padding: 0;
}

@media (min-width: 640px) {
  .principles__bento {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: var(--space-4);
  }
}

@media (min-width: 1024px) {
  .principles__bento {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: var(--space-4);
  }

  .principles__item--wide {
    grid-column: span 2;
  }
}

.principles__item {
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity var(--duration-slow) var(--ease-out-expo),
    transform var(--duration-slow) var(--ease-out-expo);
  transition-delay: calc(var(--stagger) * 60ms);
}

.principles__item--visible {
  opacity: 1;
  transform: translateY(0);
}

.principles__card {
  position: relative;
  height: 100%;
  min-height: 7.5rem;
  padding: var(--space-6);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-card);
  overflow: hidden;
  transition:
    border-color var(--duration-base) var(--ease-out-expo),
    box-shadow var(--duration-base) var(--ease-out-expo);
}

.principles__item--wide .principles__card {
  min-height: 8.5rem;
  padding: var(--space-8);
}

/* Blueprint corner marks */
.principles__card::before,
.principles__card::after {
  content: '';
  position: absolute;
  width: 12px;
  height: 12px;
  border-color: var(--color-accent);
  border-style: solid;
  opacity: 0.35;
  transition: opacity var(--duration-base) var(--ease-out-expo);
}

.principles__card::before {
  top: var(--space-3);
  left: var(--space-3);
  border-width: 1px 0 0 1px;
}

.principles__card::after {
  right: var(--space-3);
  bottom: var(--space-3);
  border-width: 0 1px 1px 0;
}

.principles__card:hover {
  border-color: color-mix(in srgb, var(--color-accent) 45%, var(--color-border));
  box-shadow:
    var(--shadow-card),
    0 0 0 1px var(--color-accent-soft);
}

.principles__card:hover::before,
.principles__card:hover::after {
  opacity: 0.85;
}

/* Accent rail */
.principles__card {
  background-image: linear-gradient(
    90deg,
    var(--color-accent-soft) 0,
    var(--color-accent-soft) 2px,
    transparent 2px
  );
}

.principles__index {
  display: block;
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: 0.12em;
  color: var(--color-accent);
  margin-bottom: var(--space-4);
}

.principles__text {
  font-size: var(--text-base);
  line-height: var(--leading-snug);
  color: var(--color-foreground);
  max-width: 42ch;
}

.principles__item--wide .principles__text {
  font-family: var(--font-display);
  font-size: var(--text-lg);
  font-weight: 600;
  line-height: var(--leading-tight);
  max-width: 52ch;
}

@media (min-width: 1024px) {
  .principles__item--wide .principles__text {
    font-size: var(--text-xl);
  }
}

@media (prefers-reduced-motion: reduce) {
  .principles__item {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
</style>

<script setup lang="ts">
import { ArrowRight } from '@lucide/vue'

const { t, locale } = useI18n()

const heroStack = ['Vue 3', 'Nuxt 4', 'TypeScript', 'SSR/SSG', 'Pinia', 'gRPC', 'Docker']

const stats = [
  { target: 15, prefix: '', labelKey: 'hero.statsClientsLabel' },
  { target: 6, prefix: '', labelKey: 'hero.statsMvpLabel' },
  { target: 1000000, prefix: '>', labelKey: 'hero.statsUsersLabel' }
]

const counts = ref(stats.map(() => 0))

const displayValues = computed(() =>
  stats.map((stat, index) => `${stat.prefix}${new Intl.NumberFormat(locale.value).format(counts.value[index])}`)
)

onMounted(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (reduceMotion) {
    counts.value = stats.map((stat) => stat.target)
    return
  }

  const duration = 1400
  const start = performance.now()

  function tick(now: number) {
    const progress = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    counts.value = stats.map((stat) => Math.round(stat.target * eased))
    if (progress < 1) requestAnimationFrame(tick)
  }

  requestAnimationFrame(tick)
})
</script>

<template>
  <section id="hero" class="hero">
    <div class="hero__grid" aria-hidden="true" />
    <div class="hero__inner container">
      <p class="hero__eyebrow"><span aria-hidden="true">//</span> {{ t('hero.eyebrow') }}</p>
      <h1 class="hero__name">{{ t('header.name') }}</h1>
      <p class="hero__pitch">{{ t('hero.pitch') }}</p>

      <div class="hero__actions">
        <BaseButton href="#contact" variant="primary">
          {{ t('hero.ctaPrimary') }}
          <ArrowRight :size="16" :stroke-width="2" />
        </BaseButton>
        <BaseButton href="#projects" variant="secondary">
          {{ t('hero.ctaSecondary') }}
        </BaseButton>
      </div>

      <div class="hero__stats">
        <div v-for="(stat, index) in stats" :key="stat.labelKey" class="hero__stat">
          <span class="hero__stat-value">{{ displayValues[index] }}</span>
          <span class="hero__stat-label">{{ t(stat.labelKey) }}</span>
        </div>
      </div>

      <ul class="hero__stack">
        <li v-for="tech in heroStack" :key="tech">
          <BaseTag>{{ tech }}</BaseTag>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  padding-block: var(--space-24) var(--space-16);
}

.hero__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, var(--grid-line) 1px, transparent 1px),
    linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: linear-gradient(to bottom, black, transparent 85%);
  pointer-events: none;
}

.hero__inner {
  position: relative;
  animation: hero-reveal var(--duration-slow) var(--ease-out-expo) both;
}

@keyframes hero-reveal {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero__eyebrow {
  font-family: var(--font-mono);
  color: var(--color-accent);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: var(--text-sm);
  margin-bottom: var(--space-4);
}

.hero__name {
  font-size: var(--text-5xl);
  max-width: 16ch;
  margin-bottom: var(--space-6);
}

.hero__pitch {
  font-size: var(--text-lg);
  line-height: var(--leading-normal);
  color: var(--color-foreground-muted);
  max-width: 62ch;
  margin-bottom: var(--space-8);
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
  margin-bottom: var(--space-16);
}

.hero__stats {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-8);
  padding-block: var(--space-8);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  margin-bottom: var(--space-8);
}

.hero__stat {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.hero__stat-value {
  font-family: var(--font-display);
  font-size: var(--text-3xl);
  font-weight: 700;
  color: var(--color-foreground);
  font-variant-numeric: tabular-nums;
}

.hero__stat-label {
  font-size: var(--text-sm);
  color: var(--color-foreground-muted);
}

.hero__stack {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>

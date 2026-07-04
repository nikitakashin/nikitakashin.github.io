<script setup lang="ts">
import { ChevronDown } from '@lucide/vue'
import { experience } from '~/data/experience'

const { t, tm, rt, locale } = useI18n()

const expandedId = ref<string | null>(experience[0]?.id ?? null)

function toggle(id: string) {
  expandedId.value = expandedId.value === id ? null : id
}

function formatDate(value: string | null) {
  if (!value) return t('experience.present')
  const [year, month] = value.split('-').map(Number)
  const date = new Date(year, month - 1)
  return new Intl.DateTimeFormat(locale.value, { month: 'short', year: 'numeric' }).format(date)
}

function bullets(id: string) {
  return (tm(`experience.jobs.${id}.bullets`) as unknown[]).map((item) => rt(item))
}

const sectionRef = ref<HTMLElement | null>(null)
const bgOffset = ref(0)

onMounted(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const root = sectionRef.value
  if (!root) return

  const items = root.querySelectorAll<HTMLElement>('.timeline__item')

  if (reduceMotion) {
    items.forEach((el) => el.classList.add('timeline__item--visible'))
    return
  }

  let ticking = false
  const onScroll = () => {
    if (ticking) return
    ticking = true
    requestAnimationFrame(() => {
      bgOffset.value = root.getBoundingClientRect().top * 0.08
      ticking = false
    })
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
  onUnmounted(() => window.removeEventListener('scroll', onScroll))

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('timeline__item--visible')
          observer.unobserve(entry.target)
        }
      }
    },
    { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
  )
  items.forEach((el) => observer.observe(el))
  onUnmounted(() => observer.disconnect())

  // Safety net: guarantee visibility even if IntersectionObserver never fires
  // (e.g. unusual embedding contexts) so content is never stuck hidden.
  setTimeout(() => {
    items.forEach((el) => el.classList.add('timeline__item--visible'))
    observer.disconnect()
  }, 1500)
})
</script>

<template>
  <section id="experience" ref="sectionRef" class="section experience">
    <div class="experience__bg" aria-hidden="true" :style="{ transform: `translateY(${bgOffset}px)` }" />
    <div class="container">
      <SectionHeading index="01" :title="t('experience.title')" :subtitle="t('experience.subtitle')" />

      <ol class="timeline">
        <li v-for="job in experience" :key="job.id" class="timeline__item">
          <div class="timeline__marker" aria-hidden="true" />
          <div class="timeline__content">
            <button
              type="button"
              class="timeline__header"
              :aria-expanded="expandedId === job.id"
              @click="toggle(job.id)"
            >
              <div>
                <p class="timeline__date">
                  {{ formatDate(job.dateStart) }} — {{ formatDate(job.dateEnd) }}
                </p>
                <h3 class="timeline__company">{{ job.company }}</h3>
                <p class="timeline__role">{{ t(`experience.jobs.${job.id}.role`) }}</p>
              </div>
              <ChevronDown
                :size="20"
                :stroke-width="1.5"
                class="timeline__chevron"
                :class="{ 'timeline__chevron--open': expandedId === job.id }"
              />
            </button>

            <p class="timeline__summary">{{ t(`experience.jobs.${job.id}.summary`) }}</p>

            <div class="timeline__details" :class="{ 'timeline__details--open': expandedId === job.id }">
              <div class="timeline__details-inner">
                <ul class="timeline__bullets">
                  <li v-for="(bullet, bulletIndex) in bullets(job.id)" :key="bulletIndex">{{ bullet }}</li>
                </ul>
                <ul class="timeline__stack">
                  <li v-for="tech in job.stack" :key="tech">
                    <BaseTag>{{ tech }}</BaseTag>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.experience {
  position: relative;
  overflow: hidden;
}

.experience__bg {
  position: absolute;
  inset: -10% 0;
  background-image: linear-gradient(to right, var(--grid-line) 1px, transparent 1px),
    linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: radial-gradient(ellipse 60% 50% at 20% 30%, black, transparent 70%);
  pointer-events: none;
  will-change: transform;
}

.timeline {
  position: relative;
  list-style: none;
  margin: 0;
  padding: 0;
  border-left: 2px solid var(--color-border);
}

.timeline__item {
  position: relative;
  padding-left: var(--space-8);
  padding-bottom: var(--space-12);
  opacity: 0;
  transform: translateY(28px);
  transition: opacity var(--duration-slow) var(--ease-out-expo),
    transform var(--duration-slow) var(--ease-out-expo);
}

.timeline__item--visible {
  opacity: 1;
  transform: translateY(0);
}

.timeline__item:last-child {
  padding-bottom: 0;
}

.timeline__marker {
  position: absolute;
  left: -7px;
  top: 6px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--color-background);
  border: 2px solid var(--color-accent);
  transition: transform var(--duration-base) var(--ease-out-expo),
    box-shadow var(--duration-base) var(--ease-out-expo);
}

.timeline__item:hover .timeline__marker {
  transform: scale(1.35);
  box-shadow: 0 0 0 6px var(--color-accent-soft);
}

.timeline__content {
  transition: transform var(--duration-base) var(--ease-out-expo);
}

.timeline__item:hover .timeline__content {
  transform: translateX(4px);
}

.timeline__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-4);
  width: 100%;
  background: none;
  border: none;
  padding: 0;
  text-align: left;
  color: inherit;
}

.timeline__date {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-accent);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: var(--space-2);
}

.timeline__company {
  font-size: var(--text-2xl);
  margin-bottom: var(--space-1);
  transition: color var(--duration-base) var(--ease-out-expo);
}

.timeline__item:hover .timeline__company {
  color: var(--color-accent);
}

.timeline__role {
  font-size: var(--text-base);
  color: var(--color-foreground-muted);
}

.timeline__chevron {
  flex-shrink: 0;
  margin-top: var(--space-2);
  color: var(--color-foreground-muted);
  transition: transform var(--duration-base) var(--ease-out-expo);
}

.timeline__item:hover .timeline__chevron {
  color: var(--color-accent);
}

.timeline__chevron--open {
  transform: rotate(180deg);
}

.timeline__summary {
  margin-top: var(--space-4);
  color: var(--color-foreground-muted);
  max-width: 68ch;
}

.timeline__details {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows var(--duration-slow) var(--ease-out-expo);
}

.timeline__details--open {
  grid-template-rows: 1fr;
}

.timeline__details-inner {
  overflow: hidden;
  min-height: 0;
  padding-top: var(--space-6);
}

.timeline__bullets {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  margin: 0 0 var(--space-6);
  padding: 0;
  list-style: none;
  max-width: 68ch;
}

.timeline__bullets li {
  position: relative;
  padding-left: var(--space-4);
}

.timeline__bullets li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.6em;
  width: 5px;
  height: 5px;
  background: var(--color-accent);
}

.timeline__stack {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>

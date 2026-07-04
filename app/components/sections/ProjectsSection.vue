<script setup lang="ts">
import { ArrowUpRight } from '@lucide/vue'

const { t } = useI18n()
const { activeFilter, availableFilters, filteredProjects } = useProjects()
</script>

<template>
  <section id="projects" class="section projects">
    <div class="container">
      <SectionHeading index="02" :title="t('projects.title')" :subtitle="t('projects.subtitle')" />

      <div class="projects__filters" role="group" :aria-label="t('projects.title')">
        <button
          v-for="filter in availableFilters"
          :key="filter"
          type="button"
          class="projects__filter"
          :class="{ 'projects__filter--active': activeFilter === filter }"
          :aria-pressed="activeFilter === filter"
          @click="activeFilter = filter"
        >
          {{ t(`projects.filters.${filter}`) }}
        </button>
      </div>

      <div class="projects__grid">
        <BaseCard v-for="project in filteredProjects" :key="project.id" class="project-card">
          <p class="project-card__category">{{ t(`projects.filters.${project.category}`) }}</p>
          <h3 class="project-card__title">{{ t(`projects.items.${project.id}.title`) }}</h3>
          <p class="project-card__description">{{ t(`projects.items.${project.id}.description`) }}</p>
          <p class="project-card__metric">{{ t(`projects.items.${project.id}.metric`) }}</p>

          <ul class="project-card__stack">
            <li v-for="tech in project.stack" :key="tech">
              <BaseTag>{{ tech }}</BaseTag>
            </li>
          </ul>

          <a
            v-if="project.links?.github"
            :href="project.links.github"
            target="_blank"
            rel="noopener noreferrer"
            class="project-card__link"
          >
            {{ t('projects.viewCode') }}
            <ArrowUpRight :size="16" :stroke-width="2" />
          </a>
        </BaseCard>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects__filters {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-bottom: var(--space-12);
}

.projects__filter {
  min-height: 44px;
  padding-inline: var(--space-4);
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);
  background: transparent;
  color: var(--color-foreground-muted);
  font-size: var(--text-sm);
  transition-property: color, border-color, background-color;
  transition-duration: var(--duration-base);
  transition-timing-function: var(--ease-out-expo);
}

.projects__filter:hover {
  color: var(--color-foreground);
  border-color: var(--color-border-strong);
}

.projects__filter--active {
  background: var(--color-accent-soft);
  border-color: var(--color-accent);
  color: var(--color-accent);
}

.projects__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--space-6);
}

.project-card {
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  border-color: var(--color-accent);
  transform: translateY(-4px);
}

.project-card__category {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-accent);
  margin-bottom: var(--space-3);
}

.project-card__title {
  font-size: var(--text-xl);
  margin-bottom: var(--space-3);
}

.project-card__description {
  color: var(--color-foreground-muted);
  font-size: var(--text-sm);
  line-height: var(--leading-normal);
  margin-bottom: var(--space-4);
  flex: 1;
}

.project-card__metric {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-foreground-muted);
  margin-bottom: var(--space-4);
}

.project-card__stack {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  list-style: none;
  margin: 0 0 var(--space-4);
  padding: 0;
}

.project-card__link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-accent);
  min-height: 44px;
}
</style>

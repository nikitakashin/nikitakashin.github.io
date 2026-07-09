<script setup lang="ts">
import { skillGroups } from '~/data/skills'

const { t } = useI18n()
</script>

<template>
  <section id="skills" class="section skills">
    <div class="container">
      <SectionHeading index="05" :title="t('skills.title')" :subtitle="t('skills.subtitle')" />

      <div class="skills__grid">
        <div v-for="group in skillGroups" :key="group.id" class="skills__group">
          <h3 class="skills__label">{{ t(`skills.groups.${group.id}.label`) }}</h3>
          <ul class="skills__items">
            <li v-for="item in group.items" :key="item">
              <BaseTag>{{ item }}</BaseTag>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: var(--space-8);
}

.skills__label {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--color-foreground-muted);
  font-weight: 500;
  margin-bottom: var(--space-4);
  padding-bottom: var(--space-3);
  border-bottom: 1px solid var(--color-border);
}

.skills__items {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>

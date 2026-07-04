<script setup lang="ts">
defineProps<{ index?: string; title: string; subtitle?: string }>()
</script>

<template>
  <div class="section-heading">
    <p v-if="index" class="section-heading__index" aria-hidden="true">{{ index }}</p>
    <h2 class="section-heading__title">{{ title }}</h2>
    <p v-if="subtitle" class="section-heading__subtitle">{{ subtitle }}</p>
  </div>
</template>

<style scoped>
.section-heading {
  max-width: 60ch;
  margin-bottom: var(--space-16);
}

.section-heading__index {
  font-family: var(--font-mono);
  color: var(--color-accent);
  font-size: var(--text-sm);
  letter-spacing: 0.1em;
  margin-bottom: var(--space-3);
}

.section-heading__title {
  font-size: var(--text-4xl);
  margin-bottom: var(--space-3);
}

.section-heading__subtitle {
  font-size: var(--text-lg);
  color: var(--color-foreground-muted);
  line-height: var(--leading-normal);
}
</style>

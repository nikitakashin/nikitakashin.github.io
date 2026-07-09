<script setup lang="ts">
const { t, tm, rt } = useI18n()

const paragraphs = computed(() => (tm('focus.paragraphs') as unknown[]).map((item) => rt(item)))
const focusStack = computed(() => (tm('focus.stack') as unknown[]).map((item) => rt(item)))
</script>

<template>
  <section id="focus" class="section focus">
    <div class="container">
      <SectionHeading index="04" :title="t('focus.title')" :subtitle="t('focus.subtitle')" />

      <div class="focus__content">
        <p v-for="(paragraph, index) in paragraphs" :key="index" class="focus__paragraph">{{ paragraph }}</p>

        <ul class="focus__stack">
          <li v-for="tech in focusStack" :key="tech">
            <BaseTag>{{ tech }}</BaseTag>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.focus__content {
  max-width: 68ch;
}

.focus__paragraph {
  color: var(--color-foreground-muted);
  line-height: var(--leading-normal);
  margin-bottom: var(--space-4);
}

.focus__stack {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  list-style: none;
  margin: var(--space-6) 0 0;
  padding: 0;
}
</style>

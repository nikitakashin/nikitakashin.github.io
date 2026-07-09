<script setup lang="ts">
const { t, tm, rt } = useI18n()

const paragraphs = computed(() => (tm('about.paragraphs') as unknown[]).map((item) => rt(item)))
</script>

<template>
  <section id="about" class="section about">
    <div class="container about__layout">
      <div class="about__prose">
        <SectionHeading index="06" :title="t('about.title')" />
        <p v-for="(paragraph, index) in paragraphs" :key="index">{{ paragraph }}</p>
      </div>

      <BaseCard class="about__meta">
        <div class="about__meta-row">
          <p class="about__meta-label">{{ t('about.education.label') }}</p>
          <p class="about__meta-value">{{ t('about.education.value') }}</p>
        </div>
        <div class="about__meta-row">
          <p class="about__meta-label">{{ t('about.languages.label') }}</p>
          <p class="about__meta-value">{{ t('about.languages.russian') }}</p>
          <p class="about__meta-value">{{ t('about.languages.english') }}</p>
        </div>
      </BaseCard>
    </div>
  </section>
</template>

<style scoped>
.about__layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-12);
}

@media (min-width: 1024px) {
  .about__layout {
    grid-template-columns: 2fr 1fr;
    align-items: start;
  }
}

.about__prose p {
  max-width: 68ch;
  color: var(--color-foreground-muted);
  line-height: var(--leading-normal);
  margin-bottom: var(--space-4);
}

.about__meta {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.about__meta-label {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--color-accent);
  margin-bottom: var(--space-2);
}

.about__meta-value {
  font-size: var(--text-base);
  color: var(--color-foreground);
}
</style>

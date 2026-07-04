<script setup lang="ts">
const props = defineProps<{ error: { statusCode: number; statusMessage?: string } }>()

function handleClear() {
  clearError({ redirect: '/' })
}
</script>

<template>
  <main class="error-page">
    <p class="error-page__code">{{ props.error.statusCode }}</p>
    <h1 class="error-page__title">
      {{ props.error.statusCode === 404 ? 'Page not found' : 'Something went wrong' }}
    </h1>
    <button class="error-page__back" @click="handleClear">Back to home</button>
  </main>
</template>

<style scoped>
.error-page {
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);
  background: var(--color-background);
  color: var(--color-foreground);
  text-align: center;
  padding: var(--space-4);
}

.error-page__code {
  font-family: var(--font-mono);
  color: var(--color-accent);
  font-size: var(--text-lg);
  letter-spacing: 0.1em;
}

.error-page__title {
  font-size: var(--text-3xl);
}

.error-page__back {
  margin-top: var(--space-4);
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);
  background: transparent;
  color: var(--color-foreground);
  font-size: var(--text-base);
  min-height: 44px;
}

.error-page__back:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}
</style>

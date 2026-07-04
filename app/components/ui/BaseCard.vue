<template>
  <div class="card">
    <slot />
  </div>
</template>

<style scoped>
.card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-6);
  box-shadow: var(--shadow-card);
  transition-property: border-color, transform, box-shadow;
  transition-duration: var(--duration-slow);
  transition-timing-function: var(--ease-out-expo);
}
</style>

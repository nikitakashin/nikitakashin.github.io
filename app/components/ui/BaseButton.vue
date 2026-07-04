<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary' | 'ghost'
    href?: string
    to?: string
    external?: boolean
  }>(),
  { variant: 'primary' }
)
</script>

<template>
  <NuxtLink
    v-if="to"
    :to="to"
    class="btn"
    :class="`btn--${variant}`"
  >
    <slot />
  </NuxtLink>
  <a
    v-else-if="href"
    :href="href"
    class="btn"
    :class="`btn--${variant}`"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
  >
    <slot />
  </a>
  <button v-else class="btn" :class="`btn--${variant}`" type="button">
    <slot />
  </button>
</template>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  min-height: 44px;
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-sm);
  font-size: var(--text-sm);
  font-weight: 600;
  border: 1px solid transparent;
  white-space: nowrap;
  transition-property: color, background-color, border-color, transform;
  transition-duration: var(--duration-base);
  transition-timing-function: var(--ease-out-expo);
}

.btn:active {
  transform: scale(0.97);
}

.btn--primary {
  background: var(--color-accent);
  color: var(--color-on-accent);
}

.btn--primary:hover {
  filter: brightness(1.08);
}

.btn--secondary {
  background: transparent;
  color: var(--color-foreground);
  border-color: var(--color-border-strong);
}

.btn--secondary:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}

.btn--ghost {
  background: transparent;
  color: var(--color-foreground-muted);
  padding-inline: var(--space-3);
}

.btn--ghost:hover {
  color: var(--color-foreground);
}

@media (prefers-reduced-motion: reduce) {
  .btn:active {
    transform: none;
  }
}
</style>

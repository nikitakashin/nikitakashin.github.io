<script setup lang="ts">
withDefaults(defineProps<{ mono?: boolean }>(), { mono: true })
</script>

<template>
  <span class="tag" :class="{ 'tag--mono': mono }">
    <slot />
  </span>
</template>

<style scoped>
.tag {
  display: inline-flex;
  align-items: center;
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);
  background: var(--color-surface-raised);
  color: var(--color-foreground-muted);
  font-size: var(--text-xs);
  line-height: 1;
  white-space: nowrap;
}

.tag--mono {
  font-family: var(--font-mono);
  letter-spacing: 0.02em;
}
</style>

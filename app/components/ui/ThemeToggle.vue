<script setup lang="ts">
import { Moon, Sun } from '@lucide/vue'

const { t } = useI18n()
const colorMode = useColorMode()

function toggle() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button type="button" class="theme-toggle" :aria-label="t('theme.toggle')" @click="toggle">
    <Sun :size="18" :stroke-width="1.5" class="theme-toggle__icon theme-toggle__icon--sun" />
    <Moon :size="18" :stroke-width="1.5" class="theme-toggle__icon theme-toggle__icon--moon" />
  </button>
</template>

<style scoped>
.theme-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);
  background: transparent;
  color: var(--color-foreground-muted);
  transition-property: color, border-color;
  transition-duration: var(--duration-base);
  transition-timing-function: var(--ease-out-expo);
}

.theme-toggle:hover {
  color: var(--color-accent);
  border-color: var(--color-accent);
}
</style>

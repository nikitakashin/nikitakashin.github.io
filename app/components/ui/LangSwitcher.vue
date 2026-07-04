<script setup lang="ts">
import { Languages } from '@lucide/vue'

const { locale, locales, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const otherLocale = computed(() => {
  const available = (locales.value as Array<{ code: string }>).filter((l) => l.code !== locale.value)
  return available[0]
})
</script>

<template>
  <NuxtLink
    v-if="otherLocale"
    :to="switchLocalePath(otherLocale.code)"
    class="lang-switch"
    :aria-label="t('lang.switchTo')"
  >
    <Languages :size="16" :stroke-width="1.5" />
    <span>{{ otherLocale.code.toUpperCase() }}</span>
  </NuxtLink>
</template>

<style scoped>
.lang-switch {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  height: 44px;
  padding-inline: var(--space-3);
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);
  color: var(--color-foreground-muted);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  transition-property: color, border-color;
  transition-duration: var(--duration-base);
  transition-timing-function: var(--ease-out-expo);
}

.lang-switch:hover {
  color: var(--color-accent);
  border-color: var(--color-accent);
}
</style>

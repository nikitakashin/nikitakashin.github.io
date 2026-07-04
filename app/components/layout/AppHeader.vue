<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

const navItems = [
  { id: 'experience', label: computed(() => t('nav.experience')) },
  { id: 'projects', label: computed(() => t('nav.projects')) },
  { id: 'skills', label: computed(() => t('nav.skills')) },
  { id: 'about', label: computed(() => t('nav.about')) }
]
</script>

<template>
  <header class="header">
    <div class="header__inner">
      <NuxtLink :to="localePath('/')" class="header__brand">
        <span class="header__mark" aria-hidden="true">NK</span>
        <span class="header__name">{{ t('header.name') }}</span>
      </NuxtLink>

      <nav class="header__nav" :aria-label="t('nav.experience')">
        <a v-for="item in navItems" :key="item.id" :href="`#${item.id}`" class="header__link">
          {{ item.label.value }}
        </a>
      </nav>

      <div class="header__actions">
        <LangSwitcher />
        <ThemeToggle />
        <BaseButton href="#contact" variant="primary" class="header__cta">
          {{ t('hero.ctaPrimary') }}
        </BaseButton>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 40;
  background: color-mix(in srgb, var(--color-background) 82%, transparent);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--color-border);
}

.header__inner {
  height: var(--header-height);
  max-width: var(--container-max);
  margin-inline: auto;
  padding-inline: var(--space-4);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
}

@media (min-width: 768px) {
  .header__inner {
    padding-inline: var(--space-8);
  }
}

.header__brand {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: var(--text-lg);
  flex-shrink: 0;
}

.header__mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: var(--radius-sm);
  background: var(--color-accent-soft);
  color: var(--color-accent);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
}

.header__name {
  display: none;
}

@media (min-width: 1024px) {
  .header__name {
    display: inline;
  }
}

.header__nav {
  display: none;
  align-items: center;
  gap: var(--space-6);
}

@media (min-width: 768px) {
  .header__nav {
    display: flex;
  }
}

.header__link {
  font-size: var(--text-sm);
  color: var(--color-foreground-muted);
  transition-property: color;
  transition-duration: var(--duration-base);
  transition-timing-function: var(--ease-out-expo);
}

.header__link:hover {
  color: var(--color-foreground);
}

.header__actions {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.header__cta {
  display: none;
}

@media (min-width: 640px) {
  .header__cta {
    display: inline-flex;
  }
}
</style>

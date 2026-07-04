<script setup lang="ts">
import { Mail, MapPin, Phone, Send } from '@lucide/vue'

const { t } = useI18n()

const contactLinks = [
  { icon: Phone, labelKey: 'contact.labels.phone', value: '+996 700 454 479', href: 'tel:+996700454479' },
  { icon: Mail, labelKey: 'contact.labels.email', value: 'rop-2012@bk.ru', href: 'mailto:rop-2012@bk.ru' },
  { icon: Send, labelKey: 'contact.labels.telegram', value: '@FrontendOverlord', href: 'https://t.me/FrontendOverlord', external: true },
  { icon: MapPin, labelKey: 'contact.labels.location', value: null, href: null }
]
</script>

<template>
  <section id="contact" class="section contact">
    <div class="container">
      <SectionHeading index="05" :title="t('contact.title')" :subtitle="t('contact.pitch')" />

      <div class="contact__grid">
        <component
          :is="item.href ? 'a' : 'div'"
          v-for="item in contactLinks"
          :key="item.labelKey"
          class="contact__item"
          :href="item.href ?? undefined"
          :target="item.external ? '_blank' : undefined"
          :rel="item.external ? 'noopener noreferrer' : undefined"
        >
          <component :is="item.icon" :size="20" :stroke-width="1.5" class="contact__icon" />
          <div>
            <p class="contact__label">{{ t(item.labelKey) }}</p>
            <p class="contact__value">{{ item.value ?? t('contact.location') }}</p>
          </div>
        </component>

        <a href="https://github.com/nikitakashin" target="_blank" rel="noopener noreferrer" class="contact__item">
          <IconGithub :size="20" class="contact__icon" />
          <div>
            <p class="contact__label">{{ t('contact.labels.github') }}</p>
            <p class="contact__value">github.com/nikitakashin</p>
          </div>
        </a>
      </div>

      <BaseButton
        href="https://t.me/FrontendOverlord"
        external
        variant="primary"
        class="contact__cta"
      >
        {{ t('contact.cta') }}
      </BaseButton>
    </div>
  </section>
</template>

<style scoped>
.contact__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: var(--space-4);
  margin-bottom: var(--space-12);
}

.contact__item {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  padding: var(--space-4);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  min-height: 44px;
  transition-property: border-color, transform;
  transition-duration: var(--duration-base);
  transition-timing-function: var(--ease-out-expo);
}

a.contact__item:hover {
  border-color: var(--color-accent);
  transform: translateY(-2px);
}

.contact__icon {
  color: var(--color-accent);
  flex-shrink: 0;
  margin-top: 2px;
}

.contact__label {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--color-foreground-muted);
  margin-bottom: var(--space-1);
}

.contact__value {
  font-size: var(--text-base);
  word-break: break-word;
}

.contact__cta {
  width: fit-content;
}
</style>

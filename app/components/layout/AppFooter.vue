<script setup lang="ts">
import { Mail, Send } from '@lucide/vue'

const { t } = useI18n()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="footer__inner">
      <p class="footer__rights">{{ t('footer.rights', { year }) }}</p>
      <div class="footer__social">
        <a href="https://github.com/nikitakashin" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <IconGithub :size="18" />
        </a>
        <a href="https://t.me/FrontendOverlord" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
          <Send :size="18" :stroke-width="1.5" />
        </a>
        <a href="mailto:rop-2012@bk.ru" aria-label="Email">
          <Mail :size="18" :stroke-width="1.5" />
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--color-border);
}

.footer__inner {
  max-width: var(--container-max);
  margin-inline: auto;
  padding: var(--space-6) var(--space-4);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
}

@media (min-width: 768px) {
  .footer__inner {
    padding-inline: var(--space-8);
  }
}

.footer__rights {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-foreground-muted);
}

.footer__social {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.footer__social a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: var(--radius-sm);
  color: var(--color-foreground-muted);
  transition-property: color;
  transition-duration: var(--duration-base);
  transition-timing-function: var(--ease-out-expo);
}

.footer__social a:hover {
  color: var(--color-accent);
}
</style>

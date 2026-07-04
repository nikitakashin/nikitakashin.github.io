<script setup lang="ts">
const { t, locale } = useI18n()

useSeoMeta({
  title: t('meta.title'),
  description: t('meta.description'),
  ogTitle: t('meta.title'),
  ogDescription: t('meta.description'),
  ogType: 'website',
  ogLocale: computed(() => (locale.value === 'ru' ? 'ru_RU' : 'en_US')),
  twitterCard: 'summary_large_image',
  twitterTitle: t('meta.title'),
  twitterDescription: t('meta.description')
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Nikita Kashin',
        jobTitle: 'Frontend Architect',
        url: 'https://nikitakashin.github.io',
        image: 'https://nikitakashin.github.io/og-image.png',
        email: 'mailto:rop-2012@bk.ru',
        address: { '@type': 'PostalAddress', addressLocality: 'Bishkek', addressCountry: 'KG' },
        sameAs: ['https://github.com/nikitakashin', 'https://t.me/FrontendOverlord'],
        knowsAbout: ['Vue.js', 'Nuxt', 'TypeScript', 'Frontend architecture', 'SSR', 'PWA']
      })
    }
  ]
})
</script>

<template>
  <div>
    <HeroSection />
    <ExperienceSection />
    <ProjectsSection />
    <SkillsSection />
    <AboutSection />
    <ContactSection />
  </div>
</template>

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
        jobTitle: t('header.role'),
        url: 'https://nikitakashin.github.io',
        image: 'https://nikitakashin.github.io/og-image.png',
        email: 'mailto:rop-2012@bk.ru',
        address: { '@type': 'PostalAddress', addressLocality: 'Bishkek', addressCountry: 'KG' },
        sameAs: ['https://github.com/nikitakashin', 'https://t.me/FrontendOverlord'],
        knowsAbout: ['Software architecture', 'Vue.js', 'Nuxt', 'TypeScript', 'Python', 'AI engineering', 'System design']
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
    <PrinciplesSection />
    <FocusSection />
    <SkillsSection />
    <AboutSection />
    <ContactSection />
  </div>
</template>

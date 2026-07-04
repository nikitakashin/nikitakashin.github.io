<script setup lang="ts">
const { t } = useI18n()
const localeHead = useLocaleHead({ addSeoAttributes: true })

useHead(() => ({
  htmlAttrs: {
    lang: localeHead.value.htmlAttrs?.lang,
    dir: localeHead.value.htmlAttrs?.dir
  },
  link: [...(localeHead.value.link || [])],
  meta: [...(localeHead.value.meta || [])]
}))

useSeoMeta({
  ogSiteName: t('header.name'),
  ogImage: 'https://nikitakashin.github.io/og-image.png',
  twitterImage: 'https://nikitakashin.github.io/og-image.png'
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

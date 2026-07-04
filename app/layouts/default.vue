<template>
  <div class="page">
    <AppHeader />
    <main class="page__main">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
}

.page__main {
  flex: 1;
}
</style>

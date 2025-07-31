<script setup lang="ts">
const nuxtApp = useNuxtApp()
const isLoading = nuxtApp.$isLoading
</script>

<template>
  <Loader v-if="isLoading" />
  <Header />
  <Nav />
  <main>
    <NuxtPage />
  </main>
  <Footer />
  <Banner />
</template>

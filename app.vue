<script setup lang="ts">
  import { RouterView } from 'vue-router'
</script>

<template>
  <Header />
  <Nav />
  <main>
    <RouterView />
  </main>

  <Footer />
  <Banner />
</template>

<script setup lang="ts">
  import Carousel from './components/Carousel.vue'
</script>

<template>
  <section>
    <div class="container mx-auto px-[16px] overflow-hidden">
      <!-- title -->
      <h1 class="text-[30px] text-black01 font-sans font-medium">
        Памятники, созданные и установленные компанией
        <span class="font-bold">“Ритуал №1”</span>
      </h1>
    </div>
    <div>
      <Carousel />
    </div>
  </section>
</template>

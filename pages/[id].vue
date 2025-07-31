<script setup lang="ts">
  import BannerCatalog from './home/components/BannerCatalog.vue'
  import Contact from './home/Contact.vue'
  import ImgCarousel from './home/ImgCarousel.vue'
  import Description from './Item/Description.vue'
  import Item from './Item/Item.vue'
</script>

<template>
  <main>
    <Item />
    <Description />
    <BannerCatalog />
    <ImgCarousel />
    <Contact />
  </main>
</template>

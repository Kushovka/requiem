<script setup lang="ts">
  import advItems from '~/composables/home/advItems/advItems'
</script>

<template>
  <section class="w-full">
    <div class="container mx-auto px-[16px] py-[50px]">
      <div class="grid xl:grid-cols-4 md:grid-cols-2 border p-[32px] gap-[30px] rounded-[8px]">
        <div v-for="(advItem, idx) in advItems" :key="idx" class="flex items-center flex-col gap-[8px]">
          <div class="flex gap-[8px]">
            <img :src="advItem.icon" alt="" />
            <h1 class="text-[20px] text-black01 font-semibold">{{ advItem.title }}</h1>
          </div>
          <p class="text-[18px] text-gray01 font-normal w-[80%] text-center">{{ advItem.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

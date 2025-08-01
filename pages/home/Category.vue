<script setup lang="ts">
  import categoryItems from '~/composables/home/categoryItems/categoryItems'
  import { Icon } from '@iconify/vue'
</script>

<template>
  <section class="container mx-auto px-[16px] py-[70px]">
    <div class="flex flex-col gap-[24px]">
      <!-- title -->
      <div class="flex items-center gap-[24px]">
        <h1 class="sm:text-[30px] text-[20px] text-black01 font-sans font-medium sm:text-end">Основные категории товаров</h1>
        <NuxtLink to="/catalogAllItems" class="flex-center group">
          <p class="text-[18px] text-gray01 group-hover:text-black01 transition-colors duration-300  font-sans font-normal">Все категории</p>
          <Icon icon="iconoir:nav-arrow-right" class="text-gray01 group-hover:text-black01 transition-colors duration-300 " width="24" height="24" />
        </NuxtLink>
      </div>
      <!-- card -->
      <div class="grid xl:grid-cols-6 md:grid-cols-3 grid-cols-2  gap-[25px] h-full">
        <div
          v-for="(categoryItem, idx) in categoryItems"
          :key="idx"
          class="bg-white01 hover:bg-pink01 hover:-translate-y-3 transition-all duration-300 p-[24px] rounded-[8px] cursor-pointer">
          <div class="flex flex-col h-full justify-between">
            <img :src="categoryItem.imgPath" class="object-cover w-full" alt="" />
            <p class="sm:text-[20px] text-[16px] text-black01 font-semibold text-center">{{ categoryItem.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

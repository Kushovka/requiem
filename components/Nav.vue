<script setup lang="ts">
  import navItems from '~/composables/navItems/navItems'
  import { Icon } from '@iconify/vue'
</script>

<template>
  <nav class="border-y border-gray01/30">
    <div class="container mx-auto px-[16px] py-[12px] flex-between">
      <!-- left -->
      <div class="flex items-center xl:gap-[56px] lg:gap-[30px] gap-[20px]">
        <!-- btn -->
        <NuxtLink to="/catalogAllItems">
          <button
            class="flex items-center xl:px-[16px] lg:px-[12px] xl:py-[12px] lg:py-[10px] sm:px-[16px] sm:py-[12px] px-[12px] py-[12px] rounded-[6px] bg-orange01 gap-[17px]">
            <img src="/images/nav/icon.svg" alt="" />
            <span
              class="xl:text-[18px] sm:block hidden lg:text-[16px] whitespace-nowrap font-medium font-sans text-white">
              Каталог по категориям
            </span>
          </button>
        </NuxtLink>
        <!-- items -->
        <div class="lg:flex hidden items-center xl:gap-[40px] lg: gap-[20px]">
          <div
            v-for="(navItem, idx) in navItems"
            :key="idx"
            class="hover:bg-orange01/[8%] py-[10px] px-[16px] rounded-[8px] group transition-colors duration-300 cursor-pointer">
            <span
              class="text-[18px] text-black01 font-sans font-normal whitespace-nowrap group-hover:text-orange01 transition-colors duration-300">
              {{ navItem.name }}
            </span>
          </div>
        </div>
      </div>
      <!-- rigth -->
      <div class="flex items-center xl:gap-[20px]">
        <div
          class="flex items-center gap-[10px] hover:bg-gray01/[10%] py-[12px] px-[16px] rounded-[8px] cursor-pointer transition-colors duration-300">
          <Icon icon="mdi:truck-outline" width="24" height="24" :style="{ color: '#9DA1AA' }" />
          <span class="text-[18px] sm:block hidden text-gray01 font-sans font-normal">Доставка</span>
        </div>
        <div
          class="flex items-center gap-[10px] hover:bg-gray01/[10%] py-[12px] px-[16px] rounded-[8px] cursor-pointer transition-colors duration-300">
          <Icon icon="mdi:help-circle-outline" width="24" height="24" :style="{ color: '#9DA1AA' }" />
          <span class="text-[18px] text-gray01 sm:block hidden font-sans font-normal">Помощь</span>
        </div>
      </div>
    </div>
  </nav>
</template>

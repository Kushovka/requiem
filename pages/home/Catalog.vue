<script setup lang="ts">
  import catalogItems from '~/composables/home/catalogItems/catalogItems'
  import BannerCatalog from './components/BannerCatalog.vue'
  import { Icon } from '@iconify/vue'
  import { ref } from 'vue'

  const hoveredIcon1 = ref<boolean[]>(Array(catalogItems.length).fill(false))
  const hoveredIcon2 = ref<boolean[]>(Array(catalogItems.length).fill(false))
  const hoveredIcon3 = ref<boolean[]>(Array(catalogItems.length).fill(false))
</script>

<template>
  <section class="container mx-auto w-full px-[16px] pb-[90px]">
    <div class="flex flex-col gap-[40px]">
      <!-- title -->
      <h1 class="text-[30px] text-black01 font-medium">Популярные памятники из нашего каталога</h1>
      <!-- catalog 1 -->
      <div class="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-[40px] h-full">
        <NuxtLink :to="`/${catalogItem.id}`"
          v-for="(catalogItem, idx) in catalogItems"
          :key="idx"
          class="flex flex-col justify-between h-full group/card cursor-pointer">
          <div class="flex flex-col gap-[8px]">
            <div
              class="bg-white01 rounded-[6px] group-hover/card:bg-pink01 transition-colors duration-300 cursor-pointer">
              <img :src="catalogItem.imgPath" class="w-[360px]" alt="" />
            </div>
            <div class="flex gap-[8px]">
              <!-- icon1 -->
              <div
                class="flex border py-[10px] md:px-[37px] px-[16px] gap-[5px] rounded-[6px] hover:bg-pink01 transition-colors duration-300 cursor-pointer group"
                @mouseenter="hoveredIcon1[idx] = true"
                @mouseleave="hoveredIcon1[idx] = false">
                <img
                  class="cursor-pointer"
                  :src="hoveredIcon1[idx] ? '/images/home/catalog/icon1Hover.svg' : '/images/home/catalog/icon1.svg'"
                  alt="profIcon" />
                <span
                  class="text-[16px] md:block hidden text-black01/70 font-bold group-hover:text-orange01 transition-colors duration-300">
                  3D
                </span>
              </div>
              <!-- icon2 -->
              <div
                class="flex border py-[10px] md:px-[37px] px-[16px] gap-[5px] rounded-[6px] hover:bg-pink01 cursor-pointer group"
                @mouseenter="hoveredIcon2[idx] = true"
                @mouseleave="hoveredIcon2[idx] = false">
                <img
                  class="cursor-pointer"
                  :src="hoveredIcon2[idx] ? '/images/home/catalog/icon2Hover.svg' : '/images/home/catalog/icon2.svg'"
                  alt="profIcon" />
                <span
                  class="md:block hidden text-[16px] text-black01/70 font-bold group-hover:text-orange01 transition-colors duration-300">
                  Дизайн
                </span>
              </div>
              <!-- icon3 -->
              <div
                class="flex py-[8px] px-[15px] border rounded-[6px] hover:bg-pink01 transition-colors duration-300 cursor-pointer group"
                @mouseenter="hoveredIcon3[idx] = true"
                @mouseleave="hoveredIcon3[idx] = false">
                <img
                  class="cursor-pointer"
                  :src="hoveredIcon3[idx] ? '/images/home/catalog/icon3Hover.svg' : '/images/home/catalog/icon3.svg'"
                  alt="profIcon" />
              </div>
            </div>
          </div>

          <!-- title -->
          <div>
            <h2 class="md:text-[28px] sm:text-[22px] text-black01 font-semibold">{{ catalogItem.name }}</h2>
          </div>

          <!-- price -->
          <div class="flex flex-col">
            <h2 class="text-[26px] font-semibold text-orange01">{{ catalogItem.price }}</h2>
            <div class="flex-between">
              <div class="flex gap-[12px]">
                <h2 class="text-[18px] font-normal text-gray01 line-through">{{ catalogItem.oldPrice }}</h2>
                <div class="bg-orange01 rounded-[50px] py-[2px] px-[6px]">
                  <span class="text-[16px] text-white font-semibold">{{ catalogItem.sale }}</span>
                </div>
              </div>
              <div
                class="border-[3px] border-orange01 group-hover/card:bg-orange01 transition-colors duration-300 p-[6px] rounded-full group/card cursor-pointer">
                <Icon
                  icon="iconoir:arrow-right"
                  class="text-orange01 transition-colors duration-300 group-hover/card:text-white01"
                  width="24"
                  height="24" />
              </div>
            </div>
            <div></div>
          </div>
        </NuxtLink>
      </div>
      <!-- banner -->
      <BannerCatalog />
      <!-- catalog 2 -->
      <div class="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-[40px] h-full">
        <div
          v-for="(catalogItem, idx) in catalogItems"
          :key="idx"
          :class="[
            'flex',
            'flex-col',
            'justify-between',
            'h-full',
            'group/card',
            'cursor-pointer',
            idx > 3 ? 'hidden' : ''
          ]">
          <div class="flex flex-col gap-[8px]">
            <div
              class="bg-white01 rounded-[6px] group-hover/card:bg-pink01 transition-colors duration-300 cursor-pointer">
              <img :src="catalogItem.imgPath" class="w-[360px]" alt="" />
            </div>
            <div class="flex gap-[8px]">
              <!-- icon1 -->
              <div
                class="flex border py-[10px] md:px-[37px] px-[16px] gap-[5px] rounded-[6px] hover:bg-pink01 transition-colors duration-300 cursor-pointer group"
                @mouseenter="hoveredIcon1[idx] = true"
                @mouseleave="hoveredIcon1[idx] = false">
                <img
                  class="cursor-pointer"
                  :src="hoveredIcon1[idx] ? '/images/home/catalog/icon1Hover.svg' : '/images/home/catalog/icon1.svg'"
                  alt="profIcon" />
                <span
                  class="text-[16px] md:block hidden text-black01/70 font-bold group-hover:text-orange01 transition-colors duration-300">
                  3D
                </span>
              </div>
              <!-- icon2 -->
              <div
                class="flex border py-[10px] md:px-[37px] px-[16px] gap-[5px] rounded-[6px] hover:bg-pink01 cursor-pointer group"
                @mouseenter="hoveredIcon2[idx] = true"
                @mouseleave="hoveredIcon2[idx] = false">
                <img
                  class="cursor-pointer"
                  :src="hoveredIcon2[idx] ? '/images/home/catalog/icon2Hover.svg' : '/images/home/catalog/icon2.svg'"
                  alt="profIcon" />
                <span
                  class="text-[16px] md:block hidden text-black01/70 font-bold group-hover:text-orange01 transition-colors duration-300">
                  Дизайн
                </span>
              </div>
              <!-- icon3 -->
              <div
                class="flex py-[8px] px-[15px] border rounded-[6px] hover:bg-pink01 transition-colors duration-300 cursor-pointer group"
                @mouseenter="hoveredIcon3[idx] = true"
                @mouseleave="hoveredIcon3[idx] = false">
                <img
                  class="cursor-pointer"
                  :src="hoveredIcon3[idx] ? '/images/home/catalog/icon3Hover.svg' : '/images/home/catalog/icon3.svg'"
                  alt="profIcon" />
              </div>
            </div>
          </div>

          <!-- title -->
          <div>
            <h2 class="md:text-[28px] sm:text-[22px] text-black01 font-semibold">{{ catalogItem.name }}</h2>
          </div>

          <!-- price -->
          <div class="flex flex-col">
            <h2 class="text-[26px] font-semibold text-orange01">{{ catalogItem.price }}</h2>
            <div class="flex-between">
              <div class="flex gap-[12px]">
                <h2 class="text-[18px] font-normal text-gray01 line-through">{{ catalogItem.oldPrice }}</h2>
                <div class="bg-orange01 rounded-[50px] py-[2px] px-[6px]">
                  <span class="text-[16px] text-white font-semibold">{{ catalogItem.sale }}</span>
                </div>
              </div>
              <div
                class="border-[3px] border-orange01 group-hover/card:bg-orange01 transition-colors duration-300 p-[6px] rounded-full group/card cursor-pointer">
                <Icon
                  icon="iconoir:arrow-right"
                  class="text-orange01 transition-colors duration-300 group-hover/card:text-white01"
                  width="24"
                  height="24" />
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

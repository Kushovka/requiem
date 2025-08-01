<script setup lang="ts">
  import { ref } from 'vue'
  import { useRoute } from 'vue-router'
  import { Icon } from '@iconify/vue'
  import catalogItems from '~/composables/home/catalogItems/catalogItems'

  const route = useRoute()

  const productId = route.params.id

  const product = catalogItems.find(item => String(item.id) === String(productId))
  const selectedImage = ref(product?.images?.[0] ?? product?.imgPath ?? '')

  const hoveredIcon1 = ref(false)
  const hoveredIcon3 = ref(false)
</script>

<template>
  <section class="container mx-auto px-[16px] pt-[50px]">
    <div v-if="product" class="flex flex-col gap-[40px]">
      <!-- nav stroke -->
      <div class="flex items-center gap-[18px]">
        <NuxtLink
          to="/"
          class="text-[16px] text-gray01 font-normal font-sans hover:text-black01 transition-colors duration-300">
          Главная
        </NuxtLink>
        <Icon icon="meteor-icons:chevron-right" width="16" height="16" :style="{ color: '#9DA1AA' }" />
        <p class="text-[16px] text-gray01 font-normal font-sans">Каталог</p>
        <Icon icon="meteor-icons:chevron-right" width="16" height="16" :style="{ color: '#9DA1AA' }" />
        <p class="text-[16px] text-gray01 font-normal font-sans">Классические памятники</p>
        <Icon icon="meteor-icons:chevron-right" width="16" height="16" :style="{ color: '#9DA1AA' }" />
        <p class="text-[16px] text-gray01 font-normal font-sans">Памятник прямоугольный вертикальный</p>
        <Icon icon="meteor-icons:chevron-right" width="16" height="16" :style="{ color: '#9DA1AA' }" />
        <p class="text-[16px] text-black01 font-normal font-sans">Конструктор</p>
      </div>

      <div class="flex justify-between items-center">
        <!-- left -->
        <div class="flex flex-col-reverse items-center justify-center gap-[40px]">
          <!-- img -->
          <div class="flex sm:flex-row flex-col-reverse gap-[24px]">
            <div class="sm:w-[472px] sm:h-[472px] w-[342px] h-[342px] bg-gray01/15 rounded-[8px]">
              <img :src="selectedImage" class="w-full h-full object-cover rounded-[8px]" alt="" />
            </div>
          </div>

          <!-- description -->
          <div class="flex flex-col gap-[32px]">
            <div class="flex flex-col gap-[24px]">
              <div class="flex flex-col gap-[10px]">
                <span class="text-[18px] text-gray01 font-medium">Артикул: 1234567890</span>
                <h1 class="text-[34px] text-black01 font-semibold">{{ product.name }}</h1>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex flex-col">
                  <h2 class="text-[26px] font-semibold text-orange01">{{ product.price }}</h2>

                  <span class="text-[16px] font-medium text-gray01/60">
                    * точную цену комплекта рассчитывает менеджер
                  </span>
                </div>
                <!-- icon3 -->
                <div
                  class="flex py-[8px] px-[15px] border rounded-[6px] hover:bg-pink01 transition-colors duration-300 cursor-pointer group"
                  @mouseenter="hoveredIcon3 = true"
                  @mouseleave="hoveredIcon3 = false">
                  <img
                    class="cursor-pointer"
                    :src="hoveredIcon3 ? '/images/home/catalog/icon3Hover.svg' : '/images/home/catalog/icon3.svg'"
                    alt="profIcon" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- right -->
        <div class="w-1/2 flex flex-col gap-[16px]">
          <!-- 1 -->
          <div class="flex items-center justify-between w-full border py-[16px] px-[24px] rounded-[8px]">
            <div class="flex flex-col gap-[6px]">
              <p class="text-[18px] text-gray01 font-normal">Стела</p>
              <h2 class="text-[20px] text-black01 font-semibold">Размер 80*40*8 см</h2>
            </div>
            <Icon icon="meteor-icons:chevron-down" width="24" height="24" :style="{ color: '#9DA1AA' }" />
          </div>

          <!-- 2 -->
          <div class="flex items-center justify-between w-full border py-[16px] px-[24px] rounded-[8px]">
            <div class="flex flex-col gap-[6px]">
              <p class="text-[18px] text-gray01 font-normal">Постамент</p>
              <h2 class="text-[20px] text-black01 font-semibold">Размер 50*20*10 см</h2>
            </div>
            <Icon icon="meteor-icons:chevron-down" width="24" height="24" :style="{ color: '#9DA1AA' }" />
          </div>

          <!-- 3 -->
          <div class="flex items-center justify-between w-full border py-[16px] px-[24px] rounded-[8px]">
            <div class="flex flex-col gap-[6px]">
              <p class="text-[18px] text-gray01 font-normal">Цветник / Надгробная плита</p>
              <h2 class="text-[20px] text-black01 font-semibold">Цветник: 80*50/8*8 см</h2>
            </div>
            <Icon icon="meteor-icons:chevron-down" width="24" height="24" :style="{ color: '#9DA1AA' }" />
          </div>

          <!-- 4 -->
          <div class="flex items-center justify-between w-full border py-[16px] px-[24px] rounded-[8px]">
            <div class="flex flex-col gap-[6px]">
              <p class="text-[18px] text-gray01 font-normal">Материал</p>
              <h2 class="text-[20px] text-black01 font-semibold">Карельский гранит</h2>
            </div>
            <Icon icon="meteor-icons:chevron-down" width="24" height="24" :style="{ color: '#9DA1AA' }" />
          </div>

          <!-- btn -->
          <div class="flex gap-[12px]">
            <button
              class="block bg-orange01/10 py-[12px] px-[16px] rounded-[6px]  text-[18px] font-medium text-white">
              <Icon icon="tabler:arrow-narrow-left" class="text-orange01" width="32" height="32" />
            </button>
            <button
              class="block bg-orange01/10 py-[12px] px-[16px] rounded-[6px]  text-[18px] font-medium text-orange01">
              Заказать
            </button>
            <button
              class="block bg-orange01 py-[12px] px-[16px] rounded-[6px]  text-[18px] font-medium text-white">
              Оформить заказ
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Товар не найден</p>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useRoute } from 'vue-router'
  import catalogItems from '~/composables/home/catalogItems/catalogItems'

  const route = useRoute()
  const productId = route.params.id

  const product = catalogItems.find(item => String(item.id) === String(productId))

  // Для наведения (по одному флагу для каждой иконки)
  const hoveredIcon1 = ref(false)
  const hoveredIcon2 = ref(false)
  const hoveredIcon3 = ref(false)
</script>

<template>
  <section class="container mx-auto px-[16px] pt-[50px]">
    <div v-if="product">
      <div class="flex items-center justify-center">
        <img :src="product.imgPath" class="w-[472px]" alt="" />
        <div class="flex flex-col gap-[32px]">
          <div class="flex flex-col gap-[24px]">
            <div class="flex flex-col gap-[10px]">
              <span class="text-[18px] text-gray01 font-medium">Артикул: 1234567890</span>
              <h1 class="text-[34px] text-black01 font-semibold">{{ product.name }}</h1>
            </div>
            <div class="flex flex-col">
              <h2 class="text-[26px] font-semibold text-orange01">{{ product.price }}</h2>
              <div class="flex-between">
                <div class="flex gap-[12px]">
                  <h2 class="text-[18px] font-normal text-gray01 line-through">{{ product.oldPrice }}</h2>
                  <div class="bg-orange01 rounded-[50px] py-[2px] px-[6px]">
                    <span class="text-[16px] text-white font-semibold">{{ product.sale }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-[24px]">
            <span class="text-[18px] text-gray01 font-normal">На складе: 12 шт</span>

            <div class="flex gap-[8px]">
              <!-- icon1 -->
              <div
                class="flex border py-[10px] md:px-[37px] px-[16px] gap-[5px] rounded-[6px] hover:bg-pink01 transition-colors duration-300 cursor-pointer group"
                @mouseenter="hoveredIcon1 = true"
                @mouseleave="hoveredIcon1 = false">
                <img
                  class="cursor-pointer"
                  :src="hoveredIcon1 ? '/images/home/catalog/icon1Hover.svg' : '/images/home/catalog/icon1.svg'"
                  alt="profIcon" />
                <span
                  class="text-[16px] md:block hidden text-black01/70 font-bold group-hover:text-orange01 transition-colors duration-300">
                  3D
                </span>
              </div>

              <!-- btn -->
              <button
                class="bg-orange01 py-[12px] px-[16px] rounded-[6px] shadow-[0_4px_6px_rgba(236,99,27,0.5)] text-[18px] font-medium text-white">
               Оформить заказ
              </button>

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
            <span class="text-[16px] text-gray01 font-medium">
              Цена указана за минимальный комплект: стела, постамент и цветник
              <br />
              В эту цену не входит оформление (портрет, ФИО, памятные даты)
            </span>
            <span class="text-[16px] font-medium text-gray01/60">
              * На изображении представлен возможный вариант комплектации памятника
            </span>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Товар не найден</p>
    </div>
  </section>
</template>

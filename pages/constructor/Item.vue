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

  const isOpenStela = ref(false)
  
  function toggleStela() {
  isOpenStela.value = !isOpenStela.value
}
  const isOpenPost = ref(false)
  
  function togglePost() {
  isOpenPost.value = !isOpenPost.value
}
  const isOpenPlit = ref(false)
  
  function togglePlit() {
  isOpenPlit.value = !isOpenPlit.value
}

</script>

<template>
  <section class="container mx-auto px-[16px] pt-[50px]">
    <div v-if="product" class="flex flex-col gap-[40px]">
      <!-- nav stroke -->
      <div class="md:flex hidden items-center gap-[18px] ">
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

      <div class="flex flex-col lg:flex-row justify-between gap-[32px] items-center ">
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
        <div class="lg:w-1/2 w-full grid lg:grid-cols-1 md:grid-cols-2 gap-[16px]">
          <!-- 1 -->
          <div @click="toggleStela" class="flex items-center justify-between w-full border py-[16px] px-[24px] rounded-[8px]">
  <div class="flex flex-col gap-[6px]">
    <p class="text-[18px] text-gray01 font-normal">Стела</p>
    <h2 class="text-[20px] text-black01 font-semibold">Размер 80*40*8 см</h2>
  </div>
  <Icon icon="meteor-icons:chevron-down" width="24" height="24" :style="{ color: '#9DA1AA' }" />
</div>

<!-- 1 - 2 -->
<div v-if="isOpenStela" class="w-full border border-t-0 px-[34px] pb-[16px]">
  <p class="text-[18px] text-gray01 font-medium">Выберите размер</p>
  <div class="flex gap-[8px] mt-[8px]">
    <div class="bg-orange01/[6%] rounded-[8px] py-[12px] px-[16px]"><span class="text-[18px] text-black01 font-semibold">80*40*8 см</span></div>
    <div class="bg-orange01/[6%] rounded-[8px] py-[12px] px-[16px]"><span class="text-[18px] text-black01 font-semibold">90*45*8 см</span></div>
    <div class="bg-orange01/[6%] rounded-[8px] py-[12px] px-[16px]"><span class="text-[18px] text-black01 font-semibold">100*50*8 см</span></div>
  </div>
  <p class="text-gray-500 mt-[8px] text-[14px] leading-[1.4]">
    * При выборе размеров, параметры стелы расчитываются как <br />высота * ширина * толщина
  </p>
</div>


          <!-- 2 -->
          <div @click="togglePost" class="flex items-center justify-between w-full border py-[16px] px-[24px] rounded-[8px]">
  <div class="flex flex-col gap-[6px]">
    <p class="text-[18px] text-gray01 font-normal">Постамент</p>
    <h2 class="text-[20px] text-black01 font-semibold">Размер 50*20*10 см</h2>
  </div>
  <Icon icon="meteor-icons:chevron-down" width="24" height="24" :style="{ color: '#9DA1AA' }" />
</div>

<!-- 2 - 2 -->
<div v-if="isOpenPost" class="w-full border border-t-0 px-[34px] pb-[16px]">
  <p class="text-[18px] text-gray01 font-medium">Выберите размер</p>
  <div class="flex gap-[8px] mt-[8px]">
    <div class="bg-orange01/[6%] rounded-[8px] py-[12px] px-[16px]"><span class="text-[18px] text-black01 font-semibold">50*30*10 см</span></div>
    <div class="bg-orange01/[6%] rounded-[8px] py-[12px] px-[16px]"><span class="text-[18px] text-black01 font-semibold">60*45*15 см</span></div>
    <div class="bg-orange01/[6%] rounded-[8px] py-[12px] px-[16px]"><span class="text-[18px] text-black01 font-semibold">80*60*20 см</span></div>
  </div>
  <p class="text-gray-500 mt-[8px] text-[14px] leading-[1.4]">
    * При выборе размеров, параметры стелы расчитываются как <br />высота * ширина * толщина
  </p>
</div>



          <!-- 3 -->
          <div @click="togglePlit" class="flex items-center justify-between w-full border py-[16px] px-[24px] rounded-[8px]">
  <div class="flex flex-col gap-[6px]">
    <p class="text-[18px] text-gray01 font-normal">Цветник / Надгробная плита</p>
    <h2 class="text-[20px] text-black01 font-semibold">Цветник: 80*50/8*8 см</h2>
  </div>
  <Icon icon="meteor-icons:chevron-down" width="24" height="24" :style="{ color: '#9DA1AA' }" />
</div>

<!-- 3 - 2 -->
<div v-if="isOpenPlit" class="w-full border border-t-0 px-[34px] pb-[16px]">
  <p class="text-[18px] text-gray01 font-medium">Выберите размер</p>
  <div class="flex gap-[8px] mt-[8px]">
    <div class="bg-orange01/[6%] rounded-[8px] py-[12px] px-[16px]"><span class="text-[18px] text-black01 font-semibold">50*30*10 см</span></div>
    <div class="bg-orange01/[6%] rounded-[8px] py-[12px] px-[16px]"><span class="text-[18px] text-black01 font-semibold">60*45*15 см</span></div>
    <div class="bg-orange01/[6%] rounded-[8px] py-[12px] px-[16px]"><span class="text-[18px] text-black01 font-semibold">80*60*20 см</span></div>
  </div>
  <p class="text-gray-500 mt-[8px] text-[14px] leading-[1.4]">
    * При выборе размеров, параметры стелы расчитываются как <br />высота * ширина * толщина
  </p>
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
          <div class="flex lg:col-span-1 md:col-span-2 gap-[12px]">
            <button
              class="block bg-orange01/10 py-[12px] px-[16px] rounded-[6px]  text-[18px] font-medium text-white">
              <Icon icon="tabler:arrow-narrow-left" class="text-orange01" width="32" height="32" />
            </button>
            <button
              class="sm:block hidden bg-orange01/10 py-[12px] px-[16px] rounded-[6px]  text-[18px] font-medium text-orange01">
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

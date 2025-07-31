<script setup lang="ts">
  import { Icon } from '@iconify/vue'
  import popularItems from '~/composables/home/popularItems/popularItems'
</script>

<template>
  <section class="container mx-auto px-[16px] pt-[40px] pb-[90px]">
    <div class="flex xl:flex-row flex-col gap-[40px]">
      <!-- left -->
      <div class="flex flex-col gap-[40px] w-[95%]">
        <!-- title + click -->
        <div class="flex sm:flex-row flex-col gap-[20px] items-center justify-between ">
          <div class="flex items-center gap-[24px]">
            <h1 class="sm:text-[30px] text-[20px] text-black01 font-sans font-medium sm:text-end">Популярные товары</h1>
            <div class="flex-center">
              <p class="sm:text-[18px] text-gray01 font-sans font-normal">Все товары</p>
              <Icon icon="iconoir:nav-arrow-right" class="text-gray01" width="24" height="24" />
            </div>
          </div>

          <div class="flex gap-[12px]">
            <div class="bg-orange01/10 rounded-[6px] p-[12px]">
              <Icon icon="iconoir:nav-arrow-left" class="text-orange01" width="24" height="24" />
            </div>
            <div class="bg-orange01/10 rounded-[6px] p-[12px]">
              <Icon icon="iconoir:nav-arrow-right" class="text-orange01" width="24" height="24" />
            </div>
          </div>
        </div>

        <!-- card -->
        <div class="grid md:grid-cols-3 sm:grid-cols-2 gap-[35px] items-stretch h-full">
          <div
            v-for="(popularItem, idx) in popularItems"
            :key="idx"
            :class="[
              'flex',
              'flex-col',
              'h-full',
              'gap-[16px]',
              'group/card',
              'cursor-pointer',
              idx === 2 ? 'hidden md:block' : '',
              idx === 1 ? 'hidden sm:block' : '',
            ]">
            <div class="w-full bg-orange01/[6%] h-full relative flex items-center justify-center rounded-[6px]">
              <img :src="popularItem.imgPath" alt="" class="w-[60%] h-[60%] object-contain" />
              <div class="absolute top-5 right-5 rounded-[6px] bg-orange01/[12%] p-[12px]">
                <img src="/images/home/popularItem/like.svg" class=" " alt="" />
              </div>
            </div>
            <div>
              <div>
                <h2 class="lg:text-[22px] text-[16px] text-black01 font-semibold 2xl:w-[80%]">
                  {{ popularItem.title }}
                </h2>
              </div>

              <div class="flex flex-col">
                <h2 class="lg:text-[26px] text-[20px] font-semibold text-orange01">{{ popularItem.price }}</h2>
                <div class="flex-between">
                  <div class="flex gap-[12px]">
                    <h2 class="lg:text-[18px] text-[16px] font-normal text-gray01 line-through">
                      {{ popularItem.oldPrice }}
                    </h2>
                    <div class="bg-orange01 rounded-[50px] py-[2px] px-[6px]">
                      <span class="text-[16px] text-white font-semibold">{{ popularItem.sale }}</span>
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- rigth -->
      <div class="relative overflow-hidden rounded-[12px] p-[32px] flex flex-col gap-[16px]">
        <img src="/images/home/popularItem/bg.jpg" class="absolute bottom-0 left-0" alt="" />
        <div
          class="absolute rounded-l-[8px] z-10 inset-0 bg-gradient-to-b from-white01 via-white01 to-transparent"></div>
        <div
          class="absolute rounded-l-[8px] z-10 inset-0 bg-gradient-to-b from-white01 via-white01 to-transparent"></div>
        <div
          class="absolute rounded-l-[8px] z-10 inset-0 bg-gradient-to-b from-white01 via-white01 to-transparent"></div>
        <div class="relative z-40 flex flex-col gap-[12px]">
          <h2 class="text-[26px] text-black01 font-semibold">Не отыскали нужный товар?</h2>
          <p class="text-[20px] text-gray01 font-medium">Свяжитесь с нами и узнайте о его наличии</p>
        </div>
        <div class="flex flex-col relative z-40 gap-[16px]">
          <input
            type="text"
            name="name"
            class="py-[12px] px-[16px] border rounded-[6px]"
            id=""
            placeholder="Ваше имя" />
          <input
            type="tel"
            name=""
            id=""
            class="py-[12px] px-[16px] border rounded-[6px]"
            placeholder="Номер телефона" />
          <button class="bg-orange01 py-[12px] px-[16px] rounded-[6px] text-[18px] text-white font-medium">
            Оставить заявку
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

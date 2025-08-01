<script setup lang="ts">
  import { Icon } from '@iconify/vue'
  import catalogAllItems from '~/composables/catalogAllItems/catalogAllItems'
</script>

<template>
  <section class="container mx-auto px-[16px]">
    <div class="flex flex-col gap-[40px] pt-[50px] pb-[160px]">
      <!-- nav stroke -->
      <div class="flex items-center gap-[18px]">
        <p class="text-[16px] text-gray01 font-normal font-sans">Главная</p>
        <Icon icon="meteor-icons:chevron-right" width="16" height="16" :style="{ color: '#9DA1AA' }" />
        <p class="text-[16px] text-black01 font-normal font-sans">Каталог</p>
      </div>
      <!-- content -->
      <div class="flex flex-col gap-[32px]">
        <h1 class="relative text-[30px] text-black01 font-medium font-sans">Каталог товаров</h1>
        <div class="relative grid grid-cols-2 gap-[32px]">
          <div v-for="(catalogAllItem, idx) in catalogAllItems" :key="idx" :class="[idx === 0 ? 'col-span-2' : '']">
            <div class="relative overflow-hidden z-40">
              <div
                class="relative overflow-hidden bg-white01 rounded-[8px] py-[24px] px-[32px] flex flex-col gap-[24px]">
                <div class="flex flex-col gap-[8px]">
                  <h1 class="text-[26px] text-black01 font-semibold">{{ catalogAllItem.title }}</h1>
                  <p class="text-[20px] text-gray01 font-medium">{{ catalogAllItem.text }}</p>
                </div>

                <!-- container1 -->
                <div v-if="catalogAllItem.containers1" class="relative z-40 flex flex-col gap-[12px]">
                  <div v-for="(container, i) in catalogAllItem.containers1" :key="i" class="flex gap-[24px]">
                    <div class="p-[12px] bg-orange01/15 rounded-[8px]">
                      <p class="text-[18px] text-orange01 font-medium font-sans">{{ container.text1 }}</p>
                    </div>
                    <div class="p-[12px] bg-orange01/15 rounded-[8px]">
                      <p class="text-[18px] text-orange01 font-medium font-sans">{{ container.text2 }}</p>
                    </div>
                    <div class="p-[12px] bg-orange01/15 rounded-[8px]">
                      <p class="text-[18px] text-orange01 font-medium font-sans">{{ container.text3 }}</p>
                    </div>
                  </div>
                  <div v-for="(container, i) in catalogAllItem.containers1" :key="i" class="flex gap-[24px]">
                    <div class="p-[12px] bg-orange01/15 rounded-[8px]">
                      <p class="text-[18px] text-orange01 font-medium font-sans">{{ container.text4 }}</p>
                    </div>
                    <div class="p-[12px] bg-orange01/15 rounded-[8px]">
                      <p class="text-[18px] text-orange01 font-medium font-sans">{{ container.text5 }}</p>
                    </div>
                    <div class="p-[12px] bg-orange01/15 rounded-[8px]">
                      <p class="text-[18px] text-orange01 font-medium font-sans">{{ container.text6 }}</p>
                    </div>
                    <div class="p-[12px] bg-orange01/15 rounded-[8px]">
                      <p class="text-[18px] text-orange01 font-medium font-sans">{{ container.text7 }}</p>
                    </div>
                  </div>
                  <div v-for="(container, i) in catalogAllItem.containers1" :key="i" class="flex">
                    <div class="p-[12px] bg-orange01/15 rounded-[8px]">
                      <p class="text-[18px] text-orange01 font-medium font-sans">{{ container.text8 }}</p>
                    </div>
                  </div>
                </div>

                <!-- container2 -->
                <div v-if="catalogAllItem.containers2" class="relative z-40  flex flex-col gap-[12px]">
                  <div v-for="(container, i) in catalogAllItem.containers2" :key="i" class="flex gap-[24px]">
                    <div class="p-[12px] bg-orange01/15 rounded-[8px]">
                      <p class="text-[18px] text-orange01 font-medium font-sans">{{ container.text1 }}</p>
                    </div>
                    <div class="p-[12px] bg-orange01/15 rounded-[8px]">
                      <p class="text-[18px] text-orange01 font-medium font-sans">{{ container.text2 }}</p>
                    </div>
                  </div>
                  <div v-for="(container, i) in catalogAllItem.containers2" :key="i" class="flex gap-[24px]">
                    <div class="p-[12px] bg-orange01/15 rounded-[8px]">
                      <p class="text-[18px] text-orange01 font-medium font-sans">{{ container.text3 }}</p>
                    </div>
                    <div class="p-[12px] bg-orange01/15 rounded-[8px]">
                      <p class="text-[18px] text-orange01 font-medium font-sans">{{ container.text4 }}</p>
                    </div>
                  </div>
                </div>

                <!-- container3 -->
                <div v-if="catalogAllItem.containers3" class="relative z-40 flex flex-col gap-[12px]">
                  <div v-for="(container, i) in catalogAllItem.containers3" :key="i" class="flex gap-[24px]">
                    <div class="p-[12px] bg-orange01/15 rounded-[8px]">
                      <p class="text-[18px] text-orange01 font-medium font-sans">{{ container.text1 }}</p>
                    </div>
                    <div class="p-[12px] bg-orange01/15 rounded-[8px]">
                      <p class="text-[18px] text-orange01 font-medium font-sans">{{ container.text2 }}</p>
                    </div>
                  </div>
                  <div v-for="(container, i) in catalogAllItem.containers3" :key="i" class="flex gap-[24px]">
                    <div class="p-[12px] bg-orange01/15 rounded-[8px]">
                      <p class="text-[18px] text-orange01 font-medium font-sans">{{ container.text3 }}</p>
                    </div>
                  </div>
                </div>

                <!-- container4 -->
                <div v-if="catalogAllItem.containers4" class="relative z-40 flex flex-col gap-[12px]">
                  <div v-for="(container, i) in catalogAllItem.containers4" :key="i" class="flex gap-[24px]">
                    <div class="p-[12px] bg-orange01/15 rounded-[8px]">
                      <p class="text-[18px] text-orange01 font-medium font-sans">{{ container.text1 }}</p>
                    </div>
                    <div class="p-[12px] bg-orange01/15 rounded-[8px]">
                      <p class="text-[18px] text-orange01 font-medium font-sans">{{ container.text2 }}</p>
                    </div>
                  </div>
                  <div v-for="(container, i) in catalogAllItem.containers4" :key="i" class="flex gap-[24px]">
                    <div class="p-[12px] bg-orange01/15 rounded-[8px]">
                      <p class="text-[18px] text-orange01 font-medium font-sans">{{ container.text3 }}</p>
                    </div>
                  </div>
                </div>

                <!-- container5 -->
                <div v-if="catalogAllItem.containers5" class="relative z-40 flex flex-col gap-[12px]">
                  <div v-for="(container, i) in catalogAllItem.containers5" :key="i" class="flex gap-[24px]">
                    <div class="p-[12px] bg-orange01/15 rounded-[8px]">
                      <p class="text-[18px] text-orange01 font-medium font-sans">{{ container.text1 }}</p>
                    </div>
                    <div class="p-[12px] bg-orange01/15 rounded-[8px]">
                      <p class="text-[18px] text-orange01 font-medium font-sans">{{ container.text2 }}</p>
                    </div>
                  </div>
                  <div v-for="(container, i) in catalogAllItem.containers5" :key="i" class="flex gap-[24px]">
                    <div class="p-[12px] bg-orange01/15 rounded-[8px]">
                      <p class="text-[18px] text-orange01 font-medium font-sans">{{ container.text3 }}</p>
                    </div>
                    <div class="p-[12px] bg-orange01/15 rounded-[8px]">
                      <p class="text-[18px] text-orange01 font-medium font-sans">{{ container.text4 }}</p>
                    </div>
                  </div>
                </div>

                <!-- container6 -->
                <div v-if="catalogAllItem.containers6" class="relative z-40 flex flex-col gap-[12px]">
                  <div v-for="(container, i) in catalogAllItem.containers6" :key="i" class="flex gap-[24px]">
                    <div class="p-[12px] bg-orange01/15 rounded-[8px]">
                      <p class="text-[18px] text-orange01 font-medium font-sans">{{ container.text1 }}</p>
                    </div>
                    <div class="p-[12px] bg-orange01/15 rounded-[8px]">
                      <p class="text-[18px] text-orange01 font-medium font-sans">{{ container.text2 }}</p>
                    </div>
                  </div>
                  <div v-for="(container, i) in catalogAllItem.containers6" :key="i" class="flex gap-[24px]">
                    <div class="p-[12px] bg-orange01/15 rounded-[8px]">
                      <p class="text-[18px] text-orange01 font-medium font-sans">{{ container.text3 }}</p>
                    </div>
                  </div>
                </div>

                <!-- container7 -->
                <div v-if="catalogAllItem.containers7" class="relative z-40 flex flex-col gap-[12px]">
                  <div v-for="(container, i) in catalogAllItem.containers7" :key="i" class="flex gap-[24px]">
                    <div class="p-[12px] bg-orange01/15 rounded-[8px]">
                      <p class="text-[18px] text-orange01 font-medium font-sans">{{ container.text1 }}</p>
                    </div>
                    <div class="p-[12px] bg-orange01/15 rounded-[8px]">
                      <p class="text-[18px] text-orange01 font-medium font-sans">{{ container.text2 }}</p>
                    </div>
                  </div>
                  <div v-for="(container, i) in catalogAllItem.containers7" :key="i" class="flex gap-[24px]">
                    <div class="p-[12px] bg-orange01/15 rounded-[8px]">
                      <p class="text-[18px] text-orange01 font-medium font-sans">{{ container.text3 }}</p>
                    </div>
                  </div>
                </div>

                <!-- container8 -->
                <div v-if="catalogAllItem.containers8" class="relative z-40 flex flex-col gap-[12px]">
                  <div v-for="(container, i) in catalogAllItem.containers8" :key="i" class="flex gap-[24px]">
                    <div class="p-[12px] bg-orange01/15 rounded-[8px]">
                      <p class="text-[18px] text-orange01 font-medium font-sans">{{ container.text1 }}</p>
                    </div>
                  </div>
                  <div v-for="(container, i) in catalogAllItem.containers8" :key="i" class="flex gap-[24px]">
                    <div class="p-[12px] bg-orange01/15 rounded-[8px]">
                      <p class="text-[18px] text-orange01 font-medium font-sans">{{ container.text2 }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <img
                :src="catalogAllItem.imgPath"
                :class="[
                  'absolute',
                  'z-0',
                  '-bottom-20',
                  '-right-16',
                  idx === 0 ? 'w-[40%]' : 'w-[30%]',
                  idx === 1 ? 'w-[40%]' : 'w-[30%]',
                  idx === 2 ? 'w-[30%]' : 'w-[30%]',
                  idx === 3 ? 'w-[50%]' : 'w-[30%]',
                  idx === 4 ? 'w-[60%] -right-40 -bottom-8' : 'w-[30%] -right-16 -bottom-20',
                  idx === 5 ? 'w-[40%] -right-5 rotate-12 -bottom-8' : 'w-[30%] rotate-0 -right-16 -bottom-20',
                  idx === 6 ? 'w-[60%] -right-32 -bottom-10' : 'w-[30%] -right-16 -bottom-20',
                  idx === 7 ? 'w-[30%] -right-5 -bottom-10' : 'w-[30%] -right-16 -bottom-20',
                ]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

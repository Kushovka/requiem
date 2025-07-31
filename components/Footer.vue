<script setup lang="ts">
  import footerItems from '~/composables/footerItems/footerItems'
</script>

<template>
  <footer class="border bg-white01">
    <div class="container mx-auto px-[16px] py-[56px]">
      <div class="flex flex-col lg:flex-row justify-between">
        <div v-for="(footerItem, idx) in footerItems" :key="idx" class="flex flex-col gap-[24px]">
          <!-- Title -->
          <span class="text-[22px] text-orange01 font-semibold">
            {{ footerItem.title }}
          </span>

          <!--containers1 и containers2 -->
          <div
            v-if="footerItem.containers1 || footerItem.containers2"
            class="flex gap-[24px] border-t-[2px] border-orange01">
            <div v-if="footerItem.containers1" class="flex flex-col gap-[12px] text-[18px] text-gray01 font-medium">
              <div class="flex flex-col py-[24px] gap-[12px]" v-for="(container, i) in footerItem.containers1" :key="i">
                <p>{{ container.text1 }}</p>
                <p>{{ container.text2 }}</p>
                <p>{{ container.text3 }}</p>
              </div>
            </div>

            <div v-if="footerItem.containers2" class="flex flex-col gap-[12px] text-[18px] text-gray01 font-medium">
              <div class="flex flex-col py-[24px] gap-[12px]" v-for="(container, i) in footerItem.containers2" :key="i">
                <p>{{ container.text1 }}</p>
                <p>{{ container.text2 }}</p>
              </div>
            </div>
          </div>

          <!-- containers3 и containers4 -->
          <div
            v-if="footerItem.containers3 || footerItem.containers4"
            class="flex gap-[24px] border-t-[2px] border-orange01">
            <div v-if="footerItem.containers3" class="flex flex-col gap-[12px] text-[18px] text-gray01 font-medium">
              <div class="flex flex-col py-[24px] gap-[12px]" v-for="(container, i) in footerItem.containers3" :key="i">
                <p>{{ container.text1 }}</p>
                <p>{{ container.text2 }}</p>
                <p>{{ container.text3 }}</p>
                <p>{{ container.text4 }}</p>
              </div>
            </div>

            <div v-if="footerItem.containers4" class="flex flex-col gap-[12px] text-[18px] text-gray01 font-medium">
              <div class="flex flex-col py-[24px] gap-[12px]" v-for="(container, i) in footerItem.containers4" :key="i">
                <p>{{ container.text1 }}</p>
                <p>{{ container.text2 }}</p>
                <p>{{ container.text3 }}</p>
              </div>
            </div>
          </div>

          <!-- containers5 -->
          <div
            v-if="footerItem.containers5"
            class="flex flex-col gap-[12px] text-[18px] text-gray01 font-medium border-t-[2px] border-orange01">
            <div v-for="(container, i) in footerItem.containers5" :key="i" class="flex flex-col py-[24px] gap-[12px] pr-[70px]">
              <div class="flex items-center gap-[8px]">
                <img :src="container.icon1" alt="" />
                <p>{{ container.text1 }}</p>
              </div>
              <div class="flex items-center gap-[8px]">
                <img :src="container.icon2" alt="" />
                <p>{{ container.text2 }}</p>
              </div>
              <div class="flex items-center gap-[8px]">
                <img :src="container.icon3" alt="" />
                <p>{{ container.text3 }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

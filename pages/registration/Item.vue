<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import { Icon } from "@iconify/vue";
import catalogItems from "~/composables/home/catalogItems/catalogItems";
import registrationItems from "~/composables/registration/registrationItem";
import registrationGroups from "~/composables/registration/registrationItem";

const route = useRoute();

const productId = route.params.id;

const product = catalogItems.find(
  (item) => String(item.id) === String(productId)
);
const selectedImage = ref(product?.images?.[0] ?? product?.imgPath ?? "");

const hoveredIcon1 = ref(false);
const hoveredIcon3 = ref(false);

const isOpenStela = ref(false);

function toggleStela() {
  isOpenStela.value = !isOpenStela.value;
}
const isOpenPost = ref(false);

function togglePost() {
  isOpenPost.value = !isOpenPost.value;
}
const isOpenPlit = ref(false);

function togglePlit() {
  isOpenPlit.value = !isOpenPlit.value;
}
const isOpenMaterial = ref(false);

function toggleMaterial() {
  isOpenMaterial.value = !isOpenMaterial.value;
}
</script>

<template>
  <section class="container mx-auto px-[16px] pt-[50px]">
    <div v-if="product" class="flex flex-col gap-[40px]">
      <!-- nav stroke -->
      <div class="md:flex hidden items-center gap-[18px]">
        <NuxtLink
          to="/"
          class="text-[16px] text-gray01 font-normal font-sans hover:text-black01 transition-colors duration-300"
        >
          Главная
        </NuxtLink>
        <Icon
          icon="meteor-icons:chevron-right"
          width="16"
          height="16"
          :style="{ color: '#9DA1AA' }"
        />
        <p class="text-[16px] text-gray01 font-normal font-sans">Каталог</p>
        <Icon
          icon="meteor-icons:chevron-right"
          width="16"
          height="16"
          :style="{ color: '#9DA1AA' }"
        />
        <p class="text-[16px] text-gray01 font-normal font-sans">
          Классические памятники
        </p>
        <Icon
          icon="meteor-icons:chevron-right"
          width="16"
          height="16"
          :style="{ color: '#9DA1AA' }"
        />
        <p class="text-[16px] text-gray01 font-normal font-sans">
          Памятник прямоугольный вертикальный
        </p>
        <Icon
          icon="meteor-icons:chevron-right"
          width="16"
          height="16"
          :style="{ color: '#9DA1AA' }"
        />
        <p class="text-[16px] text-gray01 font-normal font-sans">Конструктор</p>
        <Icon
          icon="meteor-icons:chevron-right"
          width="16"
          height="16"
          :style="{ color: '#9DA1AA' }"
        />
        <p class="text-[16px] text-black01 font-normal font-sans">Оформление</p>
      </div>

      <div class="flex flex-col lg:flex-row w-full gap-[32px] items-center">
        <!-- left -->
        <div class="flex gap-[24px]">
          <!-- images -->
          <div class="flex flex-col divide-y divide-[#D9D9D9]">
            <div
              v-for="(group, idx) in registrationGroups"
              :key="idx"
              class="flex flex-col gap-[12px] px-[12px] py-[12px]"
            >
              <div class="flex flex-col gap-[10px]">
                <div
                  v-for="(icon, iconIdx) in group"
                  :key="iconIdx"
                  class="bg-white01 p-[10px] rounded-[8px] flex justify-center items-center"
                >
                  <img :src="icon" alt="" class="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
          <!-- bg -->
          <div
            class="bg-black01 h-[750px] w-[375px] border-[32px] border-gray01"
          ></div>
        </div>

        <!-- right -->
        <div>
          <!-- 1 -->
          <div
            class="flex items-center justify-between w-[880px] border py-[16px] px-[24px] rounded-[8px] cursor-pointer"
          >
            <div class="flex flex-col gap-[6px]">
              <p class="text-[18px] text-gray01 font-normal">
                Сторона оформления
              </p>
            </div>
            <div>
              <Icon
                icon="meteor-icons:chevron-down"
                width="24"
                height="24"
                :style="{ color: '#9DA1AA' }"
              />
            </div>
          </div>

          <!-- 2 -->
          <div
            class="flex items-center justify-between w-[880px] border py-[16px] px-[24px] rounded-[8px] cursor-pointer"
          >
            <div class="flex flex-col gap-[6px]">
              <p class="text-[18px] text-gray01 font-normal">Стела</p>
              <h2 class="text-[20px] text-black01 font-semibold">
                Размер 80*40*8 см
              </h2>
            </div>
            <div>
              <Icon
                icon="meteor-icons:chevron-down"
                width="24"
                height="24"
                :style="{ color: '#9DA1AA' }"
              />
            </div>
          </div>

          <!-- 3 -->
          <div
            class="flex items-center justify-between w-[880px] border py-[16px] px-[24px] rounded-[8px] cursor-pointer"
          >
            <div class="flex flex-col gap-[6px]">
              <p class="text-[18px] text-gray01 font-normal">Стела</p>
              <h2 class="text-[20px] text-black01 font-semibold">
                Размер 80*40*8 см
              </h2>
            </div>
            <div>
              <Icon
                icon="meteor-icons:chevron-down"
                width="24"
                height="24"
                :style="{ color: '#9DA1AA' }"
              />
            </div>
          </div>

          <!-- 4 -->
          <div
            class="flex items-center justify-between w-[880px] border py-[16px] px-[24px] rounded-[8px] cursor-pointer"
          >
            <div class="flex flex-col gap-[6px]">
              <p class="text-[18px] text-gray01 font-normal">Стела</p>
              <h2 class="text-[20px] text-black01 font-semibold">
                Размер 80*40*8 см
              </h2>
            </div>
            <div>
              <Icon
                icon="meteor-icons:chevron-down"
                width="24"
                height="24"
                :style="{ color: '#9DA1AA' }"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Товар не найден</p>
    </div>
  </section>
</template>

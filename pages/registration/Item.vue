<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import { Icon } from "@iconify/vue";
import catalogItems from "~/composables/home/catalogItems/catalogItems";
import registrationGroups from "~/composables/registration/registrationItem";

const route = useRoute();

const productId = route.params.id;

const product = catalogItems.find(
  (item) => String(item.id) === String(productId)
);
const selectedImage = ref(product?.images?.[0] ?? product?.imgPath ?? "");

const hoveredIcon1 = ref(false);
const hoveredIcon3 = ref(false);

const isOpenDecoration = ref(false);
function toggleDecoration() {
  isOpenDecoration.value = !isOpenDecoration.value;
}

const isOpenPortret = ref(false);
function togglePortret() {
  isOpenPortret.value = !isOpenPortret.value;
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

      <div class="flex flex-col lg:flex-row w-full gap-[32px]">
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
        <div class="flex flex-col gap-[24px]">
          <div class="flex flex-col gap-[16px]">
            <!-- 1 -->
            <div
              @click="toggleDecoration"
              class="flex items-center justify-between w-[880px] border hover:border-orange01/50 transition-all duration-300 py-[16px] px-[24px] rounded-[8px] cursor-pointer"
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
            <!-- 1 - 1 -->
            <div
              v-if="isOpenDecoration"
              class="border border-t-0 rounded-b-[8px] py-[16px] px-[24px] flex flex-col gap-[16px]"
            >
              <div>
                <p class="text-[18px] text-gray01 font-medium">
                  Выберите сторону памятника, которую хотите оформить
                </p>
              </div>
              <div>
                <div>
                  <button
                    class="px-[16px] py-[12px] rounded-[8px] bg-orange01/[6%] text-[18px] text-black01 font-semibold"
                  >
                    Лицевая сторона стелы
                  </button>
                </div>
                <div class="flex items-end justify-end">
                  <button
                    class="px-[12px] py-[6px] rounded-[6px] bg-orange01/10 text-[16px] text-orange01 font-medium"
                  >
                    Далее
                  </button>
                </div>
              </div>
            </div>

            <!-- 2 -->
            <div
              @click="togglePortret"
              class="flex items-center justify-between w-[880px] border py-[16px] px-[24px] rounded-[8px] cursor-pointer"
            >
              <div class="flex flex-col gap-[6px]">
                <p class="text-[18px] text-gray01 font-normal">Портрет</p>
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
            <!-- 2 - 1 -->
            <div
              v-if="isOpenPortret"
              class="border border-t-0 rounded-b-[8px] py-[16px] px-[24px] flex flex-col gap-[16px]"
            >
              <div>
                <p class="text-[18px] text-gray01 font-medium">
                  Загрузите необходимую фотографию
                </p>
              </div>
              <div class="flex flex-col gap-[16px]">
                <div>
                  <button
                    class="flex items-center justify-center gap-[8px] px-[16px] py-[12px] rounded-[8px] bg-orange01 text-[16px] text-white font-medium"
                  >
                    <img
                      src="/public/images/registration/item/icon1.svg"
                      alt=""
                    />
                    Загрузить фото
                  </button>
                </div>
                <div class="flex items-end justify-between">
                  <div class="w-1/2">
                    <p class="text-[16px] text-gray01/60 font-medium">
                      *Обратите внимание, не все изображения могут подойти для
                      нанесения. <br />При оформлении заказа менеджер подробно
                      Вас проконсультирует
                    </p>
                  </div>
                  <div class="flex items-center justify-center gap-[8px]">
                    <button class="p-[10px] rounded-[6px] bg-orange01/10">
                      <Icon
                        icon="material-symbols:arrow-left-alt-rounded"
                        width="18"
                        height="18"
                        class="text-orange01"
                      />
                    </button>
                    <button
                      class="px-[12px] py-[8px] rounded-[6px] bg-orange01/10 text-[16px] text-orange01 font-medium"
                    >
                      Далее
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- 3 -->
            <div
              class="flex items-center justify-between w-[880px] border py-[16px] px-[24px] rounded-[8px] cursor-pointer"
            >
              <div class="flex flex-col gap-[6px]">
                <p class="text-[18px] text-gray01 font-normal">
                  Фамилия Имя Отчество
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

            <!-- 4 -->
            <div
              class="flex items-center justify-between w-[880px] border py-[16px] px-[24px] rounded-[8px] cursor-pointer"
            >
              <div class="flex flex-col gap-[6px]">
                <p class="text-[18px] text-gray01 font-normal">Памятные даты</p>
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

            <!-- 5 -->
            <div
              class="flex items-center justify-between w-[880px] border py-[16px] px-[24px] rounded-[8px] cursor-pointer"
            >
              <div class="flex flex-col gap-[6px]">
                <p class="text-[18px] text-gray01 font-normal">
                  Текст эпитафии
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
          </div>
          <!-- btn -->
          <div class="flex items-center gap-[12px]">
            <div class="py-[12px] px-[16px] rounded-[6px] bg-orange01/10">
              <Icon
                icon="basil:arrow-left-outline"
                width="24"
                height="24"
                class="text-orange01"
              />
            </div>
            <div>
              <button
                class="py-[12px] px-[16px] rounded-[6px] bg-orange01 text-white text-[18px] font-medium font-sans"
              >
                Сохранить и перейти к результату
              </button>
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

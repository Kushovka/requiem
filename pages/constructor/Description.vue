<script setup lang="ts">
import { Icon } from "@iconify/vue";

const activeTab = ref<"description" | "media">("description");
const isInfoOpen = ref(false);
const isDescOpen = ref(false);
</script>
<template>
  <section class="container mx-auto px-[16px] py-[50px]">
    <div class="flex sm:flex-row flex-col gap-[20px]">
      <!-- left -->
      <div class="flex flex-col gap-[20px] w-[95%]">
        <div class="flex gap-[12px]">
          <h1
            class="text-[22px] font-semibold cursor-pointer"
            :class="
              activeTab === 'description' ? 'text-orange01' : 'text-gray01/60'
            "
            @click="activeTab = 'description'"
          >
            Описание модели
          </h1>
          <h1
            class="text-[22px] font-semibold cursor-pointer"
            :class="activeTab === 'media' ? 'text-orange01' : 'text-gray01/60'"
            @click="activeTab = 'media'"
          >
            Фото/видео
          </h1>
        </div>
        <div class="w-full h-[2px] bg-gray01/30"></div>

        <!-- text -->
        <div
          v-if="activeTab === 'description'"
          class="flex flex-col gap-[14px] lg:text-[20px] md:text-[18px] text-gray01 font-medium"
        >
          <!-- mobile -->
          <div class="flex md:hidden">
            <div
              v-if="!isDescOpen"
              @click="isDescOpen = true"
              class="cursor-pointer"
            >
              Памятник М12 из карельского гранита габбро-диабаз. Монумент
              ассоциируется с землёй и стабильностью за счёт своей прямоугольной
              ...
              <span class="text-gray01/80">ещё</span>
            </div>

            <div
              v-else
              @click="isDescOpen = false"
              class="flex flex-col gap-[12px] cursor-pointer"
            >
              <p>
                Памятник М12 из карельского гранита габбро-диабаз. Монумент
                ассоциируется с землёй и стабильностью за счёт своей
                прямоугольной формы. На фоне строгих линий гармонично смотрится
                оформление верхней части стелы. Контуры волны переходят в
                арочный изгиб — словно размеренное течение жизни нашло свое
                дальнейшее продолжение на небесном своде. Подобное оформление
                придаёт памятнику лёгкость и мягкость
              </p>
              <p>
                Памятник из габбро-диабаза обладает красивой текстурой и
                глубоким тёмным цветом. Полировка поверхности придаёт ему
                зеркальный блеск и элегантный вид. На данном памятнике эффектно
                будет смотреться портрет и любая гравировка
              </p>
              <p class="text-gray01/60">
                Все параметры можно корректировать и выбрать оптимальную цену
              </p>
            </div>
          </div>

          <!-- desktop -->
          <div class="hidden md:flex flex-col gap-[12px]">
            <p>
              Памятник М12 из карельского гранита габбро-диабаз. Монумент
              ассоциируется с землёй и стабильностью за счёт своей прямоугольной
              формы. На фоне строгих линий гармонично смотрится оформление
              верхней части стелы. Контуры волны переходят в арочный изгиб —
              словно размеренное течение жизни нашло свое дальнейшее продолжение
              на небесном своде. Подобное оформление придаёт памятнику лёгкость
              и мягкость
            </p>
            <p>
              Памятник из габбро-диабаза обладает красивой текстурой и глубоким
              тёмным цветом. Полировка поверхности придаёт ему зеркальный блеск
              и элегантный вид. На данном памятнике эффектно будет смотреться
              портрет и любая гравировка
            </p>
            <p class="text-gray01/60">
              Все параметры можно корректировать и выбрать оптимальную цену
            </p>
          </div>
        </div>

        <!-- media -->
        <div
          v-else
          class="flex items-center flex-col gap-[14px] lg:text-[20px] md:text-[18px] text-gray01 font-medium"
        >
          <p>Тут будут фото и видео памятника</p>
        </div>
      </div>
      <!-- right -->
      <div class="flex items-center flex-col gap-[16px]">
        <div
          class="flex items-center cursor-pointer select-none"
          @click="isInfoOpen = !isInfoOpen"
        >
          <h1 class="text-[20px] text-orange01 font-semibold">
            Доп. информация
          </h1>
          <Icon
            icon="meteor-icons:chevron-down"
            width="24"
            height="24"
            :style="{ color: '#EC631B' }"
            :class="[
              'transition-transform duration-300 ml-2 block md:hidden',
              { 'rotate-0': isInfoOpen, 'rotate-[-90deg]': !isInfoOpen },
            ]"
          />
        </div>
        <!-- mobile -->
        <div
          v-show="isInfoOpen"
          class="flex flex-col gap-[12px] transition-all duration-300 md:hidden"
        >
          <div>
            <h1 class="text-[20px] text-black01 font-semibold">Размеры:</h1>
          </div>
          <div
            class="flex flex-col gap-[4px] text-[18px] text-gray01 font-medium"
          >
            <p>80*40*8 см</p>
            <p>90*45*8 см</p>
            <p>100*45*8 см</p>
            <p>100*50*8 см</p>
            <p>110*55*8 см</p>
            <p>120*60*8 см</p>
            <p>120*70*8 см</p>
            <p>140*70*8 см</p>
          </div>
        </div>

        <!-- desktop -->
        <div
          class="flex-col gap-[12px] transition-all duration-300 hidden md:flex"
        >
          <div>
            <h1 class="text-[20px] text-black01 font-semibold">Размеры:</h1>
          </div>
          <div
            class="flex flex-col gap-[4px] text-[18px] text-gray01 font-medium"
          >
            <p>80*40*8 см</p>
            <p>90*45*8 см</p>
            <p>100*45*8 см</p>
            <p>100*50*8 см</p>
            <p>110*55*8 см</p>
            <p>120*60*8 см</p>
            <p>120*70*8 см</p>
            <p>140*70*8 см</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

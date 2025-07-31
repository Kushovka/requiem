<template>
  <section class="relative h-[500px] flex-center overflow-hidden">
    <div class="container mx-auto px-[16px]">
      <!-- bg -->
      <img src="/images/home/heroBanner/bg.jpg" class="absolute z-0 -top-52 left-0 object-cover" alt="" />
      <div class="absolute top-0 left-0 w-full h-full rounded-r-[8px] bg-orange01/30 backdrop-blur-[8px]"></div>

      <div class="flex items-center h-full gap-[32px]">
        <!-- left card -->
        <div
          class="relative flex-between bg-gradient-to-r from-white01 via-white01 to-transparent rounded-[8px] z-40 h-full xl:w-2/3 lg:w-1/2 w-full">
          <img
            src="/images/home/heroBanner/img1.png"
            class="absolute top-0 right-0 z-0 rounded-r-[8px] h-full"
            alt="" />
          <div
            class="absolute rounded-l-[8px] z-10 inset-0 bg-gradient-to-r from-white01 via-white01 to-transparent"></div>
          <div
            class="absolute rounded-l-[8px] z-10 inset-0 bg-gradient-to-r from-white01 via-white01 to-transparent"></div>
          <div
            class="absolute rounded-l-[8px] z-10 inset-0 bg-gradient-to-r from-white01 via-white01 to-transparent"></div>
          <div class="flex flex-col px-[50px] py-[40px] gap-[40px] relative z-40">
            <div class="flex flex-col gap-[25px]">
              <div>
                <h1 class="text-[32px] text-black01/80 font-bold flex flex-col text-center">
                  <span class="text-[30px] font-semibold">Похоронное бюро</span>
                  РИТУАЛ #1
                </h1>
              </div>
              <div class="flex flex-col gap-[16px]">
                <div class="flex gap-[8px]">
                  <img src="/images/home/heroBanner/icon1.svg" alt="" />
                  <p class="text-[20px] font-medium text-black01/80">Большой выбор</p>
                </div>
                <div class="flex gap-[8px]">
                  <img src="/images/home/heroBanner/icon1.svg" alt="" />
                  <p class="text-[20px] font-medium text-black01/80">Высокое качество</p>
                </div>
                <div class="flex gap-[8px]">
                  <img src="/images/home/heroBanner/icon1.svg" alt="" />
                  <p class="text-[20px] font-medium text-black01/80">Персонализация</p>
                </div>
              </div>
            </div>
            <div>
              <button
                class="bg-orange01 py-[12px] px-[16px] rounded-[6px] shadow-[0_4px_6px_rgba(236,99,27,0.5)] text-[18px] font-medium text-white">
                Смотреть каталог
              </button>
            </div>
          </div>
        </div>
        <!-- rigth card -->
        <div class="relative lg:flex hidden bg-white rounded-[8px] z-40 2xl:h-full xl:h-[90%] 2xl:w-[50%] lg:w-[80%] w-[90%] h-full">
          <div class="relative z-40 flex flex-col px-[50px] py-[40px] gap-[120px]">
            <div class="flex flex-col gap-[25px] w-[80%]">
              <h1 class="text-[32px] text-black01/80 font-bold">Все виды ритуальных услуг и товаров</h1>
              <p class="text-[26px] text-black01/80 font-normal">в Нижнем Тагиле</p>
            </div>
            <div>
              <button
                class="bg-orange01 py-[12px] px-[16px] rounded-[6px] shadow-[0_4px_6px_rgba(236,99,27,0.5)] text-[18px] font-medium text-white">
                Смотреть каталог
              </button>
            </div>
          </div>
          <img
            src="/public/images/home/heroBanner/img2.png"
            class="absolute bottom-0 right-0 w-[313px] h-[313px] rounded-r-[8px] z-40"
            alt="" />
          <div class="absolute top-0 left-0 w-full h-full rounded-r-[8px] bg-orange01/10"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<template>
  <section class="relative container mx-auto px-[16px] pt-[60px] pb-[70px]">
    <div class="relative flex items-center rounded-[8px] p-[32px]">
      <!-- img -->
      <img
        src="/images/home/CTA/bg.png"
        class="w-[20%] absolute lg:block hidden bottom-0 left-0 z-20 object-cover rounded-l-[8px]"
        alt="" />
      
      <div
        class="absolute lg:block hidden bottom-0 left-0 w-[20%] h-full z-30 pointer-events-none">
        <div class="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-r from-transparent via-pink01/50 to-pink01 rounded-l-[8px]"></div>
      </div>

      <div
        class="absolute z-10 inset-0 rounded-r-[8px] bg-gradient-to-l from-pink01 via-pink01 to-pink01/50"></div>

   <!-- text -->
      <div class="flex flex-col relative z-40 lg:items-end items-center w-full gap-[8px] px-[24px]">
        <h1 class="text-[30px] text-black01 font-semibold lg:text-right text-center">Работаем на всех кладбищах города</h1>
        <p class="text-[20px] text-gray01 font-medium lg:text-right text-center">
          На все работы по установке памятника и благоустройству места захоронения распространяется гарантия
        </p>
      </div>
    </div>
  </section>
</template>

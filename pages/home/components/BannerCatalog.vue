<template>
  <div class="py-[70px]">
    <div class="relative z-40 flex flex-col gap-[23px] p-[32px] rounded-[8px] overflow-hidden">
      <img src="/images/home/catalog/imgBanner.jpg" class="absolute -top-5 right-0 lg:w-1/3 w-full" alt="" />
      <div class="absolute rounded-l-[8px] z-10 inset-0 bg-gradient-to-r from-white01 via-white01 to-transparent"></div>
      <div class="absolute rounded-l-[8px] z-10 inset-0 bg-gradient-to-r from-white01 via-white01 to-transparent"></div>
      <div class="absolute rounded-l-[8px] z-10 inset-0 bg-gradient-to-r from-white01 via-white01 to-transparent"></div>
      <div class="relative z-40">
        <h1 class="text-[32px] text-black01 font-semibold">Получите консультацию по выбору памятника</h1>
      </div>
      <div class="relative z-40 flex lg:flex-row flex-col gap-[16px] w-full">
        <input
          type="text"
          name="name"
          id=""
          placeholder="Ваше имя"
          class="py-[12px] px-[16px] border rounded-[6px] w-[360px]" />
        <input
          type="tel"
          name=""
          id=""
          placeholder="Номер телефона"
          class="py-[12px] px-[16px] border rounded-[6px] w-[360px]" />
        <button class="bg-orange01 py-[12px] px-[16px] rounded-[6px] text-[18px] text-white font-medium w-[280px]">
          Получить констультацию
        </button>
      </div>
    </div>
  </div>
</template>

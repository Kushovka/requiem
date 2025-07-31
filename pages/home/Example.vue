<script setup lang="ts">
  import exampleItems from '~/composables/home/exampleItems/exampleItems'
</script>

<template>
  <section class="container mx-auto w-full px-[16px] pb-[115px] pt-[50px]">
    <div class="relative flex flex-col lg:flex-row gap-[32px]">
      <!-- left -->
      <div class="flex lg:flex-col items-center sm:flex-row flex-col lg:w-1/2 w-full gap-[24px]">
        <p class="text-[20px] text-gray01 font-medium">
          Каждый памятник — это не просто камень, а живое напоминание о близком человеке, выражение любви, уважения и
          памяти. В нашей работе мы сочетаем уважение к традициям, внимание к деталям и современные технологии.
          Благодаря этому каждый заказ получается уникальным, долговечным и эстетически выразительным.
        </p>
        <img src="/images/home/example/img1.png" class="md:w-1/2 sm:w-1/2 h-full lg:w-full" alt="" />
      </div>
      <!-- rigth -->
      <div class="md:flex hidden lg:flex-col flex-row lg:w-1/2 w-full gap-[24px]">
        <img src="/images/home/example/img2.png" class="w-1/2 h-full lg:w-full" alt="" />
        <p class="text-[20px] text-gray01 font-medium">
          Наши клиенты доверяют нам самые важные моменты — от выбора материала до финальной установки. Мы создаём
          памятники, которые остаются в сердцах и на века сохраняют память о тех, кто для нас важен. Ознакомьтесь с
          реальными примерами наших работ, чтобы убедиться в высоком уровне исполнения и подхода к каждому проекту.
        </p>
      </div>

      <!-- banner -->
      <div class="lg:absolute xl:-bottom-[15%] lg:-bottom-[25%] lg:translate-x-[50%] lg:grid grid-cols-2 2xl:gap-[50px] bg-pink01 2xl:py-[40px] xl:py-[20px] lg:py-[15px] md:py-[20px] p-[10px] 2xl:pl-[115px] xl:pl-[80px] lg:pl-[60px] rounded-[8px] 2xl:w-[1100px] xl:w-[900px] lg:w-[680px] w-full">
        <div class="grid grid-cols-2 items-center justify-center 2xl:gap-[40px] xl:gap-[15px] gap-[10px]">
          <div v-for="(exampleItem, idx) in exampleItems" :key="idx" class="flex flex-col items-center justify-center lg:items-start lg:justify-start">
            <h1 class="sm:text-[34px] text-[28px] text-black01 font-semibold">{{ exampleItem.number }}</h1>
            <p class="sm:text-[18px] text-[16px] text-black01 font-normal text-center">{{ exampleItem.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

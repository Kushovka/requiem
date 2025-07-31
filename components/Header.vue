<script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount } from 'vue'
  import { Icon } from '@iconify/vue'

  const isOpen = ref(false)
  const selectedOption = ref('Все категории')

  const options = ['Памятники', 'Кресты', 'Венки, цветы', 'Одежда', 'Аксессуары']

  function toggleDropdown() {
    isOpen.value = !isOpen.value
  }

  function selectOption(option: string) {
    selectedOption.value = option
    isOpen.value = false
  }

  const dropdownRef = ref<HTMLElement | null>(null)

  function onClickOutside(event: MouseEvent) {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
      isOpen.value = false
    }
  }

  onMounted(() => {
    document.addEventListener('click', onClickOutside)
  })

  onBeforeUnmount(() => {
    document.removeEventListener('click', onClickOutside)
  })

 
  const profIcon = ref('/images/header/prof.svg')
  const likeIcon = ref('/images/header/like.svg')

  const profIconHover = '/images/header/profHover.svg'
  const likeIconHover = '/images/header/likeHover.svg'
</script>

<template>
  <header>
    <section class="container mx-auto px-[16px] py-[24px]">
      <div class="flex-between">
        <!-- logo -->
        <div class="flex items-center gap-[12px]">
          <img src="/images/header/logo.svg" alt="" />
          <div class="flex flex-col">
            <h1 class="text-[18px] text-black01 font-semibold font-sans">РИТУАЛ #1</h1>
            <p class="text-[14px] text-gray01/60 font-sans font-medium">КАТАЛОГ ТОВАРОВ</p>
          </div>
        </div>

        <!-- search -->
        <div class="sm:flex hidden items-center border py-[12px] px-[16px] rounded-[6px] border-gray01/30 bg-gray01/10">
          <div ref="dropdownRef" class="relative md:block hidden lg:w-[160px]">
            <button
              @click="toggleDropdown"
              class="w-full text-left bg-transparent pr-[8px] rounded-[8px] font-sans flex justify-between items-center">
              <span class="text-[16px] text-black font-sans font-light">{{ selectedOption }}</span>
              <svg class="h-4 w-4 text-gray-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <ul
              v-show="isOpen"
              class="absolute left-0 top-full mt-1 w-full bg-white dark:bg-neutral-800 border border-orange01/40 dark:border-neutral-700 rounded-[8px] shadow-lg max-h-60 overflow-auto z-50">
              <li
                v-for="option in options"
                :key="option"
                @click="selectOption(option)"
                class="px-4 py-2 cursor-pointer text-[16px] text-black font-sans font-light hover:bg-gray01/10 dark:hover:bg-gray01/20">
                {{ option }}
              </li>
            </ul>
          </div>

          <div class="md:flex hidden px-[16px]">
            <div class="w-[1px] h-[20px] bg-gray01/50"></div>
          </div>

          <div class="relative flex-1">
            <Icon icon="cuida:search-outline" class="absolute top-0 right-0 text-gray01" width="24" height="24" />
            <input
              type="text"
              placeholder="Искать товар.."
              class="bg-transparent lg:pr-[200px] focus:outline-none focus:ring-0 font-sans w-full" />
          </div>
        </div>

        <!-- contact -->
        <div class="xl:flex hidden flex-col items-end justify-end">
          <h2 class="text-black01 text-[18px] font-sans font-semibold">+7 (3435) 961-505</h2>
          <a
            href="mailto:ritual1@list.ru"
            class="text-[16px] text-gray01/70 font-sans font-normal hover:text-black01 transition-all duration-300 cursor-pointer">
            ritual1@list.ru
          </a>
        </div>

        <!-- icons -->
        <div class="flex items-center gap-[16px]">
          <img
            class="cursor-pointer"
            :src="profIcon"
            alt="profIcon"
            @mouseenter="profIcon = profIconHover"
            @mouseleave="profIcon = '/images/header/prof.svg'" />
          <img
            class="cursor-pointer"
            :src="likeIcon"
            alt="likeIcon"
            @mouseenter="likeIcon = likeIconHover"
            @mouseleave="likeIcon = '/images/header/like.svg'" />
        </div>
      </div>
    </section>
  </header>
</template>

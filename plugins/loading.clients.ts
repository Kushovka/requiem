import { ref } from 'vue'

export default defineNuxtPlugin((nuxtApp) => {
  const isLoading = ref(false)

  nuxtApp.hook('page:start', () => {
    console.log('Page loading...')
    isLoading.value = true
  })

  nuxtApp.hook('page:finish', () => {
    console.log('Page finished')
    setTimeout(() => {
      isLoading.value = false
    }, 300)
  })

  return {
    provide: {
      isLoading
    }
  }
})

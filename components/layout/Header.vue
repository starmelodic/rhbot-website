<template>
  <header 
    ref="headerRef"
    class="fixed top-0 w-full z-50 transition-all duration-500"
    :class="isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100' : 'bg-transparent'"
  >
    <nav class="container-custom py-4 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-3 group">
        <div class="relative w-11 h-11 rounded-xl gradient-primary flex items-center justify-center text-white font-bold text-xl transition-transform duration-300 group-hover:scale-110 shadow-lg shadow-primary-500/20">
          RH
          <div class="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
        <div>
          <span class="text-2xl font-heading font-bold tracking-tight">
            <span class="text-primary-500">RH</span>
            <span class="text-gray-800">BOT</span>
          </span>
          <span class="block text-[10px] text-gray-400 font-medium tracking-wider -mt-0.5">by erhabot.com</span>
        </div>
      </NuxtLink>

      <!-- Menu Desktop -->
      <ul class="hidden lg:flex items-center gap-8">
        <li v-for="item in menuItems" :key="item.path">
          <NuxtLink 
            :to="item.path" 
            class="relative text-sm font-medium text-gray-600 hover:text-primary-500 transition-colors group"
          >
            {{ item.label }}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
          </NuxtLink>
        </li>
      </ul>

      <!-- CTA -->
      <div class="flex items-center gap-4">
        <NuxtLink to="/pricing" class="hidden lg:block text-sm font-medium text-gray-600 hover:text-primary-500 transition-colors">
          Login
        </NuxtLink>
        <Button variant="primary" size="md" class="shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40">
          Mulai Gratis
          <Icon name="heroicons:arrow-right-20-solid" class="w-4 h-4 ml-1" />
        </Button>
        
        <button @click="isMenuOpen = !isMenuOpen" class="lg:hidden p-2 hover:bg-gray-100 rounded-xl transition-colors relative w-10 h-10 flex items-center justify-center">
          <div class="w-6 h-5 flex flex-col justify-between relative">
            <span class="block w-6 h-0.5 bg-gray-700 rounded-full transition-all duration-300" :class="isMenuOpen ? 'rotate-45 translate-y-2' : ''"></span>
            <span class="block w-6 h-0.5 bg-gray-700 rounded-full transition-all duration-300" :class="isMenuOpen ? 'opacity-0' : ''"></span>
            <span class="block w-6 h-0.5 bg-gray-700 rounded-full transition-all duration-300" :class="isMenuOpen ? '-rotate-45 -translate-y-2' : ''"></span>
          </div>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition-all duration-300"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-300"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="isMenuOpen" class="lg:hidden bg-white border-t border-gray-100 py-6 px-4 absolute w-full shadow-xl">
        <ul class="flex flex-col gap-2">
          <li v-for="item in menuItems" :key="item.path">
            <NuxtLink 
              :to="item.path" 
              class="block px-4 py-3 rounded-xl hover:bg-gray-50 text-gray-600 hover:text-primary-500 font-medium transition-colors"
              @click="isMenuOpen = false"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
          <li class="pt-2 border-t border-gray-100 mt-2">
            <NuxtLink to="/pricing" class="block px-4 py-3 text-primary-500 font-bold hover:bg-primary-50 rounded-xl transition-colors">
              Login
            </NuxtLink>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Button from '~/components/common/Button.vue'

const isMenuOpen = ref(false)
const isScrolled = ref(false)
const headerRef = ref(null)

const menuItems = [
  { label: 'Beranda', path: '/' },
  { label: 'Fitur', path: '/features' },
  { label: 'Harga', path: '/pricing' },
  { label: 'Blog', path: '/blog' },
  { label: 'Kontak', path: '/contact' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
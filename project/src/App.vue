<template>
  <div class="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100">
    <nav class="fixed w-full bg-white/80 backdrop-blur-sm shadow-md z-50">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center h-16">
          <router-link to="/" class="text-2xl font-bold text-amber-800">
            Jabar Kultur
          </router-link>
          <div class="hidden md:flex space-x-8">
            <router-link v-for="item in menuItems" 
              :key="item.path" 
              :to="item.path"
              class="text-gray-700 hover:text-amber-600 transition-colors">
              {{ item.name }}
            </router-link>
          </div>
          <button @click="isMenuOpen = !isMenuOpen" class="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      <!-- Mobile menu -->
      <div v-if="isMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <router-link v-for="item in menuItems" 
            :key="item.path" 
            :to="item.path"
            class="block px-3 py-2 text-gray-700 hover:text-amber-600 transition-colors"
            @click="isMenuOpen = false">
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </nav>

    <main class="pt-16">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <footer class="bg-amber-800 text-white py-8">
      <div class="container mx-auto px-4">
        <div class="text-center">
          <p class="text-lg font-semibold">Jabar Kultur</p>
          <p class="mt-2">© 2024 All rights reserved</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const menuItems = [
  { name: 'Makanan Khas', path: '/makanan' },
  { name: 'Tarian', path: '/tarian' },
  { name: 'Adat Istiadat', path: '/adat' },
  { name: 'Alat Musik', path: '/alat-musik' },
  { name: 'Senjata', path: '/senjata' }
]
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

body {
  font-family: 'Poppins', sans-serif;
}
</style>
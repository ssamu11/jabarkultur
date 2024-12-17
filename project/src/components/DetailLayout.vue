<template>
  <div class="min-h-screen bg-amber-50 py-20 px-4">
    <div class="container mx-auto max-w-4xl">
      <div class="bg-white rounded-lg shadow-xl overflow-hidden">
        <div class="relative h-72">
          <img 
            :src="image" 
            :alt="title" 
            class="w-full h-full object-cover"
            @error="handleImageError"
          >
          <div class="absolute inset-0 bg-black/20"></div>
          <h1 class="absolute bottom-0 left-0 right-0 p-8 text-3xl font-bold text-white">
            {{ title }}
          </h1>
        </div>
        <div class="p-8">
          <div class="prose prose-lg max-w-none">
            <slot></slot>
          </div>
          <div class="mt-8">
            <router-link 
              :to="backLink" 
              class="inline-flex items-center text-amber-600 hover:text-amber-700"
            >
              ← Kembali
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: String,
  image: String,
  backLink: String
})

const handleImageError = (e) => {
  e.target.src = '/images/placeholder.jpg'
}
</script>
<template>
  <div 
    class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300" 
    data-aos="fade-up"
  >
    <router-link :to="link" class="block h-full">
      <div class="relative h-48">
        <img 
          :src="image" 
          :alt="title" 
          class="w-full h-full object-cover"
          @error="handleImageError"
        >
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      <div class="p-6">
        <h3 class="text-xl font-semibold mb-2">{{ title }}</h3>
        <p class="text-gray-600 mb-4">{{ description }}</p>
        <div class="text-amber-600 hover:text-amber-700 font-medium inline-flex items-center">
          Baca selengkapnya 
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  description: String,
  image: String,
  link: String
})

const handleImageError = (e) => {
  e.target.src = '/images/placeholder.jpg'
}
</script>
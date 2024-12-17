<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-500 via-orange-400 to-amber-300">
      <div class="absolute inset-0">
        <img src="../assets/images/hero-bg.jpg" alt="Jawa Barat" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-black/10"></div>
      </div>
      <div class="relative text-center text-white px-4" data-aos="fade-up">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">Jabar Kultur</h1>
        <p class="text-xl md:text-2xl mb-8">Jelajahi keindahan dan kekayaan budaya Tanah Pasundan</p>
        <a href="#explore" class="bg-white text-amber-600 hover:bg-amber-50 px-8 py-3 rounded-full transition-colors">
          Jelajahi Sekarang
        </a>
      </div>
    </section>

    <!-- About Section -->
    <AboutSection />

    <!-- Categories Section -->
    <section id="explore" class="py-16 px-4 bg-amber-50">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-center mb-12" data-aos="fade-up">Kebudayaan Jawa Barat</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <router-link v-for="category in categories" 
            :key="category.path" 
            :to="category.path"
            class="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            data-aos="fade-up"
            :data-aos-delay="category.delay">
            <img :src="category.image" :alt="category.title" class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300">
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              <div>
                <h3 class="text-xl font-semibold text-white mb-2">{{ category.title }}</h3>
                <p class="text-gray-200">{{ category.description }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import AboutSection from '../components/AboutSection.vue'
const categories = [
  {
    title: 'Makanan Khas',
    description: 'Cita rasa autentik dari Tanah Pasundan',
    image: '/images/makanan/lotek.jpg',
    path: '/makanan',
    delay: 0
  },
  {
    title: 'Tarian Tradisional',
    description: 'Gerak dan irama warisan leluhur',
    image: '/images/tarian/jaipong.jpg',
    path: '/tarian',
    delay: 100
  },
  {
    title: 'Adat Istiadat',
    description: 'Tradisi dan kebiasaan masyarakat Sunda',
    image: '/images/adat/ngaruwat.jpg',
    path: '/adat',
    delay: 200
  },
  {
    title: 'Alat Musik',
    description: 'Harmoni musik tradisional Sunda',
    image: '/images/alat-musik/angklung.jpg',
    path: '/alat-musik',
    delay: 300
  },
  {
    title: 'Senjata Tradisional',
    description: 'Pusaka dan senjata khas Jawa Barat',
    image: '/images/senjata/keris.jpg',
    path: '/senjata',
    delay: 400
  }
]
</script>

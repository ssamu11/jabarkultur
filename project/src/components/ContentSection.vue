<template>
  <section class="py-16 px-4">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold text-center mb-12" data-aos="fade-up">{{ title }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: String
})
</script>
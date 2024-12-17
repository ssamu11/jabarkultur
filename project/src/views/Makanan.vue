<template>
  <ContentSection title="Makanan Khas Jawa Barat">
    <CategoryCard
      v-for="item in makananData"
      :key="item.id"
      :title="item.name"
      :description="item.description"
      :image="item.image"
      :link="`/makanan/${item.id}`"
    />
  </ContentSection>
</template>

<script setup>
import ContentSection from '../components/ContentSection.vue'
import CategoryCard from '../components/CategoryCard.vue'
import { makananData } from '../data/makanan'
</script>
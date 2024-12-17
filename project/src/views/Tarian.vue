<template>
  <ContentSection title="Tarian Tradisional Jawa Barat">
    <CategoryCard
      v-for="item in tarianData"
      :key="item.id"
      :title="item.name"
      :description="item.description"
      :image="item.image"
      :link="`/tarian/${item.id}`"
    />
  </ContentSection>
</template>

<script setup>
import ContentSection from '../components/ContentSection.vue'
import CategoryCard from '../components/CategoryCard.vue'
import { tarianData } from '../data/tarian'
</script>
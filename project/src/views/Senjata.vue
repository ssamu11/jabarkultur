<template>
  <ContentSection title="Senjata Tradisional Jawa Barat">
    <CategoryCard
      v-for="item in senjataData"
      :key="item.id"
      :title="item.name"
      :description="item.description"
      :image="item.image"
      :link="`/senjata/${item.id}`"
    />
  </ContentSection>
</template>

<script setup>
import ContentSection from '../components/ContentSection.vue'
import CategoryCard from '../components/CategoryCard.vue'
import { senjataData } from '../data/senjata'
</script>
<template>
  <ContentSection title="Alat Musik Tradisional Jawa Barat">
    <CategoryCard
      v-for="item in alatMusikData"
      :key="item.id"
      :title="item.name"
      :description="item.description"
      :image="item.image"
      :link="`/alat-musik/${item.id}`"
    />
  </ContentSection>
</template>

<script setup>
import ContentSection from '../components/ContentSection.vue'
import CategoryCard from '../components/CategoryCard.vue'
import { alatMusikData } from '../data/alat-musik'
</script>
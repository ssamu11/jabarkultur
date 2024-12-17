<template>
  <ContentSection title="Adat Istiadat Jawa Barat">
    <CategoryCard
      v-for="item in adatData"
      :key="item.id"
      :title="item.name"
      :description="item.description"
      :image="item.image"
      :link="`/adat/${item.id}`"
    />
  </ContentSection>
</template>

<script setup>
import ContentSection from '../components/ContentSection.vue'
import CategoryCard from '../components/CategoryCard.vue'
import { adatData } from '../data/adat'
</script>
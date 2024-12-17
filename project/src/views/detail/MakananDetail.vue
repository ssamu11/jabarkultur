<template>
  <DetailLayout
    v-if="item"
    :title="item.name"
    :image="item.image"
    backLink="/makanan"
  >
    <div class="space-y-6">
      <h2 class="text-xl font-semibold">Sejarah</h2>
      <p>{{ item.history }}</p>
      <h2 class="text-xl font-semibold">Bahan-bahan</h2>
      <ul class="list-disc pl-6">
        <li v-for="bahan in item.ingredients" :key="bahan">{{ bahan }}</li>
      </ul>
      <h2 class="text-xl font-semibold">Cara Pembuatan</h2>
      <ol class="list-decimal pl-6">
        <li v-for="step in item.steps" :key="step">{{ step }}</li>
      </ol>
    </div>
  </DetailLayout>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import DetailLayout from '../../components/DetailLayout.vue'
import { makananData } from '../../data/makanan'

const route = useRoute()
const item = computed(() => makananData.find(m => m.id === route.params.id))
</script>
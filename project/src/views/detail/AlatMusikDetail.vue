<template>
  <DetailLayout
    v-if="item"
    :title="item.name"
    :image="item.image"
    backLink="/alat-musik"
  >
    <div class="space-y-6">
      <h2 class="text-xl font-semibold">Deskripsi</h2>
      <p>{{ item.adalah }}</p>
      <h2 class="text-xl font-semibold">Bahan dam Struktur</h2>
      <p>{{ item.materials }}</p>
      <h2 class="text-xl font-semibold">Cara Bermain</h2>
      <p>{{ item.technique }}</p>
      <h2 class="text-xl font-semibold">Fungsi dan penggunaan</h2>
      <p>{{ item.functions }}</p>
    </div>
  </DetailLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import DetailLayout from '../../components/DetailLayout.vue'
import { alatMusikData } from '../../data/alat-musik'

const route = useRoute()
const item = ref(null)

onMounted(() => {
  item.value = alatMusikData.find(a => a.id === route.params.id)
})
</script>
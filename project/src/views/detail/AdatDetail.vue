<template>
  <DetailLayout
    v-if="item"
    :title="item.name"
    :image="item.image"
    backLink="/adat"
  >
    <div class="space-y-6">
      <h2 class="text-xl font-semibold">Deskripsi</h2>
      <p>{{ item.adalah }}</p>
      <h2 class="text-xl font-semibold">Prosesi</h2>
      <p>{{ item.process }}</p>
      <h2 class="text-xl font-semibold">Makna dan Nilai</h2>
      <p>{{ item.functions }}</p>
    </div>
  </DetailLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import DetailLayout from '../../components/DetailLayout.vue'
import { adatData } from '../../data/adat'

const route = useRoute()
const item = ref(null)

onMounted(() => {
  item.value = adatData.find(a => a.id === route.params.id)
})
</script>
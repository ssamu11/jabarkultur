<template>
  <DetailLayout
    v-if="item"
    :title="item.name"
    :image="item.image"
    backLink="/senjata"
  >
    <div class="space-y-6">
      <h2 class="text-xl font-semibold">Deskripsi</h2>
      <p>{{ item.adalah }}</p>
      <h2 class="text-xl font-semibold">Ciri Khas</h2>
      <ul class="list-disc pl-6">
        <li v-for="material in item.ciri_khas" :key="material">{{ material }}</li>
      </ul>
      <h2 class="text-xl font-semibold">Fungsi</h2>
      <ul class="list-disc pl-6">
        <li v-for="phil in item.fungsi" :key="phil">{{ phil }}</li>
      </ul>
    </div>
  </DetailLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import DetailLayout from '../../components/DetailLayout.vue'
import { senjataData } from '../../data/senjata'

const route = useRoute()
const item = ref(null)

onMounted(() => {
  item.value = senjataData.find(s => s.id === route.params.id)
})
</script>
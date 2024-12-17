<template>
  <DetailLayout
    v-if="item"
    :title="item.name"
    :image="item.image"
    backLink="/tarian"
  >
    <div class="space-y-6">
      <h2 class="text-xl font-semibold">Sejarah</h2>
      <p>{{ item.history }}</p>
      <h2 class="text-xl font-semibold">Unsur Gerakan</h2>
      <ul class="list-disc pl-6">
        <li v-for="element in item.elements" :key="element">{{ element }}</li>
      </ul>
      <h2 class="text-xl font-semibold">Kostum</h2>
      <ul class="list-disc pl-6">
        <li v-for="costume in item.costume" :key="costume">{{ costume }}</li>
      </ul>
      <h2 class="text-xl font-semibold">Musik Pengiring</h2>
      <ul class="list-disc pl-6">
        <li v-for="music in item.music" :key="music">{{ music }}</li>
      </ul>
      <h2 class="text-xl font-semibold">Manfaat</h2>
      <ul class="list-disc pl-6">
        <li v-for="benefit in item.benefits" :key="benefit.title">
        <span class="font-medium">{{ benefit.title }}</span>
        <p class="text-sm text-gray-600 mt-1 ml-6">{{ benefit.description }}</p>
  </li>
</ul>

    </div>
  </DetailLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import DetailLayout from '../../components/DetailLayout.vue'
import { tarianData } from '../../data/tarian'

const route = useRoute()
const item = ref(null)

onMounted(() => {
  item.value = tarianData.find(t => t.id === route.params.id)
})
</script>
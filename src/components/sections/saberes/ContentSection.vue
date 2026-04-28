<template>
  <div class="mb-16">
    <!-- Header de la sección -->
    <div class="flex items-center gap-4 mb-8">
      <div
        class="w-10 h-10 rounded-full flex items-center justify-center text-white"
        :style="{ backgroundColor: iconBgColor }"
      >
        <i :class="icon"></i>
      </div>
      <div>
        <h2 class="text-2xl font-bold text-navy">{{ title }}</h2>
        <p v-if="subtitle" class="text-sm text-gray-500">{{ subtitle }}</p>
      </div>
    </div>

    <!-- Grid de contenido -->
    <div :class="gridClasses">
      <ArticleCard v-for="item in items" :key="item.id" :article="item" v-if="type === 'article'" />
      <VideoCard v-for="item in items" :key="item.id" :video="item" v-else-if="type === 'video'" />
      <PodcastCard
        v-for="item in items"
        :key="item.id"
        :podcast="item"
        v-else-if="type === 'podcast'"
      />
      <DownloadCard
        v-for="item in items"
        :key="item.id"
        :download="item"
        v-else-if="type === 'downloadable'"
      />
    </div>

    <!-- Botón Ver más -->
    <div v-if="viewAllLink" class="text-center mt-8">
      <router-link
        :to="viewAllLink"
        class="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium text-sm"
      >
        Ver todos los {{ title }}
        <i class="fas fa-arrow-right text-xs"></i>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import ArticleCard from './ArticleCard.vue'
import VideoCard from './VideoCard.vue'
import PodcastCard from './PodcastCard.vue'
import DownloadCard from './DownloadCard.vue'

const props = defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  icon: { type: String, required: true },
  iconColor: { type: String, default: 'navy' },
  items: { type: Array, required: true },
  type: { type: String, required: true },
  viewAllLink: { type: String, default: '' },
  limit: { type: Number, default: null },
})

const iconBgColor = computed(() => {
  const colors = {
    navy: '#0A2966',
    collegeOrange: '#FF6B35',
    accentPink: '#EC4899',
    blue: '#3B82F6',
  }
  return colors[props.iconColor] || '#0A2966'
})

const gridClasses = computed(() => {
  switch (props.type) {
    case 'article':
      return 'grid md:grid-cols-2 lg:grid-cols-3 gap-8'
    case 'video':
      return 'grid md:grid-cols-2 gap-8'
    case 'podcast':
      return 'grid grid-cols-1'
    case 'downloadable':
      return 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'
    default:
      return 'grid md:grid-cols-2 lg:grid-cols-3 gap-8'
  }
})
</script>

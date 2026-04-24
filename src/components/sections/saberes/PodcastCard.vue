<template>
  <div
    class="bg-white rounded-3xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-center p-8 hover:shadow-xl transition-all duration-300"
  >
    <div
      class="w-32 h-32 rounded-2xl flex-shrink-0 flex items-center justify-center shadow-lg relative overflow-hidden"
      :style="{ backgroundColor: cardColor }"
    >
      <div class="absolute inset-0 bg-gradient-to-br from-accentPink/20 to-transparent"></div>
      <img
        v-if="podcast.cover_image"
        :src="podcast.cover_image"
        class="w-full h-full object-cover"
      />
      <i v-else class="fas fa-broadcast-tower text-4xl text-white"></i>
    </div>
    <div class="flex-1">
      <div class="flex items-center gap-3 mb-2">
        <span
          v-if="podcast.is_new"
          class="bg-pink-100 text-accentPink text-[10px] font-bold px-2 py-1 rounded uppercase"
          >Nuevo Episodio</span
        >
        <span class="text-xs text-gray-400"
          >Temp {{ podcast.season_number || 1 }} • Ep {{ podcast.episode_number || 1 }}</span
        >
      </div>
      <h3 class="text-xl font-bold text-navy mb-2">{{ podcast.title }}</h3>
      <p class="text-sm text-gray-500 mb-4 line-clamp-2">{{ podcast.description }}</p>
      <div class="flex items-center gap-4">
        <button
          @click="playPodcast"
          class="bg-navy text-white px-6 py-2 rounded-full text-xs font-bold hover:bg-accentPink transition flex items-center gap-2"
        >
          <i class="fas fa-play"></i> Reproducir
        </button>
        <span class="text-xs text-gray-400">{{ formattedDuration }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  podcast: {
    type: Object,
    required: true,
  },
})

const cardColor = computed(() => {
  return props.podcast.color || '#0A2966'
})

const formattedDuration = computed(() => {
  if (!props.podcast.duration) return '—'
  const minutes = Math.floor(props.podcast.duration / 60)
  const seconds = props.podcast.duration % 60
  return `${minutes}:${seconds.toString().padStart(2, '0')} min`
})

const playPodcast = () => {
  console.log('Play podcast:', props.podcast.slug)
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

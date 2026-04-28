<template>
  <div
    class="group cursor-pointer relative rounded-3xl overflow-hidden shadow-lg"
    @click="playVideo"
  >
    <!-- Background Image -->
    <div class="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition z-10"></div>
    <img
      :src="video.thumbnail_url || 'https://placehold.co/800x450/1E293B/FFFFFF?text=Video'"
      :alt="video.title"
      class="w-full h-64 object-cover group-hover:scale-105 transition duration-700"
    />

    <!-- Play Button -->
    <div class="absolute inset-0 flex items-center justify-center z-20">
      <div
        class="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center group-hover:scale-110 transition duration-300 group-hover:bg-green/80"
      >
        <i class="fas fa-play text-white text-2xl pl-1"></i>
      </div>
    </div>

    <!-- Content Overlay -->
    <div
      class="absolute bottom-0 left-0 right-0 p-6 z-20 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
    >
      <div class="flex items-center gap-2 mb-2">
        <span
          class="text-[10px] font-bold px-2 py-1 rounded-full uppercase"
          :style="{ backgroundColor: typeColor, color: '#fff' }"
        >
          {{
            video.type === 'workshop'
              ? 'Workshop'
              : video.type === 'tutorial'
                ? 'Tutorial'
                : 'Webinar'
          }}
        </span>
        <span class="text-xs text-gray-300">{{ formattedDuration }}</span>
      </div>
      <h3 class="text-white font-bold text-xl line-clamp-2">{{ video.title }}</h3>
      <p class="text-gray-300 text-sm mt-2 line-clamp-2">{{ video.description }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  video: {
    type: Object,
    required: true,
  },
})

const formattedDuration = computed(() => {
  if (!props.video.duration) return '—'
  const hours = Math.floor(props.video.duration / 3600)
  const minutes = Math.floor((props.video.duration % 3600) / 60)
  if (hours > 0) return `${hours}h ${minutes}min`
  return `${minutes} min`
})

const typeColor = computed(() => {
  const colors = {
    workshop: '#FF6B35',
    tutorial: '#0EF1EB',
    webinar: '#39CC7F',
  }
  return colors[props.video.type] || '#0A2966'
})

const playVideo = () => {
  // Abrir modal o redirigir a página del video
  console.log('Play video:', props.video.slug)
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

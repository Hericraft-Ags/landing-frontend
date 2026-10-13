<template>
  <section class="py-20 bg-slate-50 px-6">
    <div class="max-w-7xl mx-auto">
      <!-- Mostrar mensaje si no hay contenido en la categoría seleccionada -->
      <div v-if="!hasAnyContent" class="text-center py-16">
        <div
          class="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4"
        >
          <i class="fas fa-search text-4xl text-gray-400"></i>
        </div>
        <h3 class="text-xl font-semibold text-gray-600">No hay contenido en esta categoría</h3>
        <p class="text-gray-400 mt-1">Selecciona otra categoría para ver más contenido.</p>
      </div>

      <!-- Artículos -->
      <ContentSection
        v-if="showArticles"
        :title="'Artículos & Investigación'"
        subtitle="Lo más reciente en investigación educativa"
        icon="fas fa-newspaper"
        icon-color="navy"
        :items="latestArticles"
        type="article"
        view-all-link="/saberes/articulos"
      />

      <!-- Videos -->
      <ContentSection
        v-if="showVideos"
        :title="'Workshops & Videoblogs'"
        subtitle="Contenido visual para formación continua"
        icon="fas fa-video"
        icon-color="collegeOrange"
        :items="latestVideos"
        type="video"
        view-all-link="/saberes/videos"
      />

      <!-- Podcasts -->
      <ContentSection
        v-if="showPodcasts"
        :title="'Hericraft Podcast'"
        subtitle="Conversaciones con expertos del sector educativo"
        icon="fas fa-microphone-alt"
        icon-color="accentPink"
        :items="latestPodcasts"
        type="podcast"
        view-all-link="/saberes/podcasts"
      />

      <!-- Descargables -->
      <ContentSection
        v-if="showDownloads"
        :title="'Recursos Descargables'"
        subtitle="Material práctico listo para usar"
        icon="fas fa-file-download"
        icon-color="blue-500"
        :items="latestDownloads"
        type="downloadable"
        view-all-link="/saberes/descargables"
      />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import ContentSection from './ContentSection.vue'
import { useSaberesStore } from '@/stores/saberesStore'

const props = defineProps({
  filter: {
    type: String,
    default: 'all',
  },
})

const saberesStore = useSaberesStore()

const latestArticles = ref([])
const latestVideos = ref([])
const latestPodcasts = ref([])
const latestDownloads = ref([])

// Computed para controlar la visibilidad de cada sección según el filtro
const showArticles = computed(() => {
  return props.filter === 'all' || props.filter === 'articles'
})

const showVideos = computed(() => {
  return props.filter === 'all' || props.filter === 'videos'
})

const showPodcasts = computed(() => {
  return props.filter === 'all' || props.filter === 'podcasts'
})

const showDownloads = computed(() => {
  return props.filter === 'all' || props.filter === 'downloads'
})

// Determinar si hay al menos una sección visible con contenido
const hasAnyContent = computed(() => {
  if (showArticles.value && latestArticles.value.length > 0) return true
  if (showVideos.value && latestVideos.value.length > 0) return true
  if (showPodcasts.value && latestPodcasts.value.length > 0) return true
  if (showDownloads.value && latestDownloads.value.length > 0) return true
  return false
})

const fetchLatestContent = async () => {
  try {
    // Siempre cargamos todo, el filtro es solo visual
    const [articles, videos, podcasts, downloads] = await Promise.all([
      saberesStore.getLatestArticles(3),
      saberesStore.getLatestVideos(4),
      saberesStore.getLatestPodcasts(3),
      saberesStore.getLatestDownloads(8),
    ])

    latestArticles.value = articles.data || []
    latestVideos.value = videos.data || []
    latestPodcasts.value = podcasts.data || []
    latestDownloads.value = downloads.data || []
  } catch (error) {
    console.error('Error fetching latest content:', error)
  }
}

onMounted(() => {
  fetchLatestContent()
})
</script>

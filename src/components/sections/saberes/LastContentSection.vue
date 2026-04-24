<template>
  <section class="py-20 bg-slate-50 px-6">
    <div class="max-w-7xl mx-auto">
      <!-- Artículos -->
      <ContentSection
        v-if="latestArticles.length"
        title="Artículos & Investigación"
        subtitle="Lo más reciente en investigación educativa"
        icon="fas fa-newspaper"
        icon-color="navy"
        :items="latestArticles"
        type="article"
        view-all-link="/saberes/articulos"
      />

      <!-- Videos -->
      <ContentSection
        v-if="latestVideos.length"
        title="Workshops & Videoblogs"
        subtitle="Contenido visual para formación continua"
        icon="fas fa-video"
        icon-color="collegeOrange"
        :items="latestVideos"
        type="video"
        view-all-link="/saberes/videos"
      />

      <!-- Podcasts -->
      <ContentSection
        v-if="latestPodcasts.length"
        title="Hericraft Podcast"
        subtitle="Conversaciones con expertos del sector educativo"
        icon="fas fa-microphone-alt"
        icon-color="accentPink"
        :items="latestPodcasts"
        type="podcast"
        view-all-link="/saberes/podcasts"
      />

      <!-- Descargables -->
      <ContentSection
        v-if="latestDownloads.length"
        title="Recursos Descargables"
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
import { ref, onMounted } from 'vue'
import ContentSection from './ContentSection.vue'
import { useSaberesStore } from '@/stores/saberesStore'

const saberesStore = useSaberesStore()

const latestArticles = ref([])
const latestVideos = ref([])
const latestPodcasts = ref([])
const latestDownloads = ref([])

const fetchLatestContent = async () => {
  try {
    const [articles, videos, podcasts, downloads] = await Promise.all([
      saberesStore.getLatestArticles(6),
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

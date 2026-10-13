<script setup>
import { ref, onMounted } from 'vue'
import { useSaberesStore } from '@/stores/saberesStore'
import HeroSection from '@/components/sections/index/HeroSection.vue'
import AulaActiva from '@/components/sections/index/AulaActivaSection.vue'
import Consultoria from '@/components/sections/index/ConsultoriaSection.vue'
import FinalCTA from '@/components/sections/index/FinalCTASection.vue'
import GoogleEcosystem from '@/components/sections/index/GoogleEcosystemSection.vue'
import KnowledgeHub from '@/components/sections/index/KnowledgeHubSection.vue'
import Manifesto from '@/components/sections/index/ManifiestoSection.vue'

const saberesStore = useSaberesStore()
const latestArticles = ref([])
const latestPodcasts = ref([])
const latestDownloads = ref([])

const fetchLatestContent = async () => {
  try {
    const [articles, podcasts, downloads] = await Promise.all([
      saberesStore.getLatestArticles(1),
      saberesStore.getLatestPodcasts(1),
      saberesStore.getLatestDownloads(1),
    ])
    latestArticles.value = articles.data || []
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

<template>
  <div>
    <HeroSection />
    <Manifesto />
    <GoogleEcosystem />
    <AulaActiva />
    <Consultoria />
    <KnowledgeHub
      :latest-articles="latestArticles"
      :latest-podcasts="latestPodcasts"
      :latest-downloads="latestDownloads"
    />
    <FinalCTA />
  </div>
</template>

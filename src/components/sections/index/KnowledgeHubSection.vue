<template>
  <section
    id="saberes"
    class="py-24 px-6 bg-slate-50 border-t border-slate-200 relative overflow-hidden"
    aria-labelledby="saberes-title"
  >
    <div class="absolute inset-0 pointer-events-none opacity-20">
      <div class="absolute top-0 left-0 w-64 h-64 bg-collegeOrange/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
    </div>

    <div class="max-w-7xl mx-auto relative z-10">
      <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div class="space-y-4">
          <div
            class="inline-flex items-center gap-2 text-green-600 border border-green-200 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest"
          >
            <i class="fas fa-database"></i>
            <span>Knowledge Hub</span>
          </div>

          <h2
            id="saberes-title"
            class="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-navy"
          >
            {{ $t('index.banco_title') }}
          </h2>

          <p class="text-gray-500 text-lg leading-relaxed">
            {{ $t('index.banco_subtitle') }}
          </p>
        </div>

        <RouterLink
          to="/saberes"
          class="group relative px-6 py-3 rounded-full overflow-hidden border border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-orange-200"
        >
          <span
            class="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-105"
          ></span>
          <span
            class="absolute inset-0 z-10 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"
          ></span>
          <span class="relative z-20 flex items-center gap-2 text-gray-900 font-bold text-sm">
            {{ $t('index.banco_btn') }}
            <i class="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
          </span>
        </RouterLink>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <KnowledgeCard
          v-for="item in knowledgeItems"
          :key="item.id"
          :item="item"
          :reduce-motion="reduceMotion"
          @action-click="handleItemAction"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, inject, computed } from 'vue'
import KnowledgeCard from '@/components/ui/KnowledgeCard.vue'

const reduceMotion = inject('reduceMotion', ref(false))

const props = defineProps({
  latestArticles: {
    type: Array,
    default: () => [],
  },
  latestPodcasts: {
    type: Array,
    default: () => [],
  },
  latestDownloads: {
    type: Array,
    default: () => [],
  },
})

// Mapear los datos reales a la estructura que espera KnowledgeCard
const knowledgeItems = computed(() => {
  const items = []

  // Último Artículo
  const article = props.latestArticles[0]
  if (article) {
    items.push({
      id: `article-${article.id}`,
      type: 'article',
      typeLabel: 'Artículo',
      typeColor: 'blue',
      typeIcon: 'fas fa-newspaper',
      title: article.title,
      description: article.excerpt || article.description || '',
      image: article.featured_image || 'revistas.svg',
      imageAlt: article.title,
      metadata: new Date(article.published_at || article.created_at).toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
      metadataIcon: 'far fa-calendar-alt',
      actionLabel: 'Leer',
      actionIcon: 'fas fa-arrow-right',
      link: `/saberes/articulos/${article.slug}`,
    })
  }

  // Último Podcast
  const podcast = props.latestPodcasts[0]
  if (podcast) {
    // Calcular duración formateada manualmente si no viene del backend
    let durationDisplay = 'Nuevo episodio'
    let durationIcon = 'fas fa-star' // icono para "nuevo"

    if (podcast.formatted_duration) {
      durationDisplay = podcast.formatted_duration
      durationIcon = 'fa-clock'
    } else if (podcast.duration) {
      const mins = Math.floor(podcast.duration / 60)
      const secs = podcast.duration % 60
      durationDisplay = `${mins}:${secs.toString().padStart(2, '0')} min`
      durationIcon = 'fas fa-clock'
    }

    items.push({
      id: `podcast-${podcast.id}`,
      type: 'podcast',
      typeLabel: 'Podcast',
      typeColor: 'purple',
      typeIcon: 'fas fa-microphone',
      title: podcast.title,
      description: podcast.description || '',
      image: podcast.cover_image || 'podcast.svg',
      imageAlt: podcast.title,
      metadata: durationDisplay,
      metadataIcon: durationIcon,
      actionLabel: 'Reproducir',
      actionIcon: 'fas fa-play-circle',
      link: podcast.audio_url || null,
    })
  }

  // Último Descargable
  const download = props.latestDownloads[0]
  if (download) {
    items.push({
      id: `download-${download.id}`,
      type: 'download',
      typeLabel: 'Descargable',
      typeColor: 'orange',
      typeIcon: 'fas fa-download',
      title: download.title,
      description: download.description || '',
      image: 'manuales.svg', // imagen por defecto para descargables
      imageAlt: download.title,
      metadata: download.file_size || 'Descargar',
      metadataIcon: 'fas fa-file-pdf',
      actionLabel: 'Descargar',
      actionIcon: 'fas fa-download',
      link: download.file_url || '#',
    })
  }

  return items
})

const handleItemAction = item => {
  if (item.link) {
    window.open(item.link, '_blank')
  } else {
    console.log('Acción para:', item.title)
  }
}
</script>

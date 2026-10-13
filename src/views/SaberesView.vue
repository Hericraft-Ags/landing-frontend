<template>
  <SaberesHero />

  <!-- Barra de filtros sticky - centrada y con "Todo" primero -->
  <div class="sticky top-28 z-40 bg-white shadow-sm border-b border-gray-100">
    <div class="max-w-7xl mx-auto px-4 md:px-6">
      <div class="py-8 flex flex-wrap items-center justify-center gap-2">
        <!-- Botón Todo (siempre con color navy) -->
        <button
          @click="activeCategory = 'all'"
          class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2"
          :class="
            activeCategory === 'all'
              ? 'bg-navy text-white shadow-md'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          "
        >
          <i class="fas fa-th-large text-xs"></i>
          Todo
        </button>

        <!-- Botones de categorías con colores personalizados -->
        <button
          v-for="cat in categories"
          :key="cat.id"
          @click="activeCategory = cat.slug"
          class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 border"
          :class="[`filter-${cat.slug}`, { 'active-filter': activeCategory === cat.slug }]"
          :style="{
            borderColor: cat.color,
            color: activeCategory === cat.slug ? '#ffffff' : cat.color,
            backgroundColor: activeCategory === cat.slug ? cat.color : 'transparent',
          }"
        >
          <i :class="cat.icon" class="text-xs"></i>
          {{ cat.name }}
        </button>
      </div>
    </div>
  </div>

  <LatestContentSection :filter="activeCategory" />
  <NewsletterSection />
</template>

<script setup>
import { ref } from 'vue'
import SaberesHero from '@/components/sections/saberes/SaberesHero.vue'
import LatestContentSection from '@/components/sections/saberes/LastContentSection.vue'
import NewsletterSection from '@/components/sections/saberes/NewsletterSection.vue'

const activeCategory = ref('all')

const categories = ref([
  {
    id: 1,
    name: 'Artículos',
    slug: 'articles',
    icon: 'fas fa-newspaper',
    color: '#0A2966', // navy
  },
  {
    id: 2,
    name: 'Videos',
    slug: 'videos',
    icon: 'fas fa-video',
    color: '#FF6B35', // collegeOrange
  },
  {
    id: 3,
    name: 'Podcasts',
    slug: 'podcasts',
    icon: 'fas fa-microphone-alt',
    color: '#EC4899', // accentPink
  },
  {
    id: 4,
    name: 'Descargables',
    slug: 'downloads',
    icon: 'fas fa-file-download',
    color: '#3B82F6', // blue-500
  },
])
</script>

<style scoped>
/* Estilos de hover para cada categoría */
.filter-articles:hover:not(.active-filter) {
  background-color: #0a2966;
  color: #ffffff;
}
.filter-videos:hover:not(.active-filter) {
  background-color: #ff6b35;
  color: #ffffff;
}
.filter-podcasts:hover:not(.active-filter) {
  background-color: #ec4899;
  color: #ffffff;
}
.filter-downloads:hover:not(.active-filter) {
  background-color: #3b82f6;
  color: #ffffff;
}

/* Cuando el botón está activo, el hover solo oscurece ligeramente */
.active-filter:hover {
  opacity: 0.85;
}
</style>

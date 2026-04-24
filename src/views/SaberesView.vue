<template>
  <SaberesHero />
  <div class="sticky top-28 z-40 bg-white shadow-sm border-b border-gray-100">
    <div class="max-w-7xl mx-auto px-4 md:px-6">
      <div class="py-4"></div>
    </div>
  </div>
  <!-- Contenido principal -->
  <LatestContentSection />

  <!-- Newsletter -->
  <NewsletterSection />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import SaberesHero from '@/components/sections/saberes/SaberesHero.vue'
import LatestContentSection from '@/components/sections/saberes/LastContentSection.vue'
import NewsletterSection from '@/components/sections/saberes/NewsletterSection.vue'

// Datos mock para categorías (luego vendrán de la API)
const categories = ref([
  {
    id: 1,
    name: 'Artículos',
    slug: 'articulos',
    icon: 'fas fa-newspaper',
    color: 'navy',
    type: 'article',
  },
  {
    id: 2,
    name: 'Videos',
    slug: 'videos',
    icon: 'fas fa-video',
    color: 'collegeOrange',
    type: 'video',
  },
  {
    id: 3,
    name: 'Podcasts',
    slug: 'podcasts',
    icon: 'fas fa-microphone-alt',
    color: 'accentPink',
    type: 'podcast',
  },
  {
    id: 4,
    name: 'Descargables',
    slug: 'descargables',
    icon: 'fas fa-file-download',
    color: 'blue-500',
    type: 'downloadable',
  },
])

const activeCategory = ref('all')

const handleCategoryChange = categorySlug => {
  activeCategory.value = categorySlug
  // Aquí puedes agregar la lógica para filtrar contenido por categoría
  console.log('Categoría seleccionada:', categorySlug)
}

onMounted(() => {
  // Aquí puedes cargar las categorías desde la API si es necesario
})
</script>

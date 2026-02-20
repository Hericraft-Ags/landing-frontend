<template>
  <!-- ========================================= -->
  <!-- SECCIÓN: BANCO DE SABERES (MEJORADA) -->
  <!-- ========================================= -->
  <section
    id="saberes"
    class="py-24 px-6 bg-slate-50 border-t border-slate-200 relative overflow-hidden"
    aria-labelledby="saberes-title"
  >
    <!-- Elementos decorativos de fondo -->
    <div class="absolute inset-0 pointer-events-none opacity-20">
      <div class="absolute top-0 left-0 w-64 h-64 bg-collegeOrange/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
    </div>

    <div class="max-w-7xl mx-auto relative z-10">
      <!-- Encabezado mejorado -->
      <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div class="space-y-4">
          <!-- Badge -->
          <div
            class="inline-flex items-center gap-2 bg-collegeOrange/10 text-collegeOrange border border-collegeOrange/20 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest"
          >
            <i class="fas fa-database"></i>
            <span>Knowledge Hub</span>
          </div>

          <!-- Título -->
          <h2
            id="saberes-title"
            class="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-navy"
          >
            Banco de
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-collegeOrange to-purple-600"
              >Saberes</span
            >
          </h2>

          <!-- Descripción -->
          <p class="text-gray-500 max-w-2xl text-lg leading-relaxed">
            Recursos curados para potenciar tu desarrollo: Blogs, Podcasts, Revistas Digitales y
            más.
          </p>
        </div>

        <!-- Enlace a biblioteca mejorado -->
        <a
          href="#"
          class="group relative px-6 py-3 rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-collegeOrange/20"
        >
          <span
            class="absolute inset-0 bg-gradient-to-r from-collegeOrange to-purple-600 transition-transform duration-300 group-hover:scale-105"
          ></span>
          <span
            class="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"
          ></span>
          <span class="relative flex items-center gap-2 text-white font-bold text-sm">
            Explorar biblioteca completa
            <i class="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
          </span>
        </a>
      </div>

      <!-- Grid de Contenido -->
      <div class="grid md:grid-cols-3 gap-8">
        <KnowledgeCard
          v-for="item in knowledgeItems"
          :key="item.id"
          :item="item"
          :reduce-motion="reduceMotion"
          @action-click="handleItemAction"
        />
      </div>

      <!-- Sección de estadísticas (opcional) 
      <div class="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-200">
        <div v-for="stat in stats" :key="stat.label" class="text-center">
          <div class="text-2xl md:text-3xl font-bold text-navy mb-1">{{ stat.value }}</div>
          <div class="text-xs text-gray-400 uppercase tracking-wider">{{ stat.label }}</div>
        </div>
      </div>-->
    </div>
  </section>
</template>

<script setup>
import { ref, inject } from 'vue'
import KnowledgeCard from '@/components/ui/KnowledgeCard.vue'

// Inyectar preferencia de movimiento
const reduceMotion = inject('reduceMotion', ref(false))

// Datos de los items del banco de saberes
const knowledgeItems = [
  {
    id: 'podcast-ia',
    type: 'podcast',
    typeLabel: 'Podcast',
    typeColor: 'purple',
    typeIcon: 'fas fa-microphone',
    title: 'El Futuro de la IA en el Aula',
    description:
      'Descubre cómo la inteligencia artificial está redefiniendo el rol del docente en este episodio especial con expertos de Google.',
    image: 'podcast.svg',
    imageAlt: 'Podcast sobre IA en educación',
    metadata: '25 min',
    metadataIcon: 'far fa-clock',
    actionLabel: 'Escuchar',
    actionIcon: 'fas fa-play-circle',
  },
  {
    id: 'manual-hibridas',
    type: 'manual',
    typeLabel: 'Manual',
    typeColor: 'blue',
    typeIcon: 'fas fa-book',
    title: 'Guía Práctica: Aulas Híbridas',
    description:
      'Manual paso a paso para configurar espacios de aprendizaje mixtos utilizando herramientas de Google Workspace for Education.',
    image: 'manuales.svg',
    imageAlt: 'Manual de aulas híbridas',
    metadata: 'PDF Descargable',
    metadataIcon: 'far fa-file-pdf',
    actionLabel: 'Descargar',
    actionIcon: 'fas fa-download',
  },
  {
    id: 'revista-abril',
    type: 'revista',
    typeLabel: 'Revista',
    typeColor: 'orange',
    typeIcon: 'fas fa-newspaper',
    title: 'Hericraft Monthly: Edición Abril',
    description:
      'Entrevistas exclusivas, casos de éxito en Colegios y las últimas tendencias en infraestructura educativa.',
    image: 'revistas.svg',
    imageAlt: 'Revista educativa mensual',
    metadata: 'Leer Online',
    metadataIcon: 'far fa-eye',
    actionLabel: 'Leer Ahora',
    actionIcon: 'fas fa-arrow-right',
  },
]

// Estadísticas
const stats = [
  { value: '50+', label: 'Podcasts' },
  { value: '120+', label: 'Manuales' },
  { value: '24', label: 'Revistas' },
  { value: '15k', label: 'Descargas' },
]

// Manejador de acciones
const handleItemAction = item => {
  console.log('Acción en item:', item.title)
  // Aquí iría la lógica según el tipo de item
  switch (item.type) {
    case 'podcast':
      // Reproducir podcast
      break
    case 'manual':
      // Descargar PDF
      break
    case 'revista':
      // Abrir revista online
      break
  }
}
</script>

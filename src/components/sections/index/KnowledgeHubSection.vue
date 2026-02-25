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

        <a
          href="#"
          class="group relative px-6 py-3 rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-collegeOrange/20"
        >
          <span
            class="absolute inset-0 z-0 bg-linear-to-r from-orange-500 to-purple-600 transition-transform duration-300 group-hover:scale-105"
          ></span>
          <span
            class="absolute inset-0 z-10 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"
          ></span>
          <span class="relative z-20 flex items-center gap-2 text-white font-bold text-sm">
            {{ $t('index.banco_btn') }}
            <i class="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
          </span>
        </a>
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
import { ref, inject } from 'vue'
import KnowledgeCard from '@/components/ui/KnowledgeCard.vue'

const reduceMotion = inject('reduceMotion', ref(false))

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
    actionLabel: 'Reproducir',
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

const handleItemAction = item => {
  console.log('Acción en item:', item.title)
  switch (item.type) {
    case 'podcast':
      break
    case 'manual':
      break
    case 'revista':
      break
  }
}
</script>

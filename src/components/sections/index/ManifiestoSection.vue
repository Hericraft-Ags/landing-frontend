<template>
  <section id="educacion50" class="py-24 px-6 bg-white" aria-labelledby="educacion50-title">
    <div class="max-w-6xl mx-auto text-center">
      <span
        class="text-green-600 font-bold uppercase tracking-widest text-sm mb-2 block"
        role="text"
      >
        <span class="sr-only">Sección:</span>
        NUESTRO MANIFIESTO
      </span>
      <h2 id="educacion50-title" class="text-3xl md:text-5xl font-display font-bold text-navy mb-8">
        Hacia la Educación 5.0
      </h2>
      <p class="text-gray-600 max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
        Superamos la digitalización (4.0) para llegar a la humanización (5.0). La tecnología es el
        medio; el bienestar humano es el fin.
      </p>

      <div class="grid md:grid-cols-3 gap-8">
        <FeatureCard v-for="feature in features" :key="feature.id" :feature="feature" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import FeatureCard from '@/components/ui/FeatureCard.vue'

const features = [
  {
    id: 'invisible-tech',
    title: 'Tecnología invisible',
    description: 'Herramientas que potencian la conexión humana sin obstaculizarla.',
    icon: 'invisible-technology.svg',
    alt: 'Icono de tecnología invisible',
  },
  {
    id: 'wellness',
    title: 'Bienestar integral',
    description: 'Salud emocional y resiliencia como base del aprendizaje.',
    icon: 'bienestar.svg',
    alt: 'Icono de bienestar integral',
  },
  {
    id: 'social-impact',
    title: 'Impacto social',
    description: 'Proyectos que resuelven problemas reales de la comunidad.',
    icon: 'social-impact.svg',
    alt: 'Icono de impacto social',
  },
]
</script>

<template>
  <section
    id="ambientes"
    class="py-24 px-6 relative overflow-hidden bg-navy text-white"
    aria-labelledby="ambientes-title"
  >
    <!-- Fondo decorativo -->
    <AmbientesBackground />

    <div class="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
      <!-- Columna Texto -->
      <AmbientesContent
        :features="features"
        :reduce-motion="reduceMotion"
        @start-design="handleStartDesign"
      />

      <!-- Columna Visual (Mockup de la App) -->
      <AmbientesMockup :reduce-motion="reduceMotion" @image-error="handleImageError" />
    </div>

    <!-- Stats adicionales -->
    <!--<AmbientesStats :stats="stats" />-->
  </section>
</template>

<script setup>
import { ref, inject } from 'vue'
import AmbientesBackground from '@/components/ui/ambientes/AmbientesBackground.vue'
import AmbientesContent from '@/components/ui/ambientes/AmbientesContent.vue'
import AmbientesMockup from '@/components/ui/ambientes/AmbientesMockup.vue'
//import AmbientesStats from '@/components/ui/ambientes/AmbientesStats.vue'

// Inyectar preferencia de movimiento
const reduceMotion = inject('reduceMotion', ref(false))

// Características
const features = [
  {
    id: 'drag-drop',
    icon: 'fas fa-mouse-pointer',
    text: 'Interfaz "Arrastra & Suelta" intuitiva',
  },
  {
    id: 'pdf',
    icon: 'fas fa-file-pdf',
    text: 'Descarga automática el presupuesto estimado en PDF',
  },
  {
    id: 'chat',
    icon: 'fas fa-comments',
    text: 'Chat directo con arquitectos educativos',
  },
]

// Estadísticas
const stats = [
  { value: '500+', label: 'Espacios diseñados' },
  { value: '15min', label: 'Tiempo promedio' },
  { value: '98%', label: 'Satisfacción' },
  { value: '24/7', label: 'Disponible' },
]

// Manejadores
const handleStartDesign = () => {
  console.log('Iniciar diseño de aula')
  // Aquí iría la lógica de navegación
}

const handleImageError = () => {
  console.warn('Error cargando imagen de la app')
}
</script>

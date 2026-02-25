<template>
  <section
    id="ambientes"
    class="py-24 px-6 relative overflow-hidden bg-navy text-white"
    aria-labelledby="ambientes-title"
  >
    <AmbientesBackground />

    <div class="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
      <AmbientesContent
        :features="features"
        :reduce-motion="reduceMotion"
        @start-design="handleStartDesign"
      />

      <AmbientesMockup :reduce-motion="reduceMotion" @image-error="handleImageError" />
    </div>
  </section>
</template>

<script setup>
import { ref, inject, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import AmbientesBackground from '@/components/ui/ambientes/AmbientesBackground.vue'
import AmbientesContent from '@/components/ui/ambientes/AmbientesContent.vue'
import AmbientesMockup from '@/components/ui/ambientes/AmbientesMockup.vue'

const reduceMotion = inject('reduceMotion', ref(false))
const { t } = useI18n()

const features = computed(() => [
  {
    id: 'drag-drop',
    icon: 'fas fa-mouse-pointer',
    text: t('index.feature_drag_drop'),
  },
  {
    id: 'pdf',
    icon: 'fas fa-file-pdf',
    text: t('index.feature_pdf'),
  },
  {
    id: 'chat',
    icon: 'fas fa-comments',
    text: t('index.feature_chat'),
  },
])

const handleStartDesign = () => {
  console.log('Iniciar diseño de aula')
}

const handleImageError = () => {
  console.warn('Error cargando imagen de la app')
}
</script>

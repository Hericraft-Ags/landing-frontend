<template>
  <div
    class="group relative p-8 rounded-2xl border bg-white transition-all duration-300 hover:-translate-y-2"
    :class="[service.borderColor, service.hoverColor, { 'transition-none': reduceMotion }]"
    role="article"
  >
    <div
      class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      :class="{ 'transition-none': reduceMotion }"
    >
      <div
        class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
      ></div>
    </div>

    <div
      class="relative w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
      :class="[service.bgColor, { 'transition-none': reduceMotion }]"
    >
      <img
        :src="getImageUrl(service.icon)"
        :alt="`Icono de ${service.title}`"
        class="w-12 h-12 object-contain"
        loading="lazy"
        @error="handleImageError"
      />

      <div
        class="absolute -right-1 -top-1 w-3 h-3 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
      ></div>
    </div>

    <h3
      class="text-xl font-bold text-navy mb-3 group-hover:text-blue-600 transition-colors text-center"
    >
      {{ service.title }}
    </h3>

    <p class="text-gray-500 text-sm leading-relaxed mb-4 text-center">
      {{ service.description }}
    </p>

    <!-- Características
    <ul class="space-y-2 mb-6" v-if="service.features">
      <li
        v-for="feature in service.features"
        :key="feature"
        class="flex items-center gap-2 text-xs text-gray-400"
      >
        <i class="fas fa-check-circle" :class="service.iconColor"></i>
        {{ feature }}
      </li>
    </ul>-->

    <a
      href="#"
      class="inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 mx-auto w-full justify-center"
      :class="[service.iconColor, 'group-hover:gap-3']"
      @click.prevent="handleLearnMore(service)"
    >
      Saber más
      <i class="fas fa-arrow-right text-xs transition-transform group-hover:translate-x-1"></i>
    </a>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const props = defineProps({
  service: {
    type: Object,
    required: true,
  },
  reduceMotion: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['learn-more'])

const getImageUrl = imageName => {
  try {
    return new URL(`../../assets/images/${imageName}`, import.meta.url).href
  } catch (error) {
    console.error('Error al cargar la imagen:', imageName, error)
    return ''
  }
}

const handleImageError = event => {
  console.warn('Error cargando imagen:', props.service.icon)
  event.target.src =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24' fill='%239CA3AF'%3E%3Cpath d='M4 6h16v12H4V6zm2 2v8h12V8H6z'/%3E%3C/svg%3E"
}

const handleLearnMore = service => {
  console.log('Saber más sobre:', service.title)
  emit('learn-more', service)
}
</script>

<style scoped>
.group:hover i.fa-arrow-right {
  transform: translateX(4px);
}

.group:hover {
  box-shadow: 0 20px 30px -10px rgba(0, 0, 0, 0.1);
}

@media (prefers-reduced-motion: reduce) {
  .group,
  .group *,
  .group:hover,
  .group:hover * {
    transition: none !important;
    transform: none !important;
    animation: none !important;
  }
}
</style>

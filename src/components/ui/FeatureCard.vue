<template>
  <div
    class="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-green-600 transition-all group"
    :class="{ 'transition-none': reduceMotion }"
    role="article"
  >
    <img
      :src="getImageUrl(feature.icon)"
      :alt="feature.alt"
      class="w-16 h-16 mx-auto mb-4 object-contain group-hover:scale-110 transition-transform"
      :class="{ 'transition-none': reduceMotion }"
      loading="lazy"
      width="64"
      height="64"
      @error="handleImageError"
    />

    <h3 class="font-bold text-navy text-lg mb-2">
      {{ feature.title }}
    </h3>

    <p class="text-sm text-gray-500 leading-relaxed">
      {{ feature.description }}
    </p>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  feature: {
    type: Object,
    required: true,
  },
  reduceMotion: {
    type: Boolean,
    default: false,
  },
})

const getImageUrl = imageName => {
  console.log('Cargando imagen:', imageName)
  console.log('URL generada:', new URL(`../../assets/images/${imageName}`, import.meta.url).href)

  return new URL(`../../assets/images/${imageName}`, import.meta.url).href
}

const handleImageError = event => {
  console.error('ERROR: No se pudo cargar la imagen:', props.feature.icon)
  console.log('URL que falló:', event.target.src)

  console.log('Ruta del componente:', import.meta.url)

  event.target.style.display = 'none'
}
</script>

<template>
  <div class="relative overflow-hidden group/image">
    <img
      :src="imageSrc"
      alt="Hericraft Design App - Interfaz de diseño de aulas interactiva con arrastrar y soltar"
      class="w-full object-cover transform transition duration-700 group-hover:scale-105"
      :class="{ 'transition-none': reduceMotion }"
      loading="lazy"
      width="600"
      height="400"
      @error="$emit('error')"
    />

    <!-- Overlay interactivo -->
    <div
      class="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500 flex items-end justify-start p-6"
      :class="{ 'transition-none': reduceMotion }"
    >
      <span
        class="text-white text-sm font-medium bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20"
      >
        <i class="fas fa-play-circle mr-2 text-cyan-bright"></i>
        Ver demo interactiva
      </span>
    </div>

    <!-- Indicador beta -->
    <div
      class="absolute top-4 right-4 bg-white/10 backdrop-blur px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-2"
    >
      <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
      <span class="text-[10px] font-mono text-white/80">beta</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  reduceMotion: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['error'])

// La ruta de la imagen
const imageSrc = ref('https://placehold.co/600x400/1e293b/06b6d4?text=Interfaz+Dise%C3%B1ador+3D')
</script>

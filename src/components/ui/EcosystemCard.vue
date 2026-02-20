<!-- components/ui/EcosystemCard.vue -->
<template>
  <button
    class="bg-white/5 backdrop-blur border border-white/10 hover:bg-white/10 p-6 rounded-3xl transition-all group relative overflow-hidden flex flex-col items-center focus:outline-none focus:ring-2 focus:ring-cyan-bright focus:ring-offset-2 focus:ring-offset-transparent"
    :class="{ 'transition-none': reduceMotion }"
    :aria-label="ecosystem.ariaLabel"
    @click="$emit('click')"
    @keydown.enter="$emit('click')"
    @keydown.space.prevent="$emit('click')"
  >
    <!-- Efecto de gradiente -->
    <div
      class="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition"
      :class="{ 'transition-none': reduceMotion }"
      :style="gradientStyle"
      aria-hidden="true"
    ></div>

    <!-- Imagen con ruta corregida para Vite -->
    <img
      :src="imageSrc"
      :alt="`Icono ${ecosystem.name}`"
      class="h-16 w-auto object-contain mb-3 group-hover:scale-110 transition-transform"
      :class="{ 'transition-none': reduceMotion }"
      loading="lazy"
      width="64"
      height="64"
      @error="handleImageError"
    />

    <span class="font-bold text-white block">{{ ecosystem.name }}</span>
    <span class="text-[10px] text-gray-400 uppercase tracking-wider">
      {{ ecosystem.description }}
    </span>
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  ecosystem: {
    type: Object,
    required: true,
  },
  reduceMotion: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['click'])

// CORREGIDO: Usar import.meta.url para Vite
const getImageUrl = imageName => {
  // La ruta debe ser relativa a este archivo
  // Como el componente está en components/ui/, necesitamos subir dos niveles hasta src/
  return new URL(`../../assets/images/logos/${imageName}`, import.meta.url).href
}

const imageSrc = computed(() => getImageUrl(props.ecosystem.icon))

// CORREGIDO: Estilo para el gradiente con colores reales
const gradientStyle = computed(() => {
  // Mapa de colores (debes definir estas variables CSS o usar valores hexadecimales)
  const colors = {
    collegeOrange: '#f97316',
    teal: '#14b8a6',
    accentPink: '#ec4899',
    'blue-400': '#60a5fa',
  }

  const color = colors[props.ecosystem.color] || '#ffffff'

  return {
    background: `linear-gradient(to bottom right, ${color}20, transparent)`,
  }
})

// Manejador de error de imagen
const handleImageError = event => {
  console.warn(`Error cargando imagen: ${props.ecosystem.icon}`)
  // Imagen por defecto (un placeholder)
  event.target.src =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 24 24' fill='%23ffffff'%3E%3Cpath d='M4 6h16v12H4V6zm2 2v8h12V8H6z'/%3E%3C/svg%3E"
}
</script>

<style scoped>
button:focus-visible {
  outline: 2px solid #08be66; /* cyan-bright */
  outline-offset: 2px;
}

/* Efecto hover con borde coloreado */
button:hover {
  border-color: v-bind('`var(--${props.ecosystem.color})`');
}
</style>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  initials: {
    type: String,
    required: false,
    default: '',
  },
  borderColor: {
    type: String,
    required: false,
    default: 'gray-300',
  },
  image: {
    type: String,
    required: false,
  },
})

// Mapeo de colores para el borde del círculo
const borderClass = computed(() => {
  const colors = {
    'cyan-500': 'border-cyan-500',
    'gray-400': 'border-gray-400',
    'blue-500': 'border-blue-500',
    'gray-300': 'border-gray-300',
  }
  return colors[props.borderColor] || 'border-gray-300'
})

// Mapeo de colores para el texto del rol
const textColorClass = computed(() => {
  const colors = {
    'cyan-500': 'text-cyan-500',
    'gray-400': 'text-gray-400',
    'blue-500': 'text-blue-500',
    'gray-300': 'text-gray-300',
  }
  return colors[props.borderColor] || 'text-gray-300'
})
</script>

<template>
  <div
    class="flex flex-col items-center max-w-sm rounded-xl px-8 py-10 gap-6 bg-white/10 hover:border border-gray-500 transition-colors duration-300"
  >
    <!-- Círculo con iniciales - CORREGIDO -->
    <div
      class="flex bg-[#0A1931] rounded-full w-24 h-24 items-center justify-center border-4 flex-shrink-0 overflow-hidden"
      :class="borderClass"
    >
      <img
        v-if="image"
        :src="image"
        class="w-full h-full object-cover"
      />
      <div
        v-else
        class="text-3xl font-semibold text-white"
      >
        {{ props.initials }}
      </div>
    </div>

    <!-- Información del miembro del equipo -->
    <div class="text-center space-y-3">
      <div>
        <h3 class="text-xl font-semibold text-white">{{ props.name }}</h3>
        <span class="text-sm font-medium" :class="textColorClass">{{ props.role }}</span>
      </div>

      <!-- Descripción -->
      <div class="px-2 text-gray-300/80 text-sm leading-relaxed">
        <p>{{ props.description }}</p>
      </div>
    </div>
  </div>
</template>

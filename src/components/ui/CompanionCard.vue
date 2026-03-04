<template>
  <div class="group text-center cursor-pointer">
    <div class="relative w-32 h-32 mx-auto mb-4 perspective-1000">
      <div
        class="relative w-full h-full transition-transform duration-700 transform-style-3d flip-card-inner"
      >
        <div
          class="absolute inset-0 backface-hidden rounded-full overflow-hidden border-4 border-white shadow-lg"
          :class="frontBorderClass"
        >
          <img
            :src="getImageUrl(image1)"
            :alt="`${name} Pose 1`"
            class="w-full h-full object-cover"
          />
        </div>
        <div
          class="absolute inset-0 backface-hidden rounded-full overflow-hidden border-4 rotate-y-180"
          :class="backBorderClass"
        >
          <img
            :src="getImageUrl(image2)"
            :alt="`${name} Pose 2`"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
    <h3 class="font-bold text-navy transition duration-300" :class="textHoverClass">
      {{ name }}
    </h3>
    <p class="text-xs text-gray-500 font-bold uppercase tracking-wide">{{ role }}</p>
  </div>
</template>

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
  image1: {
    type: String,
    required: true,
  },
  image2: {
    type: String,
    required: true,
  },
  hoverColor: {
    type: String,
    default: 'yellow',
    validator: value => ['yellow', 'red', 'blue', 'purple', 'teal', 'orange'].includes(value),
  },
})

// Clase para el borde frontal
const frontBorderClass = computed(() => {
  const colors = {
    yellow: 'border-collegeYellow',
    red: 'border-red-500',
    blue: 'border-blue-500',
    purple: 'border-purple-500',
    teal: 'border-teal-500',
    orange: 'border-orange-500',
  }
  return colors[props.hoverColor] || 'border-collegeYellow'
})

// Clase para el borde trasero
const backBorderClass = computed(() => {
  const colors = {
    yellow: 'border-[#fbbf24]',
    red: 'border-red-500',
    blue: 'border-blue-500',
    purple: 'border-purple-500',
    teal: 'border-teal-500',
    orange: 'border-orange-500',
  }
  return colors[props.hoverColor] || 'border-[#fbbf24]'
})

// Clase para el hover del texto
const textHoverClass = computed(() => {
  const colors = {
    yellow: 'group-hover:text-[#fbbf24]',
    red: 'group-hover:text-red-500',
    blue: 'group-hover:text-blue-500',
    purple: 'group-hover:text-purple-500',
    teal: 'group-hover:text-teal-500',
    orange: 'group-hover:text-orange-500',
  }
  return colors[props.hoverColor] || 'group-hover:text-[#fbbf24]'
})

// Función para obtener URL de imagen desde public
const getImageUrl = imageName => {
  return `/assets/images/${imageName}`
}
</script>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
}

.transform-style-3d {
  transform-style: preserve-3d;
}

.backface-hidden {
  backface-visibility: hidden;
}

.rotate-y-180 {
  transform: rotateY(180deg);
}

.group:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-inner {
  transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>

<template>
  <div
    class="absolute top-1 left-1/2 -translate-x-1/2 z-30 transition-all duration-300 animate-float"
  >
    <!-- Contenedor principal: Nombre + Dimensiones juntos en la misma línea -->
    <div
      class="bg-black/70 backdrop-blur-md rounded-xl border border-blueprint-cyan/40 shadow-2xl overflow-hidden"
    >
      <div class="flex items-center justify-center gap-2 px-4 py-2 whitespace-nowrap">
        <h3 class="text-white font-bold text-sm">
          {{ roomName }}
        </h3>
        <span class="text-gray-500 text-[9px]">|</span>
        <span class="text-blueprint-cyan text-base font-mono font-bold">{{ area.toFixed(1) }}</span>
        <span class="text-gray-400 text-[9px] uppercase tracking-wide">m²</span>
        <span class="text-gray-500 text-[9px]">|</span>
        <span class="text-blueprint-cyan text-base font-mono font-bold">{{ students }}</span>
        <span class="text-gray-400 text-[9px] uppercase tracking-wide">PAX</span>
      </div>
    </div>

    <!-- Alerta de densidad con fondo rojo y animación -->
    <div
      v-if="densityAlert"
      class="mt-2 bg-red-500/90 backdrop-blur-sm rounded-xl px-3 py-1.5 text-center shadow-lg border border-red-400/50 animate-alert"
    >
      <div class="flex items-center justify-center gap-2">
        <i class="fas fa-exclamation-triangle text-white text-[10px] animate-pulse"></i>
        <span class="text-white text-[10px] font-bold uppercase tracking-wide">{{
          densityAlert
        }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { ACADEMIC_LEVELS } from '@/data/studioData'

const props = defineProps({
  roomName: {
    type: String,
    default: '',
  },
  area: {
    type: Number,
    default: 0,
  },
  students: {
    type: Number,
    default: 0,
  },
  level: {
    type: String,
    default: 'secundaria',
  },
})

const densityAlert = computed(() => {
  if (props.students === 0) return null

  const densityRatio = props.area / props.students
  const recommendedMinArea = ACADEMIC_LEVELS[props.level]?.minArea || 2.5

  if (densityRatio < recommendedMinArea) {
    return `Densidad Alta: ${densityRatio.toFixed(1)}m²/alumno (Rec: ${recommendedMinArea})`
  }
  return null
})
</script>

<style scoped>
/* Animación de flotación para todo el bloque */
@keyframes float {
  0% {
    transform: translateX(-50%) translateY(0px);
  }
  50% {
    transform: translateX(-50%) translateY(-6px);
  }
  100% {
    transform: translateX(-50%) translateY(0px);
  }
}

/* Animación para la alerta roja */
@keyframes alertPulse {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.9;
    transform: scale(1.02);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-alert {
  animation: alertPulse 1.5s ease-in-out infinite;
}

/* Animación para el icono de advertencia */
.animate-pulse {
  animation: pulse 1s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
}
</style>

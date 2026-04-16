<template>
  <div class="group relative inline-block ml-2 align-middle">
    <i
      class="fas fa-info-circle text-blueprint-cyan/50 hover:text-blueprint-cyan cursor-help transition-colors text-sm"
    ></i>
    <!-- Tooltip con posición manual -->
    <div
      class="absolute z-[9999] w-64 p-3 bg-slate-800 border border-blueprint-cyan/30 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none"
      :class="tooltipClass"
    >
      <strong class="block text-blueprint-orange mb-1 font-bold border-b border-gray-600 pb-1">
        {{ data?.title || 'Sin título' }}
      </strong>
      <p class="text-white text-xs leading-relaxed">
        {{ data?.text || 'Sin texto' }}
      </p>
      <div class="absolute w-0 h-0 border-8 border-transparent" :class="arrowClass"></div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  data: { type: Object, required: true },
  position: { type: String, default: 'bottom' }, // 'bottom', 'right', 'left', 'top'
})

// Clases para el tooltip según la posición
const tooltipClass = computed(() => {
  const classes = {
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
  }
  return classes[props.position] || classes.bottom
})

// Clases para la flecha según la posición
const arrowClass = computed(() => {
  const classes = {
    bottom: 'top-[-16px] left-1/2 -translate-x-1/2 border-b-slate-800',
    right: 'left-[-16px] top-1/2 -translate-y-1/2 border-r-slate-800',
    left: 'right-[-16px] top-1/2 -translate-y-1/2 border-l-slate-800',
    top: 'bottom-[-16px] left-1/2 -translate-x-1/2 border-t-slate-800',
  }
  return `absolute w-0 h-0 border-8 border-transparent ${classes[props.position]}`
})
</script>

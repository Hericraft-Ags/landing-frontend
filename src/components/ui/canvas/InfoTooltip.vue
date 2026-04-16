<template>
  <div class="relative inline-block ml-2 align-middle">
    <i
      ref="triggerRef"
      @mouseenter="showTooltip = true"
      @mouseleave="showTooltip = false"
      class="fas fa-info-circle text-blueprint-cyan/50 hover:text-blueprint-cyan cursor-help transition-colors text-sm"
    ></i>

    <!-- Tooltip posicionado respecto al body -->
    <Teleport to="body">
      <div
        v-if="showTooltip"
        class="fixed z-[99999] w-64 p-3 bg-slate-800 border border-blueprint-cyan/30 rounded-lg shadow-xl text-xs pointer-events-none"
        :style="tooltipStyle"
      >
        <strong class="block text-blueprint-orange mb-1 font-bold border-b border-gray-600 pb-1">
          {{ data?.title || 'Sin título' }}
        </strong>
        <p class="text-white text-xs leading-relaxed">
          {{ data?.text || 'Sin texto' }}
        </p>
        <div class="absolute w-0 h-0 border-8 border-transparent" :style="arrowStyle"></div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  data: { type: Object, required: true },
  position: { type: String, default: 'right' }, // 'right', 'bottom', 'left', 'top'
})

const triggerRef = ref(null)
const showTooltip = ref(false)

// Calcular posición del tooltip basada en el elemento disparador
const tooltipStyle = computed(() => {
  if (!triggerRef.value) return { display: 'none' }

  const rect = triggerRef.value.getBoundingClientRect()
  const tooltipWidth = 256
  const tooltipHeight = 150 // Aproximado

  let top = 0
  let left = 0

  switch (props.position) {
    case 'right':
      top = rect.top + rect.height / 2 - tooltipHeight / 2
      left = rect.right + 8
      // Si se sale por la derecha, ajustar
      if (left + tooltipWidth > window.innerWidth) {
        left = rect.left - tooltipWidth - 8
      }
      break
    case 'left':
      top = rect.top + rect.height / 2 - tooltipHeight / 2
      left = rect.left - tooltipWidth - 8
      if (left < 0) {
        left = rect.right + 8
      }
      break
    case 'top':
      top = rect.top - tooltipHeight - 8
      left = rect.left + rect.width / 2 - tooltipWidth / 2
      if (top < 0) {
        top = rect.bottom + 8
      }
      break
    default: // bottom
      top = rect.bottom + 8
      left = rect.left + rect.width / 2 - tooltipWidth / 2
      if (top + tooltipHeight > window.innerHeight) {
        top = rect.top - tooltipHeight - 8
      }
  }

  // Asegurar que no se salga por la izquierda
  left = Math.max(8, Math.min(left, window.innerWidth - tooltipWidth - 8))
  top = Math.max(8, Math.min(top, window.innerHeight - tooltipHeight - 8))

  return {
    top: `${top}px`,
    left: `${left}px`,
  }
})

const arrowStyle = computed(() => {
  if (!triggerRef.value) return {}

  const rect = triggerRef.value.getBoundingClientRect()

  switch (props.position) {
    case 'right':
      return {
        left: '-16px',
        top: '50%',
        transform: 'translateY(-50%)',
        borderRightColor: '#1e293b',
      }
    case 'left':
      return {
        right: '-16px',
        top: '50%',
        transform: 'translateY(-50%)',
        borderLeftColor: '#1e293b',
      }
    case 'top':
      return {
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
        borderTopColor: '#1e293b',
      }
    default: // bottom
      return {
        top: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
        borderBottomColor: '#1e293b',
      }
  }
})
</script>

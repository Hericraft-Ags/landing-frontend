<template>
  <div class="w-full h-full overflow-auto relative bg-tech-pattern" ref="canvasContainer">
    <!-- Contenedor interno que puede ser más grande que el padre -->
    <div
      class="flex items-center justify-center min-w-min min-h-full p-10"
      :style="innerContainerStyle"
    >
      <!-- Panel de información flotante -->
      <CanvasTooltip
        :room-name="currentRoomName"
        :area="realArea"
        :students="students"
        :level="level"
      />

      <!-- EL PLANO (BLUEPRINT) -->
      <div class="relative">
        <!-- Contenedor con borde exterior (para formas no rectangulares) -->
        <div
          class="absolute inset-0 bg-blueprint-cyan/20 rounded-lg"
          :style="borderContainerStyle"
          v-if="!isRectangular"
        ></div>

        <!-- El plano principal con clip-path -->
        <div
          id="blueprint-container"
          class="relative bg-blueprint-navy shadow-[0_0_60px_rgba(14,241,235,0.15)] transition-all duration-500 ease-in-out"
          :style="containerStyle"
        >
          <!-- Borde interior usando box-shadow -->
          <div class="absolute inset-0 pointer-events-none" :style="innerBorderStyle"></div>

          <!-- Grilla Técnica -->
          <div class="absolute inset-0 opacity-20 pointer-events-none" :style="gridStyle"></div>

          <!-- Ejes Centrales -->
          <div
            class="absolute top-1/2 left-0 w-full h-px bg-blueprint-cyan/10 border-t border-dashed border-blueprint-cyan/30"
          ></div>
          <div
            class="absolute left-1/2 top-0 h-full w-px bg-blueprint-cyan/10 border-l border-dashed border-blueprint-cyan/30"
          ></div>

          <!-- Capa de Mobiliario -->
          <div class="absolute inset-0">
            <div
              v-for="(item, index) in layoutItems"
              :key="index"
              class="absolute transition-all duration-700 ease-out animate-fade-in"
              :style="{ left: item.posX + 'px', top: item.posY + 'px', zIndex: 10 }"
            >
              <StudentTable v-if="item.type === 'student'" />
              <ZoneAsset
                v-else-if="item.type === 'zone'"
                :zone-id="item.id"
                :room-type-id="roomTypeId"
              />
            </div>
          </div>

          <!-- Cotas / Medidas -->
          <div class="absolute -top-8 left-0 w-full flex justify-center">
            <div class="flex items-center gap-2 text-blueprint-cyan font-mono text-xs">
              <div class="h-px w-8 bg-blueprint-cyan/50"></div>
              <span>{{ width }}m</span>
              <div class="h-px w-8 bg-blueprint-cyan/50"></div>
            </div>
          </div>
          <div class="absolute top-1/2 -left-12 h-full flex items-center -translate-y-1/2">
            <div class="flex items-center gap-2 text-blueprint-cyan font-mono text-xs -rotate-90">
              <div class="h-px w-8 bg-blueprint-cyan/50"></div>
              <span>{{ length }}m</span>
              <div class="h-px w-8 bg-blueprint-cyan/50"></div>
            </div>
          </div>

          <!-- Etiqueta de Escala -->
          <div
            class="absolute bottom-2 right-2 px-2 py-1 bg-black/40 border border-white/10 rounded text-[9px] text-gray-400 font-mono backdrop-blur-sm"
          >
            SCALE 1:{{ scaleRatio }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import StudentTable from '@/components/ui/canvas/StudentTable.vue'
import ZoneAsset from '@/components/ui/canvas/ZoneAsset.vue'
import CanvasTooltip from '@/components/ui/canvas/CanvasTooltip.vue'
import { ROOM_TYPES, CATALOG } from '@/data/studioData'

const props = defineProps({
  width: { type: Number, required: true },
  length: { type: Number, required: true },
  studentTablesCount: { type: Number, required: true },
  activeZones: { type: Array, default: () => [] },
  roomTypeId: { type: String, required: true },
  shapeConfig: { type: Object, required: true },
  students: { type: Number, default: 24 },
  level: { type: String, default: 'secundaria' },
})

const canvasContainer = ref(null)
const SCALE = 50

// Función para alternar pantalla completa
const toggleFullscreen = async () => {
  try {
    if (!document.fullscreenElement) {
      // Entrar a pantalla completa
      const element = canvasContainer.value
      if (element) {
        await element.requestFullscreen()
        isFullscreen.value = true
      }
    } else {
      // Salir de pantalla completa
      await document.exitFullscreen()
      isFullscreen.value = false
    }
  } catch (error) {
    console.error('Error al cambiar pantalla completa:', error)
  }
}

// Escuchar cambios en el estado de pantalla completa
const handleFullscreenChange = () => {
  isFullscreen.value = !!document.fullscreenElement
}

// Registrar evento de cambio de pantalla completa
if (typeof window !== 'undefined') {
  document.addEventListener('fullscreenchange', handleFullscreenChange)
}

// Datos para el panel de información
const currentRoomName = computed(() => ROOM_TYPES[props.roomTypeId]?.name || 'Aula')
const realArea = computed(() => props.width * props.length * (props.shapeConfig?.areaFactor || 1))
const isRectangular = computed(() => props.shapeConfig.id === 'rectangular')

// Estilo para el contenedor interno que permite scroll
const innerContainerStyle = computed(() => ({
  minWidth: `${props.width * SCALE + 80}px`,
  minHeight: `${props.length * SCALE + 80}px`,
}))

const containerStyle = computed(() => ({
  width: `${props.width * SCALE}px`,
  height: `${props.length * SCALE}px`,
  clipPath: props.shapeConfig.clipPath !== 'none' ? props.shapeConfig.clipPath : 'none',
  borderRadius: props.shapeConfig.borderRadius || '4px',
  filter: `drop-shadow(0 0 0 2px rgba(14, 241, 235, 0.6))`,
  overflow: 'hidden',
}))

const borderContainerStyle = computed(() => ({
  width: `${props.width * SCALE}px`,
  height: `${props.length * SCALE}px`,
  clipPath: props.shapeConfig.clipPath !== 'none' ? props.shapeConfig.clipPath : 'none',
  borderRadius: props.shapeConfig.borderRadius || '4px',
}))

const innerBorderStyle = computed(() => ({
  boxShadow: `inset 0 0 0 2px rgba(14, 241, 235, 0.6)`,
  borderRadius: props.shapeConfig.borderRadius || '4px',
  clipPath: props.shapeConfig.clipPath !== 'none' ? props.shapeConfig.clipPath : 'none',
}))

const gridStyle = computed(() => ({
  backgroundImage: `linear-gradient(#0EF1EB 0.5px, transparent 0.5px), linear-gradient(90deg, #0EF1EB 0.5px, transparent 0.5px)`,
  backgroundSize: `${SCALE}px ${SCALE}px`,
}))

const scaleRatio = computed(() => Math.round(1000 / SCALE))

// Motor de distribución
const layoutItems = computed(() => {
  const items = []
  const queue = [
    ...Array(props.studentTablesCount).fill({ type: 'student' }),
    ...props.activeZones.map(zId => ({ type: 'zone', id: zId })),
  ]

  const cellWidth = 3.2
  const cellDepth = 2.5
  const cols = Math.floor(props.width / cellWidth)
  const rows = Math.floor(props.length / cellDepth)
  const startX = (props.width - cols * cellWidth) / 2
  const startY = (props.length - rows * cellDepth) / 2

  let placedCount = 0

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (placedCount >= queue.length) break

      const realX_m = startX + c * cellWidth + cellWidth / 2
      const realY_m = startY + r * cellDepth + cellDepth / 2
      const normX = realX_m / props.width
      const normY = realY_m / props.length

      if (props.shapeConfig.validZone(normX, normY)) {
        const item = queue[placedCount]
        let posX_px, posY_px

        if (item.type === 'student') {
          posX_px = realX_m * SCALE - (CATALOG.furniture.workTable.width * SCALE) / 2
          posY_px = realY_m * SCALE - (1.2 * SCALE) / 2
        } else {
          posX_px = realX_m * SCALE - (1.6 * SCALE) / 2
          posY_px = realY_m * SCALE - (1.2 * SCALE) / 2
        }

        items.push({
          type: item.type,
          id: item.id,
          posX: posX_px,
          posY: posY_px,
        })
        placedCount++
      }
    }
  }
  return items
})
</script>

<style scoped>
/* Personalización de la barra de scroll */
:deep(.overflow-auto)::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

:deep(.overflow-auto)::-webkit-scrollbar-track {
  background: #1e293b;
  border-radius: 5px;
}

:deep(.overflow-auto)::-webkit-scrollbar-thumb {
  background: #0ef1eb;
  border-radius: 5px;
}

:deep(.overflow-auto)::-webkit-scrollbar-thumb:hover {
  background: #0bc5c0;
}

/* Para Firefox */
:deep(.overflow-auto) {
  scrollbar-width: thin;
  scrollbar-color: #0ef1eb #1e293b;
}

/* Transición para el botón */
button {
  transition: all 0.3s ease;
}

button:hover {
  transform: scale(1.05);
}
</style>

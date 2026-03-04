<template>
  <!-- Contenedor Flex para centrar el canvas en pantallas grandes -->
  <div
    class="w-full min-h-full flex items-center justify-center p-10 overflow-auto bg-tech-pattern"
  >
    <!-- EL PLANO (BLUEPRINT) -->
    <div
      id="blueprint-container"
      class="relative bg-blueprint-navy border-2 border-white/80 shadow-[0_0_60px_rgba(14,241,235,0.15)] transition-all duration-500 ease-in-out"
      :style="containerStyle"
    >
      <!-- Grilla Técnica -->
      <div class="absolute inset-0 opacity-20 pointer-events-none" :style="gridStyle"></div>

      <!-- Ejes Centrales (Decoración) -->
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
          <RenderStudentTable v-if="item.type === 'student'" />
          <RenderZoneAsset
            v-else-if="item.type === 'zone'"
            :zone-id="item.id"
            :room-type-id="roomTypeId"
          />
        </div>
      </div>

      <!-- Cotas / Medidas (Estilo Técnico) -->
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
</template>

<script setup>
import { computed } from 'vue'
import { ROOM_TYPES, CATALOG } from '@/data/studioData'

const props = defineProps({
  width: {
    type: Number,
    required: true,
  },
  length: {
    type: Number,
    required: true,
  },
  studentTablesCount: {
    type: Number,
    required: true,
  },
  activeZones: {
    type: Array,
    default: () => [],
  },
  roomTypeId: {
    type: String,
    required: true,
  },
  shapeConfig: {
    type: Object,
    required: true,
  },
})

// ESCALA: Aumentamos un poco para mejor visibilidad en pantallas grandes
const SCALE = 50

// Dimensiones en Pixeles
const roomW_px = computed(() => props.width * SCALE)
const roomL_px = computed(() => props.length * SCALE)

const scaleRatio = computed(() => Math.round(1000 / SCALE))

const containerStyle = computed(() => ({
  width: `${roomW_px.value}px`,
  height: `${roomL_px.value}px`,
  clipPath: props.shapeConfig.clipPath,
  borderRadius: props.shapeConfig.borderRadius || '4px',
}))

const gridStyle = computed(() => ({
  backgroundImage: `linear-gradient(#0EF1EB 0.5px, transparent 0.5px), linear-gradient(90deg, #0EF1EB 0.5px, transparent 0.5px)`,
  backgroundSize: `${SCALE}px ${SCALE}px`,
}))

// --- MOTOR DE DISTRIBUCIÓN ---
const layoutItems = computed(() => {
  const items = []

  // Cola de renderizado
  const queue = [
    ...Array(props.studentTablesCount).fill({ type: 'student' }),
    ...props.activeZones.map(zId => ({ type: 'zone', id: zId })),
  ]

  // Configuración de celda (Mueble + Pasillo)
  const cellWidth = 3.2
  const cellDepth = 2.5

  const cols = Math.floor(props.width / cellWidth)
  const rows = Math.floor(props.length / cellDepth)

  // Centrado del grupo de muebles
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

        // Posición
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

<!-- Componente: Mesa de Alumnos (Estilo Blueprint Neón) -->
<template>
  <div
    class="relative bg-blueprint-cyan/5 border border-blueprint-cyan flex items-center justify-center shadow-[0_0_10px_rgba(14,241,235,0.1)] group hover:bg-blueprint-cyan/20 hover:shadow-[0_0_15px_rgba(14,241,235,0.4)] transition-all duration-300 cursor-pointer"
    :style="studentTableStyle"
  >
    <!-- Sillas (Puntos con Glow) -->
    <div class="absolute -top-3 w-full flex justify-around px-2">
      <div
        v-for="i in 4"
        :key="`t-${i}`"
        class="w-3 h-3 rounded-full bg-blueprint-green shadow-[0_0_5px_currentColor] opacity-80 group-hover:opacity-100 transition-opacity"
      ></div>
    </div>
    <div class="absolute -bottom-3 w-full flex justify-around px-2">
      <div
        v-for="i in 4"
        :key="`b-${i}`"
        class="w-3 h-3 rounded-full bg-blueprint-green shadow-[0_0_5px_currentColor] opacity-80 group-hover:opacity-100 transition-opacity"
      ></div>
    </div>

    <!-- Icono Central -->
    <div class="flex flex-col items-center opacity-70 group-hover:opacity-100">
      <i class="fas fa-users text-blueprint-cyan text-xs mb-1"></i>
      <span class="text-[8px] font-mono text-blueprint-cyan leading-none">8 PAX</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { CATALOG } from '@/data/studioData'

const SCALE = 50

const studentTableStyle = computed(() => {
  const w_px = CATALOG.furniture.workTable.width * SCALE
  const h_px = CATALOG.furniture.workTable.depth * SCALE
  return {
    width: `${w_px}px`,
    height: `${h_px}px`,
  }
})
</script>

<!-- Componente: Muebles de Zona (Estilo Industrial) -->
<template>
  <div
    v-if="zone"
    class="relative flex flex-col items-center justify-center p-1 shadow-lg hover:scale-105 transition-transform duration-300 border border-dashed bg-opacity-20 backdrop-blur-sm cursor-help"
    :class="zone.asset.color"
    :style="zoneStyle"
    :title="zone.asset.label"
  >
    <div
      class="bg-black/30 w-8 h-8 rounded-full flex items-center justify-center mb-1 backdrop-blur-md"
    >
      <span class="text-lg drop-shadow-md">{{ zone.icon }}</span>
    </div>
    <span
      class="text-[8px] uppercase font-bold text-center leading-tight text-white/90 px-1 rounded bg-black/40 border border-white/10"
    >
      {{ zone.asset.label }}
    </span>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { ROOM_TYPES } from '@/data/studioData'

const props = defineProps({
  zoneId: {
    type: String,
    required: true,
  },
  roomTypeId: {
    type: String,
    required: true,
  },
})

const SCALE = 50

const zone = computed(() => {
  return ROOM_TYPES[props.roomTypeId]?.zones.find(z => z.id === props.zoneId)
})

const zoneStyle = computed(() => {
  const w_px = 1.6 * SCALE
  const h_px = 1.2 * SCALE
  return {
    width: `${w_px}px`,
    height: `${h_px}px`,
  }
})
</script>

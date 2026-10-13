<template>
  <section id="taller-diseno" class="relative py-12 bg-navy border-t-8 border-cyanBright">
    <div class="max-w-7xl mx-auto px-4 md:px-6">
      <div class="flex items-center justify-between mb-6 text-white">
        <div>
          <h2 class="text-2xl md:text-3xl font-display font-bold flex items-center gap-3">
            <i class="fas fa-laptop-code text-cyanBright"></i>
            {{ $t('ambientes.taller_title') }}
          </h2>
          <p class="text-gray-300 text-sm md:text-base mt-1">
            {{ $t('ambientes.taller_description') }}
          </p>
        </div>
        <div
          class="hidden md:flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full border border-white/20"
        >
          <span class="relative flex h-3 w-3">
            <span
              class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
            ></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span class="text-xs font-bold tracking-wider uppercase">{{
            $t('ambientes.taller_status')
          }}</span>
        </div>
      </div>

      <!-- Contenedor con Sidebar y Canvas -->
      <div
        ref="configuratorContainer"
        class="rounded-2xl overflow-hidden shadow-2xl border border-gray-700 bg-gray-900 h-[850px] flex relative"
      >
        <!-- Botón de pantalla completa -->
        <button
          @click="toggleFullscreen"
          class="absolute top-4 right-4 z-50 bg-black/50 hover:bg-black/70 backdrop-blur-sm p-2 rounded-lg text-white transition-all duration-300 border border-blueprint-cyan/30 hover:border-blueprint-cyan shadow-lg"
          :title="isFullscreen ? 'Salir de pantalla completa' : 'Pantalla completa'"
        >
          <i :class="isFullscreen ? 'fas fa-compress' : 'fas fa-expand'" class="text-sm"></i>
        </button>

        <!-- Sidebar -->
        <div class="w-80 lg:w-96 flex-shrink-0 h-full overflow-auto">
          <StudioSidebar
            :room-type="roomType"
            :shape="shape"
            :width="dimensions.width"
            :length="dimensions.length"
            :students="students"
            :finish-tier="finishTier"
            :kit-tier="kitTier"
            :active-zones="activeZones"
            :level="level"
            @update:room-type="roomType = $event"
            @update:shape="shape = $event"
            @update:width="dimensions.width = $event"
            @update:length="dimensions.length = $event"
            @update:students="students = $event"
            @update:finish-tier="finishTier = $event"
            @update:kit-tier="kitTier = $event"
            @update:active-zones="activeZones = $event"
            @update:level="level = $event"
            @show-help="showHelpModal = true"
            @request-quote="showContactModal = true"
          />
        </div>

        <!-- Canvas -->
        <div class="flex-1 relative overflow-hidden">
          <CanvasStudio
            :width="dimensions.width"
            :length="dimensions.length"
            :student-tables-count="studentTablesCount"
            :active-zones="activeZones"
            :room-type-id="roomType"
            :shape-config="currentShape"
            :students="students"
            :level="level"
          />
          <div
            v-if="showLoader"
            class="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 text-white z-20"
          >
            <i class="fas fa-circle-notch fa-spin text-4xl text-cyanBright mb-4"></i>
            <p class="text-lg animate-pulse">{{ $t('ambientes.taller_loader') }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Modales -->
    <HelpModal v-if="showHelpModal" @close="showHelpModal = false" />
    <ContactModal
      v-if="showContactModal"
      @close="showContactModal = false"
      :project-data="projectData"
    />
  </section>
</template>

<script setup>
import { ref, computed, onUnmounted } from 'vue'
import StudioSidebar from '@/components/ui/canvas/StudioSidebar.vue'
import CanvasStudio from '@/components/ui/canvas/CanvasStudio.vue'
import HelpModal from '@/components/ui/canvas/HelpModal.vue'
import ContactModal from '@/components/ui/canvas/ContactModal.vue'
import { ROOM_SHAPES, ROOM_TYPES, PRICING } from '@/data/studioData'

// Estado
const showLoader = ref(true)
const showHelpModal = ref(false)
const showContactModal = ref(false)
const roomType = ref('maker')
const shape = ref('rectangular')
const dimensions = ref({ width: 12, length: 10 })
const students = ref(24)
const level = ref('secundaria')
const finishTier = ref('standard')
const kitTier = ref('sencillo')
const activeZones = ref([])

// Fullscreen
const configuratorContainer = ref(null)
const isFullscreen = ref(false)

// Computed
const currentShape = computed(() => ROOM_SHAPES[shape.value])
const studentTablesCount = computed(() => Math.ceil(students.value / 8))

const getRoomName = type => ROOM_TYPES[type]?.name || type

const calculateBudget = () => {
  const roomConfig = ROOM_TYPES[roomType.value]
  if (!roomConfig) return 0

  // ✅ Área efectiva con factor de forma
  const areaFactor = ROOM_SHAPES[shape.value]?.areaFactor || 1
  const effectiveArea = dimensions.value.width * dimensions.value.length * areaFactor

  // 1. Acabados (usando área efectiva)
  const civilCost = effectiveArea * PRICING.finishes[finishTier.value]

  // 2. Mobiliario (sin cambios)
  const tablesCount = Math.ceil(students.value / 8)
  const furnitureCost =
    tablesCount * PRICING.furniture.studentTable + students.value * PRICING.furniture.chair

  // 3. Zonas (sin cambios)
  const zonesCost = activeZones.value.reduce((total, zoneId) => {
    const zone = roomConfig.zones.find(z => z.id === zoneId)
    return total + (zone ? zone.cost : 0)
  }, 0)

  // 4. Kit (sin cambios)
  const kitCost = PRICING.equipmentKits[roomType.value]?.[kitTier.value]?.cost || 0

  return civilCost + furnitureCost + zonesCost + kitCost
}

const projectData = computed(() => {
  const roomConfig = ROOM_TYPES[roomType.value]
  const zones = activeZones.value.map(id => {
    const zone = roomConfig?.zones.find(z => z.id === id)
    return zone ? zone.label : id
  })

  return {
    roomName: getRoomName(roomType.value),
    level: level.value,
    area: dimensions.value.width * dimensions.value.length,
    dims: {
      width: dimensions.value.width,
      length: dimensions.value.length,
    },
    shape: shape.value,
    students: students.value,
    tables: Math.ceil(students.value / 8),
    finish: finishTier.value,
    kit: kitTier.value,
    zones,
    budget: calculateBudget(),
  }
})

// Fullscreen handlers
const toggleFullscreen = async () => {
  try {
    if (!document.fullscreenElement) {
      const element = configuratorContainer.value
      if (element) {
        await element.requestFullscreen()
        isFullscreen.value = true
      }
    } else {
      await document.exitFullscreen()
      isFullscreen.value = false
    }
  } catch (_) {
    // Silently fail if fullscreen is not supported
  }
}

const handleFullscreenChange = () => {
  isFullscreen.value = !!document.fullscreenElement
}

document.addEventListener('fullscreenchange', handleFullscreenChange)

onUnmounted(() => {
  document.removeEventListener('fullscreenchange', handleFullscreenChange)
})

setTimeout(() => {
  showLoader.value = false
}, 1500)
</script>

<style scoped>
:fullscreen {
  background-color: #0f172a;
  border-radius: 0;
}

:fullscreen .rounded-2xl {
  border-radius: 0;
  height: 100vh !important;
}

:fullscreen .overflow-auto::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

:fullscreen .overflow-auto::-webkit-scrollbar-track {
  background: #1e293b;
  border-radius: 5px;
}

:fullscreen .overflow-auto::-webkit-scrollbar-thumb {
  background: #0ef1eb;
  border-radius: 5px;
}
</style>

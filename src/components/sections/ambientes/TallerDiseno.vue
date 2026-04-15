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
        class="rounded-2xl overflow-hidden shadow-2xl border border-gray-700 bg-gray-900 h-[850px] flex"
      >
        <!-- Sidebar -->
        <div class="w-80 lg:w-96 flex-shrink-0">
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
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import StudioSidebar from '@/components/ui/canvas/StudioSidebar.vue'
import CanvasStudio from '@/components/ui/canvas/CanvasStudio.vue'
import { ROOM_SHAPES } from '@/data/studioData'

const showLoader = ref(true)
const roomType = ref('maker')
const shape = ref('rectangular')
const dimensions = ref({ width: 12, length: 10 })
const students = ref(24)
const level = ref('secundaria')
const finishTier = ref('standard')
const kitTier = ref('sencillo')
const activeZones = ref([])

const currentShape = computed(() => ROOM_SHAPES[shape.value])
const studentTablesCount = computed(() => Math.ceil(students.value / 8))

setTimeout(() => {
  showLoader.value = false
}, 1500)
</script>

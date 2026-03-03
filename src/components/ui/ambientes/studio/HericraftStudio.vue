<template>
  <div
    ref="appRef"
    class="flex h-screen w-full bg-slate-900 text-white font-sans overflow-hidden relative"
  >
    <!-- MODALES -->
    <HelpModal v-if="showHelp" @close="showHelp = false" />
    <ContactModal v-if="showContact" @close="showContact = false" :project-data="projectData" />

    <!-- Botón para abrir sidebar en móvil -->
    <button
      v-if="!isSidebarOpen"
      @click="isSidebarOpen = true"
      class="absolute top-4 left-4 z-40 bg-blueprint-navy text-blueprint-cyan p-3 rounded-lg shadow-lg border border-blueprint-cyan/30 lg:hidden"
    >
      <i class="fas fa-bars"></i>
    </button>

    <!-- SIDEBAR (el mismo código que antes) -->
    <aside
      class="absolute lg:relative z-30 h-full w-80 lg:w-96 bg-slate-800/95 lg:bg-slate-800 border-r border-slate-700 shadow-2xl flex flex-col backdrop-blur-md transition-transform duration-300 ease-in-out"
      :class="isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'"
    >
      <!-- ... contenido del sidebar (igual que antes) ... -->
    </aside>

    <!-- CANVAS -->
    <main class="flex-1 bg-blueprint-navy relative flex flex-col overflow-hidden">
      <div
        class="absolute top-4 left-1/2 -translate-x-1/2 w-auto z-20 pointer-events-none flex flex-col items-center"
      >
        <div
          class="bg-black/60 backdrop-blur-md px-6 py-2 rounded-full border border-white/10 shadow-2xl flex items-center gap-6"
        >
          <h2 class="text-white text-sm font-bold tracking-wide">{{ currentRoom.name }}</h2>
          <div class="h-4 w-px bg-white/20"></div>
          <div class="flex gap-4 text-xs font-mono text-blueprint-cyan">
            <span>{{ realArea.toFixed(1) }}m²</span>
            <span>{{ students }} PAX</span>
          </div>
        </div>
        <!-- Alerta de densidad -->
        <div
          v-if="realArea / students < ACADEMIC_LEVELS[level].minArea"
          class="mt-2 bg-red-500/90 text-white text-[10px] font-bold px-3 py-1 rounded-full animate-bounce shadow-lg"
        >
          ⚠️ Densidad Alta: {{ (realArea / students).toFixed(1) }}m²/alumno (Rec:
          {{ ACADEMIC_LEVELS[level].minArea }})
        </div>
      </div>

      <button
        @click="toggleFullScreen"
        class="absolute top-4 right-4 z-20 bg-white/10 hover:bg-white/20 backdrop-blur p-2 rounded-lg text-white transition"
        :title="isFullscreen ? 'Salir Pantalla Completa' : 'Pantalla Completa'"
      >
        <i :class="`fas ${isFullscreen ? 'fa-compress' : 'fa-expand'}`"></i>
      </button>

      <div class="flex-1 overflow-hidden relative">
        <Canvas
          :width="dimensions.width"
          :length="dimensions.length"
          :student-tables-count="studentTablesCount"
          :active-zones="activeZones"
          :room-type-id="roomType"
          :shape-config="currentShape"
        />
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import Canvas from './CanvasAmbientes.vue'
import ContactModal from './ContactModal.vue'
import HelpModal from './HelpModal.vue'
import {
  ACADEMIC_LEVELS,
  ROOM_TYPES,
  ROOM_SHAPES,
  PRICING,
  FINISH_DESCRIPTIONS,
} from '@/data/studioData'

// ... (resto del código igual que antes) ...
</script>

<template>
  <div
    class="relative bg-blueprint-cyan/5 border border-blueprint-cyan flex items-center justify-center shadow-[0_0_10px_rgba(14,241,235,0.1)] group hover:bg-blueprint-cyan/20 hover:shadow-[0_0_15px_rgba(14,241,235,0.4)] transition-all duration-300 cursor-pointer"
    :style="tableStyle"
  >
    <!-- Sillas superiores -->
    <div class="absolute -top-3 w-full flex justify-around px-2">
      <div
        v-for="i in 4"
        :key="`t-${i}`"
        class="w-3 h-3 rounded-full bg-blueprint-green shadow-[0_0_5px_currentColor] opacity-80 group-hover:opacity-100 transition-opacity"
      ></div>
    </div>
    <!-- Sillas inferiores -->
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

const tableStyle = computed(() => {
  const w_px = CATALOG.furniture.workTable.width * SCALE
  const h_px = CATALOG.furniture.workTable.depth * SCALE
  return {
    width: `${w_px}px`,
    height: `${h_px}px`,
  }
})
</script>

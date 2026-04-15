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
  zoneId: { type: String, required: true },
  roomTypeId: { type: String, required: true },
})

const SCALE = 50

const zone = computed(() => {
  return ROOM_TYPES[props.roomTypeId]?.zones.find(z => z.id === props.zoneId)
})

const zoneStyle = computed(() => ({
  width: `${1.6 * SCALE}px`,
  height: `${1.2 * SCALE}px`,
}))
</script>

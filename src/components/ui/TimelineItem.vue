<template>
  <div class="relative">
    <div
      class="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-white shadow"
      :class="dotClass"
    ></div>
    <span class="text-xs font-bold text-gray-400 uppercase">{{ year }}</span>
    <h3 class="text-xl font-bold text-navy">{{ title }}</h3>
    <p class="text-gray-600 text-sm">{{ description }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  year: String,
  title: String,
  description: String,
  color: String,
  last: Boolean,
})

const dotClass = computed(() => {
  const colors = {
    navy: 'bg-navy',
    cyan: 'bg-cyan',
    green: 'bg-green',
  }
  return colors[props.color] || 'bg-navy'
})
</script>

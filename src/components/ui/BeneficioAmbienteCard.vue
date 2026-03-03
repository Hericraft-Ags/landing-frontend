<template>
  <div
    class="flex flex-col items-center text-center p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
  >
    <div
      class="w-14 h-14 bg-white rounded-full shadow flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
      :class="iconColorClass"
    >
      <i :class="icon" class="text-2xl"></i>
    </div>
    <h3 class="text-xl font-bold text-navy mb-2 group-hover:text-cyanBright transition-colors">
      {{ title }}
    </h3>
    <p class="text-gray-600 text-sm">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  iconColor: {
    type: String,
    default: 'orange',
  },
})

const iconColorClass = computed(() => {
  const colors = {
    orange: 'text-collegeOrange',
    cyan: 'text-cyan-500',
    purple: 'text-purple-500',
  }
  return colors[props.iconColor] || colors.orange
})
</script>

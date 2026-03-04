<template>
  <div
    class="step-card bg-white p-8 rounded-2xl shadow-lg border-2 border-transparent transition duration-300 text-center group"
  >
    <div
      class="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg"
      :class="circleClass"
    >
      {{ number }}
    </div>
    <h3 class="text-xl font-bold text-navy mb-3 group-hover:text-cyanBright transition-colors">
      {{ title }}
    </h3>
    <p class="text-gray-600">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  number: {
    type: [Number, String],
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: 'navy',
    validator: value => ['navy', 'orange', 'cyan'].includes(value),
  },
})

const circleClass = computed(() => {
  const colors = {
    navy: 'bg-navy text-white',
    orange: 'bg-collegeOrange text-white',
    cyan: 'bg-cyanBright text-navy',
  }
  return colors[props.color] || colors.navy
})
</script>

<style scoped>
.step-card:hover {
  transform: translateY(-5px);
  border-color: #0ef1eb;
}
</style>

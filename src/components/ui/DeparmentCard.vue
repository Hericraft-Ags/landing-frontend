<template>
  <div
    class="bg-white p-8 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-lg group"
    :class="borderClass"
  >
    <div
      class="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:rotate-12"
      :class="iconBgClass"
    >
      <i :class="['fas', icon, 'text-2xl', iconColorClass]"></i>
    </div>
    <h4 class="font-bold text-navy text-lg mb-2">{{ name }}</h4>
    <p class="text-sm text-gray-500 leading-relaxed">{{ description }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: String,
  description: String,
  icon: String,
  color: String,
})

const borderClass = computed(() => {
  const borders = {
    blue: 'border-l-4 border-blue-500',
    purple: 'border-l-4 border-purple-500',
    pink: 'border-l-4 border-pink-500',
    orange: 'border-l-4 border-collegeOrange',
    green: 'border-l-4 border-green',
    gray: 'border-l-4 border-gray-500',
  }
  return borders[props.color] || 'border-l-4 border-gray-300'
})

const iconBgClass = computed(() => {
  const backgrounds = {
    blue: 'bg-blue-100',
    purple: 'bg-purple-100',
    pink: 'bg-pink-100',
    orange: 'bg-orange-100',
    green: 'bg-green/20',
    gray: 'bg-gray-200',
  }
  return backgrounds[props.color] || 'bg-gray-100'
})

const iconColorClass = computed(() => {
  const colors = {
    blue: 'text-blue-600',
    purple: 'text-purple-600',
    pink: 'text-accentPink',
    orange: 'text-collegeOrange',
    green: 'text-green',
    gray: 'text-gray-600',
  }
  return colors[props.color] || 'text-gray-600'
})
</script>

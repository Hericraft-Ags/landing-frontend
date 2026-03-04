<template>
  <div class="text-center group">
    <div
      class="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 transition-all duration-300 group-hover:scale-105"
      :class="borderClass"
    >
      <img :src="image" :alt="name" class="w-full h-full object-cover" @error="handleImageError" />
    </div>
    <h3 class="font-bold text-navy text-lg">{{ name }}</h3>
    <p class="text-xs font-bold uppercase" :class="roleClass">{{ role }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: String,
  role: String,
  image: String,
  borderColor: String,
  roleColor: String,
})

const borderClass = computed(() => {
  const borders = {
    cyan: 'border-4 border-[#06b6d4]',
    navy: 'border-4 border-[#0a2966]',
    collegeOrange: 'border-4 border-[#ff6b35]',
  }
  return borders[props.borderColor] || 'border-4 border-[#0a2966]'
})

const roleClass = computed(() => {
  const roles = {
    cyan: 'text-[#06b6d4]',
    navy: 'text-[#0a2966]',
    collegeOrange: 'text-[#ff6b35]',
  }
  return roles[props.roleColor] || 'text-[#0a2966]'
})

const handleImageError = event => {
  event.target.src = `https://placehold.co/150x150/0A2966/FFFFFF?text=${props.name
    .split(' ')
    .map(n => n[0])
    .join('')}`
}
</script>

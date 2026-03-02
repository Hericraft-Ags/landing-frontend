<template>
  <div
    class="bg-slate-50 p-6 rounded-3xl shadow-sm border border-gray-100 card-hover-effect group relative overflow-hidden flex flex-col"
    :class="borderHoverClass"
  >
    <div class="absolute top-0 left-0 w-full h-1" :class="`bg-linear-to-r ${gradient}`"></div>

    <div class="flex justify-between items-start mb-6">
      <div
        class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center p-3 shadow-md group-hover:scale-110 transition group-hover:rotate-6"
      >
        <img :src="getImageUrl(icon)" :alt="title" class="w-full h-full object-contain" />
      </div>
      <span
        class="text-[10px] font-bold text-gray-400 uppercase tracking-wide border border-gray-200 px-2 py-1 rounded-full bg-white"
      >
        {{ badge }}
      </span>
    </div>

    <div class="w-full h-40 rounded-xl overflow-hidden mb-5 relative">
      <img
        :src="getImageUrl(image)"
        :alt="title"
        class="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
      />
    </div>

    <h3 class="text-2xl font-bold text-navy mb-2">{{ title }}</h3>

    <p class="text-gray-600 leading-relaxed text-sm flex-grow">
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
  image: {
    type: String,
    required: true,
  },
  badge: {
    type: String,
    required: true,
  },
  gradient: {
    type: String,
    default: 'from-yellow-400 to-orange-400',
  },
  icon: {
    type: String,
    required: true,
  },
  borderColor: {
    type: String,
    default: 'orange',
    validator: value => ['orange', 'purple', 'blue'].includes(value),
  },
})

const borderHoverClass = computed(() => {
  const colors = {
    orange: 'hover:border-[#ff6b35]',
    purple: 'hover:border-[#7c3aed]',
    blue: 'hover:border-[#2563eb]',
  }
  return colors[props.borderColor] || 'hover:border-[#ff6b35]'
})

const getImageUrl = imageName => {
  return `/assets/images/college/${imageName}`
}
</script>

<style scoped>
.card-hover-effect {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-width: 1px;
}

.card-hover-effect:hover {
  transform: translateY(-8px);
  box-shadow:
    0 20px 25px -5px rgba(37, 99, 235, 0.15),
    0 10px 10px -5px rgba(37, 99, 235, 0.1);
  border-width: 1px;
}
</style>

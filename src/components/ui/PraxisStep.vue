<template>
  <div class="group relative flex flex-col items-center text-center">
    <div
      class="w-24 h-24 bg-white border-[6px] rounded-full flex items-center justify-center text-4xl shadow-xl z-10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
      :class="borderColorClass"
    >
      <img :src="getImageUrl(icon)" :alt="title" class="w-12 h-12 object-contain" />
    </div>

    <div
      class="mt-8 bg-white p-8 rounded-[2rem] shadow-lg w-full hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2"
      :class="borderBottomClass"
    >
      <h3 class="text-2xl font-bold text-navy mb-1">{{ title }}</h3>
      <span class="text-xs font-bold uppercase tracking-widest block mb-4" :class="textColorClass">
        {{ subtitle }}
      </span>
      <p class="text-gray-600 text-sm leading-relaxed">
        {{ description }}
      </p>
    </div>
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
  subtitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: 'blue',
    validator: value => ['blue', 'orange', 'purple'].includes(value),
  },
  icon: {
    type: String,
    required: true,
  },
})

const borderColorClass = computed(() => {
  const colors = {
    blue: 'border-[#2563eb]',
    orange: 'border-[#ff6b35]',
    purple: 'border-[#7c3aed]',
  }
  return colors[props.color] || 'border-[#2563eb]'
})

const borderBottomClass = computed(() => {
  const colors = {
    blue: 'border-b-8 border-[#2563eb]',
    orange: 'border-b-8 border-[#ff6b35]',
    purple: 'border-b-8 border-[#7c3aed]',
  }
  return colors[props.color] || 'border-b-8 border-[#2563eb]'
})

const textColorClass = computed(() => {
  const colors = {
    blue: 'text-[#2563eb]',
    orange: 'text-[#ff6b35]',
    purple: 'text-[#7c3aed]',
  }
  return colors[props.color] || 'text-[#2563eb]'
})

const getImageUrl = imageName => {
  return `/assets/images/college/${imageName}`
}
</script>

<style scoped>
.group {
  transition: all 0.3s ease;
}

.group:hover .border-b-8 {
  filter: brightness(1.1);
}

.group:hover [class*='border-\\[\\#'] {
  filter: brightness(1.1);
}
</style>

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
    validator: value => ['navy', 'orange', 'green', 'pink', 'cyan'].includes(value),
  },
})

const formattedNumber = computed(() => {
  return props.number.toString().padStart(2, '0')
})

const borderClass = computed(() => {
  const borders = {
    navy: 'border-t-4 border-[#0a2966]',
    orange: 'border-t-4 border-[#ff6b35]',
    green: 'border-t-4 border-[#39cc7f]',
    pink: 'border-t-4 border-[#ec4899]',
    cyan: 'border-t-4 border-[#0ef1eb]',
  }
  return borders[props.color] || borders.navy
})

const shadowStyle = computed(() => {
  const colors = {
    navy: '0 10px 15px -3px rgba(10, 41, 102, 0.1)',
    orange: '0 10px 15px -3px rgba(255, 107, 53, 0.1)',
    green: '0 10px 15px -3px rgba(57, 204, 127, 0.1)',
    pink: '0 10px 15px -3px rgba(236, 72, 153, 0.1)',
    cyan: '0 10px 15px -3px rgba(14, 241, 235, 0.1)',
  }
  return colors[props.color] || colors.navy
})

const glowClass = computed(() => {
  const glows = {
    navy: 'bg-gradient-to-t from-[#0a2966]/5 to-transparent',
    orange: 'bg-gradient-to-t from-[#ff6b35]/5 to-transparent',
    green: 'bg-gradient-to-t from-[#39cc7f]/5 to-transparent',
    pink: 'bg-gradient-to-t from-[#ec4899]/5 to-transparent',
    cyan: 'bg-gradient-to-t from-[#0ef1eb]/5 to-transparent',
  }
  return glows[props.color] || 'bg-gradient-to-t from-gray-100 to-transparent'
})

const bgClass = computed(() => {
  const backgrounds = {
    navy: 'bg-[#0a2966]/10',
    orange: 'bg-orange-100',
    green: 'bg-[#39cc7f]/20',
    pink: 'bg-pink-100',
    cyan: 'bg-[#0ef1eb]/20',
  }
  return backgrounds[props.color] || backgrounds.navy
})

const textClass = computed(() => {
  const texts = {
    navy: 'text-[#0a2966]',
    orange: 'text-[#ff6b35]',
    green: 'text-[#39cc7f]',
    pink: 'text-[#ec4899]',
    cyan: 'text-[#0ef1eb]',
  }
  return texts[props.color] || texts.navy
})
</script>

<template>
  <div
    class="bg-white p-6 rounded-2xl shadow-sm transition-all duration-500 group relative overflow-hidden hover:-translate-y-2"
    :class="[borderClass]"
    :style="{ boxShadow: shadowStyle }"
  >
    <div
      class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      :class="glowClass"
    ></div>

    <div
      class="relative w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
      :class="[bgClass, textClass]"
    >
      <span class="relative z-10">{{ formattedNumber }}</span>

      <div
        class="absolute inset-1 rounded-full border-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        :class="borderClass.replace('border-t-4', 'border')"
      ></div>
    </div>

    <h4
      class="font-bold text-navy text-lg mb-3 text-center group-hover:text-opacity-90 transition-colors"
    >
      {{ title }}
    </h4>

    <p class="text-sm text-gray-600 leading-relaxed text-center px-2">
      {{ description }}
    </p>
  </div>
</template>

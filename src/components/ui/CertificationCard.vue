<template>
  <div
    class="relative bg-gray-50 border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition group overflow-hidden"
    :class="cardClass"
  >
    <div
      class="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl -mr-10 -mt-10"
      :class="glowClass"
    ></div>

    <div class="flex items-center gap-4 mb-6">
      <div class="bg-white p-3 rounded-xl shadow-sm">
        <i :class="[icon, 'text-3xl', iconColor]"></i>
      </div>
      <h3 class="text-2xl font-bold text-navy">{{ title }}</h3>
    </div>

    <p class="text-gray-600 text-sm mb-6">
      {{ description }}
    </p>

    <div class="flex gap-3">
      <template v-if="type === 'blockchain'">
        <span
          class="px-3 py-1 bg-white border border-gray-200 rounded text-xs font-mono text-gray-500"
        >
          <i class="fas fa-check-circle text-green-500 mr-1"></i> {{ $t('agora.verifiable') }}
        </span>
        <span
          class="px-3 py-1 bg-white border border-gray-200 rounded text-xs font-mono text-gray-500"
        >
          <i class="fas fa-share-alt text-blue-500 mr-1"></i> {{ $t('agora.shareable') }}
        </span>
      </template>

      <div v-else class="flex gap-3">
        <div
          v-for="(badge, index) in badges"
          :key="index"
          class="w-12 h-12 rounded-full bg-white border-2 p-1 shadow-sm hover:scale-110 transition cursor-help"
          :style="{ borderColor: badge.color }"
          :title="badge.title"
        >
          <img
            :src="getImageUrl(badge.icon)"
            :alt="badge.title"
            class="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'blockchain',
    validator: value => ['blockchain', 'badges'].includes(value),
  },
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
    default: 'text-blue-600',
  },
  glowColor: {
    type: String,
    default: 'blue',
  },
  badges: {
    type: Array,
    default: () => [],
  },
})

const cardClass = computed(() => {
  return props.type === 'blockchain' ? '' : ''
})

const glowClass = computed(() => {
  const colors = {
    blue: 'bg-blue-500/10',
    lime: 'bg-agoraLime/10',
  }
  return colors[props.glowColor] || 'bg-blue-500/10'
})

const getImageUrl = imageName => `/assets/images/agora/${imageName}`
</script>

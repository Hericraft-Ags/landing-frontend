<template>
  <ul class="space-y-4" role="list">
    <li
      v-for="feature in features"
      :key="feature.id"
      class="flex items-center gap-3 group"
      role="listitem"
    >
      <span
        class="w-8 h-8 rounded-full bg-cyan-bright/20 flex items-center justify-center text-cyan-bright flex-shrink-0 group-hover:scale-110 group-hover:bg-cyan-bright/30 transition-all duration-300"
        :class="{ 'transition-none': reduceMotion }"
        aria-hidden="true"
      >
        <i :class="[feature.icon, 'text-sm']"></i>
      </span>
      <span class="font-medium text-gray-200">{{ feature.text }}</span>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  features: {
    type: Array,
    required: true,
  },
  reduceMotion: {
    type: Boolean,
    default: false,
  },
})
</script>

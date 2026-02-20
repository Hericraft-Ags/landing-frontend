<template>
  <div
    class="max-w-7xl mx-auto relative z-10 mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-12"
  >
    <div v-for="stat in stats" :key="stat.label" class="text-center group/stat">
      <div
        class="text-2xl md:text-3xl font-bold text-cyan-bright mb-1 group-hover/stat:scale-110 transition-transform"
      >
        {{ stat.value }}
      </div>
      <div class="text-xs text-gray-400 uppercase tracking-wider">{{ stat.label }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  stats: {
    type: Array,
    required: true,
  },
})
</script>

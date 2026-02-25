<template>
  <div class="flex flex-col sm:flex-row gap-4 pt-4">
    <button
      @click="$emit('start-design')"
      class="group relative px-8 py-4 rounded-full font-bold overflow-hidden transition-all duration-300 border-2 border-blue-500 hover:border-cyan-bright hover:shadow-lg hover:shadow-blue-500/30 text-center"
      :class="{ 'transition-none': reduceMotion }"
    >
      <span
        class="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-bright opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      ></span>
      <span
        class="relative flex items-center justify-center gap-2 text-blue-500 group-hover:text-white transition-colors duration-300"
      >
        <i class="fas fa-magic group-hover:rotate-12 transition-transform duration-300"></i>
        {{ $t('index.start_design_btn') }}
      </span>
    </button>

    <a
      href="#galeria"
      class="group relative px-8 py-4 rounded-full font-bold overflow-hidden transition-all duration-300 border-2 border-blue-500 hover:border-cyan-bright hover:shadow-lg hover:shadow-blue-500/30 text-center"
      :class="{ 'transition-none': reduceMotion }"
    >
      <span
        class="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-bright opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      ></span>
      <span
        class="relative flex items-center justify-center gap-2 text-blue-500 group-hover:text-white transition-colors duration-300"
      >
        {{ $t('index.view_gallery_btn') }}
        <i class="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
      </span>
    </a>
  </div>
</template>

<script setup>
defineProps({
  reduceMotion: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['start-design'])
</script>

<style scoped>
.border-blue-500 {
  border-color: #3b82f6;
}

.text-blue-500 {
  color: #3b82f6;
}

.from-blue-500 {
  --tw-gradient-from: #3b82f6;
}

.to-cyan-bright {
  --tw-gradient-to: #06b6d4;
}

.hover\:border-cyan-bright:hover {
  border-color: #06b6d4;
}

.hover\:shadow-blue-500\/30:hover {
  box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.3);
}

.group {
  transition: all 0.3s ease;
}

.group:hover .group-hover\:rotate-12 {
  transform: rotate(12deg);
}

.group:hover .group-hover\:translate-x-1 {
  transform: translateX(4px);
}

@media (prefers-reduced-motion: reduce) {
  .group,
  .group *,
  .group:hover,
  .group:hover * {
    transition: none !important;
    transform: none !important;
    animation: none !important;
  }
}
</style>

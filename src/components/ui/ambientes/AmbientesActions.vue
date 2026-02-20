<template>
  <div class="flex flex-col sm:flex-row gap-4 pt-4">
    <button
      @click="$emit('start-design')"
      class="group relative px-8 py-4 rounded-full font-bold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-bright/20"
      :class="{ 'transition-none': reduceMotion }"
    >
      <!-- Efecto hover -->
      <span
        class="absolute inset-0 bg-gradient-to-r from-cyan-bright to-teal-500 transition-transform duration-300 group-hover:scale-105"
      ></span>
      <span
        class="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"
      ></span>
      <span class="relative flex items-center gap-2 text-white">
        <i class="fas fa-magic group-hover:rotate-12 transition-transform duration-300"></i>
        Iniciar diseño
      </span>
    </button>

    <a
      href="#galeria"
      class="border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all duration-300 hover:border-cyan-bright/50 text-center"
      :class="{ 'transition-none': reduceMotion }"
    >
      Ver galería de espacios
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

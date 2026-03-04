<template>
  <div
    class="p-4 bg-navy rounded-xl border border-cyan/20 group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan/20 hover:border-cyan"
  >
    <div class="relative overflow-hidden">
      <!-- Efecto de brillo -->
      <div
        class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
      ></div>

      <!-- Valor con animación -->
      <span
        class="block text-3xl font-bold text-cyan mb-1 group-hover:scale-110 group-hover:text-white transition-all duration-300 origin-left"
      >
        {{ value }}
      </span>

      <!-- Label con animación -->
      <span
        class="text-[10px] uppercase text-gray-400 group-hover:text-cyan group-hover:tracking-wider transition-all duration-300"
      >
        {{ label }}
      </span>
    </div>

    <!-- Efecto de borde inferior animado -->
    <div
      class="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan group-hover:w-full transition-all duration-500"
    ></div>
  </div>
</template>

<script setup>
defineProps({
  value: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
})
</script>

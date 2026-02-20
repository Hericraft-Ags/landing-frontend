<template>
  <div class="order-1 lg:order-2 relative group perspective-1000">
    <!-- Efectos de fondo -->
    <div
      class="absolute -inset-1 bg-gradient-to-r from-cyan-bright to-teal-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition duration-1000"
    ></div>
    <div
      class="absolute inset-0 bg-gradient-to-tr from-cyan-bright/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500"
    ></div>

    <!-- Contenedor principal -->
    <div
      class="relative bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-2"
      :class="{ 'transition-none': reduceMotion }"
    >
      <!-- Header del Navegador -->
      <AmbientesMockupHeader />

      <!-- Contenedor de imagen -->
      <AmbientesMockupImage :reduce-motion="reduceMotion" @error="$emit('image-error')" />

      <!-- Barra de herramientas inferior -->
      <AmbientesMockupToolbar />
    </div>

    <!-- Floating Card -->
    <AmbientesFloatingCard :reduce-motion="reduceMotion" />
  </div>
</template>

<script setup>
import AmbientesMockupHeader from './AmbientesMockupHeader.vue'
import AmbientesMockupImage from './AmbientesMockupImage.vue'
import AmbientesMockupToolbar from './AmbientesMockupToolbar.vue'
import AmbientesFloatingCard from './AmbientesFloatingCard.vue'

defineProps({
  reduceMotion: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['image-error'])
</script>

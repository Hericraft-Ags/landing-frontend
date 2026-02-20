<template>
  <div
    class="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur text-navy p-4 rounded-xl shadow-xl border-l-4 border-cyan-bright max-w-xs hidden md:block transform transition-all duration-300 hover:scale-105 cursor-default"
    :class="{ 'animate-float': !reduceMotion }"
    role="status"
    aria-label="Cotización lista"
  >
    <div class="flex items-center gap-3">
      <div class="bg-green-100 p-2 rounded-full">
        <i class="fas fa-check-circle text-green-600"></i>
      </div>
      <div>
        <p class="font-bold text-sm">Cotización instantánea</p>
        <p class="text-xs text-gray-500 mt-0.5">Diseño "Aula STEAM" · $45,890 MXN</p>
        <div class="flex items-center gap-2 mt-2">
          <span class="text-[8px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full"
            >PDF listo</span
          >
          <span class="text-[8px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full"
            >3D model</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  reduceMotion: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped>
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
</style>

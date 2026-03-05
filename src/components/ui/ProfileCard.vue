<template>
  <div
    class="bg-gradient-to-br from-[#2563eb] to-indigo-600 text-white rounded-3xl p-8 relative overflow-hidden shadow-xl hover:shadow-2xl transition duration-300"
  >
    <!-- Decoración de fondo -->
    <div
      class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"
    ></div>

    <div class="relative z-10">
      <div class="flex items-center gap-4 mb-4">
        <div
          class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-navy text-2xl"
        >
          <i class="fas fa-id-card"></i>
        </div>
        <h3 class="text-xl font-bold text-gray-200">{{ $t('college.profile_title') }}</h3>
      </div>

      <p class="text-gray-200 text-sm leading-relaxed mb-6">
        {{ $t('college.profile_description') }}
      </p>

      <a
        :href="profileLink"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block bg-white text-[#2563eb] px-6 py-2 rounded-full font-bold text-sm hover:bg-[#fbbf24] hover:text-navy transition shadow-lg text-center"
      >
        {{ $t('college.profile_button') }}
      </a>
    </div>
  </div>
</template>

<script setup>
const profileLink = 'https://soluciones-hericraft.aflip.in/ea3bf4d01b.html'
</script>

<style scoped>
/* Animación suave para el fondo */
.bg-gradient-to-br {
  background-size: 200% 200%;
  animation: gradientShift 10s ease infinite;
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Efecto hover para el botón */
a:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px -5px rgba(37, 99, 235, 0.3);
}
</style>

<template>
  <div
    class="bg-gradient-to-r from-blue-900 to-slate-900 rounded-[2rem] p-8 md:p-12 border border-blue-500/30 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl"
  >
    <!-- Decoración de fondo -->
    <div
      class="absolute -right-20 -top-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"
    ></div>

    <div class="relative z-10 max-w-xl text-left">
      <h4 class="text-3xl font-display font-bold text-white mb-4">
        {{ $t('college.parents_title_part1') }}
        <span class="text-blue-300">{{ $t('college.parents_title_part2') }}</span>
      </h4>
      <p class="text-blue-100 text-lg mb-6 leading-relaxed">
        {{ $t('college.parents_description') }}
      </p>

      <div class="flex flex-wrap gap-3">
        <span
          class="flex items-center gap-2 whitespace-nowrap bg-blue-950/60 px-4 py-1.5 rounded-lg text-xs font-bold text-blue-200 border border-blue-500/30 backdrop-blur-md"
        >
          <img :src="iconSchedule" :alt="$t('college.parents_feature_schedule')" class="w-8 h-8" />
          {{ $t('college.parents_feature_schedule') }}
        </span>

        <span
          class="flex items-center gap-2 whitespace-nowrap bg-blue-950/60 px-4 py-1.5 rounded-lg text-xs font-bold text-blue-200 border border-blue-500/30 backdrop-blur-md"
        >
          <img :src="iconSafe" :alt="$t('college.parents_feature_safe')" class="w-8 h-8" />
          {{ $t('college.parents_feature_safe') }}
        </span>
      </div>
    </div>

    <div class="relative z-10 flex-shrink-0 w-full md:w-auto">
      <a
        href="#contacto"
        class="inline-flex w-full md:w-auto items-center justify-center gap-3 bg-white text-[#ff6b35] font-bold px-8 py-4 rounded-full hover:bg-[#fbbf24] transition transform hover:scale-105 shadow-xl"
      >
        {{ $t('college.parents_button') }}
        <i class="fas fa-paper-plane"></i>
      </a>
    </div>
  </div>
</template>

<script setup>
const iconSchedule = '/assets/images/college/college-10.png'
const iconSafe = '/assets/images/college/college-11.png'
</script>

<style scoped>
@keyframes pulse-slow {
  0%,
  100% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

/* Efecto hover para el botón */
a:hover {
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 20px 25px -5px rgba(37, 99, 235, 0.5);
}
</style>

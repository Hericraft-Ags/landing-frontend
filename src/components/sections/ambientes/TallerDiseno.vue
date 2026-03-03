<template>
  <section id="taller-diseno" class="relative py-12 bg-navy border-t-8 border-cyanBright">
    <div class="max-w-7xl mx-auto px-4 md:px-6">
      <div class="flex items-center justify-between mb-6 text-white">
        <div>
          <h2 class="text-2xl md:text-3xl font-display font-bold flex items-center gap-3">
            <i class="fas fa-laptop-code text-cyanBright"></i>
            {{ $t('ambientes.taller_title') }}
          </h2>
          <p class="text-gray-300 text-sm md:text-base mt-1">
            {{ $t('ambientes.taller_description') }}
          </p>
        </div>
        <div
          class="hidden md:flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full border border-white/20"
        >
          <span class="relative flex h-3 w-3">
            <span
              class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
            ></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span class="text-xs font-bold tracking-wider uppercase">{{
            $t('ambientes.taller_status')
          }}</span>
        </div>
      </div>

      <div
        class="rounded-2xl overflow-hidden shadow-2xl border border-gray-700 bg-gray-900 h-[850px] relative"
      >
        <div id="studio-root" class="w-full h-full"></div>
        <div
          id="loader"
          class="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 text-white z-0"
        >
          <i class="fas fa-circle-notch fa-spin text-4xl text-cyanBright mb-4"></i>
          <p class="text-lg animate-pulse">{{ $t('ambientes.taller_loader') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Simular carga del estudio
  setTimeout(() => {
    const loader = document.getElementById('loader')
    if (loader) loader.style.display = 'none'
  }, 1500)
})
</script>

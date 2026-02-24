<script setup lang="ts">
import CountUp from '@/components/animations/components/CountUp.vue'
</script>

<template>
  <section class="relative w-full h-auto flex items-center justify-center py-5 flex-col z-2">
    <h2 class="text-white text-3xl font-bold sm:text-5xl">La petición (The Ask)</h2>
    <div
      class="border border-gray-400/20 bg-white/5 w-88 flex sm:w-2/3 mt-10 py-4 rounded-xl flex-col sm:flex-row hover:scale-105 transition-transform duration-300"
    >
      <div class="flex flex-col w-full sm:w-2/5 items-center justify-center p-4">
        <span class="text-white font-bold text-md">Inversión Buscada</span>
        <span class="text-white text-3xl font-bold"
          >$
          <CountUp
            :from="0"
            :to="500000"
            separator=","
            direction="up"
            :duration="0.5"
            :delay="0"
            :start-when="true"
            class-name="count-up-text"
          />
          USD</span
        >
      </div>
      <div class="flex flex-col w-full sm:w-1/5 items-center justify-center p-4">
        <span class="text-white font-bold text-md">Equity</span>
        <span class="text-[#00F0FF] text-3xl font-bold">18%</span>
      </div>
      <div class="flex flex-col w-full sm:w-2/5 items-center justify-center p-4">
        <span class="text-white font-bold text-md">Uso de Fondos</span>
        <span class="text-white text-3xl font-bold">GTM & Expansión</span>
      </div>
    </div>
    <div class="w-full px-4 text-center mt-10">
      <p class="text-white text-lg">
        Buscamos socios estratégicos para construir al jugador dominante en LATAM.
      </p>
      <p class="mt-5 text-gray-300/70 text-s">
        Visión de salida: Adquisición por gigante global (Google/Pearson) en 7-10 años.
      </p>
    </div>
    <div
      class="w-full px-4 mt-10 flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-10 z-2"
    >
      <a
        class="flex items-center gap-2 px-8 py-3 bg-[#00F0FF] text-black rounded-full font-bold hover:scale-105 transition-transform duration-300"
      >
        <i class="fas fa-file-pdf glow-red"></i>
        Solicitar Deck Completo
      </a>
      <a
        class="flex items-center gap-2 text-white px-8 py-3 font-bold border border-gray500/30 rounded-full hover:bg-white/10 transition-colors"
      >
        <i class="fas fa-calendar-alt"></i>
        Contactar Founder
      </a>
    </div>
  </section>
</template>

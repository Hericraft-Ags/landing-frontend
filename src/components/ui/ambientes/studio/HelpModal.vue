<template>
  <div
    class="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
  >
    <div
      class="bg-white text-navy p-6 md:p-8 rounded-2xl max-w-lg w-full shadow-[0_0_50px_rgba(14,241,235,0.2)] border border-blueprint-cyan relative"
    >
      <button
        @click="$emit('close')"
        class="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors"
      >
        <i class="fas fa-times text-xl"></i>
      </button>

      <h2 class="text-2xl font-bold font-sans text-blueprint-navy mb-4 flex items-center gap-2">
        <span class="text-blueprint-orange text-3xl"><i class="fas fa-compass"></i></span>
        Guía de Diseño Activo
      </h2>

      <div class="space-y-4 text-sm text-gray-600 leading-relaxed">
        <div class="flex gap-4 p-3 bg-slate-50 rounded-lg border border-slate-100">
          <div class="text-xl text-blueprint-cyan"><i class="fas fa-shapes"></i></div>
          <div>
            <strong class="text-navy block">Geometría Estratégica</strong>
            La forma no es solo estética. Define flujos de tráfico y acústica.
          </div>
        </div>
        <div class="flex gap-4 p-3 bg-slate-50 rounded-lg border border-slate-100">
          <div class="text-xl text-blueprint-orange"><i class="fas fa-th-large"></i></div>
          <div>
            <strong class="text-navy block">Zonificación</strong>
            Activa zonas específicas (ej. CNC, Robótica) para ver su mobiliario.
          </div>
        </div>
        <div class="flex gap-4 p-3 bg-slate-50 rounded-lg border border-slate-100">
          <div class="text-xl text-green-500"><i class="fas fa-chart-line"></i></div>
          <div>
            <strong class="text-navy block">Presupuesto Vivo</strong>
            Controla acabados y kits. El sistema te ayuda a balancear la inversión.
          </div>
        </div>
      </div>

      <button
        @click="$emit('close')"
        class="mt-6 w-full bg-blueprint-navy text-white font-bold py-3 rounded-xl hover:bg-blueprint-blue transition shadow-lg transform hover:-translate-y-1"
      >
        ¡Entendido, Iniciar Proyecto!
      </button>
    </div>
  </div>
</template>

<script setup>
defineEmits(['close'])
</script>

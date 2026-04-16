<template>
  <div
    class="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
  >
    <div
      class="bg-white text-navy p-6 md:p-8 rounded-2xl max-w-lg w-full shadow-[0_0_50px_rgba(14,241,235,0.2)] border border-blueprint-cyan relative"
    >
      <!-- Botón cerrar -->
      <button
        @click="$emit('close')"
        class="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors"
      >
        <i class="fas fa-times text-xl"></i>
      </button>

      <!-- Título -->
      <h2 class="text-2xl font-bold font-sans text-blueprint-navy mb-6 flex items-center gap-2">
        <span class="text-blueprint-orange text-3xl"><i class="fas fa-compass"></i></span>
        {{ $t('help.title') }}
      </h2>

      <!-- Lista de guías -->
      <div class="space-y-4 text-sm text-gray-600 leading-relaxed">
        <!-- Geometría Estratégica -->
        <div class="flex gap-4 p-3 bg-slate-50 rounded-lg border border-slate-100">
          <div class="text-xl text-blueprint-cyan"><i class="fas fa-shapes"></i></div>
          <div>
            <strong class="text-navy block">{{ $t('help.geometry_title') }}</strong>
            {{ $t('help.geometry_text') }}
          </div>
        </div>

        <!-- Zonificación -->
        <div class="flex gap-4 p-3 bg-slate-50 rounded-lg border border-slate-100">
          <div class="text-xl text-blueprint-orange"><i class="fas fa-th-large"></i></div>
          <div>
            <strong class="text-navy block"> {{ $t('help.zoning_title') }}</strong>
            {{ $t('help.zoning_text') }}
          </div>
        </div>

        <!-- Presupuesto Vivo -->
        <div class="flex gap-4 p-3 bg-slate-50 rounded-lg border border-slate-100">
          <div class="text-xl text-green-500"><i class="fas fa-chart-line"></i></div>
          <div>
            <strong class="text-navy block"> {{ $t('help.budget_title') }} </strong>
            {{ $t('help.budget_text') }}
          </div>
        </div>
      </div>

      <!-- Botón de acción -->
      <button
        @click="$emit('close')"
        class="mt-6 w-full bg-blueprint-navy text-white font-bold py-3 rounded-xl hover:bg-blueprint-blue transition shadow-lg transform hover:-translate-y-1"
      >
        {{ $t('help.button') }}
      </button>
    </div>
  </div>
</template>

<script setup>
defineEmits(['close'])
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fade-in 0.2s ease-out;
}
</style>

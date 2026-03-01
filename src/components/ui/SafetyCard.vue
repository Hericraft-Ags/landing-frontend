<template>
  <div
    class="bg-slate-50 border border-gray-100 rounded-3xl p-8 flex flex-col justify-center hover:shadow-lg transition duration-300"
  >
    <div class="flex items-center gap-4 mb-4">
      <div
        class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-2xl"
      >
        <i class="fas fa-shield-alt"></i>
      </div>
      <h3 class="text-xl font-bold text-navy">{{ $t('college.safety_title') }}</h3>
    </div>

    <p class="text-gray-600 text-sm leading-relaxed mb-4">
      {{ $t('college.safety_description') }}
    </p>

    <div class="flex gap-2 text-xs font-bold text-green-600 uppercase">
      <span class="bg-white px-2 py-1 rounded border border-green-200">
        <i class="fas fa-check mr-1"></i> {{ $t('college.safety_privacy') }}
      </span>
      <span class="bg-white px-2 py-1 rounded border border-green-200">
        <i class="fas fa-check mr-1"></i> {{ $t('college.safety_protection') }}
      </span>
    </div>
  </div>
</template>

<script setup>
// No se necesitan props por ahora
</script>

<style scoped>
/* Estilos adicionales si son necesarios */
</style>

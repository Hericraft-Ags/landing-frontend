<template>
  <div class="bg-softGray py-8 px-6 border-t border-gray-200">
    <div class="max-w-7xl mx-auto">
      <div
        class="bg-white p-6 rounded-lg border-l-4 border-yellow-400 shadow-sm flex gap-4 items-start"
      >
        <i class="fas fa-exclamation-triangle text-yellow-500 text-xl mt-1"></i>
        <div class="text-sm text-gray-500 leading-relaxed">
          <strong class="text-gray-700 block mb-1">{{ $t('ambientes.nota_title') }}</strong>
          <span v-html="$t('ambientes.nota_text')"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No se necesitan props
</script>

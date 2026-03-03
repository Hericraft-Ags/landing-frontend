<template>
  <div class="group relative inline-block ml-2 align-middle">
    <i
      class="fas fa-info-circle text-blueprint-cyan/50 hover:text-blueprint-cyan cursor-help transition-colors text-sm"
    ></i>
    <div
      class="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-64 p-3 bg-slate-800 border border-blueprint-cyan/30 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50 text-xs text-gray-300"
    >
      <strong class="block text-blueprint-orange mb-1 font-bold border-b border-gray-600 pb-1">{{
        data.title
      }}</strong>
      {{ data.text }}
      <div
        class="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-slate-800"
      ></div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  data: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="flex items-center gap-2 text-sm font-bold text-navy">
    <i :class="icon" class="text-green-600 w-5 h-5 flex-shrink-0" aria-hidden="true"></i>
    <span>{{ text }}</span>
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: 'fas fa-check',
  },
})
</script>

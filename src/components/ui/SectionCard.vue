<!-- components/ui/SectionCard.vue -->
<template>
  <div :id="id" class="scroll-mt-20">
    <div class="border-b border-gray-200 dark:border-gray-700 pb-3 mb-5">
      <h2 class="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
        <span
          class="w-1 h-7 bg-gradient-to-b from-blueprint-cyan to-blueprint-orange rounded-full"
        ></span>
        {{ title }}
      </h2>
    </div>
    <div class="prose prose-gray dark:prose-invert max-w-none">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  id: String,
  title: String,
})
</script>

<style scoped>
.scroll-mt-20 {
  scroll-margin-top: 5rem;
}
</style>

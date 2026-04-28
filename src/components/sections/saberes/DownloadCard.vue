<template>
  <a
    :href="download.file_url"
    target="_blank"
    class="block p-6 bg-white rounded-xl border border-gray-100 hover:border-blue-400 hover:shadow-lg transition-all duration-300 group text-center"
  >
    <i
      :class="download.icon_class || 'fas fa-file-pdf'"
      class="text-4xl text-gray-300 mb-4 group-hover:text-blue-500 transition"
    ></i>
    <h4 class="font-bold text-navy text-sm mb-2 line-clamp-2">{{ download.title }}</h4>
    <span class="text-[10px] text-gray-400 uppercase font-bold"
      >{{ download.file_type || 'PDF' }} • {{ download.file_size || '—' }}</span
    >
  </a>
</template>

<script setup>
defineProps({
  download: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

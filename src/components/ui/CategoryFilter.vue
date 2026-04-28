<template>
  <div class="flex flex-wrap gap-2">
    <button
      @click="$emit('change', 'all')"
      class="px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 transform hover:scale-105"
      :class="
        activeCategory === 'all'
          ? 'bg-navy text-white shadow-md'
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
      "
    >
      <i class="fas fa-th-large mr-2"></i>
      Todos
    </button>

    <button
      v-for="cat in categories"
      :key="cat.id"
      @click="$emit('change', cat.slug)"
      class="px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
      :class="
        activeCategory === cat.slug
          ? 'bg-navy text-white shadow-md'
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
      "
    >
      <i :class="cat.icon"></i>
      {{ cat.name }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  categories: {
    type: Array,
    required: true,
  },
  activeCategory: {
    type: String,
    default: 'all',
  },
})

defineEmits(['change'])
</script>

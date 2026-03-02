<template>
  <a
    :href="link"
    class="block bg-slate-50 rounded-3xl p-8 border border-gray-100 flex items-start gap-6 transition cursor-pointer group hover:shadow-xl transform hover:-translate-y-1"
  >
    <!-- Icono -->
    <div
      class="bg-white p-3 rounded-2xl shadow-sm group-hover:scale-110 transition flex-shrink-0 flex items-center justify-center w-16 h-16"
    >
      <img :src="getImageUrl(icon)" :alt="title" class="w-full h-full object-contain" />
    </div>

    <!-- Contenido -->
    <div class="flex-1">
      <h4
        class="font-bold text-navy text-xl transition flex items-center gap-2"
        :class="hoverColorClass"
      >
        {{ title }}
        <i
          class="fas fa-chevron-right text-xs opacity-0 group-hover:opacity-100 transition"
          :class="hoverColorClass"
        ></i>
      </h4>
      <p class="text-gray-600 text-sm mt-2 leading-relaxed">
        {{ description }}
      </p>
    </div>
  </a>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: 'purple',
    validator: value => ['purple', 'orange', 'blue'].includes(value),
  },
})

const getImageUrl = imageName => {
  if (imageName.startsWith('http') || imageName.startsWith('/')) {
    return imageName
  }
  return `/assets/images/${imageName}`
}

const hoverColorClass = computed(() => {
  const colors = {
    purple: 'group-hover:text-collegePurple',
    orange: 'group-hover:text-collegeOrange',
    blue: 'group-hover:text-collegeBlue',
  }
  return colors[props.color] || 'group-hover:text-collegePurple'
})
</script>

<style scoped>
a {
  transition: all 0.3s ease;
}

.group:hover i {
  transform: translateX(4px);
}
</style>

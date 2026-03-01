<template>
  <a
    :href="link"
    class="block bg-slate-50 rounded-3xl p-1 border border-gray-100 hover:shadow-xl transition group overflow-hidden transform hover:-translate-y-1"
  >
    <div class="p-8 pb-0">
      <div class="flex justify-between items-start mb-4">
        <h3
          class="text-2xl font-display font-bold text-navy group-hover:text-collegePurple transition"
        >
          {{ title }}
        </h3>
        <div
          class="bg-collegePurple text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide"
        >
          {{ badge }}
        </div>
      </div>
      <p class="text-gray-600 text-sm mb-8 leading-relaxed max-w-sm">
        {{ description }}
      </p>
      <span
        class="inline-flex items-center gap-2 text-sm font-bold text-collegePurple uppercase tracking-wider mb-6 group-hover:gap-3 transition-all"
      >
        {{ $t('college.events.view_details') }} <i class="fas fa-arrow-right"></i>
      </span>
    </div>
    <div class="relative h-48 mt-4 overflow-hidden rounded-b-3xl">
      <img
        :src="getImageUrl(image)"
        :alt="title"
        class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent"></div>
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
  badge: {
    type: String,
    required: true,
  },
  image: {
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

// Función para obtener URL de imagen desde public
const getImageUrl = imageName => {
  // Si ya es una URL completa, la devolvemos tal cual
  if (imageName.startsWith('http') || imageName.startsWith('/')) {
    return imageName
  }
  // Si no, asumimos que está en assets/images
  return `/assets/images/${imageName}`
}

// Clase para el color del texto en hover (para usar en el futuro)
const hoverColorClass = computed(() => {
  const colors = {
    purple: 'group-hover:text-collegePurple',
    orange: 'group-hover:text-collegeOrange',
    blue: 'group-hover:text-collegeBlue',
  }
  return colors[props.color] || 'group-hover:text-collegePurple'
})

// Clase para el color del badge
const badgeColorClass = computed(() => {
  const colors = {
    purple: 'bg-collegePurple',
    orange: 'bg-collegeOrange',
    blue: 'bg-collegeBlue',
  }
  return colors[props.color] || 'bg-collegePurple'
})
</script>

<style scoped>
/* Transiciones suaves */
.group {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Efecto de escala para la imagen */
.group:hover img {
  transform: scale(1.1);
}

/* Efecto para el texto "Ver Detalles" */
.group:hover span {
  gap: 0.75rem;
}
</style>

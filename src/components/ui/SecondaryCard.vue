<template>
  <a
    :href="link"
    class="block rounded-3xl p-8 border flex items-start gap-6 transition cursor-pointer group"
    :class="cardClass"
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
        class="font-bold text-navy text-xl group-hover:text-[#ff6b35] transition flex items-center gap-2"
      >
        {{ title }}
        <i class="fas fa-chevron-right text-xs opacity-0 group-hover:opacity-100 transition"></i>
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
    default: 'orange',
    validator: value => ['orange', 'blue'].includes(value),
  },
})

// Clase para la tarjeta según el color
const cardClass = computed(() => {
  const classes = {
    orange: 'bg-orange-50 border-orange-100 hover:border-[#ff6b35]/50 hover:bg-orange-100/50',
    blue: 'bg-blue-50 border-blue-100 hover:border-[#2563eb]/50 hover:bg-blue-100/50',
  }
  return classes[props.color] || classes.orange
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
</script>

<style scoped>
/* Transiciones suaves */
.group {
  transition: all 0.3s ease;
}

/* Efecto hover para el icono */
.group:hover img {
  transform: scale(1.1);
}

/* Efecto para la flecha */
.group:hover i.fa-chevron-right {
  opacity: 1;
  transform: translateX(4px);
}
</style>

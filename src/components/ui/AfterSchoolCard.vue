<template>
  <div
    class="relative group"
    :class="{ 'hover:-translate-y-2 transition duration-300': !disableHover }"
  >
    <!-- Tarjeta con efecto de brillo para la primera (Kit) -->
    <div
      v-if="color === 'orange'"
      class="absolute inset-0 bg-gradient-to-r from-[#ff6b35] to-red-600 rounded-[2rem] blur opacity-60 group-hover:opacity-100 transition duration-500"
    ></div>

    <!-- Contenido de la tarjeta -->
    <div class="relative rounded-[1.8rem] p-8 h-full flex flex-col" :class="cardClass">
      <!-- Badge opcional (solo para la primera tarjeta) -->
      <div
        v-if="badge"
        class="absolute right-8 bg-gradient-to-r from-red-500 to-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg z-20"
      >
        {{ badge }} 📦
      </div>

      <!-- Icono -->
      <div
        class="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition duration-300 shadow-inner"
        :class="iconBgClass"
      >
        <img :src="getImageUrl(icon)" :alt="title" class="w-10 h-10 object-contain" />
      </div>

      <!-- Título -->
      <h3 class="text-2xl font-bold text-white mb-3">{{ title }}</h3>

      <!-- Descripción -->
      <p class="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
        {{ description }}
      </p>

      <!-- Botón (solo para la primera tarjeta) -->
      <a
        v-if="buttonText && buttonLink"
        :href="buttonLink"
        target="_blank"
        class="w-full block bg-yellow-400 hover:bg-white text-navy font-bold py-4 rounded-xl text-center transition shadow-lg shadow-yellow-500/20 group-hover:shadow-yellow-500/40 text-sm uppercase tracking-wide"
      >
        {{ buttonText }} <i class="fas fa-shopping-cart ml-2"></i>
      </a>

      <!-- Características (para tarjetas 2 y 3) -->
      <div v-else-if="features" class="border-t border-white/5 pt-4 mt-auto">
        <ul class="text-xs text-gray-500 space-y-2 font-mono">
          <li v-for="(feature, index) in features" :key="index" class="flex items-center gap-2">
            <i class="fas fa-check text-green-400"></i> {{ feature }}
          </li>
        </ul>
      </div>
    </div>
  </div>
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
  color: {
    type: String,
    default: 'orange',
    validator: value => ['orange', 'blue', 'purple'].includes(value),
  },
  badge: {
    type: String,
    default: '',
  },
  buttonText: {
    type: String,
    default: '',
  },
  buttonLink: {
    type: String,
    default: '',
  },
  features: {
    type: Array,
    default: null,
  },
  disableHover: {
    type: Boolean,
    default: false,
  },
})

// Clase para la tarjeta según el color
const cardClass = computed(() => {
  const classes = {
    orange: 'bg-slate-800 border border-white/10 hover:border-white/20',
    blue: 'bg-slate-800/50 backdrop-blur-sm border border-white/5 hover:border-[#2563eb]/50 hover:bg-slate-800',
    purple:
      'bg-slate-800/50 backdrop-blur-sm border border-white/5 hover:border-purple-500/50 hover:bg-slate-800',
  }
  return classes[props.color] || classes.orange
})

// Clase para el fondo del icono
const iconBgClass = computed(() => {
  const classes = {
    orange: 'bg-white/10 group-hover:bg-white/20',
    blue: 'bg-blue-500/10 group-hover:bg-blue-500/20',
    purple: 'bg-purple-500/10 group-hover:bg-purple-500/20',
  }
  return classes[props.color] || classes.orange
})

// Función para obtener URL de imagen desde public
const getImageUrl = imageName => {
  return `/assets/images/college/${imageName}`
}
</script>

<style scoped>
/* Transiciones suaves */
.group {
  transition: all 0.3s ease;
}

/* Efecto de brillo para el badge */
.bg-gradient-to-r {
  background-size: 200% 200%;
  animation: gradientShift 3s ease infinite;
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Efecto hover para el botón */
a:hover {
  transform: translateY(-2px);
}
</style>

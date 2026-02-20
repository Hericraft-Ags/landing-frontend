<template>
  <div
    class="bg-white p-6 rounded-2xl shadow-sm transition-all duration-500 group relative overflow-hidden hover:-translate-y-2 hover:shadow-md"
    :class="[borderClass, shadowClass]"
  >
    <!-- Efecto de brillo en hover -->
    <div
      class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      :class="glowClass"
    ></div>

    <!-- Número con animación -->
    <div
      class="relative w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
      :class="[bgClass, textClass]"
    >
      <span class="relative z-10">{{ formattedNumber }}</span>

      <!-- Círculo decorativo interior -->
      <div
        class="absolute inset-1 rounded-full border-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        :class="borderClass.replace('border-t-4', 'border')"
      ></div>
    </div>

    <!-- Título -->
    <h4
      class="font-bold text-navy text-lg mb-3 text-center group-hover:text-opacity-90 transition-colors"
    >
      {{ title }}
    </h4>

    <!-- Descripción -->
    <p class="text-sm text-gray-600 leading-relaxed text-center px-2">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  number: {
    type: [Number, String],
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: 'navy',
    validator: value => ['navy', 'orange', 'green', 'pink', 'cyan'].includes(value),
  },
})

// Formatear número (añadir cero si es menor a 10)
const formattedNumber = computed(() => {
  return props.number.toString().padStart(2, '0')
})

// Clase para el borde superior
const borderClass = computed(() => {
  const borders = {
    navy: 'border-t-4 border-navy',
    orange: 'border-t-4 border-collegeOrange',
    green: 'border-t-4 border-green',
    pink: 'border-t-4 border-accentPink',
    cyan: 'border-t-4 border-cyan',
  }
  return borders[props.color] || borders.navy
})

// Clase para la sombra
const shadowClass = computed(() => {
  const shadows = {
    navy: 'hover:shadow-navy/10',
    orange: 'hover:shadow-collegeOrange/10',
    green: 'hover:shadow-green/10',
    pink: 'hover:shadow-accentPink/10',
    cyan: 'hover:shadow-cyan/10',
  }
  return shadows[props.color] || 'hover:shadow-gray-200'
})

// Clase para el efecto de brillo
const glowClass = computed(() => {
  const glows = {
    navy: 'bg-gradient-to-t from-navy/5 to-transparent',
    orange: 'bg-gradient-to-t from-collegeOrange/5 to-transparent',
    green: 'bg-gradient-to-t from-green/5 to-transparent',
    pink: 'bg-gradient-to-t from-accentPink/5 to-transparent',
    cyan: 'bg-gradient-to-t from-cyan/5 to-transparent',
  }
  return glows[props.color] || 'bg-gradient-to-t from-gray-100 to-transparent'
})

// Clase para el fondo del círculo
const bgClass = computed(() => {
  const backgrounds = {
    navy: 'bg-navy/10',
    orange: 'bg-orange-100',
    green: 'bg-green/20',
    pink: 'bg-pink-100',
    cyan: 'bg-cyan/20',
  }
  return backgrounds[props.color] || backgrounds.navy
})

// Clase para el texto
const textClass = computed(() => {
  const texts = {
    navy: 'text-navy',
    orange: 'text-collegeOrange',
    green: 'text-green',
    pink: 'text-accentPink',
    cyan: 'text-cyan',
  }
  return texts[props.color] || texts.navy
})
</script>

<style scoped>
/* Colores personalizados */
.bg-navy {
  background-color: #0a2966;
}

.border-navy {
  border-color: #0a2966;
}

.text-navy {
  color: #0a2966;
}

.border-collegeOrange {
  border-color: #ff6b35;
}

.text-collegeOrange {
  color: #ff6b35;
}

.border-green {
  border-color: #39cc7f;
}

.text-green {
  color: #39cc7f;
}

.border-accentPink {
  border-color: #ec4899;
}

.text-accentPink {
  color: #ec4899;
}

.border-cyan {
  border-color: #0ef1eb;
}

.text-cyan {
  color: #0ef1eb;
}

/* Animaciones */
@keyframes pulse-soft {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

/* Transiciones personalizadas */
.group {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Efectos hover mejorados */
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

.group:hover .group-hover\:rotate-3 {
  transform: rotate(3deg);
}

/* Sombras personalizadas */
.hover\:shadow-navy\/10:hover {
  box-shadow: 0 10px 15px -3px rgba(10, 41, 102, 0.1);
}

.hover\:shadow-collegeOrange\/10:hover {
  box-shadow: 0 10px 15px -3px rgba(255, 107, 53, 0.1);
}

.hover\:shadow-green\/10:hover {
  box-shadow: 0 10px 15px -3px rgba(57, 204, 127, 0.1);
}

.hover\:shadow-accentPink\/10:hover {
  box-shadow: 0 10px 15px -3px rgba(236, 72, 153, 0.1);
}

.hover\:shadow-cyan\/10:hover {
  box-shadow: 0 10px 15px -3px rgba(14, 241, 235, 0.1);
}

/* Responsive */
@media (max-width: 768px) {
  .group {
    transform: none !important;
  }

  .group:hover {
    transform: translateY(-4px) !important;
  }
}

/* Preferencias de movimiento */
@media (prefers-reduced-motion: reduce) {
  .group,
  .group *,
  .group:hover,
  .group:hover * {
    transition: none !important;
    transform: none !important;
    animation: none !important;
  }
}
</style>

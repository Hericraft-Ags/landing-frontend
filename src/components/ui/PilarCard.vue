<template>
  <div
    class="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-lg soft-shadow card-interaction group text-center relative overflow-hidden"
  >
    <div class="absolute top-0 left-0 w-full h-2" :class="colorClass"></div>

    <!-- Imagen con animación de flotación y escala -->
    <div
      class="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6"
      :class="bgIconClass"
    >
      <img
        :src="getImageUrl(icon)"
        :alt="title"
        class="w-12 h-12 object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:animate-float-gentle"
      />
    </div>

    <h3 class="font-bold text-navy text-xl mb-3">{{ title }}</h3>
    <p class="text-sm text-gray-500 leading-relaxed">
      {{ description }}
    </p>
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
    default: 'pink',
    validator: value => ['pink', 'rose', 'fuchsia', 'purple'].includes(value),
  },
})

const colorClass = computed(() => {
  const colors = {
    pink: 'bg-pink-500',
    rose: 'bg-rose-500',
    fuchsia: 'bg-fuchsia-700',
    purple: 'bg-purple-700',
  }
  return colors[props.color] || colors.pink
})

const bgIconClass = computed(() => {
  const colors = {
    pink: 'bg-blue-50',
    rose: 'bg-green-50',
    fuchsia: 'bg-purple-50',
    purple: 'bg-orange-50',
  }
  return colors[props.color] || colors.pink
})

const getImageUrl = imageName => `/assets/images/metanoia/${imageName}`
</script>

<style scoped>
.card-interaction {
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.card-interaction:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 30px -10px rgba(213, 0, 95, 0.25);
}

/* Animación de flotación suave */
@keyframes float-gentle {
  0% {
    transform: translateY(0px) scale(1);
  }
  50% {
    transform: translateY(-5px) scale(1.05);
  }
  100% {
    transform: translateY(0px) scale(1);
  }
}

.animate-float-gentle {
  animation: float-gentle 3s ease-in-out infinite;
}
</style>

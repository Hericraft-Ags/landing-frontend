<template>
  <article
    class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col h-full group"
    :class="{ 'transition-none': reduceMotion }"
    role="article"
  >
    <div class="relative h-52 overflow-hidden bg-gray-200">
      <div
        class="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wide shadow-lg flex items-center gap-1.5"
        :class="typeClasses.bg"
      >
        <i :class="item.typeIcon" class="text-xs"></i>
        <span>{{ item.typeLabel }}</span>
      </div>

      <img
        :src="imageSrc"
        :alt="item.imageAlt"
        class="w-full h-full object-cover transform transition duration-700 group-hover:scale-110"
        :class="{ 'transition-none': reduceMotion }"
        loading="lazy"
        @error="handleImageError"
      />

      <div
        class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        :class="{ 'transition-none': reduceMotion }"
      ></div>
    </div>

    <div class="p-6 flex flex-col flex-grow">
      <h3
        class="font-bold text-xl text-navy mb-3 line-clamp-2 group-hover:text-collegeOrange transition-colors"
      >
        {{ item.title }}
      </h3>

      <p class="text-gray-500 text-sm mb-4 line-clamp-3 flex-grow">
        {{ item.description }}
      </p>

      <div class="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
        <span class="text-xs text-gray-400 flex items-center gap-1.5">
          <i :class="item.metadataIcon"></i>
          {{ item.metadata }}
        </span>

        <button
          @click="$emit('action-click', item)"
          class="flex items-center gap-2 text-sm font-medium transition-all duration-300"
          :class="[typeClasses.text, typeClasses.hover, { 'transition-none': reduceMotion }]"
        >
          <span class="hidden sm:inline">{{ item.actionLabel }}</span>
          <i :class="[item.actionIcon, 'text-xl sm:text-base']"></i>
        </button>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  reduceMotion: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['action-click'])

const typeClasses = computed(() => {
  const colors = {
    purple: {
      bg: 'bg-purple-600 text-white',
      text: 'text-purple-600',
      hover: 'hover:text-purple-800',
    },
    blue: {
      bg: 'bg-blue-600 text-white',
      text: 'text-blue-600',
      hover: 'hover:text-blue-800',
    },
    orange: {
      bg: 'bg-orange-600 text-white',
      text: 'text-orange-600',
      hover: 'hover:text-orange-800',
    },
  }
  return colors[props.item.typeColor] || colors.purple
})

const imageSrc = computed(() => {
  try {
    return new URL(`../../assets/images/${props.item.image}`, import.meta.url).href
  } catch (error) {
    console.error('Error cargando imagen:', props.item.image)
    return getFallbackImage()
  }
})

const getFallbackImage = () => {
  const colors = {
    purple: '9333ea',
    blue: '2563eb',
    orange: 'ea580c',
  }
  const color = colors[props.item.typeColor] || '6b7280'
  return `https://placehold.co/600x400/${color}/white?text=${props.item.typeLabel}+Hericraft`
}

const handleImageError = event => {
  event.target.src = getFallbackImage()
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.group:hover i {
  transition: transform 0.3s ease;
}

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

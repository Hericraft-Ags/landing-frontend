<template>
  <div
    class="relative rounded-4xl shadow-2xl border-4 border-white w-full transform transition duration-500 group-hover:-translate-y-2 overflow-hidden"
  >
    <!-- Slides -->
    <div
      class="flex transition-transform duration-500"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image"
        :alt="`slide-${index}`"
        class="w-full object-cover flex-shrink-0"
      />
    </div>

    <!-- Controles -->
    <button
      @click="prevSlide"
      class="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full"
    >
      ‹
    </button>
    <button
      @click="nextSlide"
      class="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full"
    >
      ›
    </button>

    <!-- Indicadores -->
    <div class="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
      <span
        v-for="(img, i) in images"
        :key="i"
        @click="currentIndex = i"
        class="w-2 h-2 rounded-full cursor-pointer"
        :class="i === currentIndex ? 'bg-white' : 'bg-white/50'"
      ></span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Props (para hacerlo reutilizable)
const props = defineProps({
  images: {
    type: Array,
    required: true
  },
  autoplay: {
    type: Boolean,
    default: true
  },
  intervalTime: {
    type: Number,
    default: 4000
  }
})

const currentIndex = ref(0)
let interval = null

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}

const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + props.images.length) % props.images.length
}

// autoplay configurable
onMounted(() => {
  if (props.autoplay) {
    interval = setInterval(nextSlide, props.intervalTime)
  }
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>
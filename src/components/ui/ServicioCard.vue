<template>
  <div class="card-processus p-8 rounded-3xl group relative overflow-hidden">
    <div
      v-if="index === 1"
      class="absolute top-0 right-0 w-32 h-32 bg-cyan/10 rounded-full blur-3xl -mr-16 -mt-16"
    ></div>

    <div
      class="w-16 h-16 bg-navy border border-cyan/30 rounded-2xl flex items-center justify-center text-cyan text-3xl mb-8 group-hover:scale-110 transition shadow-[0_0_20px_rgba(14,241,235,0.2)]"
    >
      <img :src="getImageUrl(icon)" :alt="title" class="h-16 w-auto" />
    </div>

    <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-cyan transition">
      {{ title }}
    </h3>

    <p class="text-sm text-gray-400 leading-relaxed mb-6">
      {{ description }}
    </p>

    <ul class="text-xs text-gray-500 space-y-2">
      <li v-for="(feature, idx) in features" :key="idx" class="flex items-center gap-2">
        <i class="fas fa-check text-cyan"></i> {{ feature }}
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
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
  features: {
    type: Array,
    required: true,
  },
  index: {
    type: Number,
    default: 0,
  },
})

const getImageUrl = imageName => `/assets/images/processus/${imageName}`
</script>

<style scoped>
.card-processus {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(14, 241, 235, 0.1);
  transition: all 0.3s ease;
}

.card-processus:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: #0ef1eb;
  transform: translateY(-5px);
  box-shadow: 0 0 30px rgba(14, 241, 235, 0.1);
}
</style>

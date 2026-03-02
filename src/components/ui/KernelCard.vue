<template>
  <div
    class="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#8dc63f] transition group text-center card-hover"
  >
    <div
      class="w-16 h-16 mx-auto bg-gray-100 rounded-2xl flex items-center justify-center text-oxfordGray mb-6 text-3xl group-hover:bg-[#8dc63f] group-hover:text-white transition transform group-hover:rotate-6"
    >
      <img :src="getImageUrl(icon)" :alt="title" class="w-full h-full object-contain" />
    </div>
    <h3 class="font-bold text-oxfordGray mb-2 text-lg">{{ title }}</h3>
    <p class="text-sm text-gray-500">{{ description }}</p>
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
})

const getImageUrl = imageName => `/assets/images/agora/${imageName}`
</script>

<style scoped>
.card-hover {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.card-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px -10px rgba(141, 198, 63, 0.2);
}
</style>

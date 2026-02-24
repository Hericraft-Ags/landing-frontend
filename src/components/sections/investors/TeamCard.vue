<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  initials: {
    type: String,
    required: false,
    default: '',
  },
  borderColor: {
    type: String,
    required: false,
    default: 'border-gray-300',
  },
})
</script>

<template>
  <div
    class="flex flex-col items-center max-w-95 rounded-xl px-6 py-12 gap-4 bg-white/10 my-10 hover:border border-gray-500 transition-colors duration-300"
  >
    <div
      class="flex bg-[#0A1931] rounded-full w-30 h-30 items-center justify-center border-4"
      :class="`border-${props.borderColor}`"
    >
      <span class="text-5xl font-semibold text-white">{{ props.initials }}</span>
    </div>
    <div class="text-center">
      <h3 class="text-2xl font-semibold text-white">{{ props.name }}</h3>
      <span class="text-sm text-gray-500" :class="`text-${props.borderColor}`">{{
        props.role
      }}</span>
      <div class="w-full px-4 py-2 text-gray-300/50 text-sm">
        <p>{{ props.description }}</p>
      </div>
    </div>
  </div>
</template>

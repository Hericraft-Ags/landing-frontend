<script setup>
defineProps({
  title: String,
  value: String,
  subtitle: String,
  borderColor: {
    type: String,
    default: 'border-white/20',
  },
  subtitleColor: {
    type: String,
    default: 'text-gray-400',
  },
  icon: String,
  large: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div
    class="glass-panel py-6 rounded-2xl border-l-4 sm:border-l-8 border w-full relative"
    :class="[borderColor, large ? 'col-span-2' : '']"
  >
    <p class="text-gray-400 text-xs uppercase font-bold tracking-wider mb-2 ml-2 px-1">
      {{ title }}
    </p>

    <div
      :class="large ? 'text-3xl sm:text-4xl lg:text-5xl' : 'text-2xl sm:text-3xl lg:text-4xl'"
      class="font-mono font-bold text-white ml-4"
    >
      {{ value }}
    </div>

    <p v-if="subtitle" class="text-[10px] mt-1 ml-4" :class="subtitleColor">
      <i v-if="icon" :class="icon"></i>
      {{ subtitle }}
    </p>

    <div v-if="large && icon" class="absolute bottom-6 right-6 opacity-30 text-4xl">
      <i :class="icon"></i>
    </div>
  </div>
</template>

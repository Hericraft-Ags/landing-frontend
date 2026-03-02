<template>
  <div
    class="bg-agoraDark rounded-2xl p-8 shadow-lg border border-gray-700 transition group relative overflow-hidden"
    :class="borderHoverClass"
  >
    <div
      class="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl -mr-8 -mt-8"
      :class="glowClass"
    ></div>

    <div class="flex items-start justify-between mb-6">
      <div>
        <h3 class="text-2xl font-agora font-bold text-white transition" :class="titleHoverClass">
          {{ title }}
        </h3>
        <span class="text-xs font-bold uppercase tracking-wide mt-1 block" :class="subtitleClass">
          {{ subtitle }}
        </span>
      </div>
      <div class="rounded-xl" :class="iconBgClass">
        <img
          :src="getImageUrl(icon)"
          :alt="title"
          class="w-20 h-20 object-contain"
          :class="iconBrightness"
        />
      </div>
    </div>

    <div class="space-y-4 mb-8">
      <div>
        <p class="text-[10px] text-gray-500 uppercase font-bold mb-1">
          {{ $t('agora.galaxy_challenge') }}
        </p>
        <p class="text-sm text-gray-300">{{ challenge }}</p>
      </div>
      <div>
        <p class="text-[10px] text-gray-500 uppercase font-bold mb-1">
          {{ $t('agora.galaxy_objective') }}
        </p>
        <p class="text-sm text-gray-300">{{ objective }}</p>
      </div>
    </div>

    <a
      href="#"
      class="inline-flex items-center text-xs font-bold transition uppercase tracking-wide border-b pb-1 hover:border-white"
      :class="linkClass"
    >
      {{ $t('agora.explore_courses') }} <i class="fas fa-arrow-right ml-2"></i>
    </a>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  challenge: {
    type: String,
    required: true,
  },
  objective: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: 'green',
    validator: value => ['green', 'lime', 'blue', 'yellow'].includes(value),
  },
})

const colorConfig = {
  green: {
    border: 'hover:border-green-700',
    glow: 'bg-pink-500/10',
    titleHover: 'group-hover:text-green-700',
    subtitle: 'text-green-500',
    iconBg: 'bg-pink-500/20',
    iconBrightness: '',
    link: 'text-green-700 hover:text-white border-green-700/30',
  },
  lime: {
    border: 'hover:border-lime-500',
    glow: 'bg-lime-500/10',
    titleHover: 'group-hover:text-lime-700',
    subtitle: 'text-lime-500',
    iconBg: '',
    iconBrightness: '',
    link: 'text-lime-700 hover:text-white border-lime-700/30',
  },
  blue: {
    border: 'hover:border-blue-100',
    glow: 'bg-cyanBright/10',
    titleHover: 'group-hover:text-blue-100',
    subtitle: 'text-blue-100',
    iconBg: 'bg-cyanBright/20',
    iconBrightness: 'brightness-200',
    link: 'text-blue-100 hover:text-white border-blue-100/30',
  },
  yellow: {
    border: 'hover:border-yellow-300',
    glow: 'bg-collegeOrange/10',
    titleHover: 'group-hover:text-yellow-500',
    subtitle: 'text-yellow-300',
    iconBg: 'bg-collegeOrange/20',
    iconBrightness: '',
    link: 'text-yellow-500 hover:text-white border-yellow-500/30',
  },
}

const borderHoverClass = computed(() => colorConfig[props.color].border)
const glowClass = computed(() => colorConfig[props.color].glow)
const titleHoverClass = computed(() => colorConfig[props.color].titleHover)
const subtitleClass = computed(() => colorConfig[props.color].subtitle)
const iconBgClass = computed(() => colorConfig[props.color].iconBg)
const iconBrightness = computed(() => colorConfig[props.color].iconBrightness)
const linkClass = computed(() => colorConfig[props.color].link)

const getImageUrl = imageName => `/assets/images/agora/${imageName}`
</script>

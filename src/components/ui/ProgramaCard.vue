<template>
  <div
    class="bg-slate-900 rounded-3xl p-8 border border-gray-700 transition group relative overflow-hidden"
    :class="borderHoverClass"
  >
    <div
      class="absolute top-0 right-0 text-xs font-bold px-4 py-2 rounded-bl-2xl"
      :class="badgeClass"
    >
      {{ badge }}
    </div>
    <div class="flex items-start gap-6">
      <img
        :src="getImageUrl(image)"
        :alt="title"
        class="w-40 h-40 object-contain p-2 bg-white/5 rounded-2xl"
      />
      <div>
        <h3 class="text-2xl font-bold text-white mb-2 transition" :class="titleHoverClass">
          {{ title }}
        </h3>
        <p class="text-gray-400 text-sm mb-6 leading-relaxed">
          {{ description }}
        </p>
        <!-- Enlace activo si existe -->
        <a
          v-if="hasLink"
          :href="link"
          class="font-bold text-sm uppercase tracking-wide hover:text-white transition flex items-center gap-2"
          :class="linkColorClass"
        >
          {{ linkText }}
          <i class="fas fa-arrow-right"></i>
        </a>
        <!-- Estado "Próximamente" si no hay enlace -->
        <button
          v-else
          disabled
          class="font-bold text-sm uppercase tracking-wide text-gray-500 cursor-not-allowed flex items-center gap-2 opacity-60"
        >
          {{ $t('metanoia.coming_soon') || 'Próximamente' }}
          <i class="fas fa-clock"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  badge: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    default: null,
  },
  linkText: {
    type: String,
    default: null,
  },
  type: {
    type: String,
    default: 'parents',
    validator: value => ['parents', 'children'].includes(value),
  },
})

// Computed para verificar si hay un enlace válido
const hasLink = computed(() => {
  return props.link && props.link.trim() !== '' && props.link !== '#'
})

// Texto por defecto si no se proporciona linkText pero hay enlace
const defaultLinkText = computed(() => {
  return props.type === 'parents'
    ? t('metanoia.explore_program') || 'Explorar programa'
    : t('metanoia.explore_activity') || 'Explorar actividad'
})

const borderHoverClass = computed(() => {
  return props.type === 'parents' ? 'hover:border-metanoiaPink' : 'hover:border-cyanBright'
})

const badgeClass = computed(() => {
  return props.type === 'parents' ? 'bg-metanoiaPink text-white' : 'bg-cyanBright text-navy'
})

const titleHoverClass = computed(() => {
  return props.type === 'parents' ? 'group-hover:text-metanoiaPink' : 'group-hover:text-cyanBright'
})

const linkColorClass = computed(() => {
  return props.type === 'parents' ? 'text-metanoiaPink' : 'text-cyanBright'
})

const getImageUrl = imageName => `/assets/images/metanoia/${imageName}`
</script>

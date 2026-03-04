<script setup>
import { ref, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  color: {
    type: String,
    default: '#051b45',
  },
  accessibilityColor: {
    type: String,
    default: '#fff',
  },
  colorTextAccessibility: {
    type: String,
    default: '#fff',
  },
})

const { locale, t } = useI18n({ useScope: 'global' })

const highContrast = ref(false)
const textSize = ref(100)
const reduceMotion = ref(false)

const toggleContrast = () => {
  highContrast.value = !highContrast.value

  if (highContrast.value) {
    document.documentElement.classList.add('high-contrast')
    localStorage.setItem('accessibility-contrast', 'high')
  } else {
    document.documentElement.classList.remove('high-contrast')
    localStorage.setItem('accessibility-contrast', 'normal')
  }
}

const toggleTextSize = () => {
  if (textSize.value === 100) {
    textSize.value = 120
  } else if (textSize.value === 120) {
    textSize.value = 140
  } else {
    textSize.value = 100
  }

  document.documentElement.style.fontSize = `${textSize.value}%`
  localStorage.setItem('accessibility-text-size', textSize.value.toString())
}

const toggleMotion = () => {
  reduceMotion.value = !reduceMotion.value

  if (reduceMotion.value) {
    document.documentElement.classList.add('reduce-motion')
    localStorage.setItem('accessibility-motion', 'reduced')
  } else {
    document.documentElement.classList.remove('reduce-motion')
    localStorage.setItem('accessibility-motion', 'normal')
  }
}

const changeLang = lang => {
  locale.value = lang
  document.documentElement.lang = lang
  localStorage.setItem('accessibility-lang', lang)
  window.dispatchEvent(new CustomEvent('language-changed', { detail: lang }))
}

watch(locale, newLang => {
  document.documentElement.lang = newLang
  localStorage.setItem('accessibility-lang', newLang)
  window.dispatchEvent(new CustomEvent('language-changed', { detail: newLang }))
})

onMounted(() => {
  const savedContrast = localStorage.getItem('accessibility-contrast')
  if (savedContrast === 'high') {
    highContrast.value = true
    document.documentElement.classList.add('high-contrast')
  }

  const savedTextSize = localStorage.getItem('accessibility-text-size')
  if (savedTextSize) {
    textSize.value = parseInt(savedTextSize)
    document.documentElement.style.fontSize = `${textSize.value}%`
  }

  const savedMotion = localStorage.getItem('accessibility-motion')
  if (savedMotion === 'reduced') {
    reduceMotion.value = true
    document.documentElement.classList.add('reduce-motion')
  }

  const savedLang = localStorage.getItem('accessibility-lang')
  if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
    locale.value = savedLang
    document.documentElement.lang = savedLang
  } else {
    const browserLang = navigator.language.split('-')[0]
    if (browserLang === 'en') {
      locale.value = 'en'
      document.documentElement.lang = 'en'
    }
  }
})
</script>

<template>
  <div
    class="fixed top-0 w-full h-10 flex justify-between items-center px-4 text-[10px] sm:text-xs font-bold border-b border-gray-800 z-[70]"
    :style="{ backgroundColor: color }"
  >
    <div class="flex gap-2 sm:gap-4 items-center">
      <span class="text-cyan-bright hidden md:inline" :style="{ color: accessibilityColor }">
        <i class="fas fa-universal-access"></i> {{ $t('accessibilitybar.title') }}
      </span>

      <button
        @click="toggleContrast"
        class="flex items-center gap-1 focus:outline-none rounded px-2 py-1 transition"
        :class="{ 'opacity-100': highContrast, 'opacity-80': !highContrast }"
        :style="{ color: colorTextAccessibility }"
      >
        <i class="fas fa-adjust"></i>
        {{ highContrast ? $t('accessibilitybar.high_contrast') : $t('accessibilitybar.contrast') }}
      </button>

      <button
        @click="toggleTextSize"
        class="flex items-center gap-1 focus:outline-none rounded px-2 py-1 transition"
        :style="{ color: colorTextAccessibility }"
      >
        <i class="fas fa-text-height"></i>
        {{ $t('accessibilitybar.text_size') }} {{ textSize }}%
      </button>

      <button
        @click="toggleMotion"
        class="flex items-center gap-1 focus:outline-none rounded px-2 py-1 transition"
        :style="{ color: colorTextAccessibility }"
      >
        <i :class="reduceMotion ? 'fas fa-play-circle' : 'fas fa-pause-circle'"></i>
        {{
          reduceMotion ? $t('accessibilitybar.with_animation') : $t('accessibilitybar.no_animation')
        }}
      </button>
    </div>

    <div class="flex gap-3 items-center border-l border-gray-700 pl-4">
      <button
        @click="changeLang('es')"
        class="font-bold transition"
        :class="{ 'opacity-100': locale === 'es', 'opacity-50': locale !== 'es' }"
        :style="{ color: locale === 'es' ? accessibilityColor : colorTextAccessibility }"
      >
        {{ $t('accessibilitybar.es') }}
      </button>
      <span>|</span>
      <button
        @click="changeLang('en')"
        class="transition"
        :class="{ 'opacity-100': locale === 'en', 'opacity-50': locale !== 'en' }"
        :style="{ color: locale === 'en' ? accessibilityColor : colorTextAccessibility }"
      >
        {{ $t('accessibilitybar.en') }}
      </button>
    </div>
  </div>
</template>

<style>
.high-contrast {
  filter: contrast(150%);
}

.high-contrast img {
  filter: contrast(120%);
}

.reduce-motion * {
  animation-duration: 0.001ms !important;
  animation-iteration-count: 1 !important;
  transition-duration: 0.001ms !important;
}

html {
  transition: font-size 0.2s ease;
}
</style>

<script setup>
import { ref, onMounted, inject } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import EcosystemCard from '@/components/ui/EcosystemCard.vue'

const { t } = useI18n()
const reduceMotion = inject('reduceMotion', ref(false))
const router = useRouter()

const isLoading = ref(false)

const ecosystems = [
  {
    id: 'college',
    description: 'Currículo STEAM',
    color: 'collegeOrange',
    icon: 'college-dark.svg',
    ariaLabel: 'Ecosistema College para escuelas',
    route: '/college',
  },
  {
    id: 'agora',
    description: 'Formación Docente 5.0',
    color: 'teal',
    icon: 'agora-dark.svg',
    ariaLabel: 'Ecosistema Ágora para docentes',
    route: '/agora',
  },
  {
    id: 'metanoia',
    description: 'Formación Familiar',
    color: 'accentPink',
    icon: 'metanoia-dark.svg',
    ariaLabel: 'Ecosistema Metanoia para familias',
    route: '/metanoia',
  },
  {
    id: 'processus',
    description: 'Diseño de Soluciones',
    color: 'blue-400',
    icon: 'processus-dark.svg',
    ariaLabel: 'Ecosistema Processus para empresas',
    route: '/processus',
  },
]

const handleEcosystemClick = async ecosystem => {
  isLoading.value = true

  try {
    if (window.playIntroAndRedirect) {
      await window.playIntroAndRedirect(ecosystem.id)
    }
    await router.push(ecosystem.route)
  } catch (error) {
    console.error('Error al navegar:', error)
    window.location.href = `/${ecosystem.id}.html`
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      ecosystems.forEach(eco => {
        const img = new Image()
        img.src = new URL(`../assets/images/logos/${eco.icon}`, import.meta.url).href
      })
    })
  }
})
</script>

<template>
  <section class="w-full py-10 sm:py-20 bg-[#0A1931]">
    <div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-4 sm:px-4">
      <!-- Lado izquierdo - Problema -->
      <div class="flex-1 text-start lg:text-left">
        <div class="my-10">
          <span class="text-red-500 text-lg font-bold py-2 uppercase rounded-lg glow-gold">
            {{ t('investors.problem_badge') }}
          </span>
        </div>
        <h2 class="text-2xl sm:text-4xl font-bold mb-6 leading-tight text-white">
          {{ t('investors.problem_title') }}
        </h2>
        <p class="text-md sm:text-md text-gray-300/80 leading-relaxed max-w-2xl my-6">
          {{ t('investors.problem_description') }}
        </p>
        <span class="font-bold text-white text-lg">{{ t('investors.problem_result') }}</span>

        <div class="flex flex-col mt-4 gap-8">
          <span
            class="px-6 py-4 flex items-center text-white text-sm bg-red-500/5 overflow-hidden font-bold rounded-xl whitespace-nowrap border border-gray-400/30 gap-3"
          >
            <i class="fas fa-link mr-2 text-red-500" />
            {{ t('investors.problem_point_1') }}
          </span>
          <span
            class="px-6 py-4 flex items-center text-white text-sm bg-red-500/5 overflow-hidden font-bold rounded-xl whitespace-nowrap border border-gray-400/30 gap-3"
          >
            <i class="fas fa-money-bill-wave mr-2 text-red-500" />
            {{ t('investors.problem_point_2') }}
          </span>
        </div>
      </div>

      <!-- Lado derecho - Solución -->
      <div class="flex relative flex-1 items-center justify-center mt-4 sm:mt-20">
        <div
          class="absolute -inset-1 bg-gradient-to-r from-investorTeal to-blue-600 rounded-xl blur opacity-20"
        ></div>
        <div
          class="relative bg-red-500/5 px-2 py-2 rounded-xl border border-white/10 h-full flex flex-col justify-center"
        >
          <div class="px-4 py-2 mt-2">
            <h3 class="text-gray-500 font-bold uppercase tracking-widest text-sm mb-4 sm:text-md">
              {{ t('investors.solution_badge') }}
            </h3>
            <h2 class="text-xl sm:text-2xl font-display font-bold mb-6 text-white">
              {{ t('investors.solution_title') }}
            </h2>
          </div>

          <div class="grid grid-cols-2 gap-2 p-2 sm:gap-4 sm:p-4">
            <EcosystemCard
              v-for="ecosystem in ecosystems"
              :key="ecosystem.id"
              :ecosystem="ecosystem"
              :reduce-motion="reduceMotion"
              @click="handleEcosystemClick(ecosystem)"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

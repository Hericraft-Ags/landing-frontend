<template>
  <body
    id="body-root"
    class="bg-slate-50 pt-28 transition-colors duration-300"
    :class="{ loading: isLoading }"
  >
    <main id="main-content">
      <section
        id="inicio"
        class="relative bg-hero-space text-white pt-20 pb-32 px-6 overflow-hidden clip-diagonal"
        aria-labelledby="hero-title"
      >
        <a
          href="#main-content"
          class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-bright text-black p-4 z-50 rounded"
        >
          Saltar al contenido principal
        </a>

        <div class="max-w-7xl mx-auto relative z-10 text-center">
          <div
            class="inline-flex items-center gap-2 border border-cyan-bright/50 bg-cyan-bright/10 text-cyan-bright text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-8"
            :class="{ 'animate-fade-in': !reduceMotion }"
            role="status"
            aria-label="Arquitectura Educativa 5.0"
          >
            <span
              class="w-2 h-2 rounded-full bg-cyan-bright"
              :class="{ 'animate-pulse': !reduceMotion }"
              aria-hidden="true"
            ></span>
            Arquitectura Educativa 5.0
          </div>
          <h1
            id="hero-title"
            class="text-5xl lg:text-7xl font-display font-bold mb-8 leading-tight"
            :class="{ 'animate-fade-in': !reduceMotion }"
          >
            El Universo de la<br />
            <span class="text-cyan-bright" aria-label="Innovación Educativa">
              Innovación Educativa
            </span>
          </h1>
          <p
            class="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            :class="{ 'animate-fade-in': !reduceMotion }"
          >
            Conectamos Alumnos, Docentes, Familias y Empresas a través de una matriz central que
            impulsa cuatro ecosistemas especializados.
          </p>
          <div
            class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            :class="{ 'animate-fade-in': !reduceMotion }"
            role="group"
            aria-label="Ecosistemas educativos"
          >
            <EcosystemCard
              v-for="ecosystem in ecosystems"
              :key="ecosystem.id"
              :ecosystem="ecosystem"
              :reduce-motion="reduceMotion"
              @click="handleEcosystemClick(ecosystem)"
            />
          </div>
        </div>
      </section>
    </main>
  </body>
</template>

<script setup>
import { ref, onMounted, inject } from 'vue'
import { useRouter } from 'vue-router'
import EcosystemCard from '@/components/ui/EcosystemCard.vue'

const reduceMotion = inject('reduceMotion', ref(false))
const router = useRouter()

const isLoading = ref(false)

const ecosystems = [
  {
    id: 'college',
    name: 'College',
    description: 'Escuelas',
    color: 'collegeOrange',
    icon: 'college-dark.svg',
    ariaLabel: 'Ecosistema College para escuelas',
    route: '/college',
  },
  {
    id: 'agora',
    name: 'Ágora',
    description: 'Docentes',
    color: 'teal',
    icon: 'agora-dark.svg',
    ariaLabel: 'Ecosistema Ágora para docentes',
    route: '/agora',
  },
  {
    id: 'metanoia',
    name: 'Metanoia',
    description: 'Familias',
    color: 'accentPink',
    icon: 'metanoia-dark.svg',
    ariaLabel: 'Ecosistema Metanoia para familias',
    route: '/metanoia',
  },
  {
    id: 'processus',
    name: 'Processus',
    description: 'Empresas',
    color: 'blue-400',
    icon: 'processus-dark.svg',
    ariaLabel: 'Ecosistema Processus para empresas',
    route: '/processus',
  },
]

// Manejador de clic mejorado
const handleEcosystemClick = async ecosystem => {
  isLoading.value = true

  try {
    // Si existe función global de intro, ejecutarla
    if (window.playIntroAndRedirect) {
      await window.playIntroAndRedirect(ecosystem.id)
    }

    // Navegación con Vue Router
    await router.push(ecosystem.route)
  } catch (error) {
    console.error('Error al navegar:', error)
    // Fallback a navegación tradicional
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

<style scoped>
@media (prefers-reduced-motion: reduce) {
  .animate-fade-in,
  .animate-pulse {
    animation: none !important;
  }
}

.loading {
  cursor: progress;
  opacity: 0.8;
  pointer-events: none;
}

.loading button {
  cursor: progress;
}
</style>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  color: {
    type: String,
    default: '#000',
  },
})

const { t } = useI18n({ useScope: 'global' })
const route = useRoute()
const isMobileOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileOpen.value = !isMobileOpen.value
}

// Definir las rutas de ecosistemas y sus URLs de inicio de sesión
const ecosystemLoginUrls = {
  '/college': 'https://education.soluciones-hericraft.com',
  '/agora': 'https://agora.soluciones-hericraft.com',
  '/metanoia': 'https://metanoia.soluciones-hericraft.com',
  '/processus': 'https://processus.soluciones-hericraft.com',
}

// Determinar si la ruta actual es un ecosistema
const isEcosystemRoute = computed(() => {
  return ecosystemLoginUrls[route.path] !== undefined
})

// Configuración del botón dinámico
const dynamicButton = computed(() => {
  if (isEcosystemRoute.value) {
    // En ecosistemas: mostrar "Iniciar Sesión" con enlace externo
    return {
      text: t('navbar.iniciar_sesion'),
      to: ecosystemLoginUrls[route.path],
      isExternal: true,
      class:
        'ml-2 relative group px-4 py-2 rounded-full overflow-hidden shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:-translate-y-0.5',
    }
  }
  // En otras rutas: mostrar "Inversionistas" con enlace interno
  return {
    text: t('navbar.inversionistas'),
    to: '/inversionistas',
    isExternal: false,
    class:
      'ml-2 text-[10px] font-bold text-cyan-bright border border-cyan-bright/30 bg-green-50 px-3 py-1 rounded-full hover:bg-[#08be66] hover:text-white transition uppercase tracking-wide',
  }
})

// Configuración del botón móvil
const mobileButton = computed(() => {
  if (isEcosystemRoute.value) {
    return {
      text: t('navbar.iniciar_sesion'),
      to: ecosystemLoginUrls[route.path],
      isExternal: true,
    }
  }
  return {
    text: t('navbar.inversionistas'),
    to: '/inversionistas',
    isExternal: false,
  }
})
</script>

<template>
  <nav
    class="fixed top-10 w-full backdrop-blur-md border-b border-gray-800 z-50 h-20 transition-all shadow-sm"
    :style="{ backgroundColor: props.color }"
  >
    <div class="max-w-7xl mx-auto px-4 h-full flex justify-between items-center">
      <!-- Logo -->
      <RouterLink to="/" class="shrink-0 cursor-pointer hover:opacity-80 transition">
        <img
          src="../assets/images/logos/logo_hericraft.png"
          alt="Hericraft Logo"
          class="h-10 w-auto"
        />
      </RouterLink>

      <!-- Menú Escritorio -->
      <div class="hidden lg:flex space-x-1 items-center text-white">
        <RouterLink
          to="/"
          class="px-3 py-2 text-xs font-bold hover:text-cyan-bright transition uppercase tracking-wide rounded-full hover:bg-white/10"
        >
          {{ $t('navbar.inicio') }}
        </RouterLink>

        <RouterLink
          to="/nosotros"
          class="px-3 py-2 text-xs font-bold hover:text-cyan-bright transition uppercase tracking-wide rounded-full hover:bg-white/10"
        >
          {{ $t('navbar.nosotros') }}
        </RouterLink>

        <!-- Dropdown Ecosistemas -->
        <div class="relative group">
          <button
            class="px-3 py-6 text-xs font-bold hover:text-cyan-bright flex items-center gap-1 uppercase tracking-wide focus:outline-none"
          >
            {{ $t('navbar.ecosistemas') }}
            <i class="fas fa-chevron-down text-[10px]"></i>
          </button>

          <div
            class="absolute left-1/2 -translate-x-1/2 top-16 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 hidden group-hover:block overflow-hidden animate-fade-in z-50"
          >
            <div class="p-2">
              <RouterLink
                to="/college"
                class="block px-4 py-3 rounded-xl hover:bg-orange-50 transition"
              >
                <span class="block text-sm font-bold text-navy">
                  <i class="fas fa-graduation-cap mr-2"></i> {{ $t('navbar.college') }}
                </span>
              </RouterLink>

              <RouterLink
                to="/agora"
                class="block px-4 py-3 rounded-xl hover:bg-green-500/10 transition"
              >
                <span class="block text-sm font-bold text-navy">
                  <i class="fas fa-chalkboard-teacher mr-2"></i> {{ $t('navbar.agora') }}
                </span>
              </RouterLink>

              <RouterLink
                to="/metanoia"
                class="block px-4 py-3 rounded-xl hover:bg-pink-50 transition"
              >
                <span class="block text-sm font-bold text-navy">
                  <i class="fas fa-heart mr-2"></i> {{ $t('navbar.metanoia') }}
                </span>
              </RouterLink>

              <RouterLink
                to="/processus"
                class="block px-4 py-3 rounded-xl hover:bg-blue-50 transition"
              >
                <span class="block text-sm font-bold text-navy">
                  <i class="fas fa-briefcase mr-2"></i> {{ $t('navbar.processus') }}
                </span>
              </RouterLink>
            </div>
          </div>
        </div>

        <a
          href="/#ambientes"
          class="px-3 py-2 text-xs font-bold hover:text-cyan-bright transition uppercase tracking-wide hover:bg-white/10 rounded-full"
        >
          {{ $t('navbar.ambientes') }}
        </a>

        <a
          href="#servicios"
          class="px-3 py-2 text-xs font-bold hover:text-cyan-bright transition uppercase tracking-wide hover:bg-white/10 rounded-full"
        >
          {{ $t('navbar.consultoria') }}
        </a>

        <a
          href="#saberes"
          class="px-3 py-2 text-xs font-bold hover:text-cyan-bright transition uppercase tracking-wide hover:bg-white/10 rounded-full"
        >
          {{ $t('navbar.saberes') }}
        </a>

        <!-- Botón dinámico: Inversionistas o Iniciar Sesión -->
        <a
          v-if="dynamicButton.isExternal"
          :href="dynamicButton.to"
          target="_blank"
          rel="noopener noreferrer"
          :class="dynamicButton.class"
        >
          <div
            class="absolute inset-0 bg-gradient-to-r from-cyan-bright to-cyan-600 transition-all duration-300 group-hover:brightness-110"
          ></div>
          <div
            class="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"
          ></div>
          <div
            class="relative flex items-center gap-2 text-white font-bold text-[11px] uppercase tracking-wider"
          >
            <i
              class="fas fa-sign-in-alt text-sm group-hover:scale-110 transition-transform duration-300"
            ></i>
            <span>{{ dynamicButton.text }}</span>
          </div>
        </a>
        <RouterLink v-else :to="dynamicButton.to" :class="dynamicButton.class">
          {{ dynamicButton.text }}
        </RouterLink>
      </div>

      <!-- Botón móvil -->
      <button
        @click="toggleMobileMenu"
        class="lg:hidden text-white text-2xl p-2"
        :aria-label="t('navbar.menu')"
      >
        <i class="fas fa-bars"></i>
      </button>
    </div>

    <!-- Menú Móvil -->
    <div
      v-show="isMobileOpen"
      class="xl:hidden border-t border-gray-800 absolute w-full left-0 top-20 shadow-2xl p-6 space-y-4 h-[calc(100vh-80px)] z-40 overflow-y-auto pb-32 text-white"
      :style="{ backgroundColor: props.color }"
    >
      <RouterLink
        to="/nosotros"
        class="block text-lg font-bold hover:text-cyan-bright"
        @click="isMobileOpen = false"
      >
        {{ $t('navbar.nosotros') }}
      </RouterLink>

      <div class="grid grid-cols-2 gap-3 mb-6">
        <RouterLink
          to="/college"
          class="bg-white/10 p-3 rounded-xl text-center border border-white/20 font-bold hover:bg-white/20 transition"
          @click="isMobileOpen = false"
        >
          {{ $t('navbar.college') }}
        </RouterLink>
        <RouterLink
          to="/agora"
          class="bg-white/10 p-3 rounded-xl text-center border border-white/20 font-bold hover:bg-white/20 transition"
          @click="isMobileOpen = false"
        >
          {{ $t('navbar.agora') }}
        </RouterLink>
        <RouterLink
          to="/metanoia"
          class="bg-white/10 p-3 rounded-xl text-center border border-white/20 font-bold hover:bg-white/20 transition"
          @click="isMobileOpen = false"
        >
          {{ $t('navbar.metanoia') }}
        </RouterLink>
        <RouterLink
          to="/processus"
          class="bg-white/10 p-3 rounded-xl text-center border border-white/20 font-bold hover:bg-white/20 transition"
          @click="isMobileOpen = false"
        >
          {{ $t('navbar.processus') }}
        </RouterLink>
      </div>

      <a
        href="#ambientes"
        class="block text-lg font-bold hover:text-cyan-bright"
        @click="isMobileOpen = false"
      >
        {{ $t('navbar.diseno_ambientes') }}
      </a>

      <a
        href="#saberes"
        class="block text-lg font-bold hover:text-cyan-bright"
        @click="isMobileOpen = false"
      >
        {{ $t('navbar.banco_saberes') }}
      </a>

      <!-- Botón móvil dinámico -->
      <a
        v-if="mobileButton.isExternal"
        :href="mobileButton.to"
        target="_blank"
        rel="noopener noreferrer"
        class="block w-full bg-gradient-to-r from-cyan-bright to-cyan-600 text-center py-3 rounded-full font-bold text-white uppercase tracking-wide"
        @click="isMobileOpen = false"
      >
        {{ mobileButton.text }}
      </a>
      <RouterLink
        v-else
        :to="mobileButton.to"
        class="block text-lg font-bold text-cyan-bright"
        @click="isMobileOpen = false"
      >
        {{ mobileButton.text }}
      </RouterLink>
    </div>
  </nav>
</template>

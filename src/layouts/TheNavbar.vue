<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  color: {
    type: String,
    default: '#000',
  },
})

const isMobileOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileOpen.value = !isMobileOpen.value
}
</script>

<template>
  <nav
    class="fixed top-10 w-full backdrop-blur-md border-b border-gray-800 z-50 h-20 transition-all shadow-sm"
    :style="{ backgroundColor: props.color }"
  >
    <div class="max-w-7xl mx-auto px-4 h-full flex justify-between items-center">
      <!-- Logo -->
      <RouterLink to="/" class="flex-shrink-0 cursor-pointer hover:opacity-80 transition">
        <img
          src="../assets/images/logos/logo_hericraft.png"
          alt="Hericraft Logo"
          class="h-10 w-auto"
        />
      </RouterLink>

      <!-- Menú Escritorio -->
      <div class="hidden lg:flex space-x-1 items-center text-white">
        <RouterLink
          to="/nosotros"
          class="px-3 py-2 text-xs font-bold hover:text-cyan-bright transition uppercase tracking-wide rounded-full hover:bg-white/10"
        >
          Nosotros
        </RouterLink>

        <!-- Dropdown Ecosistemas -->
        <div class="relative group">
          <button
            class="px-3 py-6 text-xs font-bold hover:text-cyan-bright flex items-center gap-1 uppercase tracking-wide focus:outline-none"
          >
            Ecosistemas
            <i class="fas fa-chevron-down text-[10px]"></i>
          </button>

          <div
            class="absolute left-1/2 -translate-x-1/2 top-16 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 hidden group-hover:block overflow-hidden animate-fade-in z-50"
          >
            <div class="p-2">
              <a href="/college" class="block px-4 py-3 rounded-xl hover:bg-orange-50 transition">
                <span class="block text-sm font-bold text-navy">
                  <i class="fas fa-graduation-cap mr-2"></i> College
                </span>
              </a>

              <a href="/agora" class="block px-4 py-3 rounded-xl hover:bg-green-500/10 transition">
                <span class="block text-sm font-bold text-navy">
                  <i class="fas fa-chalkboard-teacher mr-2"></i> Ágora
                </span>
              </a>

              <a href="/metanoia" class="block px-4 py-3 rounded-xl hover:bg-pink-50 transition">
                <span class="block text-sm font-bold text-navy">
                  <i class="fas fa-heart mr-2"></i> Metanoia
                </span>
              </a>

              <a href="/processus" class="block px-4 py-3 rounded-xl hover:bg-blue-50 transition">
                <span class="block text-sm font-bold text-navy">
                  <i class="fas fa-briefcase mr-2"></i> Processus
                </span>
              </a>
            </div>
          </div>
        </div>

        <a
          href="#ambientes"
          class="px-3 py-2 text-xs font-bold hover:text-cyan-bright transition uppercase tracking-wide"
        >
          Ambientes
        </a>

        <a
          href="#servicios"
          class="px-3 py-2 text-xs font-bold hover:text-cyan-bright transition uppercase tracking-wide"
        >
          Consultoría
        </a>

        <a
          href="#saberes"
          class="px-3 py-2 text-xs font-bold hover:text-cyan-bright transition uppercase tracking-wide"
        >
          Saberes
        </a>

        <a
          href="#"
          class="ml-2 text-[10px] font-bold text-cyan-bright border border-cyan-bright/30 bg-green-50 px-3 py-1 rounded-full hover:bg-cyan-bright hover:text-white transition uppercase tracking-wide"
        >
          Inversionistas
        </a>
      </div>

      <!-- Botón móvil -->
      <button @click="toggleMobileMenu" class="lg:hidden text-white text-2xl p-2">
        <i class="fas fa-bars"></i>
      </button>
    </div>

    <!-- Menú Móvil -->
    <div
      v-show="isMobileOpen"
      class="xl:hidden border-t border-gray-800 absolute w-full left-0 top-20 shadow-2xl p-6 space-y-4 h-[calc(100vh-80px)] z-40 overflow-y-auto pb-32 text-white"
      :style="{ backgroundColor: props.color }"
    >
      <RouterLink to="/nosotros" class="block text-lg font-bold hover:text-cyan-bright">
        Nosotros
      </RouterLink>

      <div class="grid grid-cols-2 gap-3 mb-6">
        <a class="bg-white/10 p-3 rounded-xl text-center border border-white/20 font-bold">
          College
        </a>
        <a class="bg-white/10 p-3 rounded-xl text-center border border-white/20 font-bold">
          Ágora
        </a>
        <a class="bg-white/10 p-3 rounded-xl text-center border border-white/20 font-bold">
          Metanoia
        </a>
        <a class="bg-white/10 p-3 rounded-xl text-center border border-white/20 font-bold">
          Processus
        </a>
      </div>

      <a href="#ambientes" class="block text-lg font-bold hover:text-cyan-bright">
        Diseño de ambientes
      </a>

      <a href="#saberes" class="block text-lg font-bold hover:text-cyan-bright">
        Banco de saberes
      </a>

      <a href="#" class="block text-lg font-bold text-cyan-bright"> Inversionistas </a>
    </div>
  </nav>
</template>

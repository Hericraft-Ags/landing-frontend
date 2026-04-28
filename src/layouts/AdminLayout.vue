<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Mobile menu button -->
    <button
      @click="sidebarOpen = !sidebarOpen"
      class="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-gray-800 text-white shadow-lg hover:bg-gray-700 transition"
    >
      <i :class="sidebarOpen ? 'fas fa-times' : 'fas fa-bars'" class="text-xl"></i>
    </button>

    <!-- Overlay -->
    <div
      v-if="sidebarOpen"
      @click="sidebarOpen = false"
      class="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity"
    ></div>

    <!-- Sidebar -->
    <aside
      :class="[
        'fixed left-0 top-0 h-full w-72 bg-gradient-to-b from-gray-900 to-gray-800 text-white shadow-2xl z-50 transition-transform duration-300 lg:translate-x-0 flex flex-col',
        sidebarOpen ? 'translate-x-0' : '-translate-x-full',
      ]"
    >
      <!-- Sidebar Header (fijo) -->
      <div class="p-6 border-b border-gray-700 flex-shrink-0">
        <router-link to="/admin/dashboard" class="block text-center">
          <div class="inline-flex items-center justify-center w-20 h-15 rounded-xl mb-3">
            <img src="/assets/images/logos/logo_hericraft.png" alt="Hericraft" class="h-8 w-auto" />
          </div>
          <p class="text-xs text-gray-400 mt-1">Panel de Control</p>
        </router-link>
      </div>

      <!-- Navigation (scrollable) -->
      <nav class="flex-1 overflow-y-auto p-4 space-y-1 custom-scrollbar">
        <router-link
          to="/admin/dashboard"
          @click="sidebarOpen = false"
          class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-green-500/10 hover:text-green-400 transition-all duration-300 group"
          active-class="bg-green-500/10 text-green-400"
        >
          <i class="fas fa-chart-line w-5 group-hover:scale-110 transition-transform"></i>
          <span>Dashboard</span>
        </router-link>

        <router-link
          to="/admin/categories"
          @click="sidebarOpen = false"
          class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-green-500/10 hover:text-green-400 transition-all duration-300 group"
          active-class="bg-green-500/10 text-green-400"
        >
          <i class="fas fa-tags w-5 group-hover:scale-110 transition-transform"></i>
          <span>Categorías</span>
        </router-link>

        <router-link
          to="/admin/authors"
          @click="sidebarOpen = false"
          class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-green-500/10 hover:text-green-400 transition-all duration-300 group"
          active-class="bg-green-500/10 text-green-400"
        >
          <i class="fas fa-users w-5 group-hover:scale-110 transition-transform"></i>
          <span>Autores</span>
        </router-link>

        <router-link
          to="/admin/articles"
          @click="sidebarOpen = false"
          class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-green-500/10 hover:text-green-400 transition-all duration-300 group"
          active-class="bg-green-500/10 text-green-400"
        >
          <i class="fas fa-newspaper w-5 group-hover:scale-110 transition-transform"></i>
          <span>Artículos</span>
        </router-link>

        <router-link
          to="/admin/videos"
          @click="sidebarOpen = false"
          class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-green-500/10 hover:text-green-400 transition-all duration-300 group"
          active-class="bg-green-500/10 text-green-400"
        >
          <i class="fas fa-video w-5 group-hover:scale-110 transition-transform"></i>
          <span>Videos</span>
        </router-link>

        <router-link
          to="/admin/podcasts"
          @click="sidebarOpen = false"
          class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-green-500/10 hover:text-green-400 transition-all duration-300 group"
          active-class="bg-green-500/10 text-green-400"
        >
          <i class="fas fa-microphone-alt w-5 group-hover:scale-110 transition-transform"></i>
          <span>Podcasts</span>
        </router-link>

        <router-link
          to="/admin/downloads"
          @click="sidebarOpen = false"
          class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-green-500/10 hover:text-green-400 transition-all duration-300 group"
          active-class="bg-green-500/10 text-green-400"
        >
          <i class="fas fa-download w-5 group-hover:scale-110 transition-transform"></i>
          <span>Descargables</span>
        </router-link>
      </nav>

      <!-- Sidebar Footer (fijo) -->
      <div class="p-4 border-t border-gray-700 flex-shrink-0">
        <button
          @click="handleLogout"
          class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-500/10 hover:text-red-400 transition-all duration-300 w-full text-left group"
        >
          <i class="fas fa-sign-out-alt w-5 group-hover:scale-110 transition-transform"></i>
          <span>Cerrar Sesión</span>
        </button>
      </div>
    </aside>

    <!-- Main content -->
    <main class="lg:ml-72 min-h-screen">
      <!-- Top bar -->
      <div class="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30">
        <div
          class="px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3"
        >
          <div class="flex items-center gap-3">
            <div class="lg:hidden w-10"></div>
            <!-- Spacer for mobile menu button -->
            <div>
              <h1 class="text-xl sm:text-2xl font-bold text-gray-800">{{ pageTitle }}</h1>
              <p class="text-sm text-gray-500 mt-0.5 hidden sm:block">
                {{ pageDescription }}
              </p>
            </div>
          </div>

          <!-- User Dropdown Menu -->
          <div class="relative">
            <button
              @click="dropdownOpen = !dropdownOpen"
              class="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-gray-100 transition-all duration-200 group"
            >
              <div
                class="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center text-white font-bold shadow-md"
              >
                {{ userInitials }}
              </div>
              <div class="hidden sm:block text-left">
                <p class="text-sm font-medium text-gray-700">{{ authStore.user?.name }}</p>
                <p class="text-xs text-gray-500">{{ authStore.user?.email }}</p>
              </div>
              <i
                class="fas fa-chevron-down text-xs text-gray-400 transition-transform duration-200"
                :class="{ 'rotate-180': dropdownOpen }"
              ></i>
            </button>

            <!-- Dropdown Menu -->
            <transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="opacity-0 -translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-2"
            >
              <div
                v-if="dropdownOpen"
                class="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-50"
              >
                <!-- User info (mobile) -->
                <div class="sm:hidden px-4 py-3 border-b border-gray-100">
                  <p class="text-sm font-medium text-gray-800">{{ authStore.user?.name }}</p>
                  <p class="text-xs text-gray-500 mt-0.5">{{ authStore.user?.email }}</p>
                </div>

                <!-- Profile option -->
                <router-link
                  to="/admin/profile"
                  @click="dropdownOpen = false"
                  class="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <i class="fas fa-user-circle w-5 text-gray-400"></i>
                  <span>Mi Perfil</span>
                </router-link>

                <!-- Settings option -->
                <router-link
                  to="/admin/settings"
                  @click="dropdownOpen = false"
                  class="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <i class="fas fa-cog w-5 text-gray-400"></i>
                  <span>Configuración</span>
                </router-link>

                <div class="border-t border-gray-100 my-1"></div>

                <!-- Logout option -->
                <button
                  @click="handleLogoutClick"
                  class="flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors w-full text-left"
                >
                  <i class="fas fa-sign-out-alt w-5"></i>
                  <span>Cerrar Sesión</span>
                </button>
              </div>
            </transition>
          </div>
        </div>
      </div>

      <!-- Page content -->
      <div class="p-4 sm:p-6">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'

const router = useRouter()
const route = useRoute()
const authStore = useAuthStore()
const sidebarOpen = ref(false)
const dropdownOpen = ref(false)

const pageTitle = computed(() => {
  const titles = {
    AdminDashboard: 'Dashboard',
    AdminArticles: 'Artículos',
    AdminArticleCreate: 'Crear Artículo',
    AdminArticleEdit: 'Editar Artículo',
    AdminVideos: 'Videos',
    AdminVideoCreate: 'Crear Video',
    AdminVideoEdit: 'Editar Video',
    AdminPodcasts: 'Podcasts',
    AdminPodcastCreate: 'Crear Podcast',
    AdminPodcastEdit: 'Editar Podcast',
    AdminDownloads: 'Descargables',
    AdminDownloadCreate: 'Crear Descargable',
    AdminDownloadEdit: 'Editar Descargable',
    AdminProfile: 'Mi Perfil',
    AdminSettings: 'Configuración',
  }
  return titles[route.name] || 'Administración'
})

const pageDescription = computed(() => {
  const descriptions = {
    AdminDashboard: 'Resumen general y estadísticas del sistema',
    AdminArticles: 'Gestiona los artículos y publicaciones',
    AdminVideos: 'Administra los videos y webinars',
    AdminPodcasts: 'Controla los episodios de podcast',
    AdminDownloads: 'Gestiona los recursos descargables',
    AdminProfile: 'Información personal y preferencias',
    AdminSettings: 'Configuración general del sistema',
  }
  return descriptions[route.name] || 'Gestión de contenido'
})

const userInitials = computed(() => {
  const name = authStore.user?.name || 'Admin'
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
})

const handleLogout = async () => {
  dropdownOpen.value = false
  await authStore.logout()
  router.push('/admin/login')
}

const handleLogoutClick = () => {
  handleLogout()
}

// Cerrar dropdown al hacer clic fuera
const handleClickOutside = event => {
  const dropdown = document.querySelector('.relative')
  if (dropdown && !dropdown.contains(event.target)) {
    dropdownOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
/* Transiciones suaves para el sidebar */
.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Custom scrollbar para el sidebar */
.custom-scrollbar::-webkit-scrollbar {
  width: 5px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #1f2937;
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #4b5563;
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #6b7280;
}

/* Scrollbar personalizado general */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

/* Para Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: #c1c1c1 #f1f1f1;
}

/* Animación del chevron */
.rotate-180 {
  transform: rotate(180deg);
}
</style>

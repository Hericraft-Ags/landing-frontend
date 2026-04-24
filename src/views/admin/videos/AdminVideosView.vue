<template>
  <div>
    <!-- Header -->
    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
      <div>
        <div class="flex items-center gap-2">
          <div
            class="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-md"
          >
            <i class="fas fa-video text-white text-lg"></i>
          </div>
          <div>
            <h2 class="text-2xl font-bold text-gray-800">Videos</h2>
            <p class="text-gray-500 text-sm mt-0.5">Gestiona los videos y webinars</p>
          </div>
        </div>
      </div>
      <router-link
        to="/admin/videos/create"
        class="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
      >
        <i class="fas fa-plus text-sm"></i>
        <span>Nuevo Video</span>
      </router-link>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <div
        class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 text-center hover:shadow-md transition"
      >
        <div class="flex items-center justify-center gap-2 mb-2">
          <i class="fas fa-video text-blue-500 text-xl"></i>
          <span class="text-2xl font-bold text-gray-800">{{ pagination.total }}</span>
        </div>
        <p class="text-xs text-gray-500 uppercase tracking-wide">Total Videos</p>
      </div>
      <div
        class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 text-center hover:shadow-md transition"
      >
        <div class="flex items-center justify-center gap-2 mb-2">
          <i class="fas fa-check-circle text-green-500 text-xl"></i>
          <span class="text-2xl font-bold text-gray-800">{{ publishedCount }}</span>
        </div>
        <p class="text-xs text-gray-500 uppercase tracking-wide">Publicados</p>
      </div>
      <div
        class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 text-center hover:shadow-md transition"
      >
        <div class="flex items-center justify-center gap-2 mb-2">
          <i class="fas fa-edit text-yellow-500 text-xl"></i>
          <span class="text-2xl font-bold text-gray-800">{{ draftCount }}</span>
        </div>
        <p class="text-xs text-gray-500 uppercase tracking-wide">Borradores</p>
      </div>
      <div
        class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 text-center hover:shadow-md transition"
      >
        <div class="flex items-center justify-center gap-2 mb-2">
          <i class="fas fa-clock text-purple-500 text-xl"></i>
          <span class="text-2xl font-bold text-gray-800">{{ totalDuration }}</span>
        </div>
        <p class="text-xs text-gray-500 uppercase tracking-wide">Horas Totales</p>
      </div>
    </div>

    <!-- Filters -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
      <div class="flex flex-col sm:flex-row gap-4">
        <div class="flex-1">
          <div class="relative">
            <i
              class="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"
            ></i>
            <input
              v-model="filters.search"
              type="text"
              placeholder="Buscar videos por título..."
              class="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
              @keyup.enter="applyFilters"
            />
          </div>
        </div>
        <select
          v-model="filters.type"
          class="px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
          @change="applyFilters"
        >
          <option value="">Todos los tipos</option>
          <option value="workshop">🎓 Workshop</option>
          <option value="tutorial">📖 Tutorial</option>
          <option value="webinar">💻 Webinar</option>
        </select>
        <select
          v-model="filters.status"
          class="px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
          @change="applyFilters"
        >
          <option value="">Todos los estados</option>
          <option value="published">✅ Publicados</option>
          <option value="draft">✏️ Borradores</option>
        </select>
        <div class="flex gap-2">
          <button
            @click="clearFilters"
            class="px-5 py-2.5 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-xl transition flex items-center gap-2"
          >
            <i class="fas fa-times"></i> Limpiar
          </button>
        </div>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="isLoading" class="bg-white rounded-xl shadow-sm border border-gray-200 p-12">
      <div class="flex flex-col items-center justify-center gap-3">
        <i class="fas fa-spinner fa-spin text-3xl text-green-500"></i>
        <p class="text-gray-500">Cargando videos...</p>
      </div>
    </div>

    <!-- Table -->
    <div
      v-else-if="videos.length > 0"
      class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
    >
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead class="bg-gray-50 border-b border-gray-200">
            <tr>
              <th
                class="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider"
              >
                Thumbnail
              </th>
              <th
                class="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider"
              >
                Título
              </th>
              <th
                class="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider"
              >
                Tipo
              </th>
              <th
                class="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider"
              >
                Duración
              </th>
              <th
                class="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider"
              >
                Estado
              </th>
              <th
                class="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider"
              >
                Fecha
              </th>
              <th
                class="text-right px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider"
              >
                Acciones
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            <tr v-for="video in videos" :key="video.id" class="hover:bg-gray-50 transition group">
              <td class="px-6 py-4">
                <img
                  v-if="video.thumbnail_url"
                  :src="video.thumbnail_url"
                  class="w-12 h-12 rounded-lg object-cover shadow-sm"
                  :alt="video.title"
                />
                <div
                  v-else
                  class="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center"
                >
                  <i class="fas fa-video text-gray-400 text-lg"></i>
                </div>
              </td>
              <td class="px-6 py-4">
                <p class="font-semibold text-gray-800 line-clamp-2">{{ video.title }}</p>
                <p class="text-xs text-gray-400 mt-1">ID: {{ video.id }}</p>
              </td>
              <td class="px-6 py-4">
                <span
                  :class="typeBadge(video.type)"
                  class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium"
                >
                  <i :class="typeIcon(video.type)" class="text-xs"></i>
                  {{ typeLabel(video.type) }}
                </span>
              </td>
              <td class="px-6 py-4">
                <div class="flex items-center gap-2">
                  <i class="fas fa-clock text-gray-400 text-xs"></i>
                  <span class="text-sm text-gray-600">{{ video.formatted_duration || '—' }}</span>
                </div>
              </td>
              <td class="px-6 py-4">
                <span
                  :class="[
                    'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium',
                    video.is_published
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700',
                  ]"
                >
                  <i :class="video.is_published ? 'fas fa-check-circle' : 'fas fa-edit'"></i>
                  {{ video.is_published ? 'Publicado' : 'Borrador' }}
                </span>
              </td>
              <td class="px-6 py-4">
                <div class="flex flex-col">
                  <span class="text-sm text-gray-600">{{
                    formatDate(video.published_at || video.created_at)
                  }}</span>
                  <span class="text-xs text-gray-400">{{
                    getTimeAgo(video.published_at || video.created_at)
                  }}</span>
                </div>
              </td>
              <td class="px-6 py-4 text-right">
                <div class="flex items-center justify-end gap-1">
                  <button
                    @click="handletogglePublish(video.id)"
                    class="p-2 text-gray-400 hover:text-green-500 rounded-lg hover:bg-green-50 transition"
                    :title="video.is_published ? 'Despublicar' : 'Publicar'"
                  >
                    <i :class="video.is_published ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
                  </button>
                  <router-link
                    :to="`/admin/videos/${video.id}/edit`"
                    class="p-2 text-gray-400 hover:text-blue-500 rounded-lg hover:bg-blue-50 transition"
                    title="Editar"
                  >
                    <i class="fas fa-edit"></i>
                  </router-link>
                  <button
                    @click="confirmDelete(video)"
                    class="p-2 text-gray-400 hover:text-red-500 rounded-lg hover:bg-red-50 transition"
                    title="Eliminar"
                  >
                    <i class="fas fa-trash-alt"></i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination -->
      <div
        class="px-6 py-4 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4 bg-gray-50"
      >
        <p class="text-sm text-gray-500">
          Mostrando <span class="font-semibold text-gray-700">{{ videos.length }}</span> de
          <span class="font-semibold text-gray-700">{{ pagination.total }}</span> videos
        </p>
        <div class="flex gap-2">
          <button
            @click="changePage(pagination.current_page - 1)"
            :disabled="pagination.current_page === 1"
            class="px-3 py-2 border border-gray-300 rounded-lg disabled:opacity-50 hover:bg-white transition flex items-center gap-1 text-sm"
          >
            <i class="fas fa-chevron-left text-xs"></i>
            <span>Anterior</span>
          </button>
          <div class="flex gap-1">
            <button
              v-for="page in visiblePages"
              :key="page"
              @click="changePage(page)"
              class="px-3 py-2 rounded-lg transition min-w-[40px] text-center text-sm font-medium"
              :class="
                page === pagination.current_page
                  ? 'bg-green-500 text-white shadow-sm'
                  : page === '...'
                    ? 'cursor-default'
                    : 'border border-gray-300 hover:bg-gray-50'
              "
            >
              {{ page }}
            </button>
          </div>
          <button
            @click="changePage(pagination.current_page + 1)"
            :disabled="pagination.current_page === pagination.last_page"
            class="px-3 py-2 border border-gray-300 rounded-lg disabled:opacity-50 hover:bg-white transition flex items-center gap-1 text-sm"
          >
            <span>Siguiente</span>
            <i class="fas fa-chevron-right text-xs"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else class="bg-white rounded-xl shadow-sm border border-gray-200 text-center py-16">
      <div class="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
        <i class="fas fa-video text-4xl text-gray-400"></i>
      </div>
      <h3 class="text-xl font-semibold text-gray-600">No hay videos</h3>
      <p class="text-gray-400 mt-1">Comienza creando tu primer video</p>
      <router-link
        to="/admin/videos/create"
        class="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition shadow-md"
      >
        <i class="fas fa-plus"></i>
        Nuevo Video
      </router-link>
    </div>

    <!-- Delete Modal -->
    <Teleport to="body">
      <div
        v-if="showDeleteModal"
        class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        @click.self="showDeleteModal = false"
      >
        <div class="bg-white rounded-2xl max-w-md w-full mx-4 p-6 shadow-2xl animate-fade-in-up">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
              <i class="fas fa-exclamation-triangle text-red-500 text-xl"></i>
            </div>
            <h3 class="text-xl font-bold text-gray-800">Confirmar eliminación</h3>
          </div>
          <p class="text-gray-600 mb-6">
            ¿Estás seguro de que deseas eliminar el video
            <strong class="text-red-600">{{ videoToDelete?.title }}</strong
            >? Esta acción no se puede deshacer.
          </p>
          <div class="flex justify-end gap-3">
            <button
              @click="showDeleteModal = false"
              class="px-5 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition font-medium"
            >
              Cancelar
            </button>
            <button
              @click="deleteVideoHandler"
              class="px-5 py-2.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition font-medium shadow-sm"
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useVideoStore } from '@/stores/videoStore'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'

const videoStore = useVideoStore()
const { videos, pagination, isLoading, fetchVideos, togglePublish, deleteVideo } = videoStore

const filters = ref({ search: '', type: '', status: '' })
const showDeleteModal = ref(false)
const videoToDelete = ref(null)

// Stats calculados
const publishedCount = computed(() => videos.value.filter(v => v.is_published).length)
const draftCount = computed(() => videos.value.filter(v => !v.is_published).length)
const totalDuration = computed(() => {
  const totalSeconds = videos.value.reduce((sum, v) => sum + (v.duration || 0), 0)
  const hours = Math.floor(totalSeconds / 3600)
  return hours
})

// Páginas visibles para paginación
const visiblePages = computed(() => {
  const current = pagination.value.current_page
  const last = pagination.value.last_page
  const delta = 2
  const range = []
  const rangeWithDots = []

  for (let i = Math.max(2, current - delta); i <= Math.min(last - 1, current + delta); i++) {
    range.push(i)
  }

  if (current - delta > 2) {
    rangeWithDots.push(1, '...')
  } else {
    rangeWithDots.push(1)
  }

  rangeWithDots.push(...range)

  if (current + delta < last - 1) {
    rangeWithDots.push('...', last)
  } else if (last !== 1) {
    rangeWithDots.push(last)
  }

  return rangeWithDots
})

const formatDate = date => {
  if (!date) return '—'
  return format(new Date(date), 'dd MMM yyyy', { locale: es })
}

const getTimeAgo = date => {
  if (!date) return ''
  const diff = Math.floor((new Date() - new Date(date)) / (1000 * 60 * 60 * 24))
  if (diff === 0) return 'Hoy'
  if (diff === 1) return 'Ayer'
  if (diff < 7) return `Hace ${diff} días`
  if (diff < 30) return `Hace ${Math.floor(diff / 7)} semanas`
  return `Hace ${Math.floor(diff / 30)} meses`
}

const typeBadge = type => {
  const badges = {
    workshop: 'bg-orange-100 text-orange-700',
    tutorial: 'bg-blue-100 text-blue-700',
    webinar: 'bg-purple-100 text-purple-700',
  }
  return badges[type] || 'bg-gray-100 text-gray-700'
}

const typeIcon = type => {
  const icons = {
    workshop: 'fas fa-chalkboard-user',
    tutorial: 'fas fa-graduation-cap',
    webinar: 'fas fa-video',
  }
  return icons[type] || 'fas fa-play-circle'
}

const typeLabel = type => {
  const labels = {
    workshop: 'Workshop',
    tutorial: 'Tutorial',
    webinar: 'Webinar',
  }
  return labels[type] || type
}

const applyFilters = () => {
  const params = {}
  if (filters.value.search) params.search = filters.value.search
  if (filters.value.type) params.type = filters.value.type
  if (filters.value.status) params.status = filters.value.status
  fetchVideos(params)
}

const clearFilters = () => {
  filters.value = { search: '', type: '', status: '' }
  applyFilters()
}

const changePage = page => {
  if (page >= 1 && page <= pagination.value.last_page) {
    fetchVideos({ page, ...filters.value })
  }
}

const handletogglePublish = async id => {
  try {
    await videoStore.togglePublish(id)
    await applyFilters() // Recargar para ver el cambio inmediato
  } catch (error) {
    console.error('Error toggling publish:', error)
  }
}

const confirmDelete = video => {
  videoToDelete.value = video
  showDeleteModal.value = true
}

const deleteVideoHandler = async () => {
  if (videoToDelete.value) {
    await deleteVideo(videoToDelete.value.id)
    showDeleteModal.value = false
    videoToDelete.value = null
    applyFilters()
  }
}

// Debounce para búsqueda
let searchTimeout
watch(
  () => filters.value.search,
  newVal => {
    clearTimeout(searchTimeout)
    searchTimeout = setTimeout(() => {
      if (newVal !== undefined) applyFilters()
    }, 500)
  }
)

onMounted(() => {
  applyFilters()
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.3s ease-out;
}
</style>

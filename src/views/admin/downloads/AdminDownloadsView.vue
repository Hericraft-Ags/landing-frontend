<!-- views/admin/downloads/Index.vue -->
<template>
  <div>
    <!-- Header -->
    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
      <div>
        <div class="flex items-center gap-2">
          <div
            class="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md"
          >
            <i class="fas fa-download text-white text-lg"></i>
          </div>
          <div>
            <h2 class="text-2xl font-bold text-gray-800">Descargas</h2>
            <p class="text-gray-500 text-sm mt-0.5">Gestiona los archivos descargables</p>
          </div>
        </div>
      </div>
      <router-link
        to="/admin/downloads/create"
        class="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
      >
        <i class="fas fa-plus text-sm"></i>
        <span>Nueva Descarga</span>
      </router-link>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <div
        class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 text-center hover:shadow-md transition"
      >
        <div class="flex items-center justify-center gap-2 mb-2">
          <i class="fas fa-download text-blue-500 text-xl"></i>
          <span class="text-2xl font-bold text-gray-800">{{ pagination.total }}</span>
        </div>
        <p class="text-xs text-gray-500 uppercase tracking-wide">Total Descargas</p>
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
          <i class="fas fa-chart-line text-green-500 text-xl"></i>
          <span class="text-2xl font-bold text-gray-800">{{ totalDownloads }}</span>
        </div>
        <p class="text-xs text-gray-500 uppercase tracking-wide">Total Descargas</p>
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
              placeholder="Buscar descargas por título..."
              class="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              @keyup.enter="applyFilters"
            />
          </div>
        </div>
        <select
          v-model="filters.file_type"
          class="px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          @change="applyFilters"
        >
          <option value="">Todos los tipos</option>
          <option value="PDF">📄 PDF</option>
          <option value="PPTX">📊 PowerPoint</option>
          <option value="XLSX">📈 Excel</option>
          <option value="DOCX">📝 Word</option>
        </select>
        <select
          v-model="filters.status"
          class="px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
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
        <i class="fas fa-spinner fa-spin text-3xl text-blue-500"></i>
        <p class="text-gray-500">Cargando descargas...</p>
      </div>
    </div>

    <!-- Table -->
    <div
      v-else-if="downloads.length > 0"
      class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
    >
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead class="bg-gray-50 border-b border-gray-200">
            <tr>
              <th
                class="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider"
              >
                Tipo
              </th>
              <th
                class="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider"
              >
                Título
              </th>
              <th
                class="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider"
              >
                Tamaño
              </th>
              <th
                class="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider"
              >
                Descargas
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
            <tr
              v-for="download in downloads"
              :key="download.id"
              class="hover:bg-gray-50 transition group"
            >
              <td class="px-6 py-4">
                <div class="flex items-center gap-2">
                  <i
                    :class="download.icon_class || getFileIcon(download.file_type)"
                    class="text-2xl"
                  ></i>
                </div>
              </td>
              <td class="px-6 py-4">
                <p class="font-semibold text-gray-800 line-clamp-2">{{ download.title }}</p>
                <p class="text-xs text-gray-400 mt-1">ID: {{ download.id }}</p>
              </td>
              <td class="px-6 py-4">
                <span class="text-sm text-gray-600">{{ download.file_size || '—' }}</span>
              </td>
              <td class="px-6 py-4">
                <div class="flex items-center gap-2">
                  <i class="fas fa-download text-gray-400 text-xs"></i>
                  <span class="text-sm font-semibold text-gray-700">{{
                    download.download_count || 0
                  }}</span>
                </div>
              </td>
              <td class="px-6 py-4">
                <span
                  :class="[
                    'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium',
                    download.is_published
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700',
                  ]"
                >
                  <i :class="download.is_published ? 'fas fa-check-circle' : 'fas fa-edit'"></i>
                  {{ download.is_published ? 'Publicado' : 'Borrador' }}
                </span>
              </td>
              <td class="px-6 py-4">
                <div class="flex flex-col">
                  <span class="text-sm text-gray-600">{{ formatDate(download.created_at) }}</span>
                  <span class="text-xs text-gray-400">{{ getTimeAgo(download.created_at) }}</span>
                </div>
              </td>
              <td class="px-6 py-4 text-right">
                <div class="flex items-center justify-end gap-1">
                  <button
                    @click="handleTogglePublish(download.id)"
                    class="p-2 text-gray-400 hover:text-green-500 rounded-lg hover:bg-green-50 transition"
                    :title="download.is_published ? 'Despublicar' : 'Publicar'"
                  >
                    <i :class="download.is_published ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
                  </button>
                  <router-link
                    :to="`/admin/downloads/${download.id}/edit`"
                    class="p-2 text-gray-400 hover:text-blue-500 rounded-lg hover:bg-blue-50 transition"
                    title="Editar"
                  >
                    <i class="fas fa-edit"></i>
                  </router-link>
                  <button
                    @click="confirmDelete(download)"
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
          Mostrando <span class="font-semibold text-gray-700">{{ downloads.length }}</span> de
          <span class="font-semibold text-gray-700">{{ pagination.total }}</span> descargas
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
                  ? 'bg-blue-500 text-white shadow-sm'
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
        <i class="fas fa-download text-4xl text-gray-400"></i>
      </div>
      <h3 class="text-xl font-semibold text-gray-600">No hay descargas</h3>
      <p class="text-gray-400 mt-1">Comienza creando tu primer archivo descargable</p>
      <router-link
        to="/admin/downloads/create"
        class="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition shadow-md"
      >
        <i class="fas fa-plus"></i>
        Nueva Descarga
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
            ¿Estás seguro de que deseas eliminar la descarga
            <strong class="text-red-600">{{ downloadToDelete?.title }}</strong
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
              @click="deleteDownloadHandler"
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
import { useDownloadStore } from '@/stores/downloadStore'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'

const downloadStore = useDownloadStore()
const { downloads, pagination, isLoading, fetchDownloads, togglePublish, deleteDownload } =
  downloadStore

const filters = ref({ search: '', file_type: '', status: '' })
const showDeleteModal = ref(false)
const downloadToDelete = ref(null)

const publishedCount = computed(() => downloads.value.filter(d => d.is_published).length)
const draftCount = computed(() => downloads.value.filter(d => !d.is_published).length)
const totalDownloads = computed(() => {
  return downloads.value.reduce((sum, d) => sum + (d.download_count || 0), 0)
})

const getFileIcon = fileType => {
  const icons = {
    PDF: 'fas fa-file-pdf text-red-500',
    PPTX: 'fas fa-file-powerpoint text-orange-500',
    XLSX: 'fas fa-file-excel text-green-500',
    DOCX: 'fas fa-file-word text-blue-500',
  }
  return icons[fileType] || 'fas fa-file text-gray-500'
}

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

const applyFilters = () => {
  const params = {}
  if (filters.value.search) params.search = filters.value.search
  if (filters.value.file_type) params.file_type = filters.value.file_type
  if (filters.value.status) params.status = filters.value.status
  fetchDownloads(params)
}

const clearFilters = () => {
  filters.value = { search: '', file_type: '', status: '' }
  applyFilters()
}

const changePage = page => {
  if (page >= 1 && page <= pagination.value.last_page) {
    fetchDownloads({ page, ...filters.value })
  }
}

const handleTogglePublish = async id => {
  try {
    await downloadStore.togglePublish(id)
    await applyFilters()
  } catch (error) {
    console.error('Error toggling publish:', error)
  }
}

const confirmDelete = download => {
  downloadToDelete.value = download
  showDeleteModal.value = true
}

const deleteDownloadHandler = async () => {
  if (downloadToDelete.value) {
    await deleteDownload(downloadToDelete.value.id)
    showDeleteModal.value = false
    downloadToDelete.value = null
    applyFilters()
  }
}

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

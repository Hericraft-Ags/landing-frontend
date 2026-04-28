<template>
  <div>
    <!-- Header -->
    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
      <div>
        <div class="flex items-center gap-2">
          <div
            class="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-md"
          >
            <i class="fas fa-tags text-white text-lg"></i>
          </div>
          <div>
            <h2 class="text-2xl font-bold text-gray-800">Categorías</h2>
            <p class="text-gray-500 text-sm mt-0.5">Gestiona las categorías de contenido</p>
          </div>
        </div>
      </div>
      <router-link
        to="/admin/categories/create"
        class="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
      >
        <i class="fas fa-plus text-sm"></i>
        <span>Nueva Categoría</span>
      </router-link>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
      <div
        class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 text-center hover:shadow-md transition"
      >
        <div class="flex items-center justify-center gap-2 mb-2">
          <i class="fas fa-layer-group text-green-500 text-xl"></i>
          <span class="text-2xl font-bold text-gray-800">{{ pagination.total }}</span>
        </div>
        <p class="text-xs text-gray-500 uppercase tracking-wide">Total Categorías</p>
      </div>
      <div
        class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 text-center hover:shadow-md transition"
      >
        <div class="flex items-center justify-center gap-2 mb-2">
          <i class="fas fa-newspaper text-blue-500 text-xl"></i>
          <span class="text-2xl font-bold text-gray-800">{{ articlesCount }}</span>
        </div>
        <p class="text-xs text-gray-500 uppercase tracking-wide">Artículos</p>
      </div>
      <div
        class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 text-center hover:shadow-md transition"
      >
        <div class="flex items-center justify-center gap-2 mb-2">
          <i class="fas fa-video text-orange-500 text-xl"></i>
          <span class="text-2xl font-bold text-gray-800">{{ videosCount }}</span>
        </div>
        <p class="text-xs text-gray-500 uppercase tracking-wide">Videos</p>
      </div>
      <div
        class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 text-center hover:shadow-md transition"
      >
        <div class="flex items-center justify-center gap-2 mb-2">
          <i class="fas fa-podcast text-purple-500 text-xl"></i>
          <span class="text-2xl font-bold text-gray-800">{{ podcastsCount }}</span>
        </div>
        <p class="text-xs text-gray-500 uppercase tracking-wide">Podcasts</p>
      </div>
      <div
        class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 text-center hover:shadow-md transition"
      >
        <div class="flex items-center justify-center gap-2 mb-2">
          <i class="fas fa-download text-indigo-500 text-xl"></i>
          <span class="text-2xl font-bold text-gray-800">{{ downloadsCount }}</span>
        </div>
        <p class="text-xs text-gray-500 uppercase tracking-wide">Descargables</p>
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
              placeholder="Buscar categorías por nombre..."
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
          <option value="article">📰 Artículos</option>
          <option value="video">🎥 Videos</option>
          <option value="podcast">🎙️ Podcasts</option>
          <option value="downloadable">📥 Descargables</option>
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
        <p class="text-gray-500">Cargando categorías...</p>
      </div>
    </div>

    <!-- Table -->
    <div
      v-else-if="categories.length > 0"
      class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
    >
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead class="bg-gray-50 border-b border-gray-200">
            <tr>
              <th
                class="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider"
              >
                Icono
              </th>
              <th
                class="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider"
              >
                Nombre
              </th>
              <th
                class="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider"
              >
                Slug
              </th>
              <th
                class="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider"
              >
                Tipo
              </th>
              <th
                class="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider"
              >
                Orden
              </th>
              <th
                class="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider"
              >
                Estado
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
              v-for="category in categories"
              :key="category.id"
              class="hover:bg-gray-50 transition group"
            >
              <td class="px-6 py-4">
                <div
                  class="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm transition-transform group-hover:scale-110"
                  :style="{ backgroundColor: getColorBg(category.color) }"
                >
                  <i :class="category.icon || 'fas fa-tag'" class="text-white text-lg"></i>
                </div>
              </td>
              <td class="px-6 py-4">
                <div>
                  <p class="font-semibold text-gray-800">{{ category.name }}</p>
                  <p class="text-xs text-gray-400 mt-1">ID: {{ category.id }}</p>
                </div>
              </td>
              <td class="px-6 py-4">
                <code
                  class="text-xs bg-gray-100 px-2.5 py-1.5 rounded-lg text-gray-600 font-mono"
                  >{{ category.slug }}</code
                >
              </td>
              <td class="px-6 py-4">
                <span
                  :class="getTypeBadge(category.type)"
                  class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium"
                >
                  <i :class="getTypeIcon(category.type)" class="text-xs"></i>
                  {{ getTypeLabel(category.type) }}
                </span>
              </td>
              <td class="px-6 py-4">
                <div class="flex items-center gap-2">
                  <span
                    class="text-sm font-medium text-gray-700 bg-gray-100 px-2 py-1 rounded-lg min-w-[40px] text-center"
                    >{{ category.sort_order || 0 }}</span
                  >
                  <div class="flex gap-1">
                    <button
                      v-if="category.sort_order > 0"
                      @click="updateOrder(category, 'up')"
                      class="p-1.5 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition"
                      title="Subir orden"
                    >
                      <i class="fas fa-chevron-up text-xs"></i>
                    </button>
                    <button
                      @click="updateOrder(category, 'down')"
                      class="p-1.5 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition"
                      title="Bajar orden"
                    >
                      <i class="fas fa-chevron-down text-xs"></i>
                    </button>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4">
                <button
                  @click="toggleStatus(category)"
                  class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium transition-all"
                  :class="
                    category.is_active
                      ? 'bg-green-100 text-green-700 hover:bg-green-200'
                      : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  "
                >
                  <i :class="category.is_active ? 'fas fa-check-circle' : 'fas fa-ban'"></i>
                  {{ category.is_active ? 'Activo' : 'Inactivo' }}
                </button>
              </td>
              <td class="px-6 py-4 text-right">
                <div class="flex items-center justify-end gap-1">
                  <router-link
                    :to="`/admin/categories/${category.id}/edit`"
                    class="p-2 text-gray-400 hover:text-blue-500 rounded-lg hover:bg-blue-50 transition"
                    title="Editar"
                  >
                    <i class="fas fa-edit"></i>
                  </router-link>
                  <button
                    @click="confirmDelete(category)"
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
          Mostrando <span class="font-semibold text-gray-700">{{ categories.length }}</span> de
          <span class="font-semibold text-gray-700">{{ pagination.total }}</span> categorías
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
        <i class="fas fa-tags text-4xl text-gray-400"></i>
      </div>
      <h3 class="text-xl font-semibold text-gray-600">No hay categorías</h3>
      <p class="text-gray-400 mt-1">Comienza creando tu primera categoría</p>
      <router-link
        to="/admin/categories/create"
        class="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition shadow-md"
      >
        <i class="fas fa-plus"></i>
        Nueva Categoría
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
            ¿Estás seguro de que deseas eliminar la categoría
            <strong class="text-red-600">{{ categoryToDelete?.name }}</strong
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
              @click="handleDeleteCategory"
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
import { useCategoryStore } from '@/stores/categoryStore'

const categoryStore = useCategoryStore()
const { categories, isLoading, pagination, fetchCategories, updateCategory, deleteCategory } =
  categoryStore

const filters = ref({
  search: '',
  type: '',
})

const showDeleteModal = ref(false)
const categoryToDelete = ref(null)

// Contadores por tipo - MANTENIENDO 'downloadable'
const articlesCount = computed(() => categories.value.filter(c => c.type === 'article').length)
const videosCount = computed(() => categories.value.filter(c => c.type === 'video').length)
const podcastsCount = computed(() => categories.value.filter(c => c.type === 'podcast').length)
const downloadsCount = computed(
  () => categories.value.filter(c => c.type === 'downloadable').length
)

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

const getColorBg = color => {
  const colors = {
    navy: '#0A2966',
    green: '#39CC7F',
    cyan: '#0EF1EB',
    collegeOrange: '#FF6B35',
    accentPink: '#EC4899',
    blue: '#3B82F6',
    purple: '#8B5CF6',
    red: '#EF4444',
    yellow: '#F59E0B',
  }
  return colors[color] || '#6B7280'
}

const getTypeBadge = type => {
  const badges = {
    article: 'bg-blue-100 text-blue-700',
    video: 'bg-orange-100 text-orange-700',
    podcast: 'bg-pink-100 text-pink-700',
    downloadable: 'bg-purple-100 text-purple-700',
  }
  return badges[type] || 'bg-gray-100 text-gray-700'
}

const getTypeIcon = type => {
  const icons = {
    article: 'fas fa-newspaper',
    video: 'fas fa-video',
    podcast: 'fas fa-microphone-alt',
    downloadable: 'fas fa-download',
  }
  return icons[type] || 'fas fa-tag'
}

const getTypeLabel = type => {
  const labels = {
    article: 'Artículos',
    video: 'Videos',
    podcast: 'Podcasts',
    downloadable: 'Descargables',
  }
  return labels[type] || type
}

const applyFilters = () => {
  const params = {}
  if (filters.value.search) params.search = filters.value.search
  if (filters.value.type) params.type = filters.value.type
  fetchCategories(params)
}

const clearFilters = () => {
  filters.value = { search: '', type: '' }
  applyFilters()
}

const changePage = page => {
  if (page >= 1 && page <= pagination.value.last_page) {
    const params = {}
    if (filters.value.search) params.search = filters.value.search
    if (filters.value.type) params.type = filters.value.type
    fetchCategories({ ...params, page })
  }
}

const toggleStatus = async category => {
  try {
    await updateCategory(category.id, { ...category, is_active: !category.is_active })
    await applyFilters()
  } catch (error) {
    console.error('Error toggling status:', error)
  }
}

const updateOrder = async (category, direction) => {
  const newOrder =
    direction === 'up' ? (category.sort_order || 0) - 1 : (category.sort_order || 0) + 1
  try {
    await updateCategory(category.id, { ...category, sort_order: newOrder })
    await applyFilters()
  } catch (error) {
    console.error('Error updating order:', error)
  }
}

const confirmDelete = category => {
  categoryToDelete.value = category
  showDeleteModal.value = true
}

const handleDeleteCategory = async () => {
  if (categoryToDelete.value) {
    try {
      await deleteCategory(categoryToDelete.value.id)
      showDeleteModal.value = false
      categoryToDelete.value = null
      await applyFilters()
    } catch (error) {
      console.error('Error deleting category:', error)
      alert(error.response?.data?.message || 'Error al eliminar la categoría')
    }
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

onMounted(async () => {
  await applyFilters()
})
</script>

<style scoped>
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

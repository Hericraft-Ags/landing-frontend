<template>
  <div>
    <!-- Header -->
    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
      <div>
        <div class="flex items-center gap-2">
          <div
            class="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-md"
          >
            <i class="fas fa-users text-white text-lg"></i>
          </div>
          <div>
            <h2 class="text-2xl font-bold text-gray-800">Autores</h2>
            <p class="text-gray-500 text-sm mt-0.5">Gestiona los autores de contenido</p>
          </div>
        </div>
      </div>
      <router-link
        to="/admin/authors/create"
        class="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
      >
        <i class="fas fa-plus text-sm"></i>
        <span>Nuevo Autor</span>
      </router-link>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <div
        class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 text-center hover:shadow-md transition"
      >
        <div class="flex items-center justify-center gap-2 mb-2">
          <i class="fas fa-users text-green-500 text-xl"></i>
          <span class="text-2xl font-bold text-gray-800">{{ pagination.total }}</span>
        </div>
        <p class="text-xs text-gray-500 uppercase tracking-wide">Total Autores</p>
      </div>
      <div
        class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 text-center hover:shadow-md transition"
      >
        <div class="flex items-center justify-center gap-2 mb-2">
          <i class="fas fa-newspaper text-blue-500 text-xl"></i>
          <span class="text-2xl font-bold text-gray-800">{{ totalArticles }}</span>
        </div>
        <p class="text-xs text-gray-500 uppercase tracking-wide">Total Artículos</p>
      </div>
      <div
        class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 text-center hover:shadow-md transition"
      >
        <div class="flex items-center justify-center gap-2 mb-2">
          <i class="fas fa-star text-yellow-500 text-xl"></i>
          <span class="text-2xl font-bold text-gray-800">{{ activeAuthors }}</span>
        </div>
        <p class="text-xs text-gray-500 uppercase tracking-wide">Autores Activos</p>
      </div>
      <div
        class="bg-white rounded-xl shadow-sm border border-gray-200 p-4 text-center hover:shadow-md transition"
      >
        <div class="flex items-center justify-center gap-2 mb-2">
          <i class="fas fa-chart-line text-purple-500 text-xl"></i>
          <span class="text-2xl font-bold text-gray-800">{{ avgArticlesPerAuthor }}</span>
        </div>
        <p class="text-xs text-gray-500 uppercase tracking-wide">Promedio Artículos</p>
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
              placeholder="Buscar autores por nombre, email o rol..."
              class="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
              @keyup.enter="applyFilters"
            />
          </div>
        </div>
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
        <p class="text-gray-500">Cargando autores...</p>
      </div>
    </div>

    <!-- Table -->
    <div
      v-else-if="authors.length > 0"
      class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
    >
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead class="bg-gray-50 border-b border-gray-200">
            <tr>
              <th
                class="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider"
              >
                Avatar
              </th>
              <th
                class="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider"
              >
                Nombre
              </th>
              <th
                class="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider"
              >
                Email
              </th>
              <th
                class="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider"
              >
                Rol
              </th>
              <th
                class="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider"
              >
                Artículos
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
              v-for="author in authors"
              :key="author.id"
              class="hover:bg-gray-50 transition group"
            >
              <td class="px-6 py-4">
                <div class="relative">
                  <img
                    v-if="author.avatar_url"
                    :src="author.avatar_url"
                    :alt="author.name"
                    class="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm group-hover:border-green-500 transition"
                    @error="event => handleImageError(event, author.name)"
                  />
                  <div
                    v-else
                    class="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-bold text-base shadow-sm"
                  >
                    {{ getInitials(author.name) }}
                  </div>
                  <div
                    class="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-white"
                    :class="author.articles_count > 0 ? 'bg-green-500' : 'bg-gray-400'"
                    :title="author.articles_count > 0 ? 'Autor activo' : 'Sin artículos'"
                  ></div>
                </div>
              </td>
              <td class="px-6 py-4">
                <div>
                  <p class="font-semibold text-gray-800">{{ author.name }}</p>
                  <p class="text-xs text-gray-400 mt-1">ID: {{ author.id }}</p>
                </div>
              </td>
              <td class="px-6 py-4">
                <div class="flex items-center gap-2">
                  <i class="fas fa-envelope text-gray-400 text-xs"></i>
                  <span class="text-sm text-gray-600">{{ author.email || '—' }}</span>
                </div>
              </td>
              <td class="px-6 py-4">
                <span
                  v-if="author.role"
                  class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700"
                >
                  <i class="fas fa-briefcase text-xs"></i>
                  {{ author.role }}
                </span>
                <span v-else class="text-sm text-gray-400">—</span>
              </td>
              <td class="px-6 py-4">
                <div class="flex items-center gap-2">
                  <i class="fas fa-newspaper text-gray-400 text-xs"></i>
                  <span
                    class="text-sm font-semibold"
                    :class="author.articles_count > 0 ? 'text-blue-600' : 'text-gray-500'"
                  >
                    {{ author.articles_count || 0 }}
                  </span>
                </div>
              </td>
              <td class="px-6 py-4 text-right">
                <div class="flex items-center justify-end gap-1">
                  <router-link
                    :to="`/admin/authors/${author.id}/edit`"
                    class="p-2 text-gray-400 hover:text-blue-500 rounded-lg hover:bg-blue-50 transition"
                    title="Editar"
                  >
                    <i class="fas fa-edit"></i>
                  </router-link>
                  <button
                    @click="confirmDelete(author)"
                    class="p-2 text-gray-400 hover:text-red-500 rounded-lg hover:bg-red-50 transition disabled:opacity-50"
                    title="Eliminar"
                    :disabled="author.articles_count > 0"
                  >
                    <i :class="author.articles_count > 0 ? 'fas fa-ban' : 'fas fa-trash-alt'"></i>
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
          Mostrando <span class="font-semibold text-gray-700">{{ authors.length }}</span> de
          <span class="font-semibold text-gray-700">{{ pagination.total }}</span> autores
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
        <i class="fas fa-users text-4xl text-gray-400"></i>
      </div>
      <h3 class="text-xl font-semibold text-gray-600">No hay autores</h3>
      <p class="text-gray-400 mt-1">Comienza creando tu primer autor</p>
      <router-link
        to="/admin/authors/create"
        class="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition shadow-md"
      >
        <i class="fas fa-plus"></i>
        Nuevo Autor
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
            ¿Estás seguro de que deseas eliminar al autor
            <strong class="text-red-600">{{ authorToDelete?.name }}</strong
            >? Esta acción no se puede deshacer.
          </p>
          <div
            v-if="authorToDelete?.articles_count > 0"
            class="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg"
          >
            <div class="flex items-start gap-2">
              <i class="fas fa-exclamation-triangle text-yellow-600 mt-0.5"></i>
              <p class="text-sm text-yellow-700">
                Este autor tiene <strong>{{ authorToDelete.articles_count }}</strong> artículo(s)
                asociado(s). No se puede eliminar hasta que reasignes o elimines sus artículos.
              </p>
            </div>
          </div>
          <div class="flex justify-end gap-3">
            <button
              @click="showDeleteModal = false"
              class="px-5 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition font-medium"
            >
              Cancelar
            </button>
            <button
              v-if="authorToDelete?.articles_count === 0"
              @click="deleteAuthorHandler"
              :disabled="isDeleting"
              class="px-5 py-2.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition font-medium shadow-sm disabled:opacity-50"
            >
              <i v-if="isDeleting" class="fas fa-spinner fa-spin mr-2"></i>
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
import { useAuthorStore } from '@/stores/authorStore'

const authorStore = useAuthorStore()
const { authors, isLoading, pagination, fetchAuthors, deleteAuthor } = authorStore

const filters = ref({ search: '' })
const showDeleteModal = ref(false)
const authorToDelete = ref(null)
const isDeleting = ref(false)

// Stats calculados
const totalArticles = computed(() => {
  return authors.value.reduce((sum, author) => sum + (author.articles_count || 0), 0)
})

const activeAuthors = computed(() => {
  return authors.value.filter(author => (author.articles_count || 0) > 0).length
})

const avgArticlesPerAuthor = computed(() => {
  if (authors.value.length === 0) return 0
  const avg = totalArticles.value / authors.value.length
  return avg.toFixed(1)
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

const getInitials = name => {
  if (!name) return 'A'
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

const handleImageError = (event, authorName) => {
  event.target.style.display = 'none'
  const parent = event.target.parentElement
  const fallback = document.createElement('div')
  fallback.className =
    'w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-bold text-base shadow-sm'
  fallback.textContent = getInitials(authorName)
  parent.appendChild(fallback)
}

const applyFilters = () => {
  const params = {}
  if (filters.value.search) params.search = filters.value.search
  fetchAuthors(params)
}

const clearFilters = () => {
  filters.value = { search: '' }
  applyFilters()
}

const changePage = page => {
  if (page >= 1 && page <= pagination.value.last_page) {
    const params = {}
    if (filters.value.search) params.search = filters.value.search
    fetchAuthors({ ...params, page })
  }
}

const confirmDelete = author => {
  authorToDelete.value = author
  showDeleteModal.value = true
}

const deleteAuthorHandler = async () => {
  if (authorToDelete.value && authorToDelete.value.articles_count === 0) {
    isDeleting.value = true
    try {
      await deleteAuthor(authorToDelete.value.id)
      showDeleteModal.value = false
      authorToDelete.value = null
      applyFilters()
    } catch (error) {
      console.error('Error deleting author:', error)
      alert(error.response?.data?.message || 'Error al eliminar el autor')
    } finally {
      isDeleting.value = false
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

onMounted(() => {
  applyFilters()
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

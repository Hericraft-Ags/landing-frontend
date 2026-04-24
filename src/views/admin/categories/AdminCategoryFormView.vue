<template>
  <div class="max-w-5xl mx-auto">
    <!-- Header con breadcrumb -->
    <div class="mb-6">
      <div class="flex items-center gap-2 text-sm text-gray-500 mb-2">
        <router-link
          to="/admin/categories"
          class="hover:text-green-500 transition flex items-center gap-1"
        >
          <i class="fas fa-arrow-left"></i>
          <span>Categorías</span>
        </router-link>
        <i class="fas fa-chevron-right text-xs"></i>
        <span class="text-gray-700">{{ isEditing ? 'Editar' : 'Nueva' }}</span>
      </div>
      <div class="flex items-center gap-3">
        <div
          class="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-md"
        >
          <i class="fas fa-tag text-white text-lg"></i>
        </div>
        <div>
          <h2 class="text-2xl font-bold text-gray-800">
            {{ isEditing ? 'Editar' : 'Nueva' }} Categoría
          </h2>
          <p class="text-gray-500 text-sm mt-0.5">
            {{
              isEditing
                ? 'Modifica los datos de la categoría'
                : 'Completa los datos para crear una nueva categoría'
            }}
          </p>
        </div>
      </div>
    </div>

    <!-- Formulario -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <form @submit.prevent="handleSubmit">
        <!-- Tabs -->
        <div class="border-b border-gray-200 bg-gray-50/50 px-6">
          <div class="flex gap-6">
            <button
              type="button"
              @click="activeTab = 'basic'"
              class="py-3 text-sm font-medium border-b-2 transition relative group"
              :class="
                activeTab === 'basic'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              "
            >
              <i class="fas fa-info-circle mr-2"></i>Información General
              <div
                class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap"
              >
                Datos básicos de la categoría
              </div>
            </button>
            <button
              type="button"
              @click="activeTab = 'config'"
              class="py-3 text-sm font-medium border-b-2 transition relative group"
              :class="
                activeTab === 'config'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              "
            >
              <i class="fas fa-cog mr-2"></i>Configuración
              <div
                class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap"
              >
                Ajustes de visualización
              </div>
            </button>
          </div>
        </div>

        <div class="p-6 space-y-5">
          <!-- Información General -->
          <div v-show="activeTab === 'basic'" class="space-y-5">
            <!-- Nombre -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Nombre <span class="text-red-500">*</span>
              </label>
              <div class="relative">
                <i
                  class="fas fa-heading absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"
                ></i>
                <input
                  v-model="form.name"
                  type="text"
                  class="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                  :class="{ 'border-red-500': errors.name }"
                  placeholder="Ej. Tecnología Educativa"
                  required
                />
              </div>
              <p v-if="errors.name" class="text-xs text-red-500 mt-1">{{ errors.name }}</p>
            </div>

            <!-- Tipo -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Tipo <span class="text-red-500">*</span>
              </label>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                <label
                  v-for="option in typeOptions"
                  :key="option.value"
                  class="relative flex cursor-pointer"
                >
                  <input
                    type="radio"
                    v-model="form.type"
                    :value="option.value"
                    class="sr-only peer"
                  />
                  <div
                    class="w-full text-center px-4 py-3 rounded-xl border-2 transition-all duration-200 peer-checked:border-green-500 peer-checked:bg-green-50 peer-checked:text-green-700 hover:border-gray-400 cursor-pointer"
                    :class="
                      form.type === option.value
                        ? 'border-green-500 bg-green-50 text-green-700'
                        : 'border-gray-200 text-gray-600'
                    "
                  >
                    <i :class="option.icon" class="mr-2 text-lg"></i>
                    <span class="text-sm font-medium">{{ option.label }}</span>
                  </div>
                </label>
              </div>
              <p v-if="errors.type" class="text-xs text-red-500 mt-2">{{ errors.type }}</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <!-- Icono -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  Icono <span class="text-gray-400 text-xs">(FontAwesome)</span>
                </label>
                <div class="flex gap-3">
                  <div class="relative flex-1">
                    <i
                      class="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"
                    ></i>
                    <input
                      v-model="form.icon"
                      type="text"
                      class="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                      placeholder="fas fa-tag"
                      list="icon-suggestions"
                    />
                    <datalist id="icon-suggestions">
                      <option value="fas fa-newspaper">📰 Artículo</option>
                      <option value="fas fa-video">🎥 Video</option>
                      <option value="fas fa-microphone-alt">🎙️ Podcast</option>
                      <option value="fas fa-download">📥 Descargable</option>
                      <option value="fas fa-chart-line">📈 Tendencias</option>
                      <option value="fas fa-brain">🧠 Pedagogía</option>
                      <option value="fas fa-graduation-cap">🎓 Educación</option>
                      <option value="fas fa-book">📚 Libro</option>
                      <option value="fas fa-lightbulb">💡 Innovación</option>
                      <option value="fas fa-robot">🤖 Robótica</option>
                    </datalist>
                  </div>
                  <div
                    class="w-12 h-12 rounded-xl flex items-center justify-center shadow-md transition-transform hover:scale-105"
                    :style="{ backgroundColor: getColorBg(form.color) }"
                  >
                    <i :class="form.icon || 'fas fa-tag'" class="text-white text-xl"></i>
                  </div>
                </div>
                <p class="text-xs text-gray-500 mt-2">
                  <i class="fas fa-info-circle mr-1"></i>
                  Ejemplos: fas fa-book, far fa-star, fab fa-youtube
                </p>
              </div>

              <!-- Color -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Color</label>
                <div class="flex gap-3">
                  <select
                    v-model="form.color"
                    class="flex-1 px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition bg-white"
                  >
                    <option value="">Selecciona un color</option>
                    <optgroup label="🤩 Colores principales">
                      <option value="navy">🔵 Azul marino</option>
                      <option value="green">🟢 Verde</option>
                      <option value="cyan">💎 Cian</option>
                      <option value="collegeOrange">🟠 Naranja</option>
                      <option value="accentPink">🩷 Rosa</option>
                    </optgroup>
                    <optgroup label="🎨 Otros colores">
                      <option value="blue">🔵 Azul</option>
                      <option value="purple">🟣 Morado</option>
                      <option value="red">🔴 Rojo</option>
                      <option value="yellow">🟡 Amarillo</option>
                    </optgroup>
                  </select>
                  <div
                    class="w-12 h-12 rounded-xl shadow-md transition-all duration-200"
                    :style="{ backgroundColor: getColorBg(form.color) }"
                  ></div>
                </div>
                <p class="text-xs text-gray-500 mt-2">
                  <i class="fas fa-palette mr-1"></i>
                  Color que identificará a la categoría
                </p>
              </div>
            </div>
          </div>

          <!-- Configuración -->
          <div v-show="activeTab === 'config'" class="space-y-5">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <!-- Orden -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  Orden de visualización
                </label>
                <div class="flex items-center gap-3">
                  <div class="relative">
                    <i
                      class="fas fa-sort-numeric-down absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"
                    ></i>
                    <input
                      v-model.number="form.sort_order"
                      type="number"
                      class="w-32 pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition text-center"
                      placeholder="0"
                      min="0"
                    />
                  </div>
                  <div class="flex gap-2">
                    <button
                      type="button"
                      @click="form.sort_order--"
                      class="w-10 h-10 rounded-xl border border-gray-300 hover:bg-gray-50 transition"
                    >
                      <i class="fas fa-minus text-gray-500"></i>
                    </button>
                    <button
                      type="button"
                      @click="form.sort_order++"
                      class="w-10 h-10 rounded-xl border border-gray-300 hover:bg-gray-50 transition"
                    >
                      <i class="fas fa-plus text-gray-500"></i>
                    </button>
                  </div>
                </div>
                <p class="text-xs text-gray-500 mt-2">
                  <i class="fas fa-arrow-up mr-1"></i>
                  Número más bajo aparece primero en el listado
                </p>
              </div>

              <!-- Estado -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Estado</label>
                <div class="flex gap-4">
                  <label class="flex items-center gap-2 cursor-pointer">
                    <div class="relative">
                      <input
                        type="radio"
                        v-model="form.is_active"
                        :value="true"
                        class="sr-only peer"
                      />
                      <div
                        class="w-5 h-5 rounded-full border-2 peer-checked:border-green-500 peer-checked:bg-green-500 transition-all"
                        :class="
                          form.is_active === true
                            ? 'border-green-500 bg-green-500'
                            : 'border-gray-300'
                        "
                      ></div>
                    </div>
                    <span class="text-sm text-gray-700">
                      <i class="fas fa-check-circle text-green-500 mr-1"></i>
                      Activo
                    </span>
                  </label>
                  <label class="flex items-center gap-2 cursor-pointer">
                    <div class="relative">
                      <input
                        type="radio"
                        v-model="form.is_active"
                        :value="false"
                        class="sr-only peer"
                      />
                      <div
                        class="w-5 h-5 rounded-full border-2 peer-checked:border-red-500 peer-checked:bg-red-500 transition-all"
                        :class="
                          form.is_active === false ? 'border-red-500 bg-red-500' : 'border-gray-300'
                        "
                      ></div>
                    </div>
                    <span class="text-sm text-gray-700">
                      <i class="fas fa-ban text-red-500 mr-1"></i>
                      Inactivo
                    </span>
                  </label>
                </div>
                <p class="text-xs text-gray-500 mt-2">
                  <i class="fas fa-eye mr-1"></i>
                  Las categorías inactivas no se muestran en el frontend
                </p>
              </div>
            </div>

            <!-- Slug generado automáticamente -->
            <div class="bg-blue-50 rounded-xl p-4 border border-blue-200">
              <div class="flex items-start gap-3">
                <i class="fas fa-link text-blue-500 mt-0.5"></i>
                <div class="flex-1">
                  <p class="text-sm font-medium text-blue-800 mb-1">URL Amigable (Slug)</p>
                  <p class="text-xs text-blue-600 font-mono">
                    {{ form.name ? slugify(form.name) : 'se-generara-automaticamente' }}
                  </p>
                  <p class="text-xs text-blue-600 mt-2">
                    <i class="fas fa-info-circle mr-1"></i>
                    El slug se genera automáticamente a partir del nombre
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Preview Card -->
          <div class="border-t border-gray-200 pt-5 mt-2">
            <div class="flex items-center justify-between mb-3">
              <h4 class="text-sm font-medium text-gray-700 flex items-center gap-2">
                <i class="fas fa-eye text-green-500"></i>
                Vista previa
              </h4>
              <span class="text-xs text-gray-400">Así se verá en el frontend</span>
            </div>
            <div
              class="bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200 p-4"
            >
              <div class="flex items-center gap-4">
                <div
                  class="w-14 h-14 rounded-xl flex items-center justify-center shadow-md transition-transform hover:scale-105"
                  :style="{ backgroundColor: getColorBg(form.color) }"
                >
                  <i :class="form.icon || 'fas fa-tag'" class="text-white text-2xl"></i>
                </div>
                <div class="flex-1">
                  <p class="font-semibold text-gray-800 text-lg">
                    {{ form.name || 'Nombre de categoría' }}
                  </p>
                  <div class="flex items-center gap-2 mt-1">
                    <span
                      class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium"
                      :class="getTypeBadge(form.type)"
                    >
                      <i :class="getTypeIcon(form.type)" class="text-xs"></i>
                      {{ getTypeLabel(form.type) || 'Tipo no seleccionado' }}
                    </span>
                    <span
                      v-if="form.sort_order !== null && form.sort_order !== 0"
                      class="text-xs text-gray-400"
                    >
                      <i class="fas fa-sort-numeric-down mr-1"></i>
                      Orden: {{ form.sort_order }}
                    </span>
                  </div>
                </div>
                <div class="text-right">
                  <span
                    class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium"
                    :class="
                      form.is_active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'
                    "
                  >
                    <i :class="form.is_active ? 'fas fa-check-circle' : 'fas fa-ban'"></i>
                    {{ form.is_active ? 'Activo' : 'Inactivo' }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Submit -->
        <div class="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
          <router-link
            to="/admin/categories"
            class="px-5 py-2.5 border border-gray-300 rounded-xl hover:bg-gray-50 transition text-gray-700 font-medium"
          >
            Cancelar
          </router-link>
          <button
            type="submit"
            :disabled="isLoading"
            class="px-6 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-medium hover:from-green-600 hover:to-green-700 transition-all disabled:opacity-50 shadow-sm hover:shadow-md flex items-center gap-2"
          >
            <i v-if="isLoading" class="fas fa-spinner fa-spin"></i>
            <i v-else :class="isEditing ? 'fas fa-save' : 'fas fa-plus'"></i>
            {{
              isLoading ? 'Guardando...' : isEditing ? 'Actualizar Categoría' : 'Crear Categoría'
            }}
          </button>
        </div>
      </form>
    </div>

    <!-- Sugerencias de iconos -->
    <div class="mt-6 bg-white rounded-xl shadow-sm border border-gray-200 p-5">
      <h4 class="text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
        <i class="fas fa-lightbulb text-yellow-500"></i>
        Iconos populares por tipo
      </h4>
      <div class="flex flex-wrap gap-3">
        <button
          v-for="suggestion in iconSuggestions"
          :key="suggestion.icon"
          @click="form.icon = suggestion.icon"
          class="flex items-center gap-2 px-3 py-2 bg-gray-50 hover:bg-gray-100 rounded-xl transition text-sm hover:scale-105 transform duration-200"
        >
          <i :class="suggestion.icon" class="text-gray-600 text-base w-5"></i>
          <span class="text-gray-600">{{ suggestion.label }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useCategoryStore } from '@/stores/categoryStore'

const router = useRouter()
const route = useRoute()
const categoryStore = useCategoryStore()
const { isLoading, fetchCategories, createCategory, updateCategory } = categoryStore

const activeTab = ref('basic')
const isEditing = computed(() => !!route.params.id)

const form = ref({
  name: '',
  icon: 'fas fa-tag',
  color: 'green',
  type: '',
  sort_order: 0,
  is_active: true,
})

const errors = ref({
  name: '',
  type: '',
})

const typeOptions = [
  { value: 'article', label: 'Artículos', icon: 'fas fa-newspaper' },
  { value: 'video', label: 'Videos', icon: 'fas fa-video' },
  { value: 'podcast', label: 'Podcasts', icon: 'fas fa-microphone-alt' },
  { value: 'downloadable', label: 'Descargables', icon: 'fas fa-download' },
]

const iconSuggestions = [
  { icon: 'fas fa-newspaper', label: 'Artículo' },
  { icon: 'fas fa-video', label: 'Video' },
  { icon: 'fas fa-microphone-alt', label: 'Podcast' },
  { icon: 'fas fa-download', label: 'Descargable' },
  { icon: 'fas fa-chart-line', label: 'Tendencias' },
  { icon: 'fas fa-brain', label: 'Pedagogía' },
  { icon: 'fas fa-graduation-cap', label: 'Educación' },
  { icon: 'fas fa-book', label: 'Libro' },
  { icon: 'fas fa-lightbulb', label: 'Innovación' },
  { icon: 'fas fa-robot', label: 'Robótica' },
  { icon: 'fas fa-code', label: 'Programación' },
  { icon: 'fas fa-flask', label: 'Ciencia' },
]

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

const slugify = text => {
  if (!text) return ''
  return text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
}

const validateForm = () => {
  let isValid = true
  errors.value = { name: '', type: '' }

  if (!form.value.name.trim()) {
    errors.value.name = 'El nombre es requerido'
    isValid = false
  }

  if (!form.value.type) {
    errors.value.type = 'Debes seleccionar un tipo'
    isValid = false
  }

  return isValid
}

const loadCategory = async () => {
  const id = route.params.id
  if (id) {
    try {
      await fetchCategories()
      const category = categoryStore.categories.value.find(c => c.id == id)
      if (category) {
        form.value = {
          name: category.name,
          icon: category.icon || 'fas fa-tag',
          color: category.color || 'green',
          type: category.type,
          sort_order: category.sort_order || 0,
          is_active: category.is_active,
        }
      }
    } catch (error) {
      console.error('Error loading category:', error)
    }
  }
}

const handleSubmit = async () => {
  if (!validateForm()) {
    activeTab.value = 'basic'
    return
  }

  try {
    if (isEditing.value) {
      await updateCategory(route.params.id, form.value)
    } else {
      await createCategory(form.value)
    }
    await fetchCategories()
    router.push('/admin/categories')
  } catch (error) {
    console.error('Error saving category:', error)
    if (error.response?.data?.errors) {
      const errors = error.response.data.errors
      const errorMessages = Object.values(errors).flat().join('\n')
      alert(`Errores de validación:\n${errorMessages}`)
    } else {
      alert(error.response?.data?.message || 'Error al guardar la categoría')
    }
  }
}

onMounted(() => {
  loadCategory()
})
</script>

<style scoped>
/* Estilos adicionales si son necesarios */
</style>

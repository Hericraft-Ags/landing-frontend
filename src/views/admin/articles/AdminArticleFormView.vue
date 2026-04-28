<template>
  <div class="max-w-6xl mx-auto">
    <!-- Header con breadcrumb -->
    <div class="mb-6">
      <div class="flex items-center gap-2 text-sm text-gray-500 mb-2">
        <router-link
          to="/admin/articles"
          class="hover:text-green-500 transition flex items-center gap-1"
        >
          <i class="fas fa-arrow-left"></i>
          <span>Artículos</span>
        </router-link>
        <i class="fas fa-chevron-right text-xs"></i>
        <span class="text-gray-700">{{ isEditing ? 'Editar' : 'Nuevo' }}</span>
      </div>
      <div class="flex items-center gap-3">
        <div
          class="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-md"
        >
          <i class="fas fa-newspaper text-white text-lg"></i>
        </div>
        <div>
          <h2 class="text-2xl font-bold text-gray-800">
            {{ isEditing ? 'Editar' : 'Nuevo' }} Artículo
          </h2>
          <p class="text-gray-500 text-sm mt-0.5">
            {{
              isEditing
                ? 'Modifica los datos del artículo'
                : 'Completa los datos para crear un nuevo artículo'
            }}
          </p>
        </div>
      </div>
    </div>

    <!-- Formulario con tabs -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <!-- Tabs -->
      <div class="border-b border-gray-200 bg-gray-50/50 px-6">
        <div class="flex gap-6">
          <button
            type="button"
            @click="activeTab = 'content'"
            class="py-3 text-sm font-medium border-b-2 transition relative group"
            :class="
              activeTab === 'content'
                ? 'border-green-500 text-green-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            "
          >
            <i class="fas fa-edit mr-2"></i>Contenido
            <div
              class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap"
            >
              Edita el contenido principal del artículo
            </div>
          </button>
          <button
            type="button"
            @click="activeTab = 'seo'"
            class="py-3 text-sm font-medium border-b-2 transition relative group"
            :class="
              activeTab === 'seo'
                ? 'border-green-500 text-green-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            "
          >
            <i class="fas fa-chart-line mr-2"></i>SEO & Configuración
            <div
              class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap"
            >
              Optimiza el artículo para buscadores
            </div>
          </button>
        </div>
      </div>

      <form @submit.prevent="handleSubmit">
        <!-- Contenido Principal -->
        <div v-show="activeTab === 'content'" class="p-6 space-y-5">
          <!-- Título -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Título <span class="text-red-500">*</span>
            </label>
            <div class="relative">
              <i
                class="fas fa-heading absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"
              ></i>
              <input
                v-model="form.title"
                type="text"
                class="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                placeholder="Ej. Los beneficios de la educación STEAM"
                required
              />
            </div>
            <p class="text-xs text-gray-500 mt-1">
              Un título atractivo y descriptivo mejora el SEO
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <!-- Categoría -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Categoría</label>
              <div class="relative">
                <i
                  class="fas fa-tag absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"
                ></i>
                <select
                  v-model="form.category_id"
                  class="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                >
                  <option :value="null">Selecciona una categoría</option>
                  <option v-for="cat in categories" :key="cat.id" :value="cat.id">
                    {{ cat.name }}
                  </option>
                </select>
              </div>
            </div>

            <!-- Autor -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Autor</label>
              <div class="relative">
                <i
                  class="fas fa-user absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"
                ></i>
                <select
                  v-model="form.author_id"
                  class="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                >
                  <option :value="null">Selecciona un autor</option>
                  <option v-for="author in authors" :key="author.id" :value="author.id">
                    {{ author.name }}
                  </option>
                </select>
              </div>
            </div>
          </div>

          <!-- Extracto -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Extracto</label>
            <textarea
              v-model="form.excerpt"
              rows="3"
              class="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
              placeholder="Breve descripción del artículo que aparecerá en las tarjetas de vista previa..."
            ></textarea>
            <div class="flex justify-between items-center mt-1">
              <p class="text-xs text-gray-500">Máximo 160 caracteres para SEO</p>
              <span class="text-xs text-gray-400">{{ form.excerpt.length }}/160</span>
            </div>
          </div>

          <!-- Contenido -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Contenido <span class="text-red-500">*</span>
            </label>
            <TiptapEditor v-model="form.content" />
          </div>

          <!-- Imagen destacada -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Imagen destacada</label>
            <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div class="relative group">
                <img
                  v-if="imagePreview"
                  :src="imagePreview"
                  class="w-32 h-32 rounded-xl object-cover border-2 border-green-500 shadow-md"
                />
                <div
                  v-else
                  class="w-32 h-32 rounded-xl bg-gray-100 flex items-center justify-center border-2 border-dashed border-gray-300"
                >
                  <i class="fas fa-image text-4xl text-gray-400"></i>
                </div>
                <div
                  v-if="imagePreview"
                  class="absolute inset-0 bg-black/40 rounded-xl opacity-0 group-hover:opacity-100 transition flex items-center justify-center"
                >
                  <i class="fas fa-edit text-white text-xl"></i>
                </div>
              </div>
              <div class="flex-1">
                <div class="flex flex-wrap gap-2">
                  <input
                    type="file"
                    ref="imageInput"
                    accept="image/jpeg,image/png,image/jpg,image/webp"
                    class="hidden"
                    @change="onImageChange"
                  />
                  <button
                    type="button"
                    @click="imageInput.click()"
                    class="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition flex items-center gap-2"
                  >
                    <i class="fas fa-upload text-gray-500"></i>
                    Subir imagen
                  </button>
                  <button
                    v-if="imagePreview"
                    type="button"
                    @click="removeImage"
                    class="px-4 py-2 text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition flex items-center gap-2"
                  >
                    <i class="fas fa-trash-alt"></i>
                    Eliminar
                  </button>
                </div>
                <p class="text-xs text-gray-500 mt-2">
                  Formatos: JPG, PNG, WEBP (max 2MB) • Recomendado: 1200x630px
                </p>
              </div>
            </div>
          </div>

          <!-- Tags -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Tags</label>
            <div class="flex flex-wrap gap-2 mb-3">
              <span
                v-for="tag in tags"
                :key="tag"
                class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition"
              >
                <i class="fas fa-tag text-gray-400 text-xs"></i>
                {{ tag }}
                <button
                  type="button"
                  @click="removeTag(tag)"
                  class="text-gray-400 hover:text-red-500 ml-1"
                >
                  <i class="fas fa-times-circle"></i>
                </button>
              </span>
            </div>
            <div class="flex gap-2">
              <input
                v-model="newTag"
                type="text"
                class="flex-1 px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                placeholder="Escribe un tag y presiona Enter"
                @keyup.enter="addTag"
              />
              <button
                type="button"
                @click="addTag"
                class="px-5 py-2.5 bg-gray-100 rounded-xl hover:bg-gray-200 transition font-medium"
              >
                Agregar
              </button>
            </div>
            <p class="text-xs text-gray-500 mt-1">
              Los tags ayudan a categorizar y buscar contenido
            </p>
          </div>
        </div>

        <!-- SEO y Configuración -->
        <div v-show="activeTab === 'seo'" class="p-6 space-y-5">
          <div class="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
            <div class="flex items-center gap-2">
              <i class="fas fa-chart-line text-blue-500"></i>
              <span class="text-sm text-blue-700"
                >Optimiza tu artículo para motores de búsqueda</span
              >
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <!-- SEO Title -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">SEO Title</label>
              <input
                v-model="form.seo_title"
                type="text"
                class="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                placeholder="Título para motores de búsqueda"
              />
              <p class="text-xs text-gray-500 mt-1">
                Dejar en blanco para usar el título del artículo
              </p>
            </div>

            <!-- SEO Description -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">SEO Description</label>
              <textarea
                v-model="form.seo_description"
                rows="2"
                class="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                placeholder="Descripción para motores de búsqueda"
              ></textarea>
              <div class="flex justify-between items-center mt-1">
                <p class="text-xs text-gray-500">Máximo 160 caracteres</p>
                <span class="text-xs text-gray-400">{{ form.seo_description.length }}/160</span>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
            <!-- Publicado -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Estado</label>
              <div class="flex gap-4">
                <label class="flex items-center gap-2 cursor-pointer">
                  <div class="relative">
                    <input
                      type="radio"
                      v-model="form.is_published"
                      :value="true"
                      class="sr-only peer"
                    />
                    <div
                      class="w-5 h-5 rounded-full border-2 peer-checked:border-green-500 peer-checked:bg-green-500 transition-all"
                      :class="
                        form.is_published === true
                          ? 'border-green-500 bg-green-500'
                          : 'border-gray-300'
                      "
                    ></div>
                  </div>
                  <span class="text-sm text-gray-700">Publicado</span>
                </label>
                <label class="flex items-center gap-2 cursor-pointer">
                  <div class="relative">
                    <input
                      type="radio"
                      v-model="form.is_published"
                      :value="false"
                      class="sr-only peer"
                    />
                    <div
                      class="w-5 h-5 rounded-full border-2 peer-checked:border-yellow-500 peer-checked:bg-yellow-500 transition-all"
                      :class="
                        form.is_published === false
                          ? 'border-yellow-500 bg-yellow-500'
                          : 'border-gray-300'
                      "
                    ></div>
                  </div>
                  <span class="text-sm text-gray-700">Borrador</span>
                </label>
              </div>
            </div>

            <!-- Destacado -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Destacado</label>
              <label class="flex items-center gap-2 cursor-pointer">
                <div class="relative">
                  <input type="checkbox" v-model="form.is_featured" class="sr-only peer" />
                  <div
                    class="w-5 h-5 rounded border-2 peer-checked:bg-purple-500 peer-checked:border-purple-500 transition-all flex items-center justify-center"
                    :class="
                      form.is_featured ? 'bg-purple-500 border-purple-500' : 'border-gray-300'
                    "
                  >
                    <i v-if="form.is_featured" class="fas fa-check text-white text-xs"></i>
                  </div>
                </div>
                <span class="text-sm text-gray-700">Marcar como destacado</span>
              </label>
              <p class="text-xs text-gray-500 mt-1">Los artículos destacados aparecen primero</p>
            </div>

            <!-- Fecha de publicación -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1"
                >Fecha de publicación</label
              >
              <input
                v-model="form.published_at"
                type="date"
                class="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
              />
              <p class="text-xs text-gray-500 mt-1">Dejar en blanco para usar la fecha actual</p>
            </div>
          </div>

          <!-- Vista previa de SEO -->
          <div class="mt-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
            <h4 class="text-sm font-medium text-gray-700 mb-3">Vista previa en buscadores</h4>
            <div class="space-y-1">
              <p class="text-blue-600 text-lg font-medium hover:underline cursor-pointer truncate">
                {{ form.seo_title || form.title || 'Título del artículo' }}
              </p>
              <p class="text-green-600 text-sm truncate">
                {{ baseUrl }}/saberes/articulo/{{ isEditing && form.slug ? form.slug : '...' }}
              </p>
              <p class="text-gray-500 text-sm line-clamp-2">
                {{
                  form.seo_description ||
                  form.excerpt ||
                  'Descripción del artículo que aparecerá en los resultados de búsqueda...'
                }}
              </p>
            </div>
          </div>
        </div>

        <!-- Submit -->
        <div class="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
          <router-link
            to="/admin/articles"
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
              isLoading ? 'Guardando...' : isEditing ? 'Actualizar Artículo' : 'Publicar Artículo'
            }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useArticleStore } from '@/stores/articleStore'
import TiptapEditor from '@/components/ui/TipTapEditor.vue'

const router = useRouter()
const route = useRoute()
const articleStore = useArticleStore()
const { categories, authors, isLoading, createArticle, updateArticle, fetchArticle } = articleStore

const activeTab = ref('content')
const imageInput = ref(null)
const imagePreview = ref(null)
const imageFile = ref(null)
const tags = ref([])
const newTag = ref('')

const isEditing = computed(() => !!route.params.id)

const form = ref({
  title: '',
  slug: '',
  excerpt: '',
  content: '',
  featured_image: null,
  category_id: null,
  author_id: null,
  tags: [],
  is_featured: false,
  is_published: false,
  published_at: '',
  seo_title: '',
  seo_description: '',
})

const baseUrl = computed(() => {
  if (typeof window !== 'undefined') {
    return window.location.origin
  }
  return ''
})

const addTag = () => {
  if (newTag.value.trim() && !tags.value.includes(newTag.value.trim())) {
    tags.value.push(newTag.value.trim())
    form.value.tags = tags.value
    newTag.value = ''
  }
}

const removeTag = tag => {
  tags.value = tags.value.filter(t => t !== tag)
  form.value.tags = tags.value
}

const onImageChange = event => {
  const file = event.target.files[0]
  if (file) {
    if (file.size > 2 * 1024 * 1024) {
      alert('El archivo es demasiado grande. Máximo 2MB')
      return
    }
    imageFile.value = file
    form.value.featured_image = file
    const reader = new FileReader()
    reader.onload = e => {
      imagePreview.value = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

const removeImage = () => {
  imageFile.value = null
  imagePreview.value = null
  form.value.featured_image = null
  if (imageInput.value) {
    imageInput.value.value = ''
  }
}

const loadArticle = async () => {
  const id = route.params.id
  if (id) {
    try {
      const response = await fetchArticle(id)
      const article = response.data

      form.value = {
        title: article.title,
        slug: article.slug,
        excerpt: article.excerpt || '',
        content: article.content,
        featured_image: null,
        category_id: article.category_id,
        author_id: article.author_id,
        tags: article.tags || [],
        is_featured: article.is_featured,
        is_published: article.is_published,
        published_at: article.published_at ? article.published_at.split('T')[0] : '',
        seo_title: article.seo_title || '',
        seo_description: article.seo_description || '',
      }

      tags.value = article.tags || []

      if (article.featured_image) {
        imagePreview.value = article.featured_image
      }
    } catch (error) {
      console.error('Error loading article:', error)
    }
  }
}

const handleSubmit = async () => {
  try {
    const formData = {
      ...form.value,
      tags: tags.value,
    }

    if (imageFile.value) {
      formData.featured_image = imageFile.value
    }

    if (isEditing.value) {
      await updateArticle(route.params.id, formData)
    } else {
      await createArticle(formData)
    }

    router.push('/admin/articles')
  } catch (error) {
    console.error('Error saving article:', error)
    if (error.response?.data?.errors) {
      const errors = error.response.data.errors
      const errorMessages = Object.values(errors).flat().join('\n')
      alert(`Errores de validación:\n${errorMessages}`)
    } else {
      alert(error.response?.data?.message || 'Error al guardar el artículo')
    }
  }
}

// Contador de caracteres para excerpt
watch(
  () => form.value.excerpt,
  newVal => {
    if (newVal && newVal.length > 160) {
      form.value.excerpt = newVal.slice(0, 160)
    }
  }
)

// Contador de caracteres para seo_description
watch(
  () => form.value.seo_description,
  newVal => {
    if (newVal && newVal.length > 160) {
      form.value.seo_description = newVal.slice(0, 160)
    }
  }
)

onMounted(async () => {
  await articleStore.fetchCategories()
  await articleStore.fetchAuthors()
  await loadArticle()
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

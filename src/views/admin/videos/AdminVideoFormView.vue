<template>
  <div class="max-w-5xl mx-auto">
    <!-- Header con breadcrumb -->
    <div class="mb-6">
      <div class="flex items-center gap-2 text-sm text-gray-500 mb-2">
        <router-link
          to="/admin/videos"
          class="hover:text-green-500 transition flex items-center gap-1"
        >
          <i class="fas fa-arrow-left"></i>
          <span>Videos</span>
        </router-link>
        <i class="fas fa-chevron-right text-xs"></i>
        <span class="text-gray-700">{{ isEditing ? 'Editar' : 'Nuevo' }}</span>
      </div>
      <div class="flex items-center gap-3">
        <div
          class="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-md"
        >
          <i class="fas fa-video text-white text-lg"></i>
        </div>
        <div>
          <h2 class="text-2xl font-bold text-gray-800">
            {{ isEditing ? 'Editar' : 'Nuevo' }} Video
          </h2>
          <p class="text-gray-500 text-sm mt-0.5">
            {{
              isEditing
                ? 'Modifica los datos del video'
                : 'Completa los datos para crear un nuevo video'
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
            @click="activeTab = 'basic'"
            class="py-3 text-sm font-medium border-b-2 transition relative group"
            :class="
              activeTab === 'basic'
                ? 'border-green-500 text-green-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            "
          >
            <i class="fas fa-info-circle mr-2"></i>Información Básica
            <div
              class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap"
            >
              Configuración principal del video
            </div>
          </button>
          <button
            type="button"
            @click="activeTab = 'media'"
            class="py-3 text-sm font-medium border-b-2 transition relative group"
            :class="
              activeTab === 'media'
                ? 'border-green-500 text-green-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            "
          >
            <i class="fas fa-play-circle mr-2"></i>Multimedia
            <div
              class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap"
            >
              Video y thumbnail
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
              Publicación y acceso
            </div>
          </button>
        </div>
      </div>

      <form @submit.prevent="handleSubmit">
        <!-- Información Básica -->
        <div v-show="activeTab === 'basic'" class="p-6 space-y-5">
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
                placeholder="Ej. Workshop: Introducción a la Robótica Educativa"
                required
              />
            </div>
            <p class="text-xs text-gray-500 mt-1">Un título atractivo mejora la visibilidad</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <!-- Tipo de video -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Tipo <span class="text-red-500">*</span>
              </label>
              <div class="relative">
                <i
                  class="fas fa-tag absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"
                ></i>
                <select
                  v-model="form.type"
                  class="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                  required
                >
                  <option value="workshop">🎓 Workshop</option>
                  <option value="tutorial">📖 Tutorial</option>
                  <option value="webinar">💻 Webinar</option>
                </select>
              </div>
            </div>

            <!-- Categoría -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Categoría</label>
              <div class="relative">
                <i
                  class="fas fa-folder absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"
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
          </div>

          <!-- Descripción -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
            <textarea
              v-model="form.description"
              rows="4"
              class="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
              placeholder="Describe el contenido del video..."
            ></textarea>
            <div class="flex justify-between items-center mt-1">
              <p class="text-xs text-gray-500">Máximo 500 caracteres</p>
              <span class="text-xs text-gray-400">{{ form.description.length }}/500</span>
            </div>
          </div>
        </div>

        <!-- Multimedia -->
        <div v-show="activeTab === 'media'" class="p-6 space-y-5">
          <!-- URL del video -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              URL del Video <span class="text-red-500">*</span>
            </label>
            <div class="relative">
              <i
                class="fab fa-youtube absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"
              ></i>
              <input
                v-model="form.video_url"
                type="url"
                class="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                placeholder="https://www.youtube.com/watch?v=..."
                required
                @blur="validateVideoUrl"
              />
            </div>
            <p class="text-xs text-gray-500 mt-1">Soporta YouTube, Vimeo y otras plataformas</p>
          </div>

          <!-- Thumbnail -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1"
              >Thumbnail (miniatura)</label
            >
            <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div class="relative group">
                <img
                  v-if="thumbnailPreview"
                  :src="thumbnailPreview"
                  class="w-32 h-32 rounded-xl object-cover border-2 border-green-500 shadow-md"
                />
                <div
                  v-else
                  class="w-32 h-32 rounded-xl bg-gray-100 flex items-center justify-center border-2 border-dashed border-gray-300"
                >
                  <i class="fas fa-image text-4xl text-gray-400"></i>
                </div>
                <div
                  v-if="thumbnailPreview"
                  class="absolute inset-0 bg-black/40 rounded-xl opacity-0 group-hover:opacity-100 transition flex items-center justify-center"
                >
                  <i class="fas fa-edit text-white text-xl"></i>
                </div>
              </div>
              <div class="flex-1">
                <div class="flex flex-wrap gap-2">
                  <input
                    type="file"
                    ref="thumbnailInput"
                    accept="image/jpeg,image/png,image/jpg,image/webp"
                    class="hidden"
                    @change="onThumbnailChange"
                  />
                  <button
                    type="button"
                    @click="thumbnailInput.click()"
                    class="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition flex items-center gap-2"
                  >
                    <i class="fas fa-upload text-gray-500"></i>
                    Subir thumbnail
                  </button>
                  <button
                    v-if="thumbnailPreview"
                    type="button"
                    @click="removeThumbnail"
                    class="px-4 py-2 text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition flex items-center gap-2"
                  >
                    <i class="fas fa-trash-alt"></i>
                    Eliminar
                  </button>
                </div>
                <p class="text-xs text-gray-500 mt-2">
                  Formatos: JPG, PNG, WEBP (max 2MB) • Recomendado: 1280x720px
                </p>
              </div>
            </div>
          </div>

          <!-- Preview del video -->
          <div v-if="embedUrl" class="mt-4 p-4 bg-gray-50 rounded-xl">
            <div class="flex items-center gap-2 mb-3">
              <i class="fas fa-video text-green-500"></i>
              <h4 class="text-sm font-medium text-gray-700">Vista previa del video</h4>
            </div>
            <div class="aspect-video bg-black rounded-lg overflow-hidden">
              <iframe
                :src="embedUrl"
                class="w-full h-full"
                frameborder="0"
                allow="
                  accelerometer;
                  autoplay;
                  clipboard-write;
                  encrypted-media;
                  gyroscope;
                  picture-in-picture;
                "
                allowfullscreen
              ></iframe>
            </div>
            <p class="text-xs text-gray-500 mt-2">
              <i class="fas fa-info-circle mr-1"></i>
              Vista previa del video. Puede tardar unos segundos en cargar.
            </p>
          </div>
        </div>

        <!-- Configuración -->
        <div v-show="activeTab === 'config'" class="p-6 space-y-5">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <!-- Duración -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Duración</label>
              <div class="relative">
                <i
                  class="fas fa-hourglass-half absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"
                ></i>
                <input
                  v-model.number="form.duration"
                  type="number"
                  class="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                  placeholder="Ej: 3600"
                />
              </div>
              <div class="flex gap-4 mt-2">
                <span class="text-xs text-gray-500">En segundos:</span>
                <span class="text-xs text-gray-600">{{ formattedDuration }}</span>
                <button
                  type="button"
                  @click="setDuration(3600)"
                  class="text-xs text-blue-500 hover:text-blue-700"
                >
                  1 hora
                </button>
                <button
                  type="button"
                  @click="setDuration(1800)"
                  class="text-xs text-blue-500 hover:text-blue-700"
                >
                  30 min
                </button>
                <button
                  type="button"
                  @click="setDuration(900)"
                  class="text-xs text-blue-500 hover:text-blue-700"
                >
                  15 min
                </button>
              </div>
            </div>

            <!-- Fecha de publicación -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1"
                >Fecha de publicación</label
              >
              <div class="relative">
                <i
                  class="fas fa-calendar-alt absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"
                ></i>
                <input
                  v-model="form.published_at"
                  type="date"
                  class="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                />
              </div>
              <p class="text-xs text-gray-500 mt-1">Dejar en blanco para usar la fecha actual</p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <!-- Acceso -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Acceso</label>
              <div class="flex gap-4">
                <label class="flex items-center gap-2 cursor-pointer">
                  <div class="relative">
                    <input type="radio" v-model="form.is_free" :value="true" class="sr-only peer" />
                    <div
                      class="w-5 h-5 rounded-full border-2 peer-checked:border-green-500 peer-checked:bg-green-500 transition-all"
                      :class="
                        form.is_free === true ? 'border-green-500 bg-green-500' : 'border-gray-300'
                      "
                    ></div>
                  </div>
                  <span class="text-sm text-gray-700">Gratuito</span>
                </label>
                <label class="flex items-center gap-2 cursor-pointer">
                  <div class="relative">
                    <input
                      type="radio"
                      v-model="form.is_free"
                      :value="false"
                      class="sr-only peer"
                    />
                    <div
                      class="w-5 h-5 rounded-full border-2 peer-checked:border-purple-500 peer-checked:bg-purple-500 transition-all"
                      :class="
                        form.is_free === false
                          ? 'border-purple-500 bg-purple-500'
                          : 'border-gray-300'
                      "
                    ></div>
                  </div>
                  <span class="text-sm text-gray-700">Premium</span>
                </label>
              </div>
            </div>

            <!-- Estado -->
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
          </div>
        </div>

        <!-- Submit -->
        <div class="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
          <router-link
            to="/admin/videos"
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
            {{ isLoading ? 'Guardando...' : isEditing ? 'Actualizar Video' : 'Publicar Video' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useVideoStore } from '@/stores/videoStore'

const router = useRouter()
const route = useRoute()
const videoStore = useVideoStore()
const { categories, isLoading, createVideo, updateVideo, fetchVideo } = videoStore

const activeTab = ref('basic')
const thumbnailInput = ref(null)
const thumbnailPreview = ref(null)
const thumbnailFile = ref(null)

const isEditing = computed(() => !!route.params.id)

const form = ref({
  title: '',
  description: '',
  video_url: '',
  thumbnail_url: null,
  duration: null,
  category_id: null,
  type: 'webinar',
  is_free: true,
  is_published: false,
  published_at: '',
})

const embedUrl = computed(() => {
  const url = form.value.video_url
  if (!url) return null

  // YouTube
  if (url.includes('youtube.com/watch?v=')) {
    const videoId = url.split('v=')[1]?.split('&')[0]
    return `https://www.youtube.com/embed/${videoId}`
  }
  // YouTube short
  if (url.includes('youtu.be/')) {
    const videoId = url.split('youtu.be/')[1]?.split('?')[0]
    return `https://www.youtube.com/embed/${videoId}`
  }
  // Vimeo
  if (url.includes('vimeo.com/')) {
    const videoId = url.split('vimeo.com/')[1]?.split('?')[0]
    return `https://player.vimeo.com/video/${videoId}`
  }
  return url
})

const formattedDuration = computed(() => {
  const seconds = form.value.duration
  if (!seconds) return '—'
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const secs = seconds % 60

  if (hours > 0) {
    return `${hours}h ${minutes}m ${secs}s`
  }
  if (minutes > 0) {
    return `${minutes}m ${secs}s`
  }
  return `${secs}s`
})

const setDuration = seconds => {
  form.value.duration = seconds
}

const validateVideoUrl = () => {
  const url = form.value.video_url
  if (
    url &&
    !url.includes('youtube.com') &&
    !url.includes('youtu.be') &&
    !url.includes('vimeo.com')
  ) {
    console.warn('URL no reconocida:', url)
  }
}

const onThumbnailChange = event => {
  const file = event.target.files[0]
  if (file) {
    if (file.size > 2 * 1024 * 1024) {
      alert('El archivo es demasiado grande. Máximo 2MB')
      return
    }
    thumbnailFile.value = file
    form.value.thumbnail_url = file
    const reader = new FileReader()
    reader.onload = e => {
      thumbnailPreview.value = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

const removeThumbnail = () => {
  thumbnailFile.value = null
  thumbnailPreview.value = null
  form.value.thumbnail_url = null
  if (thumbnailInput.value) {
    thumbnailInput.value.value = ''
  }
}

const loadVideo = async () => {
  const id = route.params.id
  if (id) {
    try {
      await videoStore.fetchCategories()
      const response = await fetchVideo(id)
      const video = response.data
      form.value = {
        title: video.title,
        description: video.description || '',
        video_url: video.video_url,
        thumbnail_url: null,
        duration: video.duration,
        category_id: video.category_id,
        type: video.type,
        is_free: video.is_free,
        is_published: video.is_published,
        published_at: video.published_at ? video.published_at.split('T')[0] : '',
      }
      if (video.thumbnail_url) {
        thumbnailPreview.value = video.thumbnail_url
      }
    } catch (error) {
      console.error('Error loading video:', error)
    }
  }
}

const handleSubmit = async () => {
  try {
    const formData = {
      ...form.value,
      duration: form.value.duration ? Number(form.value.duration) : null,
    }

    if (thumbnailFile.value) {
      formData.thumbnail_url = thumbnailFile.value
    }

    if (isEditing.value) {
      await updateVideo(route.params.id, formData)
    } else {
      await createVideo(formData)
    }

    router.push('/admin/videos')
  } catch (error) {
    console.error('Error saving video:', error)
    if (error.response?.data?.errors) {
      const errors = error.response.data.errors
      const errorMessages = Object.values(errors).flat().join('\n')
      alert(`Errores de validación:\n${errorMessages}`)
    } else {
      alert(error.response?.data?.message || 'Error al guardar el video')
    }
  }
}

// Contador de caracteres para descripción
watch(
  () => form.value.description,
  newVal => {
    if (newVal && newVal.length > 500) {
      form.value.description = newVal.slice(0, 500)
    }
  }
)

onMounted(async () => {
  await videoStore.fetchCategories()
  await loadVideo()
})
</script>

<style scoped>
/* Estilos adicionales si son necesarios */
</style>

<!-- views/admin/podcasts/Form.vue -->
<template>
  <div class="max-w-5xl mx-auto">
    <!-- Header con breadcrumb -->
    <div class="mb-6">
      <div class="flex items-center gap-2 text-sm text-gray-500 mb-2">
        <router-link
          to="/admin/podcasts"
          class="hover:text-purple-500 transition flex items-center gap-1"
        >
          <i class="fas fa-arrow-left"></i>
          <span>Podcasts</span>
        </router-link>
        <i class="fas fa-chevron-right text-xs"></i>
        <span class="text-gray-700">{{ isEditing ? 'Editar' : 'Nuevo' }}</span>
      </div>
      <div class="flex items-center gap-3">
        <div
          class="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md"
        >
          <i class="fas fa-podcast text-white text-lg"></i>
        </div>
        <div>
          <h2 class="text-2xl font-bold text-gray-800">
            {{ isEditing ? 'Editar' : 'Nuevo' }} Podcast
          </h2>
          <p class="text-gray-500 text-sm mt-0.5">
            {{
              isEditing
                ? 'Modifica los datos del episodio'
                : 'Completa los datos para crear un nuevo episodio'
            }}
          </p>
        </div>
      </div>
    </div>

    <!-- Formulario -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <form @submit.prevent="handleSubmit">
        <div class="p-6 space-y-5">
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
                class="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                placeholder="Ej. Episodio 1: Introducción al Podcast"
                required
              />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <!-- Número de episodio -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Número de Episodio</label>
              <div class="relative">
                <i
                  class="fas fa-hashtag absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"
                ></i>
                <input
                  v-model.number="form.episode_number"
                  type="number"
                  class="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                  placeholder="Ej. 1"
                />
              </div>
            </div>

            <!-- Número de temporada -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1"
                >Número de Temporada</label
              >
              <div class="relative">
                <i
                  class="fas fa-layer-group absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"
                ></i>
                <input
                  v-model.number="form.season_number"
                  type="number"
                  class="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                  placeholder="Ej. 1"
                />
              </div>
            </div>
          </div>

          <!-- Descripción -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
            <textarea
              v-model="form.description"
              rows="4"
              class="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
              placeholder="Describe el contenido del episodio..."
            ></textarea>
          </div>

          <!-- Audio URL -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              URL del Audio <span class="text-red-500">*</span>
            </label>
            <div class="relative">
              <i
                class="fas fa-music absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"
              ></i>
              <input
                v-model="form.audio_url"
                type="url"
                class="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                placeholder="https://..."
                required
              />
            </div>
            <p class="text-xs text-gray-500 mt-1">URL del archivo de audio (MP3, etc.)</p>
          </div>

          <!-- Cover Image -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Imagen de Portada</label>
            <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div class="relative group">
                <img
                  v-if="coverPreview"
                  :src="coverPreview"
                  class="w-32 h-32 rounded-xl object-cover border-2 border-purple-500 shadow-md"
                />
                <div
                  v-else
                  class="w-32 h-32 rounded-xl bg-gray-100 flex items-center justify-center border-2 border-dashed border-gray-300"
                >
                  <i class="fas fa-image text-4xl text-gray-400"></i>
                </div>
                <div
                  v-if="coverPreview"
                  class="absolute inset-0 bg-black/40 rounded-xl opacity-0 group-hover:opacity-100 transition flex items-center justify-center"
                >
                  <i class="fas fa-edit text-white text-xl"></i>
                </div>
              </div>
              <div class="flex-1">
                <div class="flex flex-wrap gap-2">
                  <input
                    type="file"
                    ref="coverInput"
                    accept="image/jpeg,image/png,image/jpg,image/webp"
                    class="hidden"
                    @change="onCoverChange"
                  />
                  <button
                    type="button"
                    @click="coverInput.click()"
                    class="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition flex items-center gap-2"
                  >
                    <i class="fas fa-upload text-gray-500"></i>
                    Subir portada
                  </button>
                  <button
                    v-if="coverPreview"
                    type="button"
                    @click="removeCover"
                    class="px-4 py-2 text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition flex items-center gap-2"
                  >
                    <i class="fas fa-trash-alt"></i>
                    Eliminar
                  </button>
                </div>
                <p class="text-xs text-gray-500 mt-2">
                  Formatos: JPG, PNG, WEBP (max 2MB) • Recomendado: 1400x1400px
                </p>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <!-- Duración -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1"
                >Duración (segundos)</label
              >
              <div class="relative">
                <i
                  class="fas fa-hourglass-half absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"
                ></i>
                <input
                  v-model.number="form.duration"
                  type="number"
                  class="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                  placeholder="Ej: 3600"
                />
              </div>
              <div class="flex gap-4 mt-2">
                <span class="text-xs text-gray-500">Formato:</span>
                <span class="text-xs text-gray-600">{{ formattedDuration }}</span>
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
                  class="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                >
                  <option :value="null">Selecciona una categoría</option>
                  <option v-for="cat in categories" :key="cat.id" :value="cat.id">
                    {{ cat.name }}
                  </option>
                </select>
              </div>
            </div>
          </div>

          <!-- Invitados -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Invitados</label>
            <div class="relative">
              <i class="fas fa-users absolute left-3 top-3 text-gray-400 text-sm"></i>
              <textarea
                v-model="guestsText"
                rows="3"
                class="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                placeholder="Un invitado por línea&#10;Ej:&#10;Juan Pérez&#10;María García"
              ></textarea>
            </div>
            <p class="text-xs text-gray-500 mt-1">Escribe un invitado por línea</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                      class="w-5 h-5 rounded-full border-2 peer-checked:border-purple-500 peer-checked:bg-purple-500 transition-all"
                      :class="
                        form.is_published === true
                          ? 'border-purple-500 bg-purple-500'
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
                  class="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Submit -->
        <div class="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
          <router-link
            to="/admin/podcasts"
            class="px-5 py-2.5 border border-gray-300 rounded-xl hover:bg-gray-50 transition text-gray-700 font-medium"
          >
            Cancelar
          </router-link>
          <button
            type="submit"
            :disabled="isLoading"
            class="px-6 py-2.5 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl font-medium hover:from-purple-600 hover:to-purple-700 transition-all disabled:opacity-50 shadow-sm hover:shadow-md flex items-center gap-2"
          >
            <i v-if="isLoading" class="fas fa-spinner fa-spin"></i>
            <i v-else :class="isEditing ? 'fas fa-save' : 'fas fa-plus'"></i>
            {{ isLoading ? 'Guardando...' : isEditing ? 'Actualizar Podcast' : 'Publicar Podcast' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { usePodcastStore } from '@/stores/podcastStore'

const router = useRouter()
const route = useRoute()
const podcastStore = usePodcastStore()
const { categories, isLoading, createPodcast, updatePodcast, fetchPodcast } = podcastStore

const coverInput = ref(null)
const coverPreview = ref(null)
const coverFile = ref(null)

const isEditing = computed(() => !!route.params.id)

const form = ref({
  title: '',
  description: '',
  episode_number: null,
  season_number: null,
  audio_url: '',
  cover_image: null,
  duration: null,
  category_id: null,
  guests: [],
  is_published: false,
  published_at: '',
})

const guestsText = ref('')

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

const onCoverChange = event => {
  const file = event.target.files[0]
  if (file) {
    if (file.size > 2 * 1024 * 1024) {
      alert('El archivo es demasiado grande. Máximo 2MB')
      return
    }
    coverFile.value = file
    form.value.cover_image = file
    const reader = new FileReader()
    reader.onload = e => {
      coverPreview.value = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

const removeCover = () => {
  coverFile.value = null
  coverPreview.value = null
  form.value.cover_image = null
  if (coverInput.value) {
    coverInput.value.value = ''
  }
}

// Convertir texto de invitados a array
watch(guestsText, newVal => {
  if (newVal) {
    form.value.guests = newVal.split('\n').filter(g => g.trim())
  } else {
    form.value.guests = []
  }
})

const loadPodcast = async () => {
  const id = route.params.id
  if (id) {
    try {
      await podcastStore.fetchCategories()
      const response = await fetchPodcast(id)
      const podcast = response.data
      form.value = {
        title: podcast.title,
        description: podcast.description || '',
        episode_number: podcast.episode_number,
        season_number: podcast.season_number,
        audio_url: podcast.audio_url,
        cover_image: null,
        duration: podcast.duration,
        category_id: podcast.category_id,
        guests: podcast.guests || [],
        is_published: podcast.is_published,
        published_at: podcast.published_at ? podcast.published_at.split('T')[0] : '',
      }
      guestsText.value = (podcast.guests || []).join('\n')
      if (podcast.cover_image) {
        coverPreview.value = podcast.cover_image
      }
    } catch (error) {
      console.error('Error loading podcast:', error)
    }
  }
}

const handleSubmit = async () => {
  try {
    const formData = {
      ...form.value,
      duration: form.value.duration ? Number(form.value.duration) : null,
    }

    if (coverFile.value) {
      formData.cover_image = coverFile.value
    }

    if (isEditing.value) {
      await updatePodcast(route.params.id, formData)
    } else {
      await createPodcast(formData)
    }

    router.push('/admin/podcasts')
  } catch (error) {
    console.error('Error saving podcast:', error)
    if (error.response?.data?.errors) {
      const errors = error.response.data.errors
      const errorMessages = Object.values(errors).flat().join('\n')
      alert(`Errores de validación:\n${errorMessages}`)
    } else {
      alert(error.response?.data?.message || 'Error al guardar el podcast')
    }
  }
}

onMounted(async () => {
  await podcastStore.fetchCategories()
  await loadPodcast()
})
</script>

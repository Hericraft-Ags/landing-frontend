<template>
  <div class="max-w-5xl mx-auto">
    <!-- Header con breadcrumb -->
    <div class="mb-6">
      <div class="flex items-center gap-2 text-sm text-gray-500 mb-2">
        <router-link
          to="/admin/authors"
          class="hover:text-green-500 transition flex items-center gap-1"
        >
          <i class="fas fa-arrow-left"></i>
          <span>Autores</span>
        </router-link>
        <i class="fas fa-chevron-right text-xs"></i>
        <span class="text-gray-700">{{ isEditing ? 'Editar' : 'Nuevo' }}</span>
      </div>
      <div class="flex items-center gap-3">
        <div
          class="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-md"
        >
          <i class="fas fa-user text-white text-lg"></i>
        </div>
        <div>
          <h2 class="text-2xl font-bold text-gray-800">
            {{ isEditing ? 'Editar' : 'Nuevo' }} Autor
          </h2>
          <p class="text-gray-500 text-sm mt-0.5">
            {{
              isEditing
                ? 'Modifica los datos del autor'
                : 'Completa los datos para crear un nuevo autor'
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
            <i class="fas fa-user mr-2"></i>Información Básica
            <div
              class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap"
            >
              Datos personales y profesionales
            </div>
          </button>
          <button
            type="button"
            @click="activeTab = 'social'"
            class="py-3 text-sm font-medium border-b-2 transition relative group"
            :class="
              activeTab === 'social'
                ? 'border-green-500 text-green-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            "
          >
            <i class="fas fa-share-alt mr-2"></i>Redes Sociales
            <div
              class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap"
            >
              Conecta tus redes profesionales
            </div>
          </button>
        </div>
      </div>

      <form @submit.prevent="handleSubmit">
        <!-- Información Básica -->
        <div v-show="activeTab === 'basic'" class="p-6 space-y-5">
          <!-- Avatar -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-3">Avatar</label>
            <div class="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div class="relative group">
                <img
                  v-if="avatarPreview"
                  :src="avatarPreview"
                  class="w-24 h-24 rounded-full object-cover border-3 border-green-500 shadow-md"
                />
                <div
                  v-else
                  class="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-3xl font-bold shadow-md"
                >
                  {{ getInitials(form.name) }}
                </div>
                <div
                  class="absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center"
                >
                  <i class="fas fa-camera text-white text-xl"></i>
                </div>
              </div>
              <div class="flex-1">
                <div class="flex flex-wrap gap-2">
                  <input
                    type="file"
                    ref="avatarInput"
                    accept="image/jpeg,image/png,image/jpg,image/webp"
                    class="hidden"
                    @change="onAvatarChange"
                  />
                  <button
                    type="button"
                    @click="avatarInput.click()"
                    class="px-4 py-2 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition flex items-center gap-2"
                  >
                    <i class="fas fa-upload text-gray-500"></i>
                    Subir avatar
                  </button>
                  <button
                    v-if="avatarPreview"
                    type="button"
                    @click="removeAvatar"
                    class="px-4 py-2 text-red-600 border border-red-200 rounded-xl hover:bg-red-50 transition flex items-center gap-2"
                  >
                    <i class="fas fa-trash-alt"></i>
                    Eliminar
                  </button>
                </div>
                <p class="text-xs text-gray-500 mt-2">
                  Formatos: JPG, PNG, WEBP (max 2MB) • Recomendado: 400x400px
                </p>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <!-- Nombre -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Nombre completo <span class="text-red-500">*</span>
              </label>
              <div class="relative">
                <i
                  class="fas fa-user absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"
                ></i>
                <input
                  v-model="form.name"
                  type="text"
                  class="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                  :class="{ 'border-red-500': errors.name }"
                  placeholder="Ej. Juan Pérez"
                  required
                />
              </div>
              <p v-if="errors.name" class="text-xs text-red-500 mt-1">{{ errors.name }}</p>
            </div>

            <!-- Email -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
              <div class="relative">
                <i
                  class="fas fa-envelope absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"
                ></i>
                <input
                  v-model="form.email"
                  type="email"
                  class="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                  placeholder="juan@example.com"
                />
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <!-- Rol -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Rol / Especialidad</label>
              <div class="relative">
                <i
                  class="fas fa-briefcase absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"
                ></i>
                <input
                  v-model="form.role"
                  type="text"
                  class="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                  placeholder="Ej. Especialista STEAM"
                />
              </div>
              <p class="text-xs text-gray-500 mt-1">
                Ejemplos: Investigador Educativo, Especialista en IA, Pedagogo
              </p>
            </div>

            <!-- Biografía -->
            <div class="md:col-span-2">
              <label class="block text-sm font-medium text-gray-700 mb-1">Biografía</label>
              <textarea
                v-model="form.bio"
                rows="4"
                class="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                placeholder="Breve descripción del autor, su experiencia y áreas de especialización..."
              ></textarea>
              <div class="flex justify-between items-center mt-1">
                <p class="text-xs text-gray-500">Máximo 500 caracteres</p>
                <span class="text-xs text-gray-400">{{ form.bio.length }}/500</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Redes Sociales -->
        <div v-show="activeTab === 'social'" class="p-6 space-y-4">
          <div class="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
            <div class="flex items-center gap-2">
              <i class="fas fa-share-alt text-blue-500"></i>
              <span class="text-sm text-blue-700"
                >Completa los enlaces a tus redes sociales para que los lectores puedan conectarse
                contigo.</span
              >
            </div>
          </div>

          <div class="space-y-4">
            <div class="flex items-center gap-3 group">
              <div
                class="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition"
              >
                <i class="fab fa-twitter text-blue-500 text-xl"></i>
              </div>
              <input
                v-model="form.social_links.twitter"
                type="url"
                class="flex-1 px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                placeholder="https://twitter.com/usuario"
              />
            </div>

            <div class="flex items-center gap-3 group">
              <div
                class="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center group-hover:bg-pink-200 transition"
              >
                <i class="fab fa-instagram text-pink-500 text-xl"></i>
              </div>
              <input
                v-model="form.social_links.instagram"
                type="url"
                class="flex-1 px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                placeholder="https://instagram.com/usuario"
              />
            </div>

            <div class="flex items-center gap-3 group">
              <div
                class="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition"
              >
                <i class="fab fa-linkedin text-blue-600 text-xl"></i>
              </div>
              <input
                v-model="form.social_links.linkedin"
                type="url"
                class="flex-1 px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                placeholder="https://linkedin.com/in/usuario"
              />
            </div>

            <div class="flex items-center gap-3 group">
              <div
                class="w-10 h-10 rounded-xl bg-gray-200 flex items-center justify-center group-hover:bg-gray-300 transition"
              >
                <i class="fab fa-github text-gray-700 text-xl"></i>
              </div>
              <input
                v-model="form.social_links.github"
                type="url"
                class="flex-1 px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                placeholder="https://github.com/usuario"
              />
            </div>

            <div class="flex items-center gap-3 group">
              <div
                class="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition"
              >
                <i class="fas fa-globe text-green-600 text-xl"></i>
              </div>
              <input
                v-model="form.social_links.website"
                type="url"
                class="flex-1 px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                placeholder="https://tusitio.com"
              />
            </div>
          </div>
        </div>

        <!-- Preview Card -->
        <div class="border-t border-gray-200 bg-gradient-to-r from-gray-50 to-white p-6">
          <div class="flex items-center justify-between mb-3">
            <h4 class="text-sm font-medium text-gray-700 flex items-center gap-2">
              <i class="fas fa-eye text-green-500"></i>
              Vista previa del perfil
            </h4>
            <span class="text-xs text-gray-400">Así se verá en el frontend</span>
          </div>
          <div
            class="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex items-center gap-4"
          >
            <div v-if="previewAvatar" class="relative">
              <img
                :src="previewAvatar"
                class="w-14 h-14 rounded-full object-cover border-2 border-green-500 shadow-md"
                :alt="form.name"
              />
            </div>
            <div
              v-else
              class="w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-xl font-bold shadow-md"
            >
              {{ getInitials(form.name) || 'A' }}
            </div>
            <div class="flex-1">
              <p class="font-semibold text-gray-800 text-lg">
                {{ form.name || 'Nombre del autor' }}
              </p>
              <p class="text-sm text-gray-500">{{ form.role || 'Rol / Especialidad' }}</p>
              <div class="flex gap-2 mt-2">
                <i
                  v-if="form.social_links.twitter"
                  class="fab fa-twitter text-blue-400 text-sm"
                ></i>
                <i
                  v-if="form.social_links.instagram"
                  class="fab fa-instagram text-pink-500 text-sm"
                ></i>
                <i
                  v-if="form.social_links.linkedin"
                  class="fab fa-linkedin text-blue-600 text-sm"
                ></i>
                <i v-if="form.social_links.github" class="fab fa-github text-gray-700 text-sm"></i>
                <i v-if="form.social_links.website" class="fas fa-globe text-green-600 text-sm"></i>
              </div>
            </div>
          </div>
        </div>

        <!-- Submit -->
        <div class="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
          <router-link
            to="/admin/authors"
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
            {{ isLoading ? 'Guardando...' : isEditing ? 'Actualizar Autor' : 'Crear Autor' }}
          </button>
        </div>
      </form>
    </div>

    <!-- Sugerencias de roles -->
    <div class="mt-6 bg-white rounded-xl shadow-sm border border-gray-200 p-5">
      <h4 class="text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
        <i class="fas fa-lightbulb text-yellow-500"></i>
        Sugerencias de roles
      </h4>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="suggestion in roleSuggestions"
          :key="suggestion"
          @click="form.role = suggestion"
          class="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm transition hover:scale-105 transform duration-200"
        >
          {{ suggestion }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthorStore } from '@/stores/authorStore'

const router = useRouter()
const route = useRoute()
const authorStore = useAuthorStore()
const { isLoading, fetchAuthors, createAuthor, updateAuthor } = authorStore

const activeTab = ref('basic')
const avatarInput = ref(null)
const avatarPreview = ref(null)
const avatarFile = ref(null)

const errors = ref({ name: '' })

const roleSuggestions = [
  'Especialista STEAM',
  'Investigador Educativo',
  'Pedagogo',
  'Especialista en IA Educativa',
  'Director de Innovación',
  'Formador de Docentes',
  'Experto en EdTech',
  'Neuroeducador',
]

const isEditing = computed(() => !!route.params.id)

const form = ref({
  name: '',
  email: '',
  bio: '',
  role: '',
  social_links: {
    twitter: '',
    instagram: '',
    linkedin: '',
    github: '',
    website: '',
  },
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

// Computed para determinar si mostrar imagen o iniciales en la preview
const previewAvatar = computed(() => {
  if (avatarPreview.value) {
    return avatarPreview.value
  }
  if (form.value.existing_avatar_url) {
    return form.value.existing_avatar_url
  }
  return null
})

const onAvatarChange = event => {
  const file = event.target.files[0]
  if (file) {
    if (file.size > 2 * 1024 * 1024) {
      alert('El archivo es demasiado grande. Máximo 2MB')
      return
    }
    avatarFile.value = file
    const reader = new FileReader()
    reader.onload = e => {
      avatarPreview.value = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

const removeAvatar = () => {
  avatarFile.value = null
  avatarPreview.value = null
  form.value.existing_avatar_url = null
  if (avatarInput.value) {
    avatarInput.value.value = ''
  }
}

const validateForm = () => {
  let isValid = true
  errors.value = { name: '' }

  if (!form.value.name.trim()) {
    errors.value.name = 'El nombre es requerido'
    isValid = false
  }

  return isValid
}

const loadAuthor = async () => {
  const id = route.params.id
  if (id) {
    try {
      await fetchAuthors()
      const author = authorStore.authors.value.find(a => a.id == id)
      if (author) {
        let socialLinks = {}

        if (author.social_links) {
          if (typeof author.social_links === 'string') {
            try {
              socialLinks = JSON.parse(author.social_links)
            } catch (e) {
              socialLinks = {}
            }
          } else if (typeof author.social_links === 'object') {
            socialLinks = author.social_links
          }
        }

        form.value = {
          name: author.name,
          email: author.email || '',
          bio: author.bio || '',
          role: author.role || '',
          existing_avatar_url: author.avatar_url || null,
          social_links: {
            twitter: socialLinks.twitter || '',
            instagram: socialLinks.instagram || '',
            linkedin: socialLinks.linkedin || '',
            github: socialLinks.github || '',
            website: socialLinks.website || '',
          },
        }

        if (author.avatar_url) {
          avatarPreview.value = author.avatar_url
        }
      }
    } catch (error) {
      console.error('Error loading author:', error)
    }
  }
}

const handleSubmit = async () => {
  if (!validateForm()) {
    activeTab.value = 'basic'
    return
  }

  try {
    const formData = {
      name: form.value.name.trim(),
      email: form.value.email,
      bio: form.value.bio,
      role: form.value.role,
      social_links: form.value.social_links,
      avatar_url: avatarFile.value,
    }

    if (isEditing.value) {
      await updateAuthor(route.params.id, formData)
    } else {
      await createAuthor(formData)
    }

    await fetchAuthors()
    router.push('/admin/authors')
  } catch (error) {
    console.error('Error:', error)
    if (error.response?.data?.errors) {
      const errors = error.response.data.errors
      const errorMessages = Object.values(errors).flat().join('\n')
      alert(`Errores de validación:\n${errorMessages}`)
    } else {
      alert(error.response?.data?.message || 'Error al guardar el autor')
    }
  }
}

// Contador de caracteres para bio
watch(
  () => form.value.bio,
  newVal => {
    if (newVal && newVal.length > 500) {
      form.value.bio = newVal.slice(0, 500)
    }
  }
)

onMounted(() => {
  loadAuthor()
})
</script>

<style scoped>
/* Estilos adicionales si son necesarios */
</style>

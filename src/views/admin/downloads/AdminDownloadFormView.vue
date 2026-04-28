<!-- views/admin/downloads/Form.vue -->
<template>
  <div class="max-w-4xl mx-auto">
    <!-- Header -->
    <div class="mb-6">
      <div class="flex items-center gap-2 text-sm text-gray-500 mb-2">
        <router-link
          to="/admin/downloads"
          class="hover:text-blue-500 transition flex items-center gap-1"
        >
          <i class="fas fa-arrow-left"></i>
          <span>Descargas</span>
        </router-link>
        <i class="fas fa-chevron-right text-xs"></i>
        <span class="text-gray-700">{{ isEditing ? 'Editar' : 'Nueva' }}</span>
      </div>
      <div class="flex items-center gap-3">
        <div
          class="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md"
        >
          <i class="fas fa-download text-white text-lg"></i>
        </div>
        <div>
          <h2 class="text-2xl font-bold text-gray-800">
            {{ isEditing ? 'Editar' : 'Nueva' }} Descarga
          </h2>
          <p class="text-gray-500 text-sm mt-0.5">
            {{ isEditing ? 'Modifica los datos del archivo' : 'Sube un nuevo archivo descargable' }}
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
            <input
              v-model="form.title"
              type="text"
              class="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ej. Guía de Introducción a la Robótica"
              required
            />
          </div>

          <!-- Categoría y Tipo -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Categoría</label>
              <select
                v-model="form.category_id"
                class="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option :value="null">Selecciona una categoría</option>
                <option v-for="cat in categories" :key="cat.id" :value="cat.id">
                  {{ cat.name }}
                </option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Tipo de archivo</label>
              <select
                v-model="form.file_type"
                class="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="">Selecciona un tipo</option>
                <option value="PDF">📄 PDF</option>
                <option value="PPTX">📊 PowerPoint</option>
                <option value="XLSX">📈 Excel</option>
                <option value="DOCX">📝 Word</option>
              </select>
            </div>
          </div>

          <!-- Descripción -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
            <textarea
              v-model="form.description"
              rows="4"
              class="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Describe el contenido del archivo..."
            ></textarea>
          </div>

          <!-- Subida de archivo -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Archivo <span class="text-red-500">*</span>
            </label>
            <div class="flex items-center gap-4">
              <input
                type="file"
                ref="fileInput"
                @change="onFileSelect"
                accept=".pdf,.pptx,.xlsx,.docx,.zip"
                class="hidden"
              />
              <button
                type="button"
                @click="fileInput.click()"
                class="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition flex items-center gap-2"
              >
                <i class="fas fa-upload text-gray-500"></i>
                Seleccionar archivo
              </button>
              <span v-if="selectedFile" class="text-sm text-gray-600">
                {{ selectedFile.name }} ({{ formatFileSize(selectedFile.size) }})
              </span>
              <span v-else-if="isEditing && form.file_url" class="text-sm text-green-600">
                <i class="fas fa-check-circle"></i> Archivo actual: {{ getFileName(form.file_url) }}
              </span>
            </div>
            <p class="text-xs text-gray-500 mt-1">
              Formatos permitidos: PDF, PPTX, XLSX, DOCX, ZIP (Máximo 10MB)
            </p>
          </div>

          <!-- Tamaño del archivo -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Tamaño del archivo</label>
            <input
              v-model="form.file_size"
              type="text"
              class="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ej. 2.4 MB"
            />
            <p class="text-xs text-gray-500 mt-1">
              Se calculará automáticamente si subes el archivo
            </p>
          </div>

          <!-- Estado -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Estado</label>
            <div class="flex gap-4">
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="radio" v-model="form.is_published" :value="true" />
                <span class="text-sm text-gray-700">Publicado</span>
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="radio" v-model="form.is_published" :value="false" />
                <span class="text-sm text-gray-700">Borrador</span>
              </label>
            </div>
          </div>

          <!-- Preview -->
          <div class="mt-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
            <h4 class="text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
              <i class="fas fa-eye text-blue-500"></i>
              Vista previa
            </h4>
            <div class="flex items-center gap-4">
              <i :class="previewIcon" class="text-4xl"></i>
              <div class="flex-1">
                <p class="font-semibold text-gray-800">{{ form.title || 'Título del archivo' }}</p>
                <p class="text-sm text-gray-500">
                  {{ form.file_size || 'Tamaño no especificado' }}
                </p>
                <p class="text-xs text-gray-400">{{ form.file_type || 'Tipo no especificado' }}</p>
              </div>
              <div class="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium">
                <i class="fas fa-download mr-2"></i>Descargar
              </div>
            </div>
          </div>
        </div>

        <!-- Submit -->
        <div class="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
          <router-link
            to="/admin/downloads"
            class="px-5 py-2.5 border border-gray-300 rounded-xl hover:bg-gray-50 transition"
          >
            Cancelar
          </router-link>
          <button
            type="submit"
            :disabled="isLoading"
            class="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-medium hover:from-blue-600 hover:to-blue-700 transition-all disabled:opacity-50 flex items-center gap-2"
          >
            <i v-if="isLoading" class="fas fa-spinner fa-spin"></i>
            <i v-else :class="isEditing ? 'fas fa-save' : 'fas fa-upload'"></i>
            {{ isLoading ? 'Guardando...' : isEditing ? 'Actualizar' : 'Subir Archivo' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useDownloadStore } from '@/stores/downloadStore'

const router = useRouter()
const route = useRoute()
const downloadStore = useDownloadStore()
const { categories, isLoading, createDownload, updateDownload, fetchDownload } = downloadStore

const fileInput = ref(null)
const selectedFile = ref(null)

const isEditing = computed(() => !!route.params.id)

const form = ref({
  title: '',
  description: '',
  file_url: '',
  file_size: '',
  file_type: '',
  icon_class: '',
  category_id: null,
  is_published: false,
})

const previewIcon = computed(() => {
  if (form.value.icon_class) return form.value.icon_class
  const icons = {
    PDF: 'fas fa-file-pdf text-red-500',
    PPTX: 'fas fa-file-powerpoint text-orange-500',
    XLSX: 'fas fa-file-excel text-green-500',
    DOCX: 'fas fa-file-word text-blue-500',
  }
  return icons[form.value.file_type] || 'fas fa-file text-gray-500'
})

const formatFileSize = bytes => {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

const getFileName = url => {
  return url.split('/').pop()
}

const onFileSelect = event => {
  const file = event.target.files[0]
  if (file) {
    if (file.size > 10 * 1024 * 1024) {
      alert('El archivo no puede superar los 10MB')
      return
    }
    selectedFile.value = file
    // Auto-detectar tipo
    const extension = file.name.split('.').pop().toUpperCase()
    if (['PDF', 'PPTX', 'XLSX', 'DOCX'].includes(extension)) {
      form.value.file_type = extension
    }
    // Auto-detectar tamaño
    form.value.file_size = formatFileSize(file.size)
  }
}

const loadDownload = async () => {
  const id = route.params.id
  if (id) {
    try {
      await downloadStore.fetchCategories()
      const response = await fetchDownload(id)
      const download = response.data
      form.value = {
        title: download.title,
        description: download.description || '',
        file_url: download.file_url,
        file_size: download.file_size || '',
        file_type: download.file_type || '',
        icon_class: download.icon_class || '',
        category_id: download.category_id,
        is_published: download.is_published,
      }
    } catch (error) {
      console.error('Error loading download:', error)
    }
  }
}

const handleSubmit = async () => {
  try {
    if (isEditing.value) {
      await updateDownload(route.params.id, form.value, selectedFile.value)
    } else {
      if (!selectedFile.value) {
        alert('Debes seleccionar un archivo')
        return
      }
      await createDownload(form.value, selectedFile.value)
    }
    router.push('/admin/downloads')
  } catch (error) {
    console.error('Error saving download:', error)
    if (error.response?.data?.errors) {
      const errors = error.response.data.errors
      const errorMessages = Object.values(errors).flat().join('\n')
      alert(`Errores de validación:\n${errorMessages}`)
    } else {
      alert(error.response?.data?.message || 'Error al guardar la descarga')
    }
  }
}

onMounted(async () => {
  await downloadStore.fetchCategories()
  await loadDownload()
})
</script>

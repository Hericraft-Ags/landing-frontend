<!-- components/ui/ArticlePreviewModal.vue -->
<template>
  <div
    v-if="visible"
    class="fixed inset-0 z-50 overflow-y-auto"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <!-- Overlay -->
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        @click="$emit('close')"
      ></div>

      <!-- Modal -->
      <div
        class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full"
      >
        <!-- Header -->
        <div
          class="bg-gray-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center"
        >
          <h3 class="text-lg font-medium text-gray-900">Vista previa del artículo</h3>
          <button
            @click="$emit('close')"
            class="text-gray-400 hover:text-gray-500 focus:outline-none"
          >
            <i class="fas fa-times text-xl"></i>
          </button>
        </div>

        <!-- Content -->
        <div class="px-6 py-4 max-h-[70vh] overflow-y-auto">
          <!-- Imagen destacada -->
          <img
            v-if="article?.featured_image"
            :src="article.featured_image"
            :alt="article.title"
            class="w-full h-64 object-cover rounded-lg mb-6"
          />

          <!-- Título -->
          <h1 class="text-3xl font-bold text-gray-900 mb-4">{{ article?.title }}</h1>

          <!-- Meta información -->
          <div
            class="flex items-center gap-4 text-sm text-gray-500 mb-6 pb-4 border-b border-gray-200"
          >
            <span>
              <i class="far fa-calendar-alt mr-1"></i>
              {{ formatDate(article?.published_at || article?.created_at) }}
            </span>
            <span v-if="article?.category">
              <i class="fas fa-tag mr-1"></i>
              {{ article.category.name }}
            </span>
            <span v-if="article?.author">
              <i class="fas fa-user mr-1"></i>
              {{ article.author.name }}
            </span>
          </div>

          <!-- Extracto -->
          <div v-if="article?.excerpt" class="text-gray-600 italic mb-6 p-4 bg-gray-50 rounded-lg">
            {{ article.excerpt }}
          </div>

          <!-- Contenido -->
          <div class="prose max-w-none" v-html="article?.content"></div>
        </div>

        <!-- Footer -->
        <div class="bg-gray-50 px-6 py-4 border-t border-gray-200 flex justify-end">
          <button
            @click="$emit('close')"
            class="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { format } from 'date-fns'
import { es } from 'date-fns/locale'

defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  article: {
    type: Object,
    default: null,
  },
})

defineEmits(['close'])

const formatDate = date => {
  if (!date) return 'Fecha no disponible'
  return format(new Date(date), 'dd MMM yyyy', { locale: es })
}
</script>

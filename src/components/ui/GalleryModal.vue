<!-- components/GalleryModal.vue -->
<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        @click.self="closeModal"
      >
        <div
          class="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden dark:bg-agoraDark"
        >
          <!-- Header con colores de la paleta -->
          <div
            class="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-blueprint-navy to-blueprint-cyan/10 dark:from-agoraDark dark:to-navy/50 dark:border-gray-700"
          >
            <div class="flex items-center gap-3">
              <div
                class="w-10 h-10 bg-[#22c55e] rounded-xl flex items-center justify-center shadow-md"
              >
                <i class="fas fa-images text-white text-lg"></i>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-800 dark:text-white">
                  {{ t('gallery.title') }}
                </h3>
              </div>
            </div>
            <button
              @click="closeModal"
              class="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
            >
              <i class="fas fa-times text-xl"></i>
            </button>
          </div>

          <!-- Contenido -->
          <div class="p-6 overflow-y-auto" style="max-height: calc(90vh - 80px)">
            <!-- Loading -->
            <div
              v-if="isLoading && !isDataLoaded"
              class="flex flex-col items-center justify-center py-16"
            >
              <div
                class="w-16 h-16 border-4 border-blueprint-cyan border-t-transparent rounded-full animate-spin mb-4"
              ></div>
              <p class="text-gray-500">{{ t('gallery.loading') }}</p>
            </div>

            <!-- Error -->
            <div v-else-if="error" class="flex flex-col items-center justify-center py-16">
              <div
                class="w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-4"
              >
                <i class="fas fa-exclamation-triangle text-red-500 text-3xl"></i>
              </div>
              <h4 class="text-lg font-semibold text-gray-700">{{ t('gallery.error') }}</h4>
              <button
                @click="reloadData"
                class="mt-4 px-4 py-2 bg-blueprint-cyan text-navy rounded-lg hover:bg-blueprint-orange transition"
              >
                <i class="fas fa-sync-alt mr-2"></i>
                {{ t('gallery.retry') }}
              </button>
            </div>

            <!-- Gallery Content -->
            <template v-else-if="isDataLoaded">
              <!-- Categories con colores de la paleta -->
              <div class="flex flex-wrap gap-2 mb-6">
                <button
                  v-for="category in categories"
                  :key="category.id"
                  @click="activeCategory = category.id"
                  class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
                  :class="
                    activeCategory === category.id
                      ? 'bg-[#22c55e] text-gray-600 shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                  "
                >
                  <i :class="category.icon" class="mr-2"></i>
                  {{ category.name }}
                </button>
              </div>

              <!-- Images Grid -->
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div
                  v-for="(image, index) in filteredImages"
                  :key="image.id"
                  class="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-gray-100 dark:bg-gray-800"
                  @click="openLightbox(index)"
                >
                  <div class="aspect-[4/3] overflow-hidden bg-gray-200 dark:bg-gray-700">
                    <img
                      :src="image.url"
                      :alt="image.title"
                      class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      @error="handleImageError"
                    />
                  </div>

                  <div
                    class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4"
                  >
                    <h4 class="text-white font-bold text-lg mb-1">{{ image.title }}</h4>
                    <p class="text-white/90 text-sm line-clamp-2">{{ image.description }}</p>
                  </div>

                  <div class="absolute top-3 left-3">
                    <span
                      class="px-2 py-1 bg-black/50 backdrop-blur-sm rounded-lg text-white text-xs"
                    >
                      <i :class="getCategoryIcon(image.categoryId)" class="mr-1"></i>
                      {{ getCategoryName(image.categoryId) }}
                    </span>
                  </div>

                  <div v-if="image.featured" class="absolute top-3 right-3">
                    <span
                      class="px-2 py-1 bg-blueprint-green text-gray-600 rounded-lg text-xs font-semibold"
                    >
                      <i class="fas fa-star mr-1"></i>
                      {{ t('gallery.featured') }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Empty -->
              <div v-if="filteredImages.length === 0" class="text-center py-16">
                <div
                  class="w-24 h-24 mx-auto bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4"
                >
                  <i class="fas fa-images text-4xl text-gray-400"></i>
                </div>
                <h4 class="text-lg font-semibold text-gray-600">{{ t('gallery.no_images') }}</h4>
              </div>
            </template>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Lightbox Mejorado con colores de la paleta -->
    <Teleport to="body">
      <Transition name="lightbox-fade">
        <div
          v-if="lightboxOpen && lightboxImage"
          class="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-md"
          @click="closeLightbox"
        >
          <div class="relative w-full h-full max-w-7xl mx-auto p-4 md:p-8" @click.stop>
            <div
              class="relative bg-gradient-to-br from-dark-nav/95 to-agoraDark rounded-2xl overflow-hidden shadow-2xl max-h-full flex flex-col"
            >
              <!-- Contenedor de la imagen -->
              <div
                class="relative flex-1 min-h-0 flex items-center justify-center bg-gradient-to-br from-dark-nav/50 to-agoraDark/50 p-4"
              >
                <img
                  :src="lightboxImage.url"
                  :alt="lightboxImage.title"
                  class="max-w-full max-h-[65vh] object-contain rounded-lg shadow-lg"
                  loading="lazy"
                />

                <!-- Botones de navegación -->
                <button
                  v-if="hasPreviousImage"
                  @click="previousImage"
                  class="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-blueprint-green text-white flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <i class="fas fa-chevron-left text-xl"></i>
                </button>
                <button
                  v-if="hasNextImage"
                  @click="nextImage"
                  class="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-blueprint-green text-white flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <i class="fas fa-chevron-right text-xl"></i>
                </button>
              </div>

              <!-- Panel de información con colores de la paleta -->
              <div class="bg-gradient-to-t from-dark-nav/95 to-agoraDark/80 backdrop-blur-sm p-6">
                <div class="flex items-start justify-between gap-4">
                  <div class="flex-1">
                    <div class="flex items-center gap-3 mb-3 flex-wrap">
                      <h3 class="text-white text-2xl md:text-3xl font-bold font-display">
                        {{ lightboxImage.title }}
                      </h3>
                      <span
                        class="px-3 py-1 bg-blueprint-cyan/20 backdrop-blur-sm rounded-full text-gray-300 text-sm"
                      >
                        <i :class="getCategoryIcon(lightboxImage.categoryId)" class="mr-2"></i>
                        {{ getCategoryName(lightboxImage.categoryId) }}
                      </span>
                      <span
                        v-if="lightboxImage.featured"
                        class="px-3 py-1 bg-blueprint-green text-gray-600 rounded-full text-sm font-semibold"
                      >
                        <i class="fas fa-star mr-1"></i>
                        {{ t('gallery.featured') }}
                      </span>
                    </div>

                    <!-- Descripción completa -->
                    <div
                      class="text-white/90 text-base md:text-lg leading-relaxed mb-4 font-processus"
                    >
                      <p>{{ lightboxImage.description }}</p>
                    </div>

                    <!-- Información adicional -->
                    <div class="flex items-center gap-4 text-white/60 text-sm">
                      <span>
                        <i class="fas fa-calendar-alt mr-2 text-blueprint-green"></i>
                        {{ formatDate(lightboxImage.date) }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Botón cerrar -->
              <button
                @click="closeLightbox"
                class="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 hover:bg-blueprint-orange text-white flex items-center justify-center transition-all duration-200 hover:rotate-90"
              >
                <i class="fas fa-times text-xl"></i>
              </button>

              <!-- Contador de imágenes -->
              <div
                class="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-3 py-1 rounded-full text-white text-sm font-medium"
              >
                {{ lightboxIndex + 1 }} / {{ filteredImages.length }}
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </Teleport>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useGalleryData } from '@/composables/useGalleryData'

const { t } = useI18n()

const props = defineProps({
  isOpen: Boolean,
  reduceMotion: Boolean,
})

const emit = defineEmits(['close'])

const activeCategory = ref('all')
const lightboxOpen = ref(false)
const lightboxIndex = ref(0)
const isDataLoaded = ref(false)

const { images, categories, isLoading, error, loadGalleryData, reloadWithNewLocale } =
  useGalleryData()

const filteredImages = computed(() => {
  if (!images.value.length) return []
  if (activeCategory.value === 'all') return images.value
  return images.value.filter(img => img.categoryId === activeCategory.value)
})

const lightboxImage = computed(() => filteredImages.value[lightboxIndex.value])
const hasPreviousImage = computed(() => lightboxIndex.value > 0)
const hasNextImage = computed(() => lightboxIndex.value < filteredImages.value.length - 1)

const getCategoryName = categoryId => {
  const category = categories.value.find(c => c.id === categoryId)
  return category?.name || 'Sin categoría'
}

const getCategoryIcon = categoryId => {
  const category = categories.value.find(c => c.id === categoryId)
  return category?.icon || 'fas fa-image'
}

const formatDate = date => {
  if (!date) return ''
  return new Date(date).toLocaleDateString(t('locale') === 'es' ? 'es-ES' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const handleImageError = event => {
  event.target.src = '/images/placeholder-image.jpg'
}

const closeModal = () => emit('close')
const openLightbox = index => {
  lightboxIndex.value = index
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}
const closeLightbox = () => {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}
const previousImage = () => {
  if (hasPreviousImage.value) lightboxIndex.value--
}
const nextImage = () => {
  if (hasNextImage.value) lightboxIndex.value++
}
const reloadData = async () => {
  await loadGalleryData()
  isDataLoaded.value = true
}

// Watchers
watch(
  () => t('locale'),
  () => {
    if (isDataLoaded.value) reloadWithNewLocale()
  }
)

watch(
  () => props.isOpen,
  async val => {
    if (val && !isDataLoaded.value && !isLoading.value) {
      await loadGalleryData()
      isDataLoaded.value = true
    }
    document.body.style.overflow = val ? 'hidden' : ''
  }
)

// Teclas de navegación
const handleKeydown = e => {
  if (e.key === 'Escape') {
    if (lightboxOpen.value) closeLightbox()
    else closeModal()
  }
  if (lightboxOpen.value) {
    if (e.key === 'ArrowLeft') previousImage()
    if (e.key === 'ArrowRight') nextImage()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.lightbox-fade-enter-active,
.lightbox-fade-leave-active {
  transition: opacity 0.2s ease;
}
.lightbox-fade-enter-from,
.lightbox-fade-leave-to {
  opacity: 0;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
.animate-spin {
  animation: spin 1s linear infinite;
}

/* Scrollbar personalizada */
.overflow-y-auto::-webkit-scrollbar {
  width: 8px;
}
.overflow-y-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}
.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #0ef1eb;
  border-radius: 10px;
}
.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #ff6b35;
}

/* Modo oscuro */
@media (prefers-color-scheme: dark) {
  .overflow-y-auto::-webkit-scrollbar-track {
    background: #2d2d2d;
  }
}
</style>

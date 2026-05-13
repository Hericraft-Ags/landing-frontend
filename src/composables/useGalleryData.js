// composables/useGalleryData.js
import { ref } from 'vue'
import { galleryData } from '@/data/gallery'
import { useI18n } from 'vue-i18n'

export const useGalleryData = () => {
  const { t } = useI18n()
  const images = ref([])
  const categories = ref([])
  const isLoading = ref(false)
  const error = ref(null)

  // Procesar categorías con traducciones
  const processCategories = () => {
    return galleryData.categories.map(category => ({
      ...category,
      name: t(category.nameKey),
    }))
  }

  // Procesar imágenes con traducciones
  const processImages = () => {
    return galleryData.images
      .sort((a, b) => a.order - b.order)
      .map(image => ({
        ...image,
        title: t(image.titleKey),
        description: t(image.descriptionKey),
      }))
  }

  const loadGalleryData = async () => {
    isLoading.value = true
    error.value = null

    try {
      // Simular carga asíncrona (opcional)
      await new Promise(resolve => setTimeout(resolve, 300))

      categories.value = processCategories()
      images.value = processImages()
    } catch (err) {
      error.value = err
      console.error('Error loading gallery data:', err)

      // Datos de respaldo
      categories.value = [{ id: 'all', name: 'Todos', icon: 'fas fa-th-large' }]
      images.value = []
    } finally {
      isLoading.value = false
    }
  }

  // Recargar cuando cambie el idioma
  const reloadWithNewLocale = () => {
    categories.value = processCategories()
    images.value = processImages()
  }

  return {
    images,
    categories,
    isLoading,
    error,
    loadGalleryData,
    reloadWithNewLocale,
  }
}

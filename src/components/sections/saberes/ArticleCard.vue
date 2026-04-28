<template>
  <article
    class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500 group cursor-pointer transform hover:-translate-y-2"
    @click="viewDetail"
  >
    <!-- Image Container -->
    <div class="relative h-52 overflow-hidden">
      <img
        :src="article.featured_image || 'https://placehold.co/600x400/0A2966/FFFFFF?text=Hericraft'"
        :alt="article.title"
        class="w-full h-full object-cover group-hover:scale-110 transition duration-700"
        @error="handleImageError"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      ></div>

      <!-- Category Badge -->
      <span
        class="absolute top-4 left-4 text-[10px] font-bold px-3 py-1 rounded-full uppercase shadow-md"
        :style="{ backgroundColor: categoryColor, color: '#fff' }"
      >
        {{ article.category?.name || 'Artículo' }}
      </span>

      <!-- Featured Badge -->
      <span
        v-if="article.is_featured"
        class="absolute top-4 right-4 bg-yellow-400 text-navy text-[10px] font-bold px-3 py-1 rounded-full uppercase shadow-md"
      >
        <i class="fas fa-star mr-1"></i> Destacado
      </span>
    </div>

    <!-- Content -->
    <div class="p-6">
      <div class="flex items-center gap-2 text-xs text-gray-400 mb-3">
        <span><i class="far fa-calendar-alt"></i> {{ formattedDate }}</span>
      </div>

      <h3
        class="font-bold text-lg text-navy mb-3 group-hover:text-green transition-colors line-clamp-2"
      >
        {{ article.title }}
      </h3>

      <p class="text-gray-500 text-sm line-clamp-3 mb-4">
        {{ article.excerpt || article.description }}
      </p>

      <div class="flex items-center justify-between">
        <!-- Autor con foto -->
        <div class="flex items-center gap-2">
          <img
            v-if="article.author?.avatar_url"
            :src="article.author.avatar_url"
            :alt="article.author.name"
            class="w-8 h-8 rounded-full object-cover"
            @error="handleAuthorImageError"
          />
          <div
            v-else
            class="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center text-white font-bold text-xs"
          >
            {{ authorInitials }}
          </div>
          <span class="text-xs text-gray-500">{{ article.author?.name || 'Hericraft' }}</span>
        </div>
        <span
          class="text-green font-bold text-xs uppercase tracking-wide border-b border-green pb-0.5 group-hover:gap-2 transition-all inline-flex items-center gap-1"
        >
          Leer Artículo
          <i class="fas fa-arrow-right text-[10px] group-hover:translate-x-1 transition"></i>
        </span>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  article: {
    type: Object,
    required: true,
  },
})

const router = useRouter()

const formattedDate = computed(() => {
  if (!props.article.published_at) return 'Fecha por confirmar'
  const date = new Date(props.article.published_at)
  return date.toLocaleDateString('es-MX', { month: 'short', year: 'numeric' })
})

const authorInitials = computed(() => {
  const name = props.article.author?.name || 'Hericraft'
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
})

const categoryColor = computed(() => {
  const colors = {
    cyan: '#0EF1EB',
    navy: '#0A2966',
    green: '#39CC7F',
    collegeOrange: '#FF6B35',
    accentPink: '#EC4899',
  }
  return colors[props.article.category?.color] || '#0A2966'
})

const handleImageError = event => {
  event.target.src = 'https://placehold.co/600x400/0A2966/FFFFFF?text=Hericraft'
}

const handleAuthorImageError = event => {
  event.target.style.display = 'none'
  const parent = event.target.parentElement
  const fallback = document.createElement('div')
  fallback.className =
    'w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center text-white font-bold text-xs'
  fallback.textContent = authorInitials.value
  parent.appendChild(fallback)
}

const viewDetail = () => {
  router.push(`/saberes/articulo/${props.article.slug}`)
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

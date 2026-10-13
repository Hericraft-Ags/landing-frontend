<!-- views/ArticleDetailView.vue -->
<template>
  <div class="bg-white min-h-screen">
    <!-- Loading -->
    <div v-if="isLoading" class="flex items-center justify-center py-64">
      <i class="fas fa-spinner fa-spin text-4xl text-navy"></i>
    </div>

    <!-- Contenido -->
    <template v-else-if="article">
      <!-- Hero -->
      <div class="relative w-full h-[420px] md:h-[500px] overflow-hidden bg-blueprint-navy">
        <!-- Fondo con patrón de puntos -->
        <div class="absolute inset-0 opacity-20">
          <div
            class="absolute inset-0"
            style="
              background-image: radial-gradient(#0ef1eb 1px, transparent 1px);
              background-size: 30px 30px;
            "
          ></div>
          <div
            class="absolute inset-0 bg-gradient-to-tr from-blueprint-navy via-transparent to-blueprint-cyan/5"
          ></div>
        </div>

        <!-- Imagen destacada -->
        <img
          v-if="article.featured_image"
          :src="article.featured_image"
          :alt="article.title"
          class="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div
          v-else
          class="absolute inset-0 bg-gradient-to-br from-blueprint-navy via-navy to-blueprint-navy/80"
        ></div>

        <!-- Overlay -->
        <div
          class="absolute inset-0 bg-gradient-to-t from-blueprint-navy/90 via-blueprint-navy/30 to-transparent"
        ></div>

        <!-- Contenido del hero (ancho completo) -->
        <div class="absolute bottom-0 left-0 right-0 px-6 md:px-12 pb-8 pt-12 w-full">
          <!-- Badges -->
          <div class="flex flex-wrap items-center gap-2 mb-4">
            <!-- Categoría -->
            <span
              v-if="article.category"
              class="px-3 py-1 text-white text-[10px] font-bold rounded-full border uppercase tracking-widest flex items-center gap-1.5"
              :style="{
                backgroundColor: getCategoryColor(article.category.color),
                borderColor: getCategoryColor(article.category.color),
              }"
            >
              <i v-if="article.category.icon" :class="article.category.icon" class="text-xs"></i>
              {{ article.category.name }}
            </span>

            <!-- Destacado -->
            <span
              v-if="article.is_featured"
              class="px-3 py-1 bg-yellow-500 text-[10px] font-bold rounded-full border border-yellow-400/30 uppercase tracking-widest flex items-center gap-1.5"
            >
              <i class="fas fa-star text-[11px]"></i> Destacado
            </span>
          </div>

          <!-- Título (ancho completo) -->
          <h1
            class="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white leading-tight mb-5 w-full max-w-4xl"
          >
            {{ article.title }}
          </h1>

          <!-- Autor y metadata -->
          <div class="flex flex-wrap items-center gap-4">
            <div v-if="article.author" class="flex items-center gap-2.5">
              <div
                class="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center overflow-hidden border border-white/15 shrink-0"
              >
                <img
                  v-if="article.author.avatar_url"
                  :src="article.author.avatar_url"
                  :alt="article.author.name"
                  class="w-full h-full object-cover"
                />
                <span v-else class="text-agoraLime font-bold text-xs">
                  {{ getInitials(article.author.name) }}
                </span>
              </div>
              <div>
                <p class="text-white text-sm font-semibold leading-none mb-0.5">
                  {{ article.author.name }}
                </p>
                <p class="text-white/40 text-xs">{{ article.author.role || 'Autor' }}</p>
              </div>
            </div>

            <div class="flex items-center gap-3 text-white/50 text-xs">
              <span class="flex items-center gap-1.5">
                <i class="far fa-calendar-alt text-[11px]"></i>
                {{ formattedDate }}
              </span>
              <span class="w-px h-4 bg-white/10"></span>
              <span class="flex items-center gap-1.5">
                <i class="far fa-clock text-[11px]"></i>
                {{ readingTime }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Body: ancho completo con padding lateral -->
      <div class="w-full px-6 md:px-12 py-10 lg:grid lg:grid-cols-[1fr_280px] lg:gap-8">
        <!-- COLUMNA PRINCIPAL (sin restricciones de ancho) -->
        <div class="min-w-0 w-full">
          <!-- Extracto -->
          <div
            v-if="article.excerpt"
            class="text-lg text-gray-600 border-l-[3px] pl-5 mb-8 italic leading-relaxed font-sans"
            :style="{ borderColor: getCategoryColor(article.category?.color) }"
          >
            {{ article.excerpt }}
          </div>

          <!-- Contenido principal (ancho completo) -->
          <div
            class="prose prose-base max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-blueprint-navy prose-headings:border-t prose-headings:border-gray-100 prose-headings:pt-4 prose-headings:mt-8 prose-a:text-blueprint-orange hover:prose-a:text-agoraLime prose-strong:text-blueprint-navy prose-img:rounded-xl prose-img:shadow-md prose-blockquote:border-l-agoraLime prose-blockquote:text-gray-500 prose-blockquote:italic"
          >
            <div v-html="article.content" class="text-justify"></div>
          </div>

          <!-- Tags (visible en móvil) -->
          <div
            v-if="article.tags && article.tags.length > 0"
            class="mt-10 pt-6 border-t border-gray-100 lg:hidden"
          >
            <p class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Etiquetas
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in article.tags"
                :key="tag"
                class="px-3 py-1 bg-gray-100 text-gray-600 border border-gray-200 rounded-full text-xs"
              >
                #{{ tag }}
              </span>
            </div>
          </div>

          <!-- Artículos relacionados -->
          <div v-if="relatedArticles.length" class="mt-12 pt-8 border-t border-gray-100">
            <h3
              class="text-base font-display font-bold text-blueprint-navy mb-5 flex items-center gap-2"
            >
              <i class="fas fa-layer-group text-agoraLime text-sm"></i>
              Artículos relacionados
            </h3>
            <div class="grid sm:grid-cols-3 gap-4">
              <router-link
                v-for="related in relatedArticles"
                :key="related.id"
                :to="`/saberes/articulos/${related.slug}`"
                class="group border border-gray-200 rounded-xl overflow-hidden bg-gray-50 hover:border-agoraLime/40 transition-colors"
              >
                <div
                  class="h-24 overflow-hidden bg-blueprint-navy/5 flex items-center justify-center"
                >
                  <img
                    v-if="related.featured_image"
                    :src="related.featured_image"
                    :alt="related.title"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <i v-else class="fas fa-newspaper text-2xl text-gray-300"></i>
                </div>
                <div class="p-3">
                  <p
                    v-if="related.category"
                    class="text-[10px] font-bold uppercase tracking-wider text-agoraLime mb-1"
                  >
                    {{ related.category.name }}
                  </p>
                  <h4
                    class="text-xs font-semibold text-blueprint-navy group-hover:text-agoraLime transition-colors line-clamp-2 leading-snug mb-1"
                  >
                    {{ related.title }}
                  </h4>
                  <p class="text-[11px] text-gray-400">{{ formatDate(related.published_at) }}</p>
                </div>
              </router-link>
            </div>
          </div>
        </div>

        <!-- SIDEBAR (fija en desktop) -->
        <aside class="hidden lg:block space-y-4 sticky top-24 self-start">
          <!-- Progreso de lectura circular -->
          <div
            class="bg-blueprint-navy rounded-2xl p-5 relative overflow-hidden border border-cyan/[0.12]"
          >
            <!-- Glow esquina -->
            <div
              class="absolute -top-8 -left-5 w-24 h-24 rounded-full bg-cyan/8 blur-3xl pointer-events-none"
            ></div>

            <!-- Header -->
            <div class="flex items-center justify-between mb-4 relative">
              <p
                class="flex items-center gap-2 text-[10px] font-medium text-cyan/70 uppercase tracking-widest"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-cyan inline-block"></span>
                Progreso
              </p>
              <span
                class="text-[9px] text-cyan/50 border border-cyan/20 rounded-full px-2 py-0.5 tracking-wide"
              >
                en vivo
              </span>
            </div>

            <!-- Anillo -->
            <div class="flex justify-center mb-4 relative">
              <div
                class="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 h-3 bg-cyan/10 blur-lg rounded-full"
              ></div>
              <svg class="w-24 h-24" viewBox="0 0 100 100" aria-hidden="true">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="rgba(255,255,255,0.05)"
                  stroke-width="7"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="rgba(255,255,255,0.06)"
                  stroke-width="5.5"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#0ef1eb"
                  stroke-width="5.5"
                  stroke-linecap="round"
                  :stroke-dasharray="`${readingProgress * 2.512}, 251.2`"
                  transform="rotate(-90 50 50)"
                  class="transition-all duration-700 ease-out"
                  style="filter: drop-shadow(0 0 4px rgba(14, 241, 235, 0.5))"
                />
                <text
                  x="50"
                  y="47"
                  text-anchor="middle"
                  dominant-baseline="middle"
                  font-size="20"
                  font-weight="500"
                  fill="white"
                >
                  {{ readingProgress }}%
                </text>
                <text
                  x="50"
                  y="60"
                  text-anchor="middle"
                  dominant-baseline="middle"
                  font-size="10"
                  fill="rgba(255,255,255,0.3)"
                >
                  completado
                </text>
              </svg>
            </div>

            <!-- Divisor -->
            <div
              class="h-px mb-3"
              style="
                background: linear-gradient(
                  to right,
                  transparent,
                  rgba(255, 255, 255, 0.08),
                  transparent
                );
              "
            ></div>

            <!-- Stats -->
            <div class="space-y-0.5">
              <div
                class="flex items-center gap-2 text-xs text-white/40 px-1.5 py-1 rounded-lg hover:bg-white/[0.04] hover:text-white/65 transition-colors"
              >
                <i class="fas fa-clock text-cyan/70 text-sm w-4 text-center"></i>
                <span>{{ readingTime }}</span>
              </div>
              <div
                class="flex items-center gap-2 text-xs text-white/40 px-1.5 py-1 rounded-lg hover:bg-white/[0.04] hover:text-white/65 transition-colors"
              >
                <i class="fas fa-align-left text-cyan/70 text-sm w-4 text-center"></i>
                <span>{{ wordCount }} palabras</span>
              </div>
            </div>
          </div>

          <!-- Tags -->
          <div
            v-if="article.tags && article.tags.length > 0"
            class="bg-blueprint-navy rounded-2xl p-5 relative overflow-hidden border border-cyan/[0.12]"
          >
            <!-- Glow esquina -->
            <div
              class="absolute -bottom-5 -right-5 w-20 h-20 rounded-full bg-agoraLime/[0.07] blur-3xl pointer-events-none"
            ></div>

            <!-- Header -->
            <div class="flex items-center gap-2 mb-3">
              <i class="fas fa-hashtag text-cyan text-[13px]"></i>
              <p class="text-[10px] font-medium text-cyan uppercase tracking-widest">Etiquetas</p>
            </div>

            <!-- Divisor -->
            <div
              class="h-px mb-3.5"
              style="
                background: linear-gradient(
                  to right,
                  transparent,
                  rgba(255, 255, 255, 0.08),
                  transparent
                );
              "
            ></div>

            <!-- Tags -->
            <div
              class="flex flex-wrap gap-1.5"
              :style="{ '--tag-hover-color': getCategoryColor(article.category?.color) }"
            >
              <span
                v-for="tag in article.tags"
                :key="tag"
                class="tag-item px-2.5 py-1 bg-white/[0.04] text-gray-300 border border-white/[0.08] rounded-full text-[11px] transition-all duration-150 cursor-default"
              >
                <span class="text-cyan text-[10px]">#</span>{{ tag }}
              </span>
            </div>
          </div>

          <!-- Categoría -->
          <div
            v-if="article.category"
            class="bg-blueprint-navy rounded-2xl p-5 relative overflow-hidden border border-cyan/[0.12]"
          >
            <!-- Glow con color de categoría -->
            <div
              class="absolute -top-5 -left-5 w-20 h-20 rounded-full blur-3xl pointer-events-none opacity-20"
              :style="{ background: getCategoryColor(article.category.color) || '#2563eb' }"
            ></div>

            <!-- Header -->
            <div class="flex items-center gap-2 mb-3">
              <i class="fas fa-folder text-cyan text-[13px]"></i>
              <p class="text-[10px] font-medium text-cyan uppercase tracking-widest">Categoría</p>
            </div>

            <!-- Divisor -->
            <div
              class="h-px mb-3.5"
              style="
                background: linear-gradient(
                  to right,
                  transparent,
                  rgba(255, 255, 255, 0.08),
                  transparent
                );
              "
            ></div>

            <!-- Link de categoría -->
            <router-link
              :to="`/saberes?categoria=${article.category.slug}`"
              class="flex items-center gap-2.5 p-2 rounded-[10px] bg-white/[0.04] border border-white/[0.07] hover:border-white/20 hover:bg-white/[0.07] transition-all duration-150 group"
            >
              <!-- Icono -->
              <div
                class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border transition-all"
                :style="{
                  background: getCategoryColor(article.category.color) || '#2563eb',
                  borderColor: getCategoryColor(article.category.color) || '#2563eb',
                }"
              >
                <i
                  :class="article.category.icon || 'fas fa-tag'"
                  class="text-[13px] text-white"
                ></i>
              </div>

              <!-- Nombre -->
              <span
                class="text-[13px] font-medium text-white/75 group-hover:text-white transition-colors"
              >
                {{ article.category.name }}
              </span>

              <!-- Flecha -->
              <i
                class="fas fa-arrow-right text-[11px] text-white/15 group-hover:text-white/40 group-hover:translate-x-0.5 transition-all ml-auto"
              ></i>
            </router-link>
          </div>

          <!-- Compartir -->
          <div
            class="bg-blueprint-navy rounded-2xl p-5 relative overflow-hidden border border-cyan/[0.12]"
          >
            <!-- Glow inferior centrado -->
            <div
              class="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-8 rounded-full bg-cyan/[0.06] blur-2xl pointer-events-none"
            ></div>

            <!-- Header -->
            <div class="flex items-center gap-2 mb-3">
              <i class="fas fa-share-alt text-cyan text-[13px]"></i>
              <p class="text-[10px] font-medium text-cyan uppercase tracking-widest">Compartir</p>
            </div>

            <!-- Divisor -->
            <div
              class="h-px mb-3.5"
              style="
                background: linear-gradient(
                  to right,
                  transparent,
                  rgba(255, 255, 255, 0.08),
                  transparent
                );
              "
            ></div>

            <!-- Copiar enlace -->
            <button
              @click="copyLink"
              class="w-full flex items-center justify-center gap-2 text-xs font-medium text-gray-300 bg-white/[0.04] border border-white/[0.09] rounded-[10px] py-2 mb-2 hover:bg-agoraLime/10 hover:border-agoraLime/30 hover:text-agoraLime transition-all duration-150"
            >
              <i class="fas fa-link text-[11px]"></i>
              {{ copied ? '¡Copiado!' : 'Copiar enlace' }}
            </button>

            <!-- Redes sociales -->
            <div class="grid grid-cols-3 gap-1.5">
              <a
                :href="`https://wa.me/?text=${encodeURIComponent(article.title + ' - ' + currentUrl)}`"
                target="_blank"
                rel="noopener noreferrer"
                class="flex flex-col items-center gap-1 py-2 rounded-[10px] bg-white/[0.04] border border-white/[0.07] hover:bg-[#25D366]/10 hover:border-[#25D366]/25 transition-all duration-150 group"
              >
                <i
                  class="fab fa-whatsapp text-sm text-[#25D366] group-hover:text-[#25D366] transition-colors"
                ></i>
              </a>
              <a
                :href="`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`"
                target="_blank"
                rel="noopener noreferrer"
                class="flex flex-col items-center gap-1 py-2 rounded-[10px] bg-white/[0.04] border border-white/[0.07] hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/30 transition-all duration-150 group"
              >
                <i
                  class="fab fa-linkedin-in text-sm text-[#0A66C2] group-hover:text-[#0A66C2] transition-colors"
                ></i>
              </a>
              <a
                :href="`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`"
                target="_blank"
                rel="noopener noreferrer"
                class="flex flex-col items-center gap-1 py-2 rounded-[10px] bg-white/[0.04] border border-white/[0.07] hover:bg-[#1877F2]/10 hover:border-[#1877F2]/25 transition-all duration-150 group"
              >
                <i
                  class="fab fa-facebook-f text-sm text-[#1877F2] group-hover:text-[#1877F2] transition-colors"
                ></i>
              </a>
            </div>
          </div>
        </aside>
      </div>
    </template>

    <!-- 404 -->
    <div v-else class="flex flex-col items-center justify-center py-32 px-6 text-center">
      <div
        class="w-20 h-20 bg-gray-50 border border-gray-100 rounded-full flex items-center justify-center mb-6"
      >
        <i class="fas fa-newspaper text-3xl text-gray-300"></i>
      </div>
      <h2 class="text-2xl font-display font-bold text-blueprint-navy mb-2">
        Artículo no encontrado
      </h2>
      <p class="text-gray-400 text-sm mb-6">
        El artículo que buscas no existe o ha sido eliminado.
      </p>
      <router-link
        to="/saberes"
        class="text-agoraLime hover:text-collegeOrange transition-colors text-sm font-medium flex items-center gap-1.5"
      >
        <i class="fas fa-arrow-left text-xs"></i> Volver a Saberes
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.tag-item:hover {
  background-color: var(--tag-hover-color, #84cc16);
  border-color: var(--tag-hover-color, #84cc16);
  color: white;
}

.prose {
  --tw-prose-body: #4b5563;
  --tw-prose-headings: #0a2966;
  --tw-prose-links: #ff6b35;
  --tw-prose-bold: #0a2966;
  --tw-prose-blockquote-border: #84cc16;
}

.prose :deep(p),
.prose :deep(li) {
  text-align: justify;
}

.prose :deep(img) {
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.prose :deep(h2) {
  padding-top: 1.5rem;
  margin-top: 2rem;
  border-top: 1px solid #f3f4f6;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useSaberesStore } from '@/stores/saberesStore'

const route = useRoute()
const router = useRouter()
const saberesStore = useSaberesStore()

const article = ref(null)
const relatedArticles = ref([])
const isLoading = ref(true)
const readingProgress = ref(0)
const copied = ref(false)

// Mapeo de colores
const colorMap = {
  navy: '#0A2966',
  cyanBright: '#0EF1EB',
  collegeOrange: '#FF6B35',
  metanoiaPink: '#EC4899',
  agoraLime: '#84CC16',
  teal: '#0dbcc9',
  accentPink: '#e91e63',
  cyan: '#0ef1eb',
  'cyan-bright': '#08be66',
  'dark-nav': '#2f302d',
  agoraDark: '#121212',
  oxfordGray: '#2d3748',
  metanoiaLight: '#fff0f5',
  metanoiaDeep: '#880038',
  'blueprint.navy': '#0A1931',
  'blueprint.cyan': '#0EF1EB',
  'blueprint.orange': '#FF6B35',
  'blueprint.green': '#22c55e',
  'blueprint.blue': '#2563eb',
  'blueprint.purple': '#7c3aed',
}

const getCategoryColor = colorName => {
  if (!colorName) return '#0A2966'
  if (colorName.startsWith('#')) return colorName
  return colorMap[colorName] || '#0A2966'
}

// ── URL actual ────────────────────────────────────────────────────────────────
const currentUrl = computed(() => {
  if (typeof window !== 'undefined') {
    return window.location.href
  }
  return ''
})

// ── Fecha formateada ──────────────────────────────────────────────────────────
const formattedDate = computed(() => {
  if (!article.value) return ''
  const date = article.value.published_at || article.value.created_at
  if (!date) return ''
  return new Date(date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
})

// ── Conteo de palabras y tiempo de lectura ────────────────────────────────────
const wordCount = computed(() => {
  if (!article.value?.content) return 0
  return article.value.content
    .replace(/<[^>]*>/g, '')
    .split(/\s+/)
    .filter(Boolean).length
})

const readingTime = computed(() => {
  const minutes = Math.ceil(wordCount.value / 200)
  return `${minutes} min lectura`
})

// ── Helpers ───────────────────────────────────────────────────────────────────
const getInitials = name => {
  if (!name) return 'A'
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

const formatDate = date => {
  if (!date) return ''
  return new Date(date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

// ── Copiar enlace ─────────────────────────────────────────────────────────────
const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(currentUrl.value)
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  } catch {
    // fallback silencioso
  }
}

// ── Progreso de lectura (scroll) ──────────────────────────────────────────────
const updateProgress = () => {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  readingProgress.value = docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0
}

// ── Fetch ─────────────────────────────────────────────────────────────────────
const fetchArticle = async () => {
  const slug = route.params.slug
  if (!slug) {
    router.push({ name: 'NotFound' })
    return
  }

  isLoading.value = true
  try {
    const response = await saberesStore.getArticleBySlug(slug)
    if (response.data) {
      article.value = response.data
    } else {
      router.push({ name: 'NotFound' })
    }
  } catch (error) {
    console.error('Error fetching article:', error)
    router.push({ name: 'NotFound' })
  } finally {
    isLoading.value = false
  }
}

// ── Lifecycle ─────────────────────────────────────────────────────────────────
onMounted(() => {
  fetchArticle()
  window.addEventListener('scroll', updateProgress, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateProgress)
})
</script>

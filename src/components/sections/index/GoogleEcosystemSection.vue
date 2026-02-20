<template>
  <section
    id="google"
    class="py-24 px-6 bg-slate-50 relative overflow-hidden"
    aria-labelledby="google-title"
  >
    <div class="max-w-6xl mx-auto">
      <div
        class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#4285F4] via-[#34A853] via-[#FBBC05] to-[#EA4335]"
        role="presentation"
        aria-hidden="true"
      ></div>

      <div
        class="bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden flex flex-col lg:flex-row"
      >
        <div class="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <h3 id="google-title" class="text-3xl md:text-4xl font-display font-bold text-navy mb-6">
            Google Workspace for Education
          </h3>

          <p class="text-gray-600 mb-8 leading-relaxed text-lg">
            Somos tu Partner estratégico. Desde el trámite de tu dominio
            <strong class="font-bold text-navy">.EDU</strong> hasta la certificación de tu equipo
            docente.
          </p>

          <div class="grid grid-cols-2 gap-4" role="list">
            <div
              v-for="feature in features"
              :key="feature.text"
              class="flex items-center gap-2 text-sm font-bold text-navy"
              role="listitem"
            >
              <i
                :class="feature.icon"
                class="text-green-600 w-5 h-5 flex-shrink-0"
                aria-hidden="true"
              ></i>
              <span>{{ feature.text }}</span>
            </div>
          </div>
        </div>

        <div
          class="lg:w-1/2 bg-slate-50 flex items-center justify-center p-8 md:p-10"
          aria-label="Google Workspace for Education partners"
        >
          <img
            :src="googleWorkspaceImage"
            alt="Google Workspace for Education - Herramientas educativas de Google"
            class="rounded-xl shadow-lg transform rotate-2 hover:rotate-0 transition duration-500 max-w-full h-auto"
            :class="{ 'transition-none': reduceMotion }"
            loading="lazy"
            width="500"
            height="300"
            @error="handleImageError"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, inject } from 'vue'

const reduceMotion = inject('reduceMotion', ref(false))

const features = [
  { text: 'Gestión de consola', icon: 'fas fa-check' },
  { text: 'Chromebooks', icon: 'fas fa-check' },
  { text: 'Certificación L1/L2', icon: 'fas fa-check' },
  { text: 'Formación Trainers', icon: 'fas fa-check' },
]

const googleWorkspaceImage = new URL('../../../assets/images/google-workspace.svg', import.meta.url)
  .href

const handleImageError = event => {
  console.warn('Error cargando imagen de Google Workspace')

  const parent = event.target.parentNode
  event.target.style.display = 'none'

  const fallback = document.createElement('div')
  fallback.className =
    'w-full h-48 bg-gradient-to-r from-[#4285F4] via-[#34A853] via-[#FBBC05] to-[#EA4335] rounded-xl shadow-lg opacity-75'
  fallback.setAttribute('aria-label', 'Google Workspace for Education')
  parent.appendChild(fallback)
}

console.log('Cargando imagen de Google Workspace desde:', googleWorkspaceImage)
</script>

<style scoped>
img {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

img:hover {
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

@media (prefers-reduced-motion: reduce) {
  img,
  img:hover {
    transition: none !important;
    transform: none !important;
  }
}

@media (max-width: 1024px) {
  .lg\:w-1\/2 {
    width: 100%;
  }

  img {
    max-height: 250px;
    width: auto;
  }
}
</style>

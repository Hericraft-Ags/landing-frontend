<script setup>
import { useI18n } from 'vue-i18n'

const props = defineProps({
  color: {
    type: String,
    default: '#000',
  },
})

const { t } = useI18n()

const socialLinks = [
  { name: t('footer.social_media.facebook'), icon: 'facebook.png', url: 'https://facebook.com' },
  { name: t('footer.social_media.instagram'), icon: 'instagram.png', url: 'https://instagram.com' },
  { name: t('footer.social_media.linkedin'), icon: 'linkedin.png', url: 'https://linkedin.com' },
  { name: t('footer.social_media.spotify'), icon: 'spotify.png', url: 'https://spotify.com' },
  { name: t('footer.social_media.youtube'), icon: 'youtube.png', url: 'https://youtube.com' },
]

const handleImageError = event => {
  console.warn('Error cargando imagen:', event.target.src)
  event.target.src = '/assets/images/placeholder.svg'
  event.target.onerror = null
}
</script>

<template>
  <footer
    class="text-gray-400 text-sm border-t border-white/10 relative overflow-hidden"
    :style="{ backgroundColor: color }"
  >
    <div
      class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-navy via-cyanBright to-collegeOrange"
    ></div>

    <div class="max-w-7xl mx-auto px-6 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div class="space-y-4">
          <a href="/" class="flex items-center gap-2 mb-4">
            <img
              src="/assets/images/logos/logo_hericraft.png"
              alt="Hericraft"
              class="h-8 brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
            />
          </a>
          <p class="leading-relaxed text-xs text-gray-500">
            {{ $t('footer.description') }}
          </p>
          <div class="pt-2">
            <span class="text-green-500 font-bold text-xs uppercase tracking-widest">
              {{ $t('footer.integral_solutions') }}
            </span>
          </div>
        </div>

        <div>
          <h3 class="text-white font-bold uppercase tracking-wider mb-6 text-xs">
            {{ $t('footer.ecosystem') }}
          </h3>
          <ul class="space-y-3">
            <li>
              <a
                href="/ambientes"
                class="hover:text-[#06b6d4] transition-colors duration-300 hover:translate-x-1 flex items-center gap-2 group"
              >
                <i class="fas fa-chevron-right text-[8px]"></i>
                {{ $t('footer.active_environments') }}
              </a>
            </li>
            <li>
              <a
                href="/college"
                class="hover:text-[#ff6b35] transition-colors duration-300 hover:translate-x-1 flex items-center gap-2 group"
              >
                <i class="fas fa-chevron-right text-[8px]"></i>
                {{ $t('footer.college') }}
              </a>
            </li>
            <li>
              <a
                href="/agora"
                class="hover:text-[#8dc63f] transition-colors duration-300 hover:translate-x-1 flex items-center gap-2 group"
              >
                <i class="fas fa-chevron-right text-[8px]"></i>
                {{ $t('footer.agora') }}
              </a>
            </li>
            <li>
              <a
                href="/metanoia"
                class="hover:text-[#d5005f] transition-colors duration-300 hover:translate-x-1 flex items-center gap-2 group"
              >
                <i class="fas fa-chevron-right text-[8px]"></i>
                {{ $t('footer.metanoia') }}
              </a>
            </li>
            <li>
              <a
                href="/processus"
                class="hover:text-[#06b6d4] transition-colors duration-300 hover:translate-x-1 flex items-center gap-2 group"
              >
                <i class="fas fa-chevron-right text-[8px]"></i>
                {{ $t('footer.processus') }}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-white font-bold uppercase tracking-wider mb-6 text-xs">
            {{ $t('footer.legal_help') }}
          </h3>
          <ul class="space-y-3">
            <li>
              <a
                href="#"
                class="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
              >
                {{ $t('footer.privacy') }}
              </a>
            </li>
            <li>
              <a
                href="#"
                class="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
              >
                {{ $t('footer.terms') }}
              </a>
            </li>
            <li>
              <a
                href="#"
                class="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
              >
                {{ $t('footer.faq') }}
              </a>
            </li>
            <li>
              <a
                href="#"
                class="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
              >
                {{ $t('footer.support') }}
              </a>
            </li>
            <li>
              <a
                href="https://ecommerce.soluciones-hericraft.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-[#06b6d4] hover:underline inline-flex items-center gap-1 hover:translate-x-1"
              >
                {{ $t('footer.online_store') }}
                <i class="fas fa-external-link-alt text-[8px]"></i>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-white font-bold uppercase tracking-wider mb-6 text-xs">
            {{ $t('footer.contact') }}
          </h3>
          <ul class="space-y-4">
            <li class="flex items-start gap-3">
              <i class="fas fa-map-marker-alt text-collegeOrange mt-1"></i>
              <span> {{ $t('footer.address') }}<br />{{ $t('footer.national_coverage') }} </span>
            </li>
            <li class="flex items-center gap-3">
              <i class="fas fa-phone text-cyanBright"></i>
              <a href="tel:+524493932939" class="hover:text-white transition">
                {{ $t('footer.phone') }}
              </a>
            </li>
            <li class="flex items-center gap-3">
              <i class="fas fa-envelope text-purple-400"></i>
              <a
                href="mailto:contacto@soluciones-hericraft.com"
                class="hover:text-white transition"
              >
                {{ $t('footer.email') }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr class="border-white/10 mb-8" />

      <div class="flex flex-col items-center justify-center gap-6">
        <div class="flex justify-center gap-6">
          <a
            v-for="social in socialLinks"
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="block w-10 h-10 transition-all duration-300 hover:-translate-y-1 hover:brightness-125 group"
            :title="social.name"
          >
            <img
              :src="`/assets/images/${social.icon}`"
              :alt="social.name"
              class="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
              loading="lazy"
              @error="handleImageError"
            />
          </a>
        </div>

        <div class="text-center space-y-2">
          <p class="font-display font-semibold text-gray-300">
            {{ $t('footer.copyright', { year: new Date().getFullYear() }) }}
          </p>
          <p class="text-xs text-gray-600">
            {{ $t('footer.rights') }}
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.bg-navy {
  background-color: #0a1931;
}

a,
button,
img {
  transition: all 0.3s ease;
}

.bg-gradient-to-r {
  background-image: linear-gradient(to right, #0a1931, #06b6d4, #ff6b35);
}

@media (prefers-reduced-motion: reduce) {
  a,
  button,
  img,
  a * {
    transition: none !important;
    transform: none !important;
    animation: none !important;
  }
}

@media (max-width: 768px) {
  .grid {
    gap: 2rem;
  }

  .gap-6 {
    gap: 1rem;
  }
}

.hover\:-translate-y-1:hover {
  transform: translateY(-0.25rem);
}

.hover\:brightness-125:hover {
  filter: brightness(1.25);
}
</style>

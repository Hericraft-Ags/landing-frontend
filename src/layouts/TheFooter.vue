<template>
  <footer
    class="bg-slate-950 text-gray-400 text-sm border-t border-white/10 relative overflow-hidden"
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
            <span class="font-display font-bold text-white text-lg tracking-wide">HERICRAFT</span>
          </a>
          <p class="leading-relaxed text-xs text-gray-500">
            Transformamos la educación en México a través de espacios inteligentes, tecnología 4.0 y
            mobiliario de alto impacto.
          </p>
          <div class="pt-2">
            <span class="text-green-500 font-bold text-xs uppercase tracking-widest"
              >Soluciones Integrales</span
            >
          </div>
        </div>

        <div>
          <h3 class="text-white font-bold uppercase tracking-wider mb-6 text-xs">Ecosistema</h3>
          <ul class="space-y-3">
            <li>
              <a
                href="/ambientes"
                class="hover:text-cyanBright transition-colors duration-300 flex items-center gap-2 group"
              >
                <i
                  class="fas fa-chevron-right text-[8px] group-hover:translate-x-1 transition-transform"
                ></i>
                Ambientes Activos
              </a>
            </li>
            <li>
              <a
                href="/college"
                class="hover:text-collegeOrange transition-colors duration-300 flex items-center gap-2 group"
              >
                <i
                  class="fas fa-chevron-right text-[8px] group-hover:translate-x-1 transition-transform"
                ></i>
                Mobiliario College
              </a>
            </li>
            <li>
              <a
                href="/agora"
                class="hover:text-agoraLime transition-colors duration-300 flex items-center gap-2 group"
              >
                <i
                  class="fas fa-chevron-right text-[8px] group-hover:translate-x-1 transition-transform"
                ></i>
                Ágora
              </a>
            </li>
            <li>
              <a
                href="/metanoia"
                class="hover:text-metanoiaPink transition-colors duration-300 flex items-center gap-2 group"
              >
                <i
                  class="fas fa-chevron-right text-[8px] group-hover:translate-x-1 transition-transform"
                ></i>
                Metanoia
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-white font-bold uppercase tracking-wider mb-6 text-xs">Legal & Ayuda</h3>
          <ul class="space-y-3">
            <li>
              <a
                href="#"
                class="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                >Aviso de Privacidad</a
              >
            </li>
            <li>
              <a
                href="#"
                class="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                >Términos y Condiciones</a
              >
            </li>
            <li>
              <a
                href="#"
                class="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                >Preguntas Frecuentes</a
              >
            </li>
            <li>
              <a
                href="#"
                class="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                >Soporte Técnico</a
              >
            </li>
            <li>
              <a
                href="https://ecommerce.soluciones-hericraft.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-cyanBright hover:underline inline-flex items-center gap-1"
              >
                Tienda en Línea
                <i class="fas fa-external-link-alt text-[8px]"></i>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-white font-bold uppercase tracking-wider mb-6 text-xs">Contacto</h3>
          <ul class="space-y-4">
            <li class="flex items-start gap-3">
              <i class="fas fa-map-marker-alt text-collegeOrange mt-1"></i>
              <span>Ciudad de México, México.<br />Cobertura Nacional.</span>
            </li>
            <li class="flex items-center gap-3">
              <i class="fas fa-phone text-cyanBright"></i>
              <a href="tel:+525512345678" class="hover:text-white transition">+52 (55) 1234 5678</a>
            </li>
            <li class="flex items-center gap-3">
              <i class="fas fa-envelope text-purple-400"></i>
              <a href="mailto:hola@hericraft.com" class="hover:text-white transition"
                >hola@hericraft.com</a
              >
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
            &copy; 2026 Hericraft Soluciones Integrales S.A. de C.V.
          </p>
          <p class="text-xs text-gray-600">
            Todos los derechos reservados. Desarrollado por el equipo de Tecnología Educativa
            Hericraft.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const socialLinks = [
  { name: 'Facebook', icon: 'facebook.png', url: 'https://facebook.com' },
  { name: 'Instagram', icon: 'instagram.png', url: 'https://instagram.com' },
  { name: 'LinkedIn', icon: 'linkedin.png', url: 'https://linkedin.com' },
  { name: 'Spotify', icon: 'spotify.png', url: 'https://spotify.com' },
  { name: 'YouTube', icon: 'youtube.png', url: 'https://youtube.com' },
]

const handleImageError = event => {
  console.warn('Error cargando imagen:', event.target.src)
  event.target.src = '/assets/images/placeholder.svg'
  event.target.onerror = null
}
</script>

<style scoped>
.bg-navy {
  background-color: #0a1931;
}

.text-cyanBright {
  color: #06b6d4;
}

.text-collegeOrange {
  color: #ff6b35;
}

.text-agoraLime {
  color: #8dc63f;
}

.text-metanoiaPink {
  color: #d5005f;
}

a,
button,
img {
  transition: all 0.3s ease;
}

a:hover i.fa-chevron-right {
  transform: translateX(4px);
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

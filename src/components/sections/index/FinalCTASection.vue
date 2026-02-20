<template>
  <section
    id="contacto"
    class="relative bg-navy py-24 px-6 text-white text-center overflow-hidden"
    aria-labelledby="cta-title"
  >
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute top-0 left-0 w-96 h-96 bg-cyan-bright/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      ></div>
      <div
        class="absolute bottom-0 right-0 w-96 h-96 bg-collegeOrange/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"
      ></div>
      <div
        class="absolute inset-0 opacity-10"
        style="background-image: url('https://www.transparenttextures.com/patterns/cubes.png')"
      ></div>
    </div>

    <div class="max-w-4xl mx-auto relative z-10">
      <div
        class="inline-flex items-center gap-2 bg-white/10 text-cyan-bright border border-cyan-bright/30 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
      >
        <i class="fas fa-rocket"></i>
        <span>Comienza tu transformación</span>
      </div>

      <h2
        id="cta-title"
        class="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight"
      >
        ¿Listo para evolucionar?
      </h2>

      <p class="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
        Descubre cómo nuestras soluciones educativas 5.0 pueden transformar tu institución. Agenda
        una consultoría gratuita.
      </p>

      <div class="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
        <a
          :href="calendarLink"
          target="_blank"
          rel="noopener noreferrer"
          class="group relative px-8 py-4 rounded-full font-bold overflow-hidden transition-all duration-300 border-2 border-blue-500 hover:border-cyan-bright hover:shadow-lg hover:shadow-blue-500/30 text-center"
        >
          <span
            class="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-bright opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></span>
          <span
            class="relative flex items-center justify-center gap-2 text-blue-500 group-hover:text-white transition-colors duration-300"
          >
            <i class="fas fa-calendar-check group-hover:scale-110 transition-transform"></i>
            Agendar Reunión
          </span>
        </a>

        <a
          :href="emailLink"
          class="group relative px-8 py-4 rounded-full font-bold overflow-hidden transition-all duration-300 border-2 border-blue-500 hover:border-cyan-bright hover:shadow-lg hover:shadow-blue-500/30 text-center"
        >
          <span
            class="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-bright opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></span>
          <span
            class="relative flex items-center justify-center gap-2 text-blue-500 group-hover:text-white transition-colors duration-300"
          >
            <i class="fas fa-envelope group-hover:scale-110 transition-transform"></i>
            Enviar Correo
          </span>
        </a>
      </div>

      <div class="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
        <span class="flex items-center gap-2">
          <i class="fas fa-clock text-cyan-bright"></i>
          Respuesta en <strong class="text-white ml-1">24-48h</strong>
        </span>
        <span class="flex items-center gap-2">
          <i class="fas fa-headset text-collegeOrange"></i>
          <span>Soporte <strong class="text-white ml-1">personalizado</strong></span>
        </span>
        <span class="flex items-center gap-2">
          <i class="fas fa-shield-alt text-green-500"></i>
          <span>Consulta <strong class="text-white ml-1">sin compromiso</strong></span>
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  calendarUrl: {
    type: String,
    default: 'https://calendar.app.google/mBMVSUsqDfHsh5M8A',
  },
  emailAddress: {
    type: String,
    default: 'contacto@soluciones-hericraft.com',
  },
})

const calendarLink = computed(() => props.calendarUrl)
const emailLink = computed(() => `mailto:${props.emailAddress}`)
</script>

<style scoped>
.bg-navy {
  background-color: #0a1931;
}

.text-cyan-bright {
  color: #06b6d4;
}

.border-blue-500 {
  border-color: #3b82f6;
}

.text-blue-500 {
  color: #3b82f6;
}

.from-blue-500 {
  --tw-gradient-from: #3b82f6;
}

.to-cyan-bright {
  --tw-gradient-to: #06b6d4;
}

.hover\:border-cyan-bright:hover {
  border-color: #06b6d4;
}

.hover\:shadow-blue-500\/30:hover {
  box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.3);
}

.group {
  transition: all 0.3s ease;
}

.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

@keyframes pulse-slow {
  0%,
  100% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.8;
  }
}

@media (prefers-reduced-motion: reduce) {
  .group,
  .group *,
  .group:hover,
  .group:hover * {
    transition: none !important;
    transform: none !important;
    animation: none !important;
  }
}

@media (max-width: 640px) {
  .group {
    width: 100%;
  }
}
</style>

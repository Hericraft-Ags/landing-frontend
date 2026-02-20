<template>
  <!-- ========================================= -->
  <!-- SECCIÓN: CALL TO ACTION (MEJORADA) -->
  <!-- ========================================= -->
  <section
    id="contacto"
    class="relative bg-navy py-24 px-6 text-white text-center overflow-hidden"
    aria-labelledby="cta-title"
  >
    <!-- Elementos decorativos de fondo -->
    <div class="absolute inset-0 pointer-events-none">
      <!-- Círculos decorativos -->
      <div
        class="absolute top-0 left-0 w-96 h-96 bg-cyan-bright/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      ></div>
      <div
        class="absolute bottom-0 right-0 w-96 h-96 bg-collegeOrange/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"
      ></div>

      <!-- Patrón de grid sutil -->
      <div
        class="absolute inset-0 opacity-10"
        style="background-image: url('https://www.transparenttextures.com/patterns/cubes.png')"
      ></div>
    </div>

    <div class="max-w-4xl mx-auto relative z-10">
      <!-- Badge opcional -->
      <div
        class="inline-flex items-center gap-2 bg-white/10 text-cyan-bright border border-cyan-bright/30 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
      >
        <i class="fas fa-rocket"></i>
        <span>Comienza tu transformación</span>
      </div>

      <!-- Título principal -->
      <h2
        id="cta-title"
        class="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight"
      >
        ¿Listo para evolucionar?
      </h2>

      <!-- Descripción (opcional) -->
      <p class="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
        Descubre cómo nuestras soluciones educativas 5.0 pueden transformar tu institución. Agenda
        una consultoría gratuita.
      </p>

      <!-- Botones de acción mejorados -->
      <div class="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
        <!-- Botón 1: Agendar Reunión -->
        <a
          :href="calendarLink"
          target="_blank"
          rel="noopener noreferrer"
          class="group relative px-8 py-4 rounded-full font-bold overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-cyan-bright/20 transform hover:-translate-y-1"
        >
          <span
            class="absolute inset-0 bg-gradient-to-r from-cyan-bright to-blue-500 transition-transform duration-300 group-hover:scale-105"
          ></span>
          <span
            class="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"
          ></span>
          <span class="relative flex items-center gap-2 text-white">
            <i class="fas fa-calendar-check group-hover:scale-110 transition-transform"></i>
            Agendar Reunión
          </span>
        </a>

        <!-- Botón 2: Enviar Correo -->
        <a
          :href="emailLink"
          class="group relative px-8 py-4 rounded-full font-bold overflow-hidden transition-all duration-300 border-2 border-white/20 hover:border-cyan-bright/50 hover:shadow-xl hover:shadow-white/10 transform hover:-translate-y-1"
        >
          <span
            class="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
          ></span>
          <span class="relative flex items-center gap-2 text-white">
            <i class="fas fa-envelope group-hover:scale-110 transition-transform"></i>
            Enviar Correo
          </span>
        </a>
      </div>

      <!-- Información adicional (opcional) -->
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

// Props (si necesitas personalizar desde el componente padre)
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

// Links computados (por si necesitas lógica adicional)
const calendarLink = computed(() => props.calendarUrl)
const emailLink = computed(() => `mailto:${props.emailAddress}`)
</script>

<style scoped>
/* Colores personalizados */
.bg-navy {
  background-color: #0a1931;
}

.text-cyan-bright {
  color: #06b6d4;
}

.from-cyan-bright {
  --tw-gradient-from: #06b6d4;
}

.to-collegeOrange {
  --tw-gradient-to: #ff6b35;
}

/* Animaciones adicionales */
@keyframes pulse-slow {
  0%,
  100% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.8;
  }
}

/* Mejoras de accesibilidad */
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

/* Responsive */
@media (max-width: 640px) {
  .group {
    width: 100%;
  }
}
</style>

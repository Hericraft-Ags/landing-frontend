<template>
  <div>
    <!-- BARRA DE ACCESIBILIDAD -->
    <div
      class="fixed top-0 w-full bg-dark-nav text-white z-[70] h-10 flex justify-between items-center px-4 text-[10px] sm:text-xs font-bold border-b border-gray-800"
    >
      <div class="flex gap-2 sm:gap-4 items-center">
        <span class="text-cyan-bright hidden md:inline"
          ><i class="fas fa-universal-access"></i> ACCESIBILIDAD:</span
        >
        <button
          @click="toggleContrast"
          class="hover:text-cyan-bright flex items-center gap-1 focus:outline-none rounded px-2 py-1 transition"
        >
          <i class="fas fa-adjust"></i> Contraste
        </button>
        <button
          @click="toggleTextSize"
          class="hover:text-cyan-bright flex items-center gap-1 focus:outline-none rounded px-2 py-1 transition"
        >
          <i class="fas fa-text-height"></i> Texto +
        </button>
        <button
          @click="toggleMotion"
          class="hover:text-cyan-bright flex items-center gap-1 focus:outline-none rounded px-2 py-1 transition"
        >
          <i class="fas fa-pause-circle"></i> Sin Animación
        </button>
      </div>
      <div class="flex gap-3 items-center border-l border-gray-700 pl-4">
        <button
          @click="changeLang('es')"
          class="text-cyan-bright hover:text-white font-bold transition"
        >
          ES</button
        ><span>|</span>
        <button @click="changeLang('en')" class="text-gray-400 hover:text-cyan-bright transition">
          EN
        </button>
      </div>
    </div>

    <!-- NAVBAR PRINCIPAL -->
    <nav
      class="fixed top-10 w-full bg-dark-nav backdrop-blur-md border-b border-gray-800 z-50 h-20 transition-all shadow-sm"
    >
      <div class="max-w-7xl mx-auto px-4 h-full flex justify-between items-center">
        <!-- Logo -->
        <a href="/" class="flex-shrink-0 cursor-pointer hover:opacity-80 transition">
          <img
            src="../../assets/logos/logo_hericraft.png"
            alt="Hericraft Logo"
            class="h-10 w-auto"
          />
        </a>

        <!-- Menú Principal -->
        <div class="hidden lg:flex space-x-1 items-center text-white">
          <a
            href="/"
            class="px-3 py-2 text-xs font-bold hover:text-collegeOrange transition uppercase tracking-wide rounded-full hover:bg-white/10"
            >Inicio</a
          >
          <a
            href="/college"
            class="px-3 py-2 text-xs font-bold text-collegeOrange transition uppercase tracking-wide rounded-full bg-white/10"
            >College</a
          >
          <a
            href="/agora"
            class="px-3 py-2 text-xs font-bold hover:text-teal-400 transition uppercase tracking-wide rounded-full hover:bg-white/10"
            >Ágora</a
          >
          <a
            href="/metanoia"
            class="px-3 py-2 text-xs font-bold hover:text-pink-400 transition uppercase tracking-wide rounded-full hover:bg-white/10"
            >Metanoia</a
          >
          <a
            href="/processus"
            class="px-3 py-2 text-xs font-bold hover:text-blue-400 transition uppercase tracking-wide rounded-full hover:bg-white/10"
            >Processus</a
          >

          <!-- Botón Iniciar Sesión -->
          <a
            href="/login"
            class="ml-4 relative group px-6 py-2.5 rounded-full overflow-hidden shadow-lg shadow-red-500/20 hover:shadow-red-500/40 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <div
              class="absolute inset-0 bg-gradient-to-r from-[#FF6B35] to-red-700 transition-all duration-300 group-hover:brightness-110"
            ></div>
            <div
              class="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"
            ></div>
            <div
              class="relative flex items-center gap-2 text-white font-bold text-[11px] uppercase tracking-wider"
            >
              <i
                class="fas fa-user-circle text-sm group-hover:scale-110 transition-transform duration-300"
              ></i>
              <span>Iniciar Sesión</span>
            </div>
          </a>
        </div>
        <button @click="toggleMobileMenu" class="lg:hidden text-white text-2xl p-2">
          <i class="fas fa-bars"></i>
        </button>
      </div>

      <!-- Menú Móvil -->
      <div
        id="mobile-menu"
        class="hidden lg:hidden bg-dark-nav border-t border-gray-800 absolute w-full left-0 top-20 shadow-2xl p-6 space-y-4 h-[calc(100vh-80px)] z-40 overflow-y-auto pb-32 text-white"
      >
        <a href="/" class="block text-lg font-bold hover:text-collegeOrange">Inicio</a>
        <a href="/college" class="block text-lg font-bold text-collegeOrange">College</a>
        <a href="/agora" class="block text-lg font-bold hover:text-teal-400">Ágora</a>
        <a href="/metanoia" class="block text-lg font-bold hover:text-pink-400">Metanoia</a>
        <a href="/processus" class="block text-lg font-bold hover:text-blue-400">Processus</a>
        <a
          href="/login"
          class="block w-52 bg-collegeOrange text-white text-center py-3 rounded-full font-bold mt-4"
          >INICIAR SESIÓN</a
        >
      </div>
    </nav>

    <main class="animate-fade-in pt-28">
      <!-- HERO SECTION: COLLEGE -->
      <section class="relative bg-slate-50 pt-16 pb-32 px-6 overflow-hidden clip-wave-bottom">
        <div class="absolute inset-0 hero-pattern pointer-events-none"></div>
        <div
          class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-50 to-transparent pointer-events-none"
        ></div>

        <div class="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center pt-10">
          <div class="space-y-8 animate-fade-in-up">
            <div
              class="inline-flex items-center gap-2 border border-collegeOrange/30 bg-orange-50 text-collegeOrange text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider"
            >
              <i class="fas fa-graduation-cap"></i> Ecosistema Escolar
            </div>

            <img
              src="../../assets/logos/logo_college.png"
              alt="College Logo"
              class="h-40 w-auto mb-2 drop-shadow-sm"
            />

            <h1 class="text-5xl md:text-6xl font-display font-bold text-navy leading-tight">
              Innovando el presente, <br />
              <span
                class="text-collegeOrange bg-clip-text bg-gradient-to-r from-collegeOrange to-red-500"
                >mejorando el futuro.</span
              >
            </h1>

            <p
              class="text-lg text-gray-600 leading-relaxed max-w-lg border-l-4 border-collegeBlue pl-6"
            >
              El ecosistema <strong>STEAM+ </strong> que transforma escuelas y hogares. Desde el
              currículo escolarizado hasta aventuras de aprendizaje en casa.
            </p>

            <div class="flex flex-wrap gap-4 pt-2">
              <a
                href="#eba"
                class="bg-collegeOrange text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-orange-600 transition flex items-center gap-2 group"
              >
                Para Escuelas <i class="fas fa-school group-hover:scale-110 transition"></i>
              </a>
              <a
                href="#afterschool"
                class="bg-white text-collegeBlue border-2 border-collegeBlue px-8 py-4 rounded-full font-bold shadow-sm hover:bg-blue-50 transition flex items-center gap-2"
              >
                Para Familias <i class="fas fa-home"></i>
              </a>
            </div>
          </div>

          <div class="relative group perspective-1000">
            <div
              class="absolute inset-0 bg-gradient-to-tr from-collegeOrange to-collegeBlue rounded-[2rem] opacity-20 rotate-6 scale-95 transition-transform group-hover:rotate-3"
            ></div>
            <img
              src="../../assets/images/hero_college.jpg"
              alt="Clase STEAM Interactiva"
              class="relative rounded-[2rem] shadow-2xl border-4 border-white w-full object-cover transform transition duration-500 group-hover:-translate-y-2"
            />

            <div
              class="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce-slow border-l-4 border-collegeYellow hidden md:flex"
            >
              <div class="bg-yellow-100 p-2 rounded-full text-collegeYellow">
                <i class="fas fa-star"></i>
              </div>
              <div>
                <p class="font-bold text-navy text-sm">Alineado a estándares</p>
                <p class="text-xs text-gray-500">ISTE / Cognia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 2. PROGRAMA CURRICULAR EBA (Escuelas) -->
      <section id="eba" class="py-24 px-6 bg-white">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16">
            <span
              class="text-collegeBlue font-bold uppercase tracking-widest text-sm bg-blue-50 px-3 py-1 rounded-full"
              >Solución Institucional</span
            >
            <h2 class="text-4xl font-display font-bold text-navy mt-4">PROGRAMA CURRICULAR EBA</h2>
            <p class="text-gray-500 mt-4 max-w-2xl mx-auto text-lg mb-8">
              Educación Básica Aplicada. Integramos tecnología, ética y pensamiento crítico en el
              horario escolar, alineados a la <strong>NEM</strong>.
            </p>

            <a
              href="https://soluciones-hericraft.aflip.in/ff0ae8643c.html"
              target="_blank"
              class="inline-flex items-center gap-2 bg-white border-2 border-collegeOrange text-collegeOrange px-6 py-3 rounded-full font-bold hover:bg-collegeOrange hover:text-gray-600 transition shadow-lg group"
            >
              <i class="fas fa-file-pdf text-xl"></i>
              Ver programa curricular completo (PDF)
              <i
                class="fas fa-external-link-alt text-xs opacity-70 group-hover:opacity-80 ml-1"
              ></i>
            </a>
          </div>

          <!-- Los 3 Niveles -->
          <div class="grid md:grid-cols-3 gap-8 mb-20">
            <!-- EBA Kids -->
            <div
              class="bg-slate-50 p-6 rounded-3xl shadow-sm border border-gray-100 card-hover-effect group relative overflow-hidden flex flex-col"
            >
              <div
                class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-400"
              ></div>
              <div class="flex justify-between items-start mb-6">
                <div
                  class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center p-3 shadow-md group-hover:scale-110 transition group-hover:rotate-6"
                >
                  <img
                    src="../../assets/images/icon_eba_kids.png"
                    alt="Icono Kids"
                    class="w-full h-full object-contain"
                  />
                </div>
                <span
                  class="text-[10px] font-bold text-gray-400 uppercase tracking-wide border border-gray-200 px-2 py-1 rounded-full bg-white"
                  >Primaria</span
                >
              </div>
              <div class="w-full h-40 rounded-xl overflow-hidden mb-5 relative">
                <img
                  src="../../assets/images/eba_kids.png"
                  alt="Clase Kids"
                  class="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
              </div>
              <h3 class="text-2xl font-bold text-navy mb-2">EBA Kids</h3>
              <p class="text-gray-600 leading-relaxed text-sm flex-grow">
                Introducción lúdica a conceptos STEAM. Despertamos la curiosidad a través de la
                exploración.
              </p>
            </div>

            <!-- EBA Advanced -->
            <div
              class="bg-slate-50 p-6 rounded-3xl shadow-sm border border-gray-100 card-hover-effect group relative overflow-hidden flex flex-col"
            >
              <div
                class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-600"
              ></div>
              <div class="flex justify-between items-start mb-6">
                <div
                  class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center p-3 shadow-md group-hover:scale-110 transition group-hover:rotate-6"
                >
                  <img
                    src="../../assets/images/icon_eba_kids.png"
                    alt="Icono Advanced"
                    class="w-full h-full object-contain"
                  />
                </div>
                <span
                  class="text-[10px] font-bold text-gray-400 uppercase tracking-wide border border-gray-200 px-2 py-1 rounded-full bg-white"
                  >Secundaria</span
                >
              </div>
              <div class="w-full h-40 rounded-xl overflow-hidden mb-5 relative">
                <img
                  src="../../assets/images/eba_advanced.png"
                  alt="Clase Advanced"
                  class="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
              </div>
              <h3 class="text-2xl font-bold text-navy mb-2">EBA Advanced</h3>
              <p class="text-gray-600 leading-relaxed text-sm flex-grow">
                Aprende a integrar la tecnología como herramienta en cada aspecto de su vida.
                Proyectos complejos con impacto social.
              </p>
            </div>

            <!-- EBA Xpert -->
            <div
              class="bg-slate-50 p-6 rounded-3xl shadow-sm border border-gray-100 card-hover-effect group relative overflow-hidden flex flex-col"
            >
              <div
                class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"
              ></div>
              <div class="flex justify-between items-start mb-6">
                <div
                  class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center p-3 shadow-md group-hover:scale-110 transition group-hover:rotate-6"
                >
                  <img
                    src="../../assets/images/icon_eba_kids.png"
                    alt="Icono Xpert"
                    class="w-full h-full object-contain"
                  />
                </div>
                <span
                  class="text-[10px] font-bold text-gray-400 uppercase tracking-wide border border-gray-200 px-2 py-1 rounded-full bg-white"
                  >Bachillerato</span
                >
              </div>
              <div class="w-full h-40 rounded-xl overflow-hidden mb-5 relative">
                <img
                  src="../../assets/images/eba_xpert.png"
                  alt="Clase Xpert"
                  class="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
              </div>
              <h3 class="text-2xl font-bold text-navy mb-2">EBA Xpert</h3>
              <p class="text-gray-600 leading-relaxed text-sm flex-grow">
                Áreas de especialidad implementando herramientas de tecnología, conceptos de
                matemáticas y integración de la ciencia.
              </p>
            </div>
          </div>

          <!-- Laboratorio Virtual + Simulador -->
          <div
            class="bg-navy rounded-[3rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl"
          >
            <div class="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
              <div class="lg:w-1/2">
                <h3 class="text-3xl md:text-4xl font-display font-bold mb-6">
                  LABORATORIO VIRTUAL
                </h3>
                <p class="text-gray-300 text-lg mb-8 leading-relaxed">
                  Un entorno seguro donde los estudiantes interactúan con simuladores de
                  <strong
                    >herramientas manuales, eléctricas, máquinas CNC y componentes
                    tecnológicos</strong
                  >
                  antes de tocar el hardware real.
                </p>
                <button
                  class="bg-collegeBlue hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition shadow-lg shadow-blue-500/30"
                >
                  Solicitar demo escolar
                </button>
              </div>

              <div class="lg:w-1/2 w-full">
                <div style="width: 100%">
                  <div
                    style="position: relative; padding-bottom: 56.25%; padding-top: 0; height: 0"
                  >
                    <iframe
                      title="Ambiente virtual de aprendizaje Mecatrónica"
                      frameborder="0"
                      width="1920"
                      height="1080"
                      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
                      src="https://view.genially.com/67168dc0d010e505ac4e1bc5"
                      type="text/html"
                      allowscriptaccess="always"
                      allowfullscreen="true"
                      scrolling="yes"
                      allownetworking="all"
                    ></iframe>
                  </div>
                </div>
                <p class="text-center text-gray-400 text-xs mt-3">
                  <i class="fas fa-info-circle mr-1"></i> Interactúa con el laboratorio de prueba.
                  Vive la experiencia College.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ... resto de las secciones (mantén todo el contenido existente) ... -->
    </main>

    <footer
      class="bg-slate-950 text-gray-400 text-sm border-t border-white/10 relative overflow-hidden"
    >
      <div
        class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-navy via-cyanBright to-collegeOrange"
      ></div>
      <div class="max-w-7xl mx-auto px-6 py-16">
        <!-- ... contenido del footer ... -->
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Estados de accesibilidad
const highContrast = ref(false)
const largeText = ref(false)
const reduceMotion = ref(false)

// Funciones de accesibilidad
const toggleContrast = () => {
  highContrast.value = !highContrast.value
  document.body.classList.toggle('high-contrast')
}

const toggleTextSize = () => {
  largeText.value = !largeText.value
  document.documentElement.classList.toggle('large-text')
}

const toggleMotion = () => {
  reduceMotion.value = !reduceMotion.value
  document.body.classList.toggle('reduce-motion')
}

const changeLang = lang => {
  alert('Idioma: ' + lang.toUpperCase())
}

const toggleMobileMenu = () => {
  const menu = document.getElementById('mobile-menu')
  if (menu) menu.classList.toggle('hidden')
}
</script>

<style scoped>
/* Tipografía y Colores */
body {
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  padding: 0;
}

.font-display {
  font-family: 'Titillium Web', sans-serif;
}
.font-college {
  font-family: 'Reddit Sans', sans-serif;
}

/* Paleta College */
.text-collegeOrange {
  color: #ff6b35;
}
.bg-collegeOrange {
  background-color: #ff6b35;
}
.text-collegeBlue {
  color: #2563eb;
}
.bg-collegeBlue {
  background-color: #2563eb;
}
.text-collegePurple {
  color: #7c3aed;
}
.text-collegeYellow {
  color: #fbbf24;
}
.bg-navy {
  background-color: #0898c0;
}
.text-cyan-bright {
  color: #00c2ff;
}
.bg-dark-nav {
  background-color: #085899;
}

/* Fondos y Efectos */
.hero-pattern {
  background-color: #ffffff;
  background-image:
    radial-gradient(#ff6b35 0.5px, transparent 0.5px), radial-gradient(#2563eb 0.5px, #ffffff 0.5px);
  background-size: 20px 20px;
  background-position:
    0 0,
    10px 10px;
  opacity: 0.4;
}

.clip-wave-bottom {
  clip-path: polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%);
}

.card-hover-effect {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-hover-effect:hover {
  transform: translateY(-8px);
  box-shadow:
    0 20px 25px -5px rgba(37, 99, 235, 0.15),
    0 10px 10px -5px rgba(37, 99, 235, 0.1);
  border-color: #ff6b35;
}

/* Configuración 3D */
.perspective-1000 {
  perspective: 1000px;
}
.transform-style-3d {
  transform-style: preserve-3d;
}
.backface-hidden {
  backface-visibility: hidden;
}
.rotate-y-180 {
  transform: rotateY(180deg);
}

.group:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Animaciones */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

.animate-fade-in-up {
  animation: fadeIn 0.8s ease-out;
}

@keyframes bounce-slow {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-bounce-slow {
  animation: bounce-slow 3s infinite;
}

/* Clases de accesibilidad */
:global(.high-contrast) {
  filter: contrast(150%);
}

:global(.large-text) {
  font-size: 120%;
}

:global(.reduce-motion *),
:global(.reduce-motion) {
  animation-duration: 0.001ms !important;
  animation-iteration-count: 1 !important;
  transition-duration: 0.001ms !important;
}
</style>

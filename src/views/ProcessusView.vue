<template>
  <div>
    <div
      class="fixed top-0 w-full bg-black text-white z-[70] h-10 flex justify-between items-center px-4 text-[10px] sm:text-xs font-bold border-b border-white/10"
    >
      <div class="flex gap-4 items-center">
        <span class="text-cyan hidden sm:inline"
          ><i class="fas fa-universal-access"></i> ACCESIBILIDAD:</span
        >
        <button @click="toggleContrast" class="hover:text-cyan flex items-center gap-1">
          <i class="fas fa-adjust"></i> Contraste
        </button>
        <button @click="toggleTextSize" class="hover:text-cyan flex items-center gap-1">
          <i class="fas fa-text-height"></i> Texto +
        </button>
      </div>
      <div class="flex gap-3 items-center">
        <button @click="changeLang('es')" class="text-cyan font-bold">ES</button><span>|</span>
        <button @click="changeLang('en')" class="text-gray-400 hover:text-cyan">EN</button>
      </div>
    </div>

    <nav
      class="fixed top-10 w-full bg-slate-900 backdrop-blur-md border-b border-gray-800 z-50 h-20 transition-all shadow-sm"
    >
      <div class="max-w-7xl mx-auto px-4 h-full flex justify-between items-center">
        <a href="/">
          <img
            src="../assets/images/logos/logo_hericraft.png"
            alt="Hericraft Logo"
            class="h-10 w-auto filter brightness-125"
          />
        </a>
        <div class="hidden lg:flex space-x-6 items-center">
          <a
            href="/"
            class="text-xs font-bold text-white hover:text-cyan transition uppercase tracking-wide"
            >Inicio</a
          >
          <a
            href="/college"
            class="text-xs font-bold text-white hover:text-collegeOrange transition uppercase tracking-wide"
            >College</a
          >
          <a
            href="/agora"
            class="text-xs font-bold text-white hover:text-agoraLime transition uppercase tracking-wide"
            >Ágora</a
          >
          <a
            href="/metanoia"
            class="text-xs font-bold text-white hover:text-accentPink transition uppercase tracking-wide"
            >Metanoia</a
          >

          <span
            class="text-xs font-bold text-cyan border-b-2 border-cyan pb-1 uppercase tracking-wide flex items-center gap-1"
          >
            <i class="fas fa-briefcase"></i> PROCESSUS
          </span>

          <a
            href="#contacto"
            class="bg-cyan text-navy px-5 py-2 rounded-full text-xs font-bold hover:bg-white transition shadow-lg shadow-cyan/20"
          >
            Agendar Consultoría
          </a>
        </div>
        <button @click="toggleMobileMenu" class="lg:hidden text-white text-2xl">
          <i class="fas fa-bars"></i>
        </button>
      </div>
    </nav>

    <main class="animate-fade-in pt-28">
      <section
        class="relative bg-processus-gradient pt-20 pb-32 px-6 overflow-hidden min-h-[80vh] flex items-center"
      >
        <div class="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none"></div>
        <div
          class="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-cyan/10 to-transparent pointer-events-none"
        ></div>

        <div class="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div class="space-y-8">
            <img
              src="../assets/images/logo_processus.png"
              alt="Logo Processus"
              class="h-40 w-auto -ml-4 mb-4"
            />

            <div class="flex gap-3 text-xs font-bold tracking-widest uppercase text-cyan mb-4">
              <span>Proceso</span>
              <span class="text-white/30">•</span>
              <span>Avance</span>
              <span class="text-white/30">•</span>
              <span>Conocimiento</span>
            </div>

            <h1
              class="text-5xl lg:text-7xl font-brand-processus font-black text-white leading-none"
            >
              Ingeniería del <br />
              <span class="bg-clip-text text-cyan">Aprendizaje Corporativo.</span>
            </h1>

            <p
              class="text-xl text-gray-300 leading-relaxed border-l-4 border-cyan pl-6 font-light max-w-lg"
            >
              Transformamos el "Know-How" de tu organización en activos digitales de alto impacto.
              Soluciones LMS, Onboarding y Fábrica de Contenidos a la medida.
            </p>

            <div class="flex flex-wrap gap-4 pt-6">
              <button
                class="bg-cyan text-navy px-8 py-4 rounded-xl font-bold hover:bg-white transition shadow-lg shadow-cyan/30 transform hover:-translate-y-1"
              >
                Solicitar Demo B2B
              </button>
              <button
                class="flex items-center gap-3 px-6 py-4 rounded-xl border border-white/30 text-white font-bold hover:bg-white/10 transition"
              >
                Ver Casos de Éxito
              </button>
            </div>
          </div>

          <div class="relative group">
            <div
              class="absolute inset-0 bg-cyan/20 rounded-2xl transform translate-x-4 translate-y-4 border border-cyan/30"
            ></div>
            <div
              class="absolute -inset-1 bg-gradient-to-r from-cyan to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"
            ></div>

            <img
              src="../assets/images/online-learning-experience.jpg"
              class="relative rounded-2xl shadow-2xl border border-white/10 w-full object-cover"
              alt="Corporate LMS"
            />

            <div
              class="absolute -bottom-6 right-8 bg-navy p-6 rounded-xl shadow-xl border border-cyan/30 flex flex-col items-center animate-pulse-slow"
            >
              <span class="text-3xl font-bold text-cyan">40%</span>
              <span class="text-[10px] uppercase tracking-wide text-gray-400"
                >Ahorro en Capacitación</span
              >
            </div>
          </div>
        </div>
      </section>

      <!-- SOLUCIONES CORPORATIVAS -->
      <section class="py-24 px-6 bg-slate-900 relative">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-20">
            <span class="text-cyan font-bold uppercase tracking-widest text-sm mb-2 block"
              >Nuestros Servicios</span
            >
            <h2 class="text-4xl font-brand-processus text-white">Ecosistema B2B</h2>
            <p class="text-gray-400 mt-4 max-w-2xl mx-auto">
              Diseñamos soluciones escalables para empresas y universidades que buscan
              profesionalizar su capital humano.
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <div class="card-processus p-8 rounded-3xl group">
              <div
                class="w-16 h-16 bg-navy border border-cyan/30 rounded-2xl flex items-center justify-center text-cyan text-3xl mb-8 group-hover:scale-110 transition shadow-[0_0_20px_rgba(14,241,235,0.2)]"
              >
                <img
                  src="../assets/images/PROCESSUS-03.png"
                  alt="Onboarding digital"
                  class="h-16 w-auto"
                />
              </div>
              <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-cyan transition">
                Onboarding Digital
              </h3>
              <p class="text-sm text-gray-400 leading-relaxed mb-6">
                Digitalizamos y gamificamos tus procesos de inducción. Reduce la curva de
                aprendizaje de los nuevos colaboradores y transmite la cultura organizacional de
                forma efectiva.
              </p>
              <ul class="text-xs text-gray-500 space-y-2">
                <li class="flex items-center gap-2">
                  <i class="fas fa-check text-cyan"></i> Recorridos Virtuales
                </li>
                <li class="flex items-center gap-2">
                  <i class="fas fa-check text-cyan"></i> Manuales Interactivos
                </li>
              </ul>
            </div>

            <div class="card-processus p-8 rounded-3xl group relative overflow-hidden">
              <div
                class="absolute top-0 right-0 w-32 h-32 bg-cyan/10 rounded-full blur-3xl -mr-16 -mt-16"
              ></div>
              <div
                class="w-16 h-16 bg-navy border border-cyan/30 rounded-2xl flex items-center justify-center text-cyan text-3xl mb-8 group-hover:scale-110 transition shadow-[0_0_20px_rgba(14,241,235,0.2)]"
              >
                <img
                  src="../assets/images/PROCESSUS-04.png"
                  alt="Onboarding digital"
                  class="h-16 w-auto"
                />
              </div>
              <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-cyan transition">
                LMS Empresarial
              </h3>
              <p class="text-sm text-gray-400 leading-relaxed mb-6">
                Implementación y personalización de plataformas LMS (Moodle, Canvas, o Custom).
                Dashboards ejecutivos para seguimiento de ROI en capacitación.
              </p>
              <ul class="text-xs text-gray-500 space-y-2">
                <li class="flex items-center gap-2">
                  <i class="fas fa-check text-cyan"></i> Reportes de Avance
                </li>
                <li class="flex items-center gap-2">
                  <i class="fas fa-check text-cyan"></i> Certificados Automáticos
                </li>
              </ul>
            </div>

            <div class="card-processus p-8 rounded-3xl group">
              <div
                class="w-16 h-16 bg-navy border border-cyan/30 rounded-2xl flex items-center justify-center text-cyan text-3xl mb-8 group-hover:scale-110 transition shadow-[0_0_20px_rgba(14,241,235,0.2)]"
              >
                <img
                  src="../assets/images/PROCESSUS-05.png"
                  alt="Onboarding digital"
                  class="h-16 w-auto"
                />
              </div>
              <h3 class="text-2xl font-bold text-white mb-4 group-hover:text-cyan transition">
                Fábrica de Contenidos
              </h3>
              <p class="text-sm text-gray-400 leading-relaxed mb-6">
                Transformamos manuales PDF aburridos en cursos SCORM, videos interactivos y
                micro-learning. Diseño instruccional de alto nivel pedagógico.
              </p>
              <ul class="text-xs text-gray-500 space-y-2">
                <li class="flex items-center gap-2">
                  <i class="fas fa-check text-cyan"></i> Producción Audiovisual
                </li>
                <li class="flex items-center gap-2">
                  <i class="fas fa-check text-cyan"></i> Animación 2D/3D
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- METODOLOGÍA PROCESSUS -->
      <section class="py-24 px-6 bg-navy relative overflow-hidden">
        <div class="max-w-5xl mx-auto relative z-10">
          <div class="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span class="text-cyan font-bold uppercase tracking-widest text-sm mb-4 block"
                >Cómo Trabajamos</span
              >
              <h2 class="text-4xl font-brand-processus text-white mb-8">Consultoría 360°</h2>

              <div class="space-y-8">
                <div class="process-step">
                  <h4 class="text-xl font-bold text-white">1. Diagnóstico</h4>
                  <p class="text-sm text-gray-400 mt-2">
                    Analizamos las brechas de conocimiento y los objetivos de negocio de tu
                    organización.
                  </p>
                </div>
                <div class="process-step">
                  <h4 class="text-xl font-bold text-white">2. Arquitectura</h4>
                  <p class="text-sm text-gray-400 mt-2">
                    Diseñamos la ruta de aprendizaje y seleccionamos la tecnología adecuada
                    (LMS/App).
                  </p>
                </div>
                <div class="process-step">
                  <h4 class="text-xl font-bold text-white">3. Implementación</h4>
                  <p class="text-sm text-gray-400 mt-2">
                    Desarrollo de contenidos, configuración de plataforma y lanzamiento.
                  </p>
                </div>
                <div class="process-step">
                  <h4 class="text-xl font-bold text-white">4. Analítica</h4>
                  <p class="text-sm text-gray-400 mt-2">
                    Medición de impacto, tasas de finalización y retorno de inversión.
                  </p>
                </div>
              </div>
            </div>

            <div class="bg-white/5 p-8 rounded-3xl border border-white/10 text-center">
              <h3 class="text-2xl font-bold text-white mb-6">Beneficios Clave</h3>
              <div class="grid grid-cols-2 gap-6">
                <div class="p-4 bg-navy rounded-xl border border-cyan/20">
                  <span class="block text-3xl font-bold text-cyan mb-1">-40%</span>
                  <span class="text-[10px] uppercase text-gray-400">Tiempos de Inducción</span>
                </div>
                <div class="p-4 bg-navy rounded-xl border border-cyan/20">
                  <span class="block text-3xl font-bold text-cyan mb-1">+60%</span>
                  <span class="text-[10px] uppercase text-gray-400">Retención de Talento</span>
                </div>
                <div class="p-4 bg-navy rounded-xl border border-cyan/20">
                  <span class="block text-3xl font-bold text-cyan mb-1">24/7</span>
                  <span class="text-[10px] uppercase text-gray-400">Acceso al Conocimiento</span>
                </div>
                <div class="p-4 bg-navy rounded-xl border border-cyan/20">
                  <span class="block text-3xl font-bold text-cyan mb-1">100%</span>
                  <span class="text-[10px] uppercase text-gray-400">Deducible de Impuestos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section id="contacto" class="py-24 px-6 text-center bg-blue-900">
        <h2 class="text-3xl md:text-4xl font-brand-processus text-white mb-6">
          Potencia tu Capital Humano
        </h2>
        <p class="text-gray-400 mb-10 max-w-xl mx-auto">
          Agenda una sesión de diagnóstico con nuestros consultores corporativos.
        </p>
        <div class="flex justify-center gap-4">
          <button
            class="bg-cyan text-navy px-10 py-4 rounded-full font-bold hover:bg-white transition shadow-[0_0_30px_rgba(14,241,235,0.3)]"
          >
            Agendar Diagnóstico
          </button>
          <a
            href="mailto:processus@hericraft.com"
            class="border border-white/30 text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition"
          >
            Enviar Requerimientos
          </a>
        </div>
      </section>
    </main>

    <footer class="bg-slate-900 py-12 text-center text-gray-500 text-sm">
      <div class="flex justify-center gap-6 mb-8">
        <a href="#" target="_blank" class="block w-10 h-10">
          <img
            src="../assets/images/facebook.png"
            alt="Facebook"
            class="w-full h-full object-contain social-btn-img"
          />
        </a>
        <a href="#" target="_blank" class="block w-10 h-10">
          <img
            src="../assets/images/instagram.png"
            alt="Instagram"
            class="w-full h-full object-contain social-btn-img"
          />
        </a>
        <a href="#" target="_blank" class="block w-10 h-10">
          <img
            src="../assets/images/linkedin.png"
            alt="LinkedIn"
            class="w-full h-full object-contain social-btn-img"
          />
        </a>
        <a href="#" target="_blank" class="block w-10 h-10">
          <img
            src="../assets/images/spotify.png"
            alt="Spotify"
            class="w-full h-full object-contain social-btn-img"
          />
        </a>
        <a href="#" target="_blank" class="block w-10 h-10">
          <img
            src="../assets/images/youtube.png"
            alt="Youtube"
            class="w-full h-full object-contain social-btn-img"
          />
        </a>
      </div>
      <p>© 2025 Hericraft Soluciones Integrales S.A. de C.V. - Ecosistema Processus</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const highContrast = ref(false)
const largeText = ref(false)

const toggleContrast = () => {
  highContrast.value = !highContrast.value
  document.body.classList.toggle('high-contrast')
}

const toggleTextSize = () => {
  largeText.value = !largeText.value
  document.documentElement.classList.toggle('large-text')
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
.font-brand-processus {
  font-family: 'Reddit Sans', sans-serif;
  letter-spacing: -0.01em;
}

.bg-navy {
  background-color: #0a2966;
}
.text-cyan {
  color: #0ef1eb;
}
.bg-cyan {
  background-color: #0ef1eb;
}
.text-collegeOrange {
  color: #ff6b35;
}
.text-agoraLime {
  color: #8dc63f;
}
.text-accentPink {
  color: #ec4899;
}

.bg-processus-gradient {
  background: linear-gradient(160deg, #0a2966 0%, #132496 100%);
}

.bg-tech-grid {
  background-image: url('https://www.transparenttextures.com/patterns/cubes.png');
}

.card-processus {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(14, 241, 235, 0.1);
  transition: all 0.3s ease;
}

.card-processus:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: #0ef1eb;
  transform: translateY(-5px);
  box-shadow: 0 0 30px rgba(14, 241, 235, 0.1);
}

.process-step {
  position: relative;
  padding-left: 2rem;
  border-left: 2px solid rgba(14, 241, 235, 0.2);
}

.process-step::before {
  content: '';
  position: absolute;
  left: -9px;
  top: 0;
  width: 16px;
  height: 16px;
  background: #0a2966;
  border: 2px solid #0ef1eb;
  border-radius: 50%;
}

.social-btn-img {
  transition:
    transform 0.3s ease,
    opacity 0.3s;
}

.social-btn-img:hover {
  transform: scale(1.1);
  opacity: 0.9;
}

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

@keyframes pulse-slow {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

.animate-pulse-slow {
  animation: pulse-slow 3s infinite;
}

:global(.high-contrast) {
  filter: contrast(150%);
}

:global(.large-text) {
  font-size: 120%;
}
</style>

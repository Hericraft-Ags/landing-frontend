<template>
  <div>
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
            src="../assets/images/logos/logo_hericraft.png"
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
              src="../assets/images/logos/logo_college.png"
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
              src="../assets/images/hero_college.jpg"
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
                    src="../assets/images/college-01.png"
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
                  src="../assets/images/eba_kids.PNG"
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
                    src="../assets/images/college-02.png"
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
                  src="../assets/images/eba_advanced.PNG"
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
                    src="../assets/images/college-03.png"
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
                  src="../assets/images/eba_xpert.PNG"
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
                <p class="text-center text-gray-200 text-xs mt-3">
                  <i class="fas fa-info-circle mr-1"></i> Interactúa con el laboratorio de prueba.
                  Vive la experiencia College.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. METODOLOGÍA PRAXIS -->
      <section id="metodologia" class="bg-slate-50 py-24 px-6 relative overflow-hidden">
        <!-- Fondo sutil de trama/tejido -->
        <div
          class="absolute inset-0 opacity-5 pointer-events-none"
          style="
            background-image:
              linear-gradient(
                0deg,
                transparent 24%,
                #e5e7eb 25%,
                #e5e7eb 26%,
                transparent 27%,
                transparent 74%,
                #e5e7eb 75%,
                #e5e7eb 76%,
                transparent 77%,
                transparent
              ),
              linear-gradient(
                90deg,
                transparent 24%,
                #e5e7eb 25%,
                #e5e7eb 26%,
                transparent 27%,
                transparent 74%,
                #e5e7eb 75%,
                #e5e7eb 76%,
                transparent 77%,
                transparent
              );
            background-size: 50px 50px;
          "
        ></div>

        <div class="max-w-7xl mx-auto relative z-10">
          <div class="text-center mb-20">
            <span
              class="text-collegePurple font-bold uppercase tracking-widest text-sm bg-purple-100 px-4 py-1.5 rounded-full inline-block mb-4"
              >Motor Pedagógico</span
            >
            <h2 class="text-4xl md:text-5xl font-display font-bold text-navy">El Ciclo PRAXIS</h2>
            <p class="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
              Como un telar que entrelaza la teoría con la práctica, nuestra metodología teje
              conocimientos y habilidades en tres fases continuas.
            </p>
          </div>

          <div class="relative grid md:grid-cols-3 gap-8 items-start">
            <!-- Hilo Conector (Línea de fondo) -->
            <div
              class="hidden md:block absolute top-12 left-[15%] right-[15%] h-1.5 bg-gray-200 rounded-full overflow-hidden -z-10"
            >
              <div
                class="h-full w-full bg-gradient-to-r from-collegeBlue via-collegeOrange to-collegePurple opacity-60"
              ></div>
            </div>

            <!-- Step 1: FRAME -->
            <div class="group relative flex flex-col items-center text-center">
              <div
                class="w-24 h-24 bg-white border-[6px] border-collegeBlue rounded-full flex items-center justify-center text-4xl text-collegeBlue shadow-xl z-10 transition-all duration-300 group-hover:scale-110 group-hover:bg-collegeBlue group-hover:text-white group-hover:rotate-12"
              >
                <img src="../assets/images/college-04.png" />
              </div>
              <div
                class="mt-8 bg-white p-8 rounded-[2rem] shadow-lg border-b-8 border-collegeBlue w-full hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2"
              >
                <h3 class="text-2xl font-bold text-navy mb-1">1. FRAME</h3>
                <span
                  class="text-xs font-bold text-collegeBlue uppercase tracking-widest block mb-4"
                  >El Diseño</span
                >
                <p class="text-gray-600 text-sm leading-relaxed">
                  <strong>Preparamos la urdimbre.</strong> Es la fase de planeación estratégica
                  donde definimos el reto, seleccionamos las herramientas y estructuramos el
                  propósito del aprendizaje.
                </p>
              </div>
            </div>

            <!-- Step 2: FLOW -->
            <div class="group relative flex flex-col items-center text-center">
              <div
                class="w-24 h-24 bg-white border-[6px] border-collegeOrange rounded-full flex items-center justify-center text-4xl text-collegeOrange shadow-xl z-10 transition-all duration-300 group-hover:scale-110 group-hover:bg-collegeOrange group-hover:text-white group-hover:rotate-12"
              >
                <img src="../assets/images/college-05.png" />
              </div>
              <div
                class="mt-8 bg-white p-8 rounded-[2rem] shadow-lg border-b-8 border-collegeOrange w-full hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2"
              >
                <h3 class="text-2xl font-bold text-navy mb-1">2. FLOW</h3>
                <span
                  class="text-xs font-bold text-collegeOrange uppercase tracking-widest block mb-4"
                  >La Acción</span
                >
                <p class="text-gray-600 text-sm leading-relaxed">
                  <strong>Tejemos la experiencia.</strong> Es el momento de inmersión total ("Flow
                  State"). Los estudiantes experimentan, crean y conectan ideas en un ambiente
                  dinámico.
                </p>
              </div>
            </div>

            <!-- Step 3: SNAP -->
            <div class="group relative flex flex-col items-center text-center">
              <div
                class="w-24 h-24 bg-white border-[6px] border-collegePurple rounded-full flex items-center justify-center text-4xl text-collegePurple shadow-xl z-10 transition-all duration-300 group-hover:scale-110 group-hover:bg-collegePurple group-hover:text-white group-hover:rotate-12"
              >
                <img src="../assets/images/college-06.png" />
              </div>
              <div
                class="mt-8 bg-white p-8 rounded-[2rem] shadow-lg border-b-8 border-collegePurple w-full hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2"
              >
                <h3 class="text-2xl font-bold text-navy mb-1">3. SNAP</h3>
                <span
                  class="text-xs font-bold text-collegePurple uppercase tracking-widest block mb-4"
                  >El Cierre</span
                >
                <p class="text-gray-600 text-sm leading-relaxed">
                  <strong>Capturamos el tejido.</strong> Fase de reflexión crítica y evaluación.
                  Analizamos el resultado final, celebramos los logros e identificamos áreas de
                  mejora.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- ACOMPAÑANTES DIGITALES -->
      <section id="acompanantes" class="py-24 px-6 bg-white relative overflow-hidden">
        <div
          class="absolute inset-0 opacity-5 pointer-events-none"
          style="
            background-image: radial-gradient(#2563eb 1px, transparent 1px);
            background-size: 30px 30px;
          "
        ></div>

        <div class="max-w-7xl mx-auto relative z-10">
          <div class="text-center mb-16">
            <span
              class="text-collegeOrange font-bold uppercase tracking-widest text-sm bg-orange-50 px-3 py-1 rounded-full"
              >Aprendizaje Basado en Roles</span
            >
            <h2 class="text-4xl font-display font-bold text-navy mt-4">
              Tus Acompañantes Digitales
            </h2>
            <p class="text-gray-600 mt-4 max-w-3xl mx-auto text-lg leading-relaxed">
              Nuestros personajes digitales guían tu formación en un
              <strong>ambiente 100% seguro</strong>. Pasa el cursor sobre ellos para descubrir sus
              diferentes facetas.
            </p>
          </div>

          <!-- Personajes con Animación Flip -->
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
            <!-- KIBY -->
            <div class="group text-center cursor-pointer">
              <div class="relative w-32 h-32 mx-auto mb-4 perspective-1000">
                <div
                  class="relative w-full h-full transition-transform duration-700 transform-style-3d flip-card-inner"
                >
                  <!-- Frente (Pose 1) -->
                  <div
                    class="absolute inset-0 backface-hidden rounded-full overflow-hidden border-4 border-white shadow-lg bg-slate-100"
                  >
                    <img
                      src="../assets/images/personaje_kiby.png"
                      alt="Kiby Pose 1"
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <!-- Reverso (Pose 2 - Girado) -->
                  <div
                    class="absolute inset-0 backface-hidden rounded-full overflow-hidden border-4 border-collegeYellow shadow-lg rotate-y-180 bg-white"
                  >
                    <img
                      src="../assets/images/personaje_kiby_2.png"
                      alt="Kiby Pose 2"
                      class="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <h3
                class="font-bold text-navy group-hover:text-collegeYellow transition duration-300"
              >
                Kiby
              </h3>
              <p class="text-xs text-gray-500 font-bold uppercase tracking-wide">Guía Principal</p>
            </div>

            <!-- LÍDER -->
            <div class="group text-center cursor-pointer">
              <div class="relative w-32 h-32 mx-auto mb-4 perspective-1000">
                <div
                  class="relative w-full h-full transition-transform duration-700 transform-style-3d flip-card-inner"
                >
                  <div
                    class="absolute inset-0 backface-hidden rounded-full overflow-hidden border-4 border-white shadow-lg bg-slate-100"
                  >
                    <img
                      src="../assets/images/personaje_lider.png"
                      alt="Líder Pose 1"
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <div
                    class="absolute inset-0 backface-hidden rounded-full overflow-hidden border-4 border-red-500 shadow-lg rotate-y-180 bg-white"
                  >
                    <img
                      src="../assets/images/personaje_lider_2.png"
                      alt="Líder Pose 2"
                      class="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <h3 class="font-bold text-navy group-hover:text-red-500 transition duration-300">
                Líder
              </h3>
              <p class="text-xs text-gray-500 font-bold uppercase tracking-wide">Gestión</p>
            </div>

            <!-- CIENTÍFICA -->
            <div class="group text-center cursor-pointer">
              <div class="relative w-32 h-32 mx-auto mb-4 perspective-1000">
                <div
                  class="relative w-full h-full transition-transform duration-700 transform-style-3d flip-card-inner"
                >
                  <div
                    class="absolute inset-0 backface-hidden rounded-full overflow-hidden border-4 border-white shadow-lg bg-slate-100"
                  >
                    <img
                      src="../assets/images/personaje_cientifica.png"
                      alt="Científica Pose 1"
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <div
                    class="absolute inset-0 backface-hidden rounded-full overflow-hidden border-4 border-blue-500 shadow-lg rotate-y-180 bg-white"
                  >
                    <img
                      src="../assets/images/personaje_cientifica_2.png"
                      alt="Científica Pose 2"
                      class="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <h3 class="font-bold text-navy group-hover:text-blue-500 transition duration-300">
                Científica
              </h3>
              <p class="text-xs text-gray-500 font-bold uppercase tracking-wide">Investigación</p>
            </div>

            <!-- CONSTRUCTOR -->
            <div class="group text-center cursor-pointer">
              <div class="relative w-32 h-32 mx-auto mb-4 perspective-1000">
                <div
                  class="relative w-full h-full transition-transform duration-700 transform-style-3d flip-card-inner"
                >
                  <div
                    class="absolute inset-0 backface-hidden rounded-full overflow-hidden border-4 border-white shadow-lg bg-slate-100"
                  >
                    <img
                      src="../assets/images/personaje_constructor.png"
                      alt="Constructor Pose 1"
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <div
                    class="absolute inset-0 backface-hidden rounded-full overflow-hidden border-4 border-purple-500 shadow-lg rotate-y-180 bg-white"
                  >
                    <img
                      src="../assets/images/personaje_constructor_2.png"
                      alt="Constructor Pose 2"
                      class="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <h3 class="font-bold text-navy group-hover:text-purple-500 transition duration-300">
                Constructor
              </h3>
              <p class="text-xs text-gray-500 font-bold uppercase tracking-wide">Ingeniería</p>
            </div>

            <!-- COMUNICÓLOGA -->
            <div class="group text-center cursor-pointer">
              <div class="relative w-32 h-32 mx-auto mb-4 perspective-1000">
                <div
                  class="relative w-full h-full transition-transform duration-700 transform-style-3d flip-card-inner"
                >
                  <div
                    class="absolute inset-0 backface-hidden rounded-full overflow-hidden border-4 border-white shadow-lg bg-slate-100"
                  >
                    <img
                      src="../assets/images/personaje_comunicologa.png"
                      alt="Comunicóloga Pose 1"
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <div
                    class="absolute inset-0 backface-hidden rounded-full overflow-hidden border-4 border-teal-500 shadow-lg rotate-y-180 bg-white"
                  >
                    <img
                      src="../assets/images/personaje_comunicologa_2.png"
                      alt="Comunicóloga Pose 2"
                      class="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <h3 class="font-bold text-navy group-hover:text-teal-500 transition duration-300">
                Comunicóloga
              </h3>
              <p class="text-xs text-gray-500 font-bold uppercase tracking-wide">Social media</p>
            </div>

            <!-- RTISTA -->
            <div class="group text-center cursor-pointer">
              <div class="relative w-32 h-32 mx-auto mb-4 perspective-1000">
                <div
                  class="relative w-full h-full transition-transform duration-700 transform-style-3d flip-card-inner"
                >
                  <div
                    class="absolute inset-0 backface-hidden rounded-full overflow-hidden border-4 border-white shadow-lg bg-slate-100"
                  >
                    <img
                      src="../assets/images/personaje_artista.png"
                      alt="Artista Pose 1"
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <div
                    class="absolute inset-0 backface-hidden rounded-full overflow-hidden border-4 border-orange-500 shadow-lg rotate-y-180 bg-white"
                  >
                    <img
                      src="../assets/images/personaje_artista_2.png"
                      alt="Artista Pose 2"
                      class="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <h3 class="font-bold text-navy group-hover:text-orange-500 transition duration-300">
                Artista
              </h3>
              <p class="text-xs text-gray-500 font-bold uppercase tracking-wide">Creatividad</p>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-8 items-stretch">
            <div
              class="bg-slate-50 border border-gray-100 rounded-3xl p-8 flex flex-col justify-center hover:shadow-lg transition duration-300"
            >
              <div class="flex items-center gap-4 mb-4">
                <div
                  class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-2xl"
                >
                  <i class="fas fa-shield-alt"></i>
                </div>
                <h3 class="text-xl font-bold text-navy">Ambiente digital seguro</h3>
              </div>
              <p class="text-gray-600 text-sm leading-relaxed mb-4">
                <strong>Tu seguridad es nuestra prioridad.</strong> En nuestros videos y materiales
                no aparecen personas reales, solo avatares digitales. Esto crea un entorno de
                aprendizaje libre de riesgos y enfocado 100% en el contenido.
              </p>
              <div class="flex gap-2 text-xs font-bold text-green-600 uppercase">
                <span class="bg-white px-2 py-1 rounded border border-green-200"
                  ><i class="fas fa-check mr-1"></i> Privacidad</span
                >
                <span class="bg-white px-2 py-1 rounded border border-green-200"
                  ><i class="fas fa-check mr-1"></i> Protección infantil</span
                >
              </div>
            </div>

            <!-- Tarjeta de Perfil Profesional -->
            <div
              class="bg-gradient-to-br from-collegeBlue to-indigo-600 text-white rounded-3xl p-8 relative overflow-hidden shadow-xl hover:shadow-2xl transition duration-300"
            >
              <div
                class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"
              ></div>

              <div class="relative z-10">
                <div class="flex items-center gap-4 mb-4">
                  <div
                    class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-navy text-2xl"
                  >
                    <i class="fas fa-id-card"></i>
                  </div>
                  <h3 class="text-blue-700 font-bold">Tu perfil profesional</h3>
                </div>
                <p class="text-blue-600 text-sm leading-relaxed mb-6">
                  Cada misión completada suma puntos a tu perfil. Alineamos tus actividades
                  favoritas con las <strong>Carreras del futuro</strong> y desarrollamos tus
                  <strong>Power Skills</strong> (Liderazgo, Resiliencia, Comunicación).
                </p>
                <a
                  href="https://soluciones-hericraft.aflip.in/ea3bf4d01b.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-block bg-white text-collegeBlue px-6 py-2 rounded-full font-bold text-sm hover:bg-collegeYellow hover:text-navy transition shadow-lg text-center"
                >
                  Descubre tu carrera ideal
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!--COLLEGE AFTER SCHOOL -->
      <section id="afterschool" class="relative py-24 px-6 overflow-hidden bg-slate-900 text-white">
        <div
          class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"
        ></div>
        <div
          class="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-navy/80 to-slate-900 pointer-events-none"
        ></div>

        <div class="max-w-7xl mx-auto relative z-10">
          <div class="text-center mb-20">
            <span
              class="inline-block py-1 px-4 rounded-full bg-collegeYellow/10 border border-collegeYellow/40 text-collegeYellow text-xs font-bold uppercase tracking-widest mb-4 animate-pulse"
            >
              🚀 Home Schooling STEAM+
            </span>
            <h2 class="text-5xl md:text-6xl font-display font-bold mb-6">
              College
              <span
                class="text-collegeOrange bg-clip-text bg-gradient-to-r from-collegeYellow to-orange-500"
                >After School</span
              >
            </h2>
            <p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              ¡Olvídate de las clases aburridas! Convertimos tu sala en un
              <strong>Laboratorio de Innovación</strong>. Recibe tu kit, conéctate a la misión y
              construye el futuro desde casa.
            </p>
          </div>

          <div class="grid lg:grid-cols-3 gap-8 mb-20">
            <div class="relative group">
              <div
                class="absolute inset-0 bg-gradient-to-r from-collegeOrange to-red-600 rounded-[2rem] blur opacity-60 group-hover:opacity-100 transition duration-500"
              ></div>

              <div
                class="relative bg-slate-800 rounded-[1.8rem] p-8 h-full flex flex-col border border-white/10 hover:border-white/20 transition transform group-hover:-translate-y-1"
              >
                <div
                  class="absolute right-8 bg-gradient-to-r from-red-500 to-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg z-20"
                >
                  LLEGA A TU PUERTA 📦
                </div>

                <div
                  class="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition duration-300 shadow-inner"
                >
                  <img src="../assets/images/college-07.png" alt="Kit físico" />
                </div>

                <h3 class="text-2xl font-bold text-white mb-3">1. Kit Físico Maker</h3>
                <p class="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                  Nada de listas de materiales imposibles. Recibe una caja con
                  <strong>electrónica, sensores y herramientas</strong> listas para crear prototipos
                  reales.
                </p>

                <!-- BOTÓN A ECOMMERCE -->
                <a
                  href="https://ecommerce.soluciones-hericraft.com/"
                  target="_blank"
                  class="w-full block bg-yellow-400 hover:bg-white text-navy font-bold py-4 rounded-xl text-center transition shadow-lg shadow-yellow-500/20 group-hover:shadow-yellow-500/40 text-sm uppercase tracking-wide"
                >
                  Pedir mi Kit Ahora <i class="fas fa-shopping-cart ml-2"></i>
                </a>
              </div>
            </div>

            <div class="relative group hover:-translate-y-2 transition duration-300">
              <div
                class="bg-slate-800/50 backdrop-blur-sm rounded-[1.8rem] p-8 h-full flex flex-col border border-white/5 hover:border-collegeBlue/50 hover:bg-slate-800 transition"
              >
                <div
                  class="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center text-collegeBlue text-3xl mb-6 group-hover:bg-blue-500/20 transition"
                >
                  <img src="../assets/images/college-08.png" alt="Misiones en platafornma" />
                </div>
                <h3 class="text-2xl font-bold text-white mb-3">2. Plataforma de Misiones</h3>
                <p class="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  El currículo se vive como un videojuego. Desbloquea niveles, gana insignias y sube
                  de rango en tu perfil profesional mientras aprendes programación y diseño.
                </p>
                <div class="border-t border-white/5 pt-4 mt-auto">
                  <ul class="text-xs text-gray-500 space-y-2 font-mono">
                    <li class="flex items-center gap-2">
                      <i class="fas fa-check text-green-400"></i> Acceso 24/7
                    </li>
                    <li class="flex items-center gap-2">
                      <i class="fas fa-check text-green-400"></i> Retos semanales
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="relative group hover:-translate-y-2 transition duration-300">
              <div
                class="bg-slate-800/50 backdrop-blur-sm rounded-[1.8rem] p-8 h-full flex flex-col border border-white/5 hover:border-purple-500/50 hover:bg-slate-800 transition"
              >
                <div
                  class="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-400 text-3xl mb-6 group-hover:bg-purple-500/20 transition"
                >
                  <img src="../assets/images/college-09.png" alt="Mentoría en vivo" />
                </div>
                <h3 class="text-2xl font-bold text-white mb-3">3. Mentoría en vivo</h3>
                <p class="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  No estás solo en el espacio. Conéctate con nuestros Mentores Expertos para
                  resolver dudas técnicas y presentar tus inventos en comunidad.
                </p>
                <div class="border-t border-white/5 pt-4 mt-auto">
                  <ul class="text-xs text-gray-500 space-y-2 font-mono">
                    <li class="flex items-center gap-2">
                      <i class="fas fa-check text-green-400"></i> Sesiones en vivo
                    </li>
                    <li class="flex items-center gap-2">
                      <i class="fas fa-check text-green-400"></i> Feedback personalizado
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Bloque de CTA para Padres (Persuasión final) -->
          <div
            class="bg-gradient-to-r from-blue-900 to-slate-900 rounded-[2rem] p-8 md:p-12 border border-blue-500/30 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl"
          >
            <!-- Decoración -->
            <div
              class="absolute -right-20 -top-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"
            ></div>

            <div class="relative z-10 max-w-xl text-left">
              <h4 class="text-3xl font-display font-bold text-white mb-4">
                ¿Papá o Mamá? <span class="text-blue-300">Este es el regalo que transforma.</span>
              </h4>
              <p class="text-blue-100 text-lg mb-6 leading-relaxed">
                Potencia el talento de tus hijos sin complicaciones de traslados. Recibe reportes de
                avance y obsérvalos desarrollar habilidades reales para la vida profesional.
              </p>
              <div class="flex flex-wrap gap-3">
                <span
                  class="flex items-center gap-2 whitespace-nowrap bg-blue-950/60 px-4 py-1.5 rounded-lg text-xs font-bold text-blue-200 border border-blue-500/30 backdrop-blur-md"
                >
                  <img src="../assets/images/college-10.png" class="w-8 h-8" />
                  Sin horarios fijos
                </span>

                <span
                  class="flex items-center gap-2 whitespace-nowrap bg-blue-950/60 px-4 py-1.5 rounded-lg text-xs font-bold text-blue-200 border border-blue-500/30 backdrop-blur-md"
                >
                  <img src="../assets/images/college-11.png" class="w-8 h-8" />
                  Ambiente seguro
                </span>
              </div>
            </div>

            <div class="relative z-10 flex-shrink-0 w-full md:w-auto">
              <a
                href="#contacto"
                class="inline-flex w-full md:w-auto items-center justify-center gap-3 bg-white text-collegeOrange font-bold px-8 py-4 rounded-full hover:bg-collegeYellow transition transform hover:scale-105 shadow-xl"
              >
                Solicitar información <i class="fas fa-paper-plane"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- EVENTOS Y FRANQUICIAS -->
      <section class="py-24 px-6 bg-white">
        <div class="max-w-6xl mx-auto">
          <div class="grid md:grid-cols-2 gap-12">
            <!-- ENCUENTRO DE GIGANTES -->
            <a
              href="encuentro.html"
              class="block bg-slate-50 rounded-3xl p-1 border border-gray-100 hover:shadow-xl transition group overflow-hidden transform hover:-translate-y-1"
            >
              <div class="p-8 pb-0">
                <div class="flex justify-between items-start mb-4">
                  <h3
                    class="text-2xl font-display font-bold text-navy group-hover:text-collegePurple transition"
                  >
                    Encuentro de Gigantes
                  </h3>
                  <div
                    class="bg-collegePurple text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide"
                  >
                    Evento Anual
                  </div>
                </div>
                <p class="text-gray-600 text-sm mb-8 leading-relaxed max-w-sm">
                  El congreso donde nuestros estudiantes exhiben sus proyectos, conectan con
                  expertos y celebran la innovación.
                </p>
                <span
                  class="inline-flex items-center gap-2 text-sm font-bold text-collegePurple uppercase tracking-wider mb-6 group-hover:gap-3 transition-all"
                  >Ver Detalles <i class="fas fa-arrow-right"></i
                ></span>
              </div>
              <div class="relative h-48 mt-4 overflow-hidden rounded-b-3xl">
                <img
                  src="../assets/images/encuentro_gigantes.jpg"
                  alt="Feria STEAM Interescolar"
                  class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent"></div>
              </div>
            </a>

            <!-- BOTONES SECUNDARIOS -->
            <div class="flex flex-col gap-6 justify-center">
              <a
                href="franquicias.html"
                class="block bg-orange-50 rounded-3xl p-8 border border-orange-100 flex items-start gap-6 hover:border-collegeOrange/50 hover:bg-orange-100/50 transition cursor-pointer group"
              >
                <div
                  class="bg-white p-3 rounded-2xl shadow-sm group-hover:scale-110 transition flex-shrink-0 flex items-center justify-center w-16 h-16"
                >
                  <img
                    src="../assets/images/logo_store_college.svg"
                    alt="Logo College"
                    class="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h4
                    class="font-bold text-navy text-xl group-hover:text-collegeOrange transition flex items-center gap-2"
                  >
                    Franquicias College
                    <i
                      class="fas fa-chevron-right text-xs opacity-0 group-hover:opacity-100 transition"
                    ></i>
                  </h4>
                  <p class="text-gray-600 text-sm mt-2 leading-relaxed">
                    Modelo llave en mano para emprendedores. Lleva la educación STEAM certificada a
                    tu comunidad.
                  </p>
                </div>
              </a>

              <a
                href="agora.html"
                class="block bg-blue-50 rounded-3xl p-8 border border-blue-100 flex items-start gap-6 hover:border-collegeBlue/50 hover:bg-blue-100/50 transition cursor-pointer group"
              >
                <!-- Contenedor del Logo -->
                <div
                  class="bg-white p-3 rounded-2xl shadow-sm group-hover:scale-110 transition flex-shrink-0 flex items-center justify-center w-16 h-16"
                >
                  <img
                    src="../assets/images/logo_agora.png"
                    alt="Logo Ágora"
                    class="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h4
                    class="font-bold text-navy text-xl group-hover:text-collegeBlue transition flex items-center gap-2"
                  >
                    Ir a Ágora
                    <i
                      class="fas fa-chevron-right text-xs opacity-0 group-hover:opacity-100 transition"
                    ></i>
                  </h4>
                  <p class="text-gray-600 text-sm mt-2 leading-relaxed">
                    ¿Eres docente? Descubre nuestra formación continua y certificación pedagógica.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="bg-slate-950 py-12 text-center text-gray-500 text-sm">
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

      <p>© 2025 Hericraft Soluciones Integrales S.A. de C.V.</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const highContrast = ref(false)
const largeText = ref(false)
const reduceMotion = ref(false)

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

/* Configuración 3D para el efecto de voltear moneda */
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

/* Disparador de la animación al pasar el mouse sobre el grupo */
.group:hover .flip-card-inner {
  transform: rotateY(180deg);
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

<template>
  <div>
    <div
      class="fixed top-0 w-full bg-dark-nav text-white z-[70] h-10 flex justify-between items-center px-4 text-[10px] sm:text-xs font-bold border-b border-gray-800"
    >
      <div class="flex gap-2 sm:gap-4 items-center">
        <span class="text-metanoiaPink hidden md:inline"
          ><i class="fas fa-universal-access"></i> ACCESIBILIDAD:</span
        >
        <button
          @click="toggleContrast"
          class="hover:text-metanoiaPink flex items-center gap-1 focus:outline-none rounded px-2 py-1 transition"
        >
          <i class="fas fa-adjust"></i> Contraste
        </button>
        <button
          @click="toggleTextSize"
          class="hover:text-metanoiaPink flex items-center gap-1 focus:outline-none rounded px-2 py-1 transition"
        >
          <i class="fas fa-text-height"></i> Texto +
        </button>
        <button
          @click="toggleMotion"
          class="hover:text-metanoiaPink flex items-center gap-1 focus:outline-none rounded px-2 py-1 transition"
        >
          <i class="fas fa-pause-circle"></i> Sin Animación
        </button>
      </div>
      <div class="flex gap-3 items-center border-l border-gray-700 pl-4">
        <button
          @click="changeLang('es')"
          class="text-metanoiaPink hover:text-white font-bold transition"
        >
          ES</button
        ><span>|</span>
        <button @click="changeLang('en')" class="text-gray-400 hover:text-metanoiaPink transition">
          EN
        </button>
      </div>
    </div>

    <!-- 2. NAVBAR PRINCIPAL -->
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

        <!-- Menú Escritorio -->
        <div class="hidden lg:flex space-x-1 items-center text-white">
          <a
            href="/"
            class="px-3 py-2 text-xs font-bold hover:text-metanoiaPink transition uppercase tracking-wide rounded-full hover:bg-white/10"
            >Inicio</a
          >
          <a
            href="/college"
            class="px-3 py-2 text-xs font-bold hover:text-collegeOrange transition uppercase tracking-wide rounded-full hover:bg-white/10"
            >College</a
          >
          <a
            href="/agora"
            class="px-3 py-2 text-xs font-bold hover:text-agoraLime transition uppercase tracking-wide rounded-full hover:bg-white/10"
            >Ágora</a
          >
          <a
            href="/metanoia"
            class="px-3 py-2 text-xs font-bold text-metanoiaPink transition uppercase tracking-wide rounded-full bg-white/10"
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
            class="ml-4 relative group px-6 py-2.5 rounded-full overflow-hidden shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <div
              class="absolute inset-0 bg-gradient-to-r from-metanoiaPink to-purple-600 transition-all duration-300 group-hover:brightness-110"
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
        <a href="/" class="block text-lg font-bold hover:text-metanoiaPink">Inicio</a>
        <a href="/college" class="block text-lg font-bold hover:text-collegeOrange">College</a>
        <a href="/agora" class="block text-lg font-bold hover:text-agoraLime">Ágora</a>
        <a href="/metanoia" class="block text-lg font-bold text-metanoiaPink">Metanoia</a>
        <a href="/processus" class="block text-lg font-bold hover:text-blue-400">Processus</a>
        <a
          href="/login"
          class="block w-full bg-white text-navy text-center py-3 rounded-full font-bold mt-4"
          >INICIAR SESIÓN</a
        >
      </div>
    </nav>

    <main class="animate-fade-in pt-28">
      <section
        class="relative bg-gradient-to-b from-white to-metanoiaLight pt-20 pb-32 px-6 overflow-hidden"
      >
        <div class="absolute inset-0 hero-pattern pointer-events-none"></div>
        <div
          class="absolute top-0 right-0 w-[600px] h-[600px] bg-metanoiaPink/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/4"
        ></div>
        <div
          class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl -translate-x-1/4 translate-y-1/4"
        ></div>

        <div class="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div class="space-y-8 animate-fade-in-up order-2 lg:order-1">
            <div
              class="inline-flex items-center gap-2 border border-metanoiaPink/30 bg-pink-50 text-metanoiaPink text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider"
            >
              <i class="fas fa-heart"></i> Ecosistema Familiar
            </div>

            <img
              src="../assets/images/logo_metanoia.png"
              alt="Logo Metanoia"
              class="h-28 w-auto mb-2 drop-shadow-sm"
            />

            <h1 class="text-5xl lg:text-6xl font-metanoia font-black text-navy leading-[1.1]">
              El hogar como <br />
              <span
                class="bg-clip-text text-pink-700"
                >Laboratorio de Vida.</span
              >
            </h1>

            <p
              class="text-xl text-gray-600 leading-relaxed border-l-4 border-metanoiaPink pl-6 font-light"
            >
              La Educación 5.0 comienza en casa. Acompañamos a
              <strong>mamás, papás, niños y jóvenes</strong> en su desarrollo integral,
              fortaleciendo mente, cuerpo y alma para un mundo digital.
            </p>

            <div class="flex flex-wrap gap-4 pt-4">
              <a
                href="#pilares"
                class="bg-metanoiaPink text-white px-8 py-4 rounded-full font-bold hover:bg-metanoiaDeep transition shadow-lg shadow-pink-200 transform hover:-translate-y-1 flex items-center gap-2"
              >
                Explorar Escuela para Padres <i class="fas fa-heart"></i>
              </a>
              <button
                class="flex items-center gap-3 px-6 py-4 rounded-full border-2 border-navy text-navy font-bold hover:bg-black hover:text-pink-700 transition shadow-lg hover:shadow-pink-500/30"
              >
                <i class="fas fa-play-circle text-xl"></i> Ver Video Manifiesto
              </button>
            </div>
          </div>

          <div class="relative order-1 lg:order-2 group">
            <div
              class="absolute inset-0 bg-gradient-to-tr from-metanoiaPink to-purple-500 rounded-[3rem] opacity-20 rotate-3 scale-95 transition-transform group-hover:rotate-1"
            ></div>
            <img
              src="../assets/images/METANOIA-01.png"
              alt="Familia Conectada y Feliz"
              class="relative rounded-[3rem] shadow-2xl border-4 border-white w-full object-cover transform transition duration-500 group-hover:-translate-y-2 h-[500px]"
            />

            <div
              class="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce-slow border-l-4 border-metanoiaPink"
            >
              <div class="bg-pink-50 p-3 rounded-full text-metanoiaPink">
                <i class="fas fa-users text-2xl"></i>
              </div>
              <div>
                <p class="font-bold text-navy text-lg">Comunidad Viva</p>
                <p class="text-xs text-gray-500">+500 Familias Transformadas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- PILARES DEL SER -->
      <section id="pilares" class="py-24 px-6 bg-white relative">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-20">
            <span class="text-metanoiaPink font-bold uppercase tracking-widest text-sm mb-2 block"
              >Modelo Integral</span
            >
            <h2 class="text-4xl font-metanoia font-black text-navy">
              4 Dimensiones del Crecimiento
            </h2>
            <p class="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
              No solo formamos estudiantes, formamos seres humanos plenos. Nuestro enfoque abarca
              todas las esferas del desarrollo personal y familiar.
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <!-- Pilar 1: Mente -->
            <div
              class="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-lg soft-shadow card-interaction group text-center relative overflow-hidden"
            >
              <div class="absolute top-0 left-0 w-full h-2 bg-pink-500"></div>
              <div
                class="w-20 h-20 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-pink-500 mb-6 text-3xl group-hover:bg-pink-500 group-hover:text-white transition duration-300"
              >
                <i class="fas fa-brain"></i>
              </div>
              <h3 class="font-bold text-navy text-xl mb-3">Mente</h3>
              <p class="text-sm text-gray-500 leading-relaxed">
                Salud mental, Mindfulness, gestión emocional y resiliencia cognitiva para padres e
                hijos.
              </p>
            </div>

            <!-- Pilar 2: Cuerpo -->
            <div
              class="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-lg soft-shadow card-interaction group text-center relative overflow-hidden"
            >
              <div class="absolute top-0 left-0 w-full h-2 bg-rose-500"></div>
              <div
                class="w-20 h-20 mx-auto bg-green-50 rounded-full flex items-center justify-center text-rose-500 mb-6 text-3xl group-hover:bg-rose-500 group-hover:text-white transition duration-300"
              >
                <i class="fas fa-heartbeat"></i>
              </div>
              <h3 class="font-bold text-navy text-xl mb-3">Cuerpo</h3>
              <p class="text-sm text-gray-500 leading-relaxed">
                Bienestar físico, nutrición consciente y hábitos saludables en la era digital.
              </p>
            </div>

            <!-- Pilar 3: Alma -->
            <div
              class="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-lg soft-shadow card-interaction group text-center relative overflow-hidden"
            >
              <div class="absolute top-0 left-0 w-full h-2 bg-fuchsia-700"></div>
              <div
                class="w-20 h-20 mx-auto bg-purple-50 rounded-full flex items-center justify-center text-fuchsia-700 mb-6 text-3xl group-hover:bg-fuchsia-700 group-hover:text-white transition duration-300"
              >
                <i class="fas fa-spa"></i>
              </div>
              <h3 class="font-bold text-navy text-xl mb-3">Alma</h3>
              <p class="text-sm text-gray-500 leading-relaxed">
                Espiritualidad, valores éticos y conexión con el propósito de vida.
              </p>
            </div>

            <!-- Pilar 4: Sociedad -->
            <div
              class="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-lg soft-shadow card-interaction group text-center relative overflow-hidden"
            >
              <div class="absolute top-0 left-0 w-full h-2 bg-purple-700"></div>
              <div
                class="w-20 h-20 mx-auto bg-orange-50 rounded-full flex items-center justify-center text-purple-700 mb-6 text-3xl group-hover:bg-purple-700 group-hover:text-white transition duration-300"
              >
                <i class="fas fa-users"></i>
              </div>
              <h3 class="font-bold text-navy text-xl mb-3">Sociedad</h3>
              <p class="text-sm text-gray-500 leading-relaxed">
                Habilidades sociales, ciudadanía digital y convivencia armónica en el entorno.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- ESCUELA PARA PADRES & HIJOS -->
      <section id="programas" class="py-24 px-6 bg-navy text-white relative overflow-hidden">
        <div
          class="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"
        ></div>

        <div class="max-w-7xl mx-auto relative z-10">
          <div
            class="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8"
          >
            <div>
              <span
                class="text-metanoiaPink font-bold uppercase tracking-widest text-sm bg-white/10 px-3 py-1 rounded-full"
                >Formación Activa</span
              >
              <h2 class="text-4xl font-metanoia font-black mt-4">Programas de Transformación</h2>
            </div>
            <div class="mt-6 md:mt-0">
              <button
                class="text-white border border-white/30 px-6 py-3 rounded-full hover:bg-white hover:text-indigo-950 transition text-sm font-bold"
              >
                Ver Calendario Completo
              </button>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-8">
            <!-- Programa 1: Padres -->
            <div
              class="bg-slate-900 rounded-3xl p-8 border border-gray-700 hover:border-metanoiaPink transition group relative overflow-hidden"
            >
              <div
                class="absolute top-0 right-0 bg-metanoiaPink text-white text-xs font-bold px-4 py-2 rounded-bl-2xl"
              >
                PARA PAPÁS
              </div>
              <div class="flex items-start gap-6">
                <img
                  src="../assets/images/METANOIA-08.png"
                  alt="Padres"
                  class="w-40 h-40 object-contain p-2 bg-white/5 rounded-2xl"
                />
                <div>
                  <h3
                    class="text-2xl font-bold text-white mb-2 group-hover:text-metanoiaPink transition"
                  >
                    Crianza Digital Consciente
                  </h3>
                  <p class="text-gray-400 text-sm mb-6 leading-relaxed">
                    Aprende a gestionar el tiempo de pantalla, la seguridad en redes y a conectar
                    emocionalmente con tus hijos nativos digitales sin perder la autoridad.
                  </p>
                  <a
                    href="#"
                    class="text-metanoiaPink font-bold text-sm uppercase tracking-wide hover:text-white transition flex items-center gap-2"
                  >
                    Ver Módulos <i class="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <!-- Programa 2: Hijos -->
            <div
              class="bg-slate-900 rounded-3xl p-8 border border-gray-700 hover:border-cyanBright transition group relative overflow-hidden"
            >
              <div
                class="absolute top-0 right-0 bg-cyanBright text-navy text-xs font-bold px-4 py-2 rounded-bl-2xl"
              >
                PARA HIJOS
              </div>
              <div class="flex items-start gap-6">
                <img
                  src="../assets/images/METANOIA-12.png"
                  alt="Hijos"
                  class="w-40 h-40 object-contain p-2 bg-white/5 rounded-2xl"
                />
                <div>
                  <h3
                    class="text-2xl font-bold text-white mb-2 group-hover:text-cyanBright transition"
                  >
                    Liderazgo & Emociones
                  </h3>
                  <p class="text-gray-400 text-sm mb-6 leading-relaxed">
                    Talleres lúdicos para niños y jóvenes enfocados en autoconocimiento, manejo de
                    frustración y desarrollo de habilidades sociales (Soft Skills).
                  </p>
                  <a
                    href="#"
                    class="text-cyanBright font-bold text-sm uppercase tracking-wide hover:text-white transition flex items-center gap-2"
                  >
                    Ver Talleres <i class="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- METODOLOGÍA PRAXIS TRAMA EN CASA -->
      <section class="py-24 px-6 bg-white relative overflow-hidden">
        <div class="max-w-7xl mx-auto relative z-10">
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div class="relative group">
              <div
                class="absolute inset-0 bg-gradient-to-tr from-metanoiaPink to-purple-500 rounded-[2rem] opacity-20 rotate-3 transform group-hover:rotate-1 transition duration-500"
              ></div>
              <img
                src="../assets/images/METANOIA-01.png"
                alt="Familia Aprendiendo Juntos"
                class="relative rounded-[2rem] shadow-2xl border-4 border-white w-full object-cover"
              />
            </div>

            <div>
              <span
                class="text-metanoiaPink font-bold uppercase tracking-widest text-sm mb-2 block bg-pink-50 w-fit px-3 py-1 rounded-full"
                >Metodología</span
              >
              <h2 class="text-4xl font-metanoia font-black text-navy mb-6">
                De Espectadores a <span class="text-metanoiaPink">Co-Tejedores</span>
              </h2>
              <p class="text-gray-600 text-lg mb-8 leading-relaxed">
                En Metanoia, aplicamos la filosofía de la <strong>PRAXIS TRAMA</strong> al hogar.
                Invitamos a la familia a dejar de ser simples observadores del proceso educativo
                para convertirse en el hilo de origen que sostiene el aprendizaje.
              </p>

              <div class="space-y-6">
                <div
                  class="flex items-start gap-4 p-4 rounded-2xl bg-metanoiaLight/50 hover:bg-metanoiaLight transition border border-pink-100"
                >
                  <div class="bg-white p-3 rounded-full shadow-sm text-metanoiaPink shrink-0">
                    <i class="fas fa-shield-alt text-xl"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-navy text-lg">Guardianes del Propósito</h4>
                    <p class="text-sm text-gray-600">
                      Ayudamos a conectar los grandes retos globales (ODSI) con los valores y la
                      vida cotidiana de la familia.
                    </p>
                  </div>
                </div>

                <div
                  class="flex items-start gap-4 p-4 rounded-2xl bg-metanoiaLight/50 hover:bg-metanoiaLight transition border border-pink-100"
                >
                  <div class="bg-white p-3 rounded-full shadow-sm text-purple-500 shrink-0">
                    <i class="fas fa-hands-helping text-xl"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-navy text-lg">Andamiaje Afectivo</h4>
                    <p class="text-sm text-gray-600">
                      Ofrecemos una "compañía amorosa" que brinda seguridad incondicional para que
                      los hijos se atrevan a explorar y equivocarse.
                    </p>
                  </div>
                </div>

                <div
                  class="flex items-start gap-4 p-4 rounded-2xl bg-metanoiaLight/50 hover:bg-metanoiaLight transition border border-pink-100"
                >
                  <div class="bg-white p-3 rounded-full shadow-sm text-cyanBright shrink-0">
                    <i class="fas fa-comments text-xl"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-navy text-lg">El Ágora Familiar</h4>
                    <p class="text-sm text-gray-600">
                      Instauramos rituales de diálogo en casa para compartir aprendizajes, dudas y
                      sueños sin la presión de las calificaciones.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- TRÍADA EDUCATIVA -->
      <section class="py-24 px-6 bg-metanoiaLight relative overflow-hidden">
        <div
          class="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30"
        >
          <div
            class="w-[800px] h-[800px] border border-metanoiaPink rounded-full animate-pulse-slow"
          ></div>
          <div class="w-[600px] h-[600px] border border-navy rounded-full absolute"></div>
        </div>

        <div class="max-w-5xl mx-auto text-center relative z-10">
          <h2 class="text-3xl font-bold text-navy mb-6">El Eslabón que une el Universo</h2>
          <p class="text-gray-600 mb-16 max-w-3xl mx-auto text-lg">
            Metanoia no trabaja sola. Somos el pegamento que asegura que lo aprendido en la escuela
            (College) y guiado por el maestro (Ágora) se consolide en el hogar.
          </p>

          <div class="grid md:grid-cols-3 gap-8 items-center">
            <div
              class="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition transform hover:-translate-y-2 opacity-80 hover:opacity-100"
            >
              <img
                src="../assets/images/METANOIA-12-1.png"
                alt="College"
                class="h-18 w-auto mx-auto mb-4 grayscale hover:grayscale-0 transition"
              />
              <h4 class="font-bold text-navy text-lg">El Alumno</h4>
              <p class="text-xs text-gray-500">Recibe educación académica.</p>
            </div>

            <div
              class="bg-white p-10 rounded-[2.5rem] shadow-2xl border-2 border-metanoiaPink relative z-20 transform scale-110"
            >
              <div
                class="absolute -top-5 left-1/2 -translate-x-1/2 bg-metanoiaPink text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg"
              >
                CONEXIÓN VITAL
              </div>
              <img
                src="../assets/images/METANOIA-13.png"
                alt="Metanoia"
                class="h-18 w-auto mx-auto mb-6"
              />
              <h4 class="font-bold text-metanoiaPink text-2xl">La Familia</h4>
              <p class="text-sm text-gray-600 mt-2">Soporte emocional y valoral.</p>
            </div>

            <div
              class="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition transform hover:-translate-y-2 opacity-80 hover:opacity-100"
            >
              <img
                src="../assets/images/METANOIA-14.png"
                alt="Ágora"
                class="h-18 w-auto mx-auto mb-4 grayscale hover:grayscale-0 transition"
              />
              <h4 class="font-bold text-navy text-lg">El Docente</h4>
              <p class="text-xs text-gray-500">Guía el proceso pedagógico.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="py-24 px-6 bg-white text-center">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-4xl font-metanoia font-black text-navy mb-8">
            ¿Listo para fortalecer tu núcleo familiar?
          </h2>
          <div class="flex justify-center">
            <button
              class="bg-metanoiaPink text-white px-10 py-4 rounded-full font-bold hover:bg-navy transition shadow-xl shadow-pink-200 text-lg"
            >
              Suscribirme a Metanoia
            </button>
          </div>
        </div>
      </section>
    </main>

    <!-- FOOTER -->
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
      <p>© 2025 Hericraft Soluciones Integrales S.A. de C.V. - Ecosistema Metanoia</p>
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
.bg-dark-nav {
  background-color: #0a0e17;
}
.bg-metanoiaLight {
  background-color: #fff0f5;
}
.bg-metanoiaDeep {
  background-color: #880038;
}
.text-metanoiaPink {
  color: #d5005f;
}
.bg-metanoiaPink {
  background-color: #d5005f;
}
.bg-navy {
  background-color: #0a1931;
}
.text-collegeOrange {
  color: #ff6b35;
}
.text-agoraLime {
  color: #8dc63f;
}
.text-cyanBright {
  color: #00c2ff;
}
.bg-cyanBright {
  background-color: #00c2ff;
}

.hero-pattern {
  background-image:
    radial-gradient(#d5005f 0.5px, transparent 0.5px), radial-gradient(#0a1931 0.5px, #ffffff 0.5px);
  background-size: 24px 24px;
  background-position:
    0 0,
    12px 12px;
  opacity: 0.1;
}

.soft-shadow {
  box-shadow: 0 20px 40px -10px rgba(213, 0, 95, 0.15);
}

.card-interaction {
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.card-interaction:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 30px -10px rgba(213, 0, 95, 0.25);
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

.font-metanoia {
  font-family: 'Reddit Sans', sans-serif;
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

@keyframes pulse-slow {
  0%,
  100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse-slow {
  animation: pulse-slow 4s infinite;
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

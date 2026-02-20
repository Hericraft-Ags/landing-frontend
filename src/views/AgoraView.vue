<template>
  <div>
    <div
      class="fixed top-0 w-full bg-dark-nav text-white z-[70] h-10 flex justify-between items-center px-4 text-[10px] sm:text-xs font-bold border-b border-gray-800"
    >
      <div class="flex gap-2 sm:gap-4 items-center">
        <span class="text-white hidden md:inline"
          ><i class="fas fa-universal-access"></i> ACCESIBILIDAD:</span
        >
        <button
          @click="toggleContrast"
          class="hover:text-gray-200 flex items-center gap-1 focus:outline-none rounded px-2 py-1 transition"
        >
          <i class="fas fa-adjust"></i> Contraste
        </button>
        <button
          @click="toggleTextSize"
          class="hover:text-gray-200 flex items-center gap-1 focus:outline-none rounded px-2 py-1 transition"
        >
          <i class="fas fa-text-height"></i> Texto +
        </button>
        <button
          @click="toggleMotion"
          class="hover:text-gray-200 flex items-center gap-1 focus:outline-none rounded px-2 py-1 transition"
        >
          <i class="fas fa-pause-circle"></i> Sin Animación
        </button>
      </div>
      <div class="flex gap-3 items-center border-l border-gray-700 pl-4">
        <button
          @click="changeLang('es')"
          class="text-white hover:text-gray-200 font-bold transition"
        >
          ES</button
        ><span>|</span>
        <button @click="changeLang('en')" class="text-gray-400 hover:text-white transition">
          EN
        </button>
      </div>
    </div>

    <nav
      class="fixed top-10 w-full bg-dark-nav backdrop-blur-md border-b border-gray-800 z-50 h-20 transition-all shadow-sm"
    >
      <div class="max-w-7xl mx-auto px-4 h-full flex justify-between items-center">
        <a href="/" class="flex-shrink-0 cursor-pointer hover:opacity-80 transition">
          <img
            src="../assets/images/logos/logo_hericraft.png"
            alt="Hericraft Logo"
            class="h-10 w-auto"
          />
        </a>

        <div class="hidden lg:flex space-x-1 items-center text-white">
          <a
            href="/"
            class="px-3 py-2 text-xs font-bold hover:text-agoraLime transition uppercase tracking-wide rounded-full hover:bg-white/10"
            >Inicio</a
          >
          <a
            href="/college"
            class="px-3 py-2 text-xs font-bold hover:text-collegeOrange transition uppercase tracking-wide rounded-full hover:bg-white/10"
            >College</a
          >
          <a
            href="/agora"
            class="px-3 py-2 text-xs font-bold text-agoraLime transition uppercase tracking-wide rounded-full bg-white/10"
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

          <a
            href="/login"
            class="ml-4 relative group px-6 py-2.5 rounded-full overflow-hidden shadow-lg shadow-lime-500/20 hover:shadow-lime-500/40 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <div
              class="absolute inset-0 bg-gradient-to-r from-agoraLime to-green-700 transition-all duration-300 group-hover:brightness-110"
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

      <div
        id="mobile-menu"
        class="hidden lg:hidden bg-dark-nav border-t border-gray-800 absolute w-full left-0 top-20 shadow-2xl p-6 space-y-4 h-[calc(100vh-80px)] z-40 overflow-y-auto pb-32 text-white"
      >
        <a href="/" class="block text-lg font-bold hover:text-gray-400">Inicio</a>
        <a href="/college" class="block text-lg font-bold hover:text-collegeOrange">College</a>
        <a href="/agora" class="block text-lg font-bold text-gray-400">Ágora</a>
        <a href="/metanoia" class="block text-lg font-bold hover:text-pink-400">Metanoia</a>
        <a href="/processus" class="block text-lg font-bold hover:text-blue-400">Processus</a>
        <a
          href="/login"
          class="block w-52 bg-white text-navy text-center py-3 rounded-full font-bold mt-4"
          >INICIAR SESIÓN</a
        >
      </div>
    </nav>

    <main class="animate-fade-in pt-28">
      <section
        class="relative bg-gradient-to-b from-agoraDark to-oxfordGray pt-20 pb-28 px-6 overflow-hidden text-white"
      >
        <div class="absolute inset-0 hero-pattern pointer-events-none"></div>
        <div
          class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-agoraLime/10 rounded-full blur-3xl translate-y-1/3 translate-x-1/4"
        ></div>

        <div class="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div class="space-y-8 animate-fade-in-up">
            <div
              class="inline-flex items-center gap-2 border border-agoraLime bg-agoraLime/10 text-agoraLime text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider"
            >
              <i class="fas fa-chalkboard-teacher"></i> FORMACIÓN CONTINUA 5.0
            </div>

            <img
              src="../assets/images/logo_agora.png"
              alt="Logo Ágora"
              class="h-40 w-auto mb-2 drop-shadow-sm brightness-200"
            />

            <h1 class="text-5xl lg:text-6xl font-agora font-black text-white leading-tight">
              Evoluciona tu <br />
              <span class="text-agoraLime">Perfil Docente.</span>
            </h1>

            <p
              class="text-xl text-gray-300 leading-relaxed border-l-4 border-agoraLime pl-6 font-light"
            >
              El mundo cambió, la educación también.
              <strong class="text-white"
                >Ágora te prepara con las habilidades técnicas y humanas</strong
              >
              que las escuelas de vanguardia exigen hoy. Certifícate y lidera el aula del futuro.
            </p>

            <div class="flex flex-wrap gap-4 pt-2">
              <a
                href="#oferta"
                class="bg-agoraLime text-agoraDark px-8 py-4 rounded-full font-bold hover:bg-white transition shadow-lg hover:shadow-lime-500/30 transform hover:-translate-y-1 flex items-center gap-2"
              >
                Ver especialidades <i class="fas fa-arrow-down"></i>
              </a>
              <button
                class="flex items-center gap-3 px-6 py-4 rounded-full border-2 border-gray-500 text-gray-300 font-bold hover:border-white hover:text-white transition"
              >
                <i class="fas fa-play-circle text-xl"></i> Conocer modelo
              </button>
            </div>
          </div>

          <div class="relative hidden lg:flex items-center justify-center h-[500px]">
            <div class="relative z-10">
              <img
                src="../assets/images/hero_agora_network.png"
                alt="Red Docente Conectada"
                class="w-full max-w-md object-contain drop-shadow-2xl animate-pulse-slow grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition duration-700"
              />
            </div>
            <div
              class="absolute border border-agoraLime/20 rounded-full w-[400px] h-[400px] animate-spin-slow"
            ></div>
            <div
              class="absolute border border-white/5 rounded-full w-[600px] h-[600px] animate-spin-slow"
              style="animation-direction: reverse"
            ></div>
          </div>
        </div>
      </section>

      <section id="nucleo" class="py-24 px-6 bg-gray-50">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <span class="text-agoraLime font-bold uppercase tracking-widest text-sm mb-2 block"
              >FUNDAMENTOS ESCENCIALES</span
            >
            <h2 class="text-4xl font-agora font-black text-oxfordGray">El kernel pedagógico</h2>
            <p class="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
              Nivelamos el terreno con los fundamentos universales de la docencia, actualizados para
              la era digital y la Educación 5.0.
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              class="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-agoraLime transition group text-center card-hover"
            >
              <div
                class="w-16 h-16 mx-auto bg-gray-100 rounded-2xl flex items-center justify-center text-oxfordGray mb-6 text-3xl group-hover:bg-agoraLime group-hover:text-white transition transform group-hover:rotate-6"
              >
                <i class="fas fa-globe-americas"></i>
              </div>
              <h3 class="font-bold text-oxfordGray mb-2 text-lg">Modelos globales</h3>
              <p class="text-sm text-gray-500">Tendencias educativas internacionales comparadas.</p>
            </div>
            <div
              class="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-agoraLime transition group text-center card-hover"
            >
              <div
                class="w-16 h-16 mx-auto bg-gray-100 rounded-2xl flex items-center justify-center text-oxfordGray mb-6 text-3xl group-hover:bg-agoraLime group-hover:text-white transition transform group-hover:rotate-6"
              >
                <i class="fas fa-brain"></i>
              </div>
              <h3 class="font-bold text-oxfordGray mb-2 text-lg">Neurociencia</h3>
              <p class="text-sm text-gray-500">Cómo aprende el cerebro en la era digital.</p>
            </div>
            <div
              class="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-agoraLime transition group text-center card-hover"
            >
              <div
                class="w-16 h-16 mx-auto bg-gray-100 rounded-2xl flex items-center justify-center text-oxfordGray mb-6 text-3xl group-hover:bg-agoraLime group-hover:text-white transition transform group-hover:rotate-6"
              >
                <i class="fas fa-tools"></i>
              </div>
              <h3 class="font-bold text-oxfordGray mb-2 text-lg">Metodologías ágiles</h3>
              <p class="text-sm text-gray-500">ABP, Flipped Classroom y Design Thinking.</p>
            </div>
            <div
              class="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-agoraLime transition group text-center card-hover"
            >
              <div
                class="w-16 h-16 mx-auto bg-gray-100 rounded-2xl flex items-center justify-center text-oxfordGray mb-6 text-3xl group-hover:bg-agoraLime group-hover:text-white transition transform group-hover:rotate-6"
              >
                <i class="fas fa-pencil-ruler"></i>
              </div>
              <h3 class="font-bold text-oxfordGray mb-2 text-lg">Diseño curricular</h3>
              <p class="text-sm text-gray-500">Planeación estratégica y evaluación formativa.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="py-24 px-6 bg-navy text-white relative overflow-hidden">
        <div class="absolute inset-0 opacity-20 pointer-events-none">
          <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="rgba(141, 198, 63, 0.3)"
                  stroke-width="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div class="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span
              class="text-agoraLime font-bold uppercase tracking-widest text-sm mb-4 block bg-white/10 w-fit px-3 py-1 rounded-full border border-agoraLime/30"
            >
              <i class="fas fa-microchip mr-2"></i> Hericraft Tools
            </span>
            <h2 class="text-4xl md:text-5xl font-agora font-black mb-6 leading-tight">
              Tu perfil docente <br />
              <span
                class="text-transparent bg-clip-text bg-gradient-to-r from-agoraLime to-green-400"
                >tejido con Inteligencia Artificial</span
              >
            </h2>
            <p class="text-gray-300 text-lg mb-8 leading-relaxed">
              Olvídate de los CV estáticos. Ágora construye tu
              <strong>Mapa Curricular Neuronal</strong> en tiempo real. Nuestra IA analiza tu
              desempeño, detecta brechas en tus "Power Skills" y sugiere la ruta de formación exacta
              que necesitas para evolucionar.
            </p>
            <ul class="space-y-6">
              <li class="flex items-start gap-4">
                <div
                  class="bg-agoraLime/20 p-3 rounded-xl text-agoraLime border border-agoraLime/30"
                >
                  <i class="fas fa-project-diagram text-xl"></i>
                </div>
                <div>
                  <h4 class="font-bold text-white text-lg">Diagnóstico dinámico</h4>
                  <p class="text-sm text-gray-400">Evalúa tus competencias 5.0 continuamente.</p>
                </div>
              </li>
              <li class="flex items-start gap-4">
                <div
                  class="bg-cyanBright/20 p-3 rounded-xl text-cyanBright border border-cyanBright/30"
                >
                  <i class="fas fa-robot text-xl"></i>
                </div>
                <div>
                  <h4 class="font-bold text-white text-lg">Mentoría IA 24/7</h4>
                  <p class="text-sm text-gray-400">
                    Recibe recomendaciones personalizadas de recursos.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div class="relative group perspective-1000">
            <div
              class="absolute -inset-1 bg-gradient-to-r from-agoraLime to-cyanBright rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition duration-1000 animate-pulse-slow"
            ></div>

            <div
              class="relative bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden shadow-2xl p-6 transform transition-transform duration-500 group-hover:scale-[1.01]"
            >
              <div class="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                <div class="flex items-center gap-4">
                  <div class="relative">
                    <div
                      class="w-12 h-12 rounded-full bg-gray-800 overflow-hidden border-2 border-agoraLime shadow-[0_0_10px_rgba(141,198,63,0.5)]"
                    >
                      <img
                        src="https://placehold.co/100x100/333/fff?text=Prof"
                        alt="Avatar"
                        class="w-full h-full object-cover"
                      />
                    </div>
                    <div
                      class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-900"
                    ></div>
                  </div>
                  <div>
                    <p class="text-white font-bold text-sm tracking-wide">Prof. Alejandro M.</p>
                    <div class="flex items-center gap-2">
                      <span
                        class="text-[10px] bg-white/5 px-2 py-0.5 rounded text-gray-300 border border-white/10"
                        >Nivel 3</span
                      >
                      <span class="text-agoraLime text-xs font-bold shadow-green-glow"
                        >Especialista</span
                      >
                    </div>
                  </div>
                </div>
                <div class="text-right">
                  <p class="text-gray-500 text-[10px] uppercase tracking-widest mb-1">
                    Skills Score
                  </p>
                  <div
                    class="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyanBright to-blue-500"
                  >
                    94
                  </div>
                </div>
              </div>

              <div
                class="relative h-72 w-full bg-slate-950 rounded-xl mb-6 flex items-center justify-center overflow-hidden border border-white/5 shadow-inner"
              >
                <div
                  class="absolute inset-0 opacity-10"
                  style="
                    background-image:
                      linear-gradient(#333 1px, transparent 1px),
                      linear-gradient(90deg, #333 1px, transparent 1px);
                    background-size: 20px 20px;
                  "
                ></div>

                <div class="relative w-full h-full">
                  <div
                    class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 group-hover:scale-110 transition-transform duration-500"
                  >
                    <div class="relative flex items-center justify-center">
                      <div
                        class="w-16 h-16 rounded-full bg-navy border-2 border-white/20 flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                      >
                        <i class="fas fa-user-astronaut text-white text-2xl"></i>
                      </div>
                      <div class="absolute inset-0 rounded-full bg-white/10 animate-ping"></div>
                      <div
                        class="absolute -inset-4 rounded-full border border-white/5 animate-spin-slow"
                      ></div>
                    </div>
                  </div>

                  <div
                    class="absolute top-[20%] left-[20%] z-10 hover:z-30 group/node cursor-pointer"
                  >
                    <div class="relative flex flex-col items-center">
                      <div
                        class="w-10 h-10 rounded-full bg-navy border border-agoraLime flex items-center justify-center shadow-[0_0_15px_rgba(141,198,63,0.4)] group-hover/node:bg-agoraLime transition-colors duration-300"
                      >
                        <i
                          class="fas fa-brain text-agoraLime text-sm group-hover/node:text-navy"
                        ></i>
                      </div>
                      <div
                        class="absolute -top-8 bg-agoraLime text-navy text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover/node:opacity-100 transition-opacity -translate-y-2 group-hover/node:translate-y-0 duration-300 whitespace-nowrap"
                      >
                        Neurociencia: 85%
                      </div>
                    </div>
                  </div>

                  <div
                    class="absolute bottom-[25%] right-[20%] z-10 hover:z-30 group/node cursor-pointer"
                  >
                    <div class="relative flex flex-col items-center">
                      <div
                        class="w-10 h-10 rounded-full bg-navy border border-cyanBright flex items-center justify-center shadow-[0_0_15px_rgba(0,194,255,0.4)] group-hover/node:bg-cyanBright transition-colors duration-300"
                      >
                        <i
                          class="fas fa-vr-cardboard text-cyanBright text-sm group-hover/node:text-navy"
                        ></i>
                      </div>
                      <div
                        class="absolute -bottom-8 bg-cyanBright text-navy text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover/node:opacity-100 transition-opacity translate-y-2 group-hover/node:translate-y-0 duration-300 whitespace-nowrap"
                      >
                        Ambientes virtuales: 75%
                      </div>
                    </div>
                  </div>

                  <div
                    class="absolute top-[25%] right-[25%] z-10 hover:z-30 group/node cursor-pointer"
                  >
                    <div class="relative flex flex-col items-center">
                      <div
                        class="w-8 h-8 rounded-full bg-navy border border-purple-500 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.4)] group-hover/node:bg-purple-500 transition-colors duration-300"
                      >
                        <i
                          class="fas fa-chart-line text-purple-500 text-xs group-hover/node:text-white"
                        ></i>
                      </div>
                    </div>
                  </div>

                  <div
                    class="absolute bottom-[30%] left-[25%] z-10 hover:z-30 group/node cursor-pointer"
                  >
                    <div class="relative flex flex-col items-center">
                      <div
                        class="w-8 h-8 rounded-full bg-navy border border-orange-500 flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.4)] group-hover/node:bg-orange-500 transition-colors duration-300"
                      >
                        <i
                          class="fas fa-balance-scale text-orange-500 text-xs group-hover/node:text-white"
                        ></i>
                      </div>
                    </div>
                  </div>

                  <svg class="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                    <defs>
                      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color: #8dc63f; stop-opacity: 0" />
                        <stop offset="50%" style="stop-color: #8dc63f; stop-opacity: 1" />
                        <stop offset="100%" style="stop-color: #00c2ff; stop-opacity: 0" />
                      </linearGradient>
                    </defs>

                    <line
                      x1="50%"
                      y1="50%"
                      x2="22%"
                      y2="22%"
                      stroke="rgba(141, 198, 63, 0.4)"
                      stroke-width="1"
                    />
                    <circle r="2" fill="#8DC63F">
                      <animateMotion dur="2s" repeatCount="indefinite" path="M 250 144 L 110 64" />
                    </circle>

                    <line
                      x1="50%"
                      y1="50%"
                      x2="78%"
                      y2="73%"
                      stroke="rgba(0, 194, 255, 0.4)"
                      stroke-width="1"
                    />
                    <line
                      x1="50%"
                      y1="50%"
                      x2="73%"
                      y2="27%"
                      stroke="rgba(168, 85, 247, 0.4)"
                      stroke-width="1"
                      stroke-dasharray="4"
                    />
                    <line
                      x1="50%"
                      y1="50%"
                      x2="27%"
                      y2="68%"
                      stroke="rgba(249, 115, 22, 0.4)"
                      stroke-width="1"
                    />
                  </svg>
                </div>

                <div
                  class="absolute bottom-4 left-4 bg-navy/80 backdrop-blur px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2"
                >
                  <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span class="text-[10px] text-gray-300 font-mono">AI Analysis: OPTIMAL</span>
                </div>
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div
                  class="bg-white/5 rounded-xl p-3 border border-white/5 hover:bg-white/10 transition"
                >
                  <p class="text-[10px] text-gray-400 mb-1">Próxima Meta</p>
                  <div class="flex justify-between items-center">
                    <span class="text-white font-bold text-xs">Master IA</span>
                    <i class="fas fa-chevron-right text-xs text-agoraLime"></i>
                  </div>
                  <div class="w-full bg-gray-700 h-1 mt-2 rounded-full overflow-hidden">
                    <div class="bg-agoraLime h-full" style="width: 75%"></div>
                  </div>
                </div>
                <div
                  class="bg-white/5 rounded-xl p-3 border border-white/5 hover:bg-white/10 transition"
                >
                  <p class="text-[10px] text-gray-400 mb-1">Badges Ganados</p>
                  <div class="flex items-center gap-1">
                    <i class="fas fa-medal text-yellow-500"></i>
                    <span class="text-white font-bold text-lg">12</span>
                    <span class="text-[10px] text-green-400 ml-auto">+2 este mes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="oferta" class="py-24 px-6 bg-oxfordGray relative overflow-hidden">
        <div
          class="absolute inset-0 opacity-10"
          style="
            background-image: radial-gradient(#ffffff 1px, transparent 1px);
            background-size: 40px 40px;
          "
        ></div>

        <div class="max-w-7xl mx-auto relative z-10">
          <div class="mb-16 text-center md:text-left">
            <span class="text-agoraLime font-bold uppercase tracking-widest text-sm mb-2 block"
              >Rutas de Especialización</span
            >
            <h2 class="text-4xl font-agora font-black text-white">
              Las 5 Galaxias de Conocimiento
            </h2>
            <p class="text-gray-400 mt-4 max-w-3xl text-lg leading-relaxed">
              No basta con saber enseñar; el docente 5.0 domina múltiples dimensiones. Hemos
              estructurado nuestra oferta en 5 "Galaxias" que responden a los desafíos críticos de
              la educación actual.
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-8">
            <div
              class="bg-agoraDark rounded-2xl p-8 shadow-lg border border-gray-700 hover:border-pink-500 transition group relative overflow-hidden"
            >
              <div
                class="absolute top-0 right-0 w-24 h-24 bg-pink-500/10 rounded-full blur-2xl -mr-8 -mt-8"
              ></div>
              <div class="flex items-start justify-between mb-6">
                <div>
                  <h3
                    class="text-2xl font-agora font-bold text-white group-hover:text-pink-500 transition"
                  >
                    Pedagogía & Neurociencia
                  </h3>
                  <span class="text-xs font-bold text-pink-400 uppercase tracking-wide mt-1 block"
                    >El Software Humano</span
                  >
                </div>
                <div class="bg-pink-500/20 p-3 rounded-xl">
                  <i class="fas fa-brain text-pink-500 text-2xl"></i>
                </div>
              </div>

              <div class="space-y-4 mb-8">
                <div>
                  <p class="text-[10px] text-gray-500 uppercase font-bold mb-1">El Reto:</p>
                  <p class="text-sm text-gray-300">
                    Aulas diversas con estudiantes que tienen ritmos de aprendizaje y necesidades
                    neurológicas únicas (TDAH, altas capacidades).
                  </p>
                </div>
                <div>
                  <p class="text-[10px] text-gray-500 uppercase font-bold mb-1">El Objetivo:</p>
                  <p class="text-sm text-gray-300">
                    Dominar la <strong>neurodidáctica</strong> para diseñar experiencias de
                    aprendizaje inclusivas y emocionalmente inteligentes.
                  </p>
                </div>
              </div>

              <a
                href="#"
                class="inline-flex items-center text-xs font-bold text-pink-500 hover:text-white transition uppercase tracking-wide border-b border-pink-500/30 pb-1 hover:border-white"
              >
                Explorar Cursos <i class="fas fa-arrow-right ml-2"></i>
              </a>
            </div>

            <div
              class="bg-agoraDark rounded-2xl p-8 shadow-lg border border-gray-700 hover:border-purple-500 transition group relative overflow-hidden"
            >
              <div
                class="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl -mr-8 -mt-8"
              ></div>
              <div class="flex items-start justify-between mb-6">
                <div>
                  <h3
                    class="text-2xl font-agora font-bold text-white group-hover:text-purple-500 transition"
                  >
                    Gestión & Liderazgo
                  </h3>
                  <span class="text-xs font-bold text-purple-400 uppercase tracking-wide mt-1 block"
                    >El Hardware Operativo</span
                  >
                </div>
                <div class="bg-purple-500/20 p-3 rounded-xl">
                  <i class="fas fa-gavel text-purple-500 text-2xl"></i>
                </div>
              </div>

              <div class="space-y-4 mb-8">
                <div>
                  <p class="text-[10px] text-gray-500 uppercase font-bold mb-1">El Reto:</p>
                  <p class="text-sm text-gray-300">
                    Instituciones educativas que requieren modelos de negocio sostenibles,
                    cumplimiento legal y liderazgo ágil.
                  </p>
                </div>
                <div>
                  <p class="text-[10px] text-gray-500 uppercase font-bold mb-1">El Objetivo:</p>
                  <p class="text-sm text-gray-300">
                    Formar directivos capaces de gestionar <strong>escuelas innovadoras</strong>,
                    entender marcos legales (RVOE) y liderar equipos.
                  </p>
                </div>
              </div>

              <a
                href="#"
                class="inline-flex items-center text-xs font-bold text-purple-500 hover:text-white transition uppercase tracking-wide border-b border-purple-500/30 pb-1 hover:border-white"
              >
                Explorar Cursos <i class="fas fa-arrow-right ml-2"></i>
              </a>
            </div>

            <div
              class="bg-agoraDark rounded-2xl p-8 shadow-lg border border-gray-700 hover:border-cyanBright transition group relative overflow-hidden"
            >
              <div
                class="absolute top-0 right-0 w-24 h-24 bg-cyanBright/10 rounded-full blur-2xl -mr-8 -mt-8"
              ></div>
              <div class="flex items-start justify-between mb-6">
                <div>
                  <h3
                    class="text-2xl font-agora font-bold text-white group-hover:text-cyanBright transition"
                  >
                    Tech & IA Educativa
                  </h3>
                  <span class="text-xs font-bold text-cyan-400 uppercase tracking-wide mt-1 block"
                    >El Sistema Operativo</span
                  >
                </div>
                <div class="bg-cyanBright/20 p-3 rounded-xl">
                  <i class="fas fa-robot text-cyanBright text-2xl"></i>
                </div>
              </div>

              <div class="space-y-4 mb-8">
                <div>
                  <p class="text-[10px] text-gray-500 uppercase font-bold mb-1">El Reto:</p>
                  <p class="text-sm text-gray-300">
                    La obsolescencia digital y la irrupción de la Inteligencia Artificial que
                    transforma cómo enseñamos y evaluamos.
                  </p>
                </div>
                <div>
                  <p class="text-[10px] text-gray-500 uppercase font-bold mb-1">El Objetivo:</p>
                  <p class="text-sm text-gray-300">
                    Convertirte en un experto en <strong>EdTech e IA</strong>, utilizando
                    herramientas digitales para personalizar y potenciar el aprendizaje.
                  </p>
                </div>
              </div>

              <a
                href="#"
                class="inline-flex items-center text-xs font-bold text-cyanBright hover:text-white transition uppercase tracking-wide border-b border-cyanBright/30 pb-1 hover:border-white"
              >
                Explorar Cursos <i class="fas fa-arrow-right ml-2"></i>
              </a>
            </div>

            <div
              class="bg-agoraDark rounded-2xl p-8 shadow-lg border border-gray-700 hover:border-collegeOrange transition group relative overflow-hidden"
            >
              <div
                class="absolute top-0 right-0 w-24 h-24 bg-collegeOrange/10 rounded-full blur-2xl -mr-8 -mt-8"
              ></div>
              <div class="flex items-start justify-between mb-6">
                <div>
                  <h3
                    class="text-2xl font-agora font-bold text-white group-hover:text-collegeOrange transition"
                  >
                    Espacio & Entorno
                  </h3>
                  <span class="text-xs font-bold text-orange-400 uppercase tracking-wide mt-1 block"
                    >El Hardware Físico</span
                  >
                </div>
                <div class="bg-collegeOrange/20 p-3 rounded-xl">
                  <i class="fas fa-cubes text-collegeOrange text-2xl"></i>
                </div>
              </div>

              <div class="space-y-4 mb-8">
                <div>
                  <p class="text-[10px] text-gray-500 uppercase font-bold mb-1">El Reto:</p>
                  <p class="text-sm text-gray-300">
                    Aulas tradicionales "caja de zapatos" que limitan la creatividad, el movimiento
                    y la colaboración.
                  </p>
                </div>
                <div>
                  <p class="text-[10px] text-gray-500 uppercase font-bold mb-1">El Objetivo:</p>
                  <p class="text-sm text-gray-300">
                    Aplicar principios de <strong>Neuroarquitectura</strong> para transformar
                    cualquier espacio físico o virtual en un tercer maestro.
                  </p>
                </div>
              </div>

              <a
                href="#"
                class="inline-flex items-center text-xs font-bold text-collegeOrange hover:text-white transition uppercase tracking-wide border-b border-collegeOrange/30 pb-1 hover:border-white"
              >
                Explorar Cursos <i class="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>

          <div
            class="mt-8 bg-gradient-to-r from-agoraDark to-gray-800 rounded-2xl p-8 shadow-xl border border-gray-700 hover:border-agoraLime transition group relative overflow-hidden"
          >
            <div
              class="absolute inset-0 bg-agoraLime/5 opacity-0 group-hover:opacity-100 transition duration-500"
            ></div>
            <div class="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
              <div class="bg-agoraLime/20 p-4 rounded-2xl shrink-0">
                <i class="fas fa-users text-agoraLime text-4xl"></i>
              </div>
              <div class="flex-grow">
                <div class="flex items-center gap-3 mb-2">
                  <h3
                    class="text-2xl font-agora font-bold text-white group-hover:text-agoraLime transition"
                  >
                    Sociedad & Futuro
                  </h3>
                  <span
                    class="bg-agoraLime/20 text-agoraLime text-[10px] font-bold px-3 py-1 rounded-full border border-agoraLime/30 uppercase"
                    >Propósito Superior</span
                  >
                </div>
                <p class="text-gray-300 text-sm leading-relaxed max-w-2xl">
                  <strong>Reto:</strong> La crisis de valores, la desinformación y la desconexión
                  social en un mundo hiperconectado. <br />
                  <strong>Objetivo:</strong> Formar ciudadanos globales con ética digital,
                  pensamiento crítico y compromiso con la sostenibilidad (ODS).
                </p>
              </div>
              <a
                href="#"
                class="bg-agoraLime text-navy px-6 py-3 rounded-full font-bold text-sm hover:bg-white transition shadow-lg shrink-0"
              >
                Ver Programas Éticos
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="py-24 px-6 bg-white relative overflow-hidden">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <span
              class="text-agoraLime font-bold uppercase tracking-widest text-sm bg-gray-100 px-4 py-1 rounded-full"
              >Validez Oficial & Blockchain</span
            >
            <h2 class="text-4xl font-agora font-black text-navy mt-4">
              Tus Logros, Certificados y Seguros
            </h2>
            <p class="text-gray-600 mt-4 max-w-3xl mx-auto text-lg">
              En Ágora, cada habilidad cuenta. Obtén certificaciones con tecnología blockchain
              imposibles de falsificar y Badges digitales compatibles con LinkedIn y CVs
              inteligentes.
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div
              class="relative bg-gray-50 border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition group overflow-hidden"
            >
              <div
                class="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -mr-10 -mt-10"
              ></div>
              <div class="flex items-center gap-4 mb-6">
                <div class="bg-white p-3 rounded-xl shadow-sm">
                  <i class="fas fa-link text-3xl text-blue-600"></i>
                </div>
                <h3 class="text-2xl font-bold text-navy">Blockchain Certified</h3>
              </div>
              <p class="text-gray-600 text-sm mb-6">
                Tus diplomas están asegurados en la cadena de bloques. Portabilidad total,
                verificación instantánea y seguridad de grado bancario.
              </p>
              <div class="flex gap-3">
                <span
                  class="px-3 py-1 bg-white border border-gray-200 rounded text-xs font-mono text-gray-500"
                  ><i class="fas fa-check-circle text-green-500 mr-1"></i> Verificable</span
                >
                <span
                  class="px-3 py-1 bg-white border border-gray-200 rounded text-xs font-mono text-gray-500"
                  ><i class="fas fa-share-alt text-blue-500 mr-1"></i> Compartible</span
                >
              </div>
            </div>

            <div
              class="relative bg-gray-50 border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition group overflow-hidden"
            >
              <div
                class="absolute top-0 right-0 w-32 h-32 bg-agoraLime/10 rounded-full blur-2xl -mr-10 -mt-10"
              ></div>

              <div class="flex items-center gap-4 mb-6">
                <div class="bg-white p-3 rounded-xl shadow-sm">
                  <i class="fas fa-certificate text-3xl text-agoraLime"></i>
                </div>
                <h3 class="text-2xl font-bold text-navy">Red Conocer & Badges</h3>
              </div>

              <p class="text-gray-600 text-sm mb-6">
                Estándares de competencia laboral reconocidos oficialmente. Colecciona insignias
                digitales por cada micro-habilidad dominada.
              </p>

              <div class="flex gap-3">
                <div
                  class="w-12 h-12 rounded-full bg-white border-2 border-agoraLime p-1 shadow-sm hover:scale-110 transition cursor-help"
                  title="Liderazgo 5.0"
                >
                  <img
                    src="../assets/images/badge_liderazgo.png"
                    alt="Badge Liderazgo"
                    class="w-full h-full object-contain"
                  />
                </div>

                <div
                  class="w-12 h-12 rounded-full bg-white border-2 border-purple-500 p-1 shadow-sm hover:scale-110 transition cursor-help"
                  title="Neurodidáctica"
                >
                  <img
                    src="../assets/images/badge_neuro.png"
                    alt="Badge Neurodidáctica"
                    class="w-full h-full object-contain"
                  />
                </div>

                <div
                  class="w-12 h-12 rounded-full bg-white border-2 border-collegeOrange p-1 shadow-sm hover:scale-110 transition cursor-help"
                  title="Gestión Ágil"
                >
                  <img
                    src="../assets/images/badge_gestion.png"
                    alt="Badge Gestión"
                    class="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="relative py-24 px-6 bg-agoraDark text-white overflow-hidden">
        <div
          class="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent opacity-10"
        ></div>
        <div
          class="max-w-5xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <div class="md:w-1/2">
            <span class="text-pink-500 font-bold uppercase tracking-widest text-xs mb-2 block"
              >Siguiente Ecosistema</span
            >
            <h2 class="text-4xl md:text-5xl font-agora font-black mb-6">Metanoia</h2>
            <p class="text-gray-400 text-lg mb-8 leading-relaxed">
              La formación no termina en el aula. Descubre el espacio diseñado para la
              <strong>transformación familiar</strong>, donde padres y tutores adquieren
              herramientas para la crianza en la era digital.
            </p>
            <a
              href="/metanoia"
              class="inline-flex items-center gap-3 bg-pink-600 text-white px-8 py-4 rounded-full font-bold hover:bg-pink-700 transition shadow-lg hover:shadow-pink-500/30 transform hover:scale-105"
            >
              Explorar Metanoia <i class="fas fa-arrow-right"></i>
            </a>
          </div>

          <div class="md:w-1/2 relative group cursor-pointer" @click="goToMetanoia">
            <div
              class="absolute inset-0 bg-pink-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"
            ></div>
            <div
              class="relative bg-gray-900 rounded-3xl p-1 border border-gray-700 hover:border-pink-500 transition overflow-hidden"
            >
              <img
                src="../assets/images/isologo_metanoia.png"
                alt="Metanoia Logo"
                class="h-16 w-auto absolute top-6 left-6 z-20 drop-shadow-md"
              />
              <img
                src="../assets/images//hero_metanoia.jpg"
                alt="Familia Metanoia"
                class="w-full h-64 object-cover rounded-2xl opacity-60 group-hover:opacity-80 transition duration-500"
              />
              <div class="absolute bottom-6 left-6 z-20">
                <span
                  class="text-white font-bold text-sm bg-white/10 backdrop-blur px-3 py-1 rounded-lg"
                  >Para Familias</span
                >
              </div>
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
      <p>© 2025 Hericraft Soluciones Integrales S.A. de C.V. - Ecosistema Ágora</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

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

const goToMetanoia = () => {
  router.push('/metanoia')
}
</script>

<style scoped>
.bg-dark-nav {
  background-color: #2f302d;
}
.bg-agoraDark {
  background-color: #121212;
}
.bg-oxfordGray {
  background-color: #2d3748;
}
.bg-navy {
  background-color: #0a1931;
}
.text-agoraLime {
  color: #8dc63f;
}
.bg-agoraLime {
  background-color: #8dc63f;
}
.text-collegeOrange {
  color: #ff6b35;
}
.bg-collegeOrange {
  background-color: #ff6b35;
}
.text-cyanBright {
  color: #00c2ff;
}
.bg-cyanBright {
  background-color: #00c2ff;
}

.hero-pattern {
  background-image:
    radial-gradient(#8dc63f 0.5px, transparent 0.5px), radial-gradient(#2d3748 0.5px, #000000 0.5px);
  background-size: 20px 20px;
  background-position:
    0 0,
    10px 10px;
  opacity: 0.2;
}

.card-hover {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px -10px rgba(141, 198, 63, 0.2);
  border-color: #8dc63f;
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

.font-agora {
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

@keyframes pulse-slow {
  0%,
  100% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.4;
  }
}

.animate-pulse-slow {
  animation: pulse-slow 3s infinite;
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 8s linear infinite;
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

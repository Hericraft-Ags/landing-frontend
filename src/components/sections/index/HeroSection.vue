<template>
<body class="bg-slate-50 pt-28 transition-colors duration-300 loading" id="body-root">
    <main>
        <!-- HERO -->
        <section id="inicio" class="relative bg-hero-space text-white pt-20 pb-32 px-6 overflow-hidden clip-diagonal">
            
            <div class="max-w-7xl mx-auto relative z-10 text-center">
                <div class="inline-flex items-center gap-2 border border-cyan-bright/50 bg-cyan-bright/10 text-cyan-bright text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-8 animate-fade-in">
                    <span class="w-2 h-2 rounded-full bg-cyan-bright animate-pulse"></span> Arquitectura Educativa 5.0
                </div>
                
                <h1 class="text-5xl lg:text-7xl font-display font-bold mb-8 leading-tight animate-fade-in">
                    El Universo de la<br><span class="text-cyan-bright">Innovación Educativa</span>
                </h1>
                
                <p class="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
                    Conectamos Alumnos, Docentes, Familias y Empresas a través de una matriz central que impulsa cuatro ecosistemas especializados.
                </p>
                
                <!-- DIAGRAMA INTERACTIVO (CORREGIDO: IMÁGENES PNG) -->
                <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in">
                    <!-- College (IMG) -->
                    <button onclick="playIntroAndRedirect('college.html', 'college')" class="bg-white/5 backdrop-blur border border-white/10 hover:bg-white/10 p-6 rounded-3xl transition-all group relative overflow-hidden flex flex-col items-center">
                        <div class="absolute inset-0 bg-gradient-to-br from-collegeOrange/20 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
                        <img src="../../../assets/images/logos/college-dark.svg" alt="Icono College" class="h-16 w-auto object-contain mb-3 group-hover:scale-110 transition-transform">
                        <span class="font-bold text-white block">College</span>
                        <span class="text-[10px] text-gray-400 uppercase tracking-wider">Escuelas</span>
                    </button>
                    <!-- Ágora (IMG) -->
                    <button onclick="playIntroAndRedirect('agora.html', 'agora')" class="bg-white/5 backdrop-blur border border-white/10 hover:bg-white/10 p-6 rounded-3xl transition-all group relative overflow-hidden flex flex-col items-center">
                        <div class="absolute inset-0 bg-gradient-to-br from-teal/20 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
                        <img src="../../../assets/images/logos/agora-dark.svg" alt="Icono Ágora" class="h-16 w-auto object-contain mb-3 group-hover:scale-110 transition-transform">
                        <span class="font-bold text-white block">Ágora</span>
                        <span class="text-[10px] text-gray-400 uppercase tracking-wider">Docentes</span>
                    </button>
                    <!-- Metanoia (IMG) -->
                    <button onclick="playIntroAndRedirect('metanoia.html', 'metanoia')" class="bg-white/5 backdrop-blur border border-white/10 hover:bg-white/10 p-6 rounded-3xl transition-all group relative overflow-hidden flex flex-col items-center">
                        <div class="absolute inset-0 bg-gradient-to-br from-accentPink/20 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
                        <img src="../../../assets/images/logos/metanoia-dark.svg" alt="Icono Metanoia" class="h-16 w-auto object-contain mb-3 group-hover:scale-110 transition-transform">
                        <span class="font-bold text-white block">Metanoia</span>
                        <span class="text-[10px] text-gray-400 uppercase tracking-wider">Familias</span>
                    </button>
                    <!-- Processus (IMG) -->
                    <button onclick="playIntroAndRedirect('processus.html', 'processus')" class="bg-white/5 backdrop-blur border border-white/10 hover:bg-white/10 p-6 rounded-3xl transition-all group relative overflow-hidden flex flex-col items-center">
                        <div class="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
                        <img src="../../../assets/images/logos/processus-dark.svg" alt="Icono Processus" class="h-16 w-auto object-contain mb-3 group-hover:scale-110 transition-transform">
                        <span class="font-bold text-white block">Processus</span>
                        <span class="text-[10px] text-gray-400 uppercase tracking-wider">Empresas</span>
                    </button>
                </div>
            </div>
        </section>

    </main>
</body>
</template>
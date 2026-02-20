<template>
    <!-- ========================================= -->
    <!-- 1. BARRA DE ACCESIBILIDAD -->
    <!-- ========================================= -->
    <div class="fixed top-0 w-full bg-dark-nav text-white z-[70] h-10 flex justify-between items-center px-4 text-[10px] sm:text-xs font-bold border-b border-gray-800">
        <div class="flex gap-2 sm:gap-4 items-center">
            <span class="text-cyan-bright hidden md:inline"><i class="fas fa-universal-access"></i> ACCESIBILIDAD:</span>
            <button onclick="Accessibility.toggleContrast()" class="hover:text-cyan-bright flex items-center gap-1 focus:outline-none rounded px-2 py-1 transition"><i class="fas fa-adjust"></i> Contraste</button>
            <button onclick="Accessibility.toggleTextSize()" class="hover:text-cyan-bright flex items-center gap-1 focus:outline-none rounded px-2 py-1 transition"><i class="fas fa-text-height"></i> Texto +</button>
            <button onclick="Accessibility.toggleMotion()" class="hover:text-cyan-bright flex items-center gap-1 focus:outline-none rounded px-2 py-1 transition"><i class="fas fa-pause-circle"></i> Sin Animación</button>
        </div>
        <div class="flex gap-3 items-center border-l border-gray-700 pl-4">
            <button onclick="Accessibility.changeLang('es')" class="text-cyan-bright hover:text-white font-bold transition">ES</button><span>|</span>
            <button onclick="Accessibility.changeLang('en')" class="text-gray-400 hover:text-cyan-bright transition">EN</button>
        </div>
    </div>

    <!-- ========================================= -->
    <!-- 2. HEADER / MENÚ SUPERIOR -->
    <!-- ========================================= -->
    <nav class="fixed top-10 w-full bg-dark-nav backdrop-blur-md border-b border-gray-800 z-50 h-20 transition-all shadow-sm">
        <div class="max-w-7xl mx-auto px-4 h-full flex justify-between items-center">
            <!-- Logo -->
            <a href="" class="flex-shrink-0 cursor-pointer hover:opacity-80 transition">
                <img src="../assets/images/logos/logo_hericraft.png" alt="Hericraft Logo" class="h-10 w-auto">
            </a>

            <!-- Menú Escritorio -->
            <div class="hidden lg:flex space-x-1 items-center text-white">
                <a href="" class="px-3 py-2 text-xs font-bold hover:text-cyan-bright transition uppercase tracking-wide rounded-full hover:bg-white/10">Nosotros</a>
                <a href="#educacion50" class="px-3 py-2 text-xs font-bold hover:text-cyan-bright transition uppercase tracking-wide rounded-full hover:bg-white/10">Educación 5.0</a>
                
                <!-- Dropdown Ecosistemas -->
                <div class="relative group">
                    <button class="px-3 py-6 text-xs font-bold hover:text-cyan-bright flex items-center gap-1 uppercase tracking-wide focus:outline-none">
                        Ecosistemas <i class="fas fa-chevron-down text-[10px]"></i>
                    </button>
                    <div class="absolute left-1/2 -translate-x-1/2 top-16 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 hidden group-hover:block overflow-hidden animate-fade-in z-50">
                        <div class="p-2">
                            <a href="#" onclick="playIntroAndRedirect('college.html', 'college')" class="block px-4 py-3 rounded-xl hover:bg-orange-50 group/item transition">
                                <span class="block text-sm font-bold text-navy group-hover/item:text-collegeOrange"><i class="fas fa-graduation-cap mr-2"></i> College</span>
                            </a>
                            <a href="#" onclick="playIntroAndRedirect('agora.html', 'agora')" class="block px-4 py-3 rounded-xl hover:bg-green-500/10 group/item transition">
                                <span class="block text-sm font-bold text-navy group-hover/item:text-teal"><i class="fas fa-chalkboard-teacher mr-2"></i> Ágora</span>
                            </a>
                            <a href="#" onclick="playIntroAndRedirect('metanoia.html', 'metanoia')" class="block px-4 py-3 rounded-xl hover:bg-pink-50 group/item transition">
                                <span class="block text-sm font-bold text-navy group-hover/item:text-accentPink"><i class="fas fa-heart mr-2"></i> Metanoia</span>
                            </a>
                            <a href="#" onclick="playIntroAndRedirect('processus.html', 'processus')" class="block px-4 py-3 rounded-xl hover:bg-blue-50 group/item transition">
                                <span class="block text-sm font-bold text-navy group-hover/item:text-navy"><i class="fas fa-briefcase mr-2"></i> Processus</span>
                            </a>
                        </div>
                    </div>
                </div>

                <a href="#ambientes" class="px-3 py-2 text-xs font-bold hover:text-cyan-bright transition uppercase tracking-wide">Ambientes</a>
                <a href="#servicios" class="px-3 py-2 text-xs font-bold hover:text-cyan-bright transition uppercase tracking-wide">Consultoría</a>
                <a href="#saberes" class="px-3 py-2 text-xs font-bold hover:text-cyan-bright transition uppercase tracking-wide">Saberes</a>
                <a href="" class="ml-2 text-[10px] font-bold text-cyan-bright border border-cyan-bright/30 bg-green-50 px-3 py-1 rounded-full hover:bg-cyan-bright hover:text-white transition uppercase tracking-wide">Inversionistas</a>
            </div>
            
            <button onclick="toggleMobileMenu()" class="lg:hidden text-white text-2xl p-2"><i class="fas fa-bars"></i></button>
        </div>

        <!-- Menú Móvil -->
        <div id="mobile-menu" class="hidden xl:hidden bg-dark-nav border-t border-gray-800 absolute w-full left-0 top-20 shadow-2xl p-6 space-y-4 h-[calc(100vh-80px)] z-40 overflow-y-auto pb-32 text-white">
            <a href="nosotros.html" class="block text-lg font-bold hover:text-cyan-bright">Nosotros</a>
            <div class="grid grid-cols-2 gap-3 mb-6">
                <a href="#" onclick="playIntroAndRedirect('college.html', 'college')" class="bg-white/10 p-3 rounded-xl text-center border border-white/20 hover:border-collegeOrange text-white font-bold">College</a>
                <a href="#" onclick="playIntroAndRedirect('agora.html', 'agora')" class="bg-white/10 p-3 rounded-xl text-center border border-white/20 hover:border-teal text-white font-bold">Ágora</a>
                <a href="#" onclick="playIntroAndRedirect('metanoia.html', 'metanoia')" class="bg-white/10 p-3 rounded-xl text-center border border-white/20 hover:border-accentPink text-white font-bold">Metanoia</a>
                <a href="#" onclick="playIntroAndRedirect('processus.html', 'processus')" class="bg-white/10 p-3 rounded-xl text-center border border-white/20 hover:border-blue-400 text-white font-bold">Processus</a>
            </div>
            <a href="#ambientes" class="block text-lg font-bold hover:text-cyan-bright">Diseño de ambientes</a>
            <a href="#saberes" class="block text-lg font-bold hover:text-cyan-bright">Banco de saberes</a>
            <a href="" class="block text-lg font-bold text-collegeOrange">Inversionistas</a>
        </div>
    </nav>
</template>
<template>
    <!-- ========================================= -->
        <!-- NUEVA SECCIÓN: AMBIENTES DE APRENDIZAJE -->
        <!-- ========================================= -->
        <section id="ambientes" class="py-24 px-6 relative overflow-hidden bg-navy text-white">
            <!-- Fondo decorativo tipo 'Blueprint' o técnico -->
            <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] opacity-10"></div>
            
            <div class="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                
                <!-- Columna Texto -->
                <div class="order-2 lg:order-1">
                    <div class="inline-block bg-white/10 text-cyan-bright border border-cyan-bright/30 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                        <i class="fas fa-cubes mr-2"></i> Hericraft Design
                    </div>
                    <h2 class="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
                        Diseña tu aula activa <br> <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-bright to-teal-400">En Tiempo Real</span>
                    </h2>
                    <p class="text-gray-300 text-lg mb-8 leading-relaxed">
                        Imagina, arrastra y construye espacios que transforman el aprendizaje. Nuestra herramienta interactiva te permite visualizar mobiliario, tecnología y distribución, generando una cotización instantánea y un plano en PDF.
                    </p>
                    
                    <ul class="space-y-4 mb-10">
                        <li class="flex items-center gap-3">
                            <span class="w-8 h-8 rounded-full bg-cyan-bright/20 flex items-center justify-center text-cyan-bright"><i class="fas fa-mouse-pointer"></i></span>
                            <span class="font-medium text-gray-200">Interfaz "Arrastra & Suelta" intuitiva</span>
                        </li>
                        <li class="flex items-center gap-3">
                            <span class="w-8 h-8 rounded-full bg-cyan-bright/20 flex items-center justify-center text-cyan-bright"><i class="fas fa-file-pdf"></i></span>
                            <span class="font-medium text-gray-200">Descarga automática el presupuesto estimado en PDF</span>
                        </li>
                        <li class="flex items-center gap-3">
                            <span class="w-8 h-8 rounded-full bg-cyan-bright/20 flex items-center justify-center text-cyan-bright"><i class="fas fa-comments"></i></span>
                            <span class="font-medium text-gray-200">Chat directo con arquitectos educativos</span>
                        </li>
                    </ul>

                    <div class="flex flex-col sm:flex-row gap-4">
                        <a href="" class="border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/10 transition text-center">
                            <i class="fas fa-magic group-hover:rotate-12 transition"></i> Iniciar diseño
                        </a>
                        <a href="#contacto" class="border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/10 transition text-center">
                            Ver galería de espacios
                        </a>
                    </div>
                </div>

                <!-- Columna Visual (Mockup de la App) -->
                <div class="order-1 lg:order-2 relative group">
                    <div class="absolute -inset-1 bg-gradient-to-r from-cyan-bright to-teal-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                    <div class="relative bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl">
                        <!-- Header Falso del Navegador -->
                        <div class="bg-slate-900 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
                            <div class="w-3 h-3 rounded-full bg-red-500"></div>
                            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div class="w-3 h-3 rounded-full bg-green-500"></div>
                            <div class="ml-4 bg-slate-800 px-3 py-1 rounded text-xs text-gray-400 font-mono w-full">hericraft.com/design</div>
                        </div>
                        <!-- Imagen Placeholder de la App -->
                        <!-- Sube una captura de tu app a: assets/img/app-ambientes-mockup.jpg -->
                        <img src="https://placehold.co/600x400/1e293b/06b6d4?text=Interfaz+Dise%C3%B1ador+3D" alt="Hericraft Design App" class="w-full object-cover hover:scale-105 transition duration-700">
                        
                        <!-- Floating Card -->
                        <div class="absolute bottom-6 left-6 bg-white/95 backdrop-blur text-navy p-4 rounded-xl shadow-lg border-l-4 border-cyan-bright max-w-xs animate-bounce hidden md:block">
                            <p class="font-bold text-sm"><i class="fas fa-check-circle text-green-600 mr-1"></i> Cotización lista</p>
                            <p class="text-xs text-gray-500 mt-1">Tu diseño "Aula STEAM" está listo para descargar.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
</template>
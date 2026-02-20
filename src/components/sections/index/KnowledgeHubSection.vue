<template>
<!-- ========================================= -->
<!-- NUEVA SECCIÓN: BANCO DE SABERES -->
<!-- ========================================= -->
        <section id="saberes" class="py-24 px-6 bg-slate-50 border-t border-slate-200">
            <div class="max-w-7xl mx-auto">
                <div class="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div>
                        <span class="text-cyan-bright font-bold uppercase tracking-widest text-sm mb-2 block">Knowledge Hub</span>
                        <h2 class="text-3xl md:text-4xl font-display font-bold text-navy">Banco de Saberes</h2>
                        <p class="text-gray-500 mt-2 max-w-2xl">Recursos curados para potenciar tu desarrollo: Blogs, Podcasts, Revistas Digitales y más.</p>
                    </div>
                    <a href="" class="text-navy font-bold hover:text-collegeOrange transition group flex items-center gap-2">
                        Explorar biblioteca <i class="fas fa-arrow-right group-hover:translate-x-1 transition"></i>
                    </a>
                </div>

                <!-- Grid de Contenido -->
                <div class="grid md:grid-cols-3 gap-8">
                    
                    <!-- Card 1: Podcast -->
                    <article class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden card-hover-effect flex flex-col h-full">
                        <div class="relative h-48 overflow-hidden bg-gray-200">
                            <!-- Etiqueta Tipo -->
                            <div class="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full z-10 uppercase tracking-wide">
                                <i class="fas fa-microphone mr-1"></i> Podcast
                            </div>
                            <!-- Placeholder Imagen -->
                            <img src="../../../assets/images/INDEX-16.png" alt="Podcast" class="w-full h-full object-cover">
                        </div>
                        <div class="p-6 flex flex-col flex-grow">
                            <h3 class="font-bold text-xl text-navy mb-3">El Futuro de la IA en el Aula</h3>
                            <p class="text-gray-500 text-sm mb-4 line-clamp-3 flex-grow">
                                Descubre cómo la inteligencia artificial está redefiniendo el rol del docente en este episodio especial con expertos de Google.
                            </p>
                            <div class="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                                <span class="text-xs text-gray-400"><i class="far fa-clock"></i> 25 min</span>
                                <a href="#" class="text-blue-500 font-bold text-sm hover:underline" alt="Reproducir">Reproducir</a>
                            </div>
                        </div>
                    </article>

                    <!-- Card 2: Blog/Manual -->
                    <article class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden card-hover-effect flex flex-col h-full">
                        <div class="relative h-48 overflow-hidden bg-gray-200">
                            <div class="absolute top-4 left-4 bg-teal-500 text-white text-[10px] font-bold px-3 py-1 rounded-full z-10 uppercase tracking-wide">
                                <i class="fas fa-book mr-1"></i> Manual
                            </div>
                            <img src="../../../assets/images/INDEX-17.png" alt="Manual" class="w-full h-full object-cover">
                        </div>
                        <div class="p-6 flex flex-col flex-grow">
                            <h3 class="font-bold text-xl text-navy mb-3">Guía Práctica: Aulas Híbridas</h3>
                            <p class="text-gray-500 text-sm mb-4 line-clamp-3 flex-grow">
                                Manual paso a paso para configurar espacios de aprendizaje mixtos utilizando herramientas de Google Workspace for Education.
                            </p>
                            <div class="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                                <span class="text-xs text-gray-400"><i class="far fa-file-pdf"></i> PDF Descargable</span>
                                <a href="#" class="text-teal-500 font-bold text-sm hover:underline" alt="Descargar">Descargar</a>
                            </div>
                        </div>
                    </article>

                    <!-- Card 3: Revista Digital -->
                    <article class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden card-hover-effect flex flex-col h-full">
                        <div class="relative h-48 overflow-hidden bg-gray-200">
                            <div class="absolute top-4 left-4 bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-full z-10 uppercase tracking-wide">
                                <i class="fas fa-book mr-1"></i> Revista
                            </div>
                            <img src="../../../assets/images/INDEX-18.png" alt="Revista" class="w-full h-full object-cover">
                        </div>
                        <div class="p-6 flex flex-col flex-grow">
                            <h3 class="font-bold text-xl text-navy mb-3">Hericraft Monthly: Edición Abril</h3>
                            <p class="text-gray-500 text-sm mb-4 line-clamp-3 flex-grow">
                                Entrevistas exclusivas, casos de éxito en Colegios y las últimas tendencias en infraestructura educativa.
                            </p>
                            <div class="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                                <span class="text-xs text-gray-400"><i class="far fa-eye"></i> Leer Online</span>
                                <a href="#" class="text-collegeOrange font-bold text-sm hover:underline" alt="Leer ahora">Leer Ahora</a>
                            </div>
                        </div>
                    </article>

                </div>
            </div>
        </section>
</template>
<template>
  <div class="bg-white min-h-screen py-12 px-6 pt-40">
    <div class="max-w-4xl mx-auto">
      <!-- Hero -->
      <div class="mb-12 text-center">
        <div class="flex justify-center mb-4">
          <div
            class="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
            :style="{ background: 'linear-gradient(135deg, #08BE66, #0EF1EB)' }"
          >
            <i class="fas fa-file-contract text-white text-2xl"></i>
          </div>
        </div>
        <h1 class="text-3xl md:text-4xl font-bold text-navy">
          {{ $t('terms.title') }}
        </h1>
        <p class="text-gray-500 text-sm mt-2">
          {{ $t('terms.last_update') }}
        </p>
        <div
          class="max-w-2xl mx-auto mt-4 text-gray-600 leading-relaxed"
          v-html="$t('terms.intro')"
        />
      </div>

      <!-- Tabla de contenidos -->
      <div
        class="bg-white rounded-2xl p-6 mb-10 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
      >
        <div class="flex items-center gap-3 mb-4 pb-2 border-b border-gray-100">
          <div
            class="w-8 h-8 rounded-full flex items-center justify-center"
            style="background-color: #08be6610"
          >
            <i class="fas fa-list-ul text-sm" style="color: #08be66"></i>
          </div>
          <h2 class="text-lg font-semibold text-navy">
            {{ $t('terms.table_of_contents') }}
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
          <a
            v-for="section in sections"
            :key="section.id"
            :href="`#${section.id}`"
            class="group flex items-center gap-2 py-1.5 px-2 rounded-lg transition-all duration-200 hover:bg-gray-50"
            style="color: #4a5568"
          >
            <i
              class="fas fa-chevron-right text-xs transition-transform duration-200 group-hover:translate-x-1"
              style="color: #08be66"
            ></i>
            <span class="text-sm group-hover:pl-0.5 transition-all" style="color: #2d3748">{{
              $t(`terms.sections.${section.key}`)
            }}</span>
          </a>
        </div>
      </div>

      <!-- Contenido principal -->
      <div class="space-y-12">
        <!-- I. Introducción al ecosistema digital -->
        <section id="intro" class="scroll-mt-20">
          <h2
            class="text-2xl font-bold border-l-4 pl-4 mb-6 text-navy"
            style="border-color: #08be66"
          >
            {{ $t('terms.sections.intro') }}
          </h2>
          <div class="space-y-4">
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('terms.intro_naturaleza_titulo') }}
              </h3>
              <p
                class="text-gray-600 leading-relaxed"
                v-html="$t('terms.intro_naturaleza_texto')"
              ></p>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('terms.intro_declaraciones_titulo') }}
              </h3>
              <p
                class="text-gray-600 leading-relaxed"
                v-html="$t('terms.intro_declaraciones_texto')"
              ></p>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('terms.intro_consentimiento_titulo') }}
              </h3>
              <p
                class="text-gray-600 leading-relaxed"
                v-html="$t('terms.intro_consentimiento_texto')"
              ></p>
              <ul class="list-disc list-inside ml-4 mt-2 space-y-1 text-gray-600">
                <li>{{ $t('terms.intro_consentimiento_item1') }}</li>
                <li>{{ $t('terms.intro_consentimiento_item2') }}</li>
                <li>{{ $t('terms.intro_consentimiento_item3') }}</li>
              </ul>
              <p
                class="text-gray-600 leading-relaxed mt-2"
                v-html="$t('terms.intro_consentimiento_nota')"
              ></p>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('terms.intro_interoperabilidad_titulo') }}
              </h3>
              <p
                class="text-gray-600 leading-relaxed"
                v-html="$t('terms.intro_interoperabilidad_texto')"
              ></p>
              <ul class="list-disc list-inside ml-4 mt-2 space-y-1 text-gray-600">
                <li>{{ $t('terms.intro_interoperabilidad_item1') }}</li>
                <li>{{ $t('terms.intro_interoperabilidad_item2') }}</li>
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('terms.intro_geografico_titulo') }}
              </h3>
              <p
                class="text-gray-600 leading-relaxed"
                v-html="$t('terms.intro_geografico_texto')"
              ></p>
            </div>
          </div>
        </section>

        <!-- II. OBJETO Y ACEPTACIÓN DEL CONTRATO -->
        <section id="objeto" class="scroll-mt-20">
          <h2
            class="text-2xl font-bold border-l-4 pl-4 mb-6 text-navy"
            style="border-color: #08be66"
          >
            {{ $t('terms.sections.objeto') }}
          </h2>
          <div class="space-y-4">
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('terms.objeto_multifuncional_titulo') }}
              </h3>
              <p
                class="text-gray-600 leading-relaxed"
                v-html="$t('terms.objeto_multifuncional_texto')"
              ></p>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('terms.objeto_clickwrap_titulo') }}
              </h3>
              <p
                class="text-gray-600 leading-relaxed"
                v-html="$t('terms.objeto_clickwrap_texto')"
              ></p>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('terms.objeto_capacidad_titulo') }}
              </h3>
              <ul class="list-disc list-inside ml-4 mt-2 space-y-1 text-gray-600">
                <li
                  class="text-gray-600 leading-relaxed"
                  v-html="$t('terms.objeto_capacidad_texto')"
                ></li>
                <li
                  class="text-gray-600 leading-relaxed"
                  v-html="$t('terms.objeto_capacidad_texto_1')"
                ></li>
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('terms.objeto_licencia_titulo') }}
              </h3>
              <p
                class="text-gray-600 leading-relaxed"
                v-html="$t('terms.objeto_licencia_texto')"
              ></p>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('terms.objeto_modificaciones_titulo') }}
              </h3>
              <p
                class="text-gray-600 leading-relaxed"
                v-html="$t('terms.objeto_modificaciones_texto')"
              ></p>
              <ul class="list-disc list-inside ml-4 mt-2 space-y-1 text-gray-600">
                <li
                  class="text-gray-600 leading-relaxed"
                  v-html="$t('terms.objeto_modificaciones_texto_1')"
                ></li>
                <li
                  class="text-gray-600 leading-relaxed"
                  v-html="$t('terms.objeto_modificaciones_texto_2')"
                ></li>
              </ul>
            </div>
          </div>
        </section>

        <!-- III. ELEGIBILIDAD Y PROTECCIÓN DE MENORES -->
        <section id="menores" class="scroll-mt-20">
          <h2
            class="text-2xl font-bold border-l-4 pl-4 mb-6 text-navy"
            style="border-color: #08be66"
          >
            {{ $t('terms.sections.menores') }}
          </h2>
          <div class="space-y-4">
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('terms.menores_capacidad_titulo') }}
              </h3>
              <p
                class="text-gray-600 leading-relaxed"
                v-html="$t('terms.menores_capacidad_texto')"
              ></p>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('terms.menores_tutor_titulo') }}
              </h3>
              <p class="text-gray-600 leading-relaxed" v-html="$t('terms.menores_tutor_texto')"></p>
              <ul class="list-disc list-inside ml-4 mt-2 space-y-1 text-gray-600">
                <li class="text-gray-600 leading-relaxed">
                  {{ $t('terms.menores_tutor_texto_1') }}
                </li>
                <li class="text-gray-600 leading-relaxed">
                  {{ $t('terms.menores_tutor_texto_2') }}
                </li>
                <li
                  class="text-gray-600 leading-relaxed"
                  v-html="$t('terms.menores_tutor_texto_3')"
                ></li>
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('terms.menores_validacion_titulo') }}
              </h3>
              <p
                class="text-gray-600 leading-relaxed"
                v-html="$t('terms.menores_validacion_texto')"
              ></p>
              <ul class="list-disc list-inside ml-4 mt-2 space-y-1 text-gray-600">
                <li
                  class="text-gray-600 leading-relaxed"
                  v-html="$t('terms.menores_validacion_texto_1')"
                ></li>
                <li
                  class="text-gray-600 leading-relaxed"
                  v-html="$t('terms.menores_validacion_texto_2')"
                ></li>
                <li
                  class="text-gray-600 leading-relaxed"
                  v-html="$t('terms.menores_validacion_texto_3')"
                ></li>
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('terms.menores_proteccion_titulo') }}
              </h3>
              <p
                class="text-gray-600 leading-relaxed"
                v-html="$t('terms.menores_proteccion_texto')"
              ></p>
              <ul class="list-disc list-inside ml-4 mt-2 space-y-1 text-gray-600">
                <li
                  class="text-gray-600 leading-relaxed"
                  v-html="$t('terms.menores_proteccion_texto_1')"
                ></li>
                <li
                  class="text-gray-600 leading-relaxed"
                  v-html="$t('terms.menores_proteccion_texto_2')"
                ></li>
                <li
                  class="text-gray-600 leading-relaxed"
                  v-html="$t('terms.menores_proteccion_texto_3')"
                ></li>
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('terms.menores_responsabilidad_titulo') }}
              </h3>
              <p
                class="text-gray-600 leading-relaxed"
                v-html="$t('terms.menores_responsabilidad_texto')"
              ></p>
            </div>
          </div>
        </section>

        <!-- IV. PROPIEDAD INTELECTUAL -->
        <section id="propiedad" class="scroll-mt-20">
          <h2
            class="text-2xl font-bold border-l-4 pl-4 mb-6 text-navy"
            style="border-color: #08be66"
          >
            {{ $t('terms.sections.propiedad') }}
          </h2>
          <div class="space-y-4">
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('terms.propiedad_titularidad_titulo') }}
              </h3>
              <p
                class="text-gray-600 leading-relaxed"
                v-html="$t('terms.propiedad_titularidad_texto')"
              ></p>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('terms.propiedad_snap_titulo') }}
              </h3>
              <p
                class="text-gray-600 leading-relaxed"
                v-html="$t('terms.propiedad_snap_texto')"
              ></p>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('terms.propiedad_licencia_titulo') }}
              </h3>
              <p
                class="text-gray-600 leading-relaxed"
                v-html="$t('terms.propiedad_licencia_texto')"
              ></p>
              <ul class="list-disc list-inside ml-4 mt-2 space-y-1 text-gray-600">
                <li
                  class="text-gray-600 leading-relaxed"
                  v-html="$t('terms.propiedad_licencia_texto_1')"
                ></li>
                <li
                  class="text-gray-600 leading-relaxed"
                  v-html="$t('terms.propiedad_licencia_texto_2')"
                ></li>
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('terms.propiedad_prohibiciones_titulo') }}
              </h3>
              <p class="text-gray-600 leading-relaxed">
                {{ $t('terms.propiedad_prohibiciones_texto') }}
              </p>
              <ul class="list-disc list-inside ml-4 mt-2 space-y-1 text-gray-600">
                <li
                  class="text-gray-600 leading-relaxed"
                  v-html="$t('terms.propiedad_prohibiciones_texto_1')"
                ></li>
                <li
                  class="text-gray-600 leading-relaxed"
                  v-html="$t('terms.propiedad_prohibiciones_texto_2')"
                ></li>
                <li
                  class="text-gray-600 leading-relaxed"
                  v-html="$t('terms.propiedad_prohibiciones_texto_3')"
                ></li>
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('terms.propiedad_ugc_titulo') }}
              </h3>
              <p class="text-gray-600 leading-relaxed">{{ $t('terms.propiedad_ugc_texto') }}</p>
              <ul class="list-disc list-inside ml-4 mt-2 space-y-1 text-gray-600">
                <li
                  class="text-gray-600 leading-relaxed"
                  v-html="$t('terms.propiedad_ugc_texto_1')"
                ></li>
                <li
                  class="text-gray-600 leading-relaxed"
                  v-html="$t('terms.propiedad_ugc_texto_2')"
                ></li>
                <li
                  class="text-gray-600 leading-relaxed"
                  v-html="$t('terms.propiedad_ugc_texto_3')"
                ></li>
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('terms.propiedad_marca_titulo') }}
              </h3>
              <p
                class="text-gray-600 leading-relaxed"
                v-html="$t('terms.propiedad_marca_texto')"
              ></p>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('terms.propiedad_notificacion_titulo') }}
              </h3>
              <p class="text-gray-600 leading-relaxed">
                {{ $t('terms.propiedad_notificacion_texto') }}
              </p>
            </div>
          </div>
        </section>

        <!-- V. CONDICIONES DE PRAXIS TRAMA (aprendizaje) -->
        <section id="praxis" class="scroll-mt-20">
          <h2
            class="text-2xl font-bold border-l-4 pl-4 mb-6 text-navy"
            style="border-color: #08be66"
          >
            {{ $t('terms.sections.praxis') }}
          </h2>
          <div class="space-y-4">
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('terms.praxis_naturaleza_titulo') }}
              </h3>
              <p
                class="text-gray-600 leading-relaxed"
                v-html="$t('terms.praxis_naturaleza_texto')"
              ></p>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('terms.praxis_ia_titulo') }}
              </h3>
              <p class="text-gray-600 leading-relaxed" v-html="$t('terms.praxis_ia_texto')"></p>
              <ul class="list-disc list-inside ml-4 mt-2 space-y-1 text-gray-600">
                <li
                  class="text-gray-600 leading-relaxed"
                  v-html="$t('terms.praxis_ia_texto_1')"
                ></li>
                <li
                  class="text-gray-600 leading-relaxed"
                  v-html="$t('terms.praxis_ia_texto_2')"
                ></li>
                <li
                  class="text-gray-600 leading-relaxed"
                  v-html="$t('terms.praxis_ia_texto_3')"
                ></li>
                <li
                  class="text-gray-600 leading-relaxed"
                  v-html="$t('terms.praxis_ia_texto_4')"
                ></li>
                <li
                  class="text-gray-600 leading-relaxed"
                  v-html="$t('terms.praxis_ia_texto_5')"
                ></li>
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('terms.praxis_conducta_titulo') }}
              </h3>
              <p
                class="text-gray-600 leading-relaxed"
                v-html="$t('terms.praxis_conducta_texto')"
              ></p>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('terms.praxis_integridad_titulo') }}
              </h3>
              <p class="text-gray-600 leading-relaxed">{{ $t('terms.praxis_integridad_texto') }}</p>
              <ul class="list-disc list-inside ml-4 mt-2 space-y-1 text-gray-600">
                <li
                  class="text-gray-600 leading-relaxed"
                  v-html="$t('terms.praxis_integridad_texto_1')"
                ></li>
                <li
                  class="text-gray-600 leading-relaxed"
                  v-html="$t('terms.praxis_integridad_texto_2')"
                ></li>
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('terms.praxis_certificados_titulo') }}
              </h3>
              <p class="text-gray-600 leading-relaxed">
                {{ $t('terms.praxis_certificados_texto') }}
              </p>
              <ul class="list-disc list-inside ml-4 mt-2 space-y-1 text-gray-600">
                <li
                  class="text-gray-600 leading-relaxed"
                  v-html="$t('terms.praxis_certificados_texto_1')"
                ></li>
                <li
                  class="text-gray-600 leading-relaxed"
                  v-html="$t('terms.praxis_certificados_texto_2')"
                ></li>
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('terms.praxis_disponibilidad_titulo') }}
              </h3>
              <p class="text-gray-600 leading-relaxed">
                {{ $t('terms.praxis_disponibilidad_texto') }}
              </p>
              <ul class="list-disc list-inside ml-4 mt-2 space-y-1 text-gray-600">
                <li
                  class="text-gray-600 leading-relaxed"
                  v-html="$t('terms.praxis_disponibilidad_texto_1')"
                ></li>
                <li
                  class="text-gray-600 leading-relaxed"
                  v-html="$t('terms.praxis_disponibilidad_texto_2')"
                ></li>
              </ul>
            </div>
          </div>
        </section>

        <!-- VI. CONDICIONES DE COLLEGE STORE (E-COMMERCE) -->
        <section id="store" class="scroll-mt-20">
          <h2
            class="text-2xl font-bold border-l-4 pl-4 mb-6 text-navy"
            style="border-color: #08be66"
          >
            {{ $t('terms.sections.store') }}
          </h2>
          <div class="space-y-4">
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('terms.store_naturaleza_titulo') }}
              </h3>
              <p
                class="text-gray-600 leading-relaxed"
                v-html="$t('terms.store_naturaleza_texto')"
              ></p>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('terms.store_precios_titulo') }}
              </h3>
              <ul class="list-disc list-inside ml-4 mt-2 space-y-1 text-gray-600">
                <li
                  class="text-gray-600 leading-relaxed"
                  v-html="$t('terms.store_precios_texto')"
                ></li>
                <li
                  class="text-gray-600 leading-relaxed"
                  v-html="$t('terms.store_precios_texto_1')"
                ></li>
                <li
                  class="text-gray-600 leading-relaxed"
                  v-html="$t('terms.store_precios_texto_2')"
                ></li>
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('terms.store_pago_titulo') }}
              </h3>
              <p class="text-gray-600 leading-relaxed" v-html="$t('terms.store_pago_texto')"></p>
              <ul class="list-disc list-inside ml-4 mt-2 space-y-1 text-gray-600">
                <li
                  class="text-gray-600 leading-relaxed"
                  v-html="$t('terms.store_pago_texto_1')"
                ></li>
                <li
                  class="text-gray-600 leading-relaxed"
                  v-html="$t('terms.store_pago_texto_2')"
                ></li>
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('terms.store_envio_titulo') }}
              </h3>
              <ul class="list-disc list-inside ml-4 mt-2 space-y-1 text-gray-600">
                <li
                  class="text-gray-600 leading-relaxed"
                  v-html="$t('terms.store_envio_texto')"
                ></li>
                <li
                  class="text-gray-600 leading-relaxed"
                  v-html="$t('terms.store_envio_texto_1')"
                ></li>
                <li
                  class="text-gray-600 leading-relaxed"
                  v-html="$t('terms.store_envio_texto_2')"
                ></li>
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('terms.store_devoluciones_titulo') }}
              </h3>
              <p
                class="text-gray-600 leading-relaxed"
                v-html="$t('terms.store_devoluciones_texto')"
              ></p>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('terms.store_garantia_titulo') }}
              </h3>
              <p
                class="text-gray-600 leading-relaxed"
                v-html="$t('terms.store_garantia_texto')"
              ></p>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('terms.store_stock_titulo') }}
              </h3>
              <p class="text-gray-600 leading-relaxed">{{ $t('terms.store_stock_texto') }}</p>
              <ul class="list-disc list-inside ml-4 mt-2 space-y-1 text-gray-600">
                <li class="text-gray-600 leading-relaxed">{{ $t('terms.store_stock_texto_1') }}</li>
                <li class="text-gray-600 leading-relaxed">{{ $t('terms.store_stock_texto_2') }}</li>
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('terms.store_facturacion_titulo') }}
              </h3>
              <p class="text-gray-600 leading-relaxed">{{ $t('terms.store_facturacion_texto') }}</p>
            </div>
          </div>
        </section>

        <!-- VII. LIMITACIÓN DE RESPONSABILIDAD Y GARANTÍAS -->
        <section id="responsabilidad" class="scroll-mt-20">
          <h2
            class="text-2xl font-bold border-l-4 pl-4 mb-6 text-navy"
            style="border-color: #08be66"
          >
            {{ $t('terms.sections.responsabilidad') }}
          </h2>
          <div class="space-y-4">
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('terms.responsabilidad_as_is_titulo') }}
              </h3>
              <p
                class="text-gray-600 leading-relaxed"
                v-html="$t('terms.responsabilidad_as_is_texto')"
              ></p>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('terms.responsabilidad_exencion_ia_titulo') }}
              </h3>
              <p
                class="text-gray-600 leading-relaxed"
                v-html="$t('terms.responsabilidad_exencion_ia_texto')"
              ></p>
              <ul class="list-disc list-inside ml-4 mt-2 space-y-1 text-gray-600">
                <li
                  class="text-gray-600 leading-relaxed"
                  v-html="$t('terms.responsabilidad_exencion_ia_texto_1')"
                ></li>
                <li
                  class="text-gray-600 leading-relaxed"
                  v-html="$t('terms.responsabilidad_exencion_ia_texto_2')"
                ></li>
                <li
                  class="text-gray-600 leading-relaxed"
                  v-html="$t('terms.responsabilidad_exencion_ia_texto_3')"
                ></li>
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('terms.responsabilidad_terceros_titulo') }}
              </h3>
              <p
                class="text-gray-600 leading-relaxed"
                v-html="$t('terms.responsabilidad_terceros_texto')"
              ></p>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('terms.responsabilidad_limite_monetario_titulo') }}
              </h3>
              <p
                class="text-gray-600 leading-relaxed"
                v-html="$t('terms.responsabilidad_limite_monetario_texto')"
              ></p>
              <ul class="list-disc list-inside ml-4 mt-2 space-y-1 text-gray-600">
                <li
                  class="text-gray-600 leading-relaxed"
                  v-html="$t('terms.responsabilidad_limite_monetario_texto_1')"
                ></li>
                <li
                  class="text-gray-600 leading-relaxed"
                  v-html="$t('terms.responsabilidad_limite_monetario_texto_2')"
                ></li>
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('terms.responsabilidad_usuario_titulo') }}
              </h3>
              <p
                class="text-gray-600 leading-relaxed"
                v-html="$t('terms.responsabilidad_usuario_texto')"
              ></p>
              <ul class="list-disc list-inside ml-4 mt-2 space-y-1 text-gray-600">
                <li class="text-gray-600 leading-relaxed">
                  {{ $t('terms.responsabilidad_usuario_texto_1') }}
                </li>
                <li class="text-gray-600 leading-relaxed">
                  {{ $t('terms.responsabilidad_usuario_texto_2') }}
                </li>
                <li class="text-gray-600 leading-relaxed">
                  {{ $t('terms.responsabilidad_usuario_texto_2') }}
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('terms.responsabilidad_indemnizacion_titulo') }}
              </h3>
              <p
                class="text-gray-600 leading-relaxed"
                v-html="$t('terms.responsabilidad_indemnizacion_texto')"
              ></p>
            </div>
          </div>
        </section>

        <!-- VIII. SEGURIDAD Y CIBERSEGURIDAD -->
        <section id="seguridad" class="scroll-mt-20">
          <h2
            class="text-2xl font-bold border-l-4 pl-4 mb-6 text-navy"
            style="border-color: #08be66"
          >
            {{ $t('terms.sections.seguridad') }}
          </h2>
          <div class="space-y-4">
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('terms.seguridad_estandares_titulo') }}
              </h3>
              <p
                class="text-gray-600 leading-relaxed"
                v-html="$t('terms.seguridad_estandares_texto')"
              ></p>
              <ul class="list-disc list-inside ml-4 mt-2 space-y-1 text-gray-600">
                <li
                  class="text-gray-600 leading-relaxed"
                  v-html="$t('terms.seguridad_estandares_texto_1')"
                ></li>
                <li
                  class="text-gray-600 leading-relaxed"
                  v-html="$t('terms.seguridad_estandares_texto_2')"
                ></li>
                <li
                  class="text-gray-600 leading-relaxed"
                  v-html="$t('terms.seguridad_estandares_texto_3')"
                ></li>
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('terms.seguridad_credenciales_titulo') }}
              </h3>
              <p
                class="text-gray-600 leading-relaxed"
                v-html="$t('terms.seguridad_credenciales_texto')"
              ></p>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('terms.seguridad_conductas_titulo') }}
              </h3>
              <p
                class="text-gray-600 leading-relaxed"
                v-html="$t('terms.seguridad_conductas_texto')"
              ></p>
              <ul class="list-disc list-inside ml-4 mt-2 space-y-1 text-gray-600">
                <li
                  class="text-gray-600 leading-relaxed"
                  v-html="$t('terms.seguridad_conductas_texto_1')"
                ></li>
                <li
                  class="text-gray-600 leading-relaxed"
                  v-html="$t('terms.seguridad_conductas_texto_2')"
                ></li>
                <li
                  class="text-gray-600 leading-relaxed"
                  v-html="$t('terms.seguridad_conductas_texto_3')"
                ></li>
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('terms.seguridad_breach_titulo') }}
              </h3>
              <p
                class="text-gray-600 leading-relaxed"
                v-html="$t('terms.seguridad_breach_texto')"
              ></p>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('terms.seguridad_exclusion_titulo') }}
              </h3>
              <p
                class="text-gray-600 leading-relaxed"
                v-html="$t('terms.seguridad_exclusion_texto')"
              ></p>
              <ul class="list-disc list-inside ml-4 mt-2 space-y-1 text-gray-600">
                <li
                  class="text-gray-600 leading-relaxed"
                  v-html="$t('terms.seguridad_exclusion_texto_1')"
                ></li>
                <li
                  class="text-gray-600 leading-relaxed"
                  v-html="$t('terms.seguridad_exclusion_texto_2')"
                ></li>
                <li
                  class="text-gray-600 leading-relaxed"
                  v-html="$t('terms.seguridad_exclusion_texto_3')"
                ></li>
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('terms.seguridad_biometria_titulo') }}
              </h3>
              <p
                class="text-gray-600 leading-relaxed"
                v-html="$t('terms.seguridad_biometria_texto')"
              ></p>
            </div>
          </div>
        </section>

        <!-- IX. RESOLUCIÓN DE DISPUTAS Y JURISDICCIÓN -->
        <section id="disputas" class="scroll-mt-20">
          <h2
            class="text-2xl font-bold border-l-4 pl-4 mb-6 text-navy"
            style="border-color: #08be66"
          >
            {{ $t('terms.sections.disputas') }}
          </h2>
          <div class="space-y-4">
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('terms.disputas_ley_titulo') }}
              </h3>
              <p class="text-gray-600 leading-relaxed" v-html="$t('terms.disputas_ley_texto')"></p>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('terms.disputas_conciliacion_titulo') }}
              </h3>
              <p
                class="text-gray-600 leading-relaxed"
                v-html="$t('terms.disputas_conciliacion_texto')"
              ></p>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('terms.disputas_autoridades_titulo') }}
              </h3>
              <p class="text-gray-600 leading-relaxed">
                {{ $t('terms.disputas_autoridades_texto') }}
              </p>
              <ul class="list-disc list-inside ml-4 mt-2 space-y-1 text-gray-600">
                <li
                  class="text-gray-600 leading-relaxed"
                  v-html="$t('terms.disputas_autoridades_texto_1')"
                ></li>
                <li
                  class="text-gray-600 leading-relaxed"
                  v-html="$t('terms.disputas_autoridades_texto_2')"
                ></li>
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('terms.disputas_jurisdiccion_titulo') }}
              </h3>
              <p
                class="text-gray-600 leading-relaxed"
                v-html="$t('terms.disputas_jurisdiccion_texto')"
              ></p>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('terms.disputas_colectivas_titulo') }}
              </h3>
              <p
                class="text-gray-600 leading-relaxed"
                v-html="$t('terms.disputas_colectivas_texto')"
              ></p>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('terms.disputas_divisibilidad_titulo') }}
              </h3>
              <p class="text-gray-600 leading-relaxed">
                {{ $t('terms.disputas_divisibilidad_texto') }}
              </p>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('terms.disputas_idioma_titulo') }}
              </h3>
              <p
                class="text-gray-600 leading-relaxed"
                v-html="$t('terms.disputas_idioma_texto')"
              ></p>
            </div>
          </div>
        </section>

        <!-- X. MODIFICACIONES -->
        <section id="modificaciones" class="scroll-mt-20">
          <h2
            class="text-2xl font-bold border-l-4 pl-4 mb-6 text-navy"
            style="border-color: #08be66"
          >
            {{ $t('terms.sections.modificaciones') }}
          </h2>
          <p class="text-gray-600 leading-relaxed">{{ $t('terms.modificaciones_texto') }}</p>
        </section>

        <!-- Contacto legal (mailto) -->
        <div class="mt-8 pt-4 border-t border-gray-100">
          <p class="text-gray-600 text-sm">
            {{ $t('terms.legal_contact_text') }}
            <a
              href="mailto: legal@soluciones-hericraft.com"
              class="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-mono transition-all duration-200 group"
              style="color: #08be66"
            >
              <i
                class="fas fa-envelope text-xs opacity-70 group-hover:opacity-100 transition-opacity"
              ></i>
              legal@soluciones-hericraft.com
              <i
                class="fas fa-external-link-alt text-xs opacity-0 group-hover:opacity-70 transition-opacity"
              ></i>
            </a>
          </p>
        </div>
      </div>

      <!-- Back to top -->
      <div class="mt-12 text-center">
        <button
          @click="scrollToTop"
          class="inline-flex items-center gap-2 transition font-medium hover:text-cyan"
          style="color: #08be66"
        >
          <i class="fas fa-arrow-up"></i> {{ $t('terms.back_to_top') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const sections = ref([
  { id: 'intro', key: 'intro' },
  { id: 'objeto', key: 'objeto' },
  { id: 'menores', key: 'menores' },
  { id: 'propiedad', key: 'propiedad' },
  { id: 'praxis', key: 'praxis' },
  { id: 'store', key: 'store' },
  { id: 'responsabilidad', key: 'responsabilidad' },
  { id: 'seguridad', key: 'seguridad' },
  { id: 'disputas', key: 'disputas' },
  { id: 'modificaciones', key: 'modificaciones' },
])

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
.scroll-mt-20 {
  scroll-margin-top: 5rem;
}
</style>

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
            <i class="fas fa-shield-alt text-white text-2xl"></i>
          </div>
        </div>
        <h1 class="text-3xl md:text-4xl font-bold text-navy">
          {{ $t('privacy.title') }}
        </h1>
        <p class="text-gray-500 text-sm mt-2">
          {{ $t('privacy.last_update') }}
        </p>
        <div
          class="max-w-2xl mx-auto mt-4 text-gray-600 leading-relaxed"
          v-html="$t('privacy.intro')"
        />
      </div>

      <!-- Table of contents (card) -->
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
            {{ $t('privacy.table_of_contents') }}
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
              $t(`privacy.sections.${section.key}`)
            }}</span>
          </a>
        </div>
      </div>

      <!-- Content sections -->
      <div class="space-y-12">
        <!-- I. FUNDAMENTOS -->
        <section id="fundamentos" class="scroll-mt-20">
          <h2
            class="text-2xl font-bold border-l-4 pl-4 mb-6 text-navy"
            style="border-color: #08be66"
          >
            {{ $t('privacy.sections.fundamentos') }}
          </h2>
          <div class="space-y-6">
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('privacy.content.identidad_titulo') }}
              </h3>
              <p
                class="text-gray-600 leading-relaxed"
                v-html="$t('privacy.content.identidad_texto')"
              ></p>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-3 text-navy">
                {{ $t('privacy.content.glosario_titulo') }}
              </h3>
              <ul class="list-disc list-inside space-y-2 text-gray-600">
                <li v-html="$t('privacy.content.glosario_plataforma')"></li>
                <li v-html="$t('privacy.content.glosario_snap')"></li>
                <li v-html="$t('privacy.content.glosario_biometricos')"></li>
                <li v-html="$t('privacy.content.glosario_licencia')"></li>
              </ul>
            </div>
          </div>
        </section>

        <!-- II. GESTIÓN DE LA INFORMACIÓN -->
        <section id="gestion" class="scroll-mt-20">
          <h2
            class="text-2xl font-bold border-l-4 pl-4 mb-6 text-navy"
            style="border-color: #08be66"
          >
            {{ $t('privacy.sections.gestion') }}
          </h2>
          <div class="space-y-6">
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('privacy.content.categorias_titulo') }}
              </h3>
              <p class="text-gray-600 mb-3">{{ $t('privacy.content.categorias_desc') }}</p>
              <div class="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                <table class="min-w-full bg-white text-sm">
                  <thead>
                    <tr class="border-b border-gray-200 bg-gray-50/80">
                      <th
                        class="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
                      >
                        {{ $t('privacy.content.categorias_tabla_head_cat') }}
                      </th>
                      <th
                        class="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
                      >
                        {{ $t('privacy.content.categorias_tabla_head_ejemplos') }}
                      </th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-100">
                    <tr
                      v-for="(row, idx) in dataRows"
                      :key="row.catKey"
                      class="transition-colors hover:bg-gray-50/50"
                      :class="{ 'bg-white': idx % 2 === 0, 'bg-gray-50/30': idx % 2 === 1 }"
                    >
                      <td class="px-6 py-3 font-medium text-gray-800 whitespace-nowrap">
                        {{ $t(row.catKey) }}
                      </td>
                      <td class="px-6 py-3 text-gray-600">
                        {{ $t(row.examplesKey) }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('privacy.content.finalidades_titulo') }}
              </h3>
              <ul class="list-disc list-inside space-y-1 text-gray-600">
                <li v-html="$t('privacy.content.finalidades_necesarias')"></li>
                <li v-html="$t('privacy.content.finalidades_marketing')"></li>
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('privacy.content.ia_titulo') }}
              </h3>
              <p class="text-gray-600 mb-2" v-html="$t('privacy.content.ia_texto1')"></p>
              <ul class="list-disc list-inside ml-4 space-y-1 text-gray-600">
                <li>{{ $t('privacy.content.ia_lista1') }}</li>
                <li v-html="$t('privacy.content.ia_lista2')"></li>
              </ul>
              <p class="text-gray-600 mt-2">{{ $t('privacy.content.ia_texto2') }}</p>
              <p class="text-gray-600 mt-2">{{ $t('privacy.content.ia_texto3') }}</p>
            </div>
          </div>
        </section>

        <!-- III. PROTECCIÓN ESPECIAL Y CONSENTIMIENTO -->
        <section id="proteccion" class="scroll-mt-20">
          <h2
            class="text-2xl font-bold border-l-4 pl-4 mb-6 text-navy"
            style="border-color: #08be66"
          >
            {{ $t('privacy.sections.proteccion') }}
          </h2>
          <div class="space-y-6">
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('privacy.content.menores_titulo') }}
              </h3>
              <p class="text-gray-600 mb-2">{{ $t('privacy.content.menores_texto') }}</p>
              <ul class="list-disc list-inside ml-4 space-y-1 text-gray-600">
                <li v-html="$t('privacy.content.menores_lista1')"></li>
                <li v-html="$t('privacy.content.menores_lista2')"></li>
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('privacy.content.consentimiento_titulo') }}
              </h3>
              <ul class="list-disc list-inside ml-4 space-y-1 text-gray-600">
                <li v-html="$t('privacy.content.consentimiento_tacito')"></li>
                <li v-html="$t('privacy.content.consentimiento_expreso')"></li>
              </ul>
            </div>
          </div>
        </section>

        <!-- IV. GOBERNANZA DIGITAL Y TERCEROS -->
        <section id="gobernanza" class="scroll-mt-20">
          <h2
            class="text-2xl font-bold border-l-4 pl-4 mb-6 text-navy"
            style="border-color: #08be66"
          >
            {{ $t('privacy.sections.gobernanza') }}
          </h2>
          <div class="space-y-6">
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('privacy.content.transferencias_titulo') }}
              </h3>
              <p class="text-gray-600" v-html="$t('privacy.content.transferencias_texto')"></p>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('privacy.content.terceros_titulo') }}
              </h3>
              <ul class="list-disc list-inside ml-4 space-y-1 text-gray-600">
                <li v-html="$t('privacy.content.terceros_pagos')"></li>
                <li v-html="$t('privacy.content.terceros_logistica')"></li>
              </ul>
            </div>
          </div>
        </section>

        <!-- V. BLINDAJE Y SEGURIDAD -->
        <section id="seguridad" class="scroll-mt-20">
          <h2
            class="text-2xl font-bold border-l-4 pl-4 mb-6 text-navy"
            style="border-color: #08be66"
          >
            {{ $t('privacy.sections.seguridad') }}
          </h2>
          <div class="space-y-6">
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('privacy.content.medidas_titulo') }}
              </h3>
              <p class="text-gray-600" v-html="$t('privacy.content.medidas_texto')"></p>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('privacy.content.fuerza_mayor_titulo') }}
              </h3>
              <p class="text-gray-600 mb-2">{{ $t('privacy.content.fuerza_mayor_texto') }}</p>
              <ul class="list-disc list-inside ml-4 space-y-1 text-gray-600">
                <li v-html="$t('privacy.content.fuerza_mayor_lista1')"></li>
                <li v-html="$t('privacy.content.fuerza_mayor_lista2')"></li>
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('privacy.content.data_breach_titulo') }}
              </h3>
              <p class="text-gray-600" v-html="$t('privacy.content.data_breach_texto')"></p>
            </div>
          </div>
        </section>

        <!-- VI. DERECHOS Y CICLO DE VIDA DEL DATO -->
        <section id="derechos" class="scroll-mt-20">
          <h2
            class="text-2xl font-bold border-l-4 pl-4 mb-6 text-navy"
            style="border-color: #08be66"
          >
            {{ $t('privacy.sections.derechos') }}
          </h2>
          <div class="space-y-6">
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('privacy.content.arco_titulo') }}
              </h3>
              <p class="text-gray-600 mb-1" v-html="$t('privacy.content.arco_texto')"></p>
              <a
                :href="`mailto:${$t('privacy.content.arco_email')}`"
                class="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-mono transition-all duration-200 group"
                style="color: #08be66"
              >
                <i
                  class="fas fa-envelope text-xs opacity-70 group-hover:opacity-100 transition-opacity"
                ></i>
                {{ $t('privacy.content.arco_email') }}
                <i
                  class="fas fa-external-link-alt text-xs opacity-0 group-hover:opacity-70 transition-opacity"
                ></i>
              </a>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('privacy.content.retencion_titulo') }}
              </h3>
              <ul class="list-disc list-inside ml-4 space-y-1 text-gray-600">
                <li v-html="$t('privacy.content.retencion_academicos')"></li>
                <li v-html="$t('privacy.content.retencion_comerciales')"></li>
                <li v-html="$t('privacy.content.retencion_olvido')"></li>
              </ul>
            </div>
          </div>
        </section>

        <!-- VII. DISPOSICIONES FINALES -->
        <section id="finales" class="scroll-mt-20">
          <h2
            class="text-2xl font-bold border-l-4 pl-4 mb-6 text-navy"
            style="border-color: #08be66"
          >
            {{ $t('privacy.sections.finales') }}
          </h2>
          <div class="space-y-6">
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('privacy.content.cookies_titulo') }}
              </h3>
              <p class="text-gray-600">{{ $t('privacy.content.cookies_texto') }}</p>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('privacy.content.autoridad_titulo') }}
              </h3>
              <p class="text-gray-600" v-html="$t('privacy.content.autoridad_texto')"></p>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2 text-navy">
                {{ $t('privacy.content.cambios_titulo') }}
              </h3>
              <p class="text-gray-600">{{ $t('privacy.content.cambios_texto') }}</p>
            </div>
            <div
              class="border-l-4 p-4 rounded-lg mt-4"
              style="border-color: #08be66; background-color: #08be6610"
            >
              <p class="text-gray-700 text-sm italic">
                <i class="fas fa-info-circle mr-2" style="color: #08be66"></i>
                <span v-html="$t('privacy.content.nota')"></span>
              </p>
            </div>
          </div>
        </section>
      </div>

      <!-- Back to top -->
      <div class="mt-12 text-center">
        <button
          @click="scrollToTop"
          class="inline-flex items-center gap-2 transition font-medium hover:text-cyan"
          style="color: #08be66"
        >
          <i class="fas fa-arrow-up"></i> {{ $t('privacy.back_to_top') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const sections = ref([
  { id: 'fundamentos', key: 'fundamentos' },
  { id: 'gestion', key: 'gestion' },
  { id: 'proteccion', key: 'proteccion' },
  { id: 'gobernanza', key: 'gobernanza' },
  { id: 'seguridad', key: 'seguridad' },
  { id: 'derechos', key: 'derechos' },
  { id: 'finales', key: 'finales' },
])

const dataRows = [
  {
    catKey: 'privacy.content.categorias_identificacion',
    examplesKey: 'privacy.content.categorias_identificacion_ejemplos',
  },
  {
    catKey: 'privacy.content.categorias_academicos',
    examplesKey: 'privacy.content.categorias_academicos_ejemplos',
  },
  {
    catKey: 'privacy.content.categorias_metadatos',
    examplesKey: 'privacy.content.categorias_metadatos_ejemplos',
  },
  {
    catKey: 'privacy.content.categorias_financieros',
    examplesKey: 'privacy.content.categorias_financieros_ejemplos',
  },
]

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
.scroll-mt-20 {
  scroll-margin-top: 5rem;
}
</style>

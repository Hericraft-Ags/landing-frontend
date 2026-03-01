<template>
  <section id="afterschool" class="relative py-24 px-6 overflow-hidden bg-slate-900 text-white">
    <!-- Fondo de estrellas -->
    <div
      class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"
    ></div>
    <div
      class="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-navy/80 to-slate-900 pointer-events-none"
    ></div>

    <div class="max-w-7xl mx-auto relative z-10">
      <!-- Título de la sección -->
      <div class="text-center mb-20">
        <span
          class="inline-block py-1 px-4 rounded-full bg-collegeYellow/10 border border-collegeYellow/40 text-collegeYellow text-xs font-bold uppercase tracking-widest mb-4 animate-pulse"
        >
          🚀 {{ $t('college.after_school_badge') }}
        </span>
        <h2 class="text-5xl md:text-6xl font-display font-bold mb-6">
          College
          <span class="text-[#ff6b35] bg-clip-text bg-gradient-to-r from-[#fbbf24] to-orange-500">
            {{ $t('college.after_school_title_highlight') }}
          </span>
        </h2>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          {{ $t('college.after_school_description') }}
        </p>
      </div>

      <!-- Grid de 3 columnas para AfterSchoolCards -->
      <div class="grid lg:grid-cols-3 gap-8 mb-20">
        <AfterSchoolCard
          v-for="card in afterSchoolCards"
          :key="card.id"
          :title="card.title"
          :description="card.description"
          :icon="card.icon"
          :color="card.color"
          :badge="card.badge"
          :button-text="card.buttonText"
          :button-link="card.buttonLink"
          :features="card.features"
        />
      </div>

      <!-- Parents CTA -->
      <ParentsCTA />
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import AfterSchoolCard from '@/components/ui/AfterSchoolCard.vue'
import ParentsCTA from '@/components/ui/ParentsCTA.vue'

const { t } = useI18n()

const afterSchoolCards = computed(() => [
  {
    id: 'kit',
    title: t('college.after_school_kit_title'),
    description: t('college.after_school_kit_description'),
    icon: 'college-07.png',
    color: 'orange',
    badge: t('college.after_school_kit_badge'),
    buttonText: t('college.after_school_kit_button'),
    buttonLink: 'https://ecommerce.soluciones-hericraft.com/',
  },
  {
    id: 'platform',
    title: t('college.after_school_platform_title'),
    description: t('college.after_school_platform_description'),
    icon: 'college-08.png',
    color: 'blue',
    features: [
      t('college.after_school_platform_feature_1'),
      t('college.after_school_platform_feature_2'),
    ],
  },
  {
    id: 'mentorship',
    title: t('college.after_school_mentorship_title'),
    description: t('college.after_school_mentorship_description'),
    icon: 'college-09.png',
    color: 'purple',
    features: [
      t('college.after_school_mentorship_feature_1'),
      t('college.after_school_mentorship_feature_2'),
    ],
  },
])
</script>

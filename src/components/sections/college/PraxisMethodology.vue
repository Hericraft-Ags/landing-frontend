<template>
  <section id="metodologia" class="bg-slate-50 py-24 px-6 relative overflow-hidden">
    <div class="absolute inset-0 opacity-5 pointer-events-none" :style="patternStyle"></div>

    <div class="max-w-7xl mx-auto relative z-10">
      <div class="text-center mb-20">
        <span
          class="text-[#7c3aed] font-bold uppercase tracking-widest text-sm bg-purple-100 px-4 py-1.5 rounded-full inline-block mb-4"
        >
          {{ $t('college.praxis_badge') }}
        </span>
        <h2 class="text-4xl md:text-5xl font-display font-bold text-navy">
          {{ $t('college.praxis_title') }}
        </h2>
        <p class="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
          {{ $t('college.praxis_subtitle') }}
        </p>
      </div>

      <!-- Línea conectora -->
      <div class="relative grid md:grid-cols-3 gap-8 items-start">
        <div
          class="hidden md:block absolute top-12 left-[15%] right-[15%] h-1.5 bg-gray-200 rounded-full overflow-hidden -z-10"
        >
          <div
            class="h-full w-full bg-gradient-to-r from-collegeBlue via-collegeOrange to-collegePurple opacity-60"
          ></div>
        </div>

        <PraxisStep
          v-for="(step, index) in praxisSteps"
          :key="index"
          :number="index + 1"
          :title="step.title"
          :subtitle="step.subtitle"
          :description="step.description"
          :color="step.color"
          :icon="step.icon"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import PraxisStep from '@/components/ui/PraxisStep.vue'

const { t } = useI18n({ useScope: 'global' })

const patternStyle = {
  backgroundImage: `
    linear-gradient(0deg, transparent 24%, #e5e7eb 25%, #e5e7eb 26%, transparent 27%, transparent 74%, #e5e7eb 75%, #e5e7eb 76%, transparent 77%, transparent),
    linear-gradient(90deg, transparent 24%, #e5e7eb 25%, #e5e7eb 26%, transparent 27%, transparent 74%, #e5e7eb 75%, #e5e7eb 76%, transparent 77%, transparent)
  `,
  backgroundSize: '50px 50px',
}

const praxisSteps = computed(() => [
  {
    title: t('college.praxis_step1_title'),
    subtitle: t('college.praxis_step1_subtitle'),
    description: t('college.praxis_step1_description'),
    color: 'blue',
    icon: 'college-04.png',
  },
  {
    title: t('college.praxis_step2_title'),
    subtitle: t('college.praxis_step2_subtitle'),
    description: t('college.praxis_step2_description'),
    color: 'orange',
    icon: 'college-05.png',
  },
  {
    title: t('college.praxis_step3_title'),
    subtitle: t('college.praxis_step3_subtitle'),
    description: t('college.praxis_step3_description'),
    color: 'purple',
    icon: 'college-06.png',
  },
])
</script>

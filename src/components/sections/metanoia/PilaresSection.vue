<template>
  <section id="pilares" class="py-24 px-6 bg-white relative">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-20">
        <span class="text-metanoiaPink font-bold uppercase tracking-widest text-sm mb-2 block">
          {{ $t('metanoia.pilares_badge') }}
        </span>
        <h2 class="text-4xl font-metanoia font-black text-navy">
          {{ $t('metanoia.pilares_title') }}
        </h2>
        <p class="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
          {{ $t('metanoia.pilares_description') }}
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <PilarCard
          v-for="(pilar, index) in pilares"
          :key="index"
          :title="pilar.title"
          :description="pilar.description"
          :icon="pilar.icon"
          :color="pilar.color"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import PilarCard from '@/components/ui/PilarCard.vue'

const { t } = useI18n()

const pilares = computed(() => [
  {
    title: t('metanoia.pilar_1_title'),
    description: t('metanoia.pilar_1_description'),
    icon: 'METANOIA-07.png',
    color: 'pink',
  },
  {
    title: t('metanoia.pilar_2_title'),
    description: t('metanoia.pilar_2_description'),
    icon: 'METANOIA-09.png',
    color: 'rose',
  },
  {
    title: t('metanoia.pilar_3_title'),
    description: t('metanoia.pilar_3_description'),
    icon: 'METANOIA-10.png',
    color: 'fuchsia',
  },
  {
    title: t('metanoia.pilar_4_title'),
    description: t('metanoia.pilar_4_description'),
    icon: 'METANOIA-11.png',
    color: 'purple',
  },
])
</script>

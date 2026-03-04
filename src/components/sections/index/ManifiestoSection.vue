<template>
  <section id="educacion50" class="py-24 px-6 bg-white" aria-labelledby="educacion50-title">
    <div class="max-w-6xl mx-auto text-center">
      <span
        class="text-green-600 font-bold uppercase tracking-widest text-sm mb-2 block"
        role="text"
      >
        <span class="sr-only">Sección:</span>
        {{ $t('index.manifiest') }}
      </span>
      <h2 id="educacion50-title" class="text-3xl md:text-5xl font-display font-bold text-navy mb-8">
        {{ $t('index.title_manifest') }}
      </h2>
      <p class="text-gray-600 max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
        {{ $t('index.subtitle_manifiest') }}
      </p>

      <div class="grid md:grid-cols-3 gap-8">
        <FeatureCard v-for="feature in features" :key="feature.id" :feature="feature" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import FeatureCard from '@/components/ui/FeatureCard.vue'

const { t } = useI18n({ useScope: 'global' })

const features = computed(() => [
  {
    id: 'invisible-tech',
    title: t('index.card_technology'),
    description: t('index.card_technology_description'),
    icon: 'invisible-technology.svg',
    alt: t('index.card_technology_alt', 'Icono de tecnología invisible'),
  },
  {
    id: 'wellness',
    title: t('index.card_wellness'),
    description: t('index.card_wellness_description'),
    icon: 'bienestar.svg',
    alt: t('index.card_wellness_alt', 'Icono de bienestar integral'),
  },
  {
    id: 'social-impact',
    title: t('index.card_social_impact'),
    description: t('index.card_social_impact_description'),
    icon: 'social-impact.svg',
    alt: t('index.card_social_impact_alt', 'Icono de impacto social'),
  },
])
</script>

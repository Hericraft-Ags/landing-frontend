<template>
  <section class="py-24 px-6 bg-slate-900 relative">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-20">
        <span class="text-cyan font-bold uppercase tracking-widest text-sm mb-2 block">
          {{ $t('processus.servicios_badge') }}
        </span>
        <h2 class="text-4xl font-brand-processus text-white">
          {{ $t('processus.servicios_title') }}
        </h2>
        <p class="text-gray-400 mt-4 max-w-2xl mx-auto">
          {{ $t('processus.servicios_description') }}
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <ServicioCard
          v-for="(servicio, index) in servicios"
          :key="index"
          :title="servicio.title"
          :description="servicio.description"
          :icon="servicio.icon"
          :features="servicio.features"
          :index="index"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import ServicioCard from '@/components/ui/ServicioCard.vue'

const { t } = useI18n()

const servicios = computed(() => [
  {
    title: t('processus.servicio_1_title'),
    description: t('processus.servicio_1_description'),
    icon: 'PROCESSUS-03.png',
    features: [t('processus.servicio_1_feature_1'), t('processus.servicio_1_feature_2')],
  },
  {
    title: t('processus.servicio_2_title'),
    description: t('processus.servicio_2_description'),
    icon: 'PROCESSUS-04.png',
    features: [t('processus.servicio_2_feature_1'), t('processus.servicio_2_feature_2')],
  },
  {
    title: t('processus.servicio_3_title'),
    description: t('processus.servicio_3_description'),
    icon: 'PROCESSUS-05.png',
    features: [t('processus.servicio_3_feature_1'), t('processus.servicio_3_feature_2')],
  },
])
</script>

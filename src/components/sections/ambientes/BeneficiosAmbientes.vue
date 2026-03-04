<template>
  <section class="bg-white py-20">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-12">
        <span class="text-collegeOrange font-bold uppercase text-xs tracking-widest">
          {{ $t('ambientes.beneficios_badge') }}
        </span>
        <h2 class="text-3xl md:text-4xl font-display font-bold text-navy mt-2">
          {{ $t('ambientes.beneficios_title') }}
        </h2>
      </div>

      <div class="grid md:grid-cols-3 gap-10">
        <BeneficioCard
          v-for="(beneficio, index) in beneficios"
          :key="index"
          :title="beneficio.title"
          :description="beneficio.description"
          :icon="beneficio.icon"
          :icon-color="beneficio.iconColor"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import BeneficioCard from '@/components/ui/BeneficioAmbienteCard.vue'

const { t } = useI18n({ useScope: 'global' })

const beneficios = computed(() => [
  {
    title: t('ambientes.beneficio_1_title'),
    description: t('ambientes.beneficio_1_description'),
    icon: 'fas fa-chart-line',
    iconColor: 'orange',
  },
  {
    title: t('ambientes.beneficio_2_title'),
    description: t('ambientes.beneficio_2_description'),
    icon: 'fas fa-brain',
    iconColor: 'cyan',
  },
  {
    title: t('ambientes.beneficio_3_title'),
    description: t('ambientes.beneficio_3_description'),
    icon: 'fas fa-award',
    iconColor: 'purple',
  },
])
</script>

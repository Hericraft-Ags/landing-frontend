<template>
  <section class="py-20 bg-softGray border-t border-gray-200">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-display font-bold text-navy">
          {{ $t('ambientes.pasos_title') }}
        </h2>
        <p class="text-gray-600 mt-2 text-lg">
          {{ $t('ambientes.pasos_subtitle') }}
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <PasoCard
          v-for="(paso, index) in pasos"
          :key="index"
          :number="paso.number"
          :title="paso.title"
          :description="paso.description"
          :color="paso.color"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import PasoCard from '@/components/ui/PasoCard.vue'

const { t } = useI18n()

const pasos = computed(() => [
  {
    number: '1',
    title: t('ambientes.paso_1_title'),
    description: t('ambientes.paso_1_description'),
    color: 'navy',
  },
  {
    number: '2',
    title: t('ambientes.paso_2_title'),
    description: t('ambientes.paso_2_description'),
    color: 'orange',
  },
  {
    number: '3',
    title: t('ambientes.paso_3_title'),
    description: t('ambientes.paso_3_description'),
    color: 'cyan',
  },
])
</script>

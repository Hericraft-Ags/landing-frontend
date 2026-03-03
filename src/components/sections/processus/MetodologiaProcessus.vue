<template>
  <section class="py-24 px-6 bg-navy relative overflow-hidden">
    <div class="max-w-5xl mx-auto relative z-10">
      <div class="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span class="text-cyan font-bold uppercase tracking-widest text-sm mb-4 block">
            {{ $t('processus.metodologia_badge') }}
          </span>
          <h2 class="text-4xl font-brand-processus text-white mb-8">
            {{ $t('processus.metodologia_title') }}
          </h2>

          <div class="space-y-8">
            <div
              v-for="(step, index) in pasos"
              :key="index"
              class="process-step group cursor-pointer"
            >
              <h4
                class="text-xl font-bold text-white group-hover:text-cyan group-hover:translate-x-2 transition-all duration-300"
              >
                {{ step.title }}
              </h4>
              <p
                class="text-sm text-gray-400 mt-2 group-hover:text-gray-300 group-hover:translate-x-2 transition-all duration-300 delay-75"
              >
                {{ step.description }}
              </p>

              <!-- Efecto de brillo en el borde -->
              <div
                class="absolute left-[-2px] top-0 w-[2px] h-0 bg-cyan group-hover:h-full transition-all duration-500"
              ></div>
            </div>
          </div>
        </div>

        <div class="bg-white/5 p-8 rounded-3xl border border-white/10 text-center">
          <h3
            class="text-2xl font-bold text-white mb-6 hover:text-cyan transition-colors duration-300"
          >
            {{ $t('processus.beneficios_title') }}
          </h3>
          <div class="grid grid-cols-2 gap-6">
            <BeneficioCard
              v-for="(beneficio, index) in beneficios"
              :key="index"
              :value="beneficio.value"
              :label="beneficio.label"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import BeneficioCard from '@/components/ui/BeneficioCard.vue'

const { t } = useI18n()

const pasos = computed(() => [
  {
    title: t('processus.paso_1_title'),
    description: t('processus.paso_1_description'),
  },
  {
    title: t('processus.paso_2_title'),
    description: t('processus.paso_2_description'),
  },
  {
    title: t('processus.paso_3_title'),
    description: t('processus.paso_3_description'),
  },
  {
    title: t('processus.paso_4_title'),
    description: t('processus.paso_4_description'),
  },
])

const beneficios = computed(() => [
  {
    value: t('processus.beneficio_1_value'),
    label: t('processus.beneficio_1_label'),
  },
  {
    value: t('processus.beneficio_2_value'),
    label: t('processus.beneficio_2_label'),
  },
  {
    value: t('processus.beneficio_3_value'),
    label: t('processus.beneficio_3_label'),
  },
  {
    value: t('processus.beneficio_4_value'),
    label: t('processus.beneficio_4_label'),
  },
])
</script>

<style scoped>
.process-step {
  position: relative;
  padding-left: 2rem;
  border-left: 2px solid rgba(14, 241, 235, 0.2);
  transition: all 0.3s ease;
}

.process-step::before {
  content: '';
  position: absolute;
  left: -9px;
  top: 0;
  width: 16px;
  height: 16px;
  background: #0a2966;
  border: 2px solid #0ef1eb;
  border-radius: 50%;
  transition: all 0.3s ease;
  z-index: 10;
}

.process-step:hover::before {
  background: #0ef1eb;
  transform: scale(1.2);
  box-shadow: 0 0 15px rgba(14, 241, 235, 0.5);
}
</style>

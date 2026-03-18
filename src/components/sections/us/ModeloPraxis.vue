<template>
  <section id="praxis" class="py-24 px-6 bg-slate-50 relative overflow-hidden">
    <div
      class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] opacity-5"
    ></div>

    <div class="max-w-6xl mx-auto relative z-10">
      <div class="text-center mb-20">
        <span class="text-green font-bold uppercase tracking-widest text-sm mb-2 block">
          {{ $t('us.modelo_educativo') }}
        </span>
        <div class="flex justify-center mb-6">
          <img
            src="/assets/images/us/NOSOTROS-02.svg"
            alt="Modelo PRAXIS TRAMA - Educación 5.0"
            class="max-w-full h-auto w-auto"
            loading="lazy"
          />
        </div>

        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          {{ $t('us.modelo_descripcion') }}
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-6 mb-6">
        <img src="/assets/images/us/NOSOTROS-03.svg" alt="" />
        <img src="/assets/images/us/NOSOTROS-04.svg" alt="" />
        <img src="/assets/images/us/NOSOTROS-05.svg" alt="" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })
</script>

<style scoped>
.text-green {
  color: #39cc7f;
}

.bg-navy {
  background-color: #0a2966;
}
</style>

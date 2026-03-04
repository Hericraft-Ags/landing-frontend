<script setup>
import { ref, onMounted, watch, nextTick } from 'vue'
import { Line } from 'vue-chartjs'
import { useI18n } from 'vue-i18n'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Filler,
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Filler
)

const { t } = useI18n()
const chartRef = ref(null)

const data = ref({
  labels: [
    t('investors.chart_label_2026'),
    t('investors.chart_label_2027'),
    t('investors.chart_label_2028'),
  ],
  datasets: [
    {
      label: t('investors.chart_ingresos_label'),
      data: [5.8, 19.4, 21.02],
      borderColor: '#00F0FF',
      backgroundColor: null,
      borderWidth: 3,
      pointBackgroundColor: '#fff',
      tension: 0.3,
      fill: false,
    },
    {
      label: t('investors.chart_ebitda_label'),
      data: [1.4, 11.5, 13.09],
      borderColor: '#A855F7',
      backgroundColor: null,
      borderWidth: 3,
      pointBackgroundColor: '#fff',
      tension: 0.3,
      fill: false,
    },
  ],
})

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      labels: { color: '#fff' },
    },
    tooltip: {
      backgroundColor: 'rgba(10, 25, 49, 0.9)',
      titleColor: '#fff',
      bodyColor: '#fff',
      borderColor: 'rgba(255,255,255,0.1)',
      borderWidth: 1,
      padding: 12,
      callbacks: {
        label: function (context) {
          return `${context.dataset.label}: $${context.parsed.y} M`
        },
      },
    },
  },
  scales: {
    y: {
      grid: { color: 'rgba(255,255,255,0.05)' },
      ticks: {
        color: '#64748b',
        callback: value => `$${value}M`,
      },
      beginAtZero: true,
    },
    x: {
      grid: { display: false },
      ticks: { color: '#94a3b8' },
    },
  },
}

onMounted(() => {
  watch(
    () => chartRef.value?.chart,
    async chart => {
      if (!chart) return

      await nextTick()

      const ctx = chart.ctx

      const gradient1 = ctx.createLinearGradient(0, 0, 0, 400)
      gradient1.addColorStop(0, 'rgba(0, 240, 255, 0.2)')
      gradient1.addColorStop(1, 'rgba(0, 240, 255, 0)')

      const gradient2 = ctx.createLinearGradient(0, 0, 0, 400)
      gradient2.addColorStop(0, 'rgba(168, 85, 247, 0.2)')
      gradient2.addColorStop(1, 'rgba(168, 85, 247, 0)')

      data.value.datasets[0].backgroundColor = gradient1
      data.value.datasets[1].backgroundColor = gradient2

      chart.update()
    },
    { immediate: true }
  )
})
</script>

<template>
  <section class="w-full bg-[#020617]" id="metricas">
    <div class="max-w-7xl mx-auto py-20 px-4">
      <h2 class="text-3xl font-bold text-white mb-8">{{ t('investors.financial_title') }}</h2>

      <div class="flex flex-col sm:flex-row justify-between items-center my-8 gap-4 px-4">
        <p class="text-gray-400">{{ t('investors.financial_description') }}</p>
        <div class="flex flex-row gap-15 sm:gap-6">
          <div class="flex items-center gap-2 text-sm text-gray-400 flex-row">
            <span class="w-3 h-3 rounded-full bg-[#00F0FF]"></span>
            {{ t('investors.financial_ingresos_label') }}
          </div>
          <div class="flex items-center gap-2 text-sm text-gray-400">
            <span class="w-3 h-3 rounded-full bg-purple-500"></span>
            {{ t('investors.financial_ebitda_label') }}
          </div>
        </div>
      </div>

      <!-- Contenedor del gráfico con altura adecuada -->
      <div class="w-full bg-gray-800 rounded-lg flex items-center justify-center p-4">
        <div class="w-full h-[300px] sm:h-[400px] md:h-[450px]">
          <Line ref="chartRef" :data="data" :options="options" />
        </div>
      </div>

      <div class="flex justify-evenly mt-10 gap-8 flex-wrap">
        <div class="text-white flex flex-col items-center text-center mt-6 gap-2">
          <span class="text-xl sm:text-3xl font-bold glow-text">
            {{ t('investors.metric_1_value') }}
          </span>
          <span class="uppercase text-xs sm:text-s"> {{ t('investors.metric_1_label') }} </span>
        </div>
        <div class="text-white flex flex-col items-center text-center mt-6 gap-2">
          <span class="text-xl sm:text-3xl font-bold glow-text">
            {{ t('investors.metric_2_value') }}
          </span>
          <span class="uppercase text-xs sm:text-s"> {{ t('investors.metric_2_label') }} </span>
        </div>
        <div class="text-white flex flex-col items-center text-center mt-6 gap-2">
          <span class="text-xl sm:text-3xl font-bold glow-text">
            {{ t('investors.metric_3_value') }}
          </span>
          <span class="uppercase text-xs sm:text-s"> {{ t('investors.metric_3_label') }} </span>
        </div>
        <div class="text-white flex flex-col items-center text-center mt-6 gap-2">
          <span class="text-xl sm:text-3xl font-bold glow-text text-[#00F0FF]">
            {{ t('investors.metric_4_value') }}
          </span>
          <span class="uppercase text-xs sm:text-s"> {{ t('investors.metric_4_label') }} </span>
        </div>
      </div>
    </div>
  </section>
</template>

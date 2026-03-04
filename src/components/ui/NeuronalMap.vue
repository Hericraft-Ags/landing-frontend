<template>
  <div
    class="relative h-72 w-full bg-slate-950 rounded-xl mb-6 flex items-center justify-center overflow-hidden border border-white/5 shadow-inner"
  >
    <div
      class="absolute inset-0 opacity-10"
      style="
        background-image:
          linear-gradient(#333 1px, transparent 1px),
          linear-gradient(90deg, #333 1px, transparent 1px);
        background-size: 20px 20px;
      "
    ></div>

    <div class="relative w-full h-full">
      <!-- Nodo central -->
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div class="relative flex items-center justify-center">
          <div
            class="w-16 h-16 rounded-full bg-navy border-2 border-white/20 flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          >
            <i class="fas fa-user-astronaut text-white text-2xl"></i>
          </div>
          <div class="absolute inset-0 rounded-full bg-white/10 animate-ping"></div>
          <div class="absolute -inset-4 rounded-full border border-white/5 animate-spin-slow"></div>
        </div>
      </div>

      <!-- Nodos periféricos -->
      <div
        v-for="(node, index) in nodes"
        :key="index"
        class="absolute z-10 hover:z-30 group/node cursor-pointer"
        :style="{ top: node.top, left: node.left, bottom: node.bottom, right: node.right }"
      >
        <div class="relative flex flex-col items-center">
          <div
            class="rounded-full flex items-center justify-center"
            :class="node.size === 'small' ? 'w-8 h-8' : 'w-10 h-10'"
            :style="{ backgroundColor: node.bgColor, borderColor: node.borderColor }"
          >
            <i
              :class="node.icon"
              :style="{ color: node.iconColor, fontSize: node.size === 'small' ? '12px' : '14px' }"
            ></i>
          </div>

          <!-- Tooltip con estilos mejorados -->
          <div
            v-if="node.tooltip && node.showTooltipOnHover"
            class="absolute whitespace-nowrap opacity-0 group-hover/node:opacity-100 transition-all duration-300 px-3 py-1.5 rounded-lg text-xs font-bold shadow-lg"
            :class="node.tooltipPosition"
            :style="{
              backgroundColor: node.tooltipBg,
              color: node.tooltipColor,
              border: `1px solid ${node.tooltipBorder || 'rgba(255,255,255,0.2)'}`,
              transform: 'translateY(0)',
            }"
          >
            {{ node.tooltip }}
          </div>
        </div>
      </div>

      <!-- Líneas conectoras SVG -->
      <svg class="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color: #8dc63f; stop-opacity: 0" />
            <stop offset="50%" style="stop-color: #8dc63f; stop-opacity: 1" />
            <stop offset="100%" style="stop-color: #00c2ff; stop-opacity: 0" />
          </linearGradient>
        </defs>

        <line
          x1="50%"
          y1="50%"
          x2="22%"
          y2="22%"
          stroke="rgba(141, 198, 63, 0.4)"
          stroke-width="1"
        />
        <circle r="2" fill="#8DC63F">
          <animateMotion dur="2s" repeatCount="indefinite" path="M 250 144 L 110 64" />
        </circle>
        <line
          x1="50%"
          y1="50%"
          x2="78%"
          y2="73%"
          stroke="rgba(0, 194, 255, 0.4)"
          stroke-width="1"
        />
        <line
          x1="50%"
          y1="50%"
          x2="73%"
          y2="27%"
          stroke="rgba(168, 85, 247, 0.4)"
          stroke-width="1"
          stroke-dasharray="4"
        />
        <line
          x1="50%"
          y1="50%"
          x2="27%"
          y2="68%"
          stroke="rgba(249, 115, 22, 0.4)"
          stroke-width="1"
        />
      </svg>
    </div>

    <div
      class="absolute bottom-4 left-4 bg-navy/80 backdrop-blur px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2"
    >
      <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
      <span class="text-[10px] text-gray-300 font-mono">{{ $t('agora.ai_analysis') }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })

const nodes = computed(() => [
  {
    top: '20%',
    left: '20%',
    bgColor: '#0a1931',
    borderColor: '#8dc63f',
    icon: 'fas fa-brain',
    iconColor: '#8dc63f',
    tooltip: t('agora.neuro_tooltip'),
    tooltipPosition: '-top-8',
    tooltipBg: '#8dc63f',
    tooltipColor: '#0a1931',
    tooltipBorder: '#8dc63f',
    showTooltipOnHover: true,
  },
  {
    bottom: '25%',
    right: '20%',
    bgColor: '#0a1931',
    borderColor: '#00c2ff',
    icon: 'fas fa-vr-cardboard',
    iconColor: '#00c2ff',
    tooltip: t('agora.vr_tooltip'),
    tooltipPosition: '-bottom-8',
    tooltipBg: '#00c2ff',
    tooltipColor: '#0a1931',
    tooltipBorder: '#00c2ff',
    showTooltipOnHover: true,
  },
  {
    top: '25%',
    right: '25%',
    size: 'small',
    bgColor: '#0a1931',
    borderColor: '#a855f7',
    icon: 'fas fa-chart-line',
    iconColor: '#a855f7',
    showTooltipOnHover: false,
  },
  {
    bottom: '30%',
    left: '25%',
    size: 'small',
    bgColor: '#0a1931',
    borderColor: '#f97316',
    icon: 'fas fa-balance-scale',
    iconColor: '#f97316',
    showTooltipOnHover: false,
  },
])
</script>

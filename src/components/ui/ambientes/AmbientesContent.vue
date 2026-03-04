<template>
  <div class="order-2 lg:order-1 space-y-8">
    <div
      class="inline-flex items-center gap-2 bg-white/10 text-cyan-bright border border-cyan-bright/30 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest"
      role="status"
      aria-label="Hericraft Design"
    >
      <i class="fas fa-cubes text-sm" aria-hidden="true"></i>
      <span>Hericraft Studio</span>
    </div>

    <h2 id="ambientes-title" class="text-4xl md:text-5xl font-display font-bold leading-tight">
      {{ $t('index.hericraft_studio_message_1') }} <br />
      {{ $t('index.hericraft_studio_message_2') }}
    </h2>

    <p class="text-gray-300 text-lg leading-relaxed max-w-xl">
      {{ $t('index.hericraft_studio_subtitle') }}
    </p>

    <AmbientesFeatureList :features="features" />

    <AmbientesActions :reduce-motion="reduceMotion" @start-design="$emit('start-design')" />
  </div>
</template>

<script setup>
import AmbientesFeatureList from '@/components/ui/ambientes/AmbientesFeatureList.vue'
import AmbientesActions from '@/components/ui/ambientes/AmbientesActions.vue'

defineProps({
  features: {
    type: Array,
    required: true,
  },
  reduceMotion: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['start-design'])
</script>

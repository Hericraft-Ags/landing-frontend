<template>
  <section id="contacto" class="py-24 px-6 text-center bg-blue-900">
    <h2 class="text-3xl md:text-4xl font-brand-processus text-white mb-6">
      {{ $t('processus.cta_title') }}
    </h2>
    <p class="text-gray-400 mb-10 max-w-xl mx-auto">
      {{ $t('processus.cta_description') }}
    </p>
    <div class="flex justify-center gap-4 flex-wrap">
      <button
        class="bg-cyan text-navy px-10 py-4 rounded-full font-bold hover:bg-white transition shadow-[0_0_30px_rgba(14,241,235,0.3)]"
      >
        {{ $t('processus.cta_button_primary') }}
      </button>
      <a
        :href="`mailto:${email}`"
        class="border border-white/30 text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition"
      >
        {{ $t('processus.cta_button_secondary') }}
      </a>
    </div>
  </section>
</template>

<script setup>
const email = 'processus@hericraft.com'
</script>

<template>
  <section class="py-24 px-6 bg-white text-center">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-4xl font-metanoia font-black text-navy mb-8">
        {{ $t('metanoia.cta_title') }}
      </h2>
      <div class="flex justify-center">
        <button
          class="bg-[#d5005f] text-white px-10 py-4 rounded-full font-bold hover:bg-[#0a1931] transition shadow-xl shadow-pink-200 text-lg"
        >
          {{ $t('metanoia.cta_button') }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup></script>

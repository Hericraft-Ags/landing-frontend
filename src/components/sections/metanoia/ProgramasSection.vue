<template>
  <section id="programas" class="py-24 px-6 bg-navy text-white relative overflow-hidden">
    <div
      class="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"
    ></div>

    <div class="max-w-7xl mx-auto relative z-10">
      <div
        class="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8"
      >
        <div>
          <span
            class="text-metanoiaPink font-bold uppercase tracking-widest text-sm bg-white/10 px-3 py-1 rounded-full"
          >
            {{ $t('metanoia.programas_badge') }}
          </span>
          <h2 class="text-4xl font-metanoia font-black mt-4">
            {{ $t('metanoia.programas_title') }}
          </h2>
        </div>
        <div class="mt-6 md:mt-0">
          <button
            class="text-white border border-white/30 px-6 py-3 rounded-full hover:bg-white hover:text-indigo-950 transition text-sm font-bold"
          >
            {{ $t('metanoia.view_calendar') }}
          </button>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <ProgramaCard
          :title="$t('metanoia.programa_parents_title')"
          :description="$t('metanoia.programa_parents_description')"
          image="METANOIA-08.png"
          :badge="$t('metanoia.programa_parents_badge')"
          :link-text="$t('metanoia.programa_parents_link')"
          type="parents"
        />

        <ProgramaCard
          :title="$t('metanoia.programa_children_title')"
          :description="$t('metanoia.programa_children_description')"
          image="METANOIA-12.png"
          :badge="$t('metanoia.programa_children_badge')"
          :link-text="$t('metanoia.programa_children_link')"
          type="children"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import ProgramaCard from '@/components/ui/ProgramaCard.vue'
</script>

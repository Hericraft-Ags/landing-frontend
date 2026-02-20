<template>
  <section id="praxis" class="py-24 px-6 bg-slate-50 relative overflow-hidden">
    <div
      class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] opacity-5"
    ></div>

    <div class="max-w-6xl mx-auto relative z-10">
      <div class="text-center mb-20">
        <span class="text-green font-bold uppercase tracking-widest text-sm mb-2 block">
          Modelo Educativo
        </span>

        <!-- Imagen centrada correctamente -->
        <div class="flex justify-center mb-6">
          <img
            src="/assets/images/us/NOSOTROS-02.svg"
            alt="Modelo PRAXIS TRAMA - Educación 5.0"
            class="max-w-full h-auto w-auto"
            loading="lazy"
          />
        </div>

        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Nuestro modelo pedagógico propio que integra la tecnología con el humanismo.
        </p>
      </div>

      <div class="grid md:grid-cols-5 gap-6 mb-16">
        <PraxisCard
          v-for="(item, index) in praxisItems"
          :key="item.title"
          :number="index + 1"
          :title="item.title"
          :description="item.description"
          :color="item.color"
          :featured="item.featured"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import PraxisCard from '@/components/ui/PraxisCard.vue'

const praxisItems = [
  { title: 'Saber Conocer', description: 'Investigación y teoría.', color: 'navy' },
  { title: 'Saber Construir', description: 'Acción Maker y Prototipado.', color: 'orange' },
  {
    title: 'Saber Compartir',
    description: 'Colaboración y Comunidad.',
    color: 'green',
    featured: true,
  },
  { title: 'Saber Ser', description: 'Ética y Desarrollo Humano.', color: 'pink' },
  { title: 'Saber Transformarse', description: 'Metacognición y Evolución.', color: 'cyan' },
]
</script>

<style scoped>
.text-green {
  color: #39cc7f;
}

.bg-navy {
  background-color: #0a2966;
}
</style>

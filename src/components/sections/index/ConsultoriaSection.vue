<template>
  <section
    id="servicios"
    class="py-24 px-6 bg-white relative overflow-hidden"
    aria-labelledby="servicios-title"
  >
    <div class="absolute inset-0 opacity-30 pointer-events-none">
      <div class="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
    </div>

    <div class="max-w-7xl mx-auto relative z-10">
      <div class="text-center mb-16">
        <div
          class="inline-flex items-center gap-2 bg-navy/5 text-navy border border-navy/10 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
        >
          <i class="fas fa-headset"></i>
          <span>Asesoría Experta</span>
        </div>

        <h2
          id="servicios-title"
          class="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-navy mb-4"
        >
          Consultoría
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
            >especializada</span
          >
        </h2>

        <p class="text-gray-500 max-w-2xl mx-auto text-lg">
          Acompañamiento experto para la excelencia educativa. Transformamos tu institución con
          soluciones a medida.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard
          v-for="service in services"
          :key="service.id"
          :service="service"
          :reduce-motion="reduceMotion"
        />
      </div>

      <div class="text-center mt-16">
        <p class="text-gray-500 mb-6">¿Necesitas una solución personalizada?</p>
        <a
          href="#contacto"
          class="inline-flex items-center gap-3 bg-navy text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
        >
          Agenda una consultoría gratuita
          <i class="fas fa-arrow-right text-sm group-hover:translate-x-1 transition-transform"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, inject } from 'vue'
import ServiceCard from '@/components/ui/ServiceCard.vue'

const reduceMotion = inject('reduceMotion', ref(false))

const services = [
  {
    id: 'diagnostico',
    icon: 'diagnostic.svg',
    iconColor: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-100',
    hoverColor: 'group-hover:border-blue-200',
    title: 'Diagnóstico de innovación',
    description: 'Evaluación profunda de madurez tecnológica y pedagógica de tu institución.',
    features: ['Análisis FODA', 'Benchmarking', 'Plan de acción'],
  },
  {
    id: 'rvoe',
    icon: 'rvoe.svg',
    iconColor: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-100',
    hoverColor: 'group-hover:border-purple-200',
    title: 'Gestión de RVOE',
    description:
      'Acompañamiento integral en trámites ante la SEP para validez oficial de estudios.',
    features: ['Asesoría legal', 'Documentación', 'Seguimiento'],
  },
  {
    id: 'edu-domain',
    icon: 'extension.svg',
    iconColor: 'text-collegeOrange',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-100',
    hoverColor: 'group-hover:border-orange-200',
    title: 'Extensión .EDU',
    description: 'Gestión y obtención de dominios educativos oficiales para tu institución.',
    features: ['Registro ante NIC', 'Configuración', 'Mantenimiento'],
  },
  {
    id: 'ciberseguridad',
    icon: 'cibersecurity.svg',
    iconColor: 'text-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-100',
    hoverColor: 'group-hover:border-red-200',
    title: 'Ciberseguridad educativa',
    description: 'Implementación de protocolos de seguridad y protección de datos sensibles.',
    features: ['Auditoría', 'Firewalls', 'Capacitación'],
  },
  {
    id: 'arquitectura',
    icon: 'design-solutions.svg',
    iconColor: 'text-teal-600',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-100',
    hoverColor: 'group-hover:border-teal-200',
    title: 'Diseño de soluciones',
    description:
      'Arquitectura tecnológica a medida para los desafíos específicos de tu institución.',
    features: ['Infraestructura', 'Software', 'Integración'],
  },
  {
    id: 'capacitacion',
    icon: 'workshop.svg',
    iconColor: 'text-navy',
    bgColor: 'bg-gray-50',
    borderColor: 'border-gray-200',
    hoverColor: 'group-hover:border-gray-300',
    title: 'Capacitación 5.0',
    description: 'Talleres y conferencias para actualizar a tu equipo en tendencias educativas.',
    features: ['Docentes', 'Directivos', 'Administrativos'],
  },
]
</script>

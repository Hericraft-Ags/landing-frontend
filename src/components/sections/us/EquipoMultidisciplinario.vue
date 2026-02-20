<template>
  <section class="py-24 px-6 bg-lightGray border-t border-gray-200">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <span class="text-green font-bold uppercase tracking-widest text-sm mb-2 block">
          Nuestro Motor
        </span>
        <h2 class="text-3xl md:text-4xl font-display font-bold text-navy">
          El Equipo Detrás del Ecosistema
        </h2>
        <p class="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
          6 departamentos especializados trabajando en sincronía para crear experiencias educativas
          de clase mundial.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DepartmentCard
          v-for="dept in departments"
          :key="dept.name"
          :name="dept.name"
          :description="dept.description"
          :icon="dept.icon"
          :color="dept.color"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import DepartmentCard from '@/components/ui/DeparmentCard.vue'

const departments = [
  {
    name: 'Innovación e Investigación',
    description:
      'El laboratorio pedagógico donde nace el modelo PRAXIS y se diseñan los currículos del futuro.',
    icon: 'fa-lightbulb',
    color: 'blue',
  },
  {
    name: 'Desarrollo Web',
    description:
      'Arquitectos digitales que construyen nuestras plataformas LMS, aplicaciones y garantizan la ciberseguridad.',
    icon: 'fa-code',
    color: 'purple',
  },
  {
    name: 'Diseño Gráfico y Editorial',
    description:
      'Creadores de la identidad visual, manuales didácticos y experiencias de usuario (UI/UX) intuitivas.',
    icon: 'fa-pen-nib',
    color: 'pink',
  },
  {
    name: 'Medios Digitales',
    description:
      'Producción audiovisual de alto nivel, animación y creación de contenido educativo multimedia.',
    icon: 'fa-video',
    color: 'orange',
  },
  {
    name: 'Vinculación y Ventas',
    description:
      'El puente estratégico con instituciones y partners. Gestión de relaciones y expansión de mercado.',
    icon: 'fa-handshake',
    color: 'green',
  },
  {
    name: 'Administración y RH',
    description:
      'El pilar que sostiene la operación. Gestión de talento, finanzas y cultura organizacional.',
    icon: 'fa-users-cog',
    color: 'gray',
  },
]
</script>

<!-- components/CourseModal.vue -->
<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        @click.self="closeModal"
      >
        <div
          class="relative w-full max-w-5xl max-h-[90vh] bg-agoraDark rounded-2xl shadow-2xl overflow-hidden border border-gray-700"
        >
          <!-- Header -->
          <div
            class="flex items-center justify-between px-6 py-4 border-b border-gray-700 bg-gradient-to-r from-agoraDark to-agoraLime/10"
          >
            <div class="flex items-center gap-3">
              <div
                class="w-10 h-10 bg-agoraLime rounded-xl flex items-center justify-center shadow-md"
              >
                <i class="fas fa-graduation-cap text-agoraDark text-lg"></i>
              </div>
              <div>
                <h3 class="text-xl font-bold text-white">
                  {{ galaxyName || $t('courses.available_courses') }}
                </h3>
                <p class="text-sm text-gray-400">
                  {{ $t('courses.select_course') }}
                </p>
              </div>
            </div>
            <button
              @click="closeModal"
              class="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-200"
            >
              <i class="fas fa-times text-xl"></i>
            </button>
          </div>

          <!-- Contenido -->
          <div class="p-6 overflow-y-auto" style="max-height: calc(90vh - 80px)">
            <!-- Grid de cursos -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                v-for="course in courses"
                :key="course.id"
                class="group bg-gray-800/50 rounded-xl p-4 border border-gray-700 hover:border-agoraLime transition-all duration-300 cursor-pointer"
                @click="selectCourse(course)"
              >
                <div class="flex items-start gap-4">
                  <!-- Icono del curso -->
                  <div
                    class="w-16 h-16 rounded-xl bg-agoraLime/10 flex items-center justify-center shrink-0 group-hover:bg-agoraLime/20 transition"
                  >
                    <i :class="course.icon" class="text-2xl text-agoraLime"></i>
                  </div>

                  <!-- Información del curso -->
                  <div class="flex-1">
                    <h4 class="font-bold text-white group-hover:text-agoraLime transition">
                      {{ course.title }}
                    </h4>
                    <p class="text-sm text-gray-400 mt-1 line-clamp-2">
                      {{ course.description }}
                    </p>
                    <div class="flex items-center gap-3 mt-2">
                      <span class="text-xs text-agoraLime">
                        <i class="fas fa-clock mr-1"></i>
                        {{ course.duration }}
                      </span>
                      <span class="text-xs text-gray-500">
                        <i class="fas fa-signal mr-1"></i>
                        {{ course.level }}
                      </span>
                    </div>
                  </div>

                  <i
                    class="fas fa-chevron-right text-gray-600 group-hover:text-agoraLime group-hover:translate-x-1 transition-all"
                  ></i>
                </div>
              </div>
            </div>

            <!-- Mensaje si no hay cursos -->
            <div v-if="courses.length === 0" class="text-center py-16">
              <div
                class="w-24 h-24 mx-auto bg-gray-800 rounded-full flex items-center justify-center mb-4"
              >
                <i class="fas fa-book-open text-4xl text-gray-600"></i>
              </div>
              <h4 class="text-lg font-semibold text-gray-400">
                {{ $t('courses.no_courses') }}
              </h4>
              <p class="text-gray-500 mt-1">
                {{ $t('courses.no_courses_message') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, watch, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  galaxyId: {
    type: [String, Number],
    default: null,
  },
  galaxyName: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['close', 'select-course'])

// Cursos de ejemplo por galaxia
const coursesByGalaxy = {
  1: [
    {
      id: 1,
      title: 'Fundamentos de Robótica Educativa',
      description:
        'Aprende los fundamentos de la robótica y cómo aplicarla en el aula con kits accesibles.',
      icon: 'fas fa-robot',
      duration: '8 semanas',
      level: 'Intermedio',
    },
    {
      id: 2,
      title: 'Programación Creativa con Scratch',
      description:
        'Desarrolla habilidades de pensamiento computacional a través de proyectos creativos.',
      icon: 'fas fa-code',
      duration: '6 semanas',
      level: 'Principiante',
    },
    {
      id: 3,
      title: 'STEAM en el Aula: Metodologías Activas',
      description: 'Estrategias para integrar ciencia, tecnología, ingeniería, arte y matemáticas.',
      icon: 'fas fa-chalkboard-user',
      duration: '10 semanas',
      level: 'Avanzado',
    },
  ],
  2: [
    {
      id: 4,
      title: 'Design Thinking para Educadores',
      description:
        'Metodología de innovación para resolver problemas educativos de manera creativa.',
      icon: 'fas fa-lightbulb',
      duration: '6 semanas',
      level: 'Intermedio',
    },
    {
      id: 5,
      title: 'Laboratorio de Innovación Pedagógica',
      description: 'Espacio práctico para diseñar soluciones innovadoras en educación.',
      icon: 'fas fa-flask',
      duration: '8 semanas',
      level: 'Avanzado',
    },
  ],
  3: [
    {
      id: 6,
      title: 'Transformación Digital en Educación',
      description:
        'Herramientas y estrategias para la integración tecnológica en instituciones educativas.',
      icon: 'fas fa-digital-tiling',
      duration: '10 semanas',
      level: 'Intermedio',
    },
    {
      id: 7,
      title: 'IA y Aprendizaje Automático para Docentes',
      description: 'Introducción a la inteligencia artificial aplicada a la educación.',
      icon: 'fas fa-brain',
      duration: '8 semanas',
      level: 'Avanzado',
    },
  ],
  4: [
    {
      id: 8,
      title: 'Emprendimiento Escolar',
      description: 'Desarrolla habilidades emprendedoras en tus estudiantes.',
      icon: 'fas fa-chart-line',
      duration: '6 semanas',
      level: 'Principiante',
    },
    {
      id: 9,
      title: 'Innovación y Liderazgo Educativo',
      description: 'Formación para líderes educativos que buscan transformar sus instituciones.',
      icon: 'fas fa-users',
      duration: '12 semanas',
      level: 'Avanzado',
    },
  ],
  society: [
    {
      id: 10,
      title: 'Comunidades de Aprendizaje',
      description: 'Construye comunidades colaborativas para el desarrollo profesional docente.',
      icon: 'fas fa-handshake',
      duration: '8 semanas',
      level: 'Todos los niveles',
    },
    {
      id: 11,
      title: 'Proyectos de Impacto Social',
      description: 'Diseña e implementa proyectos que transformen tu comunidad educativa.',
      icon: 'fas fa-globe-americas',
      duration: '10 semanas',
      level: 'Intermedio',
    },
  ],
}

const courses = ref([])

// Actualizar cursos cuando cambia la galaxia
watch(
  () => props.galaxyId,
  newId => {
    if (newId) {
      courses.value = coursesByGalaxy[newId] || coursesByGalaxy[1]
    }
  },
  { immediate: true }
)

const selectCourse = course => {
  emit('select-course', course)
  closeModal()
}

const closeModal = () => {
  emit('close')
}

// Manejar tecla Escape
const handleEscape = e => {
  if (e.key === 'Escape' && props.isOpen) {
    closeModal()
  }
}

// Controlar scroll del body
watch(
  () => props.isOpen,
  newVal => {
    if (newVal) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleEscape)
    } else {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleEscape)
    }
  }
)

onUnmounted(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', handleEscape)
})
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Scrollbar personalizada al estilo Ágora */
.overflow-y-auto::-webkit-scrollbar {
  width: 8px;
}
.overflow-y-auto::-webkit-scrollbar-track {
  background: #1f1f1f;
  border-radius: 10px;
}
.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #84cc16;
  border-radius: 10px;
}
.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #65a30d;
}
</style>

<template>
  <div class="border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm">
    <!-- Toolbar mejorado -->
    <div v-if="editor" class="border-b border-gray-200 p-2 bg-gray-50">
      <div class="flex flex-wrap gap-1">
        <!-- Texto -->
        <div class="flex items-center gap-1 bg-white rounded-md border border-gray-200 px-1">
          <button
            type="button"
            @click="editor.chain().focus().toggleBold().run()"
            :class="{ 'bg-gray-200 text-gray-900': editor.isActive('bold') }"
            class="p-1.5 rounded hover:bg-gray-100 transition text-gray-600"
            title="Negrita (Ctrl+B)"
          >
            <i class="fas fa-bold text-sm"></i>
          </button>
          <button
            type="button"
            @click="editor.chain().focus().toggleItalic().run()"
            :class="{ 'bg-gray-200 text-gray-900': editor.isActive('italic') }"
            class="p-1.5 rounded hover:bg-gray-100 transition text-gray-600"
            title="Cursiva (Ctrl+I)"
          >
            <i class="fas fa-italic text-sm"></i>
          </button>
          <button
            type="button"
            @click="editor.chain().focus().toggleStrike().run()"
            :class="{ 'bg-gray-200 text-gray-900': editor.isActive('strike') }"
            class="p-1.5 rounded hover:bg-gray-100 transition text-gray-600"
            title="Tachado (Ctrl+Shift+X)"
          >
            <i class="fas fa-strikethrough text-sm"></i>
          </button>
          <button
            type="button"
            @click="editor.chain().focus().toggleCode().run()"
            :class="{ 'bg-gray-200 text-gray-900': editor.isActive('code') }"
            class="p-1.5 rounded hover:bg-gray-100 transition text-gray-600"
            title="Código"
          >
            <i class="fas fa-code text-sm"></i>
          </button>
        </div>

        <div class="w-px h-6 bg-gray-300 mx-1"></div>

        <!-- Headings -->
        <div class="flex items-center gap-1 bg-white rounded-md border border-gray-200 px-1">
          <button
            type="button"
            @click="setHeading(1)"
            :class="{ 'bg-gray-200 text-gray-900': editor.isActive('heading', { level: 1 }) }"
            class="p-1.5 rounded hover:bg-gray-100 transition text-gray-600 text-xs font-bold w-8"
            title="Título H1"
          >
            H1
          </button>
          <button
            type="button"
            @click="setHeading(2)"
            :class="{ 'bg-gray-200 text-gray-900': editor.isActive('heading', { level: 2 }) }"
            class="p-1.5 rounded hover:bg-gray-100 transition text-gray-600 text-xs font-bold w-8"
            title="Título H2"
          >
            H2
          </button>
          <button
            type="button"
            @click="setHeading(3)"
            :class="{ 'bg-gray-200 text-gray-900': editor.isActive('heading', { level: 3 }) }"
            class="p-1.5 rounded hover:bg-gray-100 transition text-gray-600 text-xs font-bold w-8"
            title="Título H3"
          >
            H3
          </button>
        </div>

        <div class="w-px h-6 bg-gray-300 mx-1"></div>

        <!-- Listas -->
        <div class="flex items-center gap-1 bg-white rounded-md border border-gray-200 px-1">
          <button
            type="button"
            @click="editor.chain().focus().toggleBulletList().run()"
            :class="{ 'bg-gray-200 text-gray-900': editor.isActive('bulletList') }"
            class="p-1.5 rounded hover:bg-gray-100 transition text-gray-600"
            title="Lista desordenada"
          >
            <i class="fas fa-list-ul text-sm"></i>
          </button>
          <button
            type="button"
            @click="editor.chain().focus().toggleOrderedList().run()"
            :class="{ 'bg-gray-200 text-gray-900': editor.isActive('orderedList') }"
            class="p-1.5 rounded hover:bg-gray-100 transition text-gray-600"
            title="Lista ordenada"
          >
            <i class="fas fa-list-ol text-sm"></i>
          </button>
          <button
            type="button"
            @click="editor.chain().focus().toggleTaskList().run()"
            :class="{ 'bg-gray-200 text-gray-900': editor.isActive('taskList') }"
            class="p-1.5 rounded hover:bg-gray-100 transition text-gray-600"
            title="Lista de tareas"
          >
            <i class="fas fa-tasks text-sm"></i>
          </button>
        </div>

        <div class="w-px h-6 bg-gray-300 mx-1"></div>

        <!-- Alineación -->
        <div class="flex items-center gap-1 bg-white rounded-md border border-gray-200 px-1">
          <button
            type="button"
            @click="editor.chain().focus().setTextAlign('left').run()"
            :class="{ 'bg-gray-200 text-gray-900': editor.isActive({ textAlign: 'left' }) }"
            class="p-1.5 rounded hover:bg-gray-100 transition text-gray-600"
            title="Alinear izquierda"
          >
            <i class="fas fa-align-left text-sm"></i>
          </button>
          <button
            type="button"
            @click="editor.chain().focus().setTextAlign('center').run()"
            :class="{ 'bg-gray-200 text-gray-900': editor.isActive({ textAlign: 'center' }) }"
            class="p-1.5 rounded hover:bg-gray-100 transition text-gray-600"
            title="Centrar"
          >
            <i class="fas fa-align-center text-sm"></i>
          </button>
          <button
            type="button"
            @click="editor.chain().focus().setTextAlign('right').run()"
            :class="{ 'bg-gray-200 text-gray-900': editor.isActive({ textAlign: 'right' }) }"
            class="p-1.5 rounded hover:bg-gray-100 transition text-gray-600"
            title="Alinear derecha"
          >
            <i class="fas fa-align-right text-sm"></i>
          </button>
        </div>

        <div class="w-px h-6 bg-gray-300 mx-1"></div>

        <!-- Insertar -->
        <div class="flex items-center gap-1 bg-white rounded-md border border-gray-200 px-1">
          <button
            type="button"
            @click="addImage"
            class="p-1.5 rounded hover:bg-gray-100 transition text-gray-600"
            title="Insertar imagen"
          >
            <i class="fas fa-image text-sm"></i>
          </button>
          <button
            type="button"
            @click="addLink"
            :class="{ 'bg-gray-200 text-gray-900': editor.isActive('link') }"
            class="p-1.5 rounded hover:bg-gray-100 transition text-gray-600"
            title="Insertar enlace (Ctrl+K)"
          >
            <i class="fas fa-link text-sm"></i>
          </button>
          <button
            type="button"
            @click="editor.chain().focus().setHorizontalRule().run()"
            class="p-1.5 rounded hover:bg-gray-100 transition text-gray-600"
            title="Línea horizontal"
          >
            <i class="fas fa-minus text-sm"></i>
          </button>
        </div>

        <div class="w-px h-6 bg-gray-300 mx-1"></div>

        <!-- Deshacer/Rehacer -->
        <div class="flex items-center gap-1 bg-white rounded-md border border-gray-200 px-1">
          <button
            type="button"
            @click="editor.chain().focus().undo().run()"
            :disabled="!editor.can().undo()"
            class="p-1.5 rounded hover:bg-gray-100 transition text-gray-600 disabled:opacity-30"
            title="Deshacer (Ctrl+Z)"
          >
            <i class="fas fa-undo-alt text-sm"></i>
          </button>
          <button
            type="button"
            @click="editor.chain().focus().redo().run()"
            :disabled="!editor.can().redo()"
            class="p-1.5 rounded hover:bg-gray-100 transition text-gray-600 disabled:opacity-30"
            title="Rehacer (Ctrl+Y)"
          >
            <i class="fas fa-redo-alt text-sm"></i>
          </button>
        </div>

        <div class="w-px h-6 bg-gray-300 mx-1"></div>

        <!-- Limpiar formato -->
        <button
          type="button"
          @click="editor.chain().focus().unsetAllMarks().run()"
          class="p-1.5 rounded hover:bg-gray-100 transition text-gray-600 bg-white border border-gray-200"
          title="Limpiar formato"
        >
          <i class="fas fa-eraser text-sm"></i>
        </button>
      </div>

      <!-- Barra de estado -->
      <div
        class="flex justify-between items-center mt-2 pt-1 border-t border-gray-100 text-xs text-gray-400"
      >
        <div class="flex gap-3">
          <span>
            <i class="far fa-keyboard mr-1"></i>
            {{ wordCount }} palabras
          </span>
          <span>
            <i class="far fa-file-alt mr-1"></i>
            {{ characterCount }} caracteres
          </span>
        </div>
        <div class="flex gap-2">
          <button
            type="button"
            @click="toggleFullscreen"
            class="hover:text-gray-600 transition"
            title="Pantalla completa"
          >
            <i class="fas fa-expand-alt text-xs"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Editor Content -->
    <div v-if="!editor" class="p-8 text-center text-gray-400">
      <i class="fas fa-spinner fa-spin mr-2"></i>
      Cargando editor...
    </div>
    <editor-content v-else :editor="editor" class="prose max-w-none p-4 min-h-[400px]" />
  </div>
</template>

<script setup>
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Heading from '@tiptap/extension-heading' // Importar explícitamente
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import Placeholder from '@tiptap/extension-placeholder'
import TextAlign from '@tiptap/extension-text-align'
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'
import { watch, computed, ref } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])
const isFullscreen = ref(false)

// Contadores
const wordCount = computed(() => {
  if (!editor.value) return 0
  const text = editor.value.getText()
  return text
    .trim()
    .split(/\s+/)
    .filter(word => word.length > 0).length
})

const characterCount = computed(() => {
  if (!editor.value) return 0
  return editor.value.getText().length
})

// Funciones para headings
const setHeading = level => {
  console.log('=== HEADING DEBUG ===')
  console.log('Editor existe?', !!editor.value)
  console.log('Nivel solicitado:', level)
  console.log('Estado actual del contenido:', editor.value?.getHTML())
  if (!editor.value) return
  editor.value.chain().focus().toggleHeading({ level }).run()

  console.log('Nuevo estado:', editor.value.getHTML())
}

const editor = useEditor({
  content: props.modelValue,
  extensions: [
    StarterKit, // Mantenemos StarterKit
    Heading.configure({
      // Configuración explícita de headings
      levels: [1, 2, 3],
    }),
    Image.configure({
      inline: true,
      allowBase64: true,
    }),
    Link.configure({
      openOnClick: false,
      HTMLAttributes: {
        target: '_blank',
        rel: 'noopener noreferrer',
      },
    }),
    Placeholder.configure({
      placeholder: 'Escribe el contenido del artículo aquí...',
    }),
    TextAlign.configure({
      types: ['heading', 'paragraph'],
    }),
    TaskList,
    TaskItem.configure({
      nested: true,
    }),
  ],
  editorProps: {
    attributes: {
      class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl focus:outline-none',
    },
  },
  onUpdate: ({ editor }) => {
    emit('update:modelValue', editor.getHTML())
  },
})

// Observar cambios en modelValue
watch(
  () => props.modelValue,
  newValue => {
    const isSame = editor.value?.getHTML() === newValue
    if (editor.value && !isSame && newValue !== undefined) {
      editor.value.commands.setContent(newValue)
    }
  }
)

const addImage = () => {
  if (!editor.value) return
  const url = window.prompt('URL de la imagen:')
  if (url && url.trim()) {
    editor.value.chain().focus().setImage({ src: url }).run()
  }
}

const addLink = () => {
  if (!editor.value) return
  const url = window.prompt('URL del enlace:')
  if (url && url.trim()) {
    editor.value.chain().focus().setLink({ href: url }).run()
  }
}

const toggleFullscreen = () => {
  const editorElement = document.querySelector('.ProseMirror')
  if (!editorElement) return

  if (!isFullscreen.value) {
    editorElement.requestFullscreen()
    isFullscreen.value = true
  } else {
    document.exitFullscreen()
    isFullscreen.value = false
  }
}
</script>

<style scoped>
.ProseMirror {
  outline: none;
  min-height: 450px;
}

.ProseMirror p.is-editor-empty:first-child::before {
  content: attr(data-placeholder);
  float: left;
  color: #adb5bd;
  pointer-events: none;
  height: 0;
}

.ProseMirror img {
  max-width: 100%;
  height: auto;
  margin: 1rem 0;
  border-radius: 0.5rem;
}

.ProseMirror a {
  color: #3b82f6;
  text-decoration: underline;
}

.ProseMirror ul,
.ProseMirror ol {
  padding-left: 1.5rem;
}

/* Headings - con !important para sobreescribir Tailwind */
.ProseMirror h1 {
  font-size: 2rem !important;
  font-weight: 700 !important;
  line-height: 1.2 !important;
  margin-top: 1rem !important;
  margin-bottom: 1rem !important;
}

.ProseMirror h2 {
  font-size: 1.5rem !important;
  font-weight: 700 !important;
  line-height: 1.3 !important;
  margin-top: 0.75rem !important;
  margin-bottom: 0.75rem !important;
}

.ProseMirror h3 {
  font-size: 1.25rem !important;
  font-weight: 700 !important;
  line-height: 1.4 !important;
  margin-top: 0.5rem !important;
  margin-bottom: 0.5rem !important;
}

/* Resto de estilos */
.ProseMirror blockquote {
  border-left: 4px solid #e5e7eb;
  padding-left: 1rem;
  margin: 1rem 0;
  color: #6b7280;
  font-style: italic;
}

.ProseMirror code {
  background-color: #f3f4f6;
  padding: 0.2rem 0.4rem;
  border-radius: 0.25rem;
  font-family: monospace;
  font-size: 0.875em;
}

.ProseMirror pre {
  background-color: #1f2937;
  color: #f3f4f6;
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-x: auto;
}

.ProseMirror pre code {
  background-color: transparent;
  color: inherit;
  padding: 0;
}

/* Task list styles */
.ProseMirror ul[data-type='taskList'] {
  list-style: none;
  padding-left: 0;
}

.ProseMirror ul[data-type='taskList'] li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.ProseMirror ul[data-type='taskList'] li > label {
  margin-right: 0.5rem;
}

/* Fullscreen mode */
.ProseMirror:fullscreen {
  background-color: white;
  padding: 2rem;
  min-height: 100vh;
}
</style>

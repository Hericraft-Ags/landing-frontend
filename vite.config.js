import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [vue(), vueDevTools()],
  optimizeDeps: {
    include: [
      '@tiptap/core',
      '@tiptap/extension-table',
      '@tiptap/extension-table-row',
      '@tiptap/extension-table-cell',
      '@tiptap/extension-table-header',
      '@tiptap/starter-kit',
      '@tiptap/extension-heading',
      '@tiptap/extension-image',
      '@tiptap/extension-link',
      '@tiptap/extension-placeholder',
      '@tiptap/extension-text-align',
      '@tiptap/extension-task-list',
      '@tiptap/extension-task-item',
    ],
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  define: {
    'import.meta.env.VITE_API_URL': JSON.stringify(process.env.VITE_API_URL),
  },
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
    },
  },
})

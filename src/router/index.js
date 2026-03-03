import { createRouter, createWebHistory } from 'vue-router'
const IndexView = () => import('@/views/IndexView.vue')
const MainLayout = () => import('@/layouts/MainLayout.vue')
const NosotrosView = () => import('@/views/NosotrosView.vue')
const CollegeView = () => import('@/views/CollegeView.vue')
const AgoraView = () => import('@/views/AgoraView.vue')
const MetanoiaView = () => import('@/views/MetanoiaView.vue')
const ProcessusView = () => import('@/views/ProcessusView.vue')
const InversionistasView = () => import('@/views/InversionistasView.vue')
const PrivacityView = () => import('@/views/PrivacityView.vue')
const ThermsView = () => import('@/views/ThermsView.vue')
const QuestionsView = () => import('@/views/QuestionsView.vue')
const AmbientesView = () => import('@/views/AmbientesView.vue')

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        component: IndexView,
        meta: {
          themeColor: '#111319',
          accessibilityColor: '#08BE66',
          colorTextAccessibility: '#fff',
        },
      },
      {
        path: 'nosotros',
        component: NosotrosView,
        meta: {
          themeColor: '#111319',
          accessibilityColor: '#08BE66',
          colorTextAccessibility: '#fff',
        },
      },
      {
        path: 'college',
        component: CollegeView,
        meta: {
          themeColor: '#085899',
          accessibilityColor: '#00c2ff',
          colorTextAccessibility: '#fff',
        },
      },
      {
        path: 'agora',
        component: AgoraView,
        meta: {
          themeColor: '#2f302d',
          accessibilityColor: '#8dc63f',
          colorTextAccessibility: '#fff',
        },
      },
      {
        path: 'metanoia',
        component: MetanoiaView,
        meta: {
          themeColor: '#0a0e17',
          accessibilityColor: '#d5005f',
          colorTextAccessibility: '#fff',
        },
      },
      {
        path: 'processus',
        component: ProcessusView,
        meta: {
          themeColor: '#0f172b',
          accessibilityColor: '#0ef1eb',
          colorTextAccessibility: '#fff',
        },
      },
      {
        path: 'ambientes',
        component: AmbientesView,
        meta: {
          themeColor: '#0B2966',
          accessibilityColor: '#0EF1EB',
          colorTextAccessibility: '#fff',
        },
      },
      {
        path: 'aviso-privacidad',
        component: PrivacityView,
        meta: {
          themeColor: '#111319',
          accessibilityColor: '#08BE66',
          colorTextAccessibility: '#fff',
        },
      },
      {
        path: 'terminos-y-condiciones',
        component: ThermsView,
        meta: {
          themeColor: '#111319',
          accessibilityColor: '#08BE66',
          colorTextAccessibility: '#fff',
        },
      },
      {
        path: 'preguntas-frecuentes',
        component: QuestionsView,
        meta: {
          themeColor: '#111319',
          accessibilityColor: '#08BE66',
          colorTextAccessibility: '#fff',
        },
      },
    ],
  },
  {
    path: '/inversionistas',
    component: InversionistasView,
    meta: {
      themeColor: '#020617',
      accessibilityColor: '#00f0ff',
      colorTextAccessibility: '#fff',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

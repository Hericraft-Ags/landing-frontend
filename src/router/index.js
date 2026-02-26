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
    path: '/college',
    component: CollegeView,
  },
  {
    path: '/agora',
    component: AgoraView,
  },
  {
    path: '/metanoia',
    component: MetanoiaView,
  },
  {
    path: '/processus',
    component: ProcessusView,
  },
  {
    path: '/inversionistas',
    component: InversionistasView,
    meta: {
      themeColor: '#020617',
      accessibilityColor: '#020617',
      colorTextAccessibility: '#fff',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

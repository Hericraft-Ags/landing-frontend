import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '@/views/IndexView.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import NosotrosView from '@/views/NosotrosView.vue'
import CollegeView from '@/views/CollegeView.vue'
import AgoraView from '@/views/AgoraView.vue'
import MetanoiaView from '@/views/MetanoiaView.vue'
import ProcessusView from '@/views/ProcessusView.vue'

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
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

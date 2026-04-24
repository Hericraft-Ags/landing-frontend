import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'

const IndexView = () => import('@/views/IndexView.vue')
const MainLayout = () => import('@/layouts/MainLayout.vue')
const AdminLayout = () => import('@/layouts/AdminLayout.vue')
const InvestorsLayout = () => import('@/layouts/InvestorsLayout.vue')
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
const SaberesView = () => import('@/views/SaberesView.vue')

// Admin views
const AdminLoginView = () => import('@/views/admin/LoginView.vue')
const AdminDashboardView = () => import('@/views/admin/AdminDashboardView.vue')
const AdminCategoriesView = () => import('@/views/admin/categories/AdminCategoriesView.vue')
const AdminCategoryFormView = () => import('@/views/admin/categories/AdminCategoryFormView.vue')
const AdminAuthorsView = () => import('@/views/admin/authors/AdminAuthorsView.vue')
const AdminAuthorFormView = () => import('@/views/admin/authors/AdminAuthorFormView.vue')
const AdminArticlesView = () => import('@/views/admin/articles/AdminArticlesView.vue')
const AdminArticleFormView = () => import('@/views/admin/articles/AdminArticleFormView.vue')
const AdminVideosView = () => import('@/views/admin/videos/AdminVideosView.vue')
const AdminVideoFormView = () => import('@/views/admin/videos/AdminVideoFormView.vue')
const AdminPodcastsView = () => import('@/views/admin/podcasts/AdminPodcastsView.vue')
const AdminPodcastFormView = () => import('@/views/admin/podcasts/AdminPodcastFormView.vue')
const AdminDownloadsView = () => import('@/views/admin/downloads/AdminDownloadsView.vue')
const AdminDownloadFormView = () => import('@/views/admin/downloads/AdminDownloadFormView.vue')

// Guard de autenticación - CORREGIDO
const requireAuth = async (to, from) => {
  const authStore = useAuthStore()

  // Inicializar autenticación
  await authStore.initAuth()

  if (authStore.isAuthenticated.value) {
    return true
  }

  return '/admin/login'
}

// Guard para admin - CORREGIDO
const requireAdmin = async (to, from) => {
  const authStore = useAuthStore()

  await authStore.initAuth()

  if (authStore.isAdmin.value) {
    return true
  }

  return '/admin/login'
}

// Guard para invitados - CORREGIDO
const requireGuest = async (to, from) => {
  const authStore = useAuthStore()

  await authStore.initAuth()

  if (authStore.isAuthenticated.value) {
    return '/admin/dashboard'
  }

  return true
}

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
        path: 'saberes',
        component: SaberesView,
        meta: {
          themeColor: '#051B45',
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
    component: InvestorsLayout,
    children: [
      {
        path: '',
        component: InversionistasView,
        meta: {
          themeColor: '#020617',
          accessibilityColor: '#00f0ff',
          colorTextAccessibility: '#fff',
        },
      },
    ],
  },
  //AdminRoutes
  {
    path: '/admin/login',
    name: 'AdminLogin',
    component: AdminLoginView,
    beforeEnter: requireGuest,
  },
  {
    path: '/admin',
    component: AdminLayout,
    beforeEnter: requireAuth,
    children: [
      {
        path: '',
        redirect: '/admin/dashboard',
      },
      {
        path: 'dashboard',
        name: 'AdminDashboard',
        component: AdminDashboardView,
        beforeEnter: requireAdmin,
      },
      {
        path: 'categories',
        name: 'AdminCategories',
        component: AdminCategoriesView,
        beforeEnter: requireAdmin,
      },
      {
        path: 'categories/create',
        name: 'AdminCategoryCreate',
        component: AdminCategoryFormView,
        beforeEnter: requireAdmin,
      },
      {
        path: 'categories/:id/edit',
        name: 'AdminCategoryEdit',
        component: AdminCategoryFormView,
        beforeEnter: requireAdmin,
      },
      {
        path: 'authors',
        name: 'AdminAuthors',
        component: AdminAuthorsView,
        beforeEnter: requireAdmin,
      },
      {
        path: 'authors/create',
        name: 'AdminAuthorCreate',
        component: AdminAuthorFormView,
        beforeEnter: requireAdmin,
      },
      {
        path: 'authors/:id/edit',
        name: 'AdminAuthorEdit',
        component: AdminAuthorFormView,
        beforeEnter: requireAdmin,
      },
      {
        path: 'articles',
        name: 'AdminArticles',
        component: AdminArticlesView,
        beforeEnter: requireAdmin,
      },
      {
        path: 'articles/create',
        name: 'AdminArticleCreate',
        component: AdminArticleFormView,
        beforeEnter: requireAdmin,
      },
      {
        path: 'articles/:id/edit',
        name: 'AdminArticleEdit',
        component: AdminArticleFormView,
        beforeEnter: requireAdmin,
      },
      {
        path: 'videos',
        name: 'AdminVideos',
        component: AdminVideosView,
        beforeEnter: requireAdmin,
      },
      {
        path: 'videos/create',
        name: 'AdminVideoCreate',
        component: AdminVideoFormView,
        beforeEnter: requireAdmin,
      },
      {
        path: 'videos/:id/edit',
        name: 'AdminVideoEdit',
        component: AdminVideoFormView,
        beforeEnter: requireAdmin,
      },
      {
        path: 'podcasts',
        name: 'AdminPodcast',
        component: AdminPodcastsView,
        beforeEnter: requireAdmin,
      },
      {
        path: 'podcasts/create',
        name: 'AdminPodcastCreate',
        component: AdminPodcastFormView,
        beforeEnter: requireAdmin,
      },
      {
        path: 'podcasts/:id/edit',
        name: 'AdminPodcastEdit',
        component: AdminPodcastFormView,
        beforeEnter: requireAdmin,
      },
      {
        path: 'downloads',
        name: 'AdminDownloads',
        component: AdminDownloadsView,
        beforeEnter: requireAdmin,
      },
      {
        path: 'downloads/create',
        name: 'AdminDownloadsCreate',
        component: AdminDownloadFormView,
        beforeEnter: requireAdmin,
      },
      {
        path: 'downloads/:id/edit',
        name: 'AdminDownloadsEdit',
        component: AdminDownloadFormView,
        beforeEnter: requireAdmin,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

// Guard global para autenticación - CORREGIDO
router.beforeEach(async to => {
  const authStore = useAuthStore()

  // Inicializar autenticación en cada navegación
  await authStore.initAuth()

  // Si la ruta requiere autenticación y no está autenticado
  if (to.meta.requiresAuth && !authStore.isAuthenticated.value) {
    return '/admin/login'
  }

  // Si la ruta es solo para invitados y está autenticado
  if (
    to.matched.some(record => record.path === '/admin/login') &&
    authStore.isAuthenticated.value
  ) {
    return '/admin/dashboard'
  }

  document.title = to.meta.title
    ? `${to.meta.title} | Hericraft`
    : 'Hericraft - Soluciones Educativas'

  return true
})

export default router

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/DefaultLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/HomePage.vue'),
      },
      {
        path: '/filter',
        name: 'Filter',
        component: () => import('@/views/filter/FilterPage.vue'),
      },
      {
        path: '/filter/:id',
        name: 'FilterDetails',
        component: () => import('@/views/FilterDetailsPage.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

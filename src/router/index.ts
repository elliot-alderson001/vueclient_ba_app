import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import ExampleHomeView from '../views/ExampleHomeView.vue'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/example_home',
    name: 'examplehome',
    component: ExampleHomeView,
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

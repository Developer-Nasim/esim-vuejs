import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Days from '../components/Days.vue'
import PersonalErea from '../components/PersonalErea.vue'
import PersonalAreaPackage from '../components/PersonalAreaPackage.vue'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/Days',
      name: 'days',
      component: Days
    }, 
    {
      path: '/PersonalErea',
      name: 'PersonalErea',
      component: PersonalErea
    }, 
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/PersonalAreaPackage',
      name: 'PersonalAreaPackage',
      component: PersonalAreaPackage
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/About.vue')
    }
  ]
})

export default router

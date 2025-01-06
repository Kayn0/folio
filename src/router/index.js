import { createRouter, createWebHistory } from 'vue-router'

import Work from '../views/Work/Work.vue'
import About from '../views/About/About.vue'

import OnlineBookings from '../views/Projects/OnlineBookings.vue'
import SalesDashboard from '../views/Projects/SalesDashboard.vue'
import ClinicalNotes from '../views/Projects/ClinicalNotes.vue'

const routes = [
  {
    path: '/',
    name: 'Work',
    component: Work,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/online-bookings',
    name: 'OnlineBookings',
    component: OnlineBookings,
  },
  {
    path: '/sales-dashboard',
    name: 'SalesDashboard',
    component: SalesDashboard,
  },
  {
    path: '/clinical-notes',
    name: 'ClinicalNotes',
    component: ClinicalNotes,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0 }
  }
})

export default router

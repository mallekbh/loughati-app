import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import TestNiveau from '@/components/TestNiveau'
import Activites from '@/components/Activites'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/testniveau',
      name: 'TestNiveau',
      component: TestNiveau
    },
    {
      path: '/activites',
      name: 'Activites',
      component: Activites
    }
  ]
})
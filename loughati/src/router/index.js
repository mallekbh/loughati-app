import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import TestNiveau from '@/components/TestNiveau'
import Activites from '@/components/Activites'
import Apropos from '@/components/Apropos'
import Dico from '@/components/Dictionnaire'

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
    },
    {
      path: '/apropos',
      name: 'Apropos',
      component: Apropos
    },
    {
      path: '/dico',
      name: 'Dico',
      component: Dico
    },
  ]
})

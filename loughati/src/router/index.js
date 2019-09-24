 import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import TestNiveau from '@/components/TestNiveau'
import Activites from '@/components/Activites'
import Apropos from '@/components/Apropos'
import Dico from '@/components/Dictionnaire'
import Bravo from '@/components/Bravo'

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
      path: '/bravo',
      name: 'Bravo',
      component: Bravo
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
      path: '/activities/:step',
      name: 'Activities',
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

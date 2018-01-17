import Vue from 'vue'
import Router from 'vue-router'
import Quiz from '@/pages/Quiz'
import Results from '@/pages/Results'
import Start from '@/pages/Start'
import Timeout from '@/pages/Timeout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start
    },
    {
      path: '/quiz',
      name: 'Quiz',
      component: Quiz
    },
    {
      path: '/results',
      name: 'Results',
      component: Results
    },
    {
      path: '/oot-ae-time',
      name: 'Timeout',
      component: Timeout
    }
  ]
})

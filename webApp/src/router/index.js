import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [

    {
      path: '/',
      name: 'HelloWorld',
      component: resolve => require(['../components/Login'], resolve),
    },
    {
      path: '/test',
      name: 'Test',
      component: resolve => require(['../components/Test'], resolve),
    },
    {
      path: '/login',
      component: resolve => require(['../components/Login'], resolve),
    },
    {
      path: '/home',
      component: resolve => require(['../components/Home'], resolve),
    }
  ]
})

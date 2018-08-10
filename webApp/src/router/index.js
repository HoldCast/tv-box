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
        },
        {
            path: '/details',
            component: resolve => require(['../components/Details'], resolve),
        },
        {
            path: '/download',
            component: resolve => require(['../components/DownLoad'], resolve),
        }
    ]
})

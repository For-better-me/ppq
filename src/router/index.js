import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index'
import order from '@/components/order/order'
import mine from '@/components/mine/mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    }
  ]
})

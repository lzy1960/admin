import Vue from 'vue'
import Router from 'vue-router'
import admin from '@/components/admin'
import dashboard from '@/components/dashboard'
import statcenter from '@/components/statcenter'
import trade from '@/components/trade'
import goods from '@/components/goods'
import orderlist from '@/components/orderlist'
import customer from '@/components/customer'
import setting from '@/components/setting'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'admin',
    component: admin,
    children: [{
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard
    }, {
      path: '/statcenter',
      name: 'statcenter',
      component: statcenter
    }, {
      path: '/trade',
      name: 'trade',
      component: trade
    }, {
      path: '/goods',
      name: 'goods',
      component: goods
    }, {
      path: '/orderlist',
      name: 'orderlist',
      component: orderlist
    }, {
      path: '/customer',
      name: 'customer',
      component: customer
    }, {
      path: '/setting',
      name: 'setting',
      component: setting
    }]
  }]
})

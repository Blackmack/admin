/**
 * Created by Administrator on 2018/3/29.
 */
import Vue from 'vue'
import Router from 'vue-router'
import Login from '../view/sys/login'
import Index from '../view/index'
import Category from '../view/category/index'
import Merchant from '../view/merchant/index'
import Logistics from '../view/logistics/index'
import Msarea from '../view/msarea/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component:Login
    },
    {
      path: '/',
      name: 'index',
      component: Index,
      children: [
        {
          path: '/category',
          component: Category
        },
        {
          path: '/merchant',
          name: 'Merchant',
          component: Merchant
        },
        {
          path: '/logistics',
          name: 'Logistics',
          component: Logistics
        },
        {
          path: '/msarea',
          name: 'Msarea',
          component: Msarea
        }
      ]
    }
  ]
})

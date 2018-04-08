/**
 * Created by Administrator on 2018/3/29.
 */
import Vue from 'vue'
import Router from 'vue-router'
import Login from '../view/sys/login'
import Index from '../view/index'
import Category from '../view/category/index'
import Test2 from '../view/test2'
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
          path: '/test2',
          name: 'test2',
          component: Test2
        }
      ]
    }
  ]
})

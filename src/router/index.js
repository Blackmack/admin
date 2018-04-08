/**
 * Created by Administrator on 2018/3/29.
 */
import Vue from 'vue'
import Router from 'vue-router'
import Login from '../view/sys/login.vue'
import Index from '../view/index.vue'
import Category from '../view/category/category.vue'
import Test1 from '../view/test1.vue'
import Test2 from '../view/test2.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/login',
      name:'login',
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
          path: '/test1',
          component: Test1
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

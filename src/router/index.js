/**
 * Created by Administrator on 2018/3/29.
 */
import Vue from 'vue'
import Router from 'vue-router'
import Index from '../view/index.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }
  ]
})

/**
 * Created by Administrator on 2018/3/29.
 */
import Vue from 'vue'
import Vuex from 'vuex'
// import login from './modules/login'
import actions from './actions'
import mutations from './mutations'



Vue.use(Vuex)
const state = {
   user:{
     userId: '',
     userName: ''
   },
   token:'888888'
}
const store = new Vuex.Store({
   state,
  actions,
  mutations
})
export default store

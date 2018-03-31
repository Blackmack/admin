/**
 * Created by Administrator on 2018/3/29.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'


Vue.use(Vuex)
const state = {
   user:{
     userId: '',
     userName: ''
   },
   token:null
}


const store = new Vuex.Store({
   state,
   modules:{
     login
   }
})
export default store

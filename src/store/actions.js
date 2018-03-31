/**
 * Created by Administrator on 2018/3/29.
 */
import {sysLogin} from '../api/getData'
import {LOGIN} from './mutations-type'

export default {
  // sysLogin({commit},params){
  //
  //   commit('Login',params)
  // }
  async sysSignin ({commit,state},payload) {
    let res = await sysLogin(payload)
    commit('Login',res)
  }
}



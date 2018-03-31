/**
 * Created by Administrator on 2018/3/29.
 */
import {sysLogin} from '../api/getData'


export default {
  // sysLogin({commit},params){
  //
  //   commit('Login',params)
  // }
  sysSignin ({commit},payload) {
    let result = sysLogin(payload)
    commit('Login',result)
  }
}



/**
 * Created by Administrator on 2018/3/29.
 */
import {sysLogin} from '../api/getData'
import {LOGIN} from './mutations-type'

const mutations = {
  [LOGIN](state,payload){
     let res=sysLogin(payload)

  }
}

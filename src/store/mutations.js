/**
 * Created by Administrator on 2018/3/29.
 */
import {sysLogin} from '../api/getData'
import {LOGIN} from './mutations-type'
import {setStore,getStore} from '../config/mUtils'
const mutations = {
  [LOGIN](state,userDetail){
    //，这里state用于修改state
    state.user = userDetail;
    setStore("userDetail",userDetail);
  }
}

export default mutations;

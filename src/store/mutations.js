/**
 * Created by Administrator on 2018/3/29.
 */
import {sysLogin} from '../api/getData'
import * as types from './mutations-type'
import {setStore,getStore} from '../config/mUtils'
const mutations = {
  [types.LOGIN](state,userDetail){
    //，这里state用于修改state
    state.user = userDetail;
    setStore("userDetail",userDetail);
  },
  // 获取品类数据,在考虑品类这类业务数据要不要放到state里？
  [types.GETCATEGORY] (state,data) {

  }
}

export default mutations;

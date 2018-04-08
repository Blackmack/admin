/**
 * Created by Administrator on 2018/3/29.
 */
import {sysLogin} from '../api/getData'
import {LOGIN} from './mutations-type'

const actions ={
  async sysSignin({commit,state},payload) {
    //这里commit可以提交到mutations
    //state可直接取到state的值，作为参数来异步请求
    let res = await sysLogin(payload)
    commit(LOGIN,res)
  }
}

export default actions;



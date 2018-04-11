/**
 * Created by Administrator on 2018/3/29.
 */
import {sysLogin,getCategory,saveCategory,updateCategory,deleteCategory,
  getMerchant,saveMerchant,updateMerchant,delMerchant
} from '../api/getData'
import * as types  from './mutations-type'

const actions ={
  async sysSignin({commit,state},payload) {
    //这里commit可以提交到mutations
    //state可直接取到state的值，作为参数来异步请求
    let res = await sysLogin(payload)
    commit(types.LOGIN,res)
  },
  /******品类管理**************/
  async getCategoryList({commit,state}, payload) {
    let res= await getCategory(payload);
    return res;
  },
  async saveCategory({commit,state}, payload) {
    let res= await saveCategory(payload);
    return res;
  },
  async updateCategory({commit,state}, payload) {
    let res= await updateCategory(payload);
    return res;
  },
  async deleteCategory({commit,state}, payload) {
    let res= await deleteCategory(payload);
    return res;
  },
  /************商户管理****************/
  async getMerchantList({commit,state}, payload) {
    let res= await getMerchant(payload);
    return res.data;
  },
  async saveMerchant({commit,state}, payload) {
    let res= await saveMerchant(payload);
    return res.data;
  },
  async updateMerchant({commit,state}, payload) {
    let res= await updateMerchant(payload);
    return res.data;
  },
  async deleteMerchant({commit,state}, payload) {
    let res= await delMerchant(payload);
    return res.data;
  }

}

export default actions;



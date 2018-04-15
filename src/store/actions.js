/**
 * Created by Administrator on 2018/3/29.
 */
import {sysLogin,getCategory,saveCategory,updateCategory,deleteCategory,
  getMerchant,saveMerchantModel,updateMerchantModel,delMerchantModel,
  getLogisticsList,saveLogistics,updateLogistics,deleteLogistics,
  saveMsArea,getMsAreaList
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
    return res.data;
  },
  async saveCategory({commit,state}, payload) {
    let res= await saveCategory(payload);
    return res.data;
  },
  async updateCategory({commit,state}, payload) {
    let res= await updateCategory(payload);
    return res.data;
  },
  async deleteCategory({commit,state}, payload) {
    let res= await deleteCategory(payload);
    return res.data;
  },
  /************商户管理****************/
  async getMerchantList({commit,state}, payload) {
    let res= await getMerchant(payload);
    return res.data;
  },
  async saveMerchant({commit,state}, payload) {
    let res= await saveMerchantModel(payload);
    return res.data;
  },
  async updateMerchant({commit,state}, payload) {
    let res= await updateMerchantModel(payload);
    return res.data;
  },
  async deleteMerchant({commit,state}, payload) {
    let res= await delMerchantModel(payload);
    return res.data;
  },

  /********物流管理***********/
  async getLogisticsList({commit,state}, payload) {
    let res= await getLogisticsList(payload);
    return res.data;
  },
  async saveLogistics({commit,state},payload){
    let res= await saveLogistics(payload);
    return res.data;
  },
  async updateLogistics({commit,state},payload){
    let res= await updateLogistics(payload);
    return res.data;
  },
  async deleteLogistics({commit,state},payload){
    let res= await deleteLogistics(payload);
    return res.data;
  },

  /********地域***********/
  async getMsAreaList({commit,state}, payload) {
    let res= await getMsAreaList(payload);
    return res.data;
  },
  async saveMsArea({commit,state},payload){
    let res= await saveMsArea(payload);
    return res.data;
  },





}

export default actions;



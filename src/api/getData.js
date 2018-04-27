/**
 * Created by Administrator on 2018/3/29.
 */
import axios from '../config/axios'

export const sysLogin = (data)=>axios.post('/sys/login',data)
/*********类别管理*****************/
export const getCategory = (data , payload)=>axios.post('/service/queryCategory',data)
export const saveCategory = (data , payload)=>axios.post('/service/insertCategory',data)
export const updateCategory = (data , payload)=>axios.post('/service/updateCategory',data)
export const deleteCategory = (data , payload)=>axios.post('/service/updateCategory',data)
/******商户管理***********/
export const getMerchant = (data , payload)=>axios.post('/shop/search',data)
export const getMerchantById = (data , payload)=>axios.post('/shop/findById',data)
export const saveMerchantModel = (data , payload)=>axios.post('/shop/new',data)
export const updateMerchantModel = (data , payload)=>axios.post('/shop/update',data)
export const delMerchantModel = (data , payload)=>axios.post('/shop/delete',data)

/*******地区管理***********/
export const getMsArea = (data , payload)=>axios.post('/service/queryMsArea',data)
export const saveMsAreaModel = (data , payload)=>axios.post('/service/insertMsArea',data)
export const updateMsAreaModel = (data , payload)=>axios.post('service/updateMsArea',data)
export const delMsAreaModel = (data , payload)=>axios.post('service/updateMsArea',data)

/*******物流管理********/
export const getLogisticsList = (data,payload) => axios.post('/service/queryMsLogistics',data);
export const saveLogistics = (data,payload) => axios.post('/service/insertMsLogistics',data);
export const updateLogistics = (data,payload) => axios.post('/service/updateMsLogistics',data);
export const deleteLogistics = (data,payload) => axios.post('/service/updateMsLogistics',data);

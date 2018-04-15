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
export const getMerchant = (data , payload)=>axios.post('/service/queryMerchants',data)
export const saveMerchantModel = (data , payload)=>axios.post('/service/insertMerchants',data)
export const updateMerchantModel = (data , payload)=>axios.post('/service/updateMerchants',data)
export const delMerchantModel = (data , payload)=>axios.post('/service/updateChooseMerchants',data)
/*******物流管理********/
export const getLogisticsList = (data,payload) => axios.post('/service/queryMsLogistics',data);
export const saveLogistics = (data,payload) => axios.post('/service/insertMsLogistics',data);
export const updateLogistics = (data,payload) => axios.post('/service/updateMsLogistics',data);
export const deleteLogistics = (data,payload) => axios.post('/service/updateMsLogistics',data);

/*******地域管理**********/
'getMsAreaList','saveMsArea','updateMsArea','deleteMsArea'
export const getMsAreaList = (data,payload) => axios.post('/service/queryMsArea',data);
export const saveMsArea = (data,payload) => axios.post('/service/insertMsArea',data);
// export const updateMsArea = (data,payload) => axios.post('/service/updateMsLogistics',data);
// export const deleteMsArea = (data,payload) => axios.post('/service/updateMsLogistics',data);

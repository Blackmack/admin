/**
 * Created by Administrator on 2018/3/29.
 */
import axios from '../config/axios'

export const sysLogin = (data)=>axios.post('/sys/login',data)
/*********类别管理*****************/
export const getCategory = (data , payload)=>axios.post('/generator/category/info',data)
export const saveCategory = (data , payload)=>axios.post('/generator/category/save',data)
export const updateCategory = (data , payload)=>axios.post('/generator/category/update',data)
export const deleteCategory = (data , payload)=>axios.post('/generator/category/delete',data)
/******商户管理***********/
export const getMerchant = (data , payload)=>axios.post('/merchantAccount//info',data)
export const saveMerchant = (data , payload)=>axios.post('/merchantAccount//save',data)
export const updateMerchant = (data , payload)=>axios.post('/merchantAccount//update',data)
export const delMerchant = (data , payload)=>axios.post('/merchantAccount/delete',data)

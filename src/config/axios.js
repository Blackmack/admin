/**
 * Created by Administrator on 2018/3/30.
 */
import axios from 'axios'
import env from './env'

const instance = axios.create({
  baseURL:env.baseUrl,
  timeout:1000,
  headers: {'X-Requested-with':'XMLHttpRequest','Content-Type': 'application/x-www-form-urlencoded'}
})

axios.interceptors.request.use(function (config) {
  console.log(config)
  //todo 发送请求前
  return config
},function (error) {
   //todo 请求异常时
  return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {
  //todo 发送请求前
  return response
},function (error) {
  //todo 请求异常时
  return Promise.reject(error)
})
export default instance

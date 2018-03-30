/**
 * Created by Administrator on 2018/3/29.
 */
import axios from '../config/axios'

export const sysLogin = ()=>axios.post('/sys/login',payload)

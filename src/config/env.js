/**
 * Created by Administrator on 2018/3/30.
 */
let baseUrl = '';

if (process.env.NODE_ENV == 'development') {
  baseUrl = '/';
}else{
  baseUrl = '/';
}
export default {
  baseUrl
}

/**
 * Created by Administrator on 2018/3/30.
 */
let baseUrl = '';

if (process.env.NODE_ENV == 'development') {
  baseUrl = 'http://www.mindsem.com:3100';
}else{
  baseUrl = 'http://cangdu.org:8001';
}
export {
  baseUrl,
}

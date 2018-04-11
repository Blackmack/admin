let validate ={
  validateUsername :(rule, value, callback) => {
    if (!value) {
      return callback(new Error('用户名不能为空'));
    }
    return callback();
  },
  validatePass :(rule, value, callback) => {
    if (value === '') {
      callback(new Error('请输入密码'));
    } else {
      callback();
    }
  },
  validateCaptcha : (rule, value, callback) => {
    if (value === '') {
      callback(new Error('请输入图片验证码'));
    }
    else {
      callback();
    }
  }
}
export default validate;

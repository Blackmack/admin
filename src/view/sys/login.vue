<template>
  <div class="login-form">
    <el-form :model="loginForm" status-icon :rules="rules2" ref="loginForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="username">
        <el-input type="text" v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="captcha">
        <el-input  type="text" v-model="loginForm.captcha"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
        <el-button @click="resetForm('loginForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import {sysLogin} from '@/api/getData'
  export default {
    data() {
      var validateUsername = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }
        return callback();
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      var validateCaptcha = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入图片验证码'));
        }
        else {
          callback();
        }
      };
      return {
        loginForm: {
          username: '',
          password: '',
          captcha: ''
        },
        rules2: {
          username: [
            { validator: validateUsername, trigger: 'blur' }
          ],
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          captcha: [
            { validator: validateCaptcha, trigger: 'blur' }
          ]
        }
      };
    },
    computed: mapState(['token']),
    methods: {
     async submitForm(formName) {
        this.$refs[formName].validate(async (valid) => {
          if (valid) {
            alert('submit!');
            const res = await sysLogin(this.loginForm)
            console.log(res);
//            this.$message({
//              type: 'success',
//              message: '登录成功'
//            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style>
  .login-form{
    width: 500px;
    margin:0 auto;
    margin-top:100px;
  }
</style>

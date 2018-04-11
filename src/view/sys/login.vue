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
  import {mapState, mapActions} from 'vuex'
//  import {LOGIN} from '../../store/mutations-type'
  import {sysLogin} from '@/api/getData'
  import validate from '../common/validate'

  export default {

    data() {
      return {
        loginForm: {
          username: '',
          password: '',
          captcha: '',
          now:'2'
        },
        rules2: {
          username: [
            {validator: validate.validateUsername, trigger: 'blur'}
          ],
          password: [
            {validator: validate.validatePass, trigger: 'blur'}
          ],
          captcha: [
            {validator: validate.validateCaptcha, trigger: 'blur'}
          ]
        }
      };
    },
    computed: {
    ...mapState(['token']),
      getNow:function () {
        return Date.now()
      }
    },
    methods: {
      ...mapActions(['sysSignin']),
     async submitForm(formName) {
//        this.getNow()
        this.$refs[formName].validate(async(valid) => {
          if (valid) {
            console.log(1);
//            this.commit('erere')
            //const res = await sysLogin(this.loginForm)
            const res = await this.sysSignin(this.loginForm);
            console.log(2);
            this.$message({
              type: 'success',
              message: '登录成功'
            });
          } else {
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

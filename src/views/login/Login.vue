<template>
<div class="login-page display_flex justify-content__center align-items__center" ref="login">
  <div class="login-page__form">
    <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="60px">
      <el-form-item label="账号" prop="account">
        <el-input v-model="loginForm.account"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginForm.password" @keyup.enter.native="submit('loginForm')"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="submit-btn" @click="submit('loginForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</div>
</template>
<script>
import { $post } from '../../api/http';
import $api from '../../api/api';

export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        account: '',
        password: '',
      },
      rules: {
        account: [
          { required: true, message: '请输入账号', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ],
      },
    };
  },
  mounted() {
    this.$refs.login.style.height = `${document.documentElement.clientHeight}px`;
  },
  methods: {
    submit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // do login
          const body = Object.assign({}, this.loginForm);
          $post($api.login, body).then(() => {
            // todo cookie存储用户信息
            this.$router.push({ name: 'Home' });
          }).catch((error) => {
            this.$message(error.message);
          });
        }
      });
    },
  },
};
</script>

<style lang="scss">
.login-page {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/image/login.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .login-page__form {
    width: 360px;
    margin-top: -100px;
    background: rgba(255,255,255,0.2);
    border-radius: 4px;
    padding: 20px 20px 0 10px;
  }
  .submit-btn {
    width: 100%;
  }
}
</style>

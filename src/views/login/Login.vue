<template>
  <div class="login-page display_flex justify-content__center align-items__center" ref="login">
    <div class="login-page__form">
      <el-form :model="loginForm" :rules="loginRules" ref="loginForm" label-width="60px">
        <el-form-item label="账号" prop="username">
          <el-input v-model="loginForm.username"/>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="loginForm.password"
            @keyup.enter.native="login('loginForm')"
          />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            class="submit-btn"
            :loading="loading"
            @click="login('loginForm')"
          >登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import Cookies from "js-cookie"

export default {
  name: "Login",
  data() {
    const validateUsername = (rule, value, callback) => {
      if (value.length < 4) {
        callback(new Error("The Username can not be less than 4 digits"));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error("The Password can not be less than 6 digits"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: "",
        password: ""
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", validator: validateUsername }
        ],
        password: [
          { required: true, trigger: "blur", validator: validatePassword }
        ]
      },
      loading: false,
      redirect: null
    };
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    login(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // a mock server will be created later
          this.loading = true
          Cookies.set("username", this.login.username)
          this.$router.push({ path: this.redirect || "/" })
        } else {
          return false
        }
      });
    }
  }
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
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    padding: 20px 20px 0 10px;
  }
  .submit-btn {
    width: 100%;
  }
}
</style>

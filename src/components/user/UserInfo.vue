<template>
  <div class="user-login-info">
    <template v-if="userLogin">

    </template>
    <template v-else>
      <span>登录 | 注册</span>
    </template>
  </div>
</template>

<script>
import { isLogin } from '../../service/user/baseInfo';

export default {
  name: 'UserInfo',
  data() {
    return {
      userLogin: false,
    };
  },
  beforeCreate() {
    this.userLogin = isLogin();
  },
};
</script>

<style scoped>

</style>

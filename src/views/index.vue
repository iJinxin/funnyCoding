<template>
  <div :class="$style.container">
    <header :class="$style.el_header">
      <v-header/>
    </header>
    <router-view/>
    <footer :class="$style.footer">
      <v-footer/>
    </footer>
  </div>
</template>

<script>
import vHeader from '@/components/header/Header';
import vFooter from '@/components/footer/Footer';
import { isLogin } from '@/service/user/baseInfo';

export default {
  data() {
    return {};
  },
  components: {
    vHeader, vFooter,
  },
  beforeCreate() {
    const userLogin = isLogin();
    if (!userLogin) {
      // this.$router.replace({name: 'Login'});
    }
  },
};
</script>

<style module lang="scss">
  .container {
    position: relative;
    min-height: 100%;
    padding-bottom: $footer_height;
    box-sizing: border-box;
  }

  .el_header {
    border-bottom: 1px solid #d8d8d8;
  }

  .footer {
    height: $footer_height;
    width: 100%;
    background: $darkish;
    position: absolute;
    bottom: 0;
  }
</style>

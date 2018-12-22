<template>
  <div class="app-wrapper layout-v1">
    <header class="app-header">
      <v-header/>
    </header>
    <main class="app-main">
      <router-view/>
    </main>
    <footer class="app-footer">
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

<style lang="scss">
  .app-wrapper {
    padding-bottom: $footer_height;
    box-sizing: border-box;
    .app-header {
      height: 50px;
      width: 100%;
      position: relative;
      z-index: 1000;
    }
    .app-footer {
      height: $footer_height;
      width: 100%;
      background: $dark;
      position: absolute;
      bottom: 0;
    }
  }
</style>

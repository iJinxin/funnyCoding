<template>
  <div class="app-wrapper layout-v1">
    <main class="app-main">
      <router-view/>
    </main>
    <footer class="app-footer">
      <v-footer/>
    </footer>
  </div>
</template>

<script>
import vFooter from "@/components/common/Footer";
import { isLogin } from "@/service/user/baseInfo";

export default {
  components: {
    vFooter
  },
  data() {
    return {};
  },
  beforeCreate() {
    const userLogin = isLogin();
    if (!userLogin) {
      // this.$router.replace({name: 'Login'});
    }
  }
};
</script>

<style lang="scss">
.app-wrapper {
  padding-bottom: $footer_height;
  box-sizing: border-box;
  .app-main {
    margin-left: 58px;
  }
  .app-footer {
    height: $footer_height;
    background: $dark;
    position: absolute;
    left: 58px;
    right: 0;
    bottom: 0;
  }
}
</style>

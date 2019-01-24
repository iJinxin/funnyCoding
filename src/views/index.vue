<template>
  <div class="app-wrapper layout-v1">
    <sidebar/>
    <main class="main-container" :class="{'collapse':sidebarCollapse}">
      <header-nav/>
      <router-view/>
    </main>
  </div>
</template>

<script>
import sidebar from "@/views/layout/sidebar"
import headerNav from "@/views/layout/headerNav"
import { mapGetters } from 'vuex'

export default {
  components: {
    sidebar, headerNav
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      'sidebarCollapse'
    ])
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/style/variables.scss';
.app-wrapper {
  height: 100%;
  .main-container {
    min-height: 100%;
    margin-left: 200px;
    transition: margin-left 0.3s;
  }
  .main-container.collapse {
    margin-left: 58px;
  }
}
</style>

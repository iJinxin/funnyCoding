<template>
  <div class="app-wrapper layout-v1">
    <sidebar/>
    <main class="main-container display_flex flex_direction__column" :class="{'collapse':sidebarCollapse}">
      <header-nav/>
      <section class="app-main flex_1">
        <keep-alive>
          <router-view/>
        </keep-alive>
      </section>
    </main>
  </div>
</template>

<script>
import sidebar from "@/views/layout/sidebar";
import headerNav from "@/views/layout/headerNav";
import { mapGetters } from "vuex";

export default {
  name: 'Layout',
  components: {
    sidebar,
    headerNav
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["sidebarCollapse"])
  }
};
</script>

<style lang="scss" scoped>
.app-wrapper {
  height: 100%;
  .main-container {
    min-height: 100%;
    margin-left: 200px;
    transition: margin-left 0.3s ease-in-out;
  }
  .main-container.collapse {
    margin-left: 58px;
  }
}
</style>

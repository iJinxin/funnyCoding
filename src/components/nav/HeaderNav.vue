<template>
  <el-menu
    :class="$style.nav"
    :default-active="onRoutes"
    mode="horizontal"
    router
    text-color="#000"
    active-text-color="#23B7FF">
    <template v-for="item in navItems">
      <el-menu-item
        :index="item.index"
        :key="item.index"
        :class="$style.nav_item">{{item.title}}
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script>
export default {
  name: 'HeaderNav',
  data() {
    return {
      navItems: [
        { index: '/', title: '首页' },
        { index: '/live-course', title: '直播课程' },
        { index: '/training-course', title: '培训课程' },
        { index: '/data-center', title: '资料中心' },
        { index: '/teachers', title: '名师风采' },
      ],
    };
  },
  computed: {
    onRoutes() {
      return this.$route.path;
    },
  },
};
</script>

<style module>
  .nav {
    border: 0 !important;
  }

  .nav_item {
    font-size: 16px;
    padding: 0 40px;
    font-weight: 600;
    height: 74px !important;
    line-height: 74px !important;
  }
</style>

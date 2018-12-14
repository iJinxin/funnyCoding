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
        { index: '/task', title: '任务' },
        { index: '/diary', title: '日记' },
        { index: '/book', title: '阅读' },
        { index: '/music', title: '音乐' },
        { index: '/movie', title: '电影' },
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
    padding: 0 20px;
    height: 50px !important;
    line-height: 50px !important;
  }
</style>

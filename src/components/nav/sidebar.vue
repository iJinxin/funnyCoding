<template>
  <nav ref="sidebar" class="nav">
    <el-scrollbar class="default-scrollbar" wrap-class="default-scrollbar__wrap">
      <el-menu
        class="el-menu-vertical-demo"
        mode="vertical"
        router
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
        text-color="#000"
        active-text-color="#23B7FF">
        <template v-for="item in navItems">
          <template v-if="item.subItem">
            <el-submenu :key="item.index">
              <template v-for="sub in item.subItem">
                <el-menu-item :index="sub.index" :key="sub.index">{{sub.title}}</el-menu-item>
              </template>
            </el-submenu>
          </template>
          <template v-else>
            <el-menu-item :index="item.index" :key="item.index">{{item.title}}</el-menu-item>
          </template>
        </template>
      </el-menu>
    </el-scrollbar>
  </nav>
</template>
<script>
export default {
  name: 'sidebar',
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
      isCollapse: false,
      barHeight: '',
    };
  },
  mounted() {
    this.barHeight = `${document.documentElement.clientHeight}`;
    this.$refs.sidebar.style.height = `${this.barHeight - 50}px`;
    window.onresize = () => {
      this.barHeight = `${document.documentElement.clientHeight}`;
      this.$refs.sidebar.style.height = `${this.barHeight - 50}px`;
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key);
    },
    handleClose(key, keyPath) {
      console.log(key);
    },
  },
};
</script>
<style lang="scss">
.nav {
  position: absolute;
  z-index: 10;
  left: 0;
  top: 50px;
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
  }
}
</style>


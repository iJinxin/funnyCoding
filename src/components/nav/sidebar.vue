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
        text-color="#b4bcc8">
        <template v-for="item in navItems">
          <template v-if="item.subItems">
            <el-submenu :index="item.index" :key="item.index">
              <template slot="title">
                <i class="iconfont" v-bind:class="item.icon"></i>
                <span>{{item.name}}</span>
              </template>
              <template v-for="sub in item.subItems">
                <el-menu-item :index="sub.index" :key="sub.index">{{sub.name}}</el-menu-item>
              </template>
            </el-submenu>
          </template>
          <template v-else>
            <el-menu-item :index="item.index" :key="item.index">{{item.name}}</el-menu-item>
          </template>
        </template>
      </el-menu>
    </el-scrollbar>
  </nav>
</template>
<script>
import Navigations from '@/assets/data/navigator.json';

export default {
  name: 'sidebar',
  data() {
    return {
      navItems: Navigations.navItems,
      isCollapse: false,
      barHeight: '',
    };
  },
  mounted() {
    console.log(this.navItems);
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
  background: #364150;
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
  }
  .el-menu {
    border: 0;
    background: transparent;
  }
  .el-menu-item,
  .el-submenu__title {
    height: 46px;
    line-height: 46px;
    border-top: 1px solid #3d4957;
    &:hover, &:focus {
      background: #2c3542;
    }
  }
}
</style>


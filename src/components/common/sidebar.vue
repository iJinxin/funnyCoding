<template>
  <nav ref="sidebar" class="global-nav">
    <el-scrollbar class="default-scrollbar" wrap-class="default-scrollbar__wrap">
      <div class="nav-control display_flex justify-content__space-between">
        <div class="nav-control__menu display_flex justify-content__center align-items__center pointer" @click="toggleMenu">
          <i class="iconfont ali-icon-caidan"></i>
        </div>
        <div class="nav-control__home display_flex justify-content__center align-items__center"
             v-bind:class="{hidden: isCollapse}" @click="backHome()">
          <i class="iconfont ali-icon-home" style="font-size: 21px"></i>
        </div>
      </div>
      <el-menu
        class="el-menu-vertical-demo"
        mode="vertical"
        :collapse="isCollapse"
        unique-opened
        @select="onSelect"
        :default-active="$route.path"
        router
        text-color="#b4bcc8">
        <template v-for="item in navItems">
          <template v-if="item.subItems">
            <el-submenu :index="item.index" :key="item.index">
              <template slot="title">
                <i class="iconfont" v-bind:class="item.icon"></i>
                <span>{{item.name}}</span>
              </template>
              <template v-for="sub in item.subItems">
                <el-menu-item :index="sub.index" :key="sub.index">
                  <i class="iconfont" v-bind:class="sub.icon"></i>
                  {{sub.name}}
                </el-menu-item>
              </template>
            </el-submenu>
          </template>
          <template v-else>
            <el-menu-item :index="item.index" :key="item.index">
              <i class="iconfont" v-bind:class="item.icon"></i>
              <span slot="title">{{item.name}}</span>
            </el-menu-item>
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
      barHeight: '',
      isCollapse: false,
      defaultActive: '',
    };
  },
  mounted() {
    this.barHeight = `${document.documentElement.clientHeight}`;
    this.$refs.sidebar.style.height = `${this.barHeight}px`;
    window.onresize = () => {
      this.barHeight = `${document.documentElement.clientHeight}`;
      this.$refs.sidebar.style.height = `${this.barHeight}px`;
    };
  },
  methods: {
    toggleMenu() {
      this.isCollapse = !this.isCollapse;
    },
    backHome() {
      this.isCollapse = true;
      this.defaultActive = 'home';
      this.$router.push({ name: 'Home' });
    },
    onSelect() {
      this.isCollapse = true;
    },
  },
};
</script>
<style lang="scss">
.global-nav {
  position: absolute;
  z-index: 10;
  left: 0;
  background: $deepGray;
  .nav-control {
    height: 46px;
    background: $green;
    .nav-control__menu,
    .nav-control__home {
      width: 58px;
      transition: 0.3s;
      overflow: hidden;
      > i{
        color: $white;
        font-size: 16px;
      }
      &:hover {
        background: $lightGreen;
      }
    }
    .nav-control__home.hidden {
      width: 0;
      transition: 0.3s;
    }
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
  }
  .el-menu {
    border: 0;
    background: transparent;
  }
  .el-menu--collapse {
    width: 58px;
  }
  .el-menu-item {
    height: 40px;
    line-height: 40px;
  }
  .el-menu-item,
  .el-submenu__title {
    height: 44px;
    line-height: 44px;
    &:hover, &:focus {
      background: $darkish;
    }
  }
  .el-menu-item, .el-submenu {
    border-top: 1px solid #3d4957;
    > i {
      vertical-align: unset;
    }
  }
}
  .el-menu--vertical {
    .el-menu-item {
      height: 40px;
      line-height: 40px;
    }
  }
</style>


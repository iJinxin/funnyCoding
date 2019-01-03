<template>
  <nav ref="sidebar" class="global-nav">
    <el-scrollbar class="default-scrollbar" wrap-class="default-scrollbar__wrap">
      <el-menu
        class="el-menu-vertical-demo"
        mode="vertical"
        @select="onSelect"
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
              {{item.name}}
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </el-scrollbar>
  </nav>
</template>
<script>
import Navigations from '@/assets/data/navigator.json';
import SubscribeService, { message } from '@/service/subscribe/subscribeService';

export default {
  name: 'sidebar',
  data() {
    return {
      navItems: Navigations.navItems,
      barHeight: '',
      showBar: false,
    };
  },
  created() {
    SubscribeService.subscribe(message.TOGGLE_MENU, this.toggleMenu);
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
    toggleMenu() {
      if (!this.showBar) {
        this.fadeIn();
      } else {
        this.fadeOut();
      }
    },
    onSelect() {
      this.fadeOut();
    },
    fadeIn() {
      this.showBar = true;
      this.$refs.sidebar.style.transform = 'translateX(200px)';
      this.$refs.sidebar.style.transition = 'all .3s';
    },
    fadeOut() {
      this.showBar = false;
      this.$refs.sidebar.style.transform = 'translateX(0)';
      this.$refs.sidebar.style.transition = 'all .3s';
    },
  },
  destroyed() {
    SubscribeService.unsubscribe(message.TOGGLE_MENU);
  },
};
</script>
<style lang="scss">
.global-nav {
  position: absolute;
  z-index: 10;
  left: -200px;
  top: 50px;
  background: $deepGray;
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
  }
  .el-menu {
    border: 0;
    background: transparent;
  }
  .el-menu-vertical-demo>:first-child {
    border: 0;
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
</style>


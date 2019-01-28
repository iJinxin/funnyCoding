<template>
  <header>
    <div class="toggle-menu float_left pointer" @click="toggleMenu()">
      <i class="iconfont" :class="{'ali-icon-expand': isCollapse, 'ali-icon-collapse': !isCollapse}"></i>
    </div>
    <div class="userinfo float_right pointer" title="view on github" @click="viewGithub()">
      <i class="iconfont ali-icon-git"></i>
    </div>
  </header>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['sidebarCollapse']),
    isCollapse() {
      return this.sidebarCollapse
    }
  },
  methods: {
    toggleMenu() {
      this.$store.dispatch("toggleSidebar")
    },
    viewGithub() {
      window.open('https://github.com/iJinxin/funnyCoding')
    }
  }
}
</script>
<style lang="scss" scoped>
header {
  height: 48px;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.12), 0 0 3px 0 rgba(0,0,0,.04);
}
.toggle-menu {
  height: 48px;
  line-height: 48px;
  padding: 0 15px;
  float: left;
  > i {
    font-size: 20px;
  }
}
.userinfo {
  height: 48px;
  line-height: 48px;
  padding: 0 15px;
  > i {
    font-size: 20px;
  }
}
</style>



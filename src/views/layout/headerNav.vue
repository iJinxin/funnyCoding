<template>
  <header>
    <div class="toggle-menu pointer" @click="toggleMenu()">
      <i class="iconfont ali-icon-caidan"></i>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    toggleMenu() {
      this.$store.dispatch("toggleSidebar")
    }
  }
}
</script>
<style lang="scss" scoped>
header {
  height: 50px;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.12), 0 0 3px 0 rgba(0,0,0,.04);
}
.toggle-menu {
  height: 50px;
  line-height: 50px;
  padding: 0 15px;
  float: left;
  > i {
    font-size: 16px;
  }
}
</style>



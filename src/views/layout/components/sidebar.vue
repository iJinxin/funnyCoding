<template>
  <div class="app-sidebar">
    <el-scrollbar style="height:100%">
      <el-menu router>
        <el-menu-item v-for="item in navItems" :key="item.id">{{item.name}}</el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  name: "Sidebar"
})
export default class Sidebar extends Vue {
  navItems: Array<object> = [
    {
      id: 1,
      name: "dashboard",
      path: "/dashboard",
      icon: ""
    }
  ];
}
</script>
<style lang="scss">
.app-sidebar {
  width: 200px;
  height: 100%;
  .el-scrollbar__view {
    height: 100%;
  }
  .el-scrollbar__wrap {
    overflow-x: auto;
  }
  .el-menu {
    height: 100%;
  }
}
</style>


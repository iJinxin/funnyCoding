<template>
  <div class="app-sidebar">
    <el-scrollbar>
      <el-menu></el-menu>
    </el-scrollbar>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: "Sidebar"
})
export default class Sidebar extends Vue {
  
}
</script>
<style lang="scss" scoped>
.app-sidebar {
  width: 200px;
  height: 100%;
}
</style>


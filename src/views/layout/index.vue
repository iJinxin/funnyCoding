<template>
  <div class="app-layout">
    <navbar/>
    <div class="main-container">
      <sidebar/>
      <app-main/>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { AppMain, Navbar, Sidebar } from './components'

@Component({
  name: 'Header',
  components: {
    AppMain,
    Navbar,
    Sidebar
  }
})
export default class Header extends Vue {

}
</script>
<style lang='scss'>
.app-layout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.main-container {
  flex: 1;
  display: flex;
}
</style>
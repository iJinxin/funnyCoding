<template>
  <div class="app-main">{{$t('testMessage.test1')}}</div>
</template>
<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: "AppMain"
})
export default class AppMain extends Vue {
  
}
</script>
<style lang="scss" scoped>
.app-main {
  flex: 1;
}
</style>

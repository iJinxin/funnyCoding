<template>
  <div class="app-header">
    <lang-select/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import LangSelect from '@/components/LangSelect/index.vue'

@Component({
  name: 'Navbar',
  components: {
    LangSelect
  }
})
export default class Navbar extends Vue {
  get key() {
    return this.$route.path
  }
  private async logout() {
    return 1;
  }
}
</script>
<style lang="scss" scoped>
.app-header {
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #dcdfe6;
}
</style>


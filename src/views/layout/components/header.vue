<template>
  <div class="header-layout">1</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: 'header'
})
export default class extends Vue {
  get key() {
    return this.$route.path
  }
  private async logout() {
    return 1;
  }
}
</script>

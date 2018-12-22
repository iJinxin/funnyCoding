<template>
  <div id="app" :class="$style.app">
    <sidebar/>
    <router-view/>
  </div>
</template>

<script>
import sidebar from '@/components/nav/sidebar';

export default {
  name: 'app',
  data() {
    return {};
  },
  components: {
    sidebar,
  },
};
</script>

<style module lang="scss">
  .app {
    position: relative;
    line-height: 1.5;
    font-size: 14px;
    color: $default;
    background: #fff;
    min-height: 100%;
  }
</style>

<template>
  <div id="app" :class="$style.app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style module lang="scss">
  .app {
    position: relative;
    margin: 0;
    line-height: 1.5;
    font-size: 14px;
    color: $default;
    background: #fff;
    min-width: $container_width;
    min-height: 100%;
  }
</style>

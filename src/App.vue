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
/*@import "assets/style/index.scss";*/
  .app {
    position: relative;
    margin: 0;
    line-height: 1.5;
    color: $darkish;
    background: #fff;
    min-width: $container_width;
    height: 100%;
    box-sizing: border-box;
  }
</style>

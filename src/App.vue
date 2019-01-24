<template>
  <div id="app" class="funny-coding">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.funny-coding {
  position: relative;
  background: #fff;
  height: 100%;
}
</style>

<template>
  <div id="app" class="funny-coding">
    <sidebar/>
    <router-view/>
  </div>
</template>

<script>
import sidebar from "@/components/common/sidebar";

export default {
  name: "App",
  components: {
    sidebar
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.funny-coding {
  position: relative;
  background: #fff;
  min-height: 100%;
}
</style>

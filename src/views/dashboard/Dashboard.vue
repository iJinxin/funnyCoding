<template>
  <div class="home-page display_flex flex_direction__column align-items__center justify-content__center">
    <h2>目前还没想好首页内容，您可以查看以下内容</h2>
    <div class="actions">
      <button class="large primary" @click="goPages('Barrage')">简易版弹幕</button>
      <button class="large primary" @click="goPages('Waterfall')">一个有趣的瀑布流</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {};
  },
  methods: {
    goPages(router) {
      this.$router.push({'name': router});
    }
  }
};
</script>
<style lang="scss">
</style>


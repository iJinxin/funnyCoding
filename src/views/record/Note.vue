<template>
  <div class="article article-v1">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'Article',
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.article-v1 {
  width: 780px;
  margin: 0 auto;
}
</style>

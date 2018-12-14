<template>
  <div class="header_inner display_flex justify-content__center">
    <header-nav/>
  </div>
</template>

<script>
import headerNav from '@/components/nav/HeaderNav';

export default {
  name: 'Header',
  data() {
    return {};
  },
  components: {
    headerNav,
  },
};
</script>

<style lang="scss">
  .header_inner {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    background: $white;
    box-shadow: 1px 1px 3px 0 rgba(0,0,0,0.1);
  }
</style>

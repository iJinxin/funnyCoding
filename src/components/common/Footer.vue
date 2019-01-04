<template>
  <section class="footer_inner display_flex justify-content__center align-items__center">
    <span class="copyright">Copyright &copy; 2018 - 2019 </span>
    <a class="author-link" href="https://github.com/iJinxin" target="_blank">Able Jin</a>
  </section>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss">
  .footer_inner {
    height: 100%;
    .copyright {
      color: $gray;
    }
    .author-link {
      color: $gray;
      text-decoration: none;
      padding-left: 5px;
      &:hover {
        text-decoration: underline;
        color: $green;
      }
    }
  }
</style>

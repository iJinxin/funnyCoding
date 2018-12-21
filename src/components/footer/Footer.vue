<template>
  <section :class="$style.footer_inner">
    <div :class="$style.logo">
      <img>
    </div>
    <div :class="$style.copyright">
      <span>Copyright&copy;2018 - 2019 ALL Rights Reserved</span>
    </div>
    <div :class="$style.compony">
    </div>
  </section>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style module lang="scss">
  .footer_inner {
    height: 100%;
    display: -ms-flexbox;
    display: -moz-box;
    display: -webkit-box;
    display: -ms-flex;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .logo {
    height: 35px;
    margin-top: 6px;
  }

  .copyright {
    font-size: 12px;
    color: $gray;
    margin-top: 12px;
  }

  .compony {
    font-size: 12px;
    color: $gray;
    margin-top: 12px;
  }
</style>

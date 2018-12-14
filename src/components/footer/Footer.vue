<template>
  <section :class="$style.footer_inner">
    <div :class="$style.logo">
      <img>
    </div>
    <div :class="$style.copyright">
      <span>Copyright&copy;2018 - 2019 ALL Rights Reserved</span>
    </div>
    <div :class="$style.compony">
      <span>深圳市捷视飞通科技股份有限公司&nbsp;&nbsp;版权所有&nbsp;&nbsp;|&nbsp;&nbsp;</span>
      <a>站点地图&nbsp;&nbsp;|&nbsp;&nbsp;</a>
      <a>问题反馈&nbsp;&nbsp;|&nbsp;&nbsp;</a>
      <a>关于我们&nbsp;&nbsp;|&nbsp;&nbsp;</a>
      <a>联系我们</a>
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

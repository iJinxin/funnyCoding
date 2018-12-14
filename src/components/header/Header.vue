<template>
  <div :class="$style.header_inner" class="header_inner">
    <div :class="$style.header_logo">
      <img/>
    </div>
    <div :class="$style.header_nav">
      <header-nav/>
    </div>
    <div :class="$style.header_right">
      <el-input
        :class="$style.header_right__input"
        placeholder="请输入..."
        size="small"
        suffix-icon=""/>
      <div :class="$style.header_right__login">
        <user-info/>
      </div>
    </div>
  </div>
</template>

<script>
import headerNav from '@/components/nav/HeaderNav';
import userInfo from '@/components/user/UserInfo';

export default {
  name: 'Header',
  data() {
    return {};
  },
  components: {
    headerNav, userInfo,
  },
};
</script>

<style lang="scss" module>
  .header_inner {
    height: 74px;
    width: $container_width;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header_logo {
    width: 200px;
  }

  .header_nav {
    display: flex;
    justify-content: center;
  }

  .header_right {
    width: 250px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header_right__input {
    width: 176px;
    height: 28px;
  }

  .header_right__login {
    font-size: 14px;
    margin-top: 1px;
  }
</style>
<style lang="scss">
  .header_inner {
    .el-input__inner {
      height: 28px !important;
      line-height: 26px;
      border-radius: 14px;
      margin-top: 1px;
    }
  }
</style>

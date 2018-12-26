<template>
  <div class="header_inner display_flex justify-content__space-between">
    <div class="header_control display_flex">
      <div class="header_control_menu display_flex justify-content__center align-items__center pointer" @click="toggleMenu">
        <i class="iconfont ali-icon-caidan"></i>
      </div>
      <div class="header_control_home display_flex justify-content__center align-items__center pointer" @click="backHome">
        <span class="home_title">主页</span>
      </div>
    </div>
    <div class="content-title display_flex align-items__center">
      <span>知行合一，止于至善</span>
    </div>
    <div class="userinfo"></div>
  </div>
</template>

<script>
import SubscribeService, { message } from '@/service/subscribe/subscribeService';

export default {
  name: 'Header',
  data() {
    return {
      headerContent: {
        title: null,
        actions: [],
      },
    };
  },
  methods: {
    toggleMenu() {
      SubscribeService.publish(message.TOGGLE_MENU);
    },
    backHome() {
      this.$router.push({ name: 'Home' });
    },
  },
};
</script>

<style lang="scss">
  .header_inner {
    position: fixed;
    height: 50px;
    left: 0;
    right: 0;
    top: 0;
    background: #1c2327;
    .header_control_menu {
      background: $babyblue;
      width: 52px;
      > i{
        color: $white;
        font-size: 16px;
      }
    }
    .header_control_home {
      .home_title {
        color: $white;
        font-size: 18px;
        padding-left: 16px;
      }
    }
    .content-title {
      font-size: 18px;
      font-family: "Italic";
    }
  }
</style>

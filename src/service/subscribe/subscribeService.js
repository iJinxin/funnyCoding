import Vue from 'vue';

const vm = new Vue();

// 发布
const publish = (message, params) => {
  vm.$emit(message, params);
};

// 订阅
const subscribe = (message, callback) => {
  vm.$on(message, callback);
};

// 取消订阅
const unsubscribe = (message, callback) => {
  vm.$off(message, callback);
};

// 订阅，触发一次后自动取消
const subscribeOnce = (message, callback) => {
  vm.$once(message, callback);
};

// 消息常量
export const message = {
  TOGGLE_MENU: 'TOGGLE_MENU', // 菜单栏开启关闭
};

export default {
  publish,
  subscribe,
  unsubscribe,
  subscribeOnce,
  message,
};

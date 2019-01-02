<template>
<div class="aequilate-waterfall display_flex">
  <section class="waterfall-introduction">21</section>
  <section class="waterfall-content flex_1" ref="waterfall">
    12
  </section>
</div>
</template>

<script>
import Waterfall from '@/service/Waterfall';

export default {
  name: 'AequilateWaterfall',
  data() {
    return {
      waterfall: null,
      colorSample: ['#111', '#222', '#333', '#444', '#555', '#666', '#777', '#888', '#999'],
    };
  },
  mounted() {

  },
  methods: {
    init() {
      this.waterfall = new Waterfall(5);
    },
    addItems() {
      // 创建随机高度元素，模拟图片
      // 一次生成20个
      const imgList = [];
      for (let i = 0; i < 20; i++) {
        const imgHeight = _.random(1, 100);
        const colorIndex = _.random(0, 9);
        imgList.push({ height: imgHeight, color: this.colorSample[colorIndex] });
      }
      this.waterfall.addItems();
    },
  },
};
</script>

<style lang="scss">
.aequilate-waterfall {
  .waterfall-introduction {
    width: 400px;
  }
  .waterfall-content {
  }
}
</style>

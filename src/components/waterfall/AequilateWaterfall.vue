<template>
<div class="aequilate-waterfall display_flex">
  <section class="waterfall-introduction">
    <blockquote>
      <p>如何让等宽瀑布流几列图片之间的高度差最小？</p>
    </blockquote>
    <div class="actions display_flex justify-content__space-between">
      <button class="primary small" @click="addItems(1)">添加一个</button>
      <button class="primary small" @click="addItems(20)">添加20个</button>
      <button class="primary small" @click="addItems(50)">添加50个</button>
      <button class="primary small" @click="clearData()">清除数据</button>
    </div>
    <div class="answer-list">
      <p class="answer-list-item display_flex flex_direction__column">
        <span class="answer-time">updated on 2019-1-3</span>
        <span class="answer-content">
          使用优先级队列，每一列为一个队列，高度最小的队列优先级最高，每次选出当前高度最大的图片放入最优先队列中，放置后更新优先级。
        </span>
      </p>
      <p class="answer-list-item display_flex flex_direction__column">
        <span class="answer-time">updated on 2019-1-8</span>
        <span class="answer-content">
          thanks <a target="_blank" href="https://github.com/RexSkz">Rex Zeng</a>，已证实当前算法不正确，具体原因在
          <a target="_blank" href="https://github.com/LeuisKen/leuisken.github.io/issues/2">这里 </a>。
        </span>
      </p>
      <p>https://en.wikipedia.org/wiki/Partition_problem</p>
    </div>
    <div class="more">
      <p>
        <i class="iconfont ali-icon-notify"></i>
        <del>目前无法证明该方法是否正确，是否为最优解</del>，如果你有更好的想法，请联系我。
      </p>
    </div>
  </section>
  <section class="waterfall-content flex_1 display_flex" ref="waterfall">
    <template v-for="queue in this.waterfall.queueList">
      <div :key="queue.queueId" class="waterfall-queue flex_1">
        <template v-if="queue.height">
          <div class="queue-total">{{queue.height}}</div>
        </template>
        <template v-for="img in queue.queue">
          <div class="waterfall-queue-item display_flex align-items__center justify-content__center"
               :key="img.index" :style="{height: img.height + 'px', backgroundColor: img.color}">
            {{img.height}}
          </div>
        </template>
      </div>
    </template>
  </section>
</div>
</template>

<script>
import Waterfall from '@/service/Waterfall';

export default {
  name: 'AequilateWaterfall',
  data() {
    return {
      waterfall: {},
      orderedQueue: [],
      colorSample: ['#C6CCD2', '#989EA3', '#5D6165', '#AECBAE', '#3F5D7B', '#FC40FF', '#4E7D5A', '#757BA0', '#AA7B9B'],
    };
  },
  mounted() {
    this.init();
    // this.addItems();
  },
  methods: {
    init() {
      this.waterfall = new Waterfall(8);
    },
    addItems(n) {
      // 创建随机高度，随机背景色，模拟图片
      // 一次生成n个
      const imgList = [];
      for (let i = 0; i < n; i++) {
        const imgHeight = _.random(20, 150);
        const colorIndex = _.random(0, 8);
        imgList.push({ index: i + this.waterfall.totalCount, height: imgHeight, color: this.colorSample[colorIndex] });
      }
      this.waterfall.addItems(imgList);
    },
    clearData() {
      this.waterfall.resetQueue();
    },
  },
};
</script>

<style lang="scss">
  .el-tabs__item.is-active {
    color: $babyblue;
  }
  .el-tabs__active-bar {
    background-color: $babyblue;
  }
.aequilate-waterfall {
  margin-bottom: 15px;
  .waterfall-introduction {
    width: 360px;
    padding:5px 20px;
    .answer-time {
      font-size: 12px;
      color: $gray;
    }
    .answer-content {
      text-indent: 2em;
      > a{
        text-decoration: none;
        color: $babyblue;
        &:hover {
          color: $blue;
        }
      }
    }
  }
  .waterfall-content {
    .waterfall-queue {
      margin: 0 5px;
    }
    .queue-total {
      text-align: center;
    }
    .waterfall-queue-item {
      margin-top: 5px;
    }
  }
  blockquote {
    border: 1px solid #e3e3e3;
    border-left: 5px solid $babyblue;
    margin: 0 0 1em 0;
    padding: 0 20px;
  }
  .more {
    color: $gray;
    margin-top: 30px;
  }
}
</style>

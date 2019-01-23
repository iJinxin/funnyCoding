<template>
  <div class="aequilate-waterfall display_flex">
    <div class="waterfall-introduction">
      <blockquote class="article-blockquote">
        <p>如何让等宽瀑布流几列图片之间的高度差最小？</p>
      </blockquote>
      <div class="actions display_flex justify-content__space-between">
        <button class="primary small" @click="addItems(1)">添加一个</button>
        <button class="primary small" @click="addItems(20)">添加20个</button>
        <button class="primary small" @click="addItems(50)">添加50个</button>
        <button class="primary small" @click="clearData()">清除数据</button>
      </div>
      <article class="doc-container">
        <template v-for="item in updateList">
          <section class="section" :key="item.id">
            <div class="subheading">updated on {{ item.time }}</div>
            <div class="content indent_2">{{ item.content }}</div>
          </section>
        </template>
        <section>
          <div class="title_secondary">
            <i class="iconfont ali-icon-notify"></i>关于
          </div>
          <div class="content indent_2">
            <ul>
              <li>
                thanks
                <a target="_blank" href="https://github.com/RexSkz">Rex Zeng</a> 指出反例，
                <a
                  target="_blank"
                  href="https://github.com/LeuisKen/leuisken.github.io/issues/2"
                >github issue</a>
              </li>
              <li>
                <a target="_blank" href="https://en.wikipedia.org/wiki/Partition_problem">wiki说明</a>
              </li>
            </ul>
          </div>
        </section>
        <section class="section">
          <div class="title_secondary">Thinking:</div>
          <div class="content indent_2">本来以为只是一道简单的瀑布流插入问题，没想到最终牵扯到了np-hard问题，学无止境。</div>
        </section>
      </article>
    </div>
    <div class="waterfall-content flex_1 display_flex" ref="waterfall">
      <template v-for="queue in waterfall.queueList">
        <div :key="queue.queueId" class="waterfall-queue flex_1">
          <template v-if="queue.height">
            <div class="queue-total">{{ queue.height }}</div>
          </template>
          <template v-for="img in queue.queue">
            <div
              class="waterfall-queue-item display_flex align-items__center justify-content__center"
              :key="img.index"
              :style="{height: img.height + 'px', backgroundColor: img.color}"
            >{{ img.height }}</div>
          </template>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import Waterfall from "@/service/Waterfall";

export default {
  name: "AequilateWaterfall",
  data() {
    return {
      waterfall: {},
      orderedQueue: [],
      colorSample: [
        "#C6CCD2",
        "#989EA3",
        "#5D6165",
        "#AECBAE",
        "#3F5D7B",
        "#FC40FF",
        "#4E7D5A",
        "#757BA0",
        "#AA7B9B"
      ],
      updateList: [
        {
          id: 1,
          time: "2019-1-4",
          content:
            "使用优先级队列，每一列为一个队列，高度最小的队列优先级最高，每次选出当前高度最大的图片放入最优先队列中，放置后更新优先级。"
        },
        {
          id: 2,
          time: "2019-1-4",
          content: "已在github上被指出不符合最优解的例子"
        },
        {
          id: 3,
          time: "2019-1-9",
          content: "thank god, 在wiki上找到了解答。"
        }
      ]
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
        imgList.push({
          index: i + this.waterfall.totalCount,
          height: imgHeight,
          color: this.colorSample[colorIndex]
        });
      }
      this.waterfall.addItems(imgList);
    },
    clearData() {
      this.waterfall.resetQueue();
    }
  }
};
</script>

<style lang="scss">
@import '@/assets/style/variables.scss';
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
    padding: 5px 20px;
  }
}
</style>

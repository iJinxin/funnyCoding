<template>
  <div class="main-content">
    <section :class="$style.live_classify">
      <div :class="$style.live_classify__inner">
        <dl class="dl-menu clearfix">
          <dt class="dl-menu__dt">分类 :</dt>
          <template v-for="item in items">
            <dd class="dl-menu__dd pointer" :key="item.id">{{item.text}}</dd>
          </template>
        </dl>
        <dl class="dl-menu clearfix">
          <dt class="dl-menu__dt">类别 :</dt>
          <dd class="dl-menu__dd pointer">全部</dd>
          <dd class="dl-menu__dd">
            <el-dropdown trigger="click" class="normal_lineheight pointer" @command="handleCommand">
              <span class="el-dropdown-link">
                直播类型<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="all">全部</el-dropdown-item>
                <el-dropdown-item command="living">直播中</el-dropdown-item>
                <el-dropdown-item command="notStarted">未开始</el-dropdown-item>
                <el-dropdown-item command="end">已结束</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </dd>
          <dd class="dl-menu__dd">
            <el-dropdown trigger="click" class="normal_lineheight pointer">
              <span class="el-dropdown-link">
                直播方式<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>全部</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </dd>
        </dl>
      </div>
    </section>
    <section :class="$style.live_list"></section>
  </div>
</template>

<script>
export default {
  name: 'LiveCourse',
  data() {
    return {
      items: [
        { id: 1, text: '软件工具' },
        { id: 2, text: '产品精修' },
        { id: 3, text: '人像精修' },
        { id: 4, text: '后期风光' },
        { id: 5, text: '商业修图' },
        { id: 6, text: '相册排版' },
        { id: 7, text: '特效合成' },
        { id: 8, text: '调色技巧' },
        { id: 9, text: '摄影器材' },
        { id: 10, text: '摄影理论' },
        { id: 11, text: '功能参数' },
      ],
    };
  },
  methods: {
    handleCommand() {
      // console.log(command);
    },
  },
};
</script>

<style lang="scss" module>
.live_classify {
  background: #F6F6F6;
}
  .live_classify__inner {
    width: $container_width;
    border-radius: 3px;
    min-height: 83px;
    margin: 12px auto 18px auto;
    background: $white;
  }
</style>

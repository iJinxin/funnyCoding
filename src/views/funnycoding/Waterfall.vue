<template>
  <el-tabs v-model="activeName" class="waterfall-tabs">
    <el-tab-pane label="等宽瀑布流" name="aequilate">
      <Aequilate-waterfall/>
    </el-tab-pane>
    <el-tab-pane label="等高瀑布流" name="isometry">
      <Isometry-waterfall/>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import AequilateWaterfall from "@/components/waterfall/AequilateWaterfall";
import IsometryWaterfall from "@/components/waterfall/IsometryWaterfall";

export default {
  name: "Waterfall",
  components: {
    AequilateWaterfall,
    IsometryWaterfall
  },
  data() {
    return {
      activeName: "aequilate"
    };
  }
};
</script>

<style lang="scss">
.waterfall-tabs {
  .el-tabs__item {
    height: 50px;
    line-height: 50px;
    font-size: 16px;
  }
  .el-tabs__nav-wrap {
    display: flex;
    justify-content: center;
    &::after {
      height: 1px;
    }
  }
}
</style>

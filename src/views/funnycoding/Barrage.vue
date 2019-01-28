<template>
  <div class="barrage-container">
    <div class="barrage-container__inner">
      <section class="info">
        <i class="iconfont ali-icon-notify"></i>
        <span>
          视频素材取自
          <a class="info-link" target="_blank" :href="videoSource">bilibili</a>
          如有侵权，请联系我删除。
        </span>
      </section>
      <section class="main">
        <canvas id="canvas" class="canvas"></canvas>
        <video
          src="../../assets/video/areyouok.mp4"
          poster="../../assets/image/areyouok_cover.jpg"
          id="video"
          class="video"
          controls
          width="800px"
          height="460px"
        ></video>
      </section>
      <section class="barrage">
        <div class="color-picker display_flex align-items__center">
          <el-color-picker v-model="barrage.color"/>
          <el-slider v-model="barrage.font" :max="30" :min="14" :format-tooltip="formatFont"/>
          <el-slider
            v-model="barrage.speed"
            :max="3.5"
            :min="0.5"
            :step="0.5"
            :format-tooltip="formatSpeed"
          />
          <div class="value flex_1 display_flex justify-content__flex-end">
            <el-input v-model="barrage.value" :maxlength="20" @keyup.enter.native="send()"/>
            <button class="primary small" @click="send()">发送</button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import CanvasBarrage from "@/service/Barrage";
import { $get, $post } from "@/utils/request";
import { queryBarrages, addBarrage } from "@/api/funnycoding";

export default {
  name: "Barrage",
  data() {
    return {
      canvas: null,
      video: null,
      videoSource:
        "https://www.bilibili.com/video/av2271112?from=search&seid=3934341032502483606",
      canvasBarrage: null,
      barrages: [],
      barrage: {
        font: 18,
        color: "#ffffff",
        speed: 2,
        value: ""
      }
    };
  },
  created() {
    // this.queryBarrages();
  },
  mounted() {
    this.canvas = document.getElementById("canvas");
    this.video = document.getElementById("video");
    this.queryBarrages();
  },
  methods: {
    queryBarrages() {
      $get(userApi.query_barrages).then(
        res => {
          this.barrages = res.data;
          this.initBarrages(this.barrages);
        },
        () => {
          this.$message.warning("获取弹幕失败");
        }
      );
    },
    send() {
      this.barrage.time = this.video.currentTime;
      this.canvasBarrage.add(this.barrage);
      this.value = "";
      $post(userApi.add_barrage, this.barrage);
    },
    initBarrages() {
      this.canvasBarrage = new CanvasBarrage(
        this.canvas,
        this.video,
        this.barrages
      );
      // 播放
      this.video.addEventListener("play", () => {
        this.canvasBarrage.isPlaying = true;
        this.canvasBarrage.render();
      });
      // 暂停
      this.video.addEventListener("pause", () => {
        this.canvasBarrage.isPlaying = false;
      });
      // 拖动进度条，需要回放，重新渲染弹幕
      this.video.addEventListener("seeked", () => {
        this.canvasBarrage.playback();
      });
    },
    formatFont(val) {
      return `fontSize: ${val}px`;
    },
    formatSpeed(val) {
      return `Speed: ${val}`;
    }
  }
};
</script>

<style lang="scss">
.barrage-container {
  .barrage-container__inner {
    width: 800px;
    margin: 0 auto;
  }
  .info {
    padding-top: 30px;
  }
  .main {
    position: relative;
    margin-top: 20px;
    .canvas {
      position: absolute;
      z-index: 10;
      left: 0;
      top: 0;
      pointer-events: none;
    }
  }
  .barrage {
    .el-slider {
      width: 100px;
      margin-left: 15px;
    }
    .el-input {
      width: 450px;
    }
    button {
      margin-left: 5px;
    }
  }
}
</style>

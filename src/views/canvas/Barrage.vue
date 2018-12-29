<template>
<div class="barrage-container">
  <div class="barrage-container__inner">
    <section class="info">
      <i class="iconfont ali-icon-notify"></i>
      <span>视频素材取自
        <a class="info-link" target="_blank" href="https://www.bilibili.com/video/av2271112?from=search&seid=3934341032502483606">
          bilibili
        </a>
        如有侵权，请联系我删除。
      </span>
    </section>
    <section class="main">
      <canvas id="canvas" class="canvas"></canvas>
      <video src="../../assets/video/areyouok.mp4" poster="../../assets/image/areyouok_cover.jpg"
             id="video" class="video" controls width="800px" height="460px"></video>
    </section>
    <section class="barrage">
      <div class="color-picker display_flex align-items__center">
        <el-color-picker v-model="color"></el-color-picker>
        <el-slider v-model="font" :max="20" :min="14" :format-tooltip="formatFont"></el-slider>
        <el-slider v-model="speed" :max="3" :min="0.5" :step="0.5" :format-tooltip="formatSpeed"></el-slider>
        <div class="value flex_1 display_flex justify-content__flex-end">
          <el-input v-model="value" @keyup.enter.native="send()"></el-input>
          <button class="primary small" @click="send()">发送</button>
        </div>
      </div>
    </section>
  </div>
</div>
</template>

<script>
import CanvasBarrage from '@/service/Barrage';

export default {
  name: 'Barrage',
  data() {
    return {
      font: 16,
      color: '#ffffff',
      speed: 1,
      value: '',
      video: null,
      canvasBarrage: null,
    };
  },
  mounted() {
    const canvas = document.getElementById('canvas');
    this.video = document.getElementById('video');
    const data = [
      { value: '哈哈', time: 2, color: 'red', speed: 1, font: 16 },
      { value: 'sososso', time: 3, color: 'red', speed: 3, font: 15 },
      { value: '哈哈', time: 5, color: 'white', speed: 1.5, font: 16 },
      { value: '哈哈', time: 7, color: 'yellow', speed: 2, font: 20 },
    ];
    this.canvasBarrage = new CanvasBarrage(canvas, this.video, data);
    // 播放
    this.video.addEventListener('play', () => {
      this.canvasBarrage.isPlaying = true;
      this.canvasBarrage.render();
    });
    // 暂停
    this.video.addEventListener('pause', () => {
      this.canvasBarrage.isPlaying = false;
    });
    // 拖动进度条，需要回放，重新渲染弹幕
    this.video.addEventListener('seeked', () => {
      this.canvasBarrage.playback();
    });
  },
  methods: {
    formatFont(val) {
      return `fontSize: ${val}px`;
    },
    formatSpeed(val) {
      return `Speed: ${val}`;
    },
    send() {
      const time = this.video.currentTime;
      const barrage = {
        value: this.value,
        time,
        color: this.color,
        speed: this.speed,
        font: this.font,
      };
      this.canvasBarrage.add(barrage);
      this.value = '';
    },
  },
};
</script>

<style lang="scss">
.barrage-container {
  .barrage-container__inner {
    width: 800px;
    margin: 0 auto;
  }
  .info {
    margin-top: 30px;
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
    .value {
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

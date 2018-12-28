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
    <section class="reference">
      <div class="color-picker">
        <span>颜色：</span>
        <el-color-picker v-model="color"></el-color-picker>
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
      color: '#ffffff',
    };
  },
  mounted() {
    const canvas = document.getElementById('canvas');
    const video = document.getElementById('video');
    const canvasBarrage = new CanvasBarrage(canvas, video);
    video.addEventListener('play', () => {
      canvasBarrage.isPlaying = true;
      canvasBarrage.render();
    });
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
}
</style>

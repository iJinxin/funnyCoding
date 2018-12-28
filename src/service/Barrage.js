// 视频弹幕

const data = [
  { value: '哈哈', time: 2, color: 'red', speed: 1 },
  { value: 'sososso', time: 3, color: 'red', speed: 3 },
  { value: '哈哈', time: 5, color: 'white', speed: 1.5 },
  { value: '哈哈', time: 7, color: 'yellow', speed: 2 },
];

/**
 * 弹幕元素
 * @param barrage 弹幕对象
 * @param ctx canvas对象
 * barrage.value 弹幕文字
 * barrage.time 弹幕出现的时间（秒）
 * barrage.color 弹幕颜色
 * barrage.speed 弹幕速度
 */
class Barrage {
  constructor(barrage, ctx) {
    this.value = barrage.value;
    this.time = barrage.time;
    this.color = barrage.color;
    this.speed = barrage.speed;
    this.ctx = ctx;

    // 设置弹幕可见，在离开可视区后设置为不可见
    this.visible = true;
  }
  init() {
    this.x = this.ctx.canvas.width;
    this.y = this.ctx.canvas.height * Math.random();

    // 防止溢出, 默认字体14px
    if (this.y < 14) {
      this.y = 14;
    } else if (this.y > this.ctx.canvas.height - 14) {
      this.y = this.ctx.canvas.height;
    }
  }
  render() {
    // 设置画布文字的字号和字体
    this.ctx.font = '14px Arial';
    this.ctx.fillStyle = this.color;
    this.ctx.fillText(this.value, this.x, this.y);
  }
}

// canvas图层渲染弹幕
class CanvasBarrage {
  constructor(canvas, video) {
    if (!canvas || !video) return;
    this.canvas = canvas;
    this.video = video;
    this.canvas.width = video.width;
    this.canvas.height = video.height;
    this.ctx = canvas.getContext('2d');
    this.isPlaying = false;

    this.barrages = data.map(item => new Barrage(item, this.ctx));
    console.log(this);
  }
  renderBarrage() {
    const time = this.video.currentTime;
    this.barrages.forEach((barrage) => {
      // 只需要处理在可视区的弹幕
      if (barrage.time <= time && barrage.visible) {
        if (!barrage.isInit) {
          barrage.init();
          barrage.isInit = true;
        }
        barrage.x -= barrage.speed;
        barrage.render();

        if (barrage.x < -barrage.width) {
          barrage.visible = false;
        }
      }
    });
  }
  render() {
    this.clear();
    this.renderBarrage();

    if (this.isPlaying) {
      requestAnimationFrame(this.render.bind(this));
    }
  }
  // 清除整个画布
  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

export default CanvasBarrage;

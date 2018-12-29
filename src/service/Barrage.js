// 视频弹幕

/**
 * 弹幕元素
 * @param barrage 弹幕对象
 * @param ctx canvas对象
 * barrage.value 弹幕文字
 * barrage.time 弹幕出现的时间（秒）
 * barrage.color 弹幕颜色
 * barrage.speed 弹幕速度
 * barrage.font 字体大小
 */
class Barrage {
  constructor(barrage, ctx) {
    this.value = barrage.value;
    this.time = barrage.time;
    this.color = barrage.color;
    this.speed = barrage.speed;
    this.font = barrage.font;
    this.ctx = ctx;

    // 设置弹幕是否初始化
    this.initialized = false;

    // 记录弹幕是否已经离开可视区，未开始的弹幕也视为在可视区
    this.visible = true;
  }
  init() {
    this.x = this.ctx.canvas.width;
    this.y = this.ctx.canvas.height * Math.random();

    // 防止溢出, 上下保证1.5字体间距
    if (this.y < this.font * 1.5) {
      this.y = this.font * 1.5;
    } else if (this.y > this.ctx.canvas.height - (this.font * 1.5)) {
      this.y = this.ctx.canvas.height - (this.font * 1.5);
    }
  }
  render() {
    // 设置画布文字的字号和字体
    this.ctx.font = `${this.font}px Arial`;
    this.ctx.fillStyle = this.color;
    this.ctx.fillText(this.value, this.x, this.y);
  }
}

// canvas图层渲染弹幕
class CanvasBarrage {
  constructor(canvas, video, data) {
    if (!canvas || !video) return;
    this.canvas = canvas;
    this.video = video;
    this.canvas.width = video.width;
    this.canvas.height = video.height;
    this.ctx = canvas.getContext('2d');
    this.isPlaying = false;

    this.barrages = data.map(item => new Barrage(item, this.ctx));
  }
  // 绘制当前在可视区的弹幕
  renderBarrage() {
    const time = this.video.currentTime;
    this.barrages.forEach((barrage) => {
      // 只需要处理在可视区的弹幕
      if (barrage.time <= time && barrage.visible) {
        // 弹幕初始化
        if (!barrage.initialized) {
          barrage.init();
          barrage.initialized = true;
        }
        // 弹幕从右向左运动
        barrage.x -= barrage.speed;
        barrage.render();

        if (barrage.x < -barrage.width) {
          barrage.visible = false;
        }
      }
    });
  }
  playback() {
    this.clear();
    const time = this.video.currentTime;
    this.barrages.forEach((barrage) => {
      if (barrage.time < time) {
        barrage.initialized = false;
      }
    });
  }
  // 发送弹幕，opts包含barrage全部参数
  add(opts) {
    this.barrages.push(new Barrage(opts, this.ctx));
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

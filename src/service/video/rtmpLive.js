import videojs from 'video.js';
import Flash from 'videojs-flash';

videojs.registerTech('flash', Flash);

const defaultOption = {
  autoplay: true,
  controlBar: false,
  techOrder: ['flash', 'html5'],
  notSupportedMessage: '请安装启用 Flash Player 插件, 访问 http://get.adobe.com/cn/flashplayer 下载安装.',
};

class VideoJsPlayer {
  constructor(options) {
    this.options = Object.assign({}, defaultOption, options);
    this.player = null;
  }
  init() {
    this.player = videojs('player', this.options, function () {
      this.play();
      this.on('error', (event) => {
        console.log(event);
      });
      this.on('loadedmetadata', () => {
        console.log('loadedmetadata');
      });
      this.on('ended', () => {
        console.log('ended');
      });
      this.on('firstplay', () => {
        console.log('firstplay');
      });
      this.on('loadstart', () => {
        // 开始加载
        console.log('loadstart');
      });
      this.on('loadeddata', () => {
        console.log('loadeddata');
      });
      this.on('seeking', () => {
        // 正在去拿视频流的路上
        console.log('seeking');
      });
      this.on('seeked', () => {
        // 已经拿到视频流,可以播放
        console.log('seeked');
      });
      this.on('waiting', function () {
        console.log('waiting');
        this.addClass('vjs-custom-waiting');
      });

      this.on('playing', () => {
        console.log('playing');
      });
      this.on('pause', () => {
        console.log('pause');
      });
      this.on('play', () => {
        console.log('play');
      });
    });
    console.log(this.player);
    // this.player.src({src: 'rtmp://172.16.6.89:1935/common/OHFMh4n3F9rj4zgOkbDxJh9RblScqKDMHjywfWdqbd0hCgLX6dXYR6kY3KKNCdEypoLkICfeTYkIV-EVSj5veGNB9Ny614KPK94rWtpdWfT97-3eR7hzl5rN2r93cimg?key=gBjtaETtRvDPmoeGkCOP7w==&time=1543393929',
    //   type: 'rtmp/flv'
    // });
    this.player.play();
    return this.player;
  }
}

export default VideoJsPlayer;

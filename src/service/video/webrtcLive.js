/**
 * webrtc播放器 api doc: https://janus.conf.meetecho.com/docs/JS.html
 * @param option [Object]
 * [url, container] required.
 * url为rtsp流，container是播放器容器，video标签。
 *
 * @param gateway: [Object] webrtc网关信息
 * [gatewayHost, gatewayHttpPort, gatewayWsPort, securityKey, securityData] required
 */
// import Janus from 'janus';

class WebrtcPlayer {
  static janus = null;
  static ffmpegStreaming = null;

  constructor(option, gateway) {
    this.option = option;
    this.gateway = gateway;
    // this.opaqueId = "ffmpegstreaming-" + Janus.randomString(12);
    this.testOptions();
  }

  init() {
    const httpServer = `http://${this.gateway.gatewayHost}:${this.gateway.gatewayHttpPort}/janus`;
    const wsServer = `ws://${this.gateway.gatewayHost}:${this.gateway.gatewayWsPort}`;
    // This object needs to be initialized the first time it is used in a page.
    // 初次加载时创建，连接服务器，创建一个session，所有webrtc stream都通过这个session传输
    if (!WebrtcPlayer.janus) {
      Janus.init({
        debug: 'all',
        callback: () => {
          WebrtcPlayer.janus = new Janus({
            server: [wsServer, httpServer],
            success: () => {
              this.attachPlugins();
            },
            error: (error) => {
              Janus.error(error);
            },
            destroyed: () => {
              WebrtcPlayer.janus = null;
              Janus.log('webrtc destroyed');
            },
          });
        },
      });
    } else {
      this.attachPlugins();
    }
  }

  attachPlugins() {
    WebrtcPlayer.janus.attach({
      plugin: 'janus.plugin.ffmpeg-streaming',
      opaqueId: this.opaqueId,
      success: async (pluginHandle) => {
        WebrtcPlayer.ffmpegStreaming = pluginHandle;
        const body = {
          request: 'play',
          url: this.option.url,
          access_key: this.gateway.securityKey,
          security_data: this.gateway.securityData,
          media: {
            video: true,
            audio: true,
            data: false,
          },
        };

        // createOffer(callbacks): asks the library to create a WebRTC compliant OFFER;
        // createOffer followed by a send({msg, jsep})) or wait for something to happen to do anything
        await WebrtcPlayer.ffmpegStreaming.send({ message: body });

        WebrtcPlayer.ffmpegStreaming.createOffer({
          iceRestart: true,
          media: { data: true },
          success: (jsep) => {
            WebrtcPlayer.ffmpegStreaming.send({ message: { audio: true, video: true }, jsep });
          },
          error: (error) => {
            Janus.error(error);
          },
        });
      },
      error: (error) => {
        Janus.error(' -- Error attaching janus.plugin.ffmpeg-streaming...', error);
      },
      onmessage: (msg, jsep) => {
        const result = msg.result;
        if (result !== null && result !== undefined) {
          if (result.status === 'stopped') {
            Janus.debug('onmessage: status stopped');
            this.stopStream();
          }
        } else if (msg.error !== undefined && msg.error !== null) {
          Janus.debug('onmessage error');
          this.stopStream();
          return;
        }

        if (jsep !== undefined && jsep !== null) {
          Janus.debug('tring a createAnwswe.');
          WebrtcPlayer.ffmpegStreaming.createAnswer({
            jsep,
            media: { audioSend: false, videoSend: false },
            success: (jesp) => {
              Janus.debug('Got SDP!');
              Janus.debug(jsep);
              const body = {
                request: 'start',
                access_key: this.gateway.securityKey,
              };
              WebrtcPlayer.ffmpegStreaming.send({ message: body, jsep });
            },
            error: (error) => {
              Janus.error('WebRTC error:', error);
            },
          });
        }
      },

      onremotestream: (stream) => {
        Janus.debug('::: Got a remote stream :::');
        Janus.debug(stream);
        // 流媒体绑定到播放器上
        const videoTracks = stream.getVideoTracks();
        if (videoTracks === null || videoTracks === undefined || videoTracks.length === 0) {
          return;
        }
        Janus.attachMediaStream(this.option.container, stream);
      },
    });
  }

  stopStream() {
    const body = {
      request: 'stop',
      access_key: this.gateway.securityKey,
    };
    WebrtcPlayer.ffmpegStreaming.send({ message: body });
    WebrtcPlayer.ffmpegStreaming.hangup();
  }

  // 测试参数是否有遗漏
  testOptions() {
    if (this.option === null || this.option === undefined) {
      throw new Error('创建WebrtcPlayer实例错误，第一个参数必填');
    }
    if (this.gateway === null || this.gateway === undefined) {
      throw new Error('创建WebrtcPlayer实例错误，第二个参数必填');
    }
    if (this.option.url === null || this.option.url === undefined ||
      this.option.container === null || this.option.container === undefined) {
      throw new Error('[url, container] is required, There must something missing');
    }
    if (this.gateway.gatewayHost === null || this.gateway.gatewayHost === undefined ||
      this.gateway.gatewayHttpPort === null || this.gateway.gatewayHttpPort === undefined ||
      this.gateway.gatewayWsPort === null || this.gateway.gatewayWsPort === undefined ||
      this.gateway.securityKey === null || this.gateway.securityKey === undefined ||
      this.gateway.securityData === null || this.gateway.securityData === undefined) {
      throw new Error('[gatewayHost, gatewayHttpPort, gatewayWsPort, securityKey, securityData] is required, There must be something missing');
    }
  }
}

export default WebrtcPlayer;

    <!--<![endif]-->
  <script>
        // videojs.options.flash.swf = "http://cdn.bootcss.com/video.js/5.0.0/video-js.swf";

        videojs.addLanguage('zh-CN', {
          "Play": "播放",
          "Pause": "暂停",
          "Current Time": "当前时间",
          "Duration Time": "时长",
          "Remaining Time": "剩余时间",
          "Stream Type": "媒体流类型",
          "LIVE": "直播",
          "Loaded": "加载完毕",
          "Progress": "进度",
          "Fullscreen": "全屏",
          "Non-Fullscreen": "退出全屏",
          "Mute": "静音",
          "Unmuted": "取消静音",
          "Playback Rate": "播放码率",
          "Subtitles": "字幕",
          "subtitles off": "字幕关闭",
          "Captions": "内嵌字幕",
          "captions off": "内嵌字幕关闭",
          "Chapters": "节目段落",
          "You aborted the media playback": "视频播放被终止",
          "A network error caused the media download to fail part-way.": "网络错误导致视频下载中途失败。",
          "The media could not be loaded, either because the server or network failed or because the format is not supported.": "视频因格式不支持或者服务器或网络的问题无法加载。",
          "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.": "由于视频文件损坏或是该视频使用了你的浏览器不支持的功能，播放终止。",
          "No compatible source was found for this media.": "无法找到此视频兼容的源。",
          "The media is encrypted and we do not have the keys to decrypt it.": "视频已加密，无法解密。"
        });

        var player = videojs('tb-video', {
            language: 'zh-CN',
            plugins: {
                videoJsResolutionSwitcher: {
                    default: 'high',
                    dynamicLabel: true
                }
            }
        }, function () {
            player.updateSrc([
                  {
                    src: 'http://tblivestream.baidu.com/live/6d5dcff7a25d5e4238e079465dc62948.m3u8?room_id=5000009&sign=c246ac306a18e9337c5def1bd260e245&bduss=7np4XEIX35c22oTGonK0bmHFSjcPD8ke%2FGgsUtgJz532jij0eLCswTq%2Bpr5ZIe%2B4brLGhnttCgUMbL8fP%2BNqzjzJ9fwR6BkQ4jBgGuYU0IHXlwLziVKKoGiKOt9hgAx%2Bfdk6xjQBsjKLyqa1bETtJBBHSlW10jcq%2FM1voEapDjR7I1UceXUfhkg5VKhSiBj0boYCdoqMBsMylZcOExtSTwpbaZTWpxVnGr6Yx4BCwUTkBie1RhGEVkjBdGCqxKBQ',
                    label: '自动'
                  },
                  {
                    src: 'http://tblivestream.baidu.com/live/6d5dcff7a25d5e4238e079465dc62948_2048.m3u8?room_id=5000009&sign=c246ac306a18e9337c5def1bd260e245&bduss=7np4XEIX35c22oTGonK0bmHFSjcPD8ke%2FGgsUtgJz532jij0eLCswTq%2Bpr5ZIe%2B4brLGhnttCgUMbL8fP%2BNqzjzJ9fwR6BkQ4jBgGuYU0IHXlwLziVKKoGiKOt9hgAx%2Bfdk6xjQBsjKLyqa1bETtJBBHSlW10jcq%2FM1voEapDjR7I1UceXUfhkg5VKhSiBj0boYCdoqMBsMylZcOExtSTwpbaZTWpxVnGr6Yx4BCwUTkBie1RhGEVkjBdGCqxKBQ',
                    label: '1080p'
                  }, {
                      src: 'http://tblivestream.baidu.com/live/6d5dcff7a25d5e4238e079465dc62948_1024.m3u8?room_id=5000009&sign=c246ac306a18e9337c5def1bd260e245&bduss=7np4XEIX35c22oTGonK0bmHFSjcPD8ke%2FGgsUtgJz532jij0eLCswTq%2Bpr5ZIe%2B4brLGhnttCgUMbL8fP%2BNqzjzJ9fwR6BkQ4jBgGuYU0IHXlwLziVKKoGiKOt9hgAx%2Bfdk6xjQBsjKLyqa1bETtJBBHSlW10jcq%2FM1voEapDjR7I1UceXUfhkg5VKhSiBj0boYCdoqMBsMylZcOExtSTwpbaZTWpxVnGr6Yx4BCwUTkBie1RhGEVkjBdGCqxKBQ',
                      label: '720p',
                  }, {
                      src: 'http://tblivestream.baidu.com/live/6d5dcff7a25d5e4238e079465dc62948_910.m3u8?room_id=5000009&sign=c246ac306a18e9337c5def1bd260e245&bduss=7np4XEIX35c22oTGonK0bmHFSjcPD8ke%2FGgsUtgJz532jij0eLCswTq%2Bpr5ZIe%2B4brLGhnttCgUMbL8fP%2BNqzjzJ9fwR6BkQ4jBgGuYU0IHXlwLziVKKoGiKOt9hgAx%2Bfdk6xjQBsjKLyqa1bETtJBBHSlW10jcq%2FM1voEapDjR7I1UceXUfhkg5VKhSiBj0boYCdoqMBsMylZcOExtSTwpbaZTWpxVnGr6Yx4BCwUTkBie1RhGEVkjBdGCqxKBQ',
                      label: '540p',
                  }, {
                      src: 'http://tblivestream.baidu.com/live/6d5dcff7a25d5e4238e079465dc62948_580.m3u8?room_id=5000009&sign=c246ac306a18e9337c5def1bd260e245&bduss=7np4XEIX35c22oTGonK0bmHFSjcPD8ke%2FGgsUtgJz532jij0eLCswTq%2Bpr5ZIe%2B4brLGhnttCgUMbL8fP%2BNqzjzJ9fwR6BkQ4jBgGuYU0IHXlwLziVKKoGiKOt9hgAx%2Bfdk6xjQBsjKLyqa1bETtJBBHSlW10jcq%2FM1voEapDjR7I1UceXUfhkg5VKhSiBj0boYCdoqMBsMylZcOExtSTwpbaZTWpxVnGr6Yx4BCwUTkBie1RhGEVkjBdGCqxKBQ',
                      label: '360p',
                  }, {
                      src: 'http://tblivestream.baidu.com/live/6d5dcff7a25d5e4238e079465dc62948_256.m3u8?room_id=5000009&sign=c246ac306a18e9337c5def1bd260e245&bduss=7np4XEIX35c22oTGonK0bmHFSjcPD8ke%2FGgsUtgJz532jij0eLCswTq%2Bpr5ZIe%2B4brLGhnttCgUMbL8fP%2BNqzjzJ9fwR6BkQ4jBgGuYU0IHXlwLziVKKoGiKOt9hgAx%2Bfdk6xjQBsjKLyqa1bETtJBBHSlW10jcq%2FM1voEapDjR7I1UceXUfhkg5VKhSiBj0boYCdoqMBsMylZcOExtSTwpbaZTWpxVnGr6Yx4BCwUTkBie1RhGEVkjBdGCqxKBQ',
                      label: '234p',
                  }
            ])
 
            player.on('resolutionchange', function(){
              console.info('Source changed to %s', player.src())
            })
        });

        var allEvents = ['error', 'loadeddata', 'loadedmetadata', 'timeupdate', 'useractive',
            'userinactive', 'volumechange'];

        var html5Events = [
              'loadstart',
              'suspend',
              'abort',
              'error',
              'emptied',
              'stalled',
              'loadedmetadata',
              'loadeddata',
              'canplay',
              'canplaythrough',
              'playing',
              'waiting',
              'seeking',
              'seeked',
              'ended',
              'durationchange',
              'timeupdate',
              'progress',
              'play',
              'pause',
              'ratechange',
              'volumechange'
            ];

        allEvents = $.merge(allEvents, html5Events);

        for (var i=0, len = allEvents.length; i<len; i++) {
            player.on(allEvents[i], function (e) {
                console.log(e.type);
            });
        }

        player.muted(true);

        window.player = player;
  </script>
  <script src="static/project/videojs/extend.js"></script>
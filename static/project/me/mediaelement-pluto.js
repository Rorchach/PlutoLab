
// 监控
(function($) {
    $.extend(MediaElementPlayer.prototype, {
        buildplutomonitor: function (player, controls, layers, media) {
            var playClickTime;
            var firstPlay = true;

            media.addEventListener('play', function () {
                if (firstPlay) {
                    console.timeEnd('点击播放耗时');
                    playClickTime = new Date().getTime() - playClickTime;
                    $('#click-play-time').text(playClickTime+'ms');
                    firstPlay = false;
                    console.timeEnd('缓冲时长');
                }
            }, false);

            layers.find('.mejs-overlay-button').on('click', function () {
                if (firstPlay) {
                    console.time('点击播放耗时');
                    playClickTime = new Date().getTime();
                    layers.find('.mejs-overlay-loading').closest('.mejs-overlay').show();
                }
            });

            media.addEventListener('buffering', function () {
                console.log('buffering', new Date());
                $('#buffering-count').fadeOut().fadeIn();
                var nowCount = parseInt($('#buffering-count').text().trim());
                $('#buffering-count').text(++nowCount);

                // 显示loading动画
                layers.find('.mejs-overlay-loading').closest('.mejs-overlay').show();
                console.time('缓冲时长');
            });
        }
    });
})(mejs.$);

// 将状态关联到dom上
(function($) {
    $.extend(MediaElementPlayer.prototype, {
        buildplutostatus: function (player, controls, layers, media) {
            var $container = player.container;

            media.addEventListener('buffering', function () {
                $container.addClass('buffering');
            });

            media.addEventListener('play', function () {
                $container
                    .removeClass('buffering pause')
                    .addClass('playing');
            });

            media.addEventListener('pause', function () {
                $container
                    .removeClass('playing')
                    .addClass('pause');
            });
        }
    });
})(mejs.$);

(function($) {
    $.extend(MediaElementPlayer.prototype, {
        buildplutoui: function (player, controls, layers, media) {
            var $gradientBottom = $('<div class="mejs-gradient-bottom">').appendTo(layers);
            media.addEventListener('play', function () {
            }, false);

            // 点击开始后，立刻隐藏大播放按钮
            layers.find('.mejs-overlay-button').on('click', function () {
                $('.mejs-overlay-button').hide();
            });
        }
    });
})(mejs.$);


(function($) {
    $.extend(mejs.MepDefaults, {
        multiBitrate: [{
            src: 'http://tblivestream.baidu.com/live/6d5dcff7a25d5e4238e079465dc62948.m3u8?room_id=5000009&sign=c246ac306a18e9337c5def1bd260e245&bduss=7np4XEIX35c22oTGonK0bmHFSjcPD8ke%2FGgsUtgJz532jij0eLCswTq%2Bpr5ZIe%2B4brLGhnttCgUMbL8fP%2BNqzjzJ9fwR6BkQ4jBgGuYU0IHXlwLziVKKoGiKOt9hgAx%2Bfdk6xjQBsjKLyqa1bETtJBBHSlW10jcq%2FM1voEapDjR7I1UceXUfhkg5VKhSiBj0boYCdoqMBsMylZcOExtSTwpbaZTWpxVnGr6Yx4BCwUTkBie1RhGEVkjBdGCqxKBQ',
            text: '自动',
            active: true
        }, {
            src: 'http://tblivestream.baidu.com/live/6d5dcff7a25d5e4238e079465dc62948_2048.m3u8?room_id=5000009&sign=c246ac306a18e9337c5def1bd260e245&bduss=7np4XEIX35c22oTGonK0bmHFSjcPD8ke%2FGgsUtgJz532jij0eLCswTq%2Bpr5ZIe%2B4brLGhnttCgUMbL8fP%2BNqzjzJ9fwR6BkQ4jBgGuYU0IHXlwLziVKKoGiKOt9hgAx%2Bfdk6xjQBsjKLyqa1bETtJBBHSlW10jcq%2FM1voEapDjR7I1UceXUfhkg5VKhSiBj0boYCdoqMBsMylZcOExtSTwpbaZTWpxVnGr6Yx4BCwUTkBie1RhGEVkjBdGCqxKBQ',
            text: '1080p',
            HD: true
        }, {
            src: 'http://tblivestream.baidu.com/live/6d5dcff7a25d5e4238e079465dc62948_1024.m3u8?room_id=5000009&sign=c246ac306a18e9337c5def1bd260e245&bduss=7np4XEIX35c22oTGonK0bmHFSjcPD8ke%2FGgsUtgJz532jij0eLCswTq%2Bpr5ZIe%2B4brLGhnttCgUMbL8fP%2BNqzjzJ9fwR6BkQ4jBgGuYU0IHXlwLziVKKoGiKOt9hgAx%2Bfdk6xjQBsjKLyqa1bETtJBBHSlW10jcq%2FM1voEapDjR7I1UceXUfhkg5VKhSiBj0boYCdoqMBsMylZcOExtSTwpbaZTWpxVnGr6Yx4BCwUTkBie1RhGEVkjBdGCqxKBQ',
            text: '720p',
            HD: true
        }, {
            src: 'http://tblivestream.baidu.com/live/6d5dcff7a25d5e4238e079465dc62948_910.m3u8?room_id=5000009&sign=c246ac306a18e9337c5def1bd260e245&bduss=7np4XEIX35c22oTGonK0bmHFSjcPD8ke%2FGgsUtgJz532jij0eLCswTq%2Bpr5ZIe%2B4brLGhnttCgUMbL8fP%2BNqzjzJ9fwR6BkQ4jBgGuYU0IHXlwLziVKKoGiKOt9hgAx%2Bfdk6xjQBsjKLyqa1bETtJBBHSlW10jcq%2FM1voEapDjR7I1UceXUfhkg5VKhSiBj0boYCdoqMBsMylZcOExtSTwpbaZTWpxVnGr6Yx4BCwUTkBie1RhGEVkjBdGCqxKBQ',
            text: '540p',
        }, {
            src: 'http://tblivestream.baidu.com/live/6d5dcff7a25d5e4238e079465dc62948_580.m3u8?room_id=5000009&sign=c246ac306a18e9337c5def1bd260e245&bduss=7np4XEIX35c22oTGonK0bmHFSjcPD8ke%2FGgsUtgJz532jij0eLCswTq%2Bpr5ZIe%2B4brLGhnttCgUMbL8fP%2BNqzjzJ9fwR6BkQ4jBgGuYU0IHXlwLziVKKoGiKOt9hgAx%2Bfdk6xjQBsjKLyqa1bETtJBBHSlW10jcq%2FM1voEapDjR7I1UceXUfhkg5VKhSiBj0boYCdoqMBsMylZcOExtSTwpbaZTWpxVnGr6Yx4BCwUTkBie1RhGEVkjBdGCqxKBQ',
            text: '360p',
        }, {
            src: 'http://tblivestream.baidu.com/live/6d5dcff7a25d5e4238e079465dc62948_256.m3u8?room_id=5000009&sign=c246ac306a18e9337c5def1bd260e245&bduss=7np4XEIX35c22oTGonK0bmHFSjcPD8ke%2FGgsUtgJz532jij0eLCswTq%2Bpr5ZIe%2B4brLGhnttCgUMbL8fP%2BNqzjzJ9fwR6BkQ4jBgGuYU0IHXlwLziVKKoGiKOt9hgAx%2Bfdk6xjQBsjKLyqa1bETtJBBHSlW10jcq%2FM1voEapDjR7I1UceXUfhkg5VKhSiBj0boYCdoqMBsMylZcOExtSTwpbaZTWpxVnGr6Yx4BCwUTkBie1RhGEVkjBdGCqxKBQ',
            text: '234p',
        }]
    });

    $.extend(MediaElementPlayer.prototype, {
        buildmultibitrate: function(player, controls, layers, media) {
            
            var t = this,
                $bitrateBtn = $('<div class="mejs-bitrate-button">'+
                    '<button type="button" aria-controls="' + t.id + 
                        '" title="' + t.options.muteText + 
                        '" aria-label="' + t.options.muteText + 
                    '">' +
                    '<span class="fa fa-tv icon"></span>'
                    +'</button>'+
                '</div>'
                )
                    .appendTo(controls);

            var $bitrateContainer = $('<div class="mejs-bitrate-container">');

            $.each(mejs.MepDefaults.multiBitrate, function(index, item) {
                var $content = $('<div class="mejs-bitrate-content">').html('<span class="fa fa-check bitrate-active-icon"></span>' +
                    '<span class="mejs-bitrate-text">'+ item.text + '</span>');

                if (item.HD) {
                    $content.find('.mejs-bitrate-text').append($('<sup>').text('HD'));
                }

                var $item = $('<span class="mejs-bitrate-item">').html($content).data('src', item.src);
                item.active && $item.addClass('active');

                $bitrateContainer.append($item);
            });
            
            $bitrateContainer.appendTo(controls);

            $bitrateBtn.bind('click', function () {
                $(this).toggleClass('active');
                $bitrateContainer.toggle();
            });

            $bitrateContainer.find('.mejs-bitrate-item').on('click', function () {
                $(this).addClass('active').siblings().removeClass('active');
                setTimeout(function () {
                    $bitrateContainer.hide();
                }, 200);
                media.setSrc($(this).data('src'));
                media.play();
            });
        }
    });  
})(mejs.$);

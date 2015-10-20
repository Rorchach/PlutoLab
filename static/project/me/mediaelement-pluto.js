(function($) {
    $.extend(mejs.MepDefaults, {
        multiBitrate: [{
            src: 'http://tblivestream.baidu.com/live/6d5dcff7a25d5e4238e079465dc62948.m3u8?room_id=5000009&sign=c246ac306a18e9337c5def1bd260e245&bduss=7np4XEIX35c22oTGonK0bmHFSjcPD8ke%2FGgsUtgJz532jij0eLCswTq%2Bpr5ZIe%2B4brLGhnttCgUMbL8fP%2BNqzjzJ9fwR6BkQ4jBgGuYU0IHXlwLziVKKoGiKOt9hgAx%2Bfdk6xjQBsjKLyqa1bETtJBBHSlW10jcq%2FM1voEapDjR7I1UceXUfhkg5VKhSiBj0boYCdoqMBsMylZcOExtSTwpbaZTWpxVnGr6Yx4BCwUTkBie1RhGEVkjBdGCqxKBQ',
            text: '正常',
        }, {
            src: 'http://tblivestream.baidu.com/live/6d5dcff7a25d5e4238e079465dc62948.m3u8?room_id=5000009&sign=c246ac306a18e9337c5def1bd260e245&bduss=7np4XEIX35c22oTGonK0bmHFSjcPD8ke%2FGgsUtgJz532jij0eLCswTq%2Bpr5ZIe%2B4brLGhnttCgUMbL8fP%2BNqzjzJ9fwR6BkQ4jBgGuYU0IHXlwLziVKKoGiKOt9hgAx%2Bfdk6xjQBsjKLyqa1bETtJBBHSlW10jcq%2FM1voEapDjR7I1UceXUfhkg5VKhSiBj0boYCdoqMBsMylZcOExtSTwpbaZTWpxVnGr6Yx4BCwUTkBie1RhGEVkjBdGCqxKBQ',
            text: '正常',
        }, {
            src: 'http://tblivestream.baidu.com/live/6d5dcff7a25d5e4238e079465dc62948.m3u8?room_id=5000009&sign=c246ac306a18e9337c5def1bd260e245&bduss=7np4XEIX35c22oTGonK0bmHFSjcPD8ke%2FGgsUtgJz532jij0eLCswTq%2Bpr5ZIe%2B4brLGhnttCgUMbL8fP%2BNqzjzJ9fwR6BkQ4jBgGuYU0IHXlwLziVKKoGiKOt9hgAx%2Bfdk6xjQBsjKLyqa1bETtJBBHSlW10jcq%2FM1voEapDjR7I1UceXUfhkg5VKhSiBj0boYCdoqMBsMylZcOExtSTwpbaZTWpxVnGr6Yx4BCwUTkBie1RhGEVkjBdGCqxKBQ',
            text: '正常',
        }, {
            src: 'http://tblivestream.baidu.com/live/6d5dcff7a25d5e4238e079465dc62948.m3u8?room_id=5000009&sign=c246ac306a18e9337c5def1bd260e245&bduss=7np4XEIX35c22oTGonK0bmHFSjcPD8ke%2FGgsUtgJz532jij0eLCswTq%2Bpr5ZIe%2B4brLGhnttCgUMbL8fP%2BNqzjzJ9fwR6BkQ4jBgGuYU0IHXlwLziVKKoGiKOt9hgAx%2Bfdk6xjQBsjKLyqa1bETtJBBHSlW10jcq%2FM1voEapDjR7I1UceXUfhkg5VKhSiBj0boYCdoqMBsMylZcOExtSTwpbaZTWpxVnGr6Yx4BCwUTkBie1RhGEVkjBdGCqxKBQ',
            text: '正常',
        }, {
            src: 'http://tblivestream.baidu.com/live/6d5dcff7a25d5e4238e079465dc62948.m3u8?room_id=5000009&sign=c246ac306a18e9337c5def1bd260e245&bduss=7np4XEIX35c22oTGonK0bmHFSjcPD8ke%2FGgsUtgJz532jij0eLCswTq%2Bpr5ZIe%2B4brLGhnttCgUMbL8fP%2BNqzjzJ9fwR6BkQ4jBgGuYU0IHXlwLziVKKoGiKOt9hgAx%2Bfdk6xjQBsjKLyqa1bETtJBBHSlW10jcq%2FM1voEapDjR7I1UceXUfhkg5VKhSiBj0boYCdoqMBsMylZcOExtSTwpbaZTWpxVnGr6Yx4BCwUTkBie1RhGEVkjBdGCqxKBQ',
            text: '正常',
        },]
    });

    $.extend(MediaElementPlayer.prototype, {
        buildmultibitrate: function(player, controls, layers, media) {
            
            var t = this,
                $bitrateBtn = $('<div class="mejs-button mejs-bitrate-button">'+
                    '<button type="button" aria-controls="' + t.id + 
                        '" title="' + t.options.muteText + 
                        '" aria-label="' + t.options.muteText + 
                    '">清晰度</button>'+
                '</div>'
                )
                    .appendTo(controls);

            var $bitrateContainer = $('<div class="mejs-bitrate-container">');

            $.each(mejs.MepDefaults.multiBitrate, function(index, item) {
                $bitrateContainer.append($('<span class="mejs-bitrate-item">').text(item.text).data('src', item.src));
            });
            
            $bitrateContainer.appendTo(controls);

            $bitrateBtn.bind('click', function () {
                $bitrateContainer.toggle();
            });

            $bitrateContainer.find('.mejs-bitrate-item').on('click', function () {
                $bitrateContainer.hide();
                media.setSrc($(this).data('src'));
                media.play();
            });
        }
    });  
})(mejs.$);

function monitor(options) {
    var player = this;

    // 视频监控
    player.on('waiting', function () {
        console.time('缓冲');
    });

    player.on('playing', function () {
        console.log(new Date());
        console.timeEnd('缓冲');
        console.timeEnd('视频第一次加载时间');
    });

    player.on('buffering', function () {
        console.info('buffering');
    });

    player.on('resolutionchange', function () {
        console.info('resolutionchange');
    });

    player.on('error', function (e) {
        player.src({
            src: player.getCache().src,
            type: 'application/x-mpegURL'
        });
        player.play();
    });

    $('.vjs-big-play-button').on('click', function () {
        console.time('视频第一次加载时间');
    });

    player.on('ready', function () {
        console.log('ready');
        console.time('视频第一次加载时间'); 
    });
};

videojs.plugin('monitor', monitor);
// 视频监控
player.on('waiting', function () {
    console.info('waiting');
});

player.on('playing', function () {
    console.info('playing');
    console.timeEnd('视频第一次加载时间');
});

player.on('buffering', function () {
    cnsole.info('buffering');
});

player.on('resolutionchange', function () {
    console.info('resolutionchange');
});

player.on('error', function () {
    player.src({
        src: player.getCache().src,
        type: 'application/x-mpegURL'
    });
    player.play();
});

$('.vjs-big-play-button').on('click', function () {
    console.time('视频第一次加载时间');
});

// 监控
player.on('play', function () {
    console.timeEnd('视频缓冲');
    console.timeEnd('点击播放耗时');
});

player.on('waiting', function () {
    console.time('视频缓冲');
});

player.on('loadstart', function () {
    
});

$('.vjs-big-play-button').on('click', function () {
    console.time('点击播放耗时');
});

/**
 * 交互优化
 */

// 点击播放按钮，立刻显示loading
$('.vjs-big-play-button').on('click', function () {
    $('.vjs-big-play-button').hide();
    $('.video-js').addClass('vjs-waiting');
});
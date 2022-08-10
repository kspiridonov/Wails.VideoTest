var videoTag = null;
function onloadd() {
    videoTag = document.createElement('video');
    videoTag.setAttribute('muted', 'true');
    videoTag.style = "width:500px;height:500px;"
    videoTag.addEventListener('ended', (event) => {
        console.info('Video stopped either because 1) it was over, ' +
            'or 2) no further data is available.');
        setSourceAndPlay();
    });
    videoTag.addEventListener('error', (event) => {
        console.error('Video error', error);
    });
    videoTag.addEventListener('pause', (event) => {
        console.info('Video paused');
    });
    videoTag.addEventListener('play', (event) => {
        console.info('Video play');
    });
    videoTag.addEventListener('loadeddata', (event) => {
        console.info("loadeddata");
        videoTag.play();
    });
    document.body.appendChild(videoTag);
    setSourceAndPlay();
}

function setSourceAndPlay() {
    videoTag.setAttribute('src', 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4');
    videoTag.load();
}
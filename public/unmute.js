var video = document.getElementById('video');
var button = document.getElementById('unmutebutton');

button.addEventListener('click', function() {
    video.muted = !video.muted;
    video.play();
    button.style.opacity = 0;
})

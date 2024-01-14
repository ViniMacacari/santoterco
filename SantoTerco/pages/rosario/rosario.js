$(document).ready(function () {
    var audio = new Audio("../../archives/sound/greogoriano.m4a")
    function togglePlayPause() {
        if (audio.paused) {
            audio.play()
        } else {
            audio.pause()
        }
    }

    // controlar a música
    $("#playPauseButton").click(function () {
        //togglePlayPause()
    })
})
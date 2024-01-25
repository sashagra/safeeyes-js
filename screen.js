function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
        document.exitFullscreen();
    }
}

function rest(restMin) {
    toggleFullScreen()
    setTimeout(() => {
        atert("Finish")
    }, restMin * 1000 * 60)

}

const startButton = document.getElementById("start")
startButton.addEventListener("click", toggleFullScreen)
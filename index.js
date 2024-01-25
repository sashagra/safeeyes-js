const shortRest = 15 //seconds
const longRest = 60 // seconds
const restAfter = 15 // minutes

const startBtn = document.getElementById("start")
const statusScreen = document.getElementById("status")
const startTimeScreen = document.getElementById("startTime")
const timer = document.getElementById("timer")
let win
let startTime
let stat
let shorts = 4

startBtn.onclick = function () {
    if (startBtn.textContent === "START") {
        startBtn.textContent = "STOP"
        run()
        console.log(startBtn)
    } else {
        location.reload();
    }
}

function startTimer(status) {
    startTime = new Date()
    statusScreen.innerText = status + " at " + startTime
    startTime = startTime.getTime()
}

function run() {
    stat = "Working started"
    startTimer(stat)
    setInterval(() => {
        const workingTime = new Date().getTime() - startTime
        statusScreen.innerText = stat
        timer.innerText = workingTime / 1000
        if (stat === "Working started" && workingTime >= restAfter * 1000 * 60) {
            stat = shorts === 0 ? "Long rest started" : "Short rest started"
            startTimer(stat)
            win = window.open("screen.html", "test", "modal=yes")
            win.focus()
        } else if (stat === "Short rest started" && workingTime >= shortRest * 1000) {
            win.close()
            stat = "Working started"
            startTimer(stat)
            shorts--
        } else if (stat === "Long rest started" && workingTime >= longRest * 1000) {
            shorts = 4
            win.close()
            stat = "Working started"
            startTimer(stat)
        }

    }, 1000)
}

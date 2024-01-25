console.log("Start")
const timer = document.getElementById("time")


let counter = 0
setInterval(() => {
    if (counter === 20) {
        let win = window.open("screen.html", "test", "modal=yes")
        win.focus()
        setTimeout(() => { win.close() }, 30000)
    }
    timer.innerText = counter
    counter++
}, 1000)
let daysEL = document.getElementById('days')
let hoursEL = document.getElementById('hours')
let minsEL = document.getElementById('mins')
let secEL = document.getElementById('sec')





const newYears = '1 Jan 2023'

const countDown = () => {
    let currentTime = new Date();
    let newYearsDate = new Date(newYears)
    const totalSec = (newYearsDate - currentTime) / 1000;
    const days = Math.floor(totalSec / 3600 / 24)
    const hours = Math.floor(totalSec / 3600) % 24;
    const minutes = Math.floor(totalSec / 60) % 60;
    const seconds = Math.floor(totalSec) % 60;

    daysEL.innerText = days
    hoursEL.innerText = formatTime(hours)
    minsEL.innerText = formatTime(minutes)
    secEL.innerText = formatTime(seconds)

}

function formatTime(time) {
    return time < 10 ? `0${time}` : time
}



countDown()
setInterval(countDown, 1000); //setinterval which will call the countdown every sec

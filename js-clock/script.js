const secondHand = document.getElementById("second-hand");
const minuteHand = document.getElementById("minute-hand");
const hourHand = document.getElementById("hour-hand");

function clockTick() {
    const date = new Date();
    const seconds = date.getSeconds() / 60;
    const minutes = (date.getMinutes() + seconds) / 60;
    const hours = (date.getHours() + minutes) / 12;

    rotateClockHand(secondHand, seconds);
    rotateClockHand(minuteHand, minutes);
    rotateClockHand(hourHand, hours);
}

function rotateClockHand(element, rotationFraction) {
    element.style.setProperty('--rotate', rotationFraction * 360);
}

setInterval(clockTick, 1000);

clockTick();
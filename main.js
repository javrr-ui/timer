let hours = 0, minutes = 0, seconds = 0;

setInterval(timer, 1000);


function timer() {
    seconds++;
    if (seconds == 60) {
        minutes++;
        seconds = 0;
    }

    if (minutes == 60) {
        hours++;
        minutes = 0;
    }

    console.log(prettyTime())
}


function prettyTime() {
    let hourString = hours,
        minuteString = minutes,
        secondString = seconds;

    if (hours <= 9) {
        hourString = "0" + hourString;
    }
    if (minutes <= 9) {
        minuteString = "0" + minuteString;
    }
    if (seconds <= 9) {
        secondString = "0" + secondString;
    }

    return hourString + ":" + minuteString + ":" + secondString;
}


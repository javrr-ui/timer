let hours = 0, minutes = 0, seconds = 0;
const timer1 = document.querySelector("#timer1");
const startButton = document.querySelector("#start");
const resetButton = document.querySelector("#reset");

eventListeners();

function eventListeners(){
    startButton.addEventListener("click", startTimer);
    resetButton.addEventListener("click",e =>{});
}

function startTimer(){
    setInterval(timer,1000);
}

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

    timer1.textContent = prettyTime();
    //console.log(prettyTime())
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


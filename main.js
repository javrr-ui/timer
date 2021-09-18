let hours = 0, minutes = 0, seconds = 0;
//Version 1
const timer1 = document.querySelector("#timer1");
const startButton = document.querySelector("#start");
const resetButton = document.querySelector("#reset");
//Version 2 player 1
const timerPlayer1 = document.querySelector("#timerPlayer1");
const startButtonPlayer1 = document.querySelector("#startPlayer1");
const resetButtonPlayer1 = document.querySelector("#resetPlayer1");
//Version 2 player 2
const timerPlayer2 = document.querySelector("#timerPlayer2");
const startButtonPlayer2 = document.querySelector("#startPlayer2");
const resetButtonPlayer2 = document.querySelector("#resetPlayer2");

let interval;
eventListeners();

function eventListeners() {
    //Version 1 timer
    startButton.addEventListener("click", startTimer);
    resetButton.addEventListener("click", resetTimer);
    //Version 2 timer
    startButtonPlayer1.addEventListener("click", e => { });
    resetButtonPlayer1.addEventListener("click", e => { });
    startButtonPlayer2.addEventListener("click", e => { });
    resetButtonPlayer2.addEventListener("click", e => { });

}

function startTimer(e) {
    const button = e.srcElement;
    if (button.textContent == "Start") {
        interval = setInterval(timer, 1000);
        button.textContent = "Stop";
    } else {
        clearInterval(interval);
        button.textContent = "Start";
    }
}

function resetTimer() {
    hours = 0;
    minutes = 0;
    seconds = 0;
    timer1.textContent = "00:00:00";
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


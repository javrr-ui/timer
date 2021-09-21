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

let clock = {
    hours: 0,
    minutes: 0,
    seconds: 0
}

eventListeners();

function eventListeners() {
    //Version 1 timer
    startButton.addEventListener("click", startTimer);
    resetButton.addEventListener("click", resetTimer);
    //Version 2 timer
    startButtonPlayer1.addEventListener("click", timerV2);
    resetButtonPlayer1.addEventListener("click", e => { });
    startButtonPlayer2.addEventListener("click", timerV2);
    resetButtonPlayer2.addEventListener("click", e => { });

}

function startTimer(e) {
    const button = e.srcElement;
    if (button.textContent == "Start") {
        interval = setInterval(function () {
            timer(clock);
        }, 1000);
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

function timer(clock) {
    clock.seconds++
    if (clock.seconds == 60) {
        clock.minutes++;
        clock.seconds = 0;
    }

    if (clock.minutes == 60) {
        clock.hours++;
        clock.minutes = 0;
    }

    timer1.textContent = prettyTime(clock);
    console.log(clock);
}

let hourString = "", minuteString = "", secondString = "";
function prettyTime(clock) {
    hourString = clock.hours;
    minuteString = clock.minutes;
    secondString = clock.seconds;

    if (clock.hours <= 9) {
        hourString = "0" + clock.hours;
    }
    if (clock.minutes <= 9) {
        minuteString = "0" + clock.minutes;
    }
    if (clock.seconds <= 9) {
        secondString = "0" + clock.seconds;
    }

    return hourString + ":" + minuteString + ":" + secondString;
}

let inter;
let intervalStarted = false;
let startTime = Date.now();
let lastTime = Date.now();
let player1 = 10, player2 = 10;

function timerV2(e) {
    if (intervalStarted) {
        clearInterval(inter);
        intervalStarted = false;
    }

    let playerId = e.srcElement.id;

    let startTime = Date.now();
    inter = setInterval(() => {
        if (player2 <= 0 || player1 <= 0) {
            clearInterval(inter);
            return;
        }

        intervalStarted = true;
        elapsedTime = Math.round((Date.now() - startTime) / 1000);

        if (lastTime != elapsedTime) {
            //Player who pressed the button
            if (playerId == "startPlayer1") {
                player2 = player2 - 1;
                timerPlayer2.textContent = player2;
            }
            if (playerId == "startPlayer2") {
                player1 = player1 - 1;
                timerPlayer1.textContent = player1;
            }
        }
        lastTime = elapsedTime;
    }, 100)
}

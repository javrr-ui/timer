let hours = 0, minutes = 0, seconds = 0;

setInterval(timer, 1000);


function timer() {
    seconds++;
    if (seconds == 60) {
        minutes++;
        seconds = 0;
    }

    if (minutes == 60){
        hours++;
        minutes=0;
    }
}
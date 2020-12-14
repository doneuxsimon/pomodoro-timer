var minutes = 25;
var seconds = 0;
var click = new Audio("click.mp3");
var bell = new Audio("bell.mp3")
let nombreSession = 0;
function initialise() {
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

let body = document.querySelector('body');
body.onload = initialise();

let button = document.querySelector('button');
button.addEventListener('click', function session() {
    click.play();
    nombreSession++;
    minutes = 24;
    seconds = 59;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    var minutesInterval = setInterval(minutesTimer, 60000);
    var secondsInterval = setInterval(secondsTimer, 1000);

    function minutesTimer() {
        minutes--;
        document.getElementById("minutes").innerHTML = minutes;
        seconds = 60;
    }

    function secondsTimer() {
        seconds--;
        document.getElementById("seconds").innerHTML = seconds;

        if (seconds === 0 && minutes === 0) {
            
            bell.play();
            clearInterval(minutesInterval);
            clearInterval(secondsInterval);
            document.getElementById("done").innerHTML = "Session Completed!! Break Will Start In 10 Sec";
            document.getElementById("done").className = "showMessage text-center";
            minutes = 5;
            seconds = 0;
            document.getElementById("minutes").innerHTML = minutes;
            document.getElementById("seconds").innerHTML = seconds;
            if (nombreSession == 4) {
               setTimeout( longuePause(), 10000);
            }
            else {
               setTimeout( pause(), 10000);
            }

        }
    }
})

function pause() {
    minutes = 4;
    seconds = 59;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    var minutesInterval = setInterval(minutesTimer, 60000);
    var secondsInterval = setInterval(secondsTimer, 1000);

    function minutesTimer() {
        minutes--;
        document.getElementById("minutes").innerHTML = minutes;
        seconds = 60;
    }

    function secondsTimer() {
        seconds--;
        document.getElementById("seconds").innerHTML = seconds;

        if (seconds === 0 && minutes === 0) {
            bell.play();
            clearInterval(minutesInterval);
            clearInterval(secondsInterval);
            document.getElementById("done").innerHTML = "Break Ended!! Start Work Again In 10 Sec";
            document.getElementById("done").className = "showMessage text-center";
            setTimeout(session(),10000);
        }
    }
}

function longuePause() {
    minutes = 14;
    seconds = 59;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    var minutesInterval = setInterval(minutesTimer, 60000);
    var secondsInterval = setInterval(secondsTimer, 1000);

    function minutesTimer() {
        minutes--;
        document.getElementById("minutes").innerHTML = minutes;
        seconds = 60;
    }

    function secondsTimer() {
        seconds--;
        document.getElementById("seconds").innerHTML = seconds;

        if (seconds === 0 && minutes === 0) {
            bell.play();
            clearInterval(minutesInterval);
            clearInterval(secondsInterval);
            document.getElementById("done").innerHTML = "Long Break Ended!! Reset The Timer To Start work again";
            document.getElementById("done").className = "showMessage text-center";
        }
    }
}
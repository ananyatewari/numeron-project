// Iteration 2: Generate 2 random number and display it on the screen
let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
var num1 = 0, num2 = 0;
getRandomNumber();
function getRandomNumber(){
    num1 = Math.ceil(Math.random()*100);
    number1.innerHTML = num1;
    num2 = Math.ceil(Math.random()*100);
    number2.innerHTML = num2;
}

// Iteration 3: Make the options button functional
var score = 0;
const greaterThan = document.getElementById("greater-than");
const equalTo = document.getElementById("equal-to");
const lesserThan = document.getElementById("lesser-than");

greaterThan.addEventListener ("click", () => {
    if (num1 > num2){
        score++;
        resetTiming(timing);
        getRandomNumber();
    } 
    else {
        window.location.href = "./gameover.html";
    }
});

equalTo.addEventListener ("click", () => {
    if (num1 == num2){
        score++;
        resetTiming(timing);
        getRandomNumber();
    } 
    else {
        window.location.href = "./gameover.html";
    }
});

lesserThan.addEventListener ("click", () => {
    if (num1 < num2){
        score++;
        resetTiming(timing);
        getRandomNumber();
    } 
    else {
        window.location.href = "./gameover.html";
    }
});
// Iteration 4: Build a timer for the game
var timer = document.getElementById("timer");
var time = 5;
var timing;

function timerStarting(){
    time = 5;
    timer.innerHTML = time;
    timing = setInterval(function(){
        time--;
        if (time == 0) window.location.href = "./gameover.html";
        timer.innerHTML = time;

    }, 1000);

    localStorage.setItem("score", score);
}

function resetTiming(timertrack){
    clearInterval(timertrack);
    timerStarting();
}

timerStarting(); //done :D
var reset = document.getElementById("reset");
var start = document.getElementById("start");
var pause = document.getElementById("pause");
var timer = document.getElementById("timer");
var count = 0;
var x = 0;
// set the variable for each of the button first


console.log(reset);
console.log(start);
console.log(pause);
console.log(timer);



reset.addEventListener("click", resetButton);
start.addEventListener("click", startButton);
pause.addEventListener('click', pauseButton);

function resetButton ()
{
count = 0;
timer.innerText = "Stop Watch";
console.log ("pressed reset");
}

function startButton ()
{
  x = window.setInterval(startTimer, 1000);
  console.log(x);

console.log ("pressed start");
}

function pauseButton ()
{
  window.clearInterval(x);

console.log ("pressed pause");
}

function startTimer()
{
  timer.innerText = "Time elapsed: "+count++;
  console.log("timer is running");
}

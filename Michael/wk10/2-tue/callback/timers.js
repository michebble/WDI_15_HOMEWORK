var resetBtn = document.querySelector('#reset');
var startBtn = document.querySelector('#start');
var pauseBtn = document.querySelector('#pause');
var timer = document.querySelector('#timer');

var seconds = 0;
var timerId;
var readyMessage = 'Stop Watch';

function updateTimer() {
  seconds += 1;
  timer.textContent = seconds;
}

resetBtn.addEventListener('click', function(){
  clearInterval(timerId);
  seconds = 0;
  timer.textContent = readyMessage;
});

startBtn.addEventListener('click', function(){
  timerId = setInterval(function(){updateTimer()}, 1000);
});

pauseBtn.addEventListener('click', function(){
  clearInterval(timerId);
});
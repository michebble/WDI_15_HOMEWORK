var resetBtn = document.querySelector('#reset');
var startBtn = document.querySelector('#start');
var pauseBtn = document.querySelector('#pause');

resetBtn.addEventListener('click',  );
startBtn.addEventListener('click',  );
pauseBtn.addEventListener('click',  );

var seconds = 0;
var timerId = setInterval(function(){}, 1000);

function updateTimer() {
  var timer = document.querySelector('#timer');
  seconds += 1;
  timer.textContent = seconds;
}
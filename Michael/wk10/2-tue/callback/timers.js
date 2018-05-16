var resetBtn = document.querySelector('#reset');
var startBtn = document.querySelector('#start');
var pauseBtn = document.querySelector('#pause');
var timer = document.querySelector('#timer');

var seconds = 0;
var timerId;
var readyMessage = 'Stop Watch';
var countingMessage = 'Time elapsed:';

var updateTimer = () => {
  seconds += 1;
  timer.textContent = `${countingMessage} ${seconds}`;
}



startBtn.addEventListener('click', () => {
  timerId = setInterval( () => {
    updateTimer()
  }, 1000);
});

resetBtn.addEventListener('click', () => {
  clearInterval(timerId);
  seconds = 0;
  timer.textContent = readyMessage;
});

pauseBtn.addEventListener('click', () => clearInterval(timerId));
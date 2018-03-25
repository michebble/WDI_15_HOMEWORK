console.log('Meow-tastic')

var movePixels = 10;
var delayMs = 50;
var catTimer = null;

var startButton = document.querySelector('#start-button');
var speedButton = document.querySelector('#speed-button');
var stopButton = document.querySelector('#stop-button');
var screenSize = document.querySelector('#info');
    
var catWalk = function() {
  var img = document.querySelector('img');
  var currentLeft = parseInt(img.style.left);
  img.style.left = (currentLeft + movePixels) + 'px';
  if (currentLeft > (window.innerWidth - img.width)) {
    img.style.left = '0px';
  }
}

var startCatWalk = function() {
  catTimer = window.setInterval(catWalk, delayMs);
}

var stopCatWalk = function() {
  movePixels = 0;
  catTimer = null;
}

var windowResize = function() {

}


info.addEventListener('resize', )
startButton.addEventListener('click', startCatWalk);
stopButton.addEventListener('click', stopCatWalk);
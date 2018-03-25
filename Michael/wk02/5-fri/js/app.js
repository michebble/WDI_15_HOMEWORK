console.log('Meow-tastic')

var movePixels = 10;
var delayMs = 50;
var catTimer = null;
var walkLeft = true;

var startButton = document.querySelector('#start-button');
var speedButton = document.querySelector('#speed-button');
var stopButton = document.querySelector('#stop-button');
var screenSize = document.querySelector('#info');
    
var catWalk = function() {
  var img = document.querySelector('img');
  var currentLeft = parseInt(img.style.left);
  img.style.transform = 'scaleX(1)'
  img.style.left = (currentLeft + movePixels) + 'px';
  if (currentLeft > (window.innerWidth - img.width)) {
    clearInterval(catTimer);
    walkLeft = false;
    startCatWalk();
  }
}

var catWalkBack = function() {
  
  var img = document.querySelector('img');
  var currentLeft = parseInt(img.style.left);
  img.style.transform = 'scaleX(-1)'
  img.style.left = (currentLeft - movePixels) + 'px';
  if (currentLeft < (window.innerWidth - window.innerWidth)) {
    clearInterval(catTimer);
    walkLeft = true;
    startCatWalk();
  }
}
    
var startCatWalk = function() {
  startButton.disabled = true;
  if (walkLeft === true) {
    catTimer = window.setInterval(catWalk, delayMs);
  } else if (walkLeft === false) {
    catTimer = window.setInterval(catWalkBack, delayMs);
  }
}

var stopCatWalk = function() {
  startButton.disabled = false;
  movePixels = 10;
  clearInterval(catTimer);
}

var speedUp = function() {
  movePixels = movePixels + 5;
}


startButton.addEventListener('click', startCatWalk);
stopButton.addEventListener('click', stopCatWalk);
speedButton.addEventListener('click', speedUp);

// currentLeft + 138 > (window.innerWidth / 2 ) centre point
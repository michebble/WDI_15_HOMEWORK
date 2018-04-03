console.log('Meow-tastic')

var movePixels = 10;
var delayMs = 50;
var catTimer = null;
var danceTimer = null;
var walkLeft = true;
var danced = false;

var startButton = document.querySelector('#start-button');
var speedButton = document.querySelector('#speed-button');
var stopButton = document.querySelector('#stop-button');
var screenSize = document.querySelector('#info');
var img = document.querySelector('img');
var body = document.querySelector('body');

var music = new Audio("gate-crash.mp3");
var bgMusic = function(sfx) {
  sfx.play();
}

var catDance = function() {
  clearInterval(catTimer);
  img.src = 'images/dancing-cat.gif';
  danced = true;
  bgMusic(music);
  setTimeout(startCatWalk, 8500);
  danceTimer = window.setInterval(flashScreen, 1000);
}

var flashScreen = function() {
  if (body.style.filter === 'invert(100%)') {
    body.style.filter = 'invert(0%)';
  } else {
    body.style.filter = 'invert(100%)';
  }
}

var catWalk = function() {
  var currentLeft = parseInt(img.style.left);
  img.style.transform = 'scaleX(1)';
  img.style.left = (currentLeft + movePixels) + 'px';
  if (currentLeft + (img.width / 2) > (window.innerWidth /2) && danced === false) {
    catDance();
  } else if (currentLeft > (window.innerWidth - img.width)) {
    clearInterval(catTimer);
    walkLeft = false;
    danced = false;
    startCatWalk();
  }
}

var catWalkBack = function() {
  var img = document.querySelector('img');
  var currentLeft = parseInt(img.style.left);
  img.style.transform = 'scaleX(-1)'
  img.style.left = (currentLeft - movePixels) + 'px';
  if (currentLeft + (img.width / 2) < (window.innerWidth /2) && danced === false) {
    catDance();
  } else if (currentLeft < (window.innerWidth - window.innerWidth)) {
    clearInterval(catTimer);
    walkLeft = true;
    danced = false;
    startCatWalk();
  }
}
    
var startCatWalk = function() {
  clearInterval(danceTimer);
  body.style.filter = 'invert(0%)';
  startButton.disabled = true;
  img.src = 'images/cat-walk.gif';
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


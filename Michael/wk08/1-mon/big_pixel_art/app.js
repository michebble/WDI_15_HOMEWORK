var $brushBox = $('.brush-box');
var $colorInput = $('.color-input');
var $colorBtn = $('.color-btn');
var $searchInput = $('.search-input');
var $searchBtn = $('.search-btn');
var $mainArea = $('main');

var changeColor = function(event) {
  var currentColor = $brushBox[0].style.backgroundColor;
  event.target.style.backgroundColor = currentColor;
}

var createPixels = function() {
  for(var i = 0; i < 270; i++) {
    var $div = $('<div>')
      .addClass('square')
      .mouseover(changeColor);
    $mainArea.append($div);
  }
}

var setColor = function() {
  var color = $colorInput.val();
  $brushBox.css('background-color', color);
}

var setBackgroundImage = function(res) {
  var moviePoster = res.Poster;
  $mainArea.css('background-image', 'url(' + moviePoster + ')');
}

$searchBtn.click(function(event){
  event.preventDefault();
  var movieTitle = $searchInput.val();
  var options = {
    url: 'http://omdbapi.com/?t=' + movieTitle + '&apikey=2f6435d9'
  };
  $.ajax(options).done(setBackgroundImage);
});

$colorBtn.click(function(event) {
  event.preventDefault();
  setColor();
})

createPixels();

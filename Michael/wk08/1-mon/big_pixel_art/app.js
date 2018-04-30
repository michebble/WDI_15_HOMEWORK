$brushBox = $('.brush-box');
$colorInput = $('.color-input');
$colorBtn = $('.color-btn');
$searchInput = $('.search-input');
$searchBtn = $('.search-btn');

var changeColor = function(event) {
  var currentColor = $brushBox[0].style.backgroundColor;
  event.target.style.backgroundColor = currentColor;
}

var createPixels = function() {
  for(var i = 0; i < 100; i++) {
    $div = $('<div>')
      .addClass('square')
      .mouseover(changeColor);
    $('main').append($div);
  }
}

var setColor = function() {
  var color = $colorInput.val();
  $brushBox.css('background-color', color);
}

var setBackgroundImage = function(res) {
  var moviePoster = res.Poster;
  $('main').css('background-image', 'url(' + moviePoster + ')');
}

$colorInput.keypress(function(event) {
  if (event.which == 13) {
    setColor();
  }
})

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

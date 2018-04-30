$brushBox = $('.brush-box');
$colorInput = $('.color-input');
$colorBtn = $('.color-btn');



var createPixels = function() {
  for(var i = 0; i < 100; i++) {
    $div = $('<div>')
      .addClass('square');

    $('main').append($div);
  }
}


var setColor = function() {
  
  var color = $colorInput[0].value;
  
  $brushBox[0].style.backgroundColor = color;
}


createPixels();


$colorInput.on('keypress', function(event) {
  if (event.which == 13) {
    setColor();
  }
})

$colorBtn.on('click', function(event) {
  event.preventDefault();

  setColor();

})


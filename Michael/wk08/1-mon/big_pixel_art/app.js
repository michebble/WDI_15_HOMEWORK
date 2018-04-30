$brushBox = $('.brush-box');
$colorInput = $('.color-input');
$colorBtn = $('.color-btn');

var setColor = function() {
  
  var color = $colorInput[0].value;
  
  $brushBox[0].style.backgroundColor = color;
}

$colorInput.on('keypress', function(event) {
  if (event.which == 13) {
    setColor();
  }
})

$colorBtn.on('click', function(event) {
  event.preventDefault();

  setColor();

})


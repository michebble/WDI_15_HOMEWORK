$brushBox = $('.brush-box');
$colorInput = $('.color-input');
$colorBtn = $('.color-btn');

$colorBtn.on('click', function(event) {
  event.preventDefault();

  $colorInput = $('.color-input');
  var color = $colorInput[0].value;
  
  $brushBox = $('.brush-box');
  $brushBox[0].style.backgroundColor = color;

})


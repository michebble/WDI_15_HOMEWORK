var countInteger = function(array) {
  var output = 0;
  array.forEach(function(element){
    if (Number.isInteger(element)) {
      output += 1;
    } 
  });
  return output;
}

countInteger([4, 2.2, 5, 6, 4.2, 8.2, 4]);

var getSquares = function(array) {
  return array.map(number => number**2);
}

getSquares([1, 2, 3, 4, 5]);
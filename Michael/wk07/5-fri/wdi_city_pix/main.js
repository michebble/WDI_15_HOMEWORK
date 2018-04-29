var citySelector = document.querySelector('#city-type');

var cityNames = [['NYC','nyc'], ['SF', 'sf'], ['LA', 'la'], ['SYD', 'sydney'], ['ATX', 'austin']];

var createOptions = function(){
  for (var i = 0; i < cityNames.length; i++) {
    var cityOption = document.createElement('option');
    var cityName = cityNames[i][0];
    var imageName = cityNames[i][1];
    cityOption.textContent = cityName;
    cityOption.value = imageName;
    citySelector.appendChild(cityOption);
  }
}

createOptions();

citySelector.onchange = function() {
  var city = citySelector.value;
  document.body.className = city;
}
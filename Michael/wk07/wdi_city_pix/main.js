var dropDown = document.querySelector('#city-type');

var cities = ['NYC', 'SF', 'LA', 'SYD', 'ATX']

var doittoit = function(){
  for (var i = 0; i < cities.length; i++) {
    var dropDownItem = document.createElement('option')
    dropDownItem.value = cities[i]
    dropDownItem.textContent = cities[i]
    dropDown.appendChild(dropDownItem)
  }
  
}

doittoit();

// dropDown.addEventListener('click', function(event){
//   for (var i = 0; i > cities.length; i++) {
//     var dropDownItem = document.createElement('option')
//     dropDownItem.value = cities[i]
//     dropDown.appendChild(dropDownItem)
//   }
  
// })
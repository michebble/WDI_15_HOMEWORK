var $searchBtn = $('.search-btn');
var $main = $(".main");


$searchBtn.on('click', function(event){
  var $searchBar = $(".search-bar");
  event.preventDefault();
  var $searchQuery = $searchBar.val();
  $.ajax({
    url: 'http://omdbapi.com/?s=' + $searchQuery + '&apikey=2f6435d9'
  }).done(function(res){
    res.Search.forEach(function(element){
      $('main').append("<h2>" + element.Title + "</h2>")
    })
  })
});
    



var createList = function(object) {
  object.Search.forEach(function(element){
    $('main').append("<a href=https://www.imdb.com/title/" + element.imdbID + " target='_blank'><h2>" + element.Title + "</h2></a>")
  })
}

var $searchBtn = $('.search-btn');

$searchBtn.on('click', function(event){
  event.preventDefault();
  var $searchBar = $(".search-bar");
  var $searchQuery = $searchBar.val();
  $.ajax({
    url: 'http://omdbapi.com/?s=' + $searchQuery + '&apikey=2f6435d9'
  }).done(createList)
});
    


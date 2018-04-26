
var createList = function(res) {
  res.Search.forEach(function(movie){
    $h2 = $('<h2>')
    $a = $('<a>').attr('href',`https://www.imdb.com/title/${movie.imdbID}`).attr('target', '_blank').text(movie.Title)
    $h2.append($a)
    $('main').append($h2)
  })
}

var $searchBtn = $('.search-btn');

$searchBtn.on('click', function(event){
  event.preventDefault();
  var $searchBar = $(".search-bar");
  var $searchQuery = $searchBar.val();
  var options = {
    url: 'http://omdbapi.com/?s=' + $searchQuery + '&apikey=2f6435d9'
  }
  $.ajax(options).done(createList)
});
    


var $resultArea = $('.gif-box');
var $searchBtn = $('.search-btn');
var $searchBar = $(".search-bar");
var offset = 0;
var currentSearch;
var options = {
  url: 'http://api.giphy.com/v1/gifs/trending?&api_key=84kCI4uzgYVwkoRLTuB7Th7PyyEJI0qt&limit=10&offset=' + offset
};

var createList = function(res) {
  
  res.data.forEach(function(gif){
    $div = $('<div>');

    $gif = $('<img>')
      .attr('src', gif.images.fixed_height.url);

    $div.append($gif);

    $resultArea.append($div);
  })
}

$.ajax(options).done(createList);

$searchBtn.on('click', function(event){
  event.preventDefault();
  $resultArea.empty();
  offset = 0;
  currentSearch = $searchBar.val()
   
  var options = {
    url: 'http://api.giphy.com/v1/gifs/search?q=' + currentSearch + '&api_key=84kCI4uzgYVwkoRLTuB7Th7PyyEJI0qt&limit=10&offset=' + offset
  };
  
  $.ajax(options).done(createList);
});

$(window).scroll(function () { 

  if ($(window).scrollTop() >= $(document).height() - $(window).height() - 10) {
    offset += 10;

    options = {
      url: 'http://api.giphy.com/v1/gifs/search?q=' + currentSearch + '&api_key=84kCI4uzgYVwkoRLTuB7Th7PyyEJI0qt&limit=10&offset=' + offset
    };

    $.ajax(options).done(createList);
  }
});





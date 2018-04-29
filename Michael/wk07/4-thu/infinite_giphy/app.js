
var $searchBtn = $('.search-btn');
var $searchBar = $(".search-bar");
var $resultArea = $('main');
var offset = 0;
var currentSearch = 'trending?'
var options = {
  url: 'http://api.giphy.com/v1/gifs/' + currentSearch +'&api_key=84kCI4uzgYVwkoRLTuB7Th7PyyEJI0qt&limit=10&offset=' + offset
};

var createList = function(res) {
  
  res.data.forEach(function(gif){
    $div = $('<div>')
      .addClass('gif-box');

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
  currentSearch = 'search?q=' + $searchBar.val()
   
  options = {
    url: 'http://api.giphy.com/v1/gifs/' + currentSearch + '&api_key=84kCI4uzgYVwkoRLTuB7Th7PyyEJI0qt&limit=10&offset=' + offset
  };
  
  $.ajax(options).done(createList);
});

$(window).scroll(function () { 

  if ($(window).scrollTop() >= $(document).height() - $(window).height() - 10) {
    offset += 10;

    options = {
      url: 'http://api.giphy.com/v1/gifs/' + currentSearch + '&api_key=84kCI4uzgYVwkoRLTuB7Th7PyyEJI0qt&limit=10&offset=' + offset
    };

    $.ajax(options).done(createList);
  }
});





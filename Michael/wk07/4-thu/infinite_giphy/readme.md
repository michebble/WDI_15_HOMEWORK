# Infinite Giphy

I built this app to practice using Ajax and jQuery to access an API and use the result to update a page without reloading. 
The goal if for the page to load 10 gif images based on the users search input. When the page is scrolled tothe bottom, 10 more gifs are loaded. The API used returns gifs from the Giphy datdbase.

## When the page loads
After the browser has parsed the HTML and CSS, it gets to a script tag and loads the jQuery library from the 
Cloudflare CDNJS. Next the local app.js is loaded and variables are defined.
```js
var $searchBtn = $('.search-btn');
var $searchBar = $(".search-bar");
var $resultArea = $('.gif-box');
var offset = 0;
var currentSearch;
var options = {
  url: 'http://api.giphy.com/v1/gifs/trending?&api_key=84kCI4uzgYVwkoRLTuB7Th7PyyEJI0qt&limit=10&offset=' + offset
};
```
The first two are page elements that will be used to take the users search as an input, and the third is the element that will contain the returned gifs.
`offset` will be used to increment the API query by ten each time, and is declared here as it will be used by two different functions. 
`currentSearch` is intended to hold the users search query. It is declared here as it will be used by two different functions. Initially it is set to 'trending', as the first time it is called it will be used to generate a page of trending gifs.
`options` is also declared here, with the url key pointing to a Giphy API query combined `currentSearch`. 


### Know issue
Giphys need to be speardout more to fill the page vertically, otherwise the scrolling event will not trigger a request for more gifs.

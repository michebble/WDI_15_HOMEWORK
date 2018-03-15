/*
Exercises: Objects
The Recipe Card

Never forget another recipe!

Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).

On separate lines (one console.log statement for each), log the recipe information so it looks like:

    Mole
    Serves: 2
    Ingredients:
    cinnamon
    cumin
    cocoa

*/

var recipe = {
  title: "spinach curry",
  servings: 4,
  ingredients: [
    "spinach",
    "water",
    "chickpeas",
    "onion",
    "garlic",
    "ginger",
    "salt",
    "curry powder",
    "tomato",
    "butter",
    "worcestershire sauce"]
}

console.log(recipe.title);
console.log('Serves: ' + recipe.servings);
console.log('Ingredients:')
for (var i = 0; i < recipe.ingredients.length; i++) {
  console.log(recipe.ingredients[i]);
}


/*

The Reading List

Keep track of which books you read and which books you want to read!

Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).

Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien". Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
The Movie Database

*/

var books =[
  { title: "Fear and Loathing in Las Vegas",
    author: "Hunter S. Thompson",
    alreadyRead: true
  },
  { title: "Rum Diary",
    author: "",
    alreadyRead: true
  },
  { title: "Tripwire",
    author: "Lee Child",
    alreadyRead: false
  },
  { title: "Clockwork Orange",
    author: "Anthony Burgess",
    alreadyRead: true
  },
  { title: "Ice Station",
    author: "Matthew Reilly",
    alreadyRead: true
  },
  { title: "Temple",
    author: "Matthew Reilly",
    alreadyRead: true
  },
  { title: "JavaScript & Jquery",
    author: "Jon Duckett",
    alreadyRead: false
  },
  { title: "Functional Light JS",
    author: "Kyle Simpson",
    alreadyRead: false
  },
  { title: "Learn to Program",
    author: "Chris Pine",
    alreadyRead: true
  },
]


for (i = 0; i < books.length; i++) {
  if (books[i].alreadyRead === true) {
    console.log("You have already read " + books[i].title + " by " + books[i].author);
  } else if (books[i].alreadyRead === false ) {
      console.log("You still need to read " + books[i].title + " by " + books[i].author)
  }
}

/*

It's like IMDB, but much much smaller!

Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).

Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
*/

var movie = { 
  title: "Dredd",
  duration: 95,
  released: 2012,
  stars: [
    "Karl Urban",
    "Olivia Thirlby",
    "Wood Harris",
    "Lena Headey"
  ]
}

function details(film) {
  console.log(`"${film.title}" was released in ${film.released} and runs for ${film.duration} minutes.\nStars: ${film.stars.join(', ')}.`);
}

details(movie);



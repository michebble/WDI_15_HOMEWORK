console.log('functions');
// 1. Build your own concatenation
// Write a function named combineWords that: 
// - return a new string that is the combination of the two parameters
// Example: combineWords('dog', 'house') => 'doghouse'
function combineWords(word1, word2) {
	return word1 + word2;
}
var result = combineWords('dog', 'house');
console.log(result);

// 2. Write a function named calculateAge that:
// - takes 2 arguments: birth year, current year.
// - calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either 100 or 101"
// - Call the function three times with different sets of values.

var birthYear = 1984;
var currentYear = 2018;

var calculateAge = function(birthYear, currentYear) {
  var age = currentYear - birthYear;
  var ageBeforeBirthday = age - 1;
  var answer = "You are either " + ageBeforeBirthday + " or " + age;
  return answer;
}

console.log(calculateAge(birthYear, currentYear));
console.log(calculateAge(1990, 2018));
console.log(calculateAge(1956, 2018));

//  3. Write a function `lengths` that accepts a single parameter as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.

var lengths = function(arrOfStrings) {
  var lengthOfStrings = [];
  for (var i = 0; i < arrOfStrings.length; i++) {
    lengthOfStrings.push(arrOfStrings[i].length) ;
  }
  return lengthOfStrings;
}

var phrase = ["how", "do", "you", "do", "?"];

console.log(lengths(phrase));

// 4. Write a Javascript function called `transmogrifier`
// This function should accept three arguments, which you can assume will be numbers.
// Your function should return the "transmogrified" result
//
// The transmogrified result of three numbers is the product of the first two numbers,
// raised to the power of the third number.

var transmogrifier = function(num1, num2, num3) {
  return Math.pow((num1 * num2), num3);
}

console.log(transmogrifier(2,2,3));

// 5. Write a function `wordReverse` that accepts a single argument, a string. The
// method should return a string with the order of the words reversed. Don't worry
// about punctuation.
// Example: wordReverse('we are good friends') => 'friends good are we'

var wordReverse = function(string) {
  var cutUp = string.split(" ");
  var reverse = cutUp.reverse();
  return reverse.join(" ");
}

console.log(wordReverse("A but tuba"));
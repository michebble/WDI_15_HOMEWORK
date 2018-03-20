typeof 15
// Prediction: number
// Actual: number

typeof 5.5
// Prediction: number
// Actual: number

typeof NaN
// Prediction: number
// Actual: number

typeof "hello"
// Prediction: string
// Actual: string

typeof true
// Prediction: boolean
// Actual: boolean

typeof 1 != 2
// Prediction: boolean
// Actual: true


"hamburger" + "s"
// Prediction: "hamburgers"
// Actual:

"hamburgers" - "s"
// Prediction: error
// Actual: NaN

"1" + "3"
// Prediction: "13"
// Actual: "13"

"1" - "3"
// Prediction: NaN
// Actual: -2

"johnny" + 5
// Prediction: johnny5
// Actual: johnny5

"johnny" - 5
// Prediction: NaN
// Actual: NaN

99 * "luftbaloons"
// Prediction: NaN
// Actual NaN

// Arrays

// Add an element to the back of an array.
// array.push()

// Remove an element from the back of an array.
// array.pop()

// Add an element to the front of an array.
// array.unshift()

// Remove an element from the front of an array.
// array.shift()

// Concatenates all the elements in an array into a string.
// array.join()

// Separates the characters of a string into an array. This one is a string method.
// string.split()

// What will the contents of the below arrays be after the code samples are executed? Come up with an answer yourself before testing it out in the console.

var numbers = [2, 4, 6, 8]
numbers.pop()
//expected: [2, 4, 6]
//actual: 8
numbers.push(10)
//expected: 5
//actual: 4
numbers.unshift(3)
//expected: 5
//actual: 5


//What is the return value of the below code sample? Come up with an answer yourself before testing it out in the console.

var morse = ["dot", "pause", "dot"]
var moreMorse = morse.join(" dash ")
moreMorse.split(" ")
//expected: ["dot", "dash", "pause", "dash", "dot",]
//actual: ["dot", "dash", "pause", "dash", "dot",]

//What will the contents of the below array be after the below code sample is executed? Come up with an answer yourself before testing it out in the console.

var bands = []
var beatles = ["Paul", "John", "George", "Pete"]
var stones = ["Brian", "Mick", "Keith", "Ronnie", "Charlie"]
bands.push(beatles)
bands.unshift(stones)
bands[bands.length - 1].pop()
bands[0].shift()
bands[1][3] = "Ringo"
// bands -> [["Paul", "John", "George", "Pete"]]
// bands -> [["Brian", "Mick", "Keith", "Ronnie", "Charlie"], ["Paul", "John", "George", "Pete"]]
//bands -> bands -> [["Brian", "Mick", "Keith", "Ronnie", "Charlie"], ["Paul", "John", "George"]]
//bands -> bands -> [["Mick", "Keith", "Ronnie", "Charlie"], ["Paul", "John", "George"]]
//bands -> bands -> [["Mick", "Keith", "Ronnie", "Charlie"], ["Paul", "John", "George", "Ringo"]]

// a | b | a AND b
// true  true  true
// true  false false
// false true  false
// false false false

// a | b | a OR b
// true  true  true
// true  false true
// false true  true
// false false false

// a | b | a != b
// 3 3 false
// 1 5 true
// 2 "2" true (actually false! Thanks JavaScript!)

// a | b | !a AND (a OR b)
// true  true  false
// true  false false
// false true  true
// false false false

// You're a bouncer at a bar. Given an age variable, create a conditional that satisfies the following requirements...

// If a patron is older than 21, print out "Come on in!".
// If a patron is between 18 and 21, print out "Come on in (but no drinking)!".
// If a patron is younger than 18, print out "You're too young to be in here!".
// If a patron is older than 75, print out "Are you sure you want to be here?".

var age = prompt("How old are you?")

if (age > 75) {
  console.log("Are you sure you want to be here?")
} else if (age < 18) {
  console.log("You're too young to be in here!")
} else if (age >= 18 && age < 21) {
  console.log("Come on in (but no drinking)!")
} else if (age >= 21 && age <= 75) {
  console.log("Come on in!")
} 

// Fizz-Buzz is a classic coding exercise that you can create using your knowledge of conditionals and loops. Implement code that does the following...

// Counts from 1 to 100 and prints out something for each number.
// If the number is divisible by 3, print "Fizz".
// If the number is divisible by 5, print "Buzz".
// If the number is divisible by both 3 and 5, print "FizzBuzz".
// If the number does not meet any of the above conditions, just print the number.
// Your output should look something like this...

// 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, Fizz Buzz, 31, 32, Fizz, 34, Buzz, Fizz, ...

for (i=0; i <= 100; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log("Fizz Buzz")
  } else if (i % 3 === 0) {
    console.log("Fizz") 
  } else if (i % 5 === 0) {
    console.log("Buzz") 
  } else {
    console.log(i)
  }
}

var fizzBuzz = function(num) {
  if (num % 5 === 0 && num % 3 === 0) {
    console.log("Fizz Buzz")
  } else if (num % 3 === 0) {
    console.log("Fizz") 
  } else if (num % 5 === 0) {
    console.log("Buzz") 
  } else {
    console.log(num)
  }
}


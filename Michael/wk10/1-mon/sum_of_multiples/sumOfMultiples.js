// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// for example:

// 1, 2, [3], 4, [5], [6], 7, 8, [9]

// 3 + 5 + 6 + 9 = 23
// Write a program that, given a number, can find the sum of all the multiples of 3 or 5 up to and including that number.

// Write the program in javascript with nodejs.

// $ node sumOfMultiples.js 9
// $ 23
// $ node sumOfMultiples.js 5
// $ 8
// var sum = 0;
// for (var i = 2; i < process.argv.length; i++) {
//   if (i % 3 === 0 || i % 5 === 0) {
//     sum = sum + Number(i);
//   } 
// }
// console.log(sum);



var sum = 0;
for (var i = 0; i <= process.argv[2]; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum = sum + Number(i);
  } 
}
debugger
console.log(sum);
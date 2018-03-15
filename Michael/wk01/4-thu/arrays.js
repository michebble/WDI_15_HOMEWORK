console.log("Arrays today");

/*
1. Create an array of the days of the week

    Create a variable named days_of_the_week as an array of the following:
        Monday
        Tuesday
        Wednesday
        Thursday
        Friday
        Saturday
        Sunday
*/
var days_of_the_week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];



/*
2. My calendar says the first day is Sunday...

    Remove Sunday from the last postion and move it to the first position. Use array methods.
*/

var newDay = days_of_the_week.pop();
days_of_the_week.unshift(newDay);
console.log(days_of_the_week);

/*
3. Create a new array of the days of the week:

    The first inner array should be the weekdays
    The second inner array should be the weekend days
*/

var newArray = [];
// newArray[0] = days_of_the_week.pop();
// newArray[1] = days_of_the_week.shift();

while (days_of_the_week.length > 5) {
  newArray.push(days_of_the_week.pop());
  days_of_the_week.reverse();
}

var newWeek = [days_of_the_week, newArray];


/*
4. Remove either the weekdays or the weekends

Your choice...

*/
newWeek.pop();
/*
5. Sort the remaining days alphabetically


*/

console.log(newWeek[0].sort());
// DATE: 9/21/17

// INSTRUCTIONS:
// For a Few Billion
// There is an old tale about a king who offered a servant $10,000
// as a reward. The servant instead asked that for 30 days he be
// given an amount that would double, starting with a penny.
// (1 penny for the first day, 2 for the second, 4 for the third,
// then 8, 16, 32 pennies, and so on).
// - How much was the reward after 30 days?
// - How many days would it take the servant to make $10,000?
// - How about 1 billion?
// - How many days until the servant has infinite money?

// MY SOLUTION:
// 'daily' is the growing amount the servant received per day.
// 'total' is the growing reward the servant had in total.
// Set both to 0.01 to account for the first day.
// Use a FOR loop that increments 'day' by 1 until it equals 30.
// After logging the first answer, reset 'daily' and 'total' and
// use a similar FOR loop that increments 'day' by 1 until 'total'
// reaches 10,000. Replace the number for the last questions.
// Careful: Running the last one will run an infinite loop!

var daily = 0.01;
var total = 0.01;

for (var day = 2; day <= 30; day++){
    daily = daily + daily;
    total = total + daily;
}

console.log("After 30 days, the servant had " + total + ".")

daily = 0.01;
total = 0.01;

for (day = 2; total <= 10000; day++){
    daily = daily + daily;
    total = total + daily;
}

console.log ("It would only take " + day + " days to make $10k.")

daily = 0.01;
total = 0.01;

for (day = 2; total <= 1000000000; day++){
    daily = daily + daily;
    total = total + daily;
}

console.log ("It would only take " + day + " days to be a billionaire.")

// daily = 0.01;
// total = 0.01;

// for (day = 2; total <= Infinity; day++){
//     daily = daily + daily;
//     total = total + daily;
// }

// console.log ("It would take " + day + " days to have infinite money.")
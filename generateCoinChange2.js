// INSTRUCTIONS:
// Generate Coin Change (only whole numbers!)
// Implement a function that accepts a parameter for
// a number of cents and computes how to represent
// that amount using the smallest number of coins.
// Hints: Use a while loop, start w/ biggest value.

// MY SOLUTION:
// Define variable 'quarters' by dividing given parameter by 25.
// Then define variable 'change' by calculating parameter MOD 25.
// Next, define variable 'dimes' by dividing 'change' by 10.
// Then update the value of 'change' by adding parameter MOD 10.
// Repeat the process for nickels, and 'change' will be pennies.
// Then use Math.floor to log the four variables (quarters, dimes
// nickels, change (pennies), as whole numbers.
// (NOTE: Any number of coin types can be defined and used.)

function genCoinChange(cents){
    var quarters = cents / 25;
    var change = cents % 25;
    var dimes = change / 10;
    change %= 10;
    var nickels = change / 5;
    change %= 5;
    console.log(
        Math.floor(quarters) + " quarters, " +
        Math.floor(dimes) + " dimes, " +
        Math.floor(nickels) + " nickels, " +
        change + " pennies."
    )
}

genCoinChange(2034)

// APPROACH BY DAN OOSTRA (CODING DOJO):
// 
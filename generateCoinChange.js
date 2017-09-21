// INSTRUCTIONS:
// Generate Coin Change
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
// Then log the four variables: quarters, dimes, nickels, change.
// (NOTE: In theory, this should work. But in JavaScript, it won't
// since plain division in JS will produce decimals. There must be
// some JS function to round decimals down to whole numbers.)

function genCoinChange(cents){
    var quarters = cents / 25;
    var change = cents % 25;
    var dimes = change / 10;
    change %= 10;
    var nickels = change / 5;
    change %= 5;
    console.log(
        quarters + " quarters, " +
        dimes + " dimes, " +
        nickels + " nickels, " +
        change + " pennies."
    )
}

genCoinChange(2001)

// APPROACH BY DAN OOSTRA (CODING DOJO):
// 
// NOTE: Study Dan's #2 solution

// DATE: 9/20/17

// INSTRUCTIONS:
// Generate Coin Change
// Implement a function that accepts a parameter for
// a number of cents and computes how to represent
// that amount using the smallest number of coins.
// Hints: Use a while loop, start w/ biggest value.

// MY SOLUTION (#1):
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

// MY SOLUTION (#2):
// Same as above, but use use Math.floor to log the variables
// (quarters, dimes nickels, change (pennies), as whole numbers.
// (NOTE: Any number of coin types can be defined and used.)

function genCoinChange(cents){
  var quarters = cents / 25;
  var change = cents % 25;
  var dimes = change / 10;
  change %= 10;
  var nickels = change / 5;
  change %= 5;
  console.log(
      Math.floor(quarters) + " quarter(s), " +
      Math.floor(dimes) + " dime(s), " +
      Math.floor(nickels) + " nickel(s), " +
      change + " pennies / penny."
  )
}

// APPROACH #1 BY DAN OOSTRA (CODING DOJO):

function generateCoinChange(amount){
    
  console.log("%d cents is:", amount);
  var numDollars = 0;
  var numQuarters = 0;
  var numDimes = 0;
  var numNickels = 0;
  var numPennies = 0;

  while (amount >= 100) {
    numDollars++;
    amount -= 100;
  }

  while (amount >= 25) {
    numQuarters++;
    amount -= 25;
  }

  while (amount >= 10) {
    numDimes++;
    amount -= 10;
  }

  while (amount >= 5) {
    numNickels++;
    amount -= 5;
  }

  while (amount >= 1) {
    numPennies++;
    amount -= 1;
  }

  console.log("%d dollars",  numDollars);
  console.log("%d quarters", numQuarters);
  console.log("%d dimes",    numDimes);
  console.log("%d nickels",  numNickels);
  console.log("%d pennies",  numPennies);

}


// APPROACH #2 BY DAN OOSTRA (CODING DOJO):

function genChange( cents ){
    var coin_name = ["Quarters: ","Dimes: ","Nickels: ","Pennies: "];
    var coin_vals = [25,10,5,1];
    for( var i=0; i<=coin_name.length-1; i++ ){
        console.log(coin_name[i] + Math.trunc(cents/coin_vals[i]));
        cents = cents % coin_vals[i];
    }
}
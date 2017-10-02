// WEEK 2 (09/25/17)

// Sigma
// Implement function sigma(num) that given a number, returns the sum of all positive integers up to number (inclusive). e.g. sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).

function sigma(num) {
    var sum = 0;
    while (num > 0) {
        sum+= num;
        num--;
    }
    return sum;
}


// Factorial
// Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to number (inclusive). For example, factorial(3) = 6 (1*2*3).

function factorial(num) {
    var product = 1;
    while (num > 0) {
        product*= num;
        num--;
    }
    return product;
}


// Star Art
// Assume a text field exactly 75 characters long. You want to fill it with a certain num of asterisks, depending on which function is called.
// drawLeftStars(num) that prints num of asterisks, left-justified in the field.
// drawRightStars(num) that prints num of asterisks, right-justified in the field (75 chars total).
// drawCenteredStars(num) that prints num of asterisks, centered in the 75 chars.

function drawLeftStars(num) {
    var stars = "";
    for (var star = 1; star <= num; star++) {
        stars += "*";
    }
    console.log(stars);
}

function drawRightStars(num) {
    var stars = "";
    for (var star = 1; star <= num; star++) {
        stars += "*";
    }
    var spaces = "";
    for (var space = 75 - (star-1); space > 0; space--) {
        spaces += " ";
    }
    console.log(spaces + stars);
}

function drawCenteredStars(num) {
    var stars = "";
    for (var star = 1; star <= num; star++) {
        stars += "*";
    }
    var left_spaces = "";
    var right_spaces = "";
    for (var space = 75 - (star-1); space > 0; space--) {
        if (space % 2 == 0) {
            left_spaces += " ";
        }
        else {
            right_spaces += " ";
        }
    }
    console.log(left_spaces + stars + right_spaces);
}


// Threes and Fives
// Add and log all the values from 100 and 4,000,000 (inclusive) that are evenly divided by 3 or 5, but not both.
// Next, create betterThreesFives(start,end) that allows an arbitrary range.

function threesFives() {
    var sum = 0;
    for (var i = 100; i <= 4000000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            if (i % 3 === 0 && i % 5 === 0) {
                continue;
            }
            sum += i;
        }
    }
    console.log(sum);
}

function betterThreesFives(start,end) {
    for (var sum = 0; start <= end; start++) {
        if (start % 3 === 0 || start % 5 === 0) {
            if (start % 3 === 0 && start % 5 === 0) {
                continue;
            }
            sum += start;
        }
    }
    console.log(sum);
}


// Generate Coin Change
// Implement a function that accepts a parameter for a number of cents and computes how to represent that amount using the smallest number of coins.

function genCoinChange(cents){
    var quarters = cents / 25;
    var change = cents % 25;
    var dimes = change / 10;
    change %= 10;
    var nickels = change / 5;
    change %= 5;
    console.log(
        Math.trunc(quarters) + " quarter(s), " +
        Math.trunc(dimes) + " dime(s), " +
        Math.trunc(nickels) + " nickel(s), " +
        change + " pennies / penny."
    );
}

// Dan Oostra's Approach
// My comments: Iterating an array the length = amt of coin types, divide cents from largest coin type to smallest, updating cents amt to remaining change with each iteration. Arrays are powerful.
function genCoinChange(cents) {
    var coin_name = ["Quarters: ", "Dimes: ", "Nickels: ", "Pennies: "];
    var coin_vals = [25, 10, 5, 1];
    for (var i = 0; i <= coin_name.length - 1; i++) {
        console.log( coin_name[i] + Math.trunc(cents / coin_vals[i]) );
        cents = cents % coin_vals[i];
    }
}


// WEEK 3 (10/02/17)

//// Messy Math Mashup (p. 29)
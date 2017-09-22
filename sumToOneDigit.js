// DATE: 9/21/17

// INSTRUCTIONS:
// Sum to One Digit
// Given a number, sum that number's digits
// repeatedly until the sum is only one digit.
// Return that one-digit result. For example:
// 928 -> 9+2+8 = 19; 1+9 = 10; 1+0 = 1.

function sumToOneDigit(num){
    var arr = []                        // Create array to contain digits
    while (num > 9){                    // Loop function until single digit
        while (num > 0){                // Loop until decimal point reaches .0
            arr.push(num % 10);         // num % 10 to push digit in last pos of num to array
            num = num / 10;             // Move decimal point to next to last pos of num
            num = Math.floor(num);      // Cut off decimal of num (eventually decimal will reach .0)
        }
        while (arr.length > 0){         // Loop until array is empty
            num = num + arr[0];         // Add array values to num, starting from arr[0]
            arr.pop();                  // Cut off last value in array (eventually array will empty)
        }
    }
    console.log(num);
}
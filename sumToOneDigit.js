// DATE: 9/21/17

// INSTRUCTIONS:
// Sum to One Digit: 
// Given a number, sum that number's digits
// repeatedly until the sum is only one digit.
// Return that one-digit result. For example:
// 928 -> 9+2+8 = 19; 1+9 = 10; 1+0 = 1.

// MY SOLUTION:
// Create an array to push each digit to one-by-one.
// Use a WHILE loop that runs while given 'num' > 0.
// Push the value of num MOD 10, digit in num's 1s place.
// Divide num by 10 to move decimal point up one position.
// Use Math.floor(num) to cut off the decimal of num.
// Loop will continue until num = 0.
// Use another WHILE loop that runs while arr.length > 0.
// Add arr[arr.length-1] the last value of the array to num.
// Pop to remove the last value. Loop will repeat until array = [].
// Use an IF-ELSE statement:
// 1) If num > 9 (not yet a single digit), run function again with new num.
// 2) Else (num has reached single digit), print num to console.
// The function will run repeatedly until the single digit is returned.

function sumToOne(num){
    var arr = []
    while (num > 0){
        arr.push(num % 10);
        num = num / 10;
        num = Math.floor(num);
    }
    while (arr.length > 0){
        num = num + arr[arr.length-1];
        arr.pop();
    }
    if (num > 9){
        sumToOne(num);
    }
    else{
        console.log(num)
    }
}

// APPROACH BY DAN OOSTRA (CODING DOJO):
// Uhh... how did he do this?

function sumToOne(num){
    console.log( (num-1) % 9) + 1;
}


// OTHER APPROACH BY DAN

function sumToOneDigit(num){
  if (num < 1)    {   return 0;   }
  num = Math.floor(num);
  while (num >= 10)
  {
    while (num)
    {
      var digitSum;
      var onesDigit = num % 10;
      num -= onesDigit;
      num /= 10;
      digitSum += onesDigit;
    }
    num = digitSum;
  }
  console.log(num)
}
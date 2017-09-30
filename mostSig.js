// Most Significant Digit
// Given number of any size, return the most significant digit.
// The most significant digit is the leftmost non-zero digit of a number.
// Given 12345, return 1. Given 67.89, return 6. Given 0.00987, return 9.
// Don't use strings. Use WHILE to bring the most significant digit into range
// where you can use the friendly modulus operator (%).
// Second: handle negative num values as well, doing what you think is appropriate.

function mostSig(num){
    if (num < 1){
        num = num * -1;
    }
    while (num < 1){
        num = num * 10;
    }
    var i = 1;
    while (num > Math.pow(10, i)){
        i++;
    }
    num = num / Math.pow(10, i-1);
    console.log(Math.floor(num));
}
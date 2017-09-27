// Fibonacci
// Create a function to generate Fibonacci numbers.
// Each number is the sum of the previous two, starting with values 0 and 1.
// Your function should accept one argument, an index into the sequence
// (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).
// Examples:
// fibonacci(0) = 0 (given),
// fibonacci(1) = 1 (given),
// fibonacci(2) = 1 (fib(0)+fib(1), or 0+1),
// fibonacci(3) = 2 (fib(1)+fib(2),or 1+1),
// fibonacci(4) = 3 (1+2),
// fibonacci(5) = 5 (2+3),
// fibonacci(6) = 8 (3+5),
// fibonacci(7) = 13 (5+8), etc. 

function fibonacci(num){
    var arr = [0,1]
    for (var idx = 2; num >= idx; idx++){
        var fib = arr[idx-1] + arr[idx-2];
        arr.push(fib);
    }
    console.log(arr[num])
}
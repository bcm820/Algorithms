/*
 * iFactorial
 * Write a function called iFactorial which behaves like the following:
    iFactorial(1) = 1                  => 1
    iFactorial(2) = 2 * 1              => 2
    iFactorial(3) = 3 * 2 * 1          => 6
    iFactorial(4) = 4 * 3 * 2 * 1      => 24
    iFactorial(5) = 5 * 4 * 3 * 2 * 1  => 120
 */

function iFactorial(n) {
    let prod = 1;
    for (let i = 1; i <= n; i++) {
        prod *= i
    }
    return prod
}

/*
 * rFactorial
 * Now solve it recursively.
 */

function rFactorial(n) {
    if (n === 1) return 1;
    return rFactorial(n-1) * n;
}
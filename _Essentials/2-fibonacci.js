/*
 * iFibonacci
 * Write a function called iFibonacci which behaves like the following:
    iFibonacci(0) = 0           => 0
    iFibonacci(1) = 1           => 1
    iFibonacci(2) = 1           => 1
    iFibonacci(3) = 1 + 1       => 2
    iFibonacci(4) = 1 + 2       => 3
    iFibonacci(5) = 2 + 3       => 5
    iFibonacci(6) = 3 + 5       => 8
 */

function iFibonacci(n) {
    if (n === 0) return 0
    if (n === 1 || 2) return 1
    let pre = 1, cur = 1
    for (let i = 3; i <= n; i++) {
        [pre, cur] = [cur, pre + cur]
    }
    return cur
}

/*
 * rFibonacci
 * Now solve it recursively.
 */

function rFibonacci(n) {
    if (n === 0) return 0
    else if (n < 2) return 1
    return rFibonacci(n - 2) + rFibonacci(n - 1)
}
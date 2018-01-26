/*
 * iSum
 * Write a function called iSum which behaves like the following:
    rSum(1) = 1                  => 1
    rSum(2) = 1 + 2              => 3
    rSum(3) = 1 + 2 + 3          => 6
    rSum(4) = 1 + 2 + 3 + 4      => 10
    rSum(5) = 1 + 2 + 3 + 4 + 5  => 15
 */

function iSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i
    }
    return sum
}

function gSum(n) {
    function* add(n) {
        while (n > 0) {
            yield n
            n--
        }
    }
    return [...add(n)].reduce((pre, cur) => {
        return pre + cur
    })
}

/*
 * rSum
 * Now solve it recursively.
 */

function rSum(n) {
  if (n === 1) {
    return 1;
  } else {
    return rSum(n-1) + n;
  }
}

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
  if (n === 1) {
    return 1;
  } else {
    return rFactorial(n-1) * n;
  }
}

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
    if(n === 0) return 0
    if(n === 1 || 2) return 1
    let pre = 1, cur = 1
    for (let i = 3; i <= n; i++) {
        [pre, cur] = [cur, pre + cur]
    }
    return cur
}


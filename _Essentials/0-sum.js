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
  if (n === 1) return 1;
  return rSum(n-1) + n;
}
/*
 * iBS
 * Write a function called iBS which behaves like the following:
    var arr = [-90,-19,0,2,12,29,33,190,320];
    iBS(arr, 5)   => -1 (not in array)
    iBS(arr, 12)  => 4
    iBS(arr, 0)   => 2
    iBS(arr, 190) => 7
 */

function iBS(arr, n) {
    let start = 0
    let end = arr.length-1
    while (start <= end) {
        let mid = Math.floor((end + start) / 2)
        switch (true) {
            case arr[mid] < n: start = mid + 1
            case arr[mid] > n: end = mid - 1
            default: return mid
        }
    }
}

/*
 * rBS
 * Now solve it recursively.
 */

function rBS(arr, n, start = 0, end = arr.length - 1) {
    let mid = Math.floor(((end-start) / 2) + start)
    switch (true) {
        case end === start: return -1
        case arr[mid] > n: return rBS(arr, n, start, mid - 1)
        case arr[mid] < n: return rBS(arr, n, mid + 1, end)
        default: return mid
    }
}
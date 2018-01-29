
/**
 * Reverse String
*/

function reverseString(str) {
    return [...str].reverse().join("")
}

/**
 * Factorialize a Number
 */

function factorialize(num) {
    if (num === 0) return 0
    let prod = 1
    for (let i = 1; i <= num; i++) {
        prod *= i
    }
    return prod
}

/**
 * Check for Palindromes
 */

function palindrome(str) {
    str = str
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g, "")
        .toLowerCase()
    for (let i = 0, j = str.length-1; i !== j; i++, j--) {
        if (str[i] !== str[j]) return false
    }
    return true
}

/**
 * Find Longest Word in a String
 */

function findLongestWord(str) {
    str = str.split(" ")
    let max = 0
    str.forEach(word => {
        if (word.length > max) max = word.length
    })
    return max
}

/**
 * Title Case a Sentence
 */

function titleCase(str) {
    str = str.split(" ")
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(" ")
}

/**
 * Return Largest Numbers in Arrays
 */

function largestOfFour(arr) {
    let largest = []
    arr.forEach(el => {
        let max = 0
        el.forEach(n => {
            if (n > max) max = n
        })
        largest = [...largest, max]
    })
    return largest
}

/**
 * Seek and Destroy
 */

function destroyer(arr, ...items) {
    items.forEach(item => 
        arr = arr.filter(el => {
            return el !== item
        })
    )
    return arr
}

/**
 * Where I Belong
 */

function getIndexToIns(arr, val) {
    arr.sort((a, b) => {return a-b})
    let i = 0
    while (arr[i] < val) i++
    return i
}

/**
 * Caesar's Cipher
 */

function rot13(str) {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let map = new Map()
    for (let i = 0; i < alphabet.length; i++) {
        if (i < 13) map.set(alphabet[i], i + 13)
        else map.set(alphabet[i], i - 13)
    }
    decoded = ""
    let punc = /[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g
    for (let char of str) {
        if (!char.match(punc))
            char = alphabet[map.get(char)]
        decoded += char
    }
    return decoded
}

/**
 * Chunk Array
 */

function chunkArray(arr, size) {
    let matrix = []
    let len = Math.ceil(arr.length / size)
    while (len > 0) {
        matrix.push(arr.splice(0, size))
        len--
    }
    return matrix
}

/**
 * Sum All
 */

function sumAll(arr) {
    let range = function* (start, end) {
        while (start <= end) {
            yield start
            start++
        }
    }
    return [...range(Math.min(...arr), Math.max(...arr))].reduce((p, c) => {
        return p + c
    })
}

/**
 * Diff Two Arrays
 */

function diffArray(arr1, arr2) {
    const arr3 = []
    let len
    if (arr1.length > arr2.length) len = arr1.length
    else len = arr2.length
    for (let i = 0; i < len; i++) {
        if(arr2.find(x => x === arr1[i]) === undefined)
            if (arr1[i]) arr3.push(arr1[i])
        if(arr1.find(x => x === arr2[i]) === undefined)
            if (arr2[i]) arr3.push(arr2[i])
    }
    return arr3
}

/**
 * Roman Numeral Converter
 */

function numToRom(n) {
    const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const roms = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let str = ""
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] <= n) {
            str += roms[i]
            n -= nums[i]
        }
    }
    return str
}
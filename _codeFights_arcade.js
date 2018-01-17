function centuryFromYear(year) {
    const yr = year.toString();
    let last;
    if (yr.endsWith('0')) last = 0;
    else last = 1;
    switch (yr.length) {
        case 4: return parseInt(yr.substring(0, 2)) + last;
        case 3: return parseInt(yr.substring(0, 1)) + last;
        case 2: return 1;
        case 1: return 1;
    }
}

function checkPalindrome(inputString) {
    let isPal = true;
    for (let a = 0, b = inputString.length-1;
         a < inputString.length / 2;
         a++, b--) {
        if (inputString[a] !== inputString[b]) isPal = false;
    }
    return isPal;
}

function adjacentElementsProduct(inputArray) {
    let prod = inputArray[0] * inputArray[1];
    for (let i = 1; i < inputArray.length; i++) {
        if (prod < (inputArray[i] * inputArray[i+1])) {
            prod = inputArray[i] * inputArray[i+1];
        }
    }
    return prod;
}

function shapeArea(n) {
    return Math.pow(n, 2) + Math.pow(n-1, 2)
}

function makeArrayConsecutive2(statues) {
    let max = Math.max(...statues);
    let min = Math.min(...statues);
    return max - (min + statues.length-1);
}


// Extract-o-Matic
// Create a extractDigit(num, digitNum) function that,
// a given number and a digit number, returns the numeral value of that digit.
// e.g. 0 represents the ones digit. 1 represents the tens digit.
//      Given (1824,2), return 8. Given (1824,0), return 4.
// Next, handle negative digitSum values, where -1 represents tenths digit (0.x).
// Finally, handle negative num values as well, doing what you think is appropriate.

function extractDigit(Num, digitNum){
    if (Num < 0){
        Num = Math.abs(Num);    // If Num is neg, turn to pos
    }
    if (digitNum === 0){
        var x = Num % 10;
        console.log(Math.floor(x));
    }
    else{
        for (var i = 1; i > 0; i++){        // Create FOR to run depending on digitNum
            if (digitNum === i){            // will run when i reaches digitNum
                var x = Math.pow(10, i);
                var y = Math.floor(Num / x);
                console.log(y % 10)
                break;
            }
            if (digitNum + i === 0){        // will run when i negates -digitNum
                var x = Math.pow(10, i);
                var y = Math.floor(Num * x)
                console.log(y % 10);
                break;
            }
        }
    }
}

// APPROACH BY DAN OOSTRA (CODING DOJO):

function exOmat(num, dig) {
    var multiplier = 0;
    if(dig == 0) {
        multiplier = 1;
    }
    else {
        multiplier = Math.pow(10, dig);
    }
    console.log(Math.floor(num / multiplier) % 10);
}

// APPROACH BY MOTUMA AYANA

function extractD(num, digitNum) {
    var digit =0;
    var decimalPlace;
    if(digitNum >=0 ){
        for(i=0; i<=digitNum; i++){
        digit= num % 10;
        num = Math.floor(num/10);
    }
    return digit;
    }
    else {
        decimalPlace = Math.pow(10, Math.abs(digitNum));
        console.log("decimalPlace " + decimalPlace)
        num = Math.floor(num * decimalPlace);
        console.log(num)
        num = num % 10;
    }
    console.log(num)
}
// WEEK 1 (09/18/17)

// Setting and Swapping
// Set 'myNumber' to 42. Set myName to your name. Swap myNumber into myName & vice versa.

var myNumber = 42;
var myName = "Brian";
var temp = myNumber;
myNumber = myName;
myName = temp;


// Print -52 to 1066
// Print integers from -52 to 1066 using a FOR loop.

for (var i = -52; i <= 1066; i++) {
    console.log(i);
}


// Don't Worry, Be Happy
// Create beCheerful(). Within it, console.log string "good morning!". Call it 98 times.

function beCheerful() {
    for (var i = 1; i <= 98; i++) {
        console.log("good morning!");
    }
}


// Multiples of Three -- but Not All
// Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.

function multiplesOfThree() {
    for (i = -300; i <= 0; i++) {
        if (i % 3 == 0 && i !== -6 && i !== -3) {
            console.log(i);
        }
    }
}

function multiplesOfThree() {
    for (i = -300; i <= 0; i++) {
        if (i == -6 || i == -3) {
            continue;
        }
        else if (i % 3 == 0) {
            console.log(i);
        }
    }
}


// Printing Integers with While
// Print integers from 2000 to 5280, using a WHILE.

var i = 2000;
while (i <= 5280) {
    console.log(i);
    i++;
}


// You Say It's Your Birthday
// If 2 given numbers represent your birth month and day in either order, log "How did you know?" Else log "Just another day...."

function sayIfBday(month,day) {
    if (month == 8 && day == 20 || month == 20 && day == 8) {
        console.log("How did you know?");
    }
    else{
        console.log("Just another day....");
    }
}


// Leap Year
// Write a function that determines whether a given year is a leap year. If a year is divisible by four, it is a leap year, unless divisible by 100. However, if it is divisible by 400, then it is.

function leapYear(year) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                console.log("It's a leap year");
            }
            else{
                console.log("Not a leap year");
            }
        }
        else{
            console.log("It's a leap year");
        }
    }
}


// Print and Count
// Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.

var count = 0;
for (var i = 512; i <= 4096; i++) {
    if (i % 5 == 0) {
        console.log(i);
        count = count + 1;
    }
}
console.log("Multiples of 5:", count);


// Multiples of Six
// Print multiples of 6 up to 60,000 using a WHILE.

var i = 1;
while (i <= 60000) {
    if (i % 6 == 0) {
        console.log(i);
    }
    i++;
}


// Counting, the Dojo Way
// Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".

for (var i = 1; i <= 100; i++) {
    if (i % 5 == 0) {
        console.log("Coding");
        if (i % 10 == 0) {
            console.log("Dojo");
        }
    }
    else{
        console.log(i);
    }    
}


// What Do You Know?
// Your function will be given an input parameter 'incoming'. Please console.log this value.

function incLog(incoming) {
    console.log(incoming);
}


// Whoa, That Sucker's Huge
// Add odd integers from -300,000 to 300,000. Console.log the final sum. Is there a shortcut?

var sum = 0;
for (var i = -300000; i <= 300000; i++) {
    if (i % 2 == 1) {
        sum += i;
    }
}
console.log(sum);


// Countdown by Fours
// Log positive numbers starting at 2016, counting down by fours. Exclude 0. Don't use a FOR loop.

var i = 2016;
while (i > 1) {
    if (i % 4 == 0) {
        console.log(i);
    }
    i--;
}


// Flexible Countdown
// Given 'lowNum', 'highNum', 'mult', print multiples of mult from highNum down to lowNum, using a FOR. e.g. For (2, 9, 3), print 9 6 3 on consecutive lines.

function flexCountdown(lowNum, highNum, mult) {
    for (; highNum >= lowNum; highNum--) {
        if (highNum % mult == 0) {
            console.log(highNum);
        }
    }
}


// The Final Countdown
// Given 4 parameters (param1, param2, param3, param4), print the multiples of param1, starting at param2 and extending to param3. Use a WHILE. One exception: if a multiple is equal to param4, then skip (don't print). e.g. (3,5,17,9) prints 6,12,15 (multiples of 3 between 5 and 17, excluding 9).

function finalCountdown(param1, param2, param3, param4) {
    while (param2 <= param3) {
        if (param2 % param1 == 0 && param2 !== param4) {
            console.log(param2);
        }
        param2 = param2 + 1;
    }
}


// Countdown
// Create a function that accepts a number input. Return a new array that counts down by one from the number. How long is this array?

function countDown(num) {
    for (var arr = []; num >= 0; num--) {
        arr.push(num);
    }
    console.log("Array Length:", arr.length);
    return arr;
}


// Print and Return
// Your function will receive an array with two numbers. Print the first value and return the second.

function printReturn(arr) {
    console.log(arr[0]);
    return arr[1];
}



// WEEK 2 (09/25/17)

// First Plus Length
// Given an array, return the sum of the first value in the array and its length. What happens if the array's first value is not a number (e.g. string, boolean)?

function firstPlusLength(arr) {          // If string, prints 'string#'
    var sum = arr[0] + arr.length;
    return sum;
}


// Values Greater Than Second
// Given an array, return a new array with values greater than its 2nd value. Print how many values this is. What if the array is only one element long?

function valuesGreaterThanSecond(arr) {
    var count = 0;
    var newarr = [];
    for (var i = 0; i <= arr.length; i++) {     // If arr.length = 1, nothing will push; arr[2] is undefined
        if (arr[i] > arr[2]) {
            newarr.push(arr[i]);
            count++;
        }
    }
    console.log(count);
    return newarr;
}


// This Length, That Value
// Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are the same.

function lengthValue(num1, num2) {
    if (num1 === num2) {
        console.log('Jinx!');
        return;
    }
    var arr = [];
    for (var i = 1; i <= num1; i++) {
        arr.push(num2); 
    }
    return arr;
}
lengthValue(5, 3)


// Fit the First Value
// Your function should accept an array. If value at [0] is greater than array's length, print "Too Big!"; if value at [0] is less than array's length, print "Too small!"; otherwise print "Just right!".

function fitFirstVal(arr) {
    if (arr[0] < arr.length) {
        console.log('Too Big!');
    }
    else if (arr[0] > arr.length) {
        console.log('Too Small!');
    }
    else {
        console.log('Just right!');
    }
}


// Fahrenheit to Celsius & Reverse
// Kelvin wants to convert between temperature scales. Create fahrenheitToCelsius(fDegrees) that accepts a number of degrees in Fahrenheit, and returns the equivalent temperature as expressed in Celsius degrees. For review, Fahrenheit = (9/5 * Celsius) + 32. Next, do it in reverse.
// Lastly, do the values equate at a certain number? Try a series of Celsius integer values starting at 200, descending, checking whether it is equal to the corresponding Fahrenheit value.

function fahrenheitToCelsius(fDegrees) {
    console.log(`${(fDegrees - 32) * 5/9}°C`);
}

function celsiusToFahrenheit(cDegrees) {
    console.log(`${(cDegrees * 9/5) + 32}°F`);
}

function tempsEquate() {
    for (var cDegrees = 200; cDegrees >= 0; cDegrees--) {
        if (cDegrees === (cDegrees * 9/5) + 32) {
            console.log(cDegrees);
        }
    }
}



// WEEK ???

// Biggie Size (p.22)
// Given an array, write a function taht changes all positive numbers in the array to "big." Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1,"big","big",-5].


// DATE: 9/21/17

// INSTRUCTIONS:
// Reverse Array
// Write a function to reverse the values
// of a given array in-place. Log to console.

// MY SOLUTION (#1):
// Set variable 'start' to 0 to represent 1st array position.
// Set variable 'end' to arr.length-1 for last array position.
// Set 'temp' variable to hold integer from 1st position.
// Create a FOR loop set to run 1/2x the length of the array.
// 1) Replace arr['start'] with value in arr['end'].
// 2) Replace arr['end'] with value in 'temp' (from 1st).
// 3) Increment 'start' and decrement 'end' so the start and
//    end positions move inside of the array.
// 4) Set 'temp' to arr['start'] to hold next 'start' position.
// Loop will reset and run until the middle position is reached.

var arr = [1,2,3,4,5,6]

function reverseArray(arr){
    var start = 0;
    var end = arr.length-1;
    var temp = arr[0];
    for (var i = arr.length / 2; i > 0; i--){
        arr[start] = arr[end];
        arr[end] = temp;
        temp = arr[start];
        start++;
        end--;
    }
    console.log(arr);
}

// APPROACH #1 BY DAN OOSTRA (CODING DOJO):

function reverseArray(arr){
    var mid = (arr.length - 1) / 2;
    var end = arr.length - 1;
    var temp = 0;
    for (var i = 0; i < mid; i++){
        temp = arr[i];
        arr[i] = arr[end-i];
        arr[end-i] = temp;
    }
    console.log(arr);
}
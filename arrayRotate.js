
// Array: Rotate
// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values to the right by that amount. 'Wrap-around' any values that shift off array's end to the other side, so that no data is lost. Operate in-place: given ([1,2,3], 1), change array to [3,1,2]. Don't use any built-in functions.
// Second: Allow negative shfitBy (shift to left, not right).
// Third: Minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
// Fourth: minimize the touches of each element.

// 10/5: No temp array, only 2 loops
function rotateArr(arr, off){
    for (var i = arr.length - 1; i >= 0; i--){ // start @ end, FOR to shift R
        arr[i + off] = arr[i];
    }
    for (var x = off - 1; x >= 0; x--){ // start at offset-1, overwrite to L and pop
        arr[x] = arr[arr.length-1];
        arr.pop();
    }
}

// 10/5: Used temp array and 3 loops
function rotateArr(arr, off){
    var temp = [];
    for (var nums = 1; nums <= off; nums++){        // push nums @ end to temp
        temp.push(arr[arr.length-off]);
    }
    for (var idx = arr.length-1; idx >= off; idx--){    // shift remaining nums in arr
        arr[idx] = arr[idx-off];
    }
    for (nums = 0; nums < off; nums++){             // from arr[0], write in nums
        arr[nums] = temp[nums];
    }
}
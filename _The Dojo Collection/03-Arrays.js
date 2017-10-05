// WEEK 3 (10/02/17)


// Push Front
// Given array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.

function pushFront(arr, val){
    for (var i = arr.length-1; i >= 0; i--){
        arr[i+1] = arr[i];
    }
    arr[0] = val;
}


// Pop Front
// Given array, remove and return the value at the beginning. Do this without using any built-in array methods except pop().

function popFront(arr){
    var val = arr[0];
    for (var i = 0; i <= arr.length-1; i++){
        arr[i] = arr[i+1];
    }
    arr.pop();
}


// Insert At
// Given array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods.

function insertAt(arr, idx, val){
    for (var i = arr.length-1; i >= idx; i--){
        arr[i+1] = arr[i];
    }
    arr[idx] = val;
}


// Remove At
// Given array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop().

function removeAt(arr,idx){
    var val = arr[idx];
    for (var i = idx+1; i <= arr.length-1; i++){
        arr[i-1] = arr[i];
    }
    arr.pop();
    console.log(arr,val);
}


// Swap Pairs
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. e.g. For [1,2,3,4], return [2,1,4,3].

function swapPairs(arr){
    var temp = 0;
    for (var i = 0; i <= arr.length-2; i+=2){
        temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }
    console.log(arr)
}



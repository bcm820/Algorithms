
// Array: Skyline
// Description

function skyline(){
    var max = 0;
    var newarr = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > 0 && arr[i] > max){
            newarr.push(arr[i]);
            max = arr[i];
        }
    }
    console.log(newarr)
}
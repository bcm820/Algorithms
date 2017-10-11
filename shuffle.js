
// Array: Shuffle
// Description

function shuffle(arr){
    var newarr = [];
    var random = 0;
    for (var i = 0; i <= arr.length - 1; i++){
        random = Math.floor(Math.random() * arr.length-1);
            while (arr[random] == null){
                random = Math.floor(Math.random() * arr.length-1);
            }
        newarr.push(arr[random]);
        arr[random] = null;
    }
    console.log(newarr)
}

shuffle([1,2,3,4,5,6])
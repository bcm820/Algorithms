
function getlength(number) {
    return number.toString().length;
}

function exOmat(num, dig) {
    var multiplier = 0;
    if(dig==0) {
        multiplier = 1;
    }
    else {
        multiplier = Math.pow(10, dig);
    }
     return Math.floor(num / multiplier) % 10;
}

function addItLow(arr){
    total = 0;
    for(var i=0; i < arr.length; i++){
        total = total + arr[i];
    }
    if(total > 9){
        sumToOne(total);
    }
    else console.log("TOTAL",total);
}

function sumToOne(num){
    var num_digits = getlength(num)-1;
    var counter = 0;
    var storage_array = [];
    while (counter <= num_digits){
        storage_array[counter] = exOmat(num, counter);
        console.log(counter, " place:", storage_array[counter]);
        counter++;
    }
    console.log(storage_array);
    addItLow(storage_array);
}

sumToOne(1234);
sumToOne(12345);

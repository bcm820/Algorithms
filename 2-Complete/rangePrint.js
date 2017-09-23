// DATE: 9/21/17

// INSTRUCTIONS:
// Range Print
// Create a function that can take a start point, end point, skip amount,
// to print all numbers in the range. For example, printRange(2, 10, 2);
// would print 2, 4, 6, 8 to the console.
// - How could you make it work for negative numbers?
// - If the user doesn't pass a skip amount, make it default to 1.
// - If no given end point, make it start at 0 and end at the first.
// - Find other ways to customize this.


function rangePrint(start, end, skip){
    if (skip == undefined){
        skip = 1;
    }
    if (skip == 0){
        skip = 1;
    }
    if (end == undefined){
        end = start;
        start = 0;
        skip = 1;
    }
    if ((end => 0) && (start => 0) && (start > end)){
        var temp = start;
        start = end;
        end = temp;
    }
    if (start == end){
        end = end + 4;
    }
    if (start <= 0 && end <= 0 && start > end){
        while (start > end){
            console.log(start);
            start = start - skip;
        }
    }
    else if (start <= 0 && end <= 0 && start < end){
        var temp = start;
        start = end;
        end = temp;
        while (start > end){
            console.log(start);
            start = start - skip;
        }
    }
    else if (start => 0) {
        while (start < end){
            console.log(start);
            start = start + skip;
        }
    }
}

console.log("Print range:")
rangePrint(2, 10, 2);

console.log("Decrement negative range")
rangePrint(-2, -10, 2);

console.log("Defaulting undefined skip amt to 1:")
rangePrint(4, 8);

console.log("Defaulting start to end of range:")
rangePrint(4);

console.log("Defaulting 0 skip amt to 1:")
rangePrint(4, 8, 0);

console.log("Start > End... switching order:")
rangePrint(10, 2, 2)

console.log("Start == End... counting upwards:")
rangePrint(8, 8, 1);

console.log("Negative Start < End... switching order:")
rangePrint(-2, -10, 2);
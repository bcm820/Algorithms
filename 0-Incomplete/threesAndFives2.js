// DATE: 9/20/17

// INSTRUCTIONS:
// Threes and Fives (2nd Challenge)
// Add and log all the values with a custom range of numbers
// that are evenly divided by 3 or 5, but not both.

// MY SOLUTION:
// (NOTE: First I forgot the "add" part of instructions!)
// I assigned 'sum' with an initial value of 0.
// In a FOR loop, I assigned 'i' with a value of 100.
// i must be less or equal to 4 million to loop and increment 1.
// With each loop, i must pass an IF ELSE-IF statement:
// 1) If BOTH i MOD 3 and i MOD 5 are equal to 0, do nothing.
// 2) If BOTH aren't true, but at least one is...
// Then add i to sum. After the loop ends, log sum to console.

function threesAndFives(x,y){
    var sum = 0;
    while (x <= y){
        if (x % 3 === 0 && x % 5 === 0){
            continue;
        }
        else if (x % 3 === 0 || x % 5 === 0){
            sum += x;
        }
        x += 1;
    }
    console.log(sum);
}

threesAndFives(100, 4000)


// APPROACH BY DAN OOSTRA (CODING DOJO):
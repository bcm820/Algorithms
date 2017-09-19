// INSTRUCTIONS:
// Multiples of Three - but Not All
// 1. Using FOR, print multiples of 3 from -300 to 0.
// 2. Skip -3 and skip -6.

function multiplesOfThree(){
    for (i = -300; i <= 0; i++){
        if (i == -6 || i == -3){
            console.log(null);
        }
        if (i % 3 == 0){
            console.log(i);
        }
    }
}

// RESULT: SUCCESS

// WHY:
// i starts at -300 and increments until 0.
// If i is -6 or -3, nothing will happen.
// If the remainder of i % 3 is 0, console will log i.
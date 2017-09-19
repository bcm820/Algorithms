// INSTRUCTIONS:
// Multiples of Three - but Not All
// 1. Using FOR, print multiples of 3 from -300 to 0.
// 2. Skip -3 and skip -6.

function multiplesOfThree(){
    for (i = -300; i <= 0; i++){
        if (i == -3 || i == -6){
        }
        else (i % 3 == 0){
            console.log(i);
        }
    }
}

// RESULT: FAIL

// WHY:
// Unexpected { on line 10.
// Not sure how to format brackets with if-else.
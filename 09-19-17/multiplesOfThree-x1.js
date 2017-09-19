// INSTRUCTIONS:
// Multiples of Three - but Not All
// 1. Using FOR, print multiples of 3 from -300 to 0.
// 2. Skip -3 and skip -6.

function multiplesOfThree(){
    for (i = -300; i <= 0, i != -6, i != -3; i++){
        if (i % 3 == 0){
            console.log(i);
        }
    }
}

// RESULT: FAIL
// WHY: Loop will stop once i = -6.
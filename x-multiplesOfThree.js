// DATE: 9/19/17

// INSTRUCTIONS:
// Multiples of Three - but Not All
// Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.

// RESULT: Fail.

// ATTEMPT #1:
// Initiated conditions re: -6 and -3 at the start of the FOR loop.
// Conditions at the start of FOR loops must always be true.
// Otherwise, the loop will stop (as it did when i == -6).

function multiplesOfThree(){
    for (i = -300; i <= 0, i != -6, i != -3; i++){
        if (i % 3 == 0){
            console.log(i);
        }
    }
}

// ATTEMPT #2:
// Tried to put all conditions into one IF statement.
// "If i % 3 is 0 OR i is not -6 OR -3, then log i."
// If i meets ANY one of these conditions, console logs i.
// Thus console logged i EVERY time! Misuse of OR.

function multiplesOfThree(){
    for (i = -300; i <= 0; i++){
        if (i % 3 == 0 || i !== -6 || i !== -3){
            console.log(i);
        }
    }
}
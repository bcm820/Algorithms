// DATE: 9/19/17

// INSTRUCTIONS:
// Multiples of Three - but Not All
// Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.

// MY SOLUTION (#1):
// In a FOR loop, I assigned 'i' with a value of -300.
// i must be less or equal to 0 to loop and increment 1.
// With each loop, i must pass an IF ELSE-IF statement:
// 1) If i is EITHER equal to -6 OR -3, do nothing.
// 2) If NEITHER are true, and i MOD 3 returns 0...
// Then log i to the console.

function multiplesOfThree(){
    for (i = -300; i <= 0; i++){
        if (i == -6 || i == -3){
            continue;
        }
        else if (i % 3 == 0){
            console.log(i);
        }
    }
}

// MY SOLUTION (#2):
// I used a FOR loop assigning i with a value of -300.
// i must be less or equal to 0 to loop and increment by 1.
// With each loop, three conditions must be true to print i:
// 1) i MOD 3 must return 0.
// 2) i cannot be -6.
// 3) i cannot be -3.
// If all conditions are true at once, then print i.

function multiplesOfThree(){
    for (i = -300; i <= 0; i++){
        if (i % 3 == 0 && i !== -6 && i !== -3){
            console.log(i);
        }
    }
}

// APPROACH BY DAN OOSTRA (CODING DOJO):
// We declare a function called mulOfthree that takes no parameters.
// Inside the body of the function we use a for loop setting the initial value of i to -300.
// We create a condition and check if the value of i is less than or equal to zero.
// If it is, we execute the code in the for loop and afterwards increment i by 1.
// The code that is in the for loop has two if statements.
// The first if statement uses the modulos operator to check if the value of i is a multiple of zero.
// If it is a multiple of 3 then a nested if statement checks if the value of i is equal to -3 or -6.
// If the value of i is equal to either of these values,
// then the function should skip that iteration of the for loop,
// using the continue command and proceed with the else statement console logging the value.

function mulOfthree(){
    for(var i = -300; i <= 0; i++){
        if(i % 3 == 0){
            if(i == -3 || i == -6){
                continue;
            }
            else {
                console.log(i);
            }
        }
    }
}
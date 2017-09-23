// DATE: 9/19/17

// INSTRUCTIONS:
// Threes and Fives
// Add and log all the values from 100 and 4,000,000
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

function threesAndFives(){
    var sum = 0;
    for (var i = 100; i <= 4000000; i++){
        if (i % 3 === 0 && i % 5 === 0){
            continue;
        }
        else if (i % 3 === 0 || i % 5 === 0){
            sum += i;
        }
    }
    console.log(sum)
}

// APPROACH BY DAN OOSTRA (CODING DOJO): My notes
// Allow for custom range of values via IF statements!

function threeAndFive(startVal, endVal)
{
  var result = 0;
  if (startVal === undefined) {
    startVal = 100;
  }
  if (endVal === undefined) {
    endVal = 4000000;
  }
  for (var count = startVal;
       count <= endVal; count++)
  {
    if (  (count % 3 == 0)
       || (count % 5 == 0))
    {
      if (  (count % 3 == 0)
         && (count % 5 == 0))
      {
        continue;
      }
      result += count;
    }
  }
 
  console.log("The 3 & 5 sum [%d-%d] is %d",
              startVal, endVal, result);
}
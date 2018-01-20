/* not yet complete */

let arr = [3,5,8,1,2,9,4,7,6];

function quickSort(arr) {
  const rQuickSort = (arr, pivot) => {
    let mL, mR;
    for (let i = 0, j = arr.length-2; i !== j; i++, j--) {
      if (arr[i] < pivot) mL = i;
      if (arr[j] >= pivot) mR = j;
      if (mL && mR) {
        [arr[mL], arr[mR]] = [arr[mR], arr[mL]];
        mL, mR = undefined;
      }
    }
    [arr[pivot], arr[i]] = [arr[i], arr[pivot]];
    return arr;
  }
  rQuickSort(arr);
  let left = 
}

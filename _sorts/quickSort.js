
function quickSort(arr) {
  
  const partition = (arr, left, right) => {
    const pivot = arr[Math.floor((right + left) / 2)];
    while (left <= right) {
      if (arr[left] < pivot) left++;
      if (arr[right] > pivot) right--;
      if (left <= right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
      }
    }
    return left;
  }
  
  const rQuickSort = (arr, left, right) => {
    if (arr.length > 1) {
      idx = partition (arr, left, right);
      if (left < idx - 1) rQuickSort (arr, left, idx - 1);
      if (idx < right) rQuickSort (arr, idx, right);
    }
    return arr;
  }
  
  rQuickSort(arr, 0, arr.length-1);
  
}
  

let arr = [3,5,8,1,2,9,4,7,6];
quickSort(items);
console.log(arr);

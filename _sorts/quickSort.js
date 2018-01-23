function quickSort(arr) {
  
  const partition = (arr, left, right) => {
    const pivot = arr[Math.floor((right + left) / 2)];
    while (left <= right) {
      while (arr[left] < pivot) left++;
      while (arr[right] > pivot) right--;
      if (left <= right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
      }
    }
    return left;
  }
  
  const rQuickSort = (arr, left, right) => {
    if (arr.length > 1) {
      let idx = partition(arr, left, right);
      if (left < idx - 1) rQuickSort(arr, left, idx - 1);
      if (idx < right) rQuickSort(arr, idx, right);
    }
    return arr;
  }
  
  rQuickSort(arr, 0, arr.length-1);
  
}
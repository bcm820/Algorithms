




function rBinarySearch(arr, n){
  function rbs(start, end){
    let mid = Math.floor((end-start)/2);
    if(start === end){ return false; }
    if(n === arr[mid]){ return true; }
    if(n < arr[mid]){ return rbs(start, mid); }
    if(n > arr[mid]){ return rbs(mid, end); }
  }
  return rbs(0, arr.length);
}

rBinarySearch([1,2,2,2,3,3,4,4,4,5,6,12,23,34,45,56,67,78,89,108], 108);
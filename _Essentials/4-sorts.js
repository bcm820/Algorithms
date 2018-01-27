/*
 * Bubble Sort
 * 
 */

function bubbleSort(a) {
    let sorted = true
    for (let i = 0; i < a.length; i++) {
        if (a[i] > a[i+1]) {
            [a[i], a[i+1]] = [a[i+1], a[i]]
            sorted = false
        }
    }
    if (sorted) return a
    else return bubbleSort(a)
}

/*
 * Selection Sort
 * 
 */

function selectionSort(a) {
    for (let i = 0; i < a.length - 1; i++) {
        let minI = i
        for (let j = i; j < a.length; j++) {
            if (a[j] < a[minI]) {
                minI = j
            }
        }
        [a[i], a[minI]] = [a[minI], a[i]]
    }
    return a
}

/*
 * Insertion Sort
 * 
 */

function insertionSort(a) {
    for (let i = 1; i < a.length; i++) {
        let current = a[i]
        let j = i
        while (a[j-1] > current && j > 0) {
            a[j] = a[j-1]
            j--
        }
        a[j] = current
    }
    return a
}

/*
 * Merge Sort
 * 
 */

function mergeSort(a) {
    if (a.length === 1) return a
    const mid = Math.floor(a.length / 2)
    const left = a.slice(0, mid)
    const right = a.slice(mid)
    const merge = (left, right) => {
        let arr = []
        while (left.length && right.length) {
            if (left[0] < right[0]) arr = [...arr, left.shift()]
            else arr = [...arr, right.shift()]
        }
        return [...arr, ...left, ...right]
    }
    return merge(mergeSort(left), mergeSort(right))
}

/*
 * Quick Sort
 * 
 */

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
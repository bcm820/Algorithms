function centuryFromYear(year) {
    const yr = year.toString();
    let last;
    if (yr.endsWith('0')) last = 0;
    else last = 1;
    switch (yr.length) {
        case 4: return parseInt(yr.substring(0, 2)) + last;
        case 3: return parseInt(yr.substring(0, 1)) + last;
        case 2: return 1;
        case 1: return 1;
    }
}

function checkPalindrome(inputString) {
    let isPal = true;
    for (let a = 0, b = inputString.length-1;
         a < inputString.length / 2;
         a++, b--) {
        if (inputString[a] !== inputString[b]) isPal = false;
    }
    return isPal;
}

function adjacentElementsProduct(inputArray) {
    let prod = inputArray[0] * inputArray[1];
    for (let i = 1; i < inputArray.length; i++) {
        if (prod < (inputArray[i] * inputArray[i+1])) {
            prod = inputArray[i] * inputArray[i+1];
        }
    }
    return prod;
}

function shapeArea(n) {
    return Math.pow(n, 2) + Math.pow(n-1, 2)
}

function makeArrayConsecutive2(statues) {
    let max = Math.max(...statues);
    let min = Math.min(...statues);
    return max - (min + statues.length-1);
}

function almostIncreasingSequence(sequence) {
    let decrease = false;
    for (let i = 0; i< sequence.length ; i++) {
      if(sequence[i] <= sequence[i-1]) {
        if(decrease) return false;
        decrease = true;
        if(i === 1 || i + 1 === sequence.length)
          continue;
        else if (sequence[i] > sequence[i-2])
          sequence[i-1] = sequence[i-2];
        else if(sequence[i-1] >= sequence[i+1])
          return false;
      }
    }
    return true;
}

function matrixElementsSum(matrix) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] === 0) {
                for (let x = i + 1; x < matrix.length; x++) {
                    matrix[x][j] = 'x';
                }
            }
            if (matrix[i][j] !== 'x') {
                sum += matrix[i][j];
            }
        }
    }
    return sum;
}

function allLongestStrings(arr) {
    let max = Math.max(...arr.map(el => el.length))
    return arr.filter(el => el.length === max)
}

function commonCharacterCount(s1, s2) {
    [s1, s2] = [[...s1], [...s2]]
    let amt = 0
    s1.forEach(el => {
        let i = s2.indexOf(el)
        if(i !== -1) {
            s2[i] = undefined
            amt++
        }
    })
    return amt
}

function isLucky(n) {
    let s = [...n.toString()]
    let mid = Math.floor(s.length / 2)
    let s1 = s.slice(0, mid);
    let s2 = s.slice(mid);
    s1 = s1.map(c => parseInt(c))
    s2 = s2.map(c => parseInt(c))
    s1 = s1.reduce((a, b) => { return a + b }, 0)
    s1 = s2.reduce((a, b) => { return a + b }, 0)
    return s1 === s2
}

/*
 * Clever variation by myjinxin2015
 * 
function isLucky(n) {
  var a=(n+"").split(""),half=a.length/2,l=0,r=0
  while(a.length>half) r+= +a.pop()
  while(a.length) l+= +a.pop()
  return l===r
}
*/

function sortByHeight(a) {
    if (a.indexOf(-1) === -1) {
        return a.sort(function(a, b){return a-b})
    }
    let idxs = []
    let ppl = []
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== -1) {
            idxs.push(i)
            ppl.push(a[i])
        }
    }
    ppl.sort(function(a, b){return a-b})
    for (let i = idxs.length - 1; i >= 0; i--) {
        a[idxs[i]] = ppl.pop()
    }
    return a
}

/*
 * Clever variation by myjinxin2015
 * 
function sortByHeight(a) {
  var sorted=a.filter(x=>x>-1).sort((x,y)=>x-y),r=[]
  for(var i=a.length-1;i>=0;i--) r[i]=a[i]==-1?-1:sorted.pop()
  return r
}
*/
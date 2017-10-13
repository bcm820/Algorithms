
function zipArrays(a, b){
    var c = {};
    for (var i = 0; i <= a.length-1, i++) {
        if (b[i] == undefined) {
            c[a[i]] = b[i];
        }
        else {
            c[a[i]] = b[i];
        }
    }
}

zipArrays([1,2,3,4],[])
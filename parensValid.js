
// p. 51

function parensValid(s){
    var arr = [];
    var open = 0;
    var close = 0;
    for (var i = 0; i <= s.length-1; i++) {
        if (s[i] == "(") {
            arr[open] = false;
            open += 1;
        }
        if (s[i] == ")") {
            arr[close] = true;
            close += 1;
        }
    }
    for (i = arr.length; i >= 0; i--){
        if (arr[i] == false){
            return false;
        }
    }
    return true;
}
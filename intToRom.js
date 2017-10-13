function intToRome(int){
    var rom = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    var num = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var str = "";
    for (var i = 0; i <= rom.length-1; i++){
        var mult = Math.floor(int/num[i]);
        while (mult > 0){
            str += rom[i];
            mult--;
        }
        int %= num[i];
    }
    return str;
}
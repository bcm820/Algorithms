function isAlpha(word){
    var chars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    var arr = []
    for (var i = 0; i <= word.length-1; i++){
      for (var a = 0; a <= chars.length-1; a++){
        if (word[i] == chars[a]){
          arr.push(a)
          break;
        }
      }
    }
    for (i = 0; i <= arr.length-1; i++){
      if (arr[i] > arr[i+1]){
        return false;
      }
    }
    return true;
  }
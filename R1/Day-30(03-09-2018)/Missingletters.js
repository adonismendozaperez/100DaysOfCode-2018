function fearNotLetter(str) {
    let compare = str.charCodeAt(0), missing;
    
    str.split('').map(function(letter,index) {
      if (str.charCodeAt(index) == compare) {
        ++compare;
      } else {
        missing = String.fromCharCode(compare);
      }
    });
  
    return missing;
  }
  
  fearNotLetter("abce");
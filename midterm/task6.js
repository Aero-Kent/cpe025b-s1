function firstUniqueChar(str) {
    const lowerStr = str.toLowerCase();
    let strArr = [];
    let uniqueCharIdx = null;
    let uniqueChar = null;
    let tempChar = null;
  
    for (let i = 0; i < lowerStr.length; i++) {
      uniqueChar = lowerStr[i];
      uniqueCharIdx = i;
      if (tempChar === uniqueChar) {
        uniqueCharIdx = null;
        uniqueChar = null;
      }
    }
    return str[uniqueCharIdx];
  }
  
  
  // Test Code
  console.log(firstUniqueChar('sTreSS'));
  console.log(firstUniqueChar('aabbc')); 
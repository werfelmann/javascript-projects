function generateHashtag (str) {
    let hashString;
    
    if (str === "" || str === "#" || str.trim() === '') {
      return false;
    }
    
    let strArr = str.trim().split(" ");
    
    for (let i = 0; i<strArr.length; i++) {
      let firstChar = strArr[i].charAt(0).toUpperCase();
      strArr[i] = strArr[i].replace(strArr[i].charAt(0), firstChar);
    }
    
    if (strArr[0] !== "#") {
        strArr.splice(0, 0, "#")
        hashString = strArr.toString()
    } else {
        hashString = strArr.toString()
    }

    let hashStringFinal = hashString.replaceAll(",", "");
    
    if (hashStringFinal.length > 140) {
      return false;
    }
    
    return hashStringFinal;
  }

let input = "         ";
console.log("Input: " + input);
console.log(generateHashtag(input));
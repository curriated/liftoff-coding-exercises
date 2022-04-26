function FirstReverse(str) { 
    str = str.split("");
    let reversedString = "";

    for(let i = 0; i < str.length; i++) {
        reversedString = str[i] + reversedString;
    }

    return reversedString;
  
  }
  // keep this function call here 
  console.log(FirstReverse("Test the reverse string function."));
/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let strArray = str.replace(/[\W_]/g, "").trim().toLowerCase().split("");
  let reverseStr = str
    .replace(/[\W_]/g, "")
    .trim()
    .toLowerCase()
    .split("")
    .reverse();

  if (strArray == "") {
    return true;
  }
  for (let i = 0; i < strArray.length; i++) {
    if (reverseStr[i] !== strArray[i]) {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;

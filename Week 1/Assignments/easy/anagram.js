/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1 === "" || str2 === "") {
    return true;
  }
  //compair if length is equal
  if (str1.length != str2.length) {
    return false;
  }
  //convert string in array
  let strArray1 = str1.split("");
  let strArray2 = str2.split("");

  //sort string array
  let sortedStr1 = strArray1.sort();
  let sortedStr2 = strArray2.sort();

  //compair 
  for (let i = 0; i < sortedStr1.length; i++) {
    if (sortedStr1[i] == sortedStr2[i]) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = isAnagram;

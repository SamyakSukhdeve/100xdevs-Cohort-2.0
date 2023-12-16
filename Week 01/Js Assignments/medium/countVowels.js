/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let lowercaseStr = str.toLowerCase();
  let finalStr = lowercaseStr.trim();
  let strArray = finalStr.split("");
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < strArray.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (strArray[i] == vowels[j]) {
        count += 1;
      }
    }
  }
  return count;
}

module.exports = countVowels;

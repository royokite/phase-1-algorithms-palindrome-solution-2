function isPalindrome(word) {
  // Write your algorithm here
  // iterate from the beginning of the string to the middle of the string
  // compare the letter we're iterating over to the corresponding letter at the end of the string
  // if the letters don't match, return false
  // if we reach the middle, and all the letters match, return true
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    const endIndex = word.length - 1 - startIndex;
    if (word[startIndex] !== word[endIndex]) {
      return false;
    }
  }

  return true;
}

/* 
  Add your pseudocode here
  iterate from the beginning of the string to the middle of the string
  compare the letter we're iterating over to the corresponding letter at the end of the string
    if the letters don't match, return false

if we reach the middle, and all the letters match, return true

*/

/*
  Add written explanation of your solution here
  Input: "racecar"
Input length divided by two: 3.5
Iteration:
  Index 0 (less than 3.5, keep iterating)
  Index 1 (less than 3.5, keep iterating)
  Index 2 (less than 3.5, keep iterating)
  Index 3 (less than 3.5, keep iterating)
  Index 4 (not less than 3.5, stop iterating)
For "racecar", our loop will iterate up to the middle "e"

Input: "abba"
Input length divided by two: 2
Iteration:
  Index 0 (less than 2, keep iterating)
  Index 1 (less than 2, keep iterating)
  Index 2 (not less than 2, stop iterating)
For "abba", our loop will iterate up to the first "b"
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

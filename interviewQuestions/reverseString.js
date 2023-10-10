// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

// Example 1:

// Input: s = "hello"
// Output: "holle"

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    // Convert the string to an array to make it mutable
    const sArray = s.split('');
  
    // Create an array to store the vowels found in the string
    const vowels = [];
  
    // Define a set of vowel characters for easy checking
    const vowelSet = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  
    // Iterate through the string and collect the vowels into the 'vowels' array
    for (let i = 0; i < sArray.length; i++) {
      if (vowelSet.has(sArray[i])) {
        vowels.push(sArray[i]);
      }
    }
  
    // Reverse the 'vowels' array in-place
    vowels.reverse();
  
    // Iterate through the string again and replace the vowels with the reversed vowels
    let vowelIndex = 0;
    for (let i = 0; i < sArray.length; i++) {
      if (vowelSet.has(sArray[i])) {
        sArray[i] = vowels[vowelIndex];
        vowelIndex++;
      }
    }
  
    // Join the array back into a string and return the result
    return sArray.join('');
  };
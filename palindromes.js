/* Palindromes exercise
   Goals - 
    Remove all non-alphanumeric characters
    Make everything lowercase
  
   Plan - 
    Regular Expressions */

// \W - removes all non-alphanumeric characters
// [^A-Z] - matches anything that is not enclosed between A/Z
// [^a-z] - matches anything that is not enclosed between a/z
// [^0-9] - matches anything that is not enclosed between 0/9
// [^_] - matches anything that does not enclose _

// toLowerCase() - returns the string in lower case
// replace() - returns a new string with some or all matches of a pattern replaced by a replacement.  (use reg exp)
// split() - splits a string object into an array of strings by separating the string into sub strings
// reverse() - returns the array in reverse
// join() - joins all elements of array into a string
const palindromes = function (string) {
  // Use Regular expression to remove unneccessary characters and make the string lowercase
  let re = /[\W_]/g;
  // replace will replace any instances of the re with nothing
  let lowerStr = string.toLowerCase().replace(re, "");

  // Next we need to reverse the string and check for equality
  // splits string into array where the Regular expression replaced, reverses the string, and joins it again
  let reverseStr = lowerStr.split("").reverse().join("");

  return reverseStr === lowerStr;
};

module.exports = palindromes;

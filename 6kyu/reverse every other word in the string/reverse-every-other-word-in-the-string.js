/* 
Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.
*/

/* 
PREP:
- get rid of any empty space
- split str into array
- set up function to revese a single word
- loop through words 
  - if odd index, reverse the word
  - if even index, return the word
- join them together
*/

function reverse(str) {
	const array = str.trim().split(" ");
	const reverseWord = (word) => [...word].reverse().join("");
	const mappingWord = (word, index) => (index % 2 ? reverseWord(word) : word);
	return array.map(mappingWord).join(" ");
}

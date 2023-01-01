/*
Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

["a","b","c","d","f"] -> "e"
["O","Q","R","S"] -> "P"
(Use the English alphabet with 26 letters!)
*/

/*
PREP:
- loop through the array
- convert them to ASCII code
- check current char and next char
- if the difference is 2, return the current char code + 1
*/

function findMissingLetter(array) {
	for (const index in array) {
		const char = array[index];
		const next = array[Number(index) + 1];
		if (next.charCodeAt() - char.charCodeAt() === 2) {
			return String.fromCharCode(char.charCodeAt() + 1);
		}
	}
}

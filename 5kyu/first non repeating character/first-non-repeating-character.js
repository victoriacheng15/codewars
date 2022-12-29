/* 
Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.
*/

/* 
PREP:
- take string
- return string
- 'stress' => 't'
p
- convert string to lower case
- loop through string
- use indexOf to check letter from left to right
- use lastIndexOf to check letter from right to left
- if not equal, the first non-repeated letter found
- return empty string if parameter is empty
*/

function firstNonRepeatingLetter(s) {
	const low = s.toLowerCase();
	for (let i = 0; i < s.length; i += 1) {
		if (low.indexOf(low[i]) === low.lastIndexOf(low[i])) return s[i];
	}
	return "";
}

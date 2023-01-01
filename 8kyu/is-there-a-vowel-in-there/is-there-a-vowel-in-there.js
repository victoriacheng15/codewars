/* 
Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.
*/

/* 
PREP
p - array
r - return the array with vowels in letters 
e - [101,121,110,113,113,103,121,121,101,107,103] => ["e",121,110,113,113,103,121,121,"e",107,103];
p
- loop through the array 
- if vowel, change it to letter
*/

function isVow(a) {
	const getString = (code) => String.fromCharCode(code);
	const vowel = /[aeiou]/;
	return a.map((code) =>
		vowel.test(getString(code)) ? getString(code) : code,
	);
}

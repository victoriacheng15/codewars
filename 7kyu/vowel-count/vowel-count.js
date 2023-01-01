/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

/*
steps:
- set up aeiou regex
- check for match
- if null return 0, otherwise return the length
*/

function getCount(str) {
	const vowels = /[aeiou]/gi;
	const checkMatch = str.match(vowels);
	return checkMatch !== null ? checkMatch.length : 0;
}

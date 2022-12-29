/*
In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
*/

/*
steps:
- change words to lower case and split into letter
- set up regex to get letters only
- filter out non-letters
- find charCode on ASCII table
- minus 96 => lower case start at 97

or
- uppercase but minus 64 instead

ASCII table
https://www.rapidtables.com/code/text/ascii-table.html
*/

function alphabetPosition(text) {
	const textLowerCase = text.toLowerCase().split("");
	const lettersOnly = /[a-z]+/;
	const isLetter = (letter) => letter.match(lettersOnly);
	const findCharCode = (char) => char.charCodeAt() - 96;
	return textLowerCase.filter(isLetter).map(findCharCode).join(" ");
}

/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

/*
PREPS:
- convert string to array with spread operator
- map and check each letter
- if it is a upper case, return the letter with space
- otherwise, return the letter
*/

function solution(string) {
	const findUpperCase = (letter) =>
		letter === letter.toUpperCase() ? ` ${letter}` : letter;
	return [...string].map(findUpperCase).join("");
}

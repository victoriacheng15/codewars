/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

/*
steps:
- use regex for x and o
- split string
- filter to find the 2 letters
- get length
*/

function XO(str) {
	const regexX = /x/gi;
	const regexO = /o/gi;

	const getLength = (regex) =>
		str.split("").filter((word) => word.match(regex)).length;

	const totalX = getLength(regexX);
	const totalO = getLength(regexO);
	return totalX === totalO;
}

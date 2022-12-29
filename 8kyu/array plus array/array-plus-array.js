/* 
I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
*/

/* 
PREP:
- add both arrays with spread operator
- use reduce() to get sum
*/

function arrayPlusArray(arr1, arr2) {
	const array = [...arr1, ...arr2];
	return array.reduce((a, b) => a + b, 0);
}

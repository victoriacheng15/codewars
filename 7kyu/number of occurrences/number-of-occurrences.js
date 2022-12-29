/* 
Write a function that returns the number of occurrences of an element in an array.

Examples
var arr = [0, 1, 2, 2, 3];
arr.numberOfOccurrences(0) === 1;
arr.numberOfOccurrences(4) === 0;
arr.numberOfOccurrences(2) === 2;
arr.numberOfOccurrences("a") === 0;
*/

/* 
PREP:
- input is array
- use filter function to get rid of any values that is not equal to provided paramter
- get the length of the array
- output, return the count
*/

Array.prototype.numberOfOccurrences = function (n) {
	const filtered = this.filter((value) => value === n).length;
	return filtered;
};

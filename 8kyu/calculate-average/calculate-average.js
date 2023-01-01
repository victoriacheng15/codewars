/* 
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/

/* 
PREP:
- use reduce() to add all number up
- then divide by array length
*/

function find_average(array) {
	const sum = (prev, current) => prev + current;
	return array.reduce(sum, 0) / array.length || 0;
}

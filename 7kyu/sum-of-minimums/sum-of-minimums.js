/*
PREP:
- set findMin function to find the minimum number from array
- set total function to add all minimums up
- use map and reduce
- return the result
*/

function sumOfMinimums(arr) {
	const findMin = (array) => Math.min(...array);
	const total = (prev, next) => prev + next;
	return arr.map(findMin).reduce(total, 0);
}

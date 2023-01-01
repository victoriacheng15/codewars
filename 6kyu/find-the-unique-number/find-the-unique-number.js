/* 
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.
*/

/* 
PREP:
- sort the array
- compare first annd 2nd items of the array
- if they are the same, remove the 2nd item
- until if they are different, remove the first item
*/

function findUniq(arr) {
	const sorted = arr.sort((a, b) => a - b);
	return sorted[0] === sorted[1] ? sorted.pop() : arr.shift();
}

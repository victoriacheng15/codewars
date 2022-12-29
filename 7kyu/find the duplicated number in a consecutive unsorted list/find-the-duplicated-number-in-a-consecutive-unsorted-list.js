/* 
You are given an array of n+1 integers 1 through n. In addition there is a single duplicate integer.

The array is unsorted.

An example valid array would be [3, 2, 5, 1, 3, 4]. It has the integers 1 through 5 and 3 is duplicated. [1, 2, 4, 5, 5] would not be valid as it is missing 3.

You should return the duplicate value as a single integer.
*/

/* 
PREP
p - array
r - duplicated number
e - [1,2,2,3] => 2
p
- sort the array
- loop through if current index is equal to next induex 
- if true, return the num
*/

function findDup(arr) {
	const sorted = (a, b) => a - b;
	const findDuplicated = (num, index, array) => num === array[index + 1];
	return arr.sort(sorted).filter(findDuplicated) * 1;
}

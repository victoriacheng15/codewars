/* 
You are given array of integers, your task will be to count all pairs in that array and return their count.

Notes:

Array can be empty or contain only one value; in this case return 0
If there are more pairs of a certain number, count each pair only once. E.g.: for [0, 0, 0, 0] the return value is 2 (= 2 pairs of 0s)
Random tests: maximum array length is 1000, range of values in array is between 0 and 1000
Examples
[1, 2, 5, 6, 5, 2]  -->  2
...because there are 2 pairs: 2 and 5

[1, 2, 2, 20, 6, 20, 2, 6, 2]  -->  4
...because there are 4 pairs: 2, 20, 6 and 2 (again)
*/

/* 
PREP:
p - array as the parameter
r - count the pairs
e - [1, 2, 2, 20, 6, 20, 2, 6, 2], there are 4 of 2, return 4
p:
- count elements
- a pair only counts once
- return the highest counts
*/

function duplicates(array) {
	const copyedArr = array.slice().sort();
	return copyedArr.reduce((acc, _, index, arr) => {
		if (arr[index] === arr[index + 1]) {
			acc += 1;
			arr[index] = "";
			arr[index + 1] = "";
		}
		return acc;
	}, 0);
}

/* 
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
*/

/* 
PREP:
- set up arrays to store even and odd
- check for even number
- if even, push to evenArr
- if odd, push to oddArr
- check array length, if equal to 1, return first item of the array
*/

function findOutlier(integers) {
	const oddArr = [];
	const evenArr = [];
	integers.forEach((num) =>
		num % 2 === 0 ? evenArr.push(num) : oddArr.push(num),
	);

	return evenArr.length === 1 ? evenArr[0] : oddArr[0];
}

/* 
Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

For example:

([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]
*/

/* 
PREP:
p - array
r - return array
e - ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
p
- get even numbers 
- use slice function to get last number index of the array
*/

function evenNumbers(array, number) {
	const filterEven = (num) => !(num % 2);
	return array.filter(filterEven).slice(-number);
}

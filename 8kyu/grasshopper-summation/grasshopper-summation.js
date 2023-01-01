/*
Summation
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
*/

const summation = function (num) {
	// set sum to 0
	// loop from 0 to num
	// add sum with i
	let sum = 0;
	for (let i = 0; i <= num; i++) {
		sum += i;
	}
	return sum;
};

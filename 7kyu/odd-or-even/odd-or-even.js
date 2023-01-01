/*
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
*/

/*
PREP:
- use reduce function to add all numbers in the array
- set the initial value 0
- user % 2 to check if it is equal to zero or not
- if zero, return even, otherwise return odd
*/

function oddOrEven(array) {
	const isEven = array.reduce((acc, total) => acc + total, 0);
	return isEven % 2 === 0 ? "even" : "odd";
}

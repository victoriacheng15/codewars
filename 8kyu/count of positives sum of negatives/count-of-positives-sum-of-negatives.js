/* 
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

/* 
PREP:
- check for input and input.length
- if not, user filter
  - find positive array length
  - find negative array and then use reduce() to find the sum
- if array is empty or null, return emtpy array
*/

function countPositivesSumNegatives(input) {
	return input?.length
		? [
				input.filter((num) => num > 0).length,
				input.filter((num) => num < 0).reduce((acc, cur) => acc + cur, 0),
		  ]
		: [];
}

/* 
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/

/* 
PREP:
- map() through the array with Number to convert them to number
- use reduce() to add them all
*/

function sumMix(x) {
	return x.map(Number).reduce((a, b) => a + b, 0);
}

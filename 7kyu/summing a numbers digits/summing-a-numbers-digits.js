/* 
Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values.
*/

/* 
PREP:
- convert number to absolute value and then array
- use reduce function to add numbers
*/

function sumDigits(number) {
	const array = [...`${Math.abs(number)}`];
	return array.reduce((a, b) => Number(a) + Number(b), 0);
}

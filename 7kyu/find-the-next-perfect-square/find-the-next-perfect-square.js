/*
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square
*/

/*
PREP:
- square root the current integer
- check if it is a whole number or not
- if not, return -1
- if yes, get the next number and power of 2 the number

note:
- can use num % 1 instead of Number.isInteger
*/

function findNextSquare(sq) {
	const getPerfectSquare = Math.sqrt(sq);
	const isInteger = Number.isInteger(getPerfectSquare);
	return isInteger ? (getPerfectSquare + 1) ** 2 : -1;
}

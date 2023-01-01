/* 
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

/* 
PREP:
- convert to binary with toString(2)
- convert to array
- convert string to number
- use reduce() to get total
*/

const countBits = function (n) {
	const toNum = (num) => Number(num);
	return [...n.toString(2)].reduce((a, b) => toNum(a) + toNum(b), 0);
};

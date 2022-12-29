/*
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/

/*
PREP:
- split n to array (need to convert to string first)
- add them all with reduce() function
- check the arr length
- if it is equal to 1
- return the sum else return digital_root(sum)
*/

function digital_root(n) {
	const arr = [...n.toString()];
	const sum = arr.reduce((a, b) => Number(a) + Number(b), 0);
	return arr.length === 1 ? sum : Number(digital_root(sum));
}

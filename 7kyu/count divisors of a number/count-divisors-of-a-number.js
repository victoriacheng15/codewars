/*
Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples (input --> output)
4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
*/

function getDivisorsCnt(n) {
	// create and fill the array based on n
	// map the num + 1, array index start at 0
	// filter out decimal values with reminder
	const range = [...Array(n).keys()]
		.map((num) => n / (num + 1))
		.filter((num) => num % 1 === 0);
	return range.length;
}

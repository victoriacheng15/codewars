/*
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
*/

function getSum(a, b) {
	// 1. check if a === b, return a
	// 2. check if a < b, loop and add through lowest to highest numbers
	// 3. check if b < a, loop and add through lowest to highest numbers
	let total = 0;
	if (a === b) {
		return a;
	}

	if (a < b) {
		for (let i = a; i <= b; i++) {
			total += i;
		}
		return total;
	}

	if (b < a) {
		for (let i = b; i <= a; i++) {
			total += i;
		}
		return total;
	}
}

// updated solution
function getSum(a, b) {
	// 1. check if a === b, return a
	// 2. check if a < b, return recursion function
	// 3. check if b < a, return recursion function
	if (a === b) return a;
	if (a < b) return a + getSum(a + 1, b);
	if (a > b) return a + getSum(a - 1, b);
}

/* 
Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

Division by zero should return NaN.

Examples:
n = 17
m = 5
result = 2 (remainder of `17 / 5`)

n = 13
m = 72
result = 7 (remainder of `72 / 13`)

n = 0
m = -1
result = 0 (remainder of `0 / -1`)

n = 0
m = 1
result - division by zero (refer to the specifications on how to handle this in your language)
*/

// reminder calculating, 17 / 5 =  3 => 3 * 5 = 15 => 17 - 15 = 2, 2 is the reminder

function remainder(n, m) {
	if (n < m) [n, m] = [m, n];
	return n % m;
}

describe("find the reminder", () => {
	it("should return reminder", () => {
		expect(remainder(17, 5)).toBe(2);
	});

	it("should return reminder", () => {
		expect(remainder(13, 72)).toBe(7);
	});
});

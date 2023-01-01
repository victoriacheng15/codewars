/* 
Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

Examples:

input:    output:
0    ->   0
2    ->   5
3    ->   5
12   ->   15
21   ->   25
30   ->   30
-2   ->   0
-5   ->   -5
etc.
Input may be any positive or negative integer (including 0).

You can assume that all inputs are valid integers.
*/

function roundToNext5(n) {
	return Math.ceil(n / 5) * 5;
}

describe("round up to next 5", () => {
	const cases = [
		[0, 0],
		[2, 5],
		[3, 5],
		[12, 15],
		[21, 25],
		[30, 30],
		[-2, -0],
		[-5, -5],
	];
	for (const [n, output] of cases) {
		it(`should return ${output} when n is ${n}`, () => {
			const input = roundToNext5(n);
			expect(input).toBe(output);
		});
	}
});

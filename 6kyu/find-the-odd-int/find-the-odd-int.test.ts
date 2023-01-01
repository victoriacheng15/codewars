/* 
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/

export const findOdd = (xs: number[]): number => {
	let result = 0;
	if (xs.length === 1) return xs[0];
	const counts = new Map();

	for (const num of xs) {
		counts.set(num, counts.get(num) + 1 || 1);
	}

	for (const [num, count] of counts) {
		if (count % 2 !== 0) result = num;
	}

	return result;
};

describe("find the odd init", () => {
	type TestCases = [number[], number][];

	const cases: TestCases = [
		[[20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5], 5],
		[[1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5], -1],
		[[20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5], 5],
		[[10], 10],
	];

	for (const [xs, output] of cases) {
		it(`should return ${output} when xs = [${xs}]`, () => {
			const input = findOdd(xs);
			expect(input).toBe(output);
		});
	}
});

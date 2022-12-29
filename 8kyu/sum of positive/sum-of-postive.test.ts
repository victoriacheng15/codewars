/* 
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

export function positiveSum(arr: number[]): number {
	return arr.reduce((acc, num) => {
		if (num > 0) acc += num;

		return acc;
	}, 0);
}

describe("sum of positive", () => {
	type TestCase = [number[], number][];

	const cases: TestCase = [
		[[1, 2, 3, 4, 5], 15],
		[[1, -2, 3, 4, 5], 13],
		[[-1, -2, -3, -4, -5], 0],
	];

	for (const [arr, output] of cases) {
		it(`should return ${output} when arr = [${arr}]`, () => {
			expect(positiveSum(arr)).toBe(output);
		});
	}
});

import { describe, expect, it } from "vitest";

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

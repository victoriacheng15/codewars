import { describe, it, expect } from "vitest";

export function invert(array: number[]): number[] {
	return array.length ? array.map((num) => -num) : [];
}

describe("invert value", () => {
	const tests = [
		[
			[1, 2, 3, 4, 5],
			[-1, -2, -3, -4, -5],
		],
		[
			[1, -2, 3, -4, 5],
			[-1, 2, -3, 4, -5],
		],
	];

	for (const [array, expected] of tests) {
		it(`should return [${expected}] when array = [${array}]`, () => {
			expect(invert(array)).toEqual(expected);
		});
	}
});

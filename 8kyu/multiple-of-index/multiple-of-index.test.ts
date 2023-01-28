import { describe, expect, it } from "vitest";

export function multipleOfIndex(array: number[]): number[] {
	return array.filter((num, index) => num % index === 0);
}

describe("multipleOfIndex", () => {
	const tests = [
		[
			[22, -6, 32, 82, 9, 25],
			[-6, 32, 25],
		],
		[
			[68, -1, 1, -7, 10, 10],
			[-1, 10],
		],
		[
			[
				-56, -85, 72, -26, -14, 76, -27, 72, 35, -21, -67, 87, 0, 21, 59, 27,
				-92, 68,
			],
			[-85, 72, 0, 68],
		],
	];

	for (const [array, expected] of tests) {
		it(`should return ${expected}`, () => {
			expect(multipleOfIndex(array)).toEqual(expected);
		});
	}
});

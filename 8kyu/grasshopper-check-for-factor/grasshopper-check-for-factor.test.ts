import { describe, expect, it } from "vitest";

export function checkForFactor(base: number, factor: number) {
	return base % factor === 0;
}

describe("checkForFactor", () => {
	const tests: [number, number, boolean][] = [
		[10, 2, true],
		[63, 7, true],
		[653, 7, false],
		[2453, 5, false],
	];

	for (const [base, factor, expected] of tests) {
		it(`should return ${expected} for ${base}/${factor}`, () => {
			expect(checkForFactor(base, factor)).toBe(expected);
		});
	}
});

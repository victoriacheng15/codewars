function expressionMatter(a, b, c) {
	const arr = [
		a + b + c,
		a * b * c,
		a * b + c,
		a * (b + c),
		a + b * c,
		(a + b) * c,
	];
	return Math.max(...arr);
}

import { describe, it, expect } from "vitest";

describe("expressions matter", () => {
	const tests = [
		[2, 1, 2, 6],
		[3, 5, 7, 105],
		[2, 10, 3, 60],
	];

	for (const [a, b, c, output] of tests) {
		it(`should return ${output} when a, b, and c are equal to ${a}, ${b}, ${c} respectively`, () => {
			expect(expressionsMatter(a, b, c)).toBe(output);
		});
	}
});

import { describe, expect, it } from "vitest";

function otherAngle(a, b) {
	return 180 - a - b;
}

describe("other angle", () => {
	const cases = [
		[30, 60, 90],
		[60, 60, 60],
		[43, 78, 59],
	];

	for (const [a, b, output] of cases) {
		it(`should return ${output} when a = ${a} and b = ${b}`, () => {
			expect(otherAngle(a, b)).toBe(output);
		});
	}
});

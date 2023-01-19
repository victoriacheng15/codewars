import {describe, it, expect} from "vitest";

export const square = (x: number) => x * x;

describe("square", () => {
	const tests = [
		[2, 4],
		[50, 2500],
		[1, 1],
	]
	
	for (const [num, output] of tests) {
		it(`should return the square of ${num}`, () => {
			expect(square(num)).toBe(output);
		})
	}
});
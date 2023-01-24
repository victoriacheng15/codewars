/* 
Now you have to write a function that takes an argument and returns the square of it.
*/

import { describe, it, expect } from "vitest";

function square(num) {
	return num ** 2;
}

describe("square", () => {
	const tests = [
		[2, 4],
		[50, 2500],
		[1, 1],
	];

	for (const [num, output] of tests) {
		it(`should return the square of ${num}`, () => {
			expect(square(num)).toBe(output);
		});
	}
});

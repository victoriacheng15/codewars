export const fakeBin = (x: string): string => {
	return [...x].map((num) => (Number(num) < 5 ? "0" : "1")).join("");
};

import { describe, it, expect } from "vitest";

describe("fake binary", () => {
	const tests = [
		["45385593107843568", "01011110001100111"],
		["509321967506747", "101000111101101"],
		["366058562030849490134388085", "011011110000101010000011011"],
	];

	for (const [x, output] of tests) {
		it(`should return ${output} when x = ${x}`, () => {
			expect(fakeBin(x)).toBe(output);
		});
	}
});

export const min = (list: number[]): number => {
	return Math.min(...list);
};

export const max = (list: number[]): number => {
	return Math.max(...list);
};

import { describe, it, expect } from "vitest";

describe("find min", () => {
	const tests: [number[], number][] = [
		[[-52, 56, 30, 29, -54, 0, -110], -110],
		[[42, 54, 65, 87, 0], 0],
	];

	for (const [input, output] of tests) {
		it(`should return ${output} when inpuit = [${input}]`, () => {
			expect(min(input)).toBe(output);
		});
	}
});

describe("find max", () => {
	const tests: [number[], number][] = [
		[[4, 6, 2, 1, 9, 63, -134, 566], 566],
		[[5], 5],
	];

	for (const [input, output] of tests) {
		it(`should return ${output} when inpuit = [${input}]`, () => {
			expect(max(input)).toBe(output);
		});
	}
});

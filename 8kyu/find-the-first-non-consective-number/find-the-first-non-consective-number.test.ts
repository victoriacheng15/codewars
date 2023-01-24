import { describe, it, expect } from "vitest";

export function firstNonConsecutive(arr: number[]): null | number {
	const result = arr.find((num, index) => num !== index + arr[0]);
	return result !== undefined && Number.isInteger(result) ? result : null;
}

describe("find first non consective number", () => {
	const tests: [number[], number | null][] = [
		[[1, 2, 3, 4, 6, 7, 8], 6],
		[[4, 5, 6, 7, 8], null],
	];

	for (const [arr, output] of tests) {
		it(`should return ${output} when arr = [${arr}]`, () => {
			expect(firstNonConsecutive(arr)).toBe(output);
		});
	}
});

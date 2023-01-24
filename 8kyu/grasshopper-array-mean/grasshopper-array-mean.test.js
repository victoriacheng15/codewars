import { describe, it, expect } from "vitest";

/* 
PREP:
- input is array
- add all numbers in the array
- divide by the length of the array
- output is a number as in the average
*/

let findAverage = function (nums) {
	return nums.reduce((a, b) => a + b, 0) / nums.length;
};

describe("findAverage", () => {
	const tests = [
		[[1], 1],
		[[1, 3, 5, 7], 4],
	];

	for (const [nums, output] of tests) {
		it(`should return ${output} when given ${nums}`, () => {
			expect(findAverage(nums)).toBe(output);
		});
	}
});

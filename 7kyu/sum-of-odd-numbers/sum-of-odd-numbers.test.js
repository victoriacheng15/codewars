import { describe, expect, it } from "vitest";

function rowSumOddNumbers(n) {
	return n ** 3;
}

describe("sum of odd numbers", () => {
	const cases = [
		[1, 1],
		[42, 74088],
	];
	for (const [input, output] of cases) {
		it(`should return ${output} when input is %{input}`, () => {
			expect(rowSumOddNumbers(input)).toBe(output);
		});
	}
});

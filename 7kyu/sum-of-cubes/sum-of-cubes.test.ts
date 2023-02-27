import { describe, expect, it } from "vitest";

export function sumCubes(n: number): number {
	let sum = 0;
	for (let i = 1; i <= n; i += 1) {
		sum += i ** 3;
	}

	return sum;
}

describe("sum of cube", () => {
	const cases = [
		[1, 1],
		[2, 9],
		[3, 36],
		[10, 3025],
	];

	for (const [n, output] of cases) {
		it(`should return ${output} when n = ${n} `, () => {
			expect(sumCubes(n)).toBe(output);
		});
	}
});

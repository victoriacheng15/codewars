import { describe, expect, it } from "vitest";

function sumCubes(n) {
	const arr = [...new Array(n + 1).keys()].slice(1);
	return arr.reduce((acc, curr) => acc + curr ** 3, 0);
}

describe("sum of cube", () => {
	it("should return 9 when n is 2", () => {
		expect(sumCubes(2)).toBe(9);
	});

	it("should return 36 when n is 3", () => {
		expect(sumCubes(3)).toBe(36);
	});
});

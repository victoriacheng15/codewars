import { describe, it, expect } from "vitest";

function checkForFactor(base, factor) {
	return !(base % factor);
}

describe("check for factor", () => {
	it("should return true when base = 10 and factor = 2", () => {
		expect(checkForFactor(10, 2)).toBe(true);
	});

	it("should return true when base = 63 and factor = 7", () => {
		expect(checkForFactor(63, 7)).toBe(true);
	});

	it("should return false when base = 653 and factor = 7", () => {
		expect(checkForFactor(653, 7)).toBe(false);
	});

	it("should return false when base = 9 and factor = 2", () => {
		expect(checkForFactor(9, 2)).toBe(false);
	});
});

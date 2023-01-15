import { describe, it, expect } from "vitest";

function all(arr, fun) {
	return arr.every(fun);
}

describe("true for all", () => {
	it("should return a boolean value", () => {
		expect(all([1, 2, 3, 4, 5], (v) => v < 9)).toBe(true);
	});

	it("should return a boolean value", () => {
		expect(all([1, 2, 3, 4, 5], (v) => v > 9)).toBe(false);
	});
});

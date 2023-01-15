import { describe, it, expect } from "vitest";

function none(arr, fun) {
	return !arr.some(fun);
}

describe("true or none", () => {
	it("should return a boolean value", () => {
		expect(none([1, 2, 3, 4, 5], (elem) => elem > 5)).toBe(true);
	});

	it("should return a boolean value", () => {
		expect(none([1, 2, 3, 4, 5], (elem) => elem > 4)).toBe(false);
	});
});

import { describe, expect, it } from "vitest";

function stringy(size) {
	const arr = [...new Array(size).fill(0)].slice(0);
	return arr.map((_, index) => (index % 2 ? "0" : "1")).join("");
}

describe("stringy", () => {
	it("should return binary number based on size", () => {
		expect(stringy(6)).toEqual("101010");
	});
});

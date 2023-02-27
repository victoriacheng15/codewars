import { describe, expect, it } from "vitest";

// function firstNonRepeated(s) {
// 	for (let i = 0; i < s.length; i += 1) {
// 		const current = s[i];
// 		if (s.indexOf(current) === s.lastIndexOf(current)) {
// 			return current;
// 		}
// 	}
// 	return null;
// }

function firstNonRepeated(s) {
	return [...s].find((char) => s.indexOf(char) === s.lastIndexOf(char));
}

describe("first non repeated", () => {
	it("should return first non-repeated char", () => {
		expect(firstNonRepeated("teeter")).toBe("r");
	});

	it("should return first non-repeated char", () => {
		expect(firstNonRepeated("trend")).toBe("t");
	});
});

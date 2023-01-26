import { describe, it, expect } from "vitest";

function hoopCount(n) {
	return n >= 10
		? "Great, now move on to tricks"
		: "Keep at it until you get it";
}

describe("hoopCount", () => {
	it("should return the number of hoops", () => {
		expect(hoopCount(3)).toMatch("Keep at it until you get it");
		expect(hoopCount(11)).toMatch("Great, now move on to tricks");
	});
});

import { describe, it, expect } from "vitest";

function combineNames(firstName, lastName) {
	return `${firstName} ${lastName}`;
}

describe("combine names", () => {
	it("should return full name", () => {
		expect(combineNames("James", "Stevens")).toMatch("James Stevens");
	});
});

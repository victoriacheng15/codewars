import { describe, it, expect } from "vitest";

function main(verb, noun) {
	return verb + noun;
}

describe("check function syntax", () => {
	it("should return string value", () => {
		expect(main("take ", "item")).toBe("take item");
	});
});

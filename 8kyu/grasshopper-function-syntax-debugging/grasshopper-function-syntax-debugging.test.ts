import { describe, it, expect } from "vitest";

export function main(verb: string, noun: string): string {
	return verb + noun;
}

describe("check function syntax", () => {
	it("should return string value", () => {
		expect(main("take ", "item")).toBe("take item");
	});
});

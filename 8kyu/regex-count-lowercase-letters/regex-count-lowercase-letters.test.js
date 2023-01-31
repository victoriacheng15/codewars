import { describe, expect, it } from "vitest";

function lowercaseCount(str) {
	const regex = /[A-Z\W\d_]/g;
	return str.replace(regex, "").length;
}

describe("lowercase count", () => {
	it("should return 3 for abc", () => {
		expect(lowercaseCount("abc")).toBe(3);
	});

	it("should return 3 for abcABC123", () => {
		expect(lowercaseCount("abcABC123")).toBe(3);
	});

	it("should return 3 for ABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~", () => {
		expect(lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~")).toBe(0);
	});

	it("should return 3 for abcdefghijklmnopqrstuvwxyz", () => {
		expect(lowercaseCount("abcdefghijklmnopqrstuvwxyz")).toBe(26);
	});
});

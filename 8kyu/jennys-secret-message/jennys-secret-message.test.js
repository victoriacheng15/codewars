import { describe, it, expect } from "vitest";

function greet(name) {
	return name === "Johnny" ? "Hello, my love!" : `Hello, ${name}!`;
}

describe("greet", () => {
	it("should return the name", () => {
		expect(greet("Jim")).toBe("Hello, Jim!");
	});

	it("should return the lover", () => {
		expect(greet("Johnny")).toBe("Hello, my love!");
	});
});

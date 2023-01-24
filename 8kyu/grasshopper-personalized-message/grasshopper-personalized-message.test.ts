import { describe, it, expect } from "vitest";

export function greet(name: string, owner: string): string {
	return name === owner ? "Hello boss" : "Hello guest";
}

describe("greet", () => {
	// write unit tests that if name === owner return hello boss, otherwise return hello guest
	it("should return hello boss", () => {
		expect(greet("Daniel", "Daniel")).toBe("Hello boss");
	});

	it("should return hello guest", () => {
		expect(greet("Greg", "Daniel")).toBe("Hello guest");
	});
});

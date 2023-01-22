import { describe, it, expect } from "vitest";

function orderOperations() {
	return (2 + 2) * (2 + 2) * 2;
}

describe("order operation", () => {
	it("should return 32", () => {
		expect(orderOperations()).toBe(32);
	});
});

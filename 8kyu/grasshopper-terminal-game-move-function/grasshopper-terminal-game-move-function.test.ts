import { describe, it, expect } from "vitest";

export function move(pos: number, roll: number): number {
	return pos + roll * 2;
}

describe("terminal game move", () => {
	it("should return 8 when position is 0 and roll is 4", () => {
		expect(move(0, 4)).toBe(8);
	});

	it("should return 15 when position is 3 and roll is 6", () => {
		expect(move(3, 6)).toBe(15);
	});

	it("should return 12 when position is 2 and roll is 5", () => {
		expect(move(2, 5)).toBe(12);
	});
});

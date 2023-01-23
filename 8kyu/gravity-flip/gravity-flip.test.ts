import { describe, it, expect } from "vitest";

export function flip(dir: string, arr: number[]): number[] {
	return dir === "L" ? arr.sort((a, b) => b - a) : arr.sort((a, b) => a - b);
}

describe("flip", () => {
	it("flips a direction", () => {
		expect(flip("R", [3, 2, 1, 2])).toEqual([1, 2, 2, 3]);
		expect(flip("L", [1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
	});
});

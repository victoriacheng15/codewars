import { describe, it, expect } from "vitest";

export function cubeChecker(volume: number, side: number): boolean {
	// if (side <= 0) return false;
	// return volume === side ** 3;

  return side <= 0 ? false : volume === side ** 3
}

describe("cube checker", () => {
	const tests: [number, number, boolean][] = [
		[1, 1, true],
		[8, 2, true],
		[0, 35, false],
		[10, 0, false],
	];

	for (const [volume, side, output] of tests) {
		it(`should return ${output} when volume = ${volume} and side = ${side}`, () => {
			expect(cubeChecker(volume, side)).toBe(output);
		});
	}
});

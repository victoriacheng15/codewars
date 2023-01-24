import { describe, it, expect } from "vitest";

export function betterThanAverage(
	classPoints: number[],
	yourPoints: number,
): boolean {
  const avg = classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
	return avg < yourPoints;
}

describe("better than average", () => {
	const cases: [number[], number, boolean][] = [
		[[2, 3], 5, true],
		[[100, 40, 34, 57, 29, 72, 57, 88], 75, true],
		[[41, 75, 72, 56, 80, 82, 81, 33], 50, false],
		[[29, 55, 74, 60, 11, 90, 67, 28], 21, false],
	];

	for (const [classPoints, yourPoints, output] of cases) {
		it(`should return ${output} when class points = [${classPoints}] and your point = ${yourPoints}`, () => {
			expect(betterThanAverage(classPoints, yourPoints)).toBe(output);
		});
	}
});

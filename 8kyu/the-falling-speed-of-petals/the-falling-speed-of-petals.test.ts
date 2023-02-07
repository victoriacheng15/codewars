import { describe, expect, it } from "vitest";

export function sakuraFall(v: number): number {
	if (v <= 0) return 0;
	return (5 * 80) / v;
}

describe("sakura fall", () => {
	const cases: number[][] = [
		[5, 80],
		[10, 40],
		[200, 2],
		[-1, 0],
	];

	for (const [v, output] of cases) {
		it(`should return ${output} when v = ${v}`, () => {
			expect(sakuraFall(v)).toBe(output);
		});
	}
});

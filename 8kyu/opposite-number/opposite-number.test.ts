/* 
Very simple, given an integer or a floating-point number, find its opposite.

Examples:

1: -1
14: -14
-34: 34
*/

export class Kata {
	static opposite(n: number) {
		return n * -1;
	}
}

describe("opposite", () => {
	const cases: number[][] = [
		[1, -1],
		[14, -14],
		[-34, 34],
	];

	for (const [n, output] of cases) {
		it(`should return ${output} when n = ${n}`, () => {
			const input = Kata.opposite(n);
			expect(input).toBe(output);
		});
	}
});

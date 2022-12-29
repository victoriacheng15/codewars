/* 
We need a function that can transform a number (integer) into a string.

What ways of achieving this do you know?

Examples (input --> output):
123  --> "123"
999  --> "999"
-100 --> "-100"
*/

export function numberToString(num: number): string {
	return String(num);
}

describe("convert a number to string", () => {
	const cases: [number, string][] = [
		[67, "67"],
		[50, "50"],
	];

	for (const [n, output] of cases) {
		it(`should return ${output} when n = ${n}`, () => {
			expect(numberToString(n)).toBe(output);
		});
	}
});

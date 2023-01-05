export function numberToString(num: number): string {
	return String(num);
}

// describe("convert a number to string", () => {
// 	const cases: [number, string][] = [
// 		[67, "67"],
// 		[50, "50"],
// 	];

// 	for (const [n, output] of cases) {
// 		it(`should return ${output} when n = ${n}`, () => {
// 			expect(numberToString(n)).toBe(output);
// 		});
// 	}
// });

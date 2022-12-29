/* 
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
*/

export class Kata {
	static squareDigits(num: number): number {
		return Number([...`${num}`].map((val) => Number(val) ** 2).join(""));
	}
}

describe("square every digit", () => {
	const cases: [number, number][] = [
		[9119, 811181],
		[0, 0],
	];

	for (const [n, output] of cases) {
		it(`should return ${output} when n = ${n}`, () => {
			expect(Kata.squareDigits(n)).toBe(output);
		});
	}
});

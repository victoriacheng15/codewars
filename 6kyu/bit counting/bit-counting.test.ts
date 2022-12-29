/* 
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

export function countBits(n: number): number {
	return [...n.toString(2)].reduce((acc, num) => acc + Number(num), 0);
}

describe("bit counting", () => {
	const cases = [
		[0, 0],
		[4, 1],
		[7, 3],
		[9, 2],
	];

	for (const [n, output] of cases) {
		it(`should return ${output} when n = ${n}`, () => {
			expect(countBits(n)).toBe(output);
		});
	}
});

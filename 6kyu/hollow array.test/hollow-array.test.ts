/* 
An array is said to be hollow if it contains 3 or more 0s in the middle that are preceded and followed by the same number of non-zero elements. Furthermore, all the zeroes in the array must be in the middle of the array.

Write a function named isHollow/is_hollow/IsHollow that accepts an integer array and returns true if it is a hollow array,else false.
*/

export function isHollow(x: number[]): boolean {
	const i = x.indexOf(0);
	const j = x.lastIndexOf(0);
	return (
		j - i >= 2 &&
		i === x.length - 1 - j &&
		x.slice(i, j + 1).every((num) => num === 0)
	);
}

describe("is hollow?", () => {
	const cases: [number[], boolean][] = [
		[[-1, 0, 0, 0, 3], true],
		[[1, 0, 0, 0, 0], false],
	];

	for (const [x, output] of cases) {
		it(`should return ${output} when x = [${x}] `, () => {
			expect(isHollow(x)).toBe(output);
		});
	}
});

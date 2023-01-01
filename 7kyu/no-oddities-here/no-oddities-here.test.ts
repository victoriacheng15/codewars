/* 
Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.
*/

export function noOdds(values: number[]): number[] {
	return values.filter((num) => !(num % 2));
}

describe("no odds", () => {
	const cases = [
		[[0, 1], [0]],
		[
			[0, 1, 2, 3],
			[0, 2],
		],
	];

	for (const [values, output] of cases) {
		it(`should return [${output}], when values = [${values}]`, () => {
			expect(noOdds(values)).toEqual(output);
		});
	}
});

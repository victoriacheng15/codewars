/* 
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

array_diff({1, 2}, 2, {1}, 1, *z) == {2} (z == 1)
If a value is present in b, all of its occurrences must be removed from the other:

array_diff({1, 2, 2, 2, 3}, 5, {2}, 1, *z) == {1, 3} (z == 2)
*/

export function arrayDiff(a: number[], b: number[]): number[] {
	if (!a.length) return a;
	return a.filter((value) => !b.includes(value));
}

describe("array diff", () => {
	// type TestCase = Array<[number[], number[], number[]]>;
	type NumArr = number[];
	type TestCase = [NumArr, NumArr, NumArr][];

	const cases: TestCase = [
		[[], [4, 5], []],
		[[3, 4], [3], [4]],
		[[1, 8, 2], [], [1, 8, 2]],
	];

	for (const [a, b, output] of cases) {
		it(`should return [${output}] when a = [${a}] and b = [${b}]`, () => {
			expect(arrayDiff(a, b)).toEqual(output);
		});
	}
});

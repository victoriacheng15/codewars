/* 
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

/* 
if array is empty, return a
- use filter and includes function to filter out b values
*/

function arrayDiff(a, b) {
	if (a.length === 0) return a;
	return a.filter((value) => !b.includes(value));
}

describe("array diff", () => {
	const cases = [
		[[1, 2], [1], [2]],
		[[1, 2, 2], [1], [2, 2]],
		[[1, 2, 2], [2], [1]],
		[[1, 2, 2], [], [1, 2, 2]],
		[[], [1, 2], []],
		[[1, 2, 3], [1, 2], [3]],
	];

	for (const [inputA, inputB, output] of cases) {
		it(`should return [${output}] when a = [${inputA}] and b = [${inputB}]`, () => {
			expect(arrayDiff(inputA, inputB)).toEqual(output);
		});
	}
});

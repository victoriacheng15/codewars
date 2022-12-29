/* 
Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.

sum_pairs([11, 3, 7, 5],         10)
#              ^--^      3 + 7 = 10
== [3, 7]

sum_pairs([4, 3, 2, 3, 4],         6)
#          ^-----^         4 + 2 = 6, indices: 0, 2 *
#             ^-----^      3 + 3 = 6, indices: 1, 3
#                ^-----^   2 + 4 = 6, indices: 2, 4
#  * the correct answer is the pair whose second value has the smallest index
== [4, 2]

sum_pairs([0, 0, -2, 3], 2)
#  there are no pairs of values that can be added to produce 2.
== None/nil/undefined (Based on the language)

sum_pairs([10, 5, 2, 3, 7, 5],         10)
#              ^-----------^   5 + 5 = 10, indices: 1, 5
#                    ^--^      3 + 7 = 10, indices: 3, 4 *
#  * the correct answer is the pair whose second value has the smallest index
== [3, 7]
Negative numbers and duplicate numbers can and will appear.
*/

function sumPairs(ints, s) {
	const seen = new Map();

	for (const num of ints) {
		const diff = s - num;
		if (seen.has(diff)) {
			return [diff, num];
			// return { arr };
		}

		seen.set(num);
	}
}

describe("sum of pairs", () => {
	const cases = [
		[[1, 4, 8, 7, 3, 15], 8, [1, 7]],
		[[1, -2, 3, 0, -6, 1], -6, [0, -6]],
		[[20, -13, 40], -7, undefined],
		[[1, 2, 3, 4, 1, 0], 2, [1, 1]],
		[[10, 5, 2, 3, 7, 5], 10, [3, 7]],
		[[4, -2, 3, 3, 4], 8, [4, 4]],
		[[0, 2, 0], 0, [0, 0]],
		[[5, 9, 13, -3], 10, [13, -3]],
	];

	for (const [ints, s, output] of cases) {
		it(`should return ${output} when ints = [${ints}] and s = ${s}`, () => {
			const input = sumPairs(ints, s);
			expect(input).toEqual(output);
		});
	}
});

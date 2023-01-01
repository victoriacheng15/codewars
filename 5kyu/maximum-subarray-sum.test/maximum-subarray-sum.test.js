/* 
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
*/

/* 
note:
check kadane's algorithm
https://en.wikipedia.org/wiki/Maximum_subarray_problem
*/

const maxSequence = function (arr) {
	if (arr.length === 0) return 0;

	let [currentSum, maxSum] = [0, 0];
	for (const num of arr) {
		currentSum = Math.max(0, currentSum + num);
		maxSum = Math.max(maxSum, currentSum);
	}

	return maxSum;
};

describe("maximum subarray sum", () => {
	const cases = [
		[[], 0],
		[[-2, 1, -3, 4, -1, 2, 1, -5, 4], 6],
	];

	for (const [arr, output] of cases) {
		it(`should return ${output} when arr = [${arr}]`, () => {
			const input = maxSequence(arr);
			expect(input).toBe(output);
		});
	}
});

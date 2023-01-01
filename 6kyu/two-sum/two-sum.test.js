/* eslint-disable no-restricted-syntax */
/* 
Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

Based on: http://oj.leetcode.com/problems/two-sum/

twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
*/

// function twoSum(numbers, target) {
//   const obj = {};
//   for (let i = 0; i < numbers.length; i += 1) {
//     const current = numbers[i];
//     const diff = target - numbers[i];
//     if (diff in obj) {
//       return [obj[diff], i];
//     }
//     obj[current] = i;
//   }
// }

function twoSum(numbers, target) {
	const obj = {};
	let index = 0;
	for (const num of numbers) {
		const diff = target - num;
		if (diff in obj) {
			const current = obj[diff];
			return [current, index];
		}
		obj[num] = index;
		index += 1;
	}
}

describe("two sum", () => {
	const cases = [
		[[1, 2, 3], 4, [0, 2]],
		[[2, 7, 11, 15], 9, [0, 1]],
		[[3, 1, 2, 5], 5, [0, 2]],
		[[1234, 5678, 9012], 14690, [1, 2]],
		[[2, 2, 3], 4, [0, 1]],
		[[2, 3, 1], 4, [1, 2]],
	];

	for (const [array, target, output] of cases) {
		it(`should return ${output} when array is [${array}] with ${target}`, () => {
			expect(twoSum(array, target)).toEqual(output);
		});
	}
});

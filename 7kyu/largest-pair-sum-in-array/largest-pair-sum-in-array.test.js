/* 
Given a sequence of numbers, find the largest pair sum in the sequence.

For example

[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
Input sequence contains minimum two elements and every element is an integer.
*/

// function largestPairSum(numbers) {
//   let largestSum = 0;
//   for (let i = 0; i < numbers.length; i += 1) {
//     for (let j = i + 1; j < numbers.length; j += 1) {
//       const sum = numbers[i] + numbers[j];
//       if (largestSum < sum) {
//         largestSum = sum;
//       }
//     }
//   }
//   return largestSum;
//   // return { largestSum };
// }

function largestPairSum(numbers) {
	const sum = (a, b) => a + b;
	const sorted = numbers.sort((a, b) => a - b);
	return sorted.slice(-2).reduce(sum, 0);
}

describe("largest pair sum", () => {
	it("should return 42 (23 + 19) for [10, 14, 2, 23, 19]", () => {
		expect(largestPairSum([10, 14, 2, 23, 19])).toBe(42);
	});

	it("should return 122 (99 + 23) for [99, 2, 2, 23, 19]", () => {
		expect(largestPairSum([99, 2, 2, 23, 19])).toBe(122);
	});
});

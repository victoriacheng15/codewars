/* 
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/

// function findOdd(array) {
//   const counts = {};
//   for (const num of array) {
//     counts[num] = (counts[num] || 0) + 1;
//   }
//   const filterEven = (num) => counts[num] % 2;
//   return Object.keys(counts).filter(filterEven) * 1;
// }

// use for in method
// function findOdd(array) {
//   const counts = {};
//   for (const num of array) {
//     counts[num] = (counts[num] || 0) + 1;
//   }
//   for (const prop in counts) {
//     if (counts[prop] % 2) return +prop;
//   }
// }

function findOdd(array) {
	return array.reduce((a, b) => a ^ b);
}

describe("find odd", () => {
	it("should return the odd occoured element", () => {
		expect(findOdd([10])).toBe(10);
	});

	it("should return the odd occoured element", () => {
		expect(
			findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]),
		).toBe(5);
	});

	it("should return the odd occoured element", () => {
		expect(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])).toBe(-1);
	});
});

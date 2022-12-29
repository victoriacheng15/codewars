/* 
Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.

Assume that the input n will always be a positive integer.

Examples: (Input --> output)

2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)
*/

function sumCubes(n) {
	const arr = [...new Array(n + 1).keys()].slice(1);
	return arr.reduce((acc, curr) => acc + curr ** 3, 0);
}

describe("sum of cube", () => {
	it("should return 9 when n is 2", () => {
		expect(sumCubes(2)).toBe(9);
	});

	it("should return 36 when n is 3", () => {
		expect(sumCubes(3)).toBe(36);
	});
});

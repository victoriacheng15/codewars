/* 
In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

Your function will be tested with pre-made examples as well as random ones.

If you can, try writing it in one line of code.
*/

export function findDifference(
	a: [number, number, number],
	b: [number, number, number],
): number {
	const total = (arr: number[]) => arr.reduce((acc, val) => acc * val, 1);
	return Math.abs(total(a) - total(b));
}

describe("find difference", () => {
	type NumArr = [number, number, number];

	const cases: [NumArr, NumArr, number][] = [
		[[3, 2, 5], [1, 4, 4], 14],
		[[9, 7, 2], [5, 2, 2], 106],
		[[11, 2, 5], [1, 10, 8], 30],
	];

	for (const [a, b, output] of cases) {
		it(`should return [${output}], when a = [${a}] and b = [${b}]`, () => {
			expect(findDifference(a, b)).toBe(output);
		});
	}
});

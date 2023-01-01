/* 
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
*/

export const summation = (num: number): number => {
	let total = 0;
	for (let i = 1; i <= num; i += 1) {
		total += i;
	}

	return total;
};

// export const summation = (num: number): number => {
//   // in JS, 0 === false, try with Boolean(0)
//   return num && summation(num - 1) + num;
// };

// export const summation = (n: number) => {
//   return (n * (n + 1)) / 2;
// };

describe("summation", () => {
	const cases: [number, number][] = [
		[1, 1],
		[8, 36],
		[22, 253],
	];

	for (const [num, output] of cases) {
		it(`should return ${output} when num = ${num}`, () => {
			expect(summation(num)).toBe(output);
		});
	}
});

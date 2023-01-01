/* 
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/

// export const digitalRoot = (n: number): number => {
//   let total = 0;

//   while (n > 0 || total > 9) {
//     if (n === 0) {
//       n = total;
//       total = 0;
//     }
//     total += n % 10;
//     n = Math.floor(n / 10);
//   }

//   return total;
// };

export const digitalRoot = (n: number): number => {
	if (n < 10) return n;

	const sum = [...`${n}`].reduce((acc, num) => acc + Number(num), 0);
	return digitalRoot(sum);
};

describe("digital root", () => {
	type TestCases = number[][];

	const cases: TestCases = [
		[16, 7],
		[942, 6],
		[456, 6],
		[493193, 2],
	];

	for (const [n, output] of cases) {
		it(`should return ${output} when n = ${n}`, () => {
			expect(digitalRoot(n)).toBe(output);
		});
	}
});

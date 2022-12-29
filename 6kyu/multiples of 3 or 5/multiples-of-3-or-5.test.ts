/* 
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.
*/

// export class Challenge {
//   static solution(number: number) {
//     let sum = 0;
//     for (let i = 1; i < number; i += 1) {
//       if (i % 3 === 0 || i % 5 === 0) {
//         sum += i;
//       }
//     }
//     return sum;
//   }
// }

export class Challenge {
	static solution(number: number) {
		let [sum, num] = [0, number - 1];

		while (num > 0) {
			if (num % 3 === 0 || num % 5 === 0) {
				sum += num;
			}
			num -= 1;
		}

		return sum;
	}
}

describe("multiple of 3 or 5", () => {
	const cases: [number, number][] = [
		[10, 23],
		[20, 78],
		[200, 9168],
	];

	for (const [n, output] of cases) {
		it(`should return ${output} when n = ${n}`, () => {
			expect(Challenge.solution(n)).toBe(output);
		});
	}
});

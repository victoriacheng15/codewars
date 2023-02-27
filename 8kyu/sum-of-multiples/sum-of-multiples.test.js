import { describe, expect, it } from "vitest";

/* 
- early return for if m is equal to 0 or a negative integer
- 
*/

// function sumMul(n, m) {
//   const arr = [];
//   if (m <= 0) return 'INVALID';
//   for (let i = 1; i < m; i += 1) {
//     if (i * n < m) arr.push(i * n);
//   }
//   return arr.reduce((acc, num) => acc + num, 0);
// }

function sumMul(n, m) {
	let sum = 0;
	if (m <= 0) return "INVALID";
	for (let i = n; i < m; i += n) {
		sum += i;
	}
	return sum;
}

// function sumMul(n, m) {
//   if (m <= 0) return 'INVALID';
//   return [...new Array(m).keys()]
//     .slice(1)
//     .map((num) => {
//       if (num * n < m) return num * n;
//     })
//     .reduce((acc, num) => {
//       if (num !== undefined) acc += num;
//       return acc;
//     });
// }

describe("sum of multiply", () => {
	it("should return the sum of the array", () => {
		expect(sumMul(2, 9)).toBe(20);
	});

	it("should return INVALID if m is 0", () => {
		expect(sumMul(0, 0)).toBe("INVALID");
	});

	it("should return INVALID if m is negative", () => {
		expect(sumMul(4, -7)).toBe("INVALID");
	});
});

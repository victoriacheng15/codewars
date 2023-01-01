/* 
Find the sum of all multiples of n below m

Keep in Mind
n and m are natural numbers (positive integers)
m is excluded from the multiples
Examples
sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID"
*/

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

	it("should return invald if m is 0", () => {
		expect(sumMul(0, 0)).toBe("INVALID");
	});

	it("should return invald if m is negative", () => {
		expect(sumMul(4, -7)).toBe("INVALID");
	});
});

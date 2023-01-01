/* 
In this Kata, you will be given an integer array and your task is to return the sum of elements occupying prime-numbered indices.

The first element of the array is at index 0.

Good luck!
*/

function isPrime(num) {
	if (num <= 1) return false;
	if (num === 2) return true;
	for (let i = 2; i < num; i += 1) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
}

function total(arr) {
	return arr.reduce((acc, num, index) => {
		if (isPrime(index)) acc += num;
		return acc;
	}, 0);
}

describe("total", () => {
	it("should return sum of prime-indexed elements", () => {
		expect(total([1, 2, 3, 4])).toBe(7);
	});

	it("should return sum of prime-indexed elements", () => {
		expect(total([1, 2, 3, 4, 5, 6, 7, 8])).toBe(21);
	});

	it("should return sum of prime-indexed elements", () => {
		expect(total([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])).toBe(47);
	});
});

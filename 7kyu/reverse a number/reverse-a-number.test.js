/* 
Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

Examples
 123 ->  321
-456 -> -654
1000 ->    1
*/

function reverseNumber(n) {
	let number = n < 0 ? n * -1 : n;
	let revNum = 0;
	while (number > 0) {
		revNum = revNum * 10 + (number % 10);
		number = Math.floor(number / 10);
	}
	return n < 0 ? revNum * -1 : revNum;
}

describe("reverse number", () => {
	it("should return 321 for n = 123", () => {
		expect(reverseNumber(123)).toBe(321);
	});

	it("should return -654 for n = -456", () => {
		expect(reverseNumber(-456)).toBe(-654);
	});
});

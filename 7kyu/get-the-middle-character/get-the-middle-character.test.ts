/* 
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.
*/

export function getMiddle(s: string) {
	const mid = Math.floor(s.length / 2);
	const isEvenLength = s.length % 2 === 0;
	return isEvenLength ? `${s[mid - 1]}${s[mid]}` : `${s[mid]}`;
}

describe("get middle", () => {
	type TestCases = string[][];

	const cases: TestCases = [
		["test", "es"],
		["testing", "t"],
		["middle", "dd"],
		["A", "A"],
	];

	for (const [s, output] of cases) {
		it(`should return ${output} when s = ${s}`, () => {
			expect(getMiddle(s)).toBe(output);
		});
	}
});

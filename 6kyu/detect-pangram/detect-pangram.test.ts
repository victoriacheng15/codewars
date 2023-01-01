/* 
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

export const isPangram = (phrase: string): boolean => {
	const regex = /[\W\d]/g;
	const map = new Map();
	const str = phrase.replace(regex, "").toLowerCase();

	for (const char of str) {
		map.set(char, 1);
	}

	return map.size === 26;
};

describe("detect pangram", () => {
	type TestCases = [string, boolean][];

	const cases: TestCases = [
		["The quick brown fox jumps over the lazy dog.", true],
		["This is not a pangram.", false],
	];

	for (const [phrase, output] of cases) {
		it(`should return ${output} when phrase = ${phrase}`, () => {
			expect(isPangram(phrase)).toBe(output);
		});
	}
});

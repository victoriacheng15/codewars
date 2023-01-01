/* 
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

export function duplicateCount(text: string): number {
	if (text === "") {
		return 0;
	}
	let total = 0;
	const counts = new Map();

	for (const char of text.toLowerCase()) {
		counts.set(char, counts.get(char) + 1 || 1);
	}

	for (const count of counts.values()) {
		if (count > 1) {
			total += 1;
		}
	}

	return total;
}

describe("counting duplicate", () => {
	type TestCases = [string, number][];
	const cases: TestCases = [
		["", 0],
		["abcde", 0],
		["aabbcde", 2],
		["aabBcde", 2],
		["Indivisibility", 1],
	];

	for (const [text, output] of cases) {
		it(`should return ${output} for ${text}`, () => {
			const count = duplicateCount(text);
			expect(count).toBe(output);
		});
	}
});

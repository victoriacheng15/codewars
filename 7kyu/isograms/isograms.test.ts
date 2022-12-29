/* 
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)
*/

export function isIsogram(str: string): boolean {
	const map = new Map();

	for (const char of str.toLowerCase()) {
		if (map.has(char)) {
			return false;
		}

		map.set(char, 1);
	}

	return true;
}

describe("isograms", () => {
	const cases: [string, boolean][] = [
		["Dermatoglyphics", true],
		["isogram", true],
		["aba", false],
		["moOse", false],
	];

	for (const [str, output] of cases) {
		it(`should return ${output} when str = ${str}`, () => {
			expect(isIsogram(str)).toBe(output);
		});
	}
});

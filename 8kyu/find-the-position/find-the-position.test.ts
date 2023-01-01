/* 
When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"
*/

export function position(alphabet: string): string {
	const pos = alphabet.charCodeAt(0) - 96;
	return `Position of alphabet: ${pos}`;
}

describe("find the position of alphabet", () => {
	const cases = [
		["a", "Position of alphabet: 1"],
		["z", "Position of alphabet: 26"],
		["e", "Position of alphabet: 5"],
	];

	for (const [alphabet, output] of cases) {
		it(`should return ${output} when alphabet = ${alphabet}`, () => {
			expect(position(alphabet)).toBe(output);
		});
	}
});

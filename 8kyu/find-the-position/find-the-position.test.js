import { describe, it, expect } from "vitest";

function position(letter){
  const pos = letter.charCodeAt(0) - 96;
  return `Position of alphabet: ${pos}`
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

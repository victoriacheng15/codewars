/* 
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

export class Kata {
	static getCount(str: string): number {
		const vowelList = "aeiou".split("");
		return [...str].filter((char) => vowelList.includes(char)).length;
	}
}

describe("vowel count", () => {
	const cases: [string, number][] = [
		["abracadabra", 5],
		["abracadabra", 5],
	];

	for (const [str, output] of cases) {
		it(`should return ${output} when n = ${str}`, () => {
			expect(Kata.getCount(str)).toBe(output);
		});
	}
});

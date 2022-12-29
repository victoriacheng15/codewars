/* 
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/

export class Kata {
	static disemvowel(str: string): string {
		const vowels = /[aeiou]/gi;
		return str.replace(vowels, "");
	}
}

describe("disemvowel trolls", () => {
	type TestCases = string[][];

	const cases: TestCases = [
		["This website is for losers LOL!", "Ths wbst s fr lsrs LL!"],
		[
			"No offense but,\nYour writing is among the worst I've ever read",
			"N ffns bt,\nYr wrtng s mng th wrst 'v vr rd",
		],
	];

	for (const [str, output] of cases) {
		it(`should return ${output} when str = ${str}`, () => {
			const input = Kata.disemvowel(str);
			expect(input).toBe(output);
		});
	}
});

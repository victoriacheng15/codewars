import { describe, expect, it } from "vitest";
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

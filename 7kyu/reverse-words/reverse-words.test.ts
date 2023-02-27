import { describe, expect, it } from "vitest";

// export function reverseWords(str: string): string {
// 	const arr = str.split(" ");
// 	const revWord = (word: string) =>
// 		[...word].reduce((output, char) => {
// 			output = char + output;
// 			return output;
// 		}, "");

// 	return arr.map(revWord).join(" ");
// }

export function reverseWords(str: string): string {
	const wordArr = str.split(" ");

	return wordArr.reduce((output, word, index) => {
		const revWord = word.split("").reverse().join("");

		return index === 0 ? output + revWord : `${output} ${revWord}`;
	}, "");
}

describe("reverse word", () => {
	const cases: [string, string][] = [
		["This is an example!", "sihT si na !elpmaxe"],
		[
			"The quick brown fox jumps over the lazy dog.",
			"ehT kciuq nworb xof spmuj revo eht yzal .god",
		],
		["double  spaced  words", "elbuod  decaps  sdrow"],
	];

	for (const [str, output] of cases) {
		it(`should return ${output} when str = ${str}`, () => {
			const input = reverseWords(str);
			expect(input).toBe(output);
		});
	}
});

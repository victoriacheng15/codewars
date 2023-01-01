/* 
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

export function reverseWords(str: string): string {
	const arr = str.split(" ");
	const revWord = (word: string) =>
		[...word].reduce((output, char) => {
			output = char + output;
			return output;
		}, "");

	return arr.map(revWord).join(" ");
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

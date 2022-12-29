/* 
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test" 
*/

export function spinWords(words: string): string {
	const arr = words.split(" ");
	const reverse = (word: string) => {
		return [...word].reduce((output, char) => {
			output = char + output;
			return output;
		}, "");
	};

	const formatWords = (word: string) =>
		word.length > 4 ? reverse(word) : word;

	return arr.map(formatWords).join(" ");
}

describe("spin words", () => {
	const cases: string[][] = [
		["Hey fellow warriors", "Hey wollef sroirraw"],
		["This is a test", "This is a test"],
		["This is another test", "This is rehtona test"],
	];

	for (const [words, output] of cases) {
		it(`should return ${output} when words = ${words}`, () => {
			expect(spinWords(words)).toBe(output);
		});
	}
});

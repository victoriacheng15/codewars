/* 
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/

// function duplicateEncode(word) {
//   const lowerWord = word.toLowerCase();
//   const countMap = {};

//   for (const letter of lowerWord) {
//     countMap[letter] = (countMap[letter] || 0) + 1;
//   }

//   const mapped = (char) => (countMap[char] === 1 ? '(' : ')');

//   return [...lowerWord].map(mapped).join('');
// }

function duplicateEncode(word) {
	const lowerWord = word.toLowerCase();
	const charCount = [...lowerWord].reduce((acc, letter) => {
		acc[letter] = (acc[letter] || 0) + 1;
		return acc;
	}, {});

	return [...lowerWord]
		.map((char) => (charCount[char] === 1 ? "(" : ")"))
		.join("");
}

describe("duplicate encode", () => {
	const cases = [
		["din", "((("],
		["recede", "()()()"],
		["Success", ")())())"],
		["(( @", "))(("],
	];

	for (const [word, output] of cases) {
		it(`should return ${output} when the word is ${word}`, () => {
			const input = duplicateEncode(word);
			expect(input).toBe(output);
		});
	}
});

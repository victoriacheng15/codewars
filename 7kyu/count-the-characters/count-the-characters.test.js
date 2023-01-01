/* 
The goal of this kata is to write a function that takes two inputs: a string and a character. The function will count the number of times that character appears in the string. The count is case insensitive.

For example:

countChar("fizzbuzz","z") => 4
countChar("Fancy fifth fly aloof","f") => 5
The character can be any alphanumeric character.
*/

// function countChar(string, char) {
//   const lowString = string.toLowerCase();
//   const lowChar = char.toLowerCase();
//   return [...lowString].reduce((acc, letter) => {
//     if (letter === lowChar) acc += 1;
//     return acc;
//   }, 0);
// }

function countChar(string, char) {
	const regex = new RegExp(char, "ig");
	return (string.match(regex) || []).length;
}

describe("count the character", () => {
	const cases = [
		["fizzbuzz", "z", 4],
		["Fancy fifth fly aloof", "f", 5],
		["zveFFD8fdJObXklIHtTl4h6DpJ3Ebj67moJJ", "Z", 1],
	];

	for (const [string, char, output] of cases) {
		it(`should return ${output} when string = ${string} and char = ${char}`, () => {
			const input = countChar(string, char);
			expect(input).toBe(output);
		});
	}
});

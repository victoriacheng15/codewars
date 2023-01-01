/* 
Write a function that receives two strings and returns n, where n is equal to the number of characters we should shift the first string forward to match the second. The check should be case sensitive.

For instance, take the strings "fatigue" and "tiguefa". In this case, the first string has been rotated 5 characters forward to produce the second string, so 5 would be returned.

If the second string isn't a valid rotation of the first string, the method returns -1.
Examples:
"coffee", "eecoff" => 2
"eecoff", "coffee" => 4
"moose", "Moose" => -1
"isn't", "'tisn" => 2
"Esham", "Esham" => 0
"dog", "god" => -1
*/

function shiftedDiff(first, second, count = 0) {
	if (first === second) return count;
	if (count > first.length) return -1;

	const shiftWord = first[first.length - 1] + first.slice(0, first.length - 1);
	return shiftedDiff(shiftWord, second, count + 1);
}

// function shiftedDiff(first, second) {
//   return first.length === second.length ? (second + second).indexOf(first) : -1;
// }

describe("shifted diff", () => {
	const cases = [
		["coffee", "eecoff", 2],
		["eecoff", "coffee", 4],
		["moose", "Moose", -1],
		["isn't", "'tisn", 2],
		["Esham", "Esham", 0],
		[" ", " ", 0],
		["  ", " ", -1],
		["dog", "god", -1],
	];

	for (const [first, second, output] of cases) {
		it(`should return ${output} when first = ${first} and second = ${second}`, () => {
			const input = shiftedDiff(first, second);
			expect(input).toBe(output);
		});
	}
});

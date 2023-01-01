/* 
Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)

Note: 
0 is considered to be an even index. 
All input strings are valid with no spaces
input: 'CodeWars'
output 'CdWr oeas'

S[0] = 'C'
S[1] = 'o'
S[2] = 'd'
S[3] = 'e'
S[4] = 'W'
S[5] = 'a'
S[6] = 'r'
S[7] = 's'
Even indices 0, 2, 4, 6, so we have 'CdWr' as the first group
odd ones are 1, 3, 5, 7, so the second group is 'oeas'
And the final string to return is 'Cdwr oeas'
*/

/* 
input string 
- set 2 arrays for even and odd indexes
- loop through string index
- use module operation to check even and odd
- join arrays wit space
output sorted string (even space odd)
*/

function sortMyString(string) {
	let [even, odd] = ["", ""];
	for (let i = 0; i < string.length; i += 1) {
		const current = string[i];
		i % 2 ? (odd += current) : (even += current);
	}
	return `${even} ${odd}`;
}

describe("odd even string sort", () => {
	it("should return sorted string", () => {
		expect(sortMyString("CodeWars")).toBe("CdWr oeas");
	});

	it("should return sorted string", () => {
		expect(sortMyString("YCOLUE'VREER")).toBe("YOU'RE CLEVER");
	});
});

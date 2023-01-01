/* 
Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

For example:

"abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
"a"             --> "invalid string"
*/

function evenChars(string) {
	const array = [];
	if (string.length <= 2 || string.length >= 100) return "invalid string";
	for (let i = 0; i < string.length; i += 1) {
		if (i % 2) array.push(string[i]);
	}
	return array;
}

describe("status", () => {
	it("should return 2", () => {
		expect(evenChars("1234")).toEqual(["2", "4"]);
	});

	it("should return 2", () => {
		expect(evenChars(";;;--")).toEqual([";", "-"]);
	});
});
